import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Product Designer Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as a Product Designer. Design intuitive healthcare SaaS, patient portals, and AI-powered digital health experiences in the USA.",
  keywords: [
    "Product Designer",
    "Product Designer Jobs USA",
    "Healthcare Product Designer",
    "UX UI Designer Healthcare SaaS",
    "Digital Health Product Designer",
    "Healthcare UX Designer Jobs",
    "Patient Portal Designer",
    "Healthcare UI UX Jobs",
    "SaaS Product Designer Healthcare",
    "Clinical Software Designer",
    "Healthcare Experience Designer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/product-designer",
  },
  openGraph: {
    title: "Product Designer Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as a Product Designer. Design intuitive healthcare SaaS, patient portals, and AI-powered digital health experiences in the USA.",
    url: "https://medclinicx.com/careers/product-designer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Product Designer Job at Med Clinic X",
      },
    ],
  },
};

export default function JobPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Product Designer", item: "https://medclinicx.com/careers/product-designer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Product Designer",
    "description": "We are seeking a Product Designer to design intuitive, user-friendly, and scalable healthcare digital products.",
    "datePosted": "2026-06-25",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Med Clinic X",
      "sameAs": "https://medclinicx.com",
      "logo": "https://medclinicx.com/og-image.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      }
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <JobClient />
    </>
  );
}
