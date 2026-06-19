import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "../servicesData";
import ServiceClient from "./ServiceClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Pre-render service routes at build time (Performance Optimization)
export async function generateStaticParams() {
  return [];
}

// Generate dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    return {
      title: "Service Not Found | Med Clinic X",
      description: "The requested medical IT service was not found.",
    };
  }

  const canonicalUrl = `https://medclinicx.com/services/${id}`;

  return {
    title: `${service.title} Services | Med Clinic X`,
    description: service.summary,
    keywords: `healthcare IT, clinic software, medical app engineering, ${service.title.toLowerCase()}, HIPAA compliance, EHR integrations`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} Services | Med Clinic X`,
      description: service.summary,
      url: canonicalUrl,
      siteName: "Med Clinic X",
      type: "website",
      images: [
        {
          url: "https://medclinicx.com/logo.png",
          width: 800,
          height: 800,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${service.title} Services | Med Clinic X`,
      description: service.summary,
      images: ["https://medclinicx.com/logo.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    notFound();
  }

  // Define structured JSON-LD schemas for Search Engines
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
        "name": service.title,
        "item": `https://medclinicx.com/services/${id}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
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
    "name": service.title,
    "description": service.summary,
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare Practices, Clinics, and Hospitals"
    }
  };

  return (
    <>
      {/* Schema Injection */}
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

      {/* Render layouts */}
      <ServiceClient service={service} />
    </>
  );
}
