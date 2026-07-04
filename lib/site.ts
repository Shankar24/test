export const site = {
  name: "CARES",
  fullName: "Center for Applied Research and Educational Services",
  tagline: "Training · Consultancy · Research",
  description:
    "Expert consultancy in questionnaire design, data analysis, research reporting, and pan-India training for academia and industry.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cares-platform-blue.vercel.app",
  phone: "+91 99018 57466",
  phoneHref: "+919901857466",
  email: "info@caresindia.co.in",
  address:
    "Golden Square, 1101, 3rd Floor, 24th Main, JP Nagar 1st Phase, Bangalore - 560078",
  stats: [
    { value: "150+", label: "Trainings Conducted" },
    { value: "20,000+", label: "Participants Trained" },
    { value: "300+", label: "Happy Clients" },
    { value: "Pan India", label: "Service Reach" },
  ],
} as const;
