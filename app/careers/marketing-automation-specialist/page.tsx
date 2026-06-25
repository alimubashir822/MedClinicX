import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Marketing Automation Specialist Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Marketing Automation Specialist. Build automated healthcare marketing systems, CRM workflows, and growth funnels for US healthcare.",
  keywords: [
    "Marketing Automation Specialist",
    "Marketing Automation Specialist Jobs USA",
    "Healthcare Marketing Automation Jobs",
    "CRM Automation Specialist Healthcare",
    "Digital Marketing Automation Healthcare",
    "SaaS Marketing Automation Specialist",
    "Healthcare Growth Automation Jobs",
    "Email Marketing Automation Healthcare",
    "Funnel Automation Healthcare SaaS",
    "Healthcare CRM Specialist Jobs",
    "US Healthcare Digital Marketing Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/marketing-automation-specialist",
  },
  openGraph: {
    title: "Marketing Automation Specialist Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Marketing Automation Specialist. Build automated healthcare marketing systems, CRM workflows, and growth funnels for US healthcare.",
    url: "https://medclinicx.com/careers/marketing-automation-specialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marketing Automation Specialist Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Marketing Automation Specialist", item: "https://medclinicx.com/careers/marketing-automation-specialist" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Marketing Automation Specialist",
    "description": "We are seeking a Marketing Automation Specialist to design, build, and optimize automated marketing systems that drive growth for healthcare SaaS products.",
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
