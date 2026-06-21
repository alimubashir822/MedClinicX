"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Check, 
  Copy, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  ChevronDown
} from "lucide-react";
import { BlogPost, blogPosts, getPostSlug } from "../blogData";

interface ArticleClientProps {
  post: BlogPost;
}

export default function ArticleClient({ post }: ArticleClientProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [checklistEmail, setChecklistEmail] = useState("");
  const [checklistStatus, setChecklistStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail, source: "Blog Sidebar Newsletter" }),
      });
      if (res.ok) {
        setNewsletterStatus("success");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
      }
    } catch (err) {
      console.error("Blog sidebar newsletter error:", err);
      setNewsletterStatus("error");
    }
  };

  const handleChecklistRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checklistEmail) return;
    setChecklistStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: checklistEmail, source: "Blog Sidebar Lead Magnet (AI Checklist)" }),
      });
      if (res.ok) {
        setChecklistStatus("success");
        setChecklistEmail("");
      } else {
        setChecklistStatus("error");
      }
    } catch (err) {
      console.error("Blog sidebar checklist error:", err);
      setChecklistStatus("error");
    }
  };

  // Reading Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Table of Contents Scroll Highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting heading
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1
      }
    );

    const headings = document.querySelectorAll("article [id]");
    headings.forEach((el) => observer.observe(el));

    return () => {
      headings.forEach((el) => observer.unobserve(el));
    };
  }, [post]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getRelatedPosts = () => {
    return post.relatedPostIds
      .map((id) => blogPosts[id])
      .filter((p): p is BlogPost => !!p);
  };

  return (
    <div className="relative min-h-screen">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo z-[60] transition-all duration-100 ease-out shadow-sm shadow-brand-cyan/20"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[800px] left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12">
        {/* Breadcrumb Schema (JSON-LD generated in Server Component) */}
        <nav className="flex items-center space-x-1.5 text-xs text-gray-500 mb-8 font-medium">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-400 font-semibold">{post.category}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-300 truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-[11px] font-bold text-brand-cyan uppercase tracking-wider mb-6">
            {post.category}
          </div>
          
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed mb-8 border-l-2 border-brand-cyan pl-4">
            {post.summary}
          </p>

          {/* Author metadata panel */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 bg-brand-card border border-brand-border rounded-xl p-4 sm:p-5">
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-indigo flex items-center justify-center font-bold text-white shadow-md shadow-brand-cyan/15 text-[11px]">
                {post.authorImage}
              </div>
              <div>
                <p className="font-semibold text-gray-200">{post.author}</p>
                <p className="text-[10px] text-gray-500">{post.authorRole}</p>
              </div>
            </div>

            <div className="h-4 w-px bg-brand-border hidden sm:block" />

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Published: {post.date}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-[10px] bg-brand-border text-gray-400 font-semibold px-2 py-0.5 rounded">
                Updated: {post.updatedDate}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-[2/1] max-h-[500px] rounded-2xl overflow-hidden mb-12 border border-brand-border shadow-2xl group">
          <Image 
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/85 via-transparent to-transparent" />
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar / Left Column: Table of Contents & Social Share */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-8 self-start">
            {/* Table of Contents Container */}
            <div className="glass-panel rounded-2xl p-5 border border-brand-border">
              <div className="flex items-center space-x-2 pb-4 mb-4 border-b border-brand-border">
                <BookOpen className="w-4 h-4 text-brand-cyan" />
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">Table of Contents</h3>
              </div>
              <nav className="space-y-3">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-xs leading-relaxed font-medium transition-all pl-2.5 border-l-2 ${
                      activeId === item.id
                        ? "border-brand-cyan text-brand-cyan font-semibold translate-x-0.5"
                        : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-700"
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Share Container */}
            <div className="glass-panel rounded-2xl p-5 border border-brand-border flex flex-col gap-4">
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider">Share This Article</h3>
              <div className="flex flex-col gap-2">
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-start px-3 py-2 rounded-lg bg-brand-bg hover:bg-brand-indigo/10 border border-brand-border hover:border-brand-indigo/30 text-gray-400 hover:text-white transition-all text-xs font-semibold gap-2.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#0a66c2]" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}&text=${encodeURIComponent(post.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-start px-3 py-2 rounded-lg bg-brand-bg hover:bg-brand-indigo/10 border border-brand-border hover:border-brand-indigo/30 text-gray-400 hover:text-white transition-all text-xs font-semibold gap-2.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span>Share on X</span>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-start px-3 py-2 rounded-lg bg-brand-bg hover:bg-brand-indigo/10 border border-brand-border hover:border-brand-indigo/30 text-gray-400 hover:text-white transition-all text-xs font-semibold gap-2.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#1877f2]" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
                  <span>Facebook</span>
                </a>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-start px-3 py-2 rounded-lg bg-brand-bg hover:bg-brand-cyan/10 border border-brand-border hover:border-brand-cyan/30 text-gray-400 hover:text-white transition-all text-xs font-semibold gap-2.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-emerald" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-[11px] text-gray-400 leading-relaxed">
              <span className="font-bold text-yellow-500 uppercase tracking-wider block mb-1">Medical Disclaimer</span>
              This article is for informational and technical illustration purposes only and does not replace professional medical advice, diagnosis, or clinical deployment configurations.
            </div>

            {/* Newsletter Signup Container */}
            <div className="glass-panel rounded-2xl p-5 border border-brand-border flex flex-col gap-4">
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider">Get IT Insights</h3>
              <p className="text-[11px] text-gray-400 leading-normal">
                Receive AI trends, SaaS updates, and digital transformation tips directly in your inbox.
              </p>
              {newsletterStatus === "success" ? (
                <div className="bg-brand-cyan/10 border border-brand-cyan/35 text-brand-cyan text-[11px] rounded-lg p-2.5 text-center font-medium animate-pulse">
                  ✓ Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubscribe} className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    disabled={newsletterStatus === "loading"}
                    className="w-full bg-brand-bg/60 border border-brand-border rounded-lg px-3 py-2 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="w-full bg-brand-cyan hover:bg-brand-cyan/95 text-brand-bg font-bold text-xs py-2 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {newsletterStatus === "loading" ? "Subscribing..." : "Subscribe Now"}
                  </button>
                  {newsletterStatus === "error" && (
                    <p className="text-[10px] text-red-400">Failed to subscribe. Try again.</p>
                  )}
                </form>
              )}
            </div>

            {/* Lead Magnet Container */}
            <div className="glass-panel rounded-2xl p-5 border border-brand-cyan/20 bg-brand-cyan/5 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-cyan/10 rounded-full blur-xl pointer-events-none" />
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider">Free Checklist</h3>
              <div>
                <h4 className="font-display font-bold text-xs text-brand-cyan leading-snug">Healthcare AI Implementation Checklist</h4>
                <p className="text-[10px] text-gray-400 mt-1.5 leading-relaxed">
                  Comprehensive operational guide detailing security controls, BAA audits, and cloud deployment boundaries.
                </p>
              </div>
              {checklistStatus === "success" ? (
                <div className="bg-brand-emerald/10 border border-brand-emerald/35 text-brand-emerald text-[11px] rounded-lg p-2.5 text-center font-medium animate-pulse">
                  ✓ Checklist requested successfully!
                </div>
              ) : (
                <form onSubmit={handleChecklistRequest} className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter business email"
                    required
                    value={checklistEmail}
                    onChange={(e) => setChecklistEmail(e.target.value)}
                    disabled={checklistStatus === "loading"}
                    className="w-full bg-brand-bg/60 border border-brand-border rounded-lg px-3 py-2 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
                  />
                  <button
                    type="submit"
                    disabled={checklistStatus === "loading"}
                    className="w-full bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-xs py-2.5 rounded-lg hover:opacity-95 transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-50"
                  >
                    <span>{checklistStatus === "loading" ? "Requesting..." : "Download PDF"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {checklistStatus === "error" && (
                    <p className="text-[10px] text-red-400">Failed to request. Try again.</p>
                  )}
                </form>
              )}
            </div>
          </aside>

          {/* Reading Layout Content / Center Column */}
          <article className="lg:col-span-9 max-w-4xl prose prose-invert prose-cyan">
            {/* Key Takeaways Box */}
            <div className="glass-panel border border-brand-cyan/25 bg-gradient-cyber rounded-2xl p-6 mb-8 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-cyan" />
              <h3 className="font-display font-bold text-xs text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                <span>Key Takeaways</span>
              </h3>
              <ul className="space-y-2.5">
                {post.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                    <span className="text-brand-cyan mr-2.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 text-gray-300 leading-relaxed font-sans text-sm sm:text-base">
              {post.sections.map((section, idx) => {
                switch (section.type) {
                  case "paragraph":
                    return (
                      <p key={idx} className="text-gray-300 leading-relaxed text-base font-normal">
                        {section.text}
                      </p>
                    );
                  
                  case "heading2":
                    return (
                      <h2 
                        key={idx} 
                        id={section.id} 
                        className="font-display font-bold text-xl sm:text-2xl text-white pt-6 border-b border-brand-border pb-2 flex items-center"
                      >
                        <span className="w-1.5 h-6 bg-brand-cyan rounded-md mr-3 inline-block" />
                        {section.text}
                      </h2>
                    );

                  case "heading3":
                    return (
                      <h3 
                        key={idx} 
                        id={section.id} 
                        className="font-display font-semibold text-lg sm:text-xl text-gray-100 pt-4"
                      >
                        {section.text}
                      </h3>
                    );

                  case "list":
                    return (
                      <ul key={idx} className="space-y-3 list-none pl-1">
                        {section.items?.map((item, i) => {
                          const parts = item.split(":");
                          return (
                            <li key={i} className="flex items-start text-sm sm:text-base">
                              <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-brand-cyan mt-2 mr-3.5 shadow-sm shadow-brand-cyan/20" />
                              <span className="text-gray-300">
                                {parts.length > 1 ? (
                                  <>
                                    <strong className="text-white font-semibold">{parts[0]}:</strong>
                                    {parts.slice(1).join(":")}
                                  </>
                                ) : item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    );

                  case "code":
                    return (
                      <div key={idx} className="rounded-xl overflow-hidden border border-brand-border shadow-xl my-6">
                        {/* Code Title/Label */}
                        <div className="bg-brand-bg px-4 py-2 border-b border-brand-border flex items-center justify-between text-xs text-gray-500 font-mono">
                          <span>{section.language === "typescript" ? "clinicalTriageHandler.ts" : "schema.sql"}</span>
                          <span className="uppercase text-[9px] font-bold bg-brand-border px-2 py-0.5 rounded text-gray-400">
                            {section.language}
                          </span>
                        </div>
                        <pre className="p-4 sm:p-5 bg-[#050B14] overflow-x-auto text-[13px] font-mono text-cyan-400/90 leading-normal">
                          <code>{section.code}</code>
                        </pre>
                      </div>
                    );

                  case "table":
                    return (
                      <div key={idx} className="overflow-x-auto rounded-xl border border-brand-border my-6 shadow-lg">
                        <table className="min-w-full divide-y divide-brand-border bg-brand-card">
                          <thead className="bg-brand-bg/40">
                            <tr>
                              {section.headers?.map((header, i) => (
                                <th 
                                  key={i} 
                                  className="px-4.5 py-3.5 text-left text-xs font-bold text-gray-200 uppercase tracking-wider font-display"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-brand-border text-xs sm:text-sm text-gray-300">
                            {section.rows?.map((row, i) => (
                              <tr key={i} className="hover:bg-brand-cyan/5 transition-colors">
                                {row.map((cell, cellIdx) => (
                                  <td 
                                    key={cellIdx} 
                                    className="px-4.5 py-3 font-medium border-t border-brand-border"
                                  >
                                    {cell.includes("%") || cell.startsWith("$") ? (
                                      <span className="font-semibold text-brand-emerald">{cell}</span>
                                    ) : cell === "High (Frequent app use)" || cell === "24/7/365 Instant Access" || cell === "Instant conversational classification" || cell === "Automated structured JSON payload push" ? (
                                      <span className="text-brand-cyan font-semibold">{cell}</span>
                                    ) : cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );

                  case "callout":
                    const isSuccess = section.style === "success";
                    const isWarning = section.style === "warning";
                    return (
                      <div 
                        key={idx} 
                        className={`rounded-xl border p-5 my-6 relative overflow-hidden ${
                          isSuccess 
                            ? "bg-brand-emerald/5 border-brand-emerald/20 text-gray-300"
                            : isWarning
                            ? "bg-brand-cyan/5 border-brand-cyan/20 text-gray-300"
                            : "bg-brand-indigo/5 border-brand-indigo/20 text-gray-300"
                        }`}
                      >
                        {/* Accent Bar */}
                        <div className={`absolute top-0 bottom-0 left-0 w-1 ${
                          isSuccess ? "bg-brand-emerald" : isWarning ? "bg-brand-cyan" : "bg-brand-indigo"
                        }`} />
                        <h4 className="font-display font-bold text-sm text-white mb-2 uppercase tracking-wide">
                          {section.title}
                        </h4>
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {section.text}
                        </p>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
            </div>

            {/* Trust Element: Author Bio Box */}
            <section className="glass-panel rounded-2xl p-6 sm:p-8 mt-12 border border-brand-border flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-indigo flex items-center justify-center font-bold text-white text-xl sm:text-2xl shadow-xl shadow-brand-cyan/15">
                {post.authorImage}
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display font-bold text-lg text-white">Written by {post.author}</h3>
                  <span className="text-[11px] text-brand-cyan font-semibold uppercase">{post.authorRole}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {post.authorBio}
                </p>
                <a 
                  href={post.authorLinkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-1.5 text-xs text-brand-cyan font-bold hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#0a66c2]" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </section>

            {/* AI-Generated FAQ Section */}
            <section id="faqs" className="mt-12 space-y-6">
              <div className="flex items-center space-x-2 border-b border-brand-border pb-3">
                <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">Frequently Asked Questions</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">
                Common conversational queries evaluated by our natural language models concerning deployment guidelines.
              </p>

              <div className="space-y-3.5">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="glass-panel rounded-xl overflow-hidden border border-brand-border transition-all">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full text-left px-5 py-4 flex justify-between items-center text-sm font-semibold text-white hover:text-brand-cyan transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                          openFaqs[i] ? "rotate-180 text-brand-cyan" : ""
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {openFaqs[i] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-brand-border/40">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>

        {/* Horizontal separator */}
        <div className="border-t border-brand-border mt-16 pt-12" />

        {/* Related Articles Section */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">Related Healthcare Technology Insights</h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Further reading to build your medical IT infrastructure strategy.</p>
            </div>
            <Link 
              href="/blog"
              className="text-xs font-semibold text-brand-cyan hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>View all insights</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getRelatedPosts().map((relatedPost) => (
              <article 
                key={relatedPost.id}
                className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-brand-cyan/20 transition-all group"
              >
                <div>
                  <span className="text-[9px] font-bold text-brand-cyan uppercase bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/10">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white leading-snug mt-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2.5 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
                
                <div className="mt-6 pt-3 border-t border-brand-border flex items-center justify-between text-[10px] text-gray-500">
                  <span>{relatedPost.date}</span>
                  <Link 
                    href={`/blog/${getPostSlug(relatedPost.title, relatedPost.id)}`}
                    className="text-brand-indigo group-hover:text-white font-bold transition-colors flex items-center space-x-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action Section (SEO & Conversion focused) */}
        <section className="relative rounded-3xl overflow-hidden mt-16 p-8 sm:p-12 md:p-16 border border-brand-cyan/25 bg-gradient-cyber shadow-2xl shadow-brand-cyan/5 text-center max-w-5xl mx-auto">
          {/* Decorative ambient blobs */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-cyan/10 rounded-full blur-[40px] pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-indigo/10 rounded-full blur-[40px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Start Deploying Today</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Ready to Build a Smarter Healthcare Platform?
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed font-normal">
              Empower your practice with an automated, HIPAA-compliant patient portal, clinical AI agents, and patient communications built for growth.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo hover:from-brand-cyan/95 hover:to-brand-indigo/95 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/website-development"
                className="w-full sm:w-auto inline-flex items-center justify-center glass-panel hover:bg-brand-cyan/10 border border-brand-border hover:border-brand-cyan/25 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white px-7 py-3.5 rounded-xl transition-all"
              >
                Learn Web Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
