import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Cloud Engineer Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as a Cloud Engineer. Build secure, scalable cloud infrastructure for healthcare SaaS, AI systems, and digital health platforms in the USA.",
  keywords: [
    "Cloud Engineer",
    "Cloud Engineer Jobs USA",
    "Healthcare Cloud Engineer",
    "AWS Cloud Engineer Healthcare",
    "Azure Cloud Engineer Healthcare",
    "DevOps Engineer Healthcare",
    "Healthcare SaaS Cloud Engineer",
    "Healthcare Infrastructure Engineer",
    "Site Reliability Engineer Healthcare",
    "Digital Health Cloud Engineer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/cloud-engineer",
  },
  openGraph: {
    title: "Cloud Engineer Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as a Cloud Engineer. Build secure, scalable cloud infrastructure for healthcare SaaS, AI systems, and digital health platforms in the USA.",
    url: "https://medclinicx.com/careers/cloud-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloud Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Cloud Engineer", item: "https://medclinicx.com/careers/cloud-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Cloud Engineer",
    "description": "We are seeking a Cloud Engineer to design, build, and maintain scalable cloud infrastructure for healthcare SaaS and digital health platforms.",
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
