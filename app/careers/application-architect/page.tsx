import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Application Architect Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as an Application Architect. Design scalable healthcare SaaS applications, cloud solutions, and digital health platforms in the USA.",
  keywords: [
    "Application Architect",
    "Application Architect Jobs USA",
    "Healthcare Application Architect",
    "Software Application Architect Healthcare",
    "SaaS Application Architect",
    "Cloud Application Architect Jobs",
    "Healthcare Software Architect",
    "Digital Health Application Architect",
    "Enterprise Application Architect Healthcare",
    "Healthcare Platform Architect",
    "US Healthcare Software Jobs"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/application-architect" },
  openGraph: {
    title: "Application Architect Jobs | Med Clinic X Careers",
    description: "Join Med Clinic X as an Application Architect. Design scalable healthcare SaaS applications, cloud solutions, and digital health platforms in the USA.",
    url: "https://medclinicx.com/careers/application-architect",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Application Architect Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Application Architect", item: "https://medclinicx.com/careers/application-architect" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Application Architect",
    description: "Design, define, and guide the architecture of healthcare software applications and digital platforms.",
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
