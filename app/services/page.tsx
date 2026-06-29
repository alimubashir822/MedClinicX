import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "AI, Patient Portals & Web Services | Med Clinic X",
  description:
    "Explore Med Clinic X's full suite of healthcare digital services: AI healthcare solutions, patient portal development, clinic websites, telemedicine platforms, healthcare automation, mobile apps, and SEO growth strategies.",
  keywords: [
    "healthcare digital services",
    "medical software development services",
    "AI healthcare solutions",
    "patient portal development",
    "clinic website development",
    "telemedicine platform development",
    "healthcare automation software",
    "mobile healthcare app development",
    "healthcare SEO agency",
    "HIPAA compliant software development",
  ],
  alternates: {
    canonical: "https://medclinicx.com/services",
  },
  openGraph: {
    title: "Healthcare Digital Services — AI, Patient Portals, Websites & Telemedicine | Med Clinic X",
    description:
      "From AI-powered triage bots and patient portals to clinic websites and telemedicine gateways — purpose-built software that drives measurable practice growth.",
    url: "https://medclinicx.com/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X Healthcare Services",
      },
    ],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://medclinicx.com/services" },
    ],
  };

  const servicesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Med Clinic X Healthcare Digital Services",
    description:
      "Complete list of AI-powered healthcare digital services offered by Med Clinic X",
    url: "https://medclinicx.com/services",
    numberOfItems: 8,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Healthcare Website Design & Development",
          url: "https://medclinicx.com/services/healthcare-websites",
          description: "Fast, responsive clinic and hospital websites optimized for local SEO and EHR booking.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "AI Healthcare Solutions",
          url: "https://medclinicx.com/services/ai-healthcare-solutions",
          description: "Clinical LLMs, conversational AI receptionists, and symptom triage automation.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Patient Portal Development",
          url: "https://medclinicx.com/services/patient-portal-development",
          description: "HIPAA-compliant patient dashboards with FHIR sync, secure messaging, and billing.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Healthcare SaaS Development",
          url: "https://medclinicx.com/services/healthcare-saas-development",
          description: "Multi-tenant healthcare SaaS platforms, clinical analytics, and FHIR APIs.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Telemedicine Solutions",
          url: "https://medclinicx.com/services/telemedicine-solutions",
          description: "Encrypted WebRTC telemedicine platforms with digital prescriptions and telemetry.",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Healthcare Automation",
          url: "https://medclinicx.com/services/healthcare-automation",
          description: "AI scheduling automation, no-show prediction, and multi-channel patient reminders.",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Service",
          name: "Mobile Healthcare Apps",
          url: "https://medclinicx.com/services/mobile-healthcare-apps",
          description: "PWA and native mobile healthcare apps with offline sync and biometric login.",
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "Service",
          name: "Healthcare SEO & Growth",
          url: "https://medclinicx.com/services/healthcare-seo-growth",
          description: "Local SEO, structured data schemas, and review acquisition for medical practices.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      <ServicesClient />
    </>
  );
}
