import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "AI Automation Specialist Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as an AI Automation Specialist. Build healthcare AI workflows, automation systems, and SaaS solutions for US healthcare organizations.",
  keywords: [
    "AI Automation Specialist",
    "AI Automation Specialist Jobs",
    "Healthcare AI Automation Jobs",
    "AI Workflow Automation Engineer",
    "Healthcare Automation Specialist",
    "RPA Healthcare Specialist",
    "Healthcare AI Engineer Jobs",
    "Digital Health Automation Jobs",
    "Healthcare SaaS Automation Roles",
    "AI Workflow Engineer Healthcare",
    "US Healthcare AI Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/ai-automation-specialist",
  },
  openGraph: {
    title: "AI Automation Specialist Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as an AI Automation Specialist. Build healthcare AI workflows, automation systems, and SaaS solutions for US healthcare organizations.",
    url: "https://medclinicx.com/careers/ai-automation-specialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Automation Specialist Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "AI Automation Specialist", item: "https://medclinicx.com/careers/ai-automation-specialist" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "AI Automation Specialist",
    "description": "We are hiring an AI Automation Specialist to design and implement intelligent automation systems that streamline healthcare operations and improve efficiency across digital health platforms.",
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
