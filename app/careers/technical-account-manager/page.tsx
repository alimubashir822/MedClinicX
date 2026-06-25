import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Technical Account Manager Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Technical Account Manager. Support healthcare SaaS clients, manage integrations, and ensure success for US healthcare organizations.",
  keywords: [
    "Technical Account Manager",
    "Technical Account Manager Jobs USA",
    "Healthcare Technical Account Manager",
    "SaaS Account Manager Healthcare",
    "Customer Success Manager Healthcare Tech",
    "Healthcare Client Success Manager",
    "Enterprise Account Manager Healthcare SaaS",
    "Digital Health Account Manager Jobs",
    "Healthcare Implementation Manager",
    "US Healthcare SaaS Account Manager",
    "Clinical Systems Account Manager"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/technical-account-manager",
  },
  openGraph: {
    title: "Technical Account Manager Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Technical Account Manager. Support healthcare SaaS clients, manage integrations, and ensure success for US healthcare organizations.",
    url: "https://medclinicx.com/careers/technical-account-manager",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technical Account Manager Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Technical Account Manager", item: "https://medclinicx.com/careers/technical-account-manager" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Technical Account Manager",
    "description": "We are seeking a Technical Account Manager to manage client relationships, oversee technical onboarding, and ensure successful adoption of healthcare SaaS platforms.",
    "datePosted": "2026-06-26",
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
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78701",
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
