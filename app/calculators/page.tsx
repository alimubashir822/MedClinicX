import { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Clinical Calculators & Healthcare Estimators | Med Clinic X",
  description:
    "Explore Med Clinic X's clinical and treatment calculators: A1C to eAG, Anion Gap, QTc Bazett/Fridericia, Glasgow Coma Scale, Metabolic Age, Baby Weight, Baby Age, Lean Body Mass, Dental Implant, and Invisalign cost estimators.",
  keywords: [
    "clinical calculators",
    "medical calculators",
    "A1C calculator",
    "Glasgow Coma Scale Calculator",
    "GCS score calculator",
    "QTc calculator bazett",
    "anion gap calculator acidosis",
    "metabolic age calculator",
    "baby weight calculator WHO",
    "baby age calculator landmarks",
    "lean body mass calculator boer",
    "hydration calculator",
    "dental implant cost estimator",
    "Invisalign Cost Calculator",
    "Invisalign treatment cost estimator",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators",
  },
  openGraph: {
    title: "Clinical Calculators & Healthcare Estimators | Med Clinic X",
    description:
      "Clinical diagnostic tools, corrected parameters generators, consciousness scale checkers, and regional dental procedure cost calculators designed by Med Clinic X.",
    url: "https://medclinicx.com/calculators",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X Clinical Calculators",
      },
    ],
  },
};

