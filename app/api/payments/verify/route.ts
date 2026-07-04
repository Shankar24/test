import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { verifyPaymentSchema } from "@/lib/booking-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = verifyPaymentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payment details" },
      { status: 400 }
    );
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    return NextResponse.json(
      { error: "Payment gateway is not configured" },
      { status: 503 }
    );
  }

  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = parsed.data;

  const expected = createHmac("sha256", keySecret)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");

  const expectedBuf = Buffer.from(expected, "utf8");
  const receivedBuf = Buffer.from(razorpaySignature, "utf8");
  const valid =
    expectedBuf.length === receivedBuf.length &&
    timingSafeEqual(expectedBuf, receivedBuf);

  if (!valid) {
    return NextResponse.json(
      { error: "Payment verification failed. If you were charged, contact us." },
      { status: 400 }
    );
  }

  return NextResponse.json({ verified: true, orderId: parsed.data.orderId });
}
