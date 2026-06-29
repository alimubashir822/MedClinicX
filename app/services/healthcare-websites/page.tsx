import { Metadata } from "next";
import HealthcareWebsitesClient from "./HealthcareWebsitesClient";

export const metadata: Metadata = {
  title: "Healthcare Website Design | Med Clinic X",
  description: "Med Clinic X provides healthcare website design, medical website development, patient portal development, and AI healthcare solutions for doctors, clinics, hospitals, and healthcare organizations across the USA. Build a secure, patient-focused digital experience that helps your practice grow.",
  keywords: "healthcare website design company, healthcare web design services, medical website design, medical website development, website design for doctors, healthcare website development, patient portal development, healthcare website redesign, HIPAA compliance, EHR integrations",
  alternates: {
    canonical: "https://medclinicx.com/services/healthcare-websites",
  },
  openGraph: {
    title: "Healthcare Website Design & Development Company for Doctors, Clinics & Hospitals | Med Clinic X",
    description: "Med Clinic X provides healthcare website design, medical website development, patient portal development, and AI healthcare solutions for doctors, clinics, hospitals, and healthcare organizations across the USA. Build a secure, patient-focused digital experience that helps your practice grow.",
    url: "https://medclinicx.com/services/healthcare-websites",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "Healthcare Website Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Website Design & Development Company for Doctors, Clinics & Hospitals | Med Clinic X",
    description: "Med Clinic X provides healthcare website design, medical website development, patient portal development, and AI healthcare solutions for doctors, clinics, hospitals, and healthcare organizations across the USA. Build a secure, patient-focused digital experience that helps your practice grow.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function HealthcareWebsitesPage() {
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
        "name": "Healthcare Website Design & Development",
        "item": "https://medclinicx.com/services/healthcare-websites"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare Website Design & Development",
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
    "name": "Healthcare Website Design & Development Services",
    "description": "Custom healthcare website design, medical web engineering, and patient experience portal development services optimized for compliance, user navigation, and practice growth.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Doctors, Private Practices, Clinics, Hospitals, and Healthcare Groups"
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
      <HealthcareWebsitesClient />
    </>
  );
}
