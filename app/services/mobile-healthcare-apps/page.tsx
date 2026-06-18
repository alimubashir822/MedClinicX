import { Metadata } from "next";
import MobileHealthcareClient from "./MobileHealthcareClient";

export const metadata: Metadata = {
  title: "Mobile Healthcare Apps | Responsive PWAs & Native Builds | Med Clinic X",
  description: "Med Clinic X develops responsive Progressive Web Apps (PWAs) and native iOS/Android patient portals. Features include FaceID biometric login, offline records cache syncing, and Bluetooth vital sensor integrations.",
  keywords: "mobile healthcare apps, custom health apps, PWA medical portal, native iOS health app, android medical application, offline records cache, FaceID medical login, remote patient monitoring app",
  alternates: {
    canonical: "https://medclinicx.com/services/mobile-healthcare-apps",
  },
  openGraph: {
    title: "Mobile Healthcare Apps | Responsive PWAs & Native Builds | Med Clinic X",
    description: "Med Clinic X develops responsive Progressive Web Apps (PWAs) and native iOS/Android patient portals. Features include FaceID biometric login, offline records cache syncing, and Bluetooth vital sensor integrations.",
    url: "https://medclinicx.com/services/mobile-healthcare-apps",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "Mobile Healthcare Apps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Healthcare Apps | Responsive PWAs & Native Builds | Med Clinic X",
    description: "Med Clinic X develops responsive Progressive Web Apps (PWAs) and native iOS/Android patient portals with biometric auth and offline caching.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function MobileHealthcarePage() {
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
        "name": "Mobile Healthcare Apps",
        "item": "https://medclinicx.com/services/mobile-healthcare-apps"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile Healthcare Apps",
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
    "name": "Mobile Healthcare Apps",
    "description": "HIPAA-compliant native iOS/Android applications and Progressive Web Apps configured for offline records caching, biometric face sign-in, and Bluetooth vitals sensor sync.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Clinics, Health Startups, Telemedicine networks, and Medical Specialist Groups"
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
      <MobileHealthcareClient />
    </>
  );
}
