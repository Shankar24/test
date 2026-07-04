import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(254),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d][\d\s\-()]+$/, "Please enter a valid phone number"),
  institution: z
    .string()
    .trim()
    .min(2, "Please enter your institution or organization")
    .max(200),
  projectTitle: z.string().trim().min(3, "Please enter a project title").max(200),
  description: z
    .string()
    .trim()
    .min(10, "Please describe your project in at least a few words")
    .max(5000),
  deadline: z.string().trim().max(30).optional().or(z.literal("")),
});

export type Booking = z.infer<typeof bookingSchema>;

export const createOrderSchema = z.object({
  serviceId: z.string().min(1),
  booking: bookingSchema,
});

export const verifyPaymentSchema = z.object({
  orderId: z.string().min(1),
  razorpayOrderId: z.string().min(1),
  razorpayPaymentId: z.string().min(1),
  razorpaySignature: z.string().min(1),
});
