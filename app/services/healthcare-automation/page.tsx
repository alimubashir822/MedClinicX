import { Metadata } from "next";
import HealthcareAutomationClient from "./HealthcareAutomationClient";

export const metadata: Metadata = {
  title: "Healthcare Automation | Med Clinic X",
  description: "Med Clinic X builds custom practice automation engines that analyze patient no-show risks, send automated reminders, and fill canceled appointment slots dynamically. HIPAA-compliant scheduling automation.",
  keywords: "healthcare automation, patient recall scheduling, no-show prediction model, automated appointment reminders, sms patient recalls, practice management automation, waitlist auto-refill",
  alternates: {
    canonical: "https://medclinicx.com/services/healthcare-automation",
  },
  openGraph: {
    title: "Healthcare Automation | Practice Recall & Autopilot Scheduling | Med Clinic X",
    description: "Med Clinic X builds custom practice automation engines that analyze patient no-show risks, send automated reminders, and fill canceled appointment slots dynamically. HIPAA-compliant scheduling automation.",
    url: "https://medclinicx.com/services/healthcare-automation",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "Healthcare Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Automation | Practice Recall & Autopilot Scheduling | Med Clinic X",
    description: "Med Clinic X builds custom practice automation engines that analyze patient no-show risks, send automated reminders, and fill canceled appointment slots dynamically.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function HealthcareAutomationPage() {
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
        "name": "Healthcare Automation",
        "item": "https://medclinicx.com/services/healthcare-automation"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare Automation",
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
    "name": "Healthcare Automation",
    "description": "Autopilot practice scheduling engines analyzing patient cancel risk factors to automatically send confirmation texts and dynamically refill calendar slots.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Clinics, Dental Practices, High-volume Specialist centers, and Medical Groups"
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
      <HealthcareAutomationClient />
    </>
  );
}
