import { MetadataRoute } from "next";
import { blogPosts, getPostSlug } from "./blog/blogData";

const BASE_URL = "https://medclinicx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ─── Core Pages ───────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // ─── Legal Pages ──────────────────────────────────────
    {
      url: `${BASE_URL}/hipaa`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // ─── Services Hub ─────────────────────────────────────
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ─── Solutions Hub ─────────────────────────────────────
    {
      url: `${BASE_URL}/solutions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ─── Calculators Hub ───────────────────────────────────
    {
      url: `${BASE_URL}/calculator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ─── Clinical Tools ────────────────────────────────────
    {
      url: `${BASE_URL}/calculator/a1c-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator/water-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator/lean-body-mass-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator/qtc-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator/anion-gap-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator/dental-implant-cost-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─── Individual Service Pages ─────────────────────────
    {
      url: `${BASE_URL}/services/healthcare-websites`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/ai-healthcare-solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/patient-portal-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/healthcare-saas-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/telemedicine-solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/healthcare-automation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/mobile-healthcare-apps`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/healthcare-seo-growth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // ─── Solutions Pages ──────────────────────────────────
    {
      url: `${BASE_URL}/solutions/ai-patient-portal`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/smart-dental-portal`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions/ai-medical-receptionist`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/telemedicine-consultation-platform`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/virtual-clinic-os`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/ai-healthcare-navigator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/careflow-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/carematch-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/health-os`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/intake-flow`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/medi-sync`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // ─── Blog Posts ───────────────────────────────────────
    ...Object.values(blogPosts).map((post) => ({
      url: `${BASE_URL}/blog/${getPostSlug(post.title, post.id)}`,
      lastModified: new Date(post.updatedDate),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
