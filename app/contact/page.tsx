import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Med Clinic X — Book a Healthcare AI Consultation",
  description:
    "Get in touch with Med Clinic X to book a free discovery call, request a platform demo, or discuss enterprise healthcare software solutions. We respond within 4 business hours.",
  keywords: [
    "contact Med Clinic X",
    "healthcare AI consultation",
    "patient portal demo request",
    "healthcare software consultation",
    "book a clinic software demo",
    "medical software enterprise inquiry",
  ],
  alternates: {
    canonical: "https://medclinicx.com/contact",
  },
  openGraph: {
    title: "Contact Med Clinic X — Book a Healthcare AI Consultation",
    description:
      "Get in touch to book a free discovery call, request a platform demo, or discuss enterprise healthcare software. We respond within 4 business hours.",
    url: "https://medclinicx.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://medclinicx.com/contact" },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://medclinicx.com/#localbusiness",
    name: "Med Clinic X",
    description:
      "AI-powered healthcare software company building patient portals, clinical automation, telemedicine platforms, and HIPAA-compliant clinic websites.",
    url: "https://medclinicx.com",
    telephone: "+1-800-555-6329",
    email: "support@medclinicx.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "535 Mission Street",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    areaServed: "US",
    sameAs: [
      "https://linkedin.com/company/medclinicx",
      "https://twitter.com/medclinicx",
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://medclinicx.com/contact",
    name: "Contact Med Clinic X",
    url: "https://medclinicx.com/contact",
    description:
      "Book a free discovery call, request a platform demo, or get answers from the Med Clinic X team.",
    publisher: { "@id": "https://medclinicx.com/#organization" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}
