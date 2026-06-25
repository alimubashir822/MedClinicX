import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Technology Strategist Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as a Technology Strategist. Shape healthcare SaaS strategy, AI systems, and digital health innovation for US healthcare organizations.",
  keywords: [
    "Technology Strategist",
    "Technology Strategist Jobs USA",
    "Healthcare Technology Strategist",
    "Digital Health Strategy Consultant",
    "Healthcare IT Strategist",
    "SaaS Strategy Lead Healthcare",
    "Healthcare Innovation Strategist",
    "AI Healthcare Strategist",
    "Enterprise Technology Strategist Healthcare",
    "US Healthcare Technology Leadership",
    "Healthcare Transformation Strategist"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/technology-strategist" },
  openGraph: {
    title: "Technology Strategist Jobs | Med Clinic X Careers",
    description: "Join Med Clinic X as a Technology Strategist. Shape healthcare SaaS strategy, AI systems, and digital health innovation for US healthcare organizations.",
    url: "https://medclinicx.com/careers/technology-strategist",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Technology Strategist Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Technology Strategist", item: "https://medclinicx.com/careers/technology-strategist" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Technology Strategist",
    description: "Shape healthcare SaaS strategy, AI systems, and digital health innovation for US healthcare organizations.",
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
