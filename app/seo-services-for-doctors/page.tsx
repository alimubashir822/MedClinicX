import { Metadata } from "next";
import SeoServicesClient from "./SeoServicesClient";

export const metadata: Metadata = {
  title: "SEO Services for Doctors | Healthcare SEO Agency for Medical Practices",
  description:
    "Get expert SEO services for doctors designed to increase online visibility, attract more patients, and grow your medical practice with proven healthcare SEO strategies.",
  alternates: {
    canonical: "https://medclinicx.com/seo-services-for-doctors",
  },
  openGraph: {
    title: "SEO Services for Doctors | Healthcare SEO Agency for Medical Practices",
    description:
      "Get expert SEO services for doctors designed to increase online visibility, attract more patients, and grow your medical practice with proven healthcare SEO strategies.",
    url: "https://medclinicx.com/seo-services-for-doctors",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SEO Services for Doctors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services for Doctors | Healthcare SEO Agency for Medical Practices",
    description:
      "Get expert SEO services for doctors designed to increase online visibility, attract more patients, and grow your medical practice with proven healthcare SEO strategies.",
    images: ["https://medclinicx.com/og-image.png"],
  },
};

export default function SeoServicesForDoctorsPage() {
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
        "name": "SEO Services for Doctors",
        "item": "https://medclinicx.com/seo-services-for-doctors"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Services for Doctors",
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
    "name": "SEO Services for Doctors",
    "description": "Specialized healthcare search engine optimization designed to improve visibility on search results, local maps packs, and attract patients with medical E-E-A-T content marketing.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Doctors, Specialists, Dental Clinics, Medical Groups, and Healthcare Organizations"
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
      <SeoServicesClient />
    </>
  );
}
