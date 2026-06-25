import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Patient Engagement Specialist Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Patient Engagement Specialist. Improve patient communication, digital health experiences, and healthcare SaaS engagement tools in the USA.",
  keywords: [
    "Patient Engagement Specialist",
    "Patient Engagement Specialist Jobs",
    "Healthcare Patient Engagement Jobs",
    "Patient Experience Specialist Healthcare",
    "Digital Health Engagement Roles",
    "Healthcare Communication Specialist",
    "Patient Portal Engagement Jobs",
    "Healthcare SaaS Engagement Specialist",
    "US Healthcare Patient Experience Jobs",
    "Care Coordination Specialist",
    "Healthcare Outreach Coordinator"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/patient-engagement-specialist",
  },
  openGraph: {
    title: "Patient Engagement Specialist Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Patient Engagement Specialist. Improve patient communication, digital health experiences, and healthcare SaaS engagement tools in the USA.",
    url: "https://medclinicx.com/careers/patient-engagement-specialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Patient Engagement Specialist Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Patient Engagement Specialist", item: "https://medclinicx.com/careers/patient-engagement-specialist" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Patient Engagement Specialist",
    "description": "We are seeking a Patient Engagement Specialist to improve how patients interact with healthcare systems, digital platforms, and clinical services.",
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
