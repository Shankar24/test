import { z } from "zod";

export const enquirySchema = z.object({
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
  service: z.string().trim().min(1, "Please select the service you need"),
  description: z
    .string()
    .trim()
    .min(10, "Please describe your requirement in at least a few words")
    .max(5000),
  deadline: z.string().trim().max(30).optional().or(z.literal("")),
});

export type Enquiry = z.infer<typeof enquirySchema>;
