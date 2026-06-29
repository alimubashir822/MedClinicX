"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Activity,
  Layers,
  Shield,
  Zap,
  ChevronDown,
  ArrowRight,
  Send,
  Users,
  Compass,
  FileText,
  MousePointerClick,
  Sparkles,
  Award
} from "lucide-react";

// Mock Data for Listings
const listingsMock = [
  { rank: "1", name: "Your Clinic — Local Specialist", rating: "4.9 ★ (188 reviews)", status: "Top Listing", color: "border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan" },
  { rank: "2", name: "Competitor Practice A", rating: "4.1 ★ (32 reviews)", status: "Organic Match", color: "border-brand-border/40 text-gray-400" },
  { rank: "3", name: "Competitor Practice B", rating: "3.8 ★ (15 reviews)", status: "Organic Match", color: "border-brand-border/40 text-gray-500" },
];

export default function SeoServicesClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", clinicName: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          clinic: form.clinicName,
          phone: "Not Provided",
          type: "Partnership Inquiry",
          message: `Inquiry from Doctor SEO Landing Page: ${form.msg}`,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Failed to submit. Please try again.");
      }
    } catch {
      setErrorMsg("Network error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "What is SEO for doctors?",
      a: "SEO for doctors is the process of optimizing a medical practice website and online presence to improve visibility on search engines like Google. It helps doctors attract more patients by appearing for relevant healthcare searches."
    },
    {
      q: "Why do doctors need SEO services?",
      a: "Doctors need SEO because many patients search online before choosing a healthcare provider. Professional SEO helps medical practices increase online visibility, reach local patients, build trust, and generate more appointment opportunities."
    },
    {
      q: "How long does SEO take for doctors?",
      a: "SEO results depend on factors such as website condition, local competition, target locations, content quality, and current rankings. Many practices begin seeing improvements after consistent optimization and content growth, usually within 3 to 6 months."
    },
    {
      q: "What makes healthcare SEO different from regular SEO?",
      a: "Healthcare SEO requires more focus on E-E-A-T principles (Experience, Expertise, Authoritativeness, and Trust), medical accuracy, patient confidentiality guidelines, and local search signals. A specialized approach helps create content and strategies suitable for healthcare audiences."
    },
    {
      q: "Do you provide local SEO for doctors?",
      a: "Yes. Our local SEO services help doctors improve visibility in location-based searches through Google Business Profile optimization, localized patient content, directory citations, and targeted geographic search terms."
    },
    {
      q: "How can SEO help doctors get more patients?",
      a: "SEO helps connect your practice with people actively searching for healthcare services. By improving rankings and visibility, your website can attract more qualified visitors who are ready to book appointments."
    },
    {
      q: "What keywords do doctors target with SEO?",
      a: "Healthcare keywords vary by specialty and location. Examples include 'Doctor near me', 'Best doctor in [city]', 'Medical specialist', 'Healthcare services', and specific treatment-related search queries."
    },
    {
      q: "Can SEO replace Google Ads for doctors?",
      a: "SEO and Google Ads serve different purposes. Google Ads provide immediate visibility, while SEO builds long-term organic growth. Many successful healthcare practices use both strategies together to maximize search presence."
    },
    {
      q: "How do I choose the best SEO company for doctors?",
      a: "Look for an SEO partner that understands healthcare regulations, patient search behavior, local search patterns, E-E-A-T content quality, and conversion optimization. A healthcare-focused SEO agency like Med Clinic X can create more relevant strategies."
    }
  ];

  return (
    <div className="bg-brand-bg text-gray-100 min-h-screen relative overflow-hidden pb-20">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 border border-brand-cyan/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">SEO for Doctors</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Grow Your Medical Practice With <span className="text-gradient-cyan-indigo">Professional SEO</span> Services
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Patients are searching online before choosing a healthcare provider. We provide specialized, HIPAA-aligned SEO strategies designed specifically to improve search rankings, attract qualified patients, and build a trusted digital presence.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#consultation" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-95 transition-opacity text-xs cursor-pointer">
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#features" className="inline-flex items-center border border-brand-border text-gray-300 hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-xs">
                Learn More
              </a>
            </div>
          </div>

          {/* Image Placeholder right side */}
          <div className="lg:col-span-5">
            <div className="glass-panel border border-brand-border rounded-3xl p-6 relative overflow-hidden shadow-2xl bg-[#040D18]/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-brand-indigo/5 pointer-events-none" />
              <div className="flex items-center justify-between mb-4 border-b border-brand-border pb-3">
                <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">Image Placeholder</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
              </div>
              
              <div className="h-60 rounded-2xl bg-brand-bg/50 border border-brand-border border-dashed flex flex-col items-center justify-center text-center p-6 space-y-3">
                <Search className="w-12 h-12 text-brand-cyan" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Search Performance Dashboard Mockup</p>
                  <p className="text-[10px] text-gray-500 max-w-[240px] mx-auto mt-1 leading-relaxed">
                    Visual graphic showing search engine rank tracking, index status, and organic search impressions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Importance Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16 border-t border-brand-border/40">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-3xl text-white">
            Why SEO for Doctors Is Important in Today’s Healthcare Industry
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Modern patients no longer rely only on referrals or traditional advertising when choosing a doctor. They use search engines as their first step to locate nearby providers and treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Increase Visibility on Google</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              Appear prominently in search results when potential patients look for general practices, specialist clinics, and specific medical treatments.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Reach Patients Near You</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              Local map packs and location-based keywords position your practice directly in front of patient intent in your city or surrounding areas.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Build Credibility and Trust</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              E-E-A-T focused medical content educational articles answer patient questions, establishing your practice as an authority.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-brand-border/40">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-3xl text-white">
            Our SEO Services for Doctors & Healthcare Websites
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our approach combines technical website optimization, patient-focused content strategy, local search directory mappings, and custom search campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="glass-panel border border-brand-border rounded-3xl p-6 relative overflow-hidden shadow-2xl bg-[#040D18]/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-brand-indigo/5 pointer-events-none" />
              <div className="flex items-center justify-between mb-4 border-b border-brand-border pb-3">
                <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">Image Placeholder</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-indigo animate-pulse" />
              </div>
              
              <div className="h-60 rounded-2xl bg-brand-bg/50 border border-brand-border border-dashed flex flex-col items-center justify-center text-center p-6 space-y-3">
                <MapPin className="w-12 h-12 text-brand-indigo" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Local SEO Google Business Mockup</p>
                  <p className="text-[10px] text-gray-500 max-w-[240px] mx-auto mt-1 leading-relaxed">
                    Visual display showing location citations mapping, Google maps ranking results, and local reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">Local SEO for Doctors: Get Found by Patients Near You</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Most healthcare searches have local intent. Our local SEO strategies optimize your Google Business Profile and local keywords to make sure you appear for local search queries.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-brand-border/40">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Google Business Profile Optimization</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-400">
                {["Category & Services Mappings", "Business Profile Integrity", "Patient Reviews Strategy", "Structured Location Schema", "NAP Consistency Audit", "Photos & Local Posting Setup"].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Steps & Process */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-brand-border/40">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-3xl text-white">
            Our Healthcare SEO Process for Doctors
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Finding the right SEO partner can directly impact your medical practice growth. We create a structured, data-driven framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-3">
            <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/15 rounded px-2.5 py-0.5">Step 01</span>
            <h4 className="font-bold text-white text-base pt-2">Healthcare SEO Audit</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              Comprehensive analysis of technical speed, indexing status, keyword opportunities, competitor profile, and site architecture gaps.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-3">
            <span className="text-xs font-mono font-bold text-brand-indigo bg-brand-indigo/15 rounded px-2.5 py-0.5">Step 02</span>
            <h4 className="font-bold text-white text-base pt-2">Keyword Intent Research</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              Identify search queries patients use when seeking specialty consultations, medical advice, local clinics, and treatment options.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-3">
            <span className="text-xs font-mono font-bold text-brand-emerald bg-brand-emerald/15 rounded px-2.5 py-0.5">Step 03</span>
            <h4 className="font-bold text-white text-base pt-2">Website & Form Optimization</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              Improve page speeds, mobile responsiveness, structural layouts, and appointment booking conversion pathways.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Google Ads + SEO Outline */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-brand-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">
              Google Ads for Doctors + SEO Growth Strategy
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              SEO builds sustainable, long-term organic visibility, while Google Ads captures immediate high-intent patient queries in your area. Together, they form a robust search strategy that drives balanced growth.
            </p>
            <div className="space-y-4 pt-4 border-t border-brand-border/40">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Google Ads Optimization</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Landing page conversion triggers, call tracking integration, and structured bidding configurations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-indigo shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">SEO Growth Foundation</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Build durable organic rankings, high E-E-A-T content, and local maps dominance to reduce ad spend over time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder right side */}
          <div>
            <div className="glass-panel border border-brand-border rounded-3xl p-6 relative overflow-hidden shadow-2xl bg-[#040D18]/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-brand-indigo/5 pointer-events-none" />
              <div className="flex items-center justify-between mb-4 border-b border-brand-border pb-3">
                <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">Image Placeholder</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald animate-pulse" />
              </div>
              
              <div className="h-60 rounded-2xl bg-brand-bg/50 border border-brand-border border-dashed flex flex-col items-center justify-center text-center p-6 space-y-3">
                <TrendingUp className="w-12 h-12 text-brand-emerald" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">SEO + SEM Traffic Performance Chart</p>
                  <p className="text-[10px] text-gray-500 max-w-[240px] mx-auto mt-1 leading-relaxed">
                    Graphic illustrating combined growth trends from organic search rankings and optimized Google Ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-brand-border/40">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-3xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm">
            Answers to common questions about our SEO services for medical clinics and practices.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel border border-brand-border rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-white/2"
              >
                <span className="text-sm font-bold text-white">{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-brand-cyan transition-transform shrink-0 ml-4 ${activeFaq === idx ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence initial={false}>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 pt-1 border-t border-brand-border/30 text-xs text-gray-400 leading-relaxed font-normal">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Consultation Form Section */}
      <section id="consultation" className="max-w-3xl mx-auto px-6 py-16 border-t border-brand-border/40">
        <div className="glass-panel rounded-3xl p-6 md:p-10 border border-brand-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center mb-8 space-y-3">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Start Building Your SEO Strategy Today
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
              Improve your online visibility, reach more local patients, and grow your medical practice with a professional healthcare SEO audit.
            </p>
          </div>

          {success ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Audit Request Received!</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. An SEO growth specialist from Med Clinic X will review your site and contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Dr. John Doe"
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="doctor@practice.com"
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Clinic or Practice Name</label>
                <input
                  type="text"
                  required
                  value={form.clinicName}
                  onChange={(e) => setForm({ ...form, clinicName: e.target.value })}
                  placeholder="Apex Medical Group"
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Target Location or SEO Goals</label>
                <textarea
                  rows={4}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Tell us about your target city, medical specialty, or specific search ranking goals..."
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold py-3.5 rounded-xl hover:opacity-95 transition-opacity disabled:opacity-60 text-xs cursor-pointer"
              >
                {loading ? (
                  <span className="animate-pulse">Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Free Consultation</span>
                  </>
                )}
              </button>

              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-center">
                  <span className="text-red-400 text-xs">{errorMsg}</span>
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
