"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  { rank: "1", name: "Your Medical Practice — Top Rated", rating: "4.9 ★ (192 reviews)", status: "Rank #1 Maps", color: "border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan" },
  { rank: "2", name: "Local Competitor Practice A", rating: "4.2 ★ (38 reviews)", status: "Organic Match", color: "border-brand-border/40 text-gray-400" },
  { rank: "3", name: "Local Competitor Practice B", rating: "3.9 ★ (12 reviews)", status: "Organic Match", color: "border-brand-border/40 text-gray-500" },
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
          message: `Inquiry from Complete Doctor SEO Page: ${form.msg}`,
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
      a: "SEO results depend on factors such as website condition, competition, location, content quality, and current rankings. Many practices begin seeing improvements after consistent optimization and content growth."
    },
    {
      q: "What makes healthcare SEO different from regular SEO?",
      a: "Healthcare SEO requires more focus on trust, accuracy, medical expertise, patient experience, and local healthcare searches. A specialized approach helps create content and strategies suitable for healthcare audiences."
    },
    {
      q: "Do you provide local SEO for doctors?",
      a: "Yes. Our local SEO services help doctors improve visibility in location-based searches through Google Business Profile optimization, local content, healthcare directories, and location targeting."
    },
    {
      q: "How can SEO help doctors get more patients?",
      a: "SEO helps connect your practice with people actively searching for healthcare services. By improving rankings and visibility, your website can attract more qualified visitors who may become patients."
    },
    {
      q: "What keywords do doctors target with SEO?",
      a: "Healthcare keywords vary by specialty and location. Examples include 'Doctor near me', 'Best doctor in [city]', 'Medical specialist', 'Healthcare services', and treatment-related searches."
    },
    {
      q: "Can SEO replace Google Ads for doctors?",
      a: "SEO and Google Ads serve different purposes. Google Ads can provide immediate visibility, while SEO builds long-term organic growth. Many successful healthcare practices use both strategies together."
    },
    {
      q: "How do I choose the best SEO company for doctors?",
      a: "Look for an SEO partner that understands healthcare marketing, patient search behavior, local SEO, content quality, and conversion optimization. A healthcare-focused SEO company can create more relevant strategies."
    }
  ];

  return (
    <div className="bg-brand-bg text-gray-100 min-h-screen relative overflow-hidden pb-20">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-16 md:py-28 max-w-7xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 mb-2 mx-auto">
          <Sparkles className="w-4.5 h-4.5 text-brand-cyan animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-brand-cyan uppercase">Healthcare SEO Agency</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none">
          Grow Your Practice With <span className="text-gradient-cyan-indigo">SEO Services</span> for Doctors
        </h1>
        <p className="mt-6 text-base text-gray-400 leading-relaxed max-w-4xl mx-auto">
          Patients are searching online before choosing a healthcare provider. Whether they are looking for a specialist, primary care physician, dentist, or medical clinic, your online visibility plays a major role in whether they discover your practice or choose a competitor.
        </p>
        <p className="text-base text-gray-400 leading-relaxed max-w-4xl mx-auto">
          At Med Clinic X, we provide specialized <strong>SEO services for doctors</strong> designed specifically for healthcare professionals who want to improve search rankings, attract qualified patients, and build a stronger digital presence.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#consultation" className="w-full sm:w-auto bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-brand-cyan/10 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 hover:scale-[1.02] text-sm cursor-pointer">
            <span>Book Free SEO Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#packages" className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 active:scale-[0.98] transition-all hover:scale-[1.02] text-sm cursor-pointer">
            <span>View SEO Packages</span>
          </a>
        </div>
      </section>

      {/* Intro Context Paragraphs */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-t border-brand-border/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base text-gray-400 leading-relaxed">
          <p>
            Unlike traditional SEO approaches, healthcare SEO requires a deeper understanding of patient search behavior, medical content standards, local visibility, trust signals, and healthcare industry requirements. Our <strong>SEO strategy for doctors</strong> focuses on helping medical professionals appear where patients are actively searching — from Google search results and local maps to healthcare-related queries.
          </p>
          <p>
            Whether you are a solo physician, specialist, clinic owner, or growing healthcare organization, our healthcare-focused SEO solutions help transform online searches into real patient opportunities. We customize our approach around your specialties and targets.
          </p>
        </div>
      </section>

      {/* 2. WHY SEO IS IMPORTANT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Why SEO for Doctors Is Important in Today’s Healthcare Industry
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Modern patients no longer rely only on referrals or traditional advertising when choosing a doctor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-xl text-white">What Patients Search For Online:</h3>
            <ul className="space-y-3.5">
              {[
                "Best doctors near me",
                "Specialists in their area",
                "Treatment options & clinical procedures",
                "Medical conditions & symptom checkers",
                "Reviews and healthcare providers ratings",
                "Appointment availability and clinics opening hours"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm md:text-base text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              If your practice does not appear prominently in search results, potential patients may never find your services.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-xl text-white">How Effective SEO Helps Your Medical Practice:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Increase visibility on Google", desc: "Rank higher for both local searches and medical terms." },
                { title: "Reach targeted patients", desc: "Connect with patients actively searching for your services." },
                { title: "Build credibility and trust", desc: "Highlight expertise, quality reviews, and E-E-A-T standards." },
                { title: "Consistent organic traffic", desc: "Attract patient inquiries month-over-month sustainably." },
                { title: "Reduce dependency on ads", desc: "Lower overall acquisition costs with natural rankings." },
                { title: "Improve appointment inquiries", desc: "Drive high-conversion visitor paths directly to your portal." }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-1">{item.title}</p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SEO SERVICES FOR DOCTORS */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Our SEO Services for Doctors
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            At Med Clinic X, we provide complete <strong>SEO services for doctor</strong> websites and healthcare businesses. Our approach combines technical optimization, healthcare content strategy, local search optimization, and conversion-focused improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service 1 */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-bg/50 border border-brand-border flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Healthcare Website SEO Optimization</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Your website is the foundation of your online presence. We optimize your healthcare website to improve search engine visibility, website performance, user experience, mobile layouts, and patient conversion rates. Our SEO specialists analyze your website structure, technical health, content quality, and ranking opportunities to create a customized optimization plan.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-bg/50 border border-brand-border flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Local SEO for Doctors: Get Found by Patients Near You</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Most healthcare searches have local intent. Patients usually search for doctors within their city or nearby locations. Our <strong>local SEO for doctors</strong> services help improve your visibility in local searches and Google Maps results.
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO Details Subgrid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-8 border-t border-brand-border/40">
          <div className="space-y-4 w-full">
            <h4 className="font-display font-bold text-lg text-white">Google Business Profile Optimization</h4>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Your Google Business Profile is one of the most important assets for attracting local patients. We improve business information accuracy, healthcare categories, service descriptions, location signals, patient reviews strategy, photos, and updates.
            </p>
            <div className="glass-panel overflow-hidden rounded-2xl border border-brand-border max-w-md shadow-lg relative bg-[#040D18]/40">
              <Image
                src="/services-img/google-business-profile-optimization.jpg"
                alt="Google Business Profile Optimization"
                width={600}
                height={380}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-4 w-full">
            <h4 className="font-display font-bold text-lg text-white">Local Search Optimization & Citation Sync</h4>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Our local SEO strategy focuses on improving your visibility across location-based searches. We optimize local keywords, location landing pages, healthcare directories, local citations, NAP consistency, and patient-focused content to compete in your target service areas.
            </p>
            <div className="glass-panel overflow-hidden rounded-2xl border border-brand-border max-w-md shadow-lg relative bg-[#040D18]/40">
              <Image
                src="/services-img/local-search-optimization-citation-sync.jpg"
                alt="Local Search Optimization & Citation Sync"
                width={600}
                height={380}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO STRATEGY FOR DOCTORS */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            SEO Strategy for Doctors That Drives Patient Growth
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Every medical practice is different. A dermatologist, cardiologist, dentist, and general physician all have different patient search patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/15 rounded px-2.5 py-0.5">Strategy 01</span>
              <h4 className="font-display font-bold text-lg text-white mt-4 mb-2">Keyword Research Based on Patient Intent</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                We identify keywords patients actually use when searching for healthcare services. We focus on high-value terms like <em>&quot;Doctor near me&quot;</em>, <em>&quot;Best cardiologist in [city]&quot;</em>, and treatment-related searches that bring qualified traffic.
              </p>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-brand-indigo bg-brand-indigo/15 rounded px-2.5 py-0.5">Strategy 02</span>
              <h4 className="font-display font-bold text-lg text-white mt-4 mb-2">Healthcare Content Marketing</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                High-quality medical content builds trust with both patients and search engines. We create content strategies around medical conditions, treatments, and FAQs, satisfying Google's E-E-A-T quality guidelines.
              </p>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-brand-emerald bg-brand-emerald/15 rounded px-2.5 py-0.5">Strategy 03</span>
              <h4 className="font-display font-bold text-lg text-white mt-4 mb-2">Technical SEO for Healthcare Sites</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                A technically optimized website helps search engines understand your services. We improve website speeds, mobile layout usability, medical schema markups, crawl budgets, and security configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE ADS + SEO OUTLINE */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-3xl md:text-5xl text-white">
              Google Ads for Doctors + SEO Growth Strategy
            </h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Many doctors use paid advertising to generate immediate leads, but combining Google Ads with SEO creates stronger long-term growth. Our <strong>Google Ads for doctors SEO outline</strong> approach helps healthcare providers create a balanced digital marketing strategy.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              SEO builds sustainable organic visibility, while Google Ads helps capture immediate patient demand. We help optimize search campaigns, healthcare keywords, landing pages, conversion tracking, and patient-focused messaging.
            </p>
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <p className="font-display font-bold text-lg text-white text-brand-cyan">Why Choose Med Clinic X as Your SEO Agency for Doctors?</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Choosing the right SEO partner matters because healthcare marketing requires industry-specific knowledge. Med Clinic X works as a specialized SEO agency for doctors, helping medical professionals improve their online presence through customized strategies focused on patient acquisition, search visibility, and conversion improvements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel border border-brand-border rounded-3xl p-4 shadow-2xl bg-[#040D18]/40 relative overflow-hidden">
              <Image
                src="/services-img/google-ads-for-doctors-seo-growth-strategy.jpg"
                alt="Google Ads for Doctors & SEO Growth Strategy"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-2xl border border-brand-border/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEST SEO COMPANY FOR DOCTORS - THE HEALTHCARE SEO PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Best SEO Company for Doctors: Our Healthcare SEO Process
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Patients are not simply buying a product — they are making important decisions about their health. That means your online presence must communicate trust, expertise, credibility, and professionalism. Our structured SEO process makes this possible.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-brand-border/40">
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-brand-cyan bg-brand-cyan/15 rounded px-2.5 py-0.5">Phase 01</span>
              <h3 className="font-display font-bold text-xl text-white">Healthcare SEO Audit</h3>
            </div>
            <div className="lg:col-span-9 text-sm md:text-base text-gray-400 leading-relaxed">
              Before implementing changes, we analyze your current online presence. Our SEO audit evaluates website performance, technical issues, keyword opportunities, competitor rankings, content quality, local search visibility, and patient conversion opportunities. This helps identify areas where your practice can improve and where competitors are gaining visibility.
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-brand-border/40">
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-brand-indigo bg-brand-indigo/15 rounded px-2.5 py-0.5">Phase 02</span>
              <h3 className="font-display font-bold text-xl text-white">Doctor SEO Keyword Research</h3>
            </div>
            <div className="lg:col-span-9 text-sm md:text-base text-gray-400 leading-relaxed">
              Effective SEO starts with understanding what patients search for. Our keyword research process identifies high-value search terms related to your medical services (e.g. <em>&quot;SEO for doctor&quot;</em>, <em>&quot;SEO services for doctors&quot;</em>, <em>&quot;Doctor specialist near me&quot;</em>). We analyze search intent, competition levels, and location-based queries to align with real patient needs.
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-brand-border/40">
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-brand-emerald bg-brand-emerald/15 rounded px-2.5 py-0.5">Phase 03</span>
              <h3 className="font-display font-bold text-xl text-white">Website Optimization</h3>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Your website should not only rank on Google — it should convert visitors into patients. We optimize important website areas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Homepage Optimization</p>
                  <p className="text-sm text-gray-400 leading-relaxed">We improve messaging clarity, service positioning, patient trust signals, and clear calls-to-action.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Service Pages</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Dedicated optimization of medical service explanations, healthcare keywords, patient benefits, and structured data layout.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Appointment Conversion</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Optimizing appointment booking forms, practice contact sections, click-to-call phone numbers, and overall user experience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-brand-border/40">
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/15 rounded px-2.5 py-0.5">Phase 04</span>
              <h3 className="font-display font-bold text-xl text-white">Doctor SEO Content Strategy</h3>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Healthcare content plays a major role in building online authority and answering patient queries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Medical Education Content</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Symptoms guides, treatment explanations, preventive health updates, and FAQ lists.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Specialty-Based Content</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Detailed service descriptions for cardiology, dermatology, dental, orthopedics, etc.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Local Healthcare Content</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Guides targeting 'best doctor in [location]' and specific city healthcare solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-brand-border/40">
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-400/15 rounded px-2.5 py-0.5">Phase 05</span>
              <h3 className="font-display font-bold text-xl text-white">Local SEO Services & GBP</h3>
            </div>
            <div className="lg:col-span-9 text-sm md:text-base text-gray-400 leading-relaxed">
              For most healthcare providers, local visibility is critical. Patients usually search for nearby healthcare providers before booking an appointment. We optimize Google Maps rankings by improving business profile details, service areas, patient reviews, and clinic directory alignments across relevant healthcare directories.
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-brand-border/40">
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/15 rounded px-2.5 py-0.5">Phase 06</span>
              <h3 className="font-display font-bold text-xl text-white">Building Patient Trust</h3>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Healthcare decisions depend heavily on trust. Search engines also evaluate trust signals when ranking healthcare websites. Our SEO approach focuses on improving E-E-A-T:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Expertise</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Showcasing doctor qualifications, medical experience, and professional background profiles.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Authority</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Improving medical content quality, online mentions, and digital healthcare presence.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Trust</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Providing accurate information, transparent pricing details, and positive patient review loops.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8">
            <div className="lg:col-span-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-violet-400 bg-violet-400/15 rounded px-2.5 py-0.5">Phase 07</span>
              <h3 className="font-display font-bold text-xl text-white">Technical Optimization</h3>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Technical SEO ensures search engines can properly crawl, understand, and index your website:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Website Speed Optimization</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Eliminate slow load times and resolve Core Web Vitals to keep patients engaged on page.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Mobile SEO</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Optimize layouts and navigation pathways for potential patients searching on smartphones.</p>
                </div>
                <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                  <p className="font-display font-bold text-base text-white mb-2">Healthcare Schema</p>
                  <p className="text-sm text-gray-400 leading-relaxed">Implement JSON-LD structures to define doctors, medical services, locations, and reviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive SEO block */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-brand-border/40 relative z-10">
        <div className="glass-panel p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#040D18]/25">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl text-white">Competitive SEO Strategy for Medical Practices</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Healthcare is highly competitive, with many doctors targeting the same local patient groups. Our competitive SEO research analyzes competitor ranking strategies, content gaps, keyword opportunities, and citation gaps to formulate plans that help your practice compete effectively.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Working with a generalist provider can fall short. A specialized <strong>SEO agency for doctors</strong> understands patient search intent, medical terminology, and professional content standards.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-white">Benefits of Professional SEO for Doctors:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" /><span>More Patient Discoverability</span></div>
              <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" /><span>Higher Search Rankings</span></div>
              <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" /><span>Consistent Organic Traffic</span></div>
              <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" /><span>Better Patient Engagement</span></div>
              <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" /><span>Sustainable Long-Term Growth</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HEALTHCARE SEO PACKAGES */}
      <section id="packages" className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Healthcare SEO Packages Designed for Doctors
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Every medical practice has different goals, competition levels, and patient acquisition needs. A small private clinic may need stronger local maps search visibility, while a multi-location healthcare organization requires a complete SEO growth system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-0.5 border border-brand-cyan/20">
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Local Focus</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">Local SEO Growth</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Designed for doctors who want to attract more patients from their surrounding areas and local maps pack.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 pt-2 border-t border-brand-border/30">
                {["Google Business Profile optimization", "Local keyword targeting", "Location-based landing pages", "Healthcare directory optimization", "Patient review growth strategies", "Local citation audits"].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Package 2 */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-indigo/15 rounded-full px-3 py-0.5 border border-brand-indigo/20">
                <span className="text-[10px] font-bold text-brand-indigo uppercase tracking-wider">Technical & On-Page</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">Healthcare Website SEO</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Your website should act as a patient acquisition platform, not just an online brochure.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 pt-2 border-t border-brand-border/30">
                {["SEO-friendly website structures", "Healthcare keyword optimization", "Service page content improvements", "On-page content optimization", "Internal link structure setups", "Technical site speed improvements"].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-indigo shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Package 3 */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-emerald/15 rounded-full px-3 py-0.5 border border-brand-emerald/20">
                <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider">Advanced Strategy</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">Advanced SEO for Doctors</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                For competitive healthcare markets where you need to stand out from other local providers.
              </p>
              <ul className="space-y-2 text-sm text-gray-400 pt-2 border-t border-brand-border/30">
                {["Competitor market analysis", "Keyword gap audits", "Structured content blueprints", "Domain authority building", "Patient conversion optimization", "Ongoing performance dashboards"].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TURNING SEARCH TRAFFIC INTO PATIENT APPOINTMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Turning Search Traffic Into Patient Appointments
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Ranking on Google is only one part of healthcare SEO. The real goal is connecting with patients who are ready to take action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-cyan bg-brand-cyan/15 rounded px-2.5 py-0.5">Stage 01</span>
              <h4 className="font-display font-bold text-lg text-white mt-4 mb-2">Awareness Stage</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Patients search for symptoms, conditions, and treatments. We publish educational medical articles that position your practice early in their search journey.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-indigo bg-brand-indigo/15 rounded px-2.5 py-0.5">Stage 02</span>
              <h4 className="font-display font-bold text-lg text-white mt-4 mb-2">Consideration Stage</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Patients compare doctors and clinics. We optimize your website content to communicate credentials, clinical focus, and patient benefits clearly.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-emerald bg-brand-emerald/15 rounded px-2.5 py-0.5">Stage 03</span>
              <h4 className="font-display font-bold text-lg text-white mt-4 mb-2">Decision Stage</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Patients are ready to book. We optimize appointment booking pages, contact info layouts, and user conversion paths to turn clicks into real consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ADVANCED HEALTHCARE SEO SOLUTIONS FOR DOCTORS LOOKING TO GROW ONLINE */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Advanced Healthcare SEO Solutions for Doctors
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            The healthcare industry is increasingly competitive. Modern practices need to explain their services, display authority, and provide a professional digital experience.
          </p>
        </div>

        {/* Sub-sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-white">Comprehensive SEO Services for Doctor Websites</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Our advanced solutions combine search engine optimization (visibility), local search optimization (proximity searches), healthcare content marketing (education), conversion optimization (appointment booking actions), and technical SEO audits (crawling).
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Many healthcare providers have excellent medical expertise but struggle to reach new patients online due to low Google rankings, weak local presence, limited content, or poor website conversion rates.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-white">Doctor SEO Keyword & Content Strategy</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Keyword selection plays an important role in healthcare SEO success. We target service-based keywords (<em>&quot;healthcare SEO services&quot;</em>), location-based keywords (<em>&quot;medical clinic in [location]&quot;</em>), and problem-based queries (<em>&quot;treatment options&quot;</em>).
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              High-quality medical content (symptoms guides, service pages, and clinic FAQs) supports search engine visibility and helps patients make informed healthcare decisions.
            </p>
          </div>
        </div>

        {/* Provider Types Subgrid */}
        <div className="border-t border-brand-border/40 pt-12 space-y-6">
          <h3 className="font-display font-bold text-2xl text-white text-center">SEO Optimization for Different Types of Providers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
              <p className="font-display font-bold text-base text-white mb-2">SEO for Physicians</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Helping doctors improve visibility for their specialties and attract relevant patients.</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
              <p className="font-display font-bold text-base text-white mb-2">SEO for Specialists</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Targeting treatment-focused searches and reaching patients with specific medical needs.</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
              <p className="font-display font-bold text-base text-white mb-2">SEO for Medical Clinics</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Improving maps presence, local search rankings, and overall clinic appointment requests.</p>
            </div>
            <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
              <p className="font-display font-bold text-base text-white mb-2">SEO for Healthcare Startups</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Building digital authority and search visibility for new healthcare software and platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Focused Website Navigation Block */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-brand-border/40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Placeholder Left */}
          <div>
            <div className="glass-panel border border-brand-border rounded-3xl p-4 shadow-2xl bg-[#040D18]/40 max-w-md mx-auto relative overflow-hidden">
              <Image
                src="/services-img/patient-focused-website-metrics-tracking.jpg"
                alt="Patient-Focused Website & Metrics Tracking"
                width={600}
                height={380}
                className="w-full h-auto object-cover rounded-2xl border border-brand-border/40"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl text-white">Patient-Focused Website & Metrics Tracking</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              SEO success depends on more than rankings. A healthcare website should provide a smooth patient experience, including clear website navigation (services, contact details) and trust elements (testimonials, credentials). We track organic traffic growth, ranking improvements, and patient engagement actions to measure success.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              As your website gains more quality content, stronger authority, and better technical performance, your practice can continue growing its online presence.
            </p>
          </div>
        </div>
      </section>

      {/* 10. COMPETE IN A DIGITAL FIRST WORLD */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            How Healthcare SEO Helps Doctors Compete in a Digital-First World
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            The way patients find healthcare providers has changed significantly. Before booking an appointment, people search online to compare doctors, reviews, treatments, and evaluate credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display font-bold text-xl text-white">The Role of SEO in Patient Acquisition</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Traditional healthcare marketing methods depend on referrals or advertisements. While these can still be valuable, SEO creates a consistent digital channel where patients can discover your services naturally when they research health information, compare providers, and search for specific clinics.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Our optimization process focuses on content quality, website experience (speed and usability), and digital authority signals.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-bold text-xl text-white">Common SEO Challenges Doctors Face:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                <p className="font-display font-bold text-base text-white mb-2">Low Google Rankings</p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">Your website may not appear when patients search for services. We identify ranking barriers and improve website optimization.</p>
              </div>
              <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                <p className="font-display font-bold text-base text-white mb-2">Weak Local Presence</p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">A doctor may have a website but still miss local maps search queries. Our local SEO for doctors strategy improves map visibility.</p>
              </div>
              <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                <p className="font-display font-bold text-base text-white mb-2">Lack of Healthcare Content</p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">Without helpful content, search engines have fewer signals to understand your medical expertise. We create solid content plans.</p>
              </div>
              <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
                <p className="font-display font-bold text-base text-white mb-2">Poor Website Conversion</p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">Getting traffic isn't enough. We guide patients toward calling your clinic, booking appointments, and contacting your team.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Roadmap */}
        <div className="border-t border-brand-border/40 pt-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display font-bold text-2xl text-white">How Med Clinic X Builds an SEO Roadmap for Doctors</h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">Our process focuses on sustainable, organic growth built through structured planning.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-xs">
            <div className="glass-panel p-5 rounded-xl border border-brand-border space-y-1.5">
              <p className="font-mono font-bold text-brand-cyan text-[10px] uppercase font-normal font-sans">Phase 1</p>
              <p className="font-display font-bold text-base text-white">Research Phase</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Analyze current rankings, competitors, local patient search behavior, and market opportunities.</p>
            </div>
            <div className="glass-panel p-5 rounded-xl border border-brand-border space-y-1.5">
              <p className="font-mono font-bold text-brand-indigo text-[10px] uppercase font-normal font-sans">Phase 2</p>
              <p className="font-display font-bold text-base text-white">Strategy Phase</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Create keyword plans, content roadmaps, technical improvement lists, and Google Maps setups.</p>
            </div>
            <div className="glass-panel p-5 rounded-xl border border-brand-border space-y-1.5">
              <p className="font-mono font-bold text-brand-emerald text-[10px] uppercase font-normal font-sans">Phase 3</p>
              <p className="font-display font-bold text-base text-white">Implementation Phase</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Optimize website pages, content structures, technical indexing errors, and local GBP listings.</p>
            </div>
            <div className="glass-panel p-5 rounded-xl border border-brand-border space-y-1.5">
              <p className="font-mono font-bold text-amber-400 text-[10px] uppercase font-normal font-sans">Phase 4</p>
              <p className="font-display font-bold text-base text-white">Growth Phase</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">Monitor rank increases, organic traffic patterns, and patient conversion opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Frequently Asked Questions About SEO for Doctors
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
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
                    <div className="px-6 pb-5 pt-1 border-t border-brand-border/30 text-sm md:text-base text-gray-400 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 12. CONSULTATION / BOOKING FORM SECTION */}
      <section id="consultation" className="max-w-3xl mx-auto px-6 py-20 md:py-28 border-t border-brand-border/40 relative z-10">
        <div className="glass-panel rounded-3xl p-6 md:p-10 border border-brand-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center mb-8 space-y-3">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Start Building Your Healthcare SEO Growth Strategy Today
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md mx-auto">
              Improve your online visibility, reach more patients, and grow your medical practice with a professional SEO approach. Contact Med Clinic X to discuss your goals.
            </p>
          </div>

          {success ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Audit Request Received!</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out. An SEO growth specialist from Med Clinic X will review your site and contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 font-sans">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Dr. John Doe"
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 font-sans">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="doctor@practice.com"
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 font-sans">Clinic or Practice Name</label>
                <input
                  type="text"
                  required
                  value={form.clinicName}
                  onChange={(e) => setForm({ ...form, clinicName: e.target.value })}
                  placeholder="Apex Medical Group"
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 font-sans">Target Location or SEO Goals</label>
                <textarea
                  rows={4}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Tell us about your target city, medical specialty, or specific search ranking goals..."
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold py-4 rounded-xl hover:opacity-95 disabled:opacity-60 text-sm cursor-pointer shadow-xl shadow-brand-cyan/10"
              >
                {loading ? (
                  <span className="animate-pulse">Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
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
