"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Layers,
  Brain,
  Activity,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Search,
  X
} from "lucide-react";
import { jobData } from "./jobData";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-5 h-5 text-brand-cyan" />,
  Layers: <Layers className="w-5 h-5 text-brand-cyan" />,
  Brain: <Brain className="w-5 h-5 text-brand-cyan" />,
  Activity: <Activity className="w-5 h-5 text-brand-cyan" />,
  Briefcase: <Briefcase className="w-5 h-5 text-brand-cyan" />,
};

const categories = [
  "All",
  "Data & Analytics",
  "Clinical Informatics",
  "Project Management"
];

export default function CareersClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredJobs = jobData.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.features.some((feat) => feat.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest">Careers at Med Clinic X</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
          Build the Future of Healthcare SaaS
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Join our mission to revolutionize clinical data, build HIPAA-compliant portals, and engineer AI automation systems. Explore open engineering, analyst, and clinical informatics roles.
        </p>
      </div>

      {/* Search & Category Filters Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 max-w-4xl mx-auto w-full">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-brand-cyan text-brand-bg border-brand-cyan shadow-sm shadow-brand-cyan/20"
                  : "glass-panel text-gray-400 hover:text-white border-brand-border hover:border-brand-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search roles or keywords..."
            className="w-full bg-brand-bg/60 border border-brand-border rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/35 transition-all"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 p-0.5 rounded-full hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Jobs List Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
            <motion.article
              key={job.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="glass-panel rounded-2xl border border-brand-border hover:border-brand-cyan/20 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all overflow-hidden group flex flex-col justify-between"
            >
              <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                        {iconMap[job.iconName] || <Briefcase className="w-4.5 h-4.5 text-brand-cyan" />}
                      </div>
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{job.category}</span>
                    </div>
                    {job.badge && (
                      <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full">
                        {job.badge}
                      </span>
                    )}
                  </div>

                  {/* Title and Stats (Location) */}
                  <div className="flex items-start justify-between gap-4 pt-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-brand-cyan transition-colors leading-tight">
                      {job.title}
                    </h3>
                    <div className="text-right shrink-0 bg-brand-cyan/5 border border-brand-cyan/20 rounded-lg px-2.5 py-1.5">
                      <p className="font-display font-bold text-xs text-brand-cyan leading-none">{job.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {job.desc}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 pt-3 border-t border-brand-border/40">
                    {job.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300 font-medium">
                        <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    href={job.href}
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all shadow-md shadow-brand-cyan/10"
                  >
                    <span>View Details & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-16 space-y-4"
          >
            <p className="text-gray-400 text-sm">No job openings found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="text-xs font-bold text-brand-cyan hover:underline cursor-pointer"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

      {/* CTA Banner */}
      <section className="relative rounded-2xl overflow-hidden p-8 sm:p-12 border border-brand-cyan/20 bg-gradient-cyber text-center">
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-brand-cyan/8 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-brand-indigo/8 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Don&apos;t See a Matching Role?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We are always looking for talented engineers, clinical informatics professionals, and product innovators passionate about improving US healthcare.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Submit Open Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
