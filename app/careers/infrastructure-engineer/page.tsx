import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Infrastructure Engineer Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as an Infrastructure Engineer. Build scalable cloud infrastructure for healthcare SaaS, AI systems, and digital health platforms in the USA.",
  keywords: [
    "Infrastructure Engineer",
    "Infrastructure Engineer Jobs USA",
    "Healthcare Infrastructure Engineer",
    "Cloud Infrastructure Engineer Healthcare",
    "DevOps Infrastructure Engineer Healthcare",
    "Site Reliability Engineer Healthcare",
    "Healthcare Systems Engineer Jobs",
    "SaaS Infrastructure Engineer Healthcare",
    "Cloud Engineer Healthcare Platform",
    "Digital Health Infrastructure Engineer",
    "US Healthcare IT Infrastructure Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/infrastructure-engineer",
  },
  openGraph: {
    title: "Infrastructure Engineer Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as an Infrastructure Engineer. Build scalable cloud infrastructure for healthcare SaaS, AI systems, and digital health platforms in the USA.",
    url: "https://medclinicx.com/careers/infrastructure-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Infrastructure Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Infrastructure Engineer", item: "https://medclinicx.com/careers/infrastructure-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Infrastructure Engineer",
    "description": "We are seeking an Infrastructure Engineer to design, build, and maintain scalable infrastructure for healthcare SaaS and digital health platforms.",
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
