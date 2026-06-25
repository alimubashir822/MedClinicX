import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Clinical Data Analyst Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as a Clinical Data Analyst. Analyze healthcare data, improve clinical workflows, and support AI-driven healthcare systems in the USA.",
  keywords: [
    "Clinical Data Analyst",
    "Clinical Data Analyst Jobs",
    "Healthcare Data Analyst Careers",
    "Clinical Analytics Specialist",
    "Healthcare Data Analytics Jobs",
    "Clinical Reporting Analyst",
    "Healthcare BI Analyst",
    "Healthcare IT Data Analyst",
    "US Healthcare Data Jobs",
    "Digital Health Data Analyst",
    "Healthcare SaaS Analytics Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/clinical-data-analyst",
  },
  openGraph: {
    title: "Clinical Data Analyst Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as a Clinical Data Analyst. Analyze healthcare data, improve clinical workflows, and support AI-driven healthcare systems in the USA.",
    url: "https://medclinicx.com/careers/clinical-data-analyst",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clinical Data Analyst Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Clinical Data Analyst", item: "https://medclinicx.com/careers/clinical-data-analyst" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Clinical Data Analyst",
    "description": "We are hiring a Clinical Data Analyst to transform healthcare and clinical data into insights that drive better decisions across healthcare systems and digital health platforms.",
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
