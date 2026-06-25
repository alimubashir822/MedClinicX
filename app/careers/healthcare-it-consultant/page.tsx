import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Healthcare IT Consultant Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Healthcare IT Consultant. Advise clinics and hospitals on SaaS, EHR integration, AI, and digital health transformation in the USA.",
  keywords: [
    "Healthcare IT Consultant",
    "Healthcare IT Consultant Jobs",
    "Healthcare Technology Consultant",
    "Clinical IT Consultant",
    "Healthcare SaaS Consultant",
    "EHR Implementation Consultant",
    "Digital Health IT Consultant",
    "Healthcare Systems Consultant USA",
    "Healthcare Transformation Consultant",
    "Healthcare Software Consultant",
    "Healthcare IT Advisory Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/healthcare-it-consultant",
  },
  openGraph: {
    title: "Healthcare IT Consultant Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Healthcare IT Consultant. Advise clinics and hospitals on SaaS, EHR integration, AI, and digital health transformation in the USA.",
    url: "https://medclinicx.com/careers/healthcare-it-consultant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare IT Consultant Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Healthcare IT Consultant", item: "https://medclinicx.com/careers/healthcare-it-consultant" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Healthcare IT Consultant",
    "description": "We are seeking a Healthcare IT Consultant to guide healthcare organizations in adopting, implementing, and optimizing digital health technologies.",
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
