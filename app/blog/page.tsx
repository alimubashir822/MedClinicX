"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, Clock, Calendar, User, ArrowRight, BookMarked } from "lucide-react";

interface Post {
  id: string;
  title: string;
  category: "Healthcare AI" | "Medical Technology" | "Clinic Growth" | "Patient Experience";
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Healthcare AI", "Medical Technology", "Clinic Growth", "Patient Experience"];

  const posts: Post[] = [
    {
      id: "post-1",
      title: "How Large Language Models are Revolutionizing Patient Care Systems",
      category: "Healthcare AI",
      excerpt: "An in-depth look at how fine-tuned clinical LLMs are streamlining patient triage and decreasing administrative fatigue for doctors.",
      author: "Dr. Sarah Jenkins",
      date: "June 14, 2026",
      readTime: "6 min read",
    },
    {
      id: "post-2",
      title: "The Shift to Patient-First Portals: Metrics that Matter for Growth",
      category: "Patient Experience",
      excerpt: "Explore the correlation between unified patient-portal access and clinical repeat-visit rates in local medical centers.",
      author: "Marcus Rivera",
      date: "May 28, 2026",
      readTime: "5 min read",
    },
    {
      id: "post-3",
      title: "Optimizing Practice SEO: How to Rank at the Top of Local Healthcare Searches",
      category: "Clinic Growth",
      excerpt: "A step-by-step roadmap to ranking your practice website, capturing localized queries, and streamlining online appointment pathways.",
      author: "Chloe Vance",
      date: "May 15, 2026",
      readTime: "8 min read",
    },
    {
      id: "post-4",
      title: "HIPAA Compliant Datastores: What Developers Need to Know",
      category: "Medical Technology",
      excerpt: "Breaking down encryption protocols, logging requirements, and credential policies when coding applications holding patient data.",
      author: "Alex Chen",
      date: "May 02, 2026",
      readTime: "7 min read",
    },
    {
      id: "post-5",
      title: "Decreasing Patient No-Show Rates with Predictive AI Scheduling",
      category: "Healthcare AI",
      excerpt: "How clinic automation systems analyze historical booking behaviors to proactively send tailored reminders and secure schedules.",
      author: "Dr. Sarah Jenkins",
      date: "April 18, 2026",
      readTime: "4 min read",
    },
    {
      id: "post-6",
      title: "Vitals Telemetry: Connecting Home Monitors to Doctor Workflows",
      category: "Medical Technology",
      excerpt: "A case study on integrating Bluetooth glucose scales and ECG wearables directly with custom doctor dashboard portals.",
      author: "Dr. Alex Patel",
      date: "April 05, 2026",
      readTime: "9 min read",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-indigo/5 rounded-full blur-[100px] -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 bg-brand-indigo/15 rounded-full px-3 py-1 mb-6">
          <BookMarked className="w-4 h-4 text-brand-indigo" />
          <span className="text-xs font-semibold text-brand-indigo uppercase">Insights & Articles</span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-white">Healthcare Technology Blog</h1>
        <p className="mt-4 text-sm text-gray-400">
          Stay informed on digital medical trends, clinical artificial intelligence, SEO rankings, and practices growth strategy.
        </p>
      </div>

      {/* Search & Category Filter Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-bg/50 border border-brand-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
          />
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat
                  ? "bg-brand-indigo text-white shadow-md shadow-brand-indigo/15"
                  : "glass-panel glass-panel-hover text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/10">
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-lg text-white leading-snug mt-4 group-hover:text-brand-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-3">{post.excerpt}</p>
              </div>

              <div className="mt-8 border-t border-brand-border pt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between text-[11px] text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-xs font-semibold text-brand-indigo group-hover:text-white transition-colors flex items-center space-x-1 self-start cursor-pointer"
                >
                  <span>Read full article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-white font-medium text-lg">No articles found</h3>
          <p className="text-sm text-gray-500 mt-1">Try tweaking your search keywords or categories filter.</p>
        </div>
      )}
    </div>
  );
}
