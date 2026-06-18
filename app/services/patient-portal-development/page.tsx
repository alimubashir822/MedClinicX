import { Metadata } from "next";
import PatientPortalClient from "./PatientPortalClient";

export const metadata: Metadata = {
  title: "Patient Portal Development | HIPAA Compliant Dashboards | Med Clinic X",
  description: "Med Clinic X builds custom patient portals offering secure messaging, DICOM medical imaging storage (X-rays, CBCT scans), Stripe installment billing, and Epic/Cerner FHIR sync integrations. HIPAA-compliant patient dashboard development.",
  keywords: "patient portal development, custom patient portals, medical records sync, secure clinical chat, stripe medical billing, patient dashboard software, FHIR integration, DICOM viewer integration",
  alternates: {
    canonical: "https://medclinicx.com/services/patient-portal-development",
  },
  openGraph: {
    title: "Patient Portal Development | HIPAA Compliant Dashboards | Med Clinic X",
    description: "Med Clinic X builds custom patient portals offering secure messaging, DICOM medical imaging storage (X-rays, CBCT scans), Stripe installment billing, and Epic/Cerner FHIR sync integrations. HIPAA-compliant patient dashboard development.",
    url: "https://medclinicx.com/services/patient-portal-development",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "Patient Portal Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Portal Development | HIPAA Compliant Dashboards | Med Clinic X",
    description: "Med Clinic X builds custom patient portals offering secure messaging, DICOM medical imaging storage, Stripe installment billing, and Epic/Cerner FHIR sync integrations.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function PatientPortalPage() {
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
        "name": "Patient Portal Development",
        "item": "https://medclinicx.com/services/patient-portal-development"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Patient Portal Development",
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
    "name": "Patient Portal Development",
    "description": "Secure patient portal dashboards with dynamic medical history sync, secure clinical messaging, milestone-based installment billing, and high-performance DICOM X-ray viewers.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Clinics, Hospitals, Multi-location Health networks, and Medical Specialist Groups"
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
      <PatientPortalClient />
    </>
  );
}
