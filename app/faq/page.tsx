import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ & Support | Med Clinic X",
  description:
    "Find answers to common questions about the Med Clinic X AI healthcare platform — covering AI features, HIPAA compliance, EHR integrations, pricing, and implementation timelines for clinics and hospitals.",
  keywords: [
    "Med Clinic X FAQ",
    "healthcare AI platform questions",
    "patient portal FAQ",
    "HIPAA compliant software questions",
    "healthcare software pricing",
    "EHR integration questions",
    "AI medical receptionist FAQ",
  ],
  alternates: {
    canonical: "https://medclinicx.com/faq",
  },
  openGraph: {
    title: "FAQ — Frequently Asked Questions About Med Clinic X",
    description:
      "Answers to common questions about AI features, HIPAA compliance, EHR integrations, pricing, and implementation for the Med Clinic X platform.",
    url: "https://medclinicx.com/faq",
  },
};

// All FAQ data extracted for JSON-LD schema generation
const allFAQs = [
  {
    q: "What exactly is Med Clinic X?",
    a: "Med Clinic X is an AI-powered patient portal platform built for healthcare clinics. It transforms the typical records store portal into an intelligent health companion with features like AI document understanding, a visual health timeline, smart appointment booking, and an AI health companion.",
  },
  {
    q: "Is this a white-label product or a custom build?",
    a: "Both. We offer a configurable platform that clinics can deploy with their own branding, domain, and content — typically ready in 4–6 weeks for Phase 1. For complex hospital networks or EHR integrations, we scope a custom build.",
  },
  {
    q: "Will the AI diagnose medical conditions?",
    a: "No. The AI Health Companion is a healthcare information assistant. It explains reports, defines medical terms, and helps patients prepare questions for their doctor. It never diagnoses, prescribes medication, or replaces professional medical advice.",
  },
  {
    q: "Is patient data secure and HIPAA compliant?",
    a: "Yes. All data is encrypted at rest and in transit using AES-256. We implement role-based access control, a full audit log of every data access event, and patient-controlled sharing permissions.",
  },
  {
    q: "How long does implementation take?",
    a: "For a single clinic MVP (auth, dashboard, appointments, documents), implementation takes 4–6 weeks. Full platform with AI layer takes 3–4 months. Enterprise multi-clinic rollout is scoped individually.",
  },
  {
    q: "Do you integrate with existing EHR systems?",
    a: "Yes. We have a FHIR-compatible API layer that allows integration with existing Electronic Health Record systems including Epic and Cerner. The depth of integration is scoped per client.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is scoped based on clinic size, features required, and deployment complexity. Contact us for a detailed proposal tailored to your practice.",
  },
];

export default function FAQPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://medclinicx.com/faq" },
    ],
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://medclinicx.com/faq",
    name: "Med Clinic X — Frequently Asked Questions",
    url: "https://medclinicx.com/faq",
    mainEntity: allFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <FAQClient />
    </>
  );
}