export default function CalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Calculator", item: "https://medclinicx.com/calculators" },
    ],
  };

  const calculatorListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Med Clinic X Medical & Cost Calculators",
    description:
      "Complete directory of clinical assessment calculators and procedure cost tools designed by Med Clinic X.",
    url: "https://medclinicx.com/calculators",
    numberOfItems: 23,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "A1C Calculator",
          url: "https://medclinicx.com/calculators/a1c-calculator",
          description: "Estimate average blood glucose level (eAG) from A1C percentage or calculate A1C from eAG.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Water Intake Calculator",
          url: "https://medclinicx.com/calculators/water-intake-calculator",
          description: "Calculate personalized daily hydration requirement based on weight, activity level, exercise duration, and climate.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Lean Body Mass Calculator",
          url: "https://medclinicx.com/calculators/lean-body-mass-calculator",
          description: "Estimate lean body mass and body fat percentage utilizing Boer, James, or Hume equations.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Metabolic Age Calculator",
          url: "https://medclinicx.com/calculators/metabolic-age-calculator",
          description: "Estimate biological metabolic age using metabolic indices and lifestyle habits.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Baby Weight Calculator",
          url: "https://medclinicx.com/calculators/baby-weight-calculator",
          description: "Determine baby growth percentiles relative to WHO clinical benchmarks.",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Baby Age Calculator",
          url: "https://medclinicx.com/calculators/baby-age-calculator",
          description: "Calculate baby age down to the day and track CDC development milestones.",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Service",
          name: "Glasgow Coma Scale Calculator",
          url: "https://medclinicx.com/calculators/glasgow-coma-scale-calculator",
          description: "Calculate neurological Glasgow Coma Scale score based on eye, verbal, and motor responses.",
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "Service",
          name: "QTc Calculator",
          url: "https://medclinicx.com/calculators/qtc-calculator",
          description: "Calculate corrected QT interval (QTc) from ECG metrics using Bazett, Fridericia, Framingham, or Hodges formulas.",
        },
      },
      {
        "@type": "ListItem",
        position: 9,
        item: {
          "@type": "Service",
          name: "Anion Gap Calculator",
          url: "https://medclinicx.com/calculators/anion-gap-calculator",
          description: "Calculate serum anion gap adjusted for hypoalbuminemia to assist metabolic acidosis screening.",
        },
      },
      {
        "@type": "ListItem",
        position: 10,
        item: {
          "@type": "Service",
          name: "Dental Implant Cost Calculator",
          url: "https://medclinicx.com/calculators/dental-implant-cost-calculator",
          description: "Estimate total orthodontic implant procedure costs based on location and restoration options.",
        },
      },
      {
        "@type": "ListItem",
        position: 11,
        item: {
          "@type": "Service",
          name: "Invisalign Cost Calculator",
          url: "https://medclinicx.com/calculators/invisalign-cost-calculator",
          description: "Estimate the potential cost of Invisalign treatment based on treatment complexity, duration, and dental needs.",
        },
      },
      {
        "@type": "ListItem",
        position: 12,
        item: {
          "@type": "Service",
          name: "CKD Calculator",
          url: "https://medclinicx.com/calculators/ckd-calculator/",
          description: "Estimate kidney function and eGFR based on creatinine level, age, gender, and clinical formulas.",
        },
      },
      {
        "@type": "ListItem",
        position: 13,
        item: {
          "@type": "Service",
          name: "IV Drip Rate Calculator",
          url: "https://medclinicx.com/calculators/iv-drip-rate-calculator/",
          description: "Calculate flow rate in mL/hour, drops per minute (gtt/min), and infusion duration.",
        },
      },
      {
        "@type": "ListItem",
        position: 14,
        item: {
          "@type": "Service",
          name: "CPT Calculator",
          url: "https://medclinicx.com/calculators/cpt-calculator/",
          description: "Understand CPT procedure codes and billing estimates using Work, Practice Expense, and Malpractice RVUs.",
        },
      },
      {
        "@type": "ListItem",
        position: 15,
        item: {
          "@type": "Service",
          name: "Fat Intake Calculator",
          url: "https://medclinicx.com/calculators/fat-intake-calculator/",
          description: "Estimate recommended daily fat intake in grams and calories based on dietary targets, goals, and TDEE calorie needs.",
        },
      },
      {
        "@type": "ListItem",
        position: 16,
        item: {
          "@type": "Service",
          name: "Medication Dosage Calculator",
          url: "https://medclinicx.com/calculators/medication-dosage-calculator/",
          description: "Calculate medication dosage volumes or tablet quantities based on desired dose, body weight, and available concentration.",
        },
      },
      {
        "@type": "ListItem",
        position: 17,
        item: {
          "@type": "Service",
          name: "HbA1c Calculator",
          url: "https://medclinicx.com/calculators/hba1c-calculator/",
          description: "Convert HbA1c percentage to estimated average glucose (eAG) and classify blood sugar control ranges.",
        },
      },
      {
        "@type": "ListItem",
        position: 18,
        item: {
          "@type": "Service",
          name: "Pediatric Dosage Calculator",
          url: "https://medclinicx.com/calculators/pediatric-dosage-calculator/",
          description: "Calculate safe pediatric medication doses based on body weight, concentration, and prescribed frequency rates.",
        },
      },
      {
        "@type": "ListItem",
        position: 19,
        item: {
          "@type": "Service",
          name: "Fetal Growth Calculator",
          url: "https://medclinicx.com/calculators/fetal-growth-calculator/",
          description: "Estimate fetal size by week of pregnancy and calculate estimated fetal weight (EFW) using ultrasound biometrics.",
        },
      },
      {
        "@type": "ListItem",
        position: 20,
        item: {
          "@type": "Service",
          name: "IV Flow Rate Calculator",
          url: "https://medclinicx.com/calculators/iv-flow-rate-calculator/",
          description: "Calculate IV infusion flow rate in mL/hour, drops per minute (gtt/min), and total duration to ensure accurate fluid and medication administration.",
        },
      },
      {
        "@type": "ListItem",
        position: 21,
        item: {
          "@type": "Service",
          name: "Baby Growth Calculator",
          url: "https://medclinicx.com/calculators/baby-growth-calculator/",
          description: "Track your baby’s growth, height, weight, and developmental milestones to understand healthy child growth patterns easily.",
        },
      },
      {
        "@type": "ListItem",
        position: 22,
        item: {
          "@type": "Service",
          name: "Infusion Calculator",
          url: "https://medclinicx.com/calculators/infusion-calculator/",
          description: "Calculate IV infusion rate, flow speed, and drip rate (gtt/min) for both standard fluids and patient weight-based drug doses.",
        },
      },
      {
        "@type": "ListItem",
        position: 23,
        item: {
          "@type": "Service",
          name: "Stress Calculator",
          url: "https://medclinicx.com/calculators/stress-calculator/",
          description: "Estimate your stress level based on lifestyle, workload, emotional factors, physical activity, daily pressure, and social support.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorListSchema) }}
      />
      <div className="pt-24 md:pt-28">
        <CalculatorClient />
      </div>
    </>
  );
}
