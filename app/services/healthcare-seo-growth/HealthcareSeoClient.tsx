"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Globe,
  Activity,
  Layers,
  ChevronDown,
  Lock,
  Workflow,
  Cpu,
  Bookmark,
  Calendar,
  AlertCircle,
  TrendingUp,
  Shield,
  Zap,
  Database,
  Cloud,
  Code2,
  Bot,
  XCircle,
  CheckCircle,
  Clock,
  Rocket,
  BarChart3,
  List,
  MapPin,
  Laptop,
  Smartphone,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// TOC Config
// ─────────────────────────────────────────────────────────────
const tocItems = [
  { id: "hero",         label: "Hero",             num: "01" },
  { id: "trust",        label: "Trust",            num: "02" },
  { id: "problem",      label: "Problem",          num: "03" },
  { id: "solution",     label: "Solution",         num: "04" },
  { id: "services",     label: "Services",         num: "05" },
  { id: "features",     label: "Features",         num: "06" },
  { id: "industries",   label: "Industries",       num: "07" },
  { id: "process",      label: "Process",          num: "08" },
  { id: "case-studies", label: "Case Studies",     num: "09" },
  { id: "why-us",       label: "Why Us",           num: "10" },
  { id: "faqs",         label: "FAQ",              num: "11" },
  { id: "cta",          label: "Get Started",      num: "12" },
];

// ─────────────────────────────────────────────────────────────
// Inline Sub-Components
// ─────────────────────────────────────────────────────────────

