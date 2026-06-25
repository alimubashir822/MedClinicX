import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "IT Program Manager Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as an IT Program Manager. Lead healthcare SaaS programs, digital health delivery, and cross-functional tech initiatives in the USA.",
  keywords: [
    "IT Program Manager",
    "IT Program Manager Jobs USA",
    "Healthcare IT Program Manager",
    "Technical Program Manager Healthcare",
    "Healthcare SaaS Program Manager",
    "Digital Health Program Manager",
    "IT Project Portfolio Manager Healthcare",
    "Healthcare Technology Program Lead",
    "US Healthcare IT Leadership Jobs",
    "Software Program Manager Healthcare",
    "Healthcare Delivery Program Manager"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/it-program-manager" },
  openGraph: {
    title: "IT Program Manager Jobs | Med Clinic X Healthcare Careers",
    description: "Join Med Clinic X as an IT Program Manager. Lead healthcare SaaS programs, digital health delivery, and cross-functional tech initiatives in the USA.",
    url: "https://medclinicx.com/careers/it-program-manager",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IT Program Manager Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "IT Program Manager", item: "https://medclinicx.com/careers/it-program-manager" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "IT Program Manager",
    description: "Lead and coordinate large-scale healthcare technology programs across multiple teams and initiatives.",
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
