import { Metadata } from "next";
import JobClient from "./JobClient";
export const metadata: Metadata = {
  title: "Database Engineer Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as a Database Engineer. Design secure, scalable healthcare databases for SaaS, AI, and clinical systems in US healthcare platforms.",
  keywords: ["Database Engineer","Database Engineer Jobs USA","Healthcare Database Engineer","SQL Database Engineer Healthcare","Clinical Data Engineer Jobs","Healthcare Data Engineer SQL","SaaS Database Engineer Healthcare","Cloud Database Engineer Healthcare","Healthcare Data Systems Engineer","US Healthcare Data Engineer"],
  alternates: { canonical: "https://medclinicx.com/careers/database-engineer" },
  openGraph: { title: "Database Engineer Jobs | Med Clinic X Healthcare Careers", description: "Join Med Clinic X as a Database Engineer. Design secure, scalable healthcare databases for SaaS, AI, and clinical systems in US healthcare platforms.", url: "https://medclinicx.com/careers/database-engineer", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Database Engineer Job at Med Clinic X" }] },
};
export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "Database Engineer", item: "https://medclinicx.com/careers/database-engineer" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "Database Engineer", description: "Design, optimize, and maintain scalable database systems for healthcare SaaS and digital health platforms across the United States.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}