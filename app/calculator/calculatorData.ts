export interface CalculatorItem {
  id: string;
  title: string;
  category: "Cardiovascular & Vitals" | "Metabolic & Lab" | "Body Composition & Hydration" | "Financial & Pricing";
  iconName: "Activity" | "HeartPulse" | "Calculator" | "Users" | "Droplet" | "DollarSign" | "Smile";
  desc: string;
  href: string;
  badge?: string;
  features: string[];
  image: string;
  stat: string;
  statLabel: string;
}

export const calculatorData: CalculatorItem[] = [
  {
    id: "a1c-calculator",
    title: "A1C Calculator",
    category: "Metabolic & Lab",
    iconName: "Calculator",
    desc: "Estimate average blood glucose level (eAG) from A1C percentage or calculate A1C from eAG using standard clinical formulas.",
    href: "/calculator/a1c-calculator",
    badge: "Clinical Standard",
    features: ["A1C to eAG conversion", "eAG to A1C conversion", "ADA aligned glycemic targets"],
    image: "/llm_healthcare_hero.png",
    stat: "eAG",
    statLabel: "Glycemic Index Estimator",
  },
  {
    id: "water-calculator",
    title: "Water Intake Calculator",
    category: "Body Composition & Hydration",
    iconName: "Droplet",
    desc: "Calculate your personalized daily hydration requirement based on weight, daily activity level, exercise duration, and climate offsets.",
    href: "/calculator/water-calculator",
    badge: "Hydration Guide",
    features: ["35 mL/kg baseline index", "Exercise and climate offsets", "Hydration entry logging companion"],
    image: "/blog_predictive_scheduling.png",
    stat: "Hydration",
    statLabel: "Daily Fluid Target",
  },
  {
    id: "lean-body-mass-calculator",
    title: "Lean Body Mass Calculator",
    category: "Body Composition & Hydration",
    iconName: "Users",
    desc: "Estimate your lean body mass and body fat percentage utilizing Boer, James, or Hume clinical equations.",
    href: "/calculator/lean-body-mass-calculator",
    badge: "Body Composition",
    features: ["Boer, James, and Hume formulas", "Metric and Imperial support", "Lean mass percentage tracking"],
    image: "/hw_patient_journey.png",
    stat: "LBM %",
    statLabel: "Lean Mass Percentage",
  },
  {
    id: "qtc-calculator",
    title: "QTc Calculator (Bazett, Fridericia & More)",
    category: "Cardiovascular & Vitals",
    iconName: "HeartPulse",
    desc: "Calculate the corrected QT interval (QTc) from ECG metrics using Bazett, Fridericia, Framingham, and Hodges clinical formulas.",
    href: "/calculator/qtc-calculator",
    badge: "Cardiology",
    features: ["Bazett/Fridericia/Framingham/Hodges", "Arrhythmia risk screening", "ECG QT interval indexer"],
    image: "/service_telemedicine.png",
    stat: "QTc",
    statLabel: "Corrected QT Interval",
  },
  {
    id: "anion-gap-calculator",
    title: "Anion Gap Calculator",
    category: "Metabolic & Lab",
    iconName: "Activity",
    desc: "Calculate serum anion gap to assist clinicians in screening for potential metabolic acidosis and underlying causes.",
    href: "/calculator/anion-gap-calculator",
    badge: "Lab Reference",
    features: ["Serum anion gap index", "Hypoalbuminemia adjustments", "Metabolic acidosis screening"],
    image: "/blog_hipaa_datastore.png",
    stat: "Serum AG",
    statLabel: "Anion Gap Index",
  },
  {
    id: "dental-implant-cost-calculator",
    title: "Dental Implant Cost Calculator",
    category: "Financial & Pricing",
    iconName: "DollarSign",
    desc: "Estimate total orthodontic implant procedures expenses based on regional cost indexing, restoration types, and bone grafting options.",
    href: "/calculator/dental-implant-cost-calculator",
    badge: "Treatment Pricing",
    features: ["Location-based cost adjustments", "Single crown to All-on-6 setups", "Bone grafting and extraction options"],
    image: "/service_patient_portal.png",
    stat: "Cost Est.",
    statLabel: "Orthodontic Cost Estimator",
  }
];
