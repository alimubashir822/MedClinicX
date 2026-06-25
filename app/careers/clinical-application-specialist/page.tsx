import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Clinical Application Specialist Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Clinical Application Specialist. Support healthcare SaaS, EHR systems, and digital health platforms across US healthcare organizations.",
  keywords: [
    "Clinical Application Specialist",
    "Clinical Application Specialist Jobs",
    "Healthcare Application Specialist",
    "EHR Application Specialist",
    "Clinical Systems Specialist",
    "Healthcare IT Application Support",
    "Digital Health Application Specialist",
    "Healthcare SaaS Support Specialist",
    "Clinical Software Specialist Jobs",
    "US Healthcare IT Jobs",
    "Healthcare Platform Specialist"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/clinical-application-specialist",
  },
  openGraph: {
    title: "Clinical Application Specialist Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Clinical Application Specialist. Support healthcare SaaS, EHR systems, and digital health platforms across US healthcare organizations.",
    url: "https://medclinicx.com/careers/clinical-application-specialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clinical Application Specialist Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Clinical Application Specialist", item: "https://medclinicx.com/careers/clinical-application-specialist" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Clinical Application Specialist",
    "description": "We are hiring a Clinical Application Specialist to support the implementation, configuration, and optimization of healthcare applications used in clinical environments.",
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
