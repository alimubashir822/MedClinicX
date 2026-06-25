import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Pre-Sales Engineer Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as a Pre-Sales Engineer. Support healthcare SaaS sales, demos, and technical solutions for US hospitals, clinics, and providers.",
  keywords: [
    "Pre-Sales Engineer",
    "Pre-Sales Engineer Jobs USA",
    "Healthcare Pre-Sales Engineer",
    "Sales Engineer Healthcare SaaS",
    "Technical Sales Engineer Healthcare",
    "Solutions Engineer Healthcare Sales",
    "Healthcare SaaS Sales Engineer",
    "Digital Health Pre-Sales Engineer",
    "US Healthcare Technology Sales Jobs",
    "Healthcare Product Demo Engineer",
    "Clinical Software Sales Engineer"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/pre-sales-engineer" },
  openGraph: {
    title: "Pre-Sales Engineer Jobs | Med Clinic X Healthcare Careers",
    description: "Join Med Clinic X as a Pre-Sales Engineer. Support healthcare SaaS sales, demos, and technical solutions for US hospitals, clinics, and providers.",
    url: "https://medclinicx.com/careers/pre-sales-engineer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pre-Sales Engineer Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Pre-Sales Engineer", item: "https://medclinicx.com/careers/pre-sales-engineer" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Pre-Sales Engineer",
    description: "Support healthcare SaaS sales, demos, and technical solutions for US hospitals, clinics, and providers.",
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
