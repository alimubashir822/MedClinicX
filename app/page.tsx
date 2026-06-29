import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Med Clinic X — AI-Powered Healthcare Solutions",
  description:
    "Med Clinic X builds AI-powered patient portals, automated medical receptionists, telemedicine platforms, and HIPAA-compliant clinic websites. Trusted by doctors, clinics, and hospitals across the USA.",
  keywords: [
    "AI healthcare platform",
    "patient portal development company",
    "AI medical receptionist",
    "HIPAA compliant healthcare software",
    "clinic website development",
    "telemedicine software",
    "healthcare SaaS platform",
    "medical website design",
    "doctor software solution",
    "healthcare digital transformation",
  ],
  alternates: {
    canonical: "https://medclinicx.com",
  },
  openGraph: {
    title: "Med Clinic X — AI-Powered Healthcare Digital Solutions",
    description:
      "AI patient portals, medical receptionists, telemedicine & HIPAA-compliant clinic websites. Built for doctors, clinics & hospitals across the USA.",
    url: "https://medclinicx.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X — AI-Powered Healthcare Platform",
      },
    ],
  },
};

export default function HomePage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Med Clinic X Healthcare Services",
    description: "AI-powered digital healthcare services for clinics and hospitals",
    url: "https://medclinicx.com/services",
    numberOfItems: 8,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Healthcare Website Design & Development",
        url: "https://medclinicx.com/services/healthcare-websites",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Healthcare Solutions",
        url: "https://medclinicx.com/services/ai-healthcare-solutions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Patient Portal Development",
        url: "https://medclinicx.com/services/patient-portal-development",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Healthcare SaaS Development",
        url: "https://medclinicx.com/services/healthcare-saas-development",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Telemedicine Solutions",
        url: "https://medclinicx.com/services/telemedicine-solutions",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Healthcare Automation",
        url: "https://medclinicx.com/services/healthcare-automation",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Mobile Healthcare Apps",
        url: "https://medclinicx.com/services/mobile-healthcare-apps",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Healthcare SEO & Growth",
        url: "https://medclinicx.com/services/healthcare-seo-growth",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <HomeClient />
    </>
  );
}