function GoogleMapsPackMockup() {
  const listings = [
    { rank: "1", name: "Med Clinic X — Houston Primary Care", rating: "4.9 ★ (242 reviews)", status: "Top Listing", color: "border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan" },
    { rank: "2", name: "Metro Health Family Physicians", rating: "4.2 ★ (48 reviews)", status: "Organic Match", color: "border-brand-border/40 text-gray-400" },
    { rank: "3", name: "Regional Outpatient General Care", rating: "3.9 ★ (12 reviews)", status: "Organic Match", color: "border-brand-border/40 text-gray-500" },
  ];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-3 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-brand-cyan" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Google Maps Local Pack</p>
            <p className="text-[9px] text-brand-cyan font-medium flex items-center gap-1">
              Query: &quot;primary care clinic near me&quot;
            </p>
          </div>
        </div>
        <span className="text-[9px] font-bold uppercase text-gray-500 bg-brand-border px-2 py-0.5 rounded">Map Pack #1</span>
      </div>
      
      <div className="p-4 space-y-2.5">
        {listings.map((l, i) => (
          <div key={i} className={`border rounded-xl p-3 flex items-start justify-between ${l.color}`}>
            <div>
              <p className="text-xs font-bold text-white">{l.rank}. {l.name}</p>
              <p className="text-[10px] text-gray-400 mt-1">{l.rating}</p>
            </div>
            <span className="text-[8px] font-bold uppercase px-2 py-0.5 bg-brand-border/60 rounded text-gray-400 shrink-0">
              {l.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewAcquisitionMockup() {
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
        <span>review-acquisition-loop.py</span>
        <span className="text-brand-cyan font-bold">Feedback Loop Active</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="bg-brand-bg/60 border border-brand-border rounded-lg p-2.5 text-xs text-gray-400 space-y-1">
          <p className="font-bold text-white">SMS Sent to Patient:</p>
          <p className="italic">&quot;Hi David, thank you for visiting Med Clinic X today. We appreciate your feedback. Click here to leave us a review: mcx.gp/rev&quot;</p>
        </div>

        <div className="bg-brand-cyan/5 border border-brand-cyan/15 rounded-lg p-3 text-xs text-brand-cyan space-y-1">
          <p className="font-bold flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 animate-pulse" />Patient Left 5-Star Google Review</p>
          <p className="text-[10px] text-gray-400 leading-relaxed font-mono">
            &quot;Excellent experience today, checkin was fast, Dr. Jenkins explained credentials and care plans details correctly.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

function TechArchitectureDiagram() {
  const nodes = [
    { icon:<Search className="w-4 h-4" />,        label:"Local Business Schemas",sub:"MedicalClinic JSON-LD · NAP Consistency", color:"brand-cyan" },
    { icon:<Globe className="w-4 h-4" />,         label:"SEO Optimized Markup",  sub:"Semantic HTML · Next.js Server Components", color:"brand-indigo" },
    { icon:<Activity className="w-4 h-4" />,       label:"Review Loops API",      sub:"EHR Triggered SMS · Twilio routing",  color:"brand-cyan" },
    { icon:<TrendingUp className="w-4 h-4" />,     label:"Lead Funnel Widgets",   sub:"Fast calendars · Conversational leads", color:"brand-indigo" },
  ];
  return (
    <div className="flex flex-col items-center gap-0">
      {nodes.map((node, i) => (
        <React.Fragment key={node.label}>
          <motion.div
            initial={{ opacity:0, x:-12 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.4, delay: i * 0.1 }}
            viewport={{ once:true }}
            className="w-full glass-panel border border-brand-border rounded-xl px-5 py-3.5 flex items-center gap-4 hover:border-brand-cyan/20 transition-colors"
          >
            <div className={`w-9 h-9 rounded-xl bg-${node.color}/10 border border-${node.color}/20 flex items-center justify-center shrink-0 text-${node.color}`}>{node.icon}</div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white leading-tight">{node.label}</p>
              <p className="text-[10px] text-gray-500 font-medium mt-0.5">{node.sub}</p>
            </div>
            <span className="ml-auto w-2 h-2 rounded-full bg-brand-cyan/60 shrink-0 animate-pulse" />
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-4 bg-brand-cyan/20" />
              <ArrowRight className="w-3 h-3 text-brand-cyan/40 rotate-90" />
              <div className="w-px h-4 bg-brand-cyan/20" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FAQ Data
// ─────────────────────────────────────────────────────────────
const faqData = [
  { question: "1. How long does it take to see results from a medical SEO campaign?", answer: "Typical local search rankings turnaround times are 60 to 90 days. Optimizing Map packs and injecting JSON-LD schema markups yields rapid visibility index increases." },
  { question: "2. What is Local Map Pack optimization?", answer: "Google Map Pack shows the top 3 clinic listings in local searches. We structure name-address-phone (NAP) parameters across directory listings and audit Google Business profiles to claim top ranks." },
  { question: "3. How does automated review loops work?", answer: "The checkout event inside the practice portal triggers a webhook. The Twilio gateway dispatches a text alert asking patients to share their clinical experience, filtering and pushing logs to Google Business profiles." },
  { question: "4. What is Medical Clinic Schema Markup (JSON-LD)?", answer: "JSON-LD schema markup is structured code Google reads to index clinical credentials, doctor specialties, business hours, and location proximity correctly." },
  { question: "5. Are patient reviews loops HIPAA compliant?", answer: "Yes. Patients leave feedback voluntarily on public profiles. Automated SMS review loops only trigger checkin confirmations and do not share health data." },
];

// ─────────────────────────────────────────────────────────────
// Shared Section Header
// ─────────────────────────────────────────────────────────────
function SectionHeader({ badge, icon, title, subtitle }: { badge: string; icon: React.ReactNode; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4 border border-brand-cyan/20">
        {icon}
        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">{badge}</span>
      </div>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400/90 tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-slate-300/95 leading-relaxed font-normal">{subtitle}</p>}
    </div>
  );
}

export default function HealthcareSeoClient() {
  const [activeFaq, setActiveFaq]         = useState<number | null>(null);
  const [activeSection, setActiveSection]  = useState("hero");
  const [tocVisible, setTocVisible]        = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setTocVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 relative">
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-1/3 left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <FloatingTOC activeSection={activeSection} visible={tocVisible} />

      <div className="mb-10 flex items-center justify-between">
        <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Services
        </Link>
        <nav className="hidden sm:flex items-center gap-2 text-xs text-gray-500 font-medium">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-cyan transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gray-300 font-semibold">Healthcare SEO & Growth</span>
        </nav>
      </div>

      <div className="space-y-0">
          {/* ═══ 01 · HERO ═══════════════════════════════════════ */}
          <section id="hero" className="scroll-mt-20 pb-24 md:pb-28 pt-8 md:pt-16">
            <div className="w-full text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 flex flex-col items-center animate-fade-in"
              >
                <div className="inline-flex items-center gap-2 bg-brand-cyan/15 rounded-full px-4 py-1 border border-brand-cyan/20">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Medical Local SEO</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.12] text-center max-w-4xl mx-auto">
                  Medical Local SEO & Strategic Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-cyan to-brand-indigo">Intake Funnel Design</span>
                </h1>
                <p className="text-slate-300 text-base leading-relaxed text-center max-w-2xl mx-auto font-normal">
                  Med Clinic X optimizes local clinic search parameters to rank practices in Google Map Packs, capture reviews dynamically, and maximize organic patient conversions.
                </p>
                <div className="flex flex-wrap gap-2.5 text-xs font-medium text-gray-400 justify-center">
                  {["3.2x Organic Patient Leads", "Google Map Pack Domination", "Automated Feedback Loops", "JSON-LD Clinic Schema"].map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-brand-cyan" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Dominate Local Search <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="#faqs" onClick={e => { e.preventDefault(); document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" }) }} className="inline-flex items-center justify-center glass-panel border border-brand-border hover:border-brand-cyan/35 text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all">
                    Read FAQs
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ═══ 02 · TRUST BAR ══════════════════════════════════ */}
          <section id="trust" className="scroll-mt-20 pb-24 md:pb-28">
            <div className="space-y-8">
              <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Trusted by Clinics Scaling Organic Patient Channels
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon:<Users className="w-6 h-6 text-brand-cyan" />,    label:"Organic Patient Leads",   desc:"Patient check-ins generated via local Google Maps packs.",  stat:"3.2x" },
                  { icon:<Activity className="w-6 h-6 text-brand-cyan" />, label:"Partner practices",        desc:"Medical groups dominating local area listings.",           stat:"80+" },
                  { icon:<Globe className="w-6 h-6 text-brand-cyan" />,    label:"Average review ratings",   desc:"Average reviews collected dynamically via loop alerts.",       stat:"4.8★" },
                  { icon:<Zap className="w-6 h-6 text-brand-cyan" />,      label:"Ads Spend saved",    desc:"Marketing cost efficiency gains compared to paid PPC campaigns.",stat:"$80k+" },
                ].map((item,i)=>(
                  <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-3 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <p className="font-display font-extrabold text-3xl text-white tracking-tight leading-none">{item.stat}</p>
                    <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest">{item.label}</p>
                    <p className="text-base text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ 03 · PROBLEM ════════════════════════════════════ */}
          <section id="problem" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Pain Awareness"
              icon={<AlertCircle className="w-4 h-4 text-brand-cyan" />}
              title="Is Your Practice Invisible Online?"
              subtitle="Clinics lose local patients and waste budgets on paid ads when they lack organic search presence."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Invisible Local Maps Rankings",   desc:"Practices buried on page 3 of Google Maps packs lose patients searching within target regional counties.", impact:"Over 70% of local searches click the Top 3 map pack." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"High Paid Google Ads Expenses",      desc:"Practices relying strictly on paid ads budgets pay elevated costs per lead, reducing practice ROI.", impact:"Paid PPC average costs range from $80 to $120 per lead." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Low/Negative Online reviews",       desc:"No automated reviews system yields low volume and makes practices vulnerable to negative ratings.", impact:"84% of patients evaluate check-in ratings before visits." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Unoptimized Medical Landing Pages",     desc:"Outdated, non-mobile responsive landing pages drop patient conversions even when ad traffic lands.", impact:"Slow mobile pages drop conversion metrics by 50%." },
              ].map((p,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-red-500/10 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">{p.icon}</div>
                    <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
                  </div>
                  <p className="text-base text-slate-300 leading-relaxed mb-4">{p.desc}</p>
                  <div className="bg-red-500/5 border border-red-500/15 rounded-lg px-4 py-2.5">
                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-0.5">Industry Data</p>
                    <p className="text-xs text-gray-400">{p.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
              <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>healthcare-seo-turnaround.png</span>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 font-bold">❌ Invisible</span>
                  <span className="text-brand-cyan font-bold">✅ Maps Rank #1</span>
                </div>
              </div>
              <Image src="/service_healthcare_seo.png" alt="Google Maps Pack Ranking Visual Mockup" width={1200} height={600} className="w-full h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </section>

          {/* ═══ 04 · SOLUTION OVERVIEW ══════════════════════════ */}
          <section id="solution" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Transformation"
              icon={<Sparkles className="w-4 h-4 text-brand-cyan" />}
              title="The Med Clinic X Growth Blueprint"
              subtitle="We implement local map targeting, structured medical schemas, and automated feedback loops."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,    title:"Local Map Pack Domination",    desc:"Aligns practice directories, reviews volumes, and local schemas to claim top 3 Google Maps ranks.", outcome:"↑ High organic patient leads conversions" },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,   title:"Structured JSON-LD Schemas",         desc:"Injects MedicalClinic schemas and physician profiles so search bots index specialties correctly.", outcome:"↑ Enhanced search bot crawl performance" },
                { icon:<Activity className="w-5 h-5 text-brand-cyan" />, title:"Automated Reviews Loops",  desc:"Twilio text prompts ask patients for reviews upon checkout, syncing with Google Business profiles.", outcome:"↑ Reviews volumes and patient trust ratings" },
                { icon:<Cpu className="w-5 h-5 text-brand-cyan" />,      title:"Patient Lead Capture Funnels",       desc:"Conversion-tuned landing pages equipped with fast scheduling widgets to turn traffic into bookings.", outcome:"↑ Patient acquisitions cost down 80%" },
              ].map((sol,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">
                    {sol.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{sol.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed mb-4">{sol.desc}</p>
                  <div className="bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl px-4 py-2.5">
                    <p className="text-xs font-bold text-brand-cyan tracking-wide">{sol.outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display font-bold text-2xl text-white">How Patients Discover & Choose Your Practice</h3>
                <p className="text-base text-gray-400 leading-relaxed">Our local SEO framework guides patients from search inputs to confirmed appointments.</p>
                {[
                  { step:"01", label:"Local search Query", desc:"Patient searches &quot;dermatology clinic near me&quot;. Your practice ranks in the Top 3 pack." },
                  { step:"02", label:"Map Pack Discovery",  desc:"Patient checks reviews ratings and clinic proximity. Your 4.9★ rating builds trust." },
                  { step:"03", label:"Landing Page Visit",   desc:"Patient lands on conversion-tuned pages, reading about doctor specialties." },
                  { step:"04", label:"Booking Confirm",        desc:"Structured booking widgets confirm appointment slots in under 30 seconds." },
                  { step:"05", label:"Feedback SMS Loop",   desc:"Automated post-checkout SMS dispatches feedback requests to fuel the maps rank loops." },
                ].map((s,i)=>(
                  <div key={i} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-brand-cyan/15 border border-brand-cyan/25 text-[10px] font-bold text-brand-cyan flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                    <div>
                      <p className="text-sm font-bold text-white tracking-wide">{s.label}</p>
                      <p className="text-base text-slate-400 leading-relaxed mt-0.5 font-normal">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-brand-cyan/15 to-brand-indigo/15 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-brand-cyan/15 bg-brand-bg shadow-2xl">
                  <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>local-pack-rankings.png</span>
                    <span className="text-brand-cyan font-bold">GOOGLE MAPS</span>
                  </div>
                  <div className="p-4 grid grid-cols-1 gap-4 items-start">
                    <GoogleMapsPackMockup />
                    <ReviewAcquisitionMockup />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ 05 · SERVICES ═══════════════════════════════════ */}
          <section id="services" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Core Offerings"
              icon={<Layers className="w-4 h-4 text-brand-cyan" />}
              title="Medical SEO & Practice Growth Services"
              subtitle="Bespoke optimization campaigns targeting patient conversions and regional map supremacy."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mb-10">
              {[
                { col:6, icon:<Users className="w-5 h-5 text-brand-cyan" />,         title:"Google Map Pack Optimization",    desc:"Optimize Google Business Profiles, directory NAP consistency, and localized copy to claim Top 3 ranks.", tags:["GBP audits","Local directory sync","Localized copy tuning","County targeting"] },
                { col:6, icon:<Laptop className="w-5 h-5 text-brand-cyan" />,         title:"JSON-LD Structured Schema Injection",     desc:"Structured schema scripts detailing clinician credentials, clinic hours, coordinates, and specialties.", tags:["JSON-LD schemas","Doctor profile index","Search bot optimization"] },
                { col:4, icon:<Layers className="w-5 h-5 text-brand-cyan" />,    title:"Automated SMS Reviews Loops",        desc:"Twilio text prompts trigger post-checkout alerts asking patients for reviews, updating public profiles.", features:["SMS feedback logs","GBP auto redirection","Review filtering alerts"] },
                { col:4, icon:<Lock className="w-5 h-5 text-brand-cyan" />,      title:"Patient Lead Capture Funnels",         desc:"High-performance landing pages equipped with booking widgets and intake forms tuned for conversions.", features:["Fast page speed grid","Tuned booking prompts","Patient conversion widgets"] },
                { col:4, icon:<Cpu className="w-5 h-5 text-brand-cyan" />,       title:"Clinic Performance Tracking",            desc:"Google Analytics 4 setup, conversion rate funnels, and map pack track logs to analyze growth metrics.", features:["GA4 setup","Map pack track logs","Occupancy metric audits"] },
              ].map((card,i)=>(
                <div key={i} className={`${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} relative rounded-2xl flex flex-col group overflow-hidden transition-all duration-500 hover:-translate-y-1`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/20 via-brand-border to-brand-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] rounded-[14px] bg-[#0b1220] z-0" />
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 rounded-2xl border border-brand-border group-hover:border-transparent transition-colors duration-500 z-0" />
                  <div className="relative z-10 p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-indigo/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/25 flex items-center justify-center group-hover:from-brand-cyan/25 group-hover:to-brand-indigo/25 group-hover:border-brand-cyan/40 transition-all duration-300">
                          <div className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-brand-cyan">{card.icon}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-black text-brand-cyan/40 group-hover:text-brand-cyan/70 font-mono tracking-wider transition-colors duration-300 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug group-hover:text-brand-cyan transition-colors duration-300">{card.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{card.desc}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      {"tags" in card ? (
                        <>
                          <span className="text-[9px] uppercase font-black text-brand-cyan/60 tracking-[0.18em] block mb-3">Ideal for</span>
                          <div className="flex flex-wrap gap-1.5">
                            {card.tags?.map((t,ti)=>(
                              <span key={ti} className="bg-brand-cyan/5 border border-brand-cyan/15 text-[11px] font-semibold text-brand-cyan/80 px-2.5 py-1 rounded-lg group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/25 transition-colors duration-300">{t}</span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="text-[9px] uppercase font-black text-brand-cyan/60 tracking-[0.18em] block mb-3">Key Features</span>
                          <ul className="space-y-2">
                            {card.features?.map((f,fi)=>(
                              <li key={fi} className="flex items-center gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/20 transition-colors duration-300">
                                  <CheckCircle2 className="w-2.5 h-2.5 text-brand-cyan" />
                                </div>
                                <span className="text-xs text-slate-300 font-medium">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
              <div className="bg-brand-bg/90 px-4 py-2.5 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>seo-growth-application-screenshots.png</span>
                <span className="text-brand-cyan font-bold">SEO DEMONSTRATION</span>
              </div>
              <Image src="/service_healthcare_seo.png" alt="Medical SEO Ranking Metrics and Google Business Profile Dashboards" width={1200} height={500} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
          </section>

          {/* ═══ 06 · FEATURES / CAPABILITIES ═══════════════════ */}
          <section id="features" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Platform Capabilities"
              icon={<Zap className="w-4 h-4 text-brand-cyan" />}
              title="SEO Capabilities Built for Growth"
              subtitle="Ensuring map pack domination and clean patient conversion paths."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {[
                { icon:<MapPin className="w-5 h-5 text-brand-cyan" />,    title:"Google Map Pack Optimization",  desc:"GBP audits, localized citation tuning, and reviews management to claim Top 3 ranks." },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,       title:"Structured Schema Markup",      desc:"MedicalClinic JSON-LD schemas and physician profiles injected to optimize bot crawls." },
                { icon:<Smartphone className="w-5 h-5 text-brand-cyan" />,  title:"High-Speed Landing Pages",   desc:"Tuned Next.js frameworks loading in under 1.5 seconds, avoiding patient drop-offs." },
                { icon:<Shield className="w-5 h-5 text-brand-cyan" />,      title:"Automated Review Loops",        desc:"Checkout-triggered Twilio SMS alerts ask patients for ratings on Google Business profiles." },
                { icon:<Bot className="w-5 h-5 text-brand-cyan" />,         title:"Patient Lead Capture Widgets",      desc:"Fast booking interfaces and contact forms to convert search traffic immediately." },
                { icon:<BarChart3 className="w-5 h-5 text-brand-cyan" />,   title:"Clinic Performance Analytics",      desc:"Google Analytics 4 setup, checkout funnel logs, and map pack track stats built-in." },
              ].map((f,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{f.icon}</div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{f.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />Google Maps Pack Rankings</p>
                <GoogleMapsPackMockup />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><Activity className="w-3.5 h-3.5" />Automated Patient Review Acquisition Loop</p>
                <ReviewAcquisitionMockup />
              </div>
            </div>
          </section>

          {/* ═══ 07 · INDUSTRIES ════════════════════════════════ */}
          <section id="industries" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Who We Serve"
              icon={<Bookmark className="w-4 h-4 text-brand-cyan" />}
              title="Built for Growing Practices"
              subtitle="We align SEO campaigns to target regional patients searching for specialist providers."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon:<Users className="w-6 h-6 text-brand-cyan" />,   num:"01", segment:"Private Practices",       desc:"Dominate local area keyword searches and map rankings to capture new patients.",             highlights:["Local keyword mapping","GBP audits","Localized copy updates","Doctor schema markers"] },
                { icon:<Activity className="w-6 h-6 text-brand-cyan" />,num:"02", segment:"Specialist Centers",            desc:"Showcase doctor credentials and target high-value treatment keywords to boost practice bookings.",   highlights:["Specialty landing pages","Physician profiles schema","Treatment funnels","Review loops"] },
                { icon:<Globe className="w-6 h-6 text-brand-cyan" />,   num:"03", segment:"Multi-Location Networks",       desc:"Centralized SEO campaigns managing domain weight and map pack listings across multiple counties.",      highlights:["Multi-location directories","NAP listing alignments","Location page tuning","GA4 analytics setup"] },
                { icon:<Zap className="w-6 h-6 text-brand-cyan" />,     num:"04", segment:"Telemedicine Platforms",desc:"Scale search indexing speed, generate landing pages, and optimize B2B consult funnels.",      highlights:["Rapid index systems","Landing pages automation","Stripe billing hooks","Conversion metrics audits"] },
              ].map((item,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{item.icon}</div>
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider mb-1">{item.num}</span>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{item.segment}</h3>
                  <p className="text-base text-slate-300 leading-relaxed flex-1">{item.desc}</p>
                  <ul className="mt-4 pt-4 border-t border-brand-border/40 space-y-1.5">
                    {item.highlights.map((h,hi)=>(
                      <li key={hi} className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 08 · PROCESS ═══════════════════════════════════ */}
          <section id="process" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="How It Works"
              icon={<Workflow className="w-4 h-4 text-brand-cyan" />}
              title="Our 5-Step Practice Growth Process"
              subtitle="Scoping searches, designing funnels, implementing schemas, and launching review loops."
            />
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[calc(10%-2px)] right-[calc(10%-2px)] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {[
                  { icon:<Search className="w-5 h-5" />,    step:"01", label:"Scoping",    color:"brand-cyan",   desc:"Audit search volumes, competitor local map rankings, and target patient keywords." },
                  { icon:<Layers className="w-5 h-5" />,   step:"02", label:"UX Design",      color:"brand-indigo", desc:"Patient funnel wireframes, landing page layouts, and review SMS designs." },
                  { icon:<Code2 className="w-5 h-5" />,     step:"03", label:"Development", color:"brand-cyan",   desc:"Build Next.js landing templates, inject JSON-LD schemas, and set up Twilio webhooks." },
                  { icon:<Rocket className="w-5 h-5" />,    step:"04", label:"Audits",      color:"brand-indigo", desc:"Verify schema script outputs, test checkin confirmation alerts, and review page speeds." },
                  { icon:<BarChart3 className="w-5 h-5" />, step:"05", label:"Launch",      color:"brand-cyan",   desc:"Launch maps packs campaign, active review sms loops, and audit GA4 charts." },
                ].map((step,i)=>(
                  <motion.div
                    key={i}
                    initial={{ opacity:0, y:20 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:0.4, delay: i * 0.1 }}
                    viewport={{ once:true }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className={`relative w-20 h-20 rounded-2xl bg-${step.color}/10 border border-${step.color}/20 flex items-center justify-center mb-4 text-${step.color} group-hover:scale-105 transition-all duration-300`}>
                      {step.icon}
                      <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-${step.color} text-[9px] font-extrabold text-brand-bg flex items-center justify-center shadow-lg`}>{step.step}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide">{step.label}</h3>
                    <p className="text-base text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-4 flex items-center gap-2"><Database className="w-3.5 h-3.5" />SEO Stack Infrastructure</p>
                <TechArchitectureDiagram />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-brand-cyan rounded-full" />Our SEO & Growth Technology Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label:"Markup & Optimization",       icon:<Zap className="w-4 h-4 text-brand-cyan" />,      items:["Next.js Server components","TypeScript","Google Rich Results Schema","NAP directory APIs"] },
                    { label:"Reviews loops Sockets",       icon:<Database className="w-4 h-4 text-brand-cyan" />,  items:["Twilio SMS triggers","EHR webhooks integrations","PostgreSQL database logs","Pinecone vector listings"] },
                    { label:"Cloud Funnels",               icon:<Cloud className="w-4 h-4 text-brand-cyan" />,     items:["Vercel Edge Routes","Cloudflare security WAF","AWS S3 landing caches","Google Search Console API"] },
                    { label:"Analytics Layer",             icon:<Shield className="w-4 h-4 text-brand-cyan" />,    items:["Google Analytics 4","Google Business Profile APIs","SEO ranking checkers","GTM Conversion tracking"] },
                  ].map((col,i)=>(
                    <div key={i} className="glass-panel p-5 rounded-xl border border-brand-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center">{col.icon}</div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{col.label}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {col.items.map((item,j)=>(
                          <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan/60 shrink-0" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ 09 · CASE STUDIES ══════════════════════════════ */}
          <section id="case-studies" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Proof of Results"
              icon={<Activity className="w-4 h-4 text-brand-cyan" />}
              title="Practice SEO Campaigns We Have Conducted"
              subtitle="Real results showing local search ranking improvements and lead growth."
            />

            <div className="max-w-4xl mx-auto mb-14">
              <div className="glass-panel p-8 md:p-10 rounded-3xl border border-brand-border flex flex-col md:flex-row gap-8 items-start hover:border-brand-cyan/20 transition-all duration-300">
                <div className="space-y-5 flex-1">
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">Local SEO</span>
                  <h3 className="font-display font-bold text-3xl text-white tracking-tight leading-snug">Regional Orthopedic Group — SEO Growth</h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">A 6-location orthopedic group was invisible in local searches. We optimized directory listings, set up automated checkout SMS review prompts, and injected doctor-level JSON-LD schemas.</p>
                </div>
                <div className="space-y-3 w-full md:w-[45%] shrink-0">
                  {[
                    { label:"Challenge", text:"Invisible on Maps page 3 · 120 monthly organic visitors · Zero reviews acquisition framework",             color:"text-red-400" },
                    { label:"Solution",  text:"Google Business Profile audits, JSON-LD schema injection, SMS feedback loop, optimized landing grids",  color:"text-yellow-400" },
                    { label:"Result",    text:"Top 3 Google Maps rankings · 2,500+ monthly organic visitors · +320% monthly check-in bookings",        color:"text-green-400" },
                  ].map((r,i)=>(
                    <div key={i} className="glass-panel px-4 py-3.5 rounded-xl border border-brand-border/60 flex items-start gap-3 hover:border-brand-cyan/20 transition-colors duration-200">
                      <span className={`text-[9px] font-bold uppercase tracking-wider shrink-0 mt-0.5 ${r.color}`}>{r.label}</span>
                      <span className="text-base text-slate-300 leading-relaxed">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { category:"Map Pack",    title:"Dentistry Local Map Domination",   challenge:"Hidden on page 3 of local maps search results.", solution:"GBP audits + localized directory alignment listings.", result:"Top 3 Google Maps rankings in target regional counties.", color:"brand-indigo", tag:"Google Maps Pack" },
                { category:"Review Loop", title:"Dermatology Reviews Loop Setup",challenge:"Low volume, negative reviews skewing clinic ratings.", solution:"Twilio checkout-triggered SMS feedback link dispatches.", result:"Average clinic ratings increased to 4.8★ in 60 days.",   color:"brand-cyan",   tag:"SMS Review Loops" },
                { category:"Lead Funnel",     title:"Cosmetic Surgery Booking Funnel",   challenge:"High ad spend yielding poor check-in metrics.", solution:"Next.js landing pages with fast calendar scheduling.", result:"Conversion rate increased from 2.1% to 7.6% in 90 days.", color:"brand-cyan", tag:"Booking Funnels" },
              ].map((study,i)=>(
                <div key={i} className="glass-panel rounded-2xl border border-brand-border overflow-hidden hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col">
                  <div className={`h-1 bg-gradient-to-r from-${study.color} to-brand-indigo`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[9px] font-bold text-${study.color} uppercase tracking-widest bg-${study.color}/10 border border-${study.color}/20 px-2.5 py-1 rounded-full`}>{study.category}</span>
                      <span className="text-[9px] text-gray-500 font-medium">{study.tag}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-brand-cyan transition-colors leading-snug">{study.title}</h3>
                    <div className="space-y-3 flex-1">
                      {[{l:"Challenge",v:study.challenge,c:"text-red-400"},{l:"Solution",v:study.solution,c:"text-yellow-400"},{l:"Result",v:study.result,c:"text-green-400"}].map((r,ri)=>(
                        <div key={ri}>
                          <p className={`text-[9px] font-bold uppercase tracking-wider ${r.c} mb-0.5`}>{r.l}</p>
                          <p className="text-base text-slate-300 leading-relaxed font-normal">{r.v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 10 · WHY CHOOSE MED CLINIC X ══════════════════ */}
          <section id="why-us" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Competitive Edge"
              icon={<Workflow className="w-4 h-4 text-brand-cyan" />}
              title="Why Choose Med Clinic X SEO?"
              subtitle="We build organic practice visibility solutions focused exclusively on patient acquisition."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon:<Shield className="w-4 h-4 text-brand-cyan" />,        label:"Local SEO" },
                    { icon:<Zap className="w-4 h-4 text-brand-cyan" />,           label:"Map Pack Top 3" },
                    { icon:<Search className="w-4 h-4 text-brand-cyan" />,        label:"Structured Schema" },
                    { icon:<CheckCircle2 className="w-4 h-4 text-brand-cyan" />,  label:"Review SMS Loops" },
                    { icon:<Clock className="w-4 h-4 text-brand-cyan" />,         label:"Conversion Funnels" },
                    { icon:<TrendingUp className="w-4 h-4 text-brand-cyan" />,    label:"High Occupancy" },
                  ].map((b,i)=>(
                    <div key={i} className="flex items-center gap-2 glass-panel border border-brand-border px-3 py-2.5 rounded-xl">
                      {b.icon}<span className="text-xs font-semibold text-gray-300">{b.label}</span>
                    </div>
                  ))}
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-brand-cyan/15 bg-brand-cyan/5">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">Our SEO Design Standards</p>
                  <div className="space-y-2 text-xs text-gray-400 font-medium">
                    {["Google Map Pack Proximity Tuning","Structured JSON-LD Schema Markups","Twilio SMS Reviews loops integrations","High-Performance Next.js Page Speeds","SOC 2 Type II Cloud Funnel servers","Conversion rate optimization widgets"].map((p,i)=>(
                      <div key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />{p}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {[
                  { title:"Google Map Pack Proximity Optimization", desc:"Google maps searches drive over 70% of local patient check-ins. We audit directories, align citations, and manage review loops to ensure your practice claims Top 3 positions." },
                  { title:"JSON-LD Structured Schema Markups", desc:"Inject rich schema code detailing business hours, services, geographical coordinates, and clinician credentials, optimizing search bot index indexing." },
                  { title:"Twilio Checkout SMS Review Loops", desc:"Patient checkout checkouts automatically trigger custom text prompts. Automated pipelines direct positive logs directly to Google Business profiles." },
                  { title:"High-Performance Conversion Landing Pages", desc:"Slow page speeds drop campaign returns. We develop fast-loading landing layouts equipped with instant booking widgets to turn search hits into patient check-ins." },
                ].map((item,idx)=>(
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/25 hover:shadow-[0_0_25px_rgba(6,182,212,0.05)] hover:-translate-y-0.5 transition-all duration-300">
                    <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2.5">
                      <span className="w-1 h-4 bg-brand-cyan rounded-sm shrink-0" />{item.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ 11 · FAQ ════════════════════════════════════════ */}
          <section id="faqs" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Knowledge Base"
              icon={<Calendar className="w-4 h-4 text-brand-cyan" />}
              title="Frequently Asked Questions"
              subtitle="SEO timelines, Map-Pack factors, review guidelines, and schema types."
            />
            <div className="max-w-4xl mx-auto space-y-3">
              {faqData.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-base md:text-lg text-white hover:text-brand-cyan transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-brand-cyan" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.25, ease:"easeInOut" }}>
                          <div className="px-6 pb-6 pt-1 text-base text-gray-400 leading-relaxed border-t border-brand-border/30">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ═══ 12 · FINAL CTA ════════════════════════════════ */}
          <section id="cta" className="scroll-mt-20 pb-24 md:pb-28">
            <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#071828] via-[#0a1f30] to-[#0d1a2e]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.10),transparent_60%)]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />

              <div className="relative p-10 sm:p-16 text-center">
                <div className="inline-flex items-center gap-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Ready to Build?</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
                  Ready to Dominate Regional Map Pack Rankings?
                </h2>
                <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
                  Book a discovery call with our digital health engineering specialists to audit your current platform, calculate ROI, and plan your software rollout.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center glass-panel border border-brand-border/60 hover:border-brand-cyan/25 text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </section>

      </div>{/* /content */}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Floating TOC Popup
// ─────────────────────────────────────────────────────────────
function FloatingTOC({ activeSection, visible }: { activeSection: string; visible: boolean }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const activeItem = tocItems.find((t) => t.id === activeSection);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: "-50%", x: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: "-50%", x: 0, scale: 1 }}
            exit={{ opacity: 0, y: "-50%", x: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 md:right-6 top-1/2 z-50"
          >
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-2 rounded-2xl border shadow-lg shadow-black/40 transition-all duration-200 ${
                open
                  ? "bg-brand-cyan text-brand-bg border-brand-cyan"
                  : "bg-[#060F1E] text-gray-300 border-brand-border hover:border-brand-cyan/40 hover:text-white"
              } p-3 md:pl-3.5 md:pr-4 md:py-2.5`}
            >
              <List className={`w-4 h-4 shrink-0 transition-colors ${open ? "text-brand-bg" : "text-brand-cyan"}`} />
              <span className="text-[11px] font-bold hidden md:inline">
                {open ? "Close" : (activeItem ? `${activeItem.num} · ${activeItem.label}` : "Contents")}
              </span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: "-50%", x: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: "-50%", x: 0, scale: 1 }}
                  exit={{ opacity: 0, y: "-50%", x: 12, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-full top-1/2 mr-3 bg-[#060F1E] border border-brand-border rounded-2xl shadow-2xl shadow-black/60 overflow-hidden w-56"
                >
                  <div className="px-4 py-3 border-b border-brand-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <List className="w-3.5 h-3.5 text-brand-cyan" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">On This Page</span>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      className="w-5 h-5 rounded-full bg-brand-border/60 hover:bg-brand-border flex items-center justify-center transition-colors"
                    >
                      <ChevronDown className="w-3 h-3 text-gray-400 -rotate-90" />
                    </button>
                  </div>

                  <nav className="p-2 max-h-[50vh] overflow-y-auto">
                    {tocItems.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-150 ${
                            isActive
                              ? "bg-brand-cyan/12 border border-brand-cyan/20"
                              : "hover:bg-brand-bg/80 border border-transparent"
                          }`}
                        >
                          <span className={`text-[9px] font-bold shrink-0 w-5 ${isActive ? "text-brand-cyan" : "text-gray-600"}`}>{item.num}</span>
                          <span className={`w-0.5 h-3.5 rounded-full shrink-0 transition-colors ${isActive ? "bg-brand-cyan" : "bg-brand-border/60"}`} />
                          <span className={`text-[11px] font-semibold truncate ${isActive ? "text-white" : "text-gray-500"}`}>{item.label}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  <div className="px-4 py-3 border-t border-brand-border/60">
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-brand-bg bg-brand-cyan hover:bg-brand-cyan/90 py-2 px-3 rounded-lg transition-all w-full"
                    >
                      <Sparkles className="w-3 h-3" />
                      Book Free Consultation
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
