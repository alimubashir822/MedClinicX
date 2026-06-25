import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Healthcare Program Manager Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Healthcare Program Manager. Lead large-scale healthcare SaaS, AI, and digital health programs across US healthcare organizations.",
  keywords: [
    "Healthcare Program Manager",
    "Healthcare Program Manager Jobs",
    "Healthcare Project Program Manager",
    "Healthcare IT Program Manager",
    "Digital Health Program Manager",
    "Healthcare SaaS Program Manager",
    "Clinical Program Manager Jobs",
    "Healthcare Transformation Program Manager",
    "US Healthcare Program Management Jobs",
    "Healthcare Operations Program Manager",
    "Healthcare Delivery Program Manager"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/healthcare-program-manager",
  },
  openGraph: {
    title: "Healthcare Program Manager Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Healthcare Program Manager. Lead large-scale healthcare SaaS, AI, and digital health programs across US healthcare organizations.",
    url: "https://medclinicx.com/careers/healthcare-program-manager",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Program Manager Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Healthcare Program Manager", item: "https://medclinicx.com/careers/healthcare-program-manager" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Healthcare Program Manager",
    "description": "We are seeking a Healthcare Program Manager to lead and coordinate multiple healthcare technology projects and ensure successful delivery of large-scale digital health programs.",
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
