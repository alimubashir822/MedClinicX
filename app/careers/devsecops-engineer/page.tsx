import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "DevSecOps Engineer Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as a DevSecOps Engineer. Secure healthcare SaaS platforms, cloud infrastructure, and AI systems for US healthcare organizations.",
  keywords: ["DevSecOps Engineer","DevSecOps Engineer Jobs USA","Healthcare DevSecOps Engineer","Cloud Security Engineer Healthcare","Secure Software Engineer Healthcare","DevOps Security Engineer SaaS","Healthcare Cloud Security Jobs","Application Security Engineer Healthcare","Security Automation Engineer","Healthcare Infrastructure Security Engineer","US Healthcare Cybersecurity Jobs"],
  alternates: { canonical: "https://medclinicx.com/careers/devsecops-engineer" },
  openGraph: { title: "DevSecOps Engineer Jobs | Med Clinic X Careers", description: "Join Med Clinic X as a DevSecOps Engineer. Secure healthcare SaaS platforms, cloud infrastructure, and AI systems for US healthcare organizations.", url: "https://medclinicx.com/careers/devsecops-engineer", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DevSecOps Engineer Job at Med Clinic X" }] },
};

export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "DevSecOps Engineer", item: "https://medclinicx.com/careers/devsecops-engineer" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "DevSecOps Engineer", description: "Integrate security practices into our software development and infrastructure processes.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}
