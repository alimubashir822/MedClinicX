"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Smile,
  Phone,
  Video,
  LayoutDashboard,
  Brain,
  TrendingUp,
  Users,
  Activity,
  FileText,
  Database,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { solutionsData } from "./solutionsData";

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-5 h-5 text-brand-cyan" />,
  Smile: <Smile className="w-5 h-5 text-brand-cyan" />,
  Phone: <Phone className="w-5 h-5 text-brand-cyan" />,
  Video: <Video className="w-5 h-5 text-brand-cyan" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-brand-cyan" />,
  Brain: <Brain className="w-5 h-5 text-brand-cyan" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-brand-cyan" />,
  Users: <Users className="w-5 h-5 text-brand-cyan" />,
  Activity: <Activity className="w-5 h-5 text-brand-cyan" />,
  FileText: <FileText className="w-5 h-5 text-brand-cyan" />,
  Database: <Database className="w-5 h-5 text-brand-cyan" />,
};

const categories = [
  "All",
  "Clinical AI & Automation",
  "Patient Portals & Engagement",
  "Practice Operations",
  "Growth & Marketing"
];

export default function SolutionsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSolutions = solutionsData.filter(
    (sol) => selectedCategory === "All" || sol.category === selectedCategory
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
      {/* Background glows */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest">Our Solutions</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
          Enterprise Systems for Clinical Excellence
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Explore purpose-built operating systems, secure patient portals, and intelligence suites customized for high-growth specialty practices and medical networks.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
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

      {/* Solutions List — alternating layout */}
      <motion.div layout className="space-y-6 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredSolutions.map((sol, idx) => (
            <motion.article
              key={sol.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="glass-panel rounded-2xl border border-brand-border hover:border-brand-cyan/20 transition-all overflow-hidden group"
            >
              <div className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Image column */}
                <div className="md:w-72 lg:w-80 shrink-0 relative overflow-hidden bg-brand-bg/60">
                  <Image
                    src={sol.image}
                    alt={`${sol.title} — Med Clinic X`}
                    width={320}
                    height={220}
                    className="w-full h-48 md:h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  {/* Stat badge overlay */}
                  <div className="absolute bottom-3 left-3 bg-brand-bg/80 backdrop-blur-sm border border-brand-cyan/20 rounded-lg px-3 py-1.5">
                    <p className="font-display font-extrabold text-lg text-brand-cyan leading-none">{sol.stat}</p>
                    <p className="text-[9px] font-medium text-gray-400 mt-0.5">{sol.statLabel}</p>
                  </div>
                </div>

                {/* Content column */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                          {iconMap[sol.iconName] || <Activity className="w-5 h-5 text-brand-cyan" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{sol.category}</span>
                          <h2 className="font-display font-bold text-lg text-white leading-tight group-hover:text-brand-cyan transition-colors">
                            {sol.title}
                          </h2>
                        </div>
                      </div>
                      {sol.badge && (
                        <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/15 px-2.5 py-1 rounded-full shrink-0">
                          {sol.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-5">{sol.desc}</p>

                    {/* Feature bullets */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {sol.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-brand-border/50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-600 font-medium">Clinical Operating Solution</span>
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:text-white bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/20 hover:border-brand-cyan/40 px-4 py-2 rounded-lg transition-all"
                    >
                      Explore Solution
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Banner */}
      <section className="relative rounded-2xl overflow-hidden p-8 sm:p-12 border border-brand-cyan/20 bg-gradient-cyber text-center">
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-brand-cyan/8 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-brand-indigo/8 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Ready to Streamline Your Practice Operations?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Talk with our medical workflow designers to audit your clinic schedules, patient onboarding intake friction, and EHR sync capability.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Request Custom Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center glass-panel border border-brand-border hover:border-brand-cyan/25 text-sm font-semibold text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all"
            >
              See Sandbox Demos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
