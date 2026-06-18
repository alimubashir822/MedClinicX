import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { blogPosts, getPostSlug } from "../blogData";
import ArticleClient from "./ArticleClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Pre-render blog posts at build time (Performance Optimization)
export async function generateStaticParams() {
  return Object.values(blogPosts).map((post) => ({
    id: getPostSlug(post.title),
  }));
}

// Generate dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = Object.values(blogPosts).find(
    (p) => getPostSlug(p.title) === id || p.id === id
  );

  if (!post) {
    return {
      title: "Article Not Found | Med Clinic X",
      description: "The requested blog article was not found.",
    };
  }

  const canonicalUrl = `https://medclinicx.com/blog/${getPostSlug(post.title)}`;

  return {
    title: `${post.title} | Med Clinic X Insights`,
    description: post.excerpt,
    keywords: `healthcare technology, clinical AI, patient portal, medical reception, practice growth, ${post.category.toLowerCase()}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "Med Clinic X",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.updatedDate).toISOString(),
      authors: [post.author],
      images: [
        {
          url: `https://medclinicx.com${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://medclinicx.com${post.featuredImage}`],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { id } = await params;
  const post = Object.values(blogPosts).find(
    (p) => getPostSlug(p.title) === id || p.id === id
  );

  if (!post) {
    notFound();
  }

  const expectedSlug = getPostSlug(post.title);
  if (id !== expectedSlug) {
    redirect(`/blog/${expectedSlug}`);
  }

  // Define structured JSON-LD data for SEO crawling
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://medclinicx.com/#organization",
    "name": "Med Clinic X",
    "url": "https://medclinicx.com",
    "logo": "https://medclinicx.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/medclinicx"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://medclinicx.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://medclinicx.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.category,
        "item": `https://medclinicx.com/blog?category=${encodeURIComponent(post.category)}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": post.title,
        "item": `https://medclinicx.com/blog/${expectedSlug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://medclinicx.com${post.featuredImage}`,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.updatedDate).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole,
      "sameAs": post.authorLinkedin
    },
    "publisher": {
      "@type": "Organization",
      "name": "Med Clinic X",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medclinicx.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://medclinicx.com/blog/${expectedSlug}`
    }
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      {/* Schema Markup Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Render layout component */}
      <ArticleClient post={post} />
    </>
  );
}
