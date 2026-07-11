/** Lightweight service catalogue for navigation and enquiry context (no pricing). */
export type ServiceCategory =
  | "Training"
  | "Consultancy"
  | "Research"
  | "Analytics";

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
};

export const services: Service[] = [
  {
    id: "training",
    name: "Training Programmes",
    category: "Training",
    description:
      "Workshops on research methodology, SPSS, R Studio, Jamovi, SmartPLS, academic writing, and more.",
  },
  {
    id: "consultancy",
    name: "Research Consultancy",
    category: "Consultancy",
    description:
      "Questionnaire design, data analysis, SEM/PLS-SEM, reporting, and publication support.",
  },
  {
    id: "research",
    name: "Applied Research",
    category: "Research",
    description:
      "Multidisciplinary research support from design through analysis and insight delivery.",
  },
  {
    id: "dashboard",
    name: "Dashboard Development",
    category: "Analytics",
    description:
      "Interactive dashboards and visual analytics for academic and corporate research data.",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
