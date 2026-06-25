import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Healthcare Project Manager Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Healthcare Project Manager. Lead healthcare SaaS, AI, and digital health projects for clinics and hospitals in the USA.",
  keywords: [
    "Healthcare Project Manager",
    "Healthcare Project Manager Jobs",
    "Healthcare IT Project Manager",
    "Healthcare SaaS Project Manager",
    "Digital Health Project Manager",
    "Clinical Project Manager Jobs",
    "Healthcare Technology Project Manager",
    "US Healthcare PM Jobs",
    "Healthcare Program Manager",
    "Healthcare Product Delivery Manager",
    "Telemedicine Project Manager"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/healthcare-project-manager",
  },
  openGraph: {
    title: "Healthcare Project Manager Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Healthcare Project Manager. Lead healthcare SaaS, AI, and digital health projects for clinics and hospitals in the USA.",
    url: "https://medclinicx.com/careers/healthcare-project-manager",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Project Manager Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Healthcare Project Manager", item: "https://medclinicx.com/careers/healthcare-project-manager" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Healthcare Project Manager",
    "description": "We are seeking a Healthcare Project Manager to lead the planning, execution, and delivery of healthcare technology projects across multiple digital health and SaaS initiatives.",
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
