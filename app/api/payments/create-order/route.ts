import { NextResponse } from "next/server";
import { createOrderSchema } from "@/lib/booking-schema";
import { getService } from "@/lib/services";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = createOrderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid booking details", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Price is looked up server-side from the service catalogue so the
  // client can never tamper with the amount charged.
  const service = getService(parsed.data.serviceId);
  if (!service) {
    return NextResponse.json({ error: "Unknown service" }, { status: 400 });
  }

  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return NextResponse.json(
      { error: "Payment gateway is not configured. Please call us to book." },
      { status: 503 }
    );
  }

  const amountPaise = service.price * 100;
  const receipt = `cares_${Date.now()}`;

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
    },
    body: JSON.stringify({
      amount: amountPaise,
      currency: "INR",
      receipt,
      notes: {
        serviceId: service.id,
        serviceName: service.name,
        customerName: parsed.data.booking.name,
        customerEmail: parsed.data.booking.email,
        customerPhone: parsed.data.booking.phone,
        institution: parsed.data.booking.institution,
        projectTitle: parsed.data.booking.projectTitle,
      },
    }),
  });

  if (!res.ok) {
    console.error("Razorpay order creation failed", res.status, await res.text());
    return NextResponse.json(
      { error: "Could not initiate payment. Please try again." },
      { status: 502 }
    );
  }

  const order = (await res.json()) as { id: string; amount: number; currency: string };

  return NextResponse.json({
    orderId: receipt,
    razorpayOrderId: order.id,
    amount: order.amount,
    currency: order.currency,
  });
}
