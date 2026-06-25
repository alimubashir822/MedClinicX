import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Healthcare Data Analyst Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as a Healthcare Data Analyst. Build healthcare analytics solutions, AI platforms, and digital health systems for US healthcare organizations.",
  keywords: [
    "Healthcare Data Analyst",
    "Healthcare Data Analyst Jobs",
    "Healthcare Analytics Careers",
    "Healthcare Data Analytics Specialist",
    "Healthcare IT Jobs",
    "Healthcare SaaS Careers",
    "Clinical Data Analyst",
    "Healthcare BI Analyst",
    "Healthcare Technology Jobs",
    "Digital Health Data Analyst",
    "Healthcare AI Analyst"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/healthcare-data-analyst",
  },
  openGraph: {
    title: "Healthcare Data Analyst Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as a Healthcare Data Analyst. Build healthcare analytics solutions, AI platforms, and digital health systems for US healthcare organizations.",
    url: "https://medclinicx.com/careers/healthcare-data-analyst",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Data Analyst Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Healthcare Data Analyst", item: "https://medclinicx.com/careers/healthcare-data-analyst" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Healthcare Data Analyst",
    "description": "Join Med Clinic X as a Healthcare Data Analyst to analyze healthcare datasets, support healthcare SaaS platforms, and prepare healthcare datasets for AI applications.",
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
