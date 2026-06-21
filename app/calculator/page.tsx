import { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Clinical Calculators & Healthcare Estimators | Med Clinic X",
  description:
    "Explore Med Clinic X's clinical and treatment calculators: A1C to eAG converters, Anion Gap calculator, QTc Bazett/Fridericia calculator, Lean Body Mass estimator, and Dental Implant cost calculator.",
  keywords: [
    "clinical calculators",
    "medical calculators",
    "A1C calculator",
    "QTc calculator bazett",
    "anion gap calculator acidosis",
    "lean body mass calculator boer",
    "hydration calculator",
    "dental implant cost estimator",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator",
  },
  openGraph: {
    title: "Clinical Calculators & Healthcare Estimators | Med Clinic X",
    description:
      "Clinical diagnostic tools, corrected parameters generators, and regional dental procedure cost calculators designed by Med Clinic X.",
    url: "https://medclinicx.com/calculator",
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
      { "@type": "ListItem", position: 2, name: "Calculator", item: "https://medclinicx.com/calculator" },
    ],
  };

  const calculatorListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Med Clinic X Medical & Cost Calculators",
    description:
      "Complete directory of clinical assessment calculators and procedure cost tools designed by Med Clinic X.",
    url: "https://medclinicx.com/calculator",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "A1C Calculator",
          url: "https://medclinicx.com/a1c-calculator",
          description: "Estimate average blood glucose level (eAG) from A1C percentage or calculate A1C from eAG.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Water Intake Calculator",
          url: "https://medclinicx.com/water-calculator",
          description: "Calculate personalized daily hydration requirement based on weight, activity level, exercise duration, and climate.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Lean Body Mass Calculator",
          url: "https://medclinicx.com/lean-body-mass-calculator",
          description: "Estimate lean body mass and body fat percentage utilizing Boer, James, or Hume equations.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "QTc Calculator",
          url: "https://medclinicx.com/qtc-calculator",
          description: "Calculate corrected QT interval (QTc) from ECG metrics using Bazett, Fridericia, Framingham, or Hodges formulas.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Anion Gap Calculator",
          url: "https://medclinicx.com/anion-gap-calculator",
          description: "Calculate serum anion gap adjusted for hypoalbuminemia to assist metabolic acidosis screening.",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Dental Implant Cost Calculator",
          url: "https://medclinicx.com/dental-implant-cost-calculator",
          description: "Estimate total orthodontic implant procedure costs based on location and restoration options.",
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
