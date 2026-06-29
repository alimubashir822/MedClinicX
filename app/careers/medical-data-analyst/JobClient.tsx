"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, HardDrive,
  Check, Send, Code, AlertCircle, FileSpreadsheet, Layers,
  BarChart, Filter
} from "lucide-react";

interface TechSkill { name: string; level: string; color: string; }
interface TechArea { title: string; desc: string; icon: React.ReactNode; }

export default function JobClient() {
  const [activeTab, setActiveTab] = useState<"description" | "apply">("description");
  
  // Application Form State
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolioUrl: "",
    sqlEnvironment: "postgres",
    healthcareYears: "3-5",
    biExperience: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Cohort Filtering Sandbox State
        
  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "SQL & Relational Databases", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "Medical / Clinical Data Analysis", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "EHR/EMR Data schemas (Epic, Cerner)", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "Data Visualization (Tableau/Power BI)", level: "Highly Valued", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "Python or R programming", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "HIPAA Regulations & Privacy standards", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS analytics", desc: "Build metrics pipelines parsing patient logins, communications latency, and app usage logs.", icon: <Globe className="w-5 h-5" /> },
    { title: "Medical data systems", desc: "Transform diagnostic records, vitals, lab reports, and medication histories into clean databases.", icon: <Database className="w-5 h-5" /> },
    { title: "Clinical reporting dashboards", desc: "Design interactive BI reports showing clinic outcomes, referral networks, and scheduling pipelines.", icon: <BarChart className="w-5 h-5" /> },
    { title: "EHR/EMR data integration", desc: "Formulate SQL schemas and data translation models to map incoming clinic charts into unified SaaS tables.", icon: <Layers className="w-5 h-5" /> },
    { title: "Patient portal analytics", desc: "Measure feature engagement rates across messaging boards, prescription refills, and scheduling slots.", icon: <Users className="w-5 h-5" /> },
    { title: "AI healthcare insights", desc: "Clean and validate clinical outcome datasets to assist machine learning engineers training risk models.", icon: <Brain className="w-5 h-5" /> },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, resumeFile: file, resumeName: file.name }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData(prev => ({ ...prev, resumeFile: file, resumeName: file.name }));
    }
  };

  
  const submitApplication = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          portfolioUrl: formData.portfolioUrl,
          resumeName: formData.resumeName,
          position: "Medical Data Analyst",
          extraFields: {
            ...formData
          }
        }),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        setSubmitError(errData.error || "Submission failed. Please try again.");
      } else {
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError("Failed to submit application. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background glow templates */}
      <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        {/* -- BREADCRUMB -- */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/careers" className="text-gray-500 hover:text-brand-cyan transition-colors">Careers</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">Medical Data Analyst</span>
        </div>

        {/* -- HERO HEADER -- */}
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Job Opportunity</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Medical Data Analyst
                </h1>

                <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
                  Analyze clinical datasets, build BI dashboards, clean EHR schemas, configure outreach cohorts, and deliver actionable insights for US healthcare systems.
                </p>

                <div className="flex flex-wrap gap-3.5 text-xs text-gray-300">
                  <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full" />
                    <span>Remote (US-based)</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                    <span>Full-Time</span>
                  </div>
                  
                </div>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                <button
                  onClick={() => {
                    setActiveTab("apply");
                    const element = document.getElementById("job-portal-content");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply Now</span>
                </button>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-6 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all text-xs"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* -- NAV TABS -- */}
        <div className="flex border-b border-brand-border mb-12" id="job-portal-content">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 font-display font-semibold text-sm transition-all border-b-2 -mb-px flex items-center space-x-2 cursor-pointer ${
              activeTab === "description"
                ? "border-brand-cyan text-white font-bold"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Job Description</span>
          </button>
          <button
            onClick={() => setActiveTab("apply")}
            className={`px-6 py-3 font-display font-semibold text-sm transition-all border-b-2 -mb-px flex items-center space-x-2 cursor-pointer ${
              activeTab === "apply"
                ? "border-brand-cyan text-white font-bold"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <Send className="w-4 h-4 animate-pulse" />
            <span>Apply Portal</span>
          </button>
        </div>

        {/* -- MAIN CONTENT BODY -- */}
        <AnimatePresence mode="wait">
          {activeTab === "description" ? (
            <motion.div
              key="desc"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Left Column (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                {/* About Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    About Med Clinic X
                  </h2>
                  <div className="text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed">
                    <p>
                      Med Clinic X is a healthcare technology company building modern digital solutions for healthcare organizations across the United States.
                    </p>
                    <p>
                      We develop healthcare SaaS platforms, patient portals, AI-powered healthcare systems, telemedicine solutions, automation tools, and data-driven digital health products for clinics, hospitals, and healthcare providers.
                    </p>
                    <p>
                      Our mission is to transform raw healthcare data into meaningful insights that improve patient care, clinical outcomes, and healthcare operations.
                    </p>
                  </div>
                </section>

                {/* Job Overview */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Job Overview
                  </h2>
                  <div className="text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed">
                    <p>
                      We are seeking a <strong className="text-white font-semibold">Medical Data Analyst</strong> to analyze healthcare datasets and deliver actionable insights that support clinical, operational, and product decision-making.
                    </p>
                    <p>
                      In this role, you will work with structured and unstructured medical data from EHR systems, healthcare SaaS platforms, and clinical workflows. You will help improve data accuracy, reporting systems, and analytics capabilities across Med Clinic X healthcare products.
                    </p>
                    <p>
                      You will collaborate with engineers, product teams, clinicians, and AI specialists to turn healthcare data into intelligent insights that power modern healthcare systems.
                    </p>
                  </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Key Responsibilities
                  </h2>

                  <div className="space-y-6">
                    {/* Clinical Analysis */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-brand-cyan" />
                        <span>Medical & Clinical Data Analysis</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Analyze medical and clinical datasets to identify trends and insights.</li>
                        <li>Develop reports and dashboards for healthcare decision-making.</li>
                        <li>Work with EHR/EMR data to extract meaningful clinical insights.</li>
                        <li>Ensure accuracy, consistency, and quality of healthcare data.</li>
                      </ul>
                    </div>

                    {/* SaaS Analytics */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-brand-indigo" />
                        <span>Healthcare SaaS Analytics</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Support analytics for healthcare SaaS platforms and digital health tools.</li>
                        <li>Analyze patient engagement, usage patterns, and clinical workflows.</li>
                        <li>Identify opportunities to improve healthcare application performance.</li>
                        <li>Build reporting systems for internal and client-facing dashboards.</li>
                      </ul>
                    </div>

                    {/* Data Processing */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Database className="w-5 h-5 text-brand-emerald" />
                        <span>Data Processing & Engineering Collaboration</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Clean, transform, and validate healthcare datasets.</li>
                        <li>Collaborate with engineers on data pipelines and integrations.</li>
                        <li>Support API-based healthcare data flows.</li>
                        <li>Assist in structuring datasets for analytics and AI use cases.</li>
                      </ul>
                    </div>

                    {/* AI Analytics */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-rose-400" />
                        <span>AI & Advanced Insights</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Prepare datasets for AI and predictive healthcare models.</li>
                        <li>Support development of intelligent healthcare reporting systems.</li>
                        <li>Identify patterns useful for automation and decision support.</li>
                        <li>Contribute to improving healthcare intelligence systems.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Tech Areas */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Healthcare Technology Areas You Will Work With
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {techAreas.map((area, idx) => (
                      <div key={idx} className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/35 transition-colors">
                        <div className="flex items-center space-x-3 mb-2 text-brand-cyan">
                          {area.icon}
                          <h4 className="font-display font-bold text-sm text-white">{area.title}</h4>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{area.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                {/* Tech skills checklist */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Core Technical Requirements
                  </h3>
                  <div className="flex flex-col gap-3">
                    {technicalSkills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col p-3 rounded-xl border border-white/5 bg-white/2">
                        <span className="text-xs font-bold text-white mb-1.5">{skill.name}</span>
                        <span className={`self-start text-[9px] font-bold px-2 py-0.5 rounded-full border ${skill.color}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required qualifications */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Required Qualifications
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Bachelor’s degree in Data Science, Informatics, Statistics, CS, or related field.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience in medical, healthcare, or clinical data analysis.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Strong SQL querying skills and experience working with relational databases.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience building dashboards in Tableau, Power BI, or similar visualization tools.</span>
                    </li>
                  </ul>
                </div>

                {/* Preferred qualifications */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Preferred Qualifications
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience in US healthcare organizations or healthcare SaaS startups.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Familiarity with HIPAA compliance and clinical data privacy standards.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience working directly with clinical charts and EMR datasets.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Basic understanding of HL7, FHIR, or healthcare API integrations.</span>
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-gradient-to-br from-brand-cyan/5 to-brand-indigo/5 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Why Join Med Clinic X?
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Work on core datasets that directly improve clinician and patient experiences.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Collaborate with AI, engineering, and medical specialists daily.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Advance your expertise in healthcare BI, SQL schemas, and AI data prep.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="apply"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                  <span>Step {formStep} of 3</span>
                  <span>
                    {formStep === 1 && "Personal Information"}
                    {formStep === 2 && "SQL & BI Experience"}
                    
                    {formStep === 3 && "Review & Submit"}
                  </span>
                </div>
                <div className="w-full bg-slate-900 border border-brand-border h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand-cyan to-brand-indigo h-full transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Content Panel */}
              <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8 space-y-6">
                
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-emerald/10">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-white">Application Triaged!</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                        Thank you for applying, <strong className="text-white">{formData.name}</strong>. Your profile has passed our SQL data cohort extraction test. The analytics recruitment team will contact you.
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border max-w-sm mx-auto text-left space-y-2 font-mono text-xs">
                      <p className="text-brand-cyan font-bold uppercase text-[10px] tracking-wider mb-2">Automated Match Summary</p>
                      <p className="text-gray-400">Position: <span className="text-white">Medical Data Analyst</span></p>
                      <p className="text-gray-400">Outreach Cohort Mapping: <span className="text-brand-emerald">3/3 Correct Filters</span></p>
                      <p className="text-gray-400">Analytics stack fit: <span className="text-brand-cyan">Highly Compatible</span></p>
                      <p className="text-gray-400">Status: <span className="text-brand-emerald animate-pulse">Under Review by VP of Data & Analytics</span></p>
                    </div>

                    <button
                      onClick={() => {
                        setFormStep(1);
                        setSubmitSuccess(false);
                        
                        
                        
                        setFormData({
                          name: "",
                          email: "",
                          portfolioUrl: "",
                          sqlEnvironment: "postgres",
                          healthcareYears: "3-5",
                          biExperience: "yes",
                          resumeFile: null,
                          resumeName: "",
                        });
                      }}
                      className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"
                    >
                      <span>Submit another mock application</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* STEP 1: Personal Info */}
                    {formStep === 1 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Let&apos;s start with your basics</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="Marcus Vance"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="marcus@example.com"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or GitHub URL</label>
                            <input
                              type="url"
                              value={formData.portfolioUrl}
                              onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                              placeholder="https://github.com/marcus-vance"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          {/* Resume Upload Box */}
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Upload Resume / CV <span className="text-red-400">*</span></label>
                            <div
                              onDragOver={handleDragOver}
                              onDrop={handleDrop}
                              className="border-2 border-dashed border-brand-border hover:border-brand-cyan/50 rounded-2xl p-6 text-center bg-white/2 cursor-pointer transition-colors relative"
                            >
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileUpload}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                              />
                              <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                              {formData.resumeName ? (
                                <p className="text-sm font-semibold text-brand-cyan">{formData.resumeName}</p>
                              ) : (
                                <>
                                  <p className="text-xs text-gray-300 font-semibold mb-1">Drag and drop your file here, or click to browse</p>
                                  <p className="text-[10px] text-gray-500">Supports PDF, DOCX, DOC up to 10MB</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="button"
                            disabled={!formData.name || !formData.email || !formData.resumeName}
                            onClick={() => setFormStep(2)}
                            className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs disabled:opacity-30 cursor-pointer"
                          >
                            <span>Next Step</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: SQL & BI Background */}
                    {formStep === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Database & Reporting Experience</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary SQL Dialect Preference</label>
                            <select
                              value={formData.sqlEnvironment}
                              onChange={(e) => setFormData(prev => ({ ...prev, sqlEnvironment: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="postgres">PostgreSQL / MySQL</option>
                              <option value="sqlserver">Microsoft SQL Server (T-SQL)</option>
                              <option value="snowflake">Snowflake / Google BigQuery</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of experience in healthcare data reporting</label>
                            <select
                              value={formData.healthcareYears}
                              onChange={(e) => setFormData(prev => ({ ...prev, healthcareYears: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="0-2">0 to 2 Years</option>
                              <option value="3-5">3 to 5 Years</option>
                              <option value="5-8">5 to 8 Years</option>
                              <option value="8+">8+ Years</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Do you have experience design custom BI reports inside Epic Clarity/Caboodle or Cerner databases?</label>
                            <div className="flex gap-4">
                              {["yes", "no"].map((val) => (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, biExperience: val }))}
                                  className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                    formData.biExperience === val
                                      ? "bg-brand-indigo/15 border-brand-indigo text-white font-bold"
                                      : "border-brand-border text-gray-400 hover:border-gray-500"
                                  }`}
                                >
                                  {val}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setFormStep(1)}
                            className="inline-flex items-center space-x-2 border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                          >
                            <span>Back</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormStep(3)}
                            className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                          >
                            <span>Proceed to Cohort Sandbox</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Cohort Filtering Sandbox */}
                    

                    {/* STEP 4: Review and Submit */}
                    {formStep === 3 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Review & Submit Application</h3>
                        
                        <div className="space-y-4 text-xs font-mono">
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Personal Profile</p>
                            <p className="text-gray-300"><span className="text-gray-500">Name:</span> {formData.name}</p>
                            <p className="text-gray-300"><span className="text-gray-500">Email:</span> {formData.email}</p>
                            {formData.portfolioUrl && (
                              <p className="text-gray-300"><span className="text-gray-500">LinkedIn/GitHub:</span> {formData.portfolioUrl}</p>
                            )}
                            <p className="text-gray-300"><span className="text-gray-500">Resume:</span> {formData.resumeName}</p>
                          </div>

                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">SQL & Reporting Profile</p>
                            <p className="text-gray-300">
                              <span className="text-gray-500">Database Dialect:</span>{" "}
                              <span className="capitalize">{formData.sqlEnvironment}</span>
                            </p>
                            <p className="text-gray-300"><span className="text-gray-500">Healthcare experience:</span> {formData.healthcareYears} years</p>
                            <p className="text-gray-300"><span className="text-gray-500">Clarity/Cerner DB experience:</span> {formData.biExperience}</p>
                          </div>

                          
                        </div>

                        <div className="pt-4 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setFormStep(2)}
                            className="inline-flex items-center space-x-2 border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                          >
                            <span>Back</span>
                          </button>
                          <button
                            type="button"
                            disabled={isSubmitting}
                            onClick={submitApplication}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs disabled:opacity-50 cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Triaging profile...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                <span>Submit Analyst Application</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
