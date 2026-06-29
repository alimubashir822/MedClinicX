import { Metadata } from "next";
import AiHealthcareClient from "./AiHealthcareClient";

export const metadata: Metadata = {
  title: "AI Healthcare Solutions | Med Clinic X",
  description: "Med Clinic X provides clinical LLM integrations, conversational AI medical receptionists, symptom triage workflows, and automated doctor briefings. Secure, HIPAA-compliant AI solutions for clinics and hospitals.",
  keywords: "ai healthcare solutions, clinical LLM, AI medical receptionist, medical voice ai, healthcare symptom triage, pre-appointment patient briefs, medical NLP models, healthcare automation",
  alternates: {
    canonical: "https://medclinicx.com/services/ai-healthcare-solutions",
  },
  openGraph: {
    title: "AI Healthcare Solutions | Clinical LLMs & AI Medical Receptionists | Med Clinic X",
    description: "Med Clinic X provides clinical LLM integrations, conversational AI medical receptionists, symptom triage workflows, and automated doctor briefings. Secure, HIPAA-compliant AI solutions for clinics and hospitals.",
    url: "https://medclinicx.com/services/ai-healthcare-solutions",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "AI Healthcare Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Healthcare Solutions | Clinical LLMs & AI Medical Receptionists | Med Clinic X",
    description: "Med Clinic X provides clinical LLM integrations, conversational AI medical receptionists, symptom triage workflows, and automated doctor briefings.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function AiHealthcarePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://medclinicx.com/#organization",
    "name": "Med Clinic X",
    "url": "https://medclinicx.com",
    "logo": "https://medclinicx.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/medclinicx"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://medclinicx.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://medclinicx.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI Healthcare Solutions",
        "item": "https://medclinicx.com/services/ai-healthcare-solutions"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Healthcare Solutions",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Med Clinic X",
      "image": "https://medclinicx.com/logo.png",
      "telephone": "+1-800-555-0199",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "San Francisco, CA (HQ)",
        "addressLocality": "San Francisco",
        "addressRegion": "CA"
      }
    },
    "name": "AI Healthcare Solutions",
    "description": "HIPAA-compliant clinical LLMs and conversational AI systems designed to triage symptoms, draft doctor briefings, and automate practice portal answering.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Clinics, Hospitals, Medical Practices, and Health Tech Companies"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AiHealthcareClient />
    </>
  );
}
