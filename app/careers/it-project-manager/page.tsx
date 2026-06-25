import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "IT Project Manager Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as an IT Project Manager. Lead healthcare SaaS, AI, and digital health projects for US hospitals, clinics, and healthcare systems.",
  keywords: [
    "IT Project Manager",
    "IT Project Manager Jobs USA",
    "Healthcare IT Project Manager",
    "Healthcare Project Manager Jobs",
    "Digital Health Project Manager",
    "Healthcare SaaS Project Manager",
    "Clinical IT Project Manager",
    "Healthcare Technology Project Manager",
    "US Healthcare IT Jobs",
    "Software Project Manager Healthcare",
    "Healthcare Delivery Project Manager"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/it-project-manager",
  },
  openGraph: {
    title: "IT Project Manager Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as an IT Project Manager. Lead healthcare SaaS, AI, and digital health projects for US hospitals, clinics, and healthcare systems.",
    url: "https://medclinicx.com/careers/it-project-manager",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IT Project Manager Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "IT Project Manager", item: "https://medclinicx.com/careers/it-project-manager" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "IT Project Manager",
    "description": "We are seeking an IT Project Manager to lead and manage healthcare technology projects across SaaS platforms, AI systems, and digital health solutions.",
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
