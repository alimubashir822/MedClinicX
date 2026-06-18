import { Metadata } from "next";
import BlogClient from "./BlogClient";
import { blogPosts, getPostSlug } from "./blogData";

export const metadata: Metadata = {
  title: "Healthcare Technology Blog — AI, Patient Portals & Clinic Growth",
  description:
    "Read the Med Clinic X blog for expert insights on healthcare AI, clinical LLMs, patient portal best practices, medical SEO, HIPAA compliance, and strategies to grow your medical practice.",
  keywords: [
    "healthcare technology blog",
    "healthcare AI blog",
    "clinical LLM articles",
    "patient portal best practices",
    "medical SEO tips",
    "HIPAA compliance guide",
    "clinic growth strategies",
    "telemedicine technology",
    "digital health trends",
  ],
  alternates: {
    canonical: "https://medclinicx.com/blog",
  },
  openGraph: {
    title: "Healthcare Technology Blog — AI, Patient Portals & Clinic Growth | Med Clinic X",
    description:
      "Expert insights on healthcare AI, clinical LLMs, patient portal best practices, medical SEO, and strategies to grow your medical practice.",
    url: "https://medclinicx.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://medclinicx.com/blog" },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://medclinicx.com/blog",
    name: "Med Clinic X — Healthcare Technology Blog",
    description:
      "Expert insights on healthcare AI, clinical LLMs, patient portal best practices, HIPAA compliance, and clinic growth strategies.",
    url: "https://medclinicx.com/blog",
    publisher: { "@id": "https://medclinicx.com/#organization" },
    blogPost: Object.values(blogPosts).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://medclinicx.com/blog/${getPostSlug(post.title)}`,
      datePublished: new Date(post.date).toISOString().split("T")[0],
      author: { "@type": "Person", name: post.author },
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogClient />
    </>
  );
}
