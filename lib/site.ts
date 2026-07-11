export const site = {
  name: "CARES",
  fullName: "Center for Applied Research and Educational Services",
  tagline: "Training · Consultancy · Research",
  description:
    "CARES provides research methodology training, data analysis, PLS-SEM, dashboards, questionnaire design, academic writing, and consultancy services for scholars, institutions, NGOs, and businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cares-platform-blue.vercel.app",
  phone: "+91 9901857466",
  phoneHref: "+919901857466",
  email: "info@caresindia.co.in",
  address:
    "Golden Square, 1101, 3rd Floor, 24th Main, JP Nagar 1st Phase, Bangalore - 560078",
  stats: [
    { value: "150+", label: "Trainings Delivered", count: 150, suffix: "+" },
    { value: "20,000+", label: "Participants Trained", count: 20000, suffix: "+" },
    { value: "300+", label: "Client Base", count: 300, suffix: "+" },
    {
      value: "4.77",
      label: "Average Training Rating",
      count: 4.77,
      suffix: "",
      decimals: 2,
    },
    {
      value: "4.76",
      label: "Consultancy Rating",
      count: 4.76,
      suffix: "",
      decimals: 2,
    },
  ],
  institutions: [
    "National Institute of Design",
    "Central University, Kasargode",
    "Nirma University",
    "PES University",
    "VIT Vellore",
    "PDPU Gandhinagar",
  ],
} as const;
