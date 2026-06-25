import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Clinical Informatics Specialist Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Clinical Informatics Specialist. Improve healthcare data systems, EHR workflows, and AI-driven digital health platforms in the USA.",
  keywords: [
    "Clinical Informatics Specialist",
    "Clinical Informatics Specialist Jobs",
    "Healthcare Informatics Careers",
    "Clinical Data Informatics Analyst",
    "Healthcare IT Informatics Jobs",
    "EHR Informatics Specialist",
    "Healthcare Data Integration Specialist",
    "Digital Health Informatics Careers",
    "Clinical Systems Analyst Jobs",
    "Healthcare SaaS Informatics Roles",
    "US Healthcare Informatics Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/clinical-informatics-specialist",
  },
  openGraph: {
    title: "Clinical Informatics Specialist Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Clinical Informatics Specialist. Improve healthcare data systems, EHR workflows, and AI-driven digital health platforms in the USA.",
    url: "https://medclinicx.com/careers/clinical-informatics-specialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clinical Informatics Specialist Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Clinical Informatics Specialist", item: "https://medclinicx.com/careers/clinical-informatics-specialist" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Clinical Informatics Specialist",
    "description": "We are hiring a Clinical Informatics Specialist to sit at the intersection of healthcare operations, clinical workflows, and technology systems. You will optimize EHR integrations, clinical data workflows, and healthcare analytics systems.",
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
