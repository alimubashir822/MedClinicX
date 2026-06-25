import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "IoT Developer Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as an IoT Developer. Build connected healthcare devices, IoT platforms, and digital health solutions for US healthcare systems.",
  keywords: [
    "IoT Developer",
    "IoT Developer Jobs USA",
    "Healthcare IoT Developer",
    "Medical IoT Engineer",
    "Connected Healthcare Developer",
    "IoT Software Engineer Healthcare",
    "Digital Health IoT Engineer",
    "Healthcare Device Integration Engineer",
    "Remote Patient Monitoring Developer",
    "IoT Platform Engineer Healthcare",
    "US Healthcare Technology Jobs"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/iot-developer" },
  openGraph: {
    title: "IoT Developer Jobs | Med Clinic X Healthcare Careers",
    description: "Join Med Clinic X as an IoT Developer. Build connected healthcare devices, IoT platforms, and digital health solutions for US healthcare systems.",
    url: "https://medclinicx.com/careers/iot-developer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IoT Developer Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "IoT Developer", item: "https://medclinicx.com/careers/iot-developer" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "IoT Developer",
    description: "Design, develop, and integrate connected healthcare technology solutions that improve patient monitoring, healthcare workflows, and digital health experiences.",
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
