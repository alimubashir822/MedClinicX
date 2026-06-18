import { Metadata } from "next";
import TelemedicineClient from "./TelemedicineClient";

export const metadata: Metadata = {
  title: "Telemedicine Solutions | Secure Video & Telehealth Gateways | Med Clinic X",
  description: "Med Clinic X builds low-latency WebRTC telemedicine solutions with end-to-end video encryption, Bluetooth vitals telemetry sync, and pharmacy e-prescribing networks. HIPAA-compliant telehealth portals.",
  keywords: "telemedicine solutions, custom telehealth platforms, WebRTC video consultation, vitals telemetry gateway, Bluetooth vitals monitor, e-prescribing integration, remote patient monitoring",
  alternates: {
    canonical: "https://medclinicx.com/services/telemedicine-solutions",
  },
  openGraph: {
    title: "Telemedicine Solutions | Secure Video & Telehealth Gateways | Med Clinic X",
    description: "Med Clinic X builds low-latency WebRTC telemedicine solutions with end-to-end video encryption, Bluetooth vitals telemetry sync, and pharmacy e-prescribing networks. HIPAA-compliant telehealth portals.",
    url: "https://medclinicx.com/services/telemedicine-solutions",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "Telemedicine Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telemedicine Solutions | Secure Video & Telehealth Gateways | Med Clinic X",
    description: "Med Clinic X builds low-latency WebRTC telemedicine solutions with end-to-end video encryption, Bluetooth vitals telemetry sync, and pharmacy e-prescribing networks.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function TelemedicinePage() {
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
        "name": "Telemedicine Solutions",
        "item": "https://medclinicx.com/services/telemedicine-solutions"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Telemedicine Solutions",
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
    "name": "Telemedicine Solutions",
    "description": "Low-latency WebRTC video consulting platforms integrated with remote Bluetooth telemetry sensors and digital e-prescribing pathways.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Clinics, Outpatient Health networks, Remote Care providers, and Specialist Groups"
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
      <TelemedicineClient />
    </>
  );
}
