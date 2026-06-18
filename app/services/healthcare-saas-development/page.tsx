import { Metadata } from "next";
import HealthcareSaasClient from "./HealthcareSaasClient";

export const metadata: Metadata = {
  title: "Healthcare SaaS Development | Multi-Tenant Medical Platforms | Med Clinic X",
  description: "Med Clinic X provides custom healthcare SaaS development services including multi-tenant web applications, EHR wrappers, clinical analytics portals, and database wrapper software conforming to ISO 27001 data safeguards. HIPAA-compliant B2B SaaS platforms.",
  keywords: "healthcare saas development services, medical saas, multi-tenant clinical software, EHR wrapper development, HIPAA compliant saas, healthcare software development, cloud medical portals, hospital saas software",
  alternates: {
    canonical: "https://medclinicx.com/services/healthcare-saas-development",
  },
  openGraph: {
    title: "Healthcare SaaS Development | Multi-Tenant Medical Platforms | Med Clinic X",
    description: "Med Clinic X provides custom healthcare SaaS development services including multi-tenant web applications, EHR wrappers, clinical analytics portals, and database wrapper software conforming to ISO 27001 data safeguards. HIPAA-compliant B2B SaaS platforms.",
    url: "https://medclinicx.com/services/healthcare-saas-development",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "Healthcare SaaS Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare SaaS Development | Multi-Tenant Medical Platforms | Med Clinic X",
    description: "Med Clinic X provides custom healthcare SaaS development services including multi-tenant web applications, EHR wrappers, clinical analytics portals, and database wrapper software.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function HealthcareSaasPage() {
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
        "name": "Healthcare SaaS Development",
        "item": "https://medclinicx.com/services/healthcare-saas-development"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare SaaS Development",
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
    "name": "Healthcare SaaS Development",
    "description": "Multi-tenant healthcare SaaS development including clinical analytics, EHR wrapper databases, ISO 27001 data isolation policies, and HIPAA compliance for hospitals, practices, and health tech providers.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Hospitals, Clinics, Health Systems, and Health Tech Startups"
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
      <HealthcareSaasClient />
    </>
  );
}
