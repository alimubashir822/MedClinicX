import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "CRM Specialist Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as a CRM Specialist. Manage healthcare CRM systems, automation workflows, and customer engagement platforms for US healthcare growth.",
  keywords: ["CRM Specialist","CRM Specialist Jobs USA","Healthcare CRM Specialist","CRM Administrator Healthcare","Healthcare SaaS CRM Manager","Customer Relationship Management Specialist","Healthcare Customer Engagement Specialist","Salesforce CRM Specialist Healthcare","HubSpot CRM Specialist Healthcare","Healthcare Growth Operations Jobs","Digital Health CRM Specialist"],
  alternates: { canonical: "https://medclinicx.com/careers/crm-specialist" },
  openGraph: { title: "CRM Specialist Jobs | Med Clinic X Healthcare Careers", description: "Join Med Clinic X as a CRM Specialist. Manage healthcare CRM systems, automation workflows, and customer engagement platforms for US healthcare growth.", url: "https://medclinicx.com/careers/crm-specialist", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CRM Specialist Job at Med Clinic X" }] },
};

export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "CRM Specialist", item: "https://medclinicx.com/careers/crm-specialist" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "CRM Specialist", description: "Manage, optimize, and improve customer relationship management systems supporting healthcare technology growth.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}
