import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "ERP Consultant Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as an ERP Consultant. Implement healthcare ERP systems, optimize workflows, and support US healthcare SaaS and digital transformation.",
  keywords: [
    "ERP Consultant",
    "ERP Consultant Jobs USA",
    "Healthcare ERP Consultant",
    "ERP Implementation Consultant Healthcare",
    "Clinical ERP Systems Consultant",
    "Healthcare ERP Analyst Jobs",
    "Digital Health ERP Consultant",
    "SaaS ERP Consultant Healthcare",
    "Hospital ERP Implementation Jobs",
    "Healthcare Systems Consultant",
    "US Healthcare IT Consultant ERP"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/erp-consultant",
  },
  openGraph: {
    title: "ERP Consultant Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as an ERP Consultant. Implement healthcare ERP systems, optimize workflows, and support US healthcare SaaS and digital transformation.",
    url: "https://medclinicx.com/careers/erp-consultant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ERP Consultant Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "ERP Consultant", item: "https://medclinicx.com/careers/erp-consultant" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "ERP Consultant",
    "description": "We are seeking an ERP Consultant to design, implement, and optimize healthcare ERP systems that improve operational efficiency across healthcare organizations.",
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
