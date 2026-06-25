import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Medical Data Analyst Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as a Medical Data Analyst. Analyze healthcare data, improve clinical insights, and support AI-driven healthcare systems in the USA.",
  keywords: [
    "Medical Data Analyst",
    "Medical Data Analyst Jobs",
    "Healthcare Data Analyst Careers",
    "Clinical Data Analyst Jobs",
    "Medical Analytics Specialist",
    "Healthcare BI Analyst",
    "Medical Reporting Analyst",
    "Healthcare Data Science Jobs",
    "US Healthcare Data Jobs",
    "Digital Health Data Analyst",
    "Clinical Analytics Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/medical-data-analyst",
  },
  openGraph: {
    title: "Medical Data Analyst Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as a Medical Data Analyst. Analyze healthcare data, improve clinical insights, and support AI-driven healthcare systems in the USA.",
    url: "https://medclinicx.com/careers/medical-data-analyst",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medical Data Analyst Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Medical Data Analyst", item: "https://medclinicx.com/careers/medical-data-analyst" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Medical Data Analyst",
    "description": "We are seeking a Medical Data Analyst to analyze healthcare datasets and deliver actionable insights that support clinical, operational, and product decision-making.",
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
