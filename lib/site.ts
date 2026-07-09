export const site = {
  name: "CARES",
  fullName: "Center for Applied Research and Educational Services",
  tagline: "Training · Consultancy · Research",
  description:
    "CARES helps scholars, faculty, and institutions design stronger studies, analyse data correctly, and communicate findings with confidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shankar24.github.io/test",
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
