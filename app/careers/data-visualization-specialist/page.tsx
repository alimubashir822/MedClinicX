import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Data Visualization Specialist Jobs | Med Clinic X",
  description: "Join Med Clinic X as a Data Visualization Specialist. Build healthcare dashboards, analytics solutions, and data insights for US healthcare platforms.",
  keywords: [
    "Data Visualization Specialist",
    "Data Visualization Specialist Jobs USA",
    "Healthcare Data Visualization Specialist",
    "Healthcare BI Analyst Jobs",
    "Clinical Data Visualization Analyst",
    "Healthcare Dashboard Developer",
    "Power BI Developer Healthcare",
    "Healthcare Analytics Specialist",
    "Data Reporting Specialist Healthcare",
    "Digital Health Analytics Jobs",
    "Healthcare Business Intelligence Specialist"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/data-visualization-specialist" },
  openGraph: {
    title: "Data Visualization Specialist Jobs | Med Clinic X",
    description: "Join Med Clinic X as a Data Visualization Specialist. Build healthcare dashboards, analytics solutions, and data insights for US healthcare platforms.",
    url: "https://medclinicx.com/careers/data-visualization-specialist",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Data Visualization Specialist Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Data Visualization Specialist", item: "https://medclinicx.com/careers/data-visualization-specialist" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Data Visualization Specialist",
    description: "Design, develop, and maintain interactive dashboards, reports, and visual analytics solutions for healthcare technology platforms.",
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
