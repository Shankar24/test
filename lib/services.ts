export type Service = {
  id: string;
  name: string;
  category: "Consultation" | "Data Analysis" | "Reporting" | "Training";
  turnaround: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "consultation",
    name: "Expert Consultation Call",
    category: "Consultation",
    turnaround: "45 minutes",
    description:
      "One-on-one session with a CARES analyst to discuss your research design, questionnaire, or data challenges.",
    features: [
      "Research design guidance",
      "Methodology recommendations",
      "Q&A on tools (SPSS, R, Excel)",
    ],
  },
  {
    id: "questionnaire-review",
    name: "Questionnaire Design Review",
    category: "Consultation",
    turnaround: "3–5 business days",
    description:
      "Professional review of your survey instrument for clarity, bias, scale reliability, and academic standards.",
    features: [
      "Item-by-item feedback",
      "Scale & wording improvements",
      "Reliability considerations",
    ],
  },
  {
    id: "data-analysis-basic",
    name: "Data Analysis — Basic",
    category: "Data Analysis",
    turnaround: "5–7 business days",
    description:
      "Descriptive statistics, reliability analysis (Cronbach's alpha), and basic visualizations for one dataset.",
    features: [
      "Descriptive statistics",
      "Cronbach's alpha / reliability",
      "Charts & tables",
    ],
  },
  {
    id: "data-analysis-advanced",
    name: "Data Analysis — Advanced",
    category: "Data Analysis",
    turnaround: "7–10 business days",
    description:
      "Inferential statistics, regression, factor analysis, group comparisons, and hypothesis testing.",
    features: [
      "T-tests, ANOVA, chi-square",
      "Regression & correlation",
      "Factor / dimension analysis",
    ],
  },
  {
    id: "dashboard-reporting",
    name: "Dashboard & Reporting",
    category: "Reporting",
    turnaround: "7–10 business days",
    description:
      "Interactive dashboard and publication-ready reports from your questionnaire data.",
    features: ["Interactive dashboard", "Exportable charts", "Executive summary"],
  },
  {
    id: "training-workshop",
    name: "Training Workshop",
    category: "Training",
    turnaround: "1–3 days",
    description:
      "Pan-India workshops on research methods, SPSS, R Studio, data analysis, and academic writing.",
    features: [
      "Hands-on practical sessions",
      "Course materials included",
      "Certificate of completion",
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
