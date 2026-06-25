import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "IT Administrator Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as an IT Administrator. Manage healthcare IT systems, cloud infrastructure, security, and support operations for US healthcare platforms.",
  keywords: [
    "IT Administrator",
    "IT Administrator Jobs USA",
    "Healthcare IT Administrator",
    "System Administrator Healthcare",
    "Network Administrator Healthcare Jobs",
    "Healthcare IT Support Engineer",
    "SaaS IT Administrator Healthcare",
    "Cloud IT Administrator Healthcare",
    "Healthcare Systems Administrator",
    "US Healthcare IT Support Jobs",
    "Infrastructure Support Healthcare IT"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/it-administrator",
  },
  openGraph: {
    title: "IT Administrator Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as an IT Administrator. Manage healthcare IT systems, cloud infrastructure, security, and support operations for US healthcare platforms.",
    url: "https://medclinicx.com/careers/it-administrator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IT Administrator Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "IT Administrator", item: "https://medclinicx.com/careers/it-administrator" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "IT Administrator",
    "description": "We are seeking an IT Administrator to manage internal systems, cloud infrastructure, user access, and IT operations supporting healthcare SaaS and digital health platforms.",
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
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78701",
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
