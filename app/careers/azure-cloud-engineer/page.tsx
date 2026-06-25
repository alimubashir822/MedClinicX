import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Azure Cloud Engineer Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as an Azure Cloud Engineer. Build secure cloud infrastructure, healthcare SaaS platforms, and digital health solutions in the USA.",
  keywords: [
    "Azure Cloud Engineer",
    "Azure Cloud Engineer Jobs USA",
    "Healthcare Azure Engineer",
    "Microsoft Azure Healthcare Cloud Jobs",
    "Cloud Engineer Healthcare IT",
    "Azure Infrastructure Engineer",
    "Healthcare Cloud Solutions Engineer",
    "Azure DevOps Engineer Healthcare",
    "Cloud Infrastructure Specialist",
    "Digital Health Cloud Engineer",
    "US Healthcare Cloud Jobs"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/azure-cloud-engineer" },
  openGraph: {
    title: "Azure Cloud Engineer Jobs | Med Clinic X Careers",
    description: "Join Med Clinic X as an Azure Cloud Engineer. Build secure cloud infrastructure, healthcare SaaS platforms, and digital health solutions in the USA.",
    url: "https://medclinicx.com/careers/azure-cloud-engineer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Azure Cloud Engineer Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Azure Cloud Engineer", item: "https://medclinicx.com/careers/azure-cloud-engineer" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Azure Cloud Engineer",
    description: "Design, deploy, and maintain secure cloud infrastructure supporting healthcare SaaS applications and digital health platforms.",
    datePosted: "2026-06-26",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Med Clinic X",
      sameAs: "https://medclinicx.com",
      logo: "https://medclinicx.com/og-image.png"
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78701",
        addressCountry: "US"
      }
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "United States"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} />
      <JobClient />
    </>
  );
}
