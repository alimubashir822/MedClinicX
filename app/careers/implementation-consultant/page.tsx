import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Implementation Consultant Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as an Implementation Consultant. Deploy healthcare SaaS, integrate EHR systems, and support US healthcare digital transformation.",
  keywords: ["Implementation Consultant","Implementation Consultant Jobs USA","Healthcare Implementation Consultant","SaaS Implementation Consultant Healthcare","Clinical Systems Implementation Jobs","EHR Implementation Consultant","Healthcare Software Implementation Specialist","Digital Health Implementation Consultant","Healthcare Onboarding Specialist Jobs","US Healthcare SaaS Implementation","Medical Software Deployment Consultant"],
  alternates: { canonical: "https://medclinicx.com/careers/implementation-consultant" },
  openGraph: { title: "Implementation Consultant Jobs | Med Clinic X Careers", description: "Join Med Clinic X as an Implementation Consultant. Deploy healthcare SaaS, integrate EHR systems, and support US healthcare digital transformation.", url: "https://medclinicx.com/careers/implementation-consultant", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Implementation Consultant Job at Med Clinic X" }] },
};

export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "Implementation Consultant", item: "https://medclinicx.com/careers/implementation-consultant" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "Implementation Consultant", description: "Manage the deployment, configuration, and onboarding of healthcare SaaS platforms for clients across the United States.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}
