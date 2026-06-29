import { Metadata } from "next";
import HealthcareSeoClient from "./HealthcareSeoClient";

export const metadata: Metadata = {
  title: "Healthcare SEO & Growth | Med Clinic X",
  description: "Med Clinic X builds custom patient lead capture funnels and local search engine visibility roadmaps. Optimizations include local clinic Google Maps packs, structured JSON-LD physician schemas, and automated patient reviews.",
  keywords: "healthcare seo, medical local search, google maps pack clinic, local clinic schema markup, reviews loops automation, lead capture funnels, healthcare practice growth, patient acquisition funnel",
  alternates: {
    canonical: "https://medclinicx.com/services/healthcare-seo-growth",
  },
  openGraph: {
    title: "Healthcare SEO & Growth | Medical Local Search Domination | Med Clinic X",
    description: "Med Clinic X builds custom patient lead capture funnels and local search engine visibility roadmaps. Optimizations include local clinic Google Maps packs, structured JSON-LD physician schemas, and automated patient reviews.",
    url: "https://medclinicx.com/services/healthcare-seo-growth",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://medclinicx.com/logo.png",
        width: 800,
        height: 800,
        alt: "Healthcare SEO & Growth Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare SEO & Growth | Medical Local Search Domination | Med Clinic X",
    description: "Med Clinic X builds custom patient lead capture funnels and local search engine visibility roadmaps to dominate local clinic searches.",
    images: ["https://medclinicx.com/logo.png"],
  },
};

export default function HealthcareSeoPage() {
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
        "name": "Healthcare SEO & Growth",
        "item": "https://medclinicx.com/services/healthcare-seo-growth"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare SEO & Growth",
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
    "name": "Healthcare SEO & Growth",
    "description": "Local SEO domination strategies including physician JSON-LD schema markups, reviews acquisition SMS prompts, and high-performance patient conversion funnels.",
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Clinics, Medical Groups, Hospitals, and Specialist Private Practices"
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
      <HealthcareSeoClient />
    </>
  );
}
