import { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "SaaS & Clinical AI Solutions | Med Clinic X",
  description:
    "Explore Med Clinic X's enterprise solutions: AI Patient Portals, Smart Dental dashboards, AI Receptionist systems, Telehealth platforms, and Specialty Clinic OS integrations.",
  keywords: [
    "clinical software solutions",
    "healthcare enterprise portals",
    "AI medical receptionist",
    "specialty clinic OS",
    "virtual clinic software",
    "telehealth consultation platforms",
    "EHR FHIR integrations",
    "HIPAA compliant CRM",
  ],
  alternates: {
    canonical: "https://medclinicx.com/solutions",
  },
  openGraph: {
    title: "Clinical Operating Systems & Software Solutions | Med Clinic X",
    description:
      "Enterprise-grade clinical portals, voice AI workflows, and specialty clinic operating systems designed to scale modern healthcare practices.",
    url: "https://medclinicx.com/solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X Healthcare Solutions",
      },
    ],
  },
};

export default function SolutionsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://medclinicx.com/solutions" },
    ],
  };

  const solutionsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Med Clinic X Enterprise Healthcare Solutions",
    description:
      "Complete directory of enterprise-grade clinical systems and AI workflows designed by Med Clinic X.",
    url: "https://medclinicx.com/solutions",
    numberOfItems: 11,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "AI Patient Portal Platform",
          url: "https://medclinicx.com/solutions/ai-patient-portal",
          description: "Intelligent, secure patient dashboard with AI health companion, document vault, and encrypted chat.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Smart Dental Patient Portal",
          url: "https://medclinicx.com/solutions/smart-dental-portal",
          description: "Specialized orthodontic schedules, aligner trackers, and DICOM 3D scans image viewer.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "AI Medical Receptionist System",
          url: "https://medclinicx.com/solutions/ai-medical-receptionist",
          description: "Conversational voice and chat agents managing inbound queues and booking calendar synchronizations 24/7.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Telemedicine Consultation Platform",
          url: "https://medclinicx.com/solutions/telemedicine-consultation-platform",
          description: "Browser-native encrypted WebRTC virtual clinics featuring Bluetooth vital telemetry interfaces.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Virtual Clinic OS",
          url: "https://medclinicx.com/solutions/virtual-clinic-os",
          description: "Full-suite clinic manager with patient charts database, scheduling pipelines, and billing automation.",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "AI Healthcare Navigator",
          url: "https://medclinicx.com/solutions/ai-healthcare-navigator",
          description: "Conversational triage chatbot mapping patient concerns to clinics and auto-building pre-consultation briefs.",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Service",
          name: "CareFlow AI Growth CRM",
          url: "https://medclinicx.com/solutions/careflow-ai",
          description: "Multi-clinic practice customer relationship manager with lead scoring and automated recall campaigns.",
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "Service",
          name: "CareMatch AI Marketplace",
          url: "https://medclinicx.com/solutions/carematch-ai",
          description: "Patient acquisition matchmaking dashboard sorting doctors by symptoms and active slot times.",
        },
      },
      {
        "@type": "ListItem",
        position: 9,
        item: {
          "@type": "Service",
          name: "Specialty Clinic Growth OS",
          url: "https://medclinicx.com/solutions/health-os",
          description: "Operations and conversion intelligence built for high-ticket IVF, cosmetics, and eye practices.",
        },
      },
      {
        "@type": "ListItem",
        position: 10,
        item: {
          "@type": "Service",
          name: "IntakeFlow AI Onboarding",
          url: "https://medclinicx.com/solutions/intake-flow",
          description: "Interactive digital questionnaires replacing paper clipboard forms, storing records into external EHR databases.",
        },
      },
      {
        "@type": "ListItem",
        position: 11,
        item: {
          "@type": "Service",
          name: "MediSync AI Data Platform",
          url: "https://medclinicx.com/solutions/medi-sync",
          description: "Secure FHIR-compliant middleware sync utility connecting EHR schemas, apps, and PostgreSQL servers.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsListSchema) }}
      />
      <SolutionsClient />
    </>
  );
}
