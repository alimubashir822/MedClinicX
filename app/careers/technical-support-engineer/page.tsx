import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Technical Support Engineer Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as a Technical Support Engineer. Support healthcare SaaS platforms, troubleshoot systems, and assist US healthcare organizations.",
  keywords: [
    "Technical Support Engineer",
    "Technical Support Engineer Jobs USA",
    "Healthcare Technical Support Engineer",
    "SaaS Support Engineer Healthcare",
    "IT Support Engineer Healthcare",
    "Customer Support Engineer Healthcare SaaS",
    "Clinical Software Support Jobs",
    "Healthcare Helpdesk Engineer",
    "Digital Health Support Engineer",
    "Application Support Engineer Healthcare",
    "US Healthcare IT Support Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/technical-support-engineer",
  },
  openGraph: {
    title: "Technical Support Engineer Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as a Technical Support Engineer. Support healthcare SaaS platforms, troubleshoot systems, and assist US healthcare organizations.",
    url: "https://medclinicx.com/careers/technical-support-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technical Support Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Technical Support Engineer", item: "https://medclinicx.com/careers/technical-support-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Technical Support Engineer",
    "description": "We are seeking a Technical Support Engineer to provide technical assistance, troubleshoot system issues, and support healthcare SaaS platforms used by healthcare organizations across the United States.",
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
