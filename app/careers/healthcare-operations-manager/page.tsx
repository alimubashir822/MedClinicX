import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Healthcare Operations Manager Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Healthcare Operations Manager. Optimize workflows, manage healthcare SaaS operations, and improve efficiency for US healthcare systems.",
  keywords: [
    "Healthcare Operations Manager",
    "Healthcare Operations Manager Jobs",
    "Healthcare Operations Lead",
    "Healthcare Practice Operations Manager",
    "Healthcare IT Operations Manager",
    "Clinical Operations Manager Jobs",
    "Digital Health Operations Manager",
    "Healthcare SaaS Operations Role",
    "Healthcare Workflow Manager",
    "Healthcare Business Operations Manager",
    "US Healthcare Operations Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/healthcare-operations-manager",
  },
  openGraph: {
    title: "Healthcare Operations Manager Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Healthcare Operations Manager. Optimize workflows, manage healthcare SaaS operations, and improve efficiency for US healthcare systems.",
    url: "https://medclinicx.com/careers/healthcare-operations-manager",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Operations Manager Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Healthcare Operations Manager", item: "https://medclinicx.com/careers/healthcare-operations-manager" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Healthcare Operations Manager",
    "description": "We are hiring a Healthcare Operations Manager to oversee and optimize operational workflows across healthcare technology products and client implementations.",
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
