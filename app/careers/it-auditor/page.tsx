import { Metadata } from "next";
import JobClient from "./JobClient";
export const metadata: Metadata = {
  title: "IT Auditor Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as an IT Auditor. Ensure compliance, security, and risk control across healthcare SaaS, cloud systems, and US digital health platforms.",
  keywords: ["IT Auditor","IT Auditor Jobs USA","Healthcare IT Auditor","IT Compliance Auditor Healthcare","Cybersecurity Auditor Healthcare","HIPAA IT Auditor Jobs","Digital Health Compliance Auditor"],
  alternates: { canonical: "https://medclinicx.com/careers/it-auditor" },
  openGraph: { title: "IT Auditor Jobs | Med Clinic X Healthcare Careers", description: "Join Med Clinic X as an IT Auditor. Ensure compliance, security, and risk control across healthcare SaaS, cloud systems, and US digital health platforms.", url: "https://medclinicx.com/careers/it-auditor", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IT Auditor Job at Med Clinic X" }] },
};
export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" }, { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" }, { "@type": "ListItem", position: 3, name: "IT Auditor", item: "https://medclinicx.com/careers/it-auditor" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "IT Auditor", description: "Evaluate, assess, and ensure compliance of healthcare SaaS platforms, cloud infrastructure, and digital health systems across the United States.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}