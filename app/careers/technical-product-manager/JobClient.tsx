"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, Layers,
  Check, Send, Code, AlertCircle, FileSpreadsheet, Server
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
    primaryMethod: "agile",
    pmYears: "3-5",
    hipaaFamiliar: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // PM Sandbox State
  const [sandboxSetup, setSandboxSetup] = useState({
    backlogPriority: "",
    interoperability: "",
    accessControl: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "Technical Product Strategy & roadmaps", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "Agile / Scrum backlog grooming", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "API design & system architecture", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "SaaS Product Lifecycle (SDLC)", level: "Required", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "Product Analytics (Mixpanel/Amplitude)", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "Clinical Usability & FDA compliance", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS Platforms", desc: "Guide lifecycle developments for clinical messaging dashboards and telehealth tools.", icon: <Globe className="w-5 h-5" /> },
    { title: "AI Healthcare Solutions", desc: "Coordinate engineering requirements for symptom intake categorizations and NLP tools.", icon: <Brain className="w-5 h-5" /> },
    { title: "Patient Portal Systems", desc: "Prioritize features improving patient enrollment rates and online payment processes.", icon: <Users className="w-5 h-5" /> },
    { title: "Clinical Workflow Applications", desc: "Gather nurse and physician feedback to optimize electronic prescription flow.", icon: <Activity className="w-5 h-5" /> },
    { title: "EHR/EMR Integrations", desc: "Define webhook and REST endpoint specifications syncing patient forms to hospitals.", icon: <Database className="w-5 h-5" /> },
    { title: "Digital Health Infrastructure", desc: "Validate that all planned software modules adhere to HIPAA data security policies.", icon: <Server className="w-5 h-5" /> },
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

  const validateSandbox = () => {
    setSandboxAttempts(prev => prev + 1);
    
    // Correct choices:
    // backlogPriority -> ai_triage_clinical
    // interoperability -> fhir_intake_sync
    // accessControl -> minimum_necessary_role
    
    const correctPriority = sandboxSetup.backlogPriority === "ai_triage_clinical";
    const correctInterop = sandboxSetup.interoperability === "fhir_intake_sync";
    const correctAccess = sandboxSetup.accessControl === "minimum_necessary_role";
    
    if (correctPriority && correctInterop && correctAccess) {
      setSandboxSuccess(true);
      setSandboxError("");
    } else {
      setSandboxSuccess(false);
      let incorrectCount = 0;
      if (!correctPriority) incorrectCount++;
      if (!correctInterop) incorrectCount++;
      if (!correctAccess) incorrectCount++;
      
      setSandboxError(
        `Backlog audit failed. ${incorrectCount}/3 roadmap configurations contain issues. Hint: Prioritize the AI helper due to its superior user reach and impact; insist on standard FHIR write-back integrations for patient forms; and enforce role-based access to limit patient data views on dashboards.`
      );
    }
  };

  const submitApplication = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
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
          <span className="text-white">Technical Product Manager</span>
        </div>

        {/* -- HERO HEADER -- */}
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Product Leadership</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Technical Product Manager
                </h1>

                <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                  Lead product strategy, define engineering requirements, and manage roadmaps for healthcare SaaS and AI-driven systems. Bridge clinical workflows with technical architectures.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white">
                    <Database className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Project Management</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white">
                    <Globe className="w-3.5 h-3.5 text-brand-indigo" />
                    <span>Remote (US Only)</span>
                  </span>
                  
                </div>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button
                  onClick={() => {
                    setActiveTab("apply");
                    const element = document.getElementById("job-content");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-indigo/10 text-sm cursor-pointer"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* -- TAB NAVIGATION -- */}
        <div className="border-b border-brand-border mb-8 flex space-x-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "description"
                ? "border-brand-cyan text-brand-cyan"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Job Description
          </button>
          <button
            onClick={() => setActiveTab("apply")}
            className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "apply"
                ? "border-brand-cyan text-brand-cyan"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Apply Portal
          </button>
        </div>

        {/* -- MAIN CONTENT SECTIONS -- */}
        <div id="job-content" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <AnimatePresence mode="wait">
            {activeTab === "description" ? (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-8 space-y-10"
              >
                {/* About Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">About Med Clinic X</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Med Clinic X is a healthcare technology company building modern digital health platforms that power healthcare organizations across the United States.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We design and develop healthcare SaaS platforms, AI-powered healthcare systems, patient portals, telemedicine solutions, automation workflows, and scalable digital health products for clinics, hospitals, and healthcare providers.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our mission is to build intelligent healthcare products that solve real clinical and operational challenges through technology.
                  </p>
                </section>

                {/* Job Overview */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We are seeking a <strong>Technical Product Manager</strong> to lead the strategy, development, and execution of healthcare SaaS and AI-powered digital health products.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    In this role, you will define product vision, manage roadmaps, and work closely with engineering, design, and healthcare stakeholders to build scalable healthcare solutions used across the United States.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You will translate clinical and operational needs into clear product requirements and ensure successful delivery of high-impact healthcare technology products.
                  </p>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Responsibilities</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-2">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Product Strategy & Roadmap</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Define product vision for healthcare SaaS platforms.</li>
                        <li>Build roadmaps aligned with business and clinical goals.</li>
                        <li>Prioritize features based on RICE scores and user research.</li>
                        <li>Drive product lifecycle tracks from concept to production.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2">
                        <Database className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Healthcare Product Development</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Develop patient portals and AI triage algorithms.</li>
                        <li>Translate clinical practices into clear user stories.</li>
                        <li>Collaborate on EHR/EMR interoperability write-backs.</li>
                        <li>Enforce dynamic healthcare compliance guidelines.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2">
                        <Activity className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Technical Collaboration</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Work with engineers on system architecture schemas.</li>
                        <li>Map out REST APIs and database triggers.</li>
                        <li>Define technical parameters and JIRA acceptance criteria.</li>
                        <li>Resolve engineering blockers and coordinate sprints.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2">
                        <Users className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">User & Stakeholder Engagement</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Gather insights from clinicians and health administrators.</li>
                        <li>Analyze usage data using Amplitude/Mixpanel.</li>
                        <li>Improve portal UX flows based on clinical feedback.</li>
                        <li>Align business leadership on roadmap timelines.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Required Qualifications */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Qualifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-cyan">Required</h3>
                      <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                        <li>Bachelor’s degree in CS, Engineering, Business, or related technical field.</li>
                        <li>Product management experience in Agile software environments.</li>
                        <li>Strong understanding of APIs, data feeds, and SDLC phases.</li>
                        <li>Proven ability to write detailed requirements and user stories in JIRA.</li>
                        <li>Excellent communication, leadership, and analytical skills.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-indigo">Preferred</h3>
                      <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                        <li>Experience in US healthcare, EMR/EHR vendors, or healthcare SaaS.</li>
                        <li>Familiarity with HIPAA privacy compliance and clinical data rules.</li>
                        <li>Experience with AI-driven features or predictive analytics products.</li>
                        <li>Familiarity with HL7 FHIR interoperability guidelines.</li>
                        <li>Experience scaling enterprise SaaS products from 0 to 1.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Join Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    At Med Clinic X, you will shape products that directly impact healthcare delivery across the United States. You will:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Lead AI-powered healthcare product roadmaps</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Work on real clinical and operational challenges</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Collaborate with elite engineering, design, and healthcare teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Drive meaningful healthcare innovation at enterprise scale</span>
                    </li>
                  </ul>
                </section>
              </motion.div>
            ) : (
              <motion.div
                key="apply"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-8"
              >
                <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
                  {/* Step indicators */}
                  <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4 font-mono text-[10px]">
                    <div className="flex space-x-4">
                      <span className={formStep === 1 ? "text-brand-cyan font-bold" : "text-gray-500"}>01. Profile</span>
                      <span className={formStep === 2 ? "text-brand-cyan font-bold" : "text-gray-500"}>02. Experience</span>
                      <span className={formStep === 3 ? "text-brand-cyan font-bold" : "text-gray-500"}>03. Roadmap Sandbox</span>
                      <span className={formStep === 4 ? "text-brand-cyan font-bold" : "text-gray-500"}>04. Submit</span>
                    </div>
                    <span className="text-gray-500">Step {formStep} of 4</span>
                  </div>

                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-emerald/5">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-extrabold text-2xl text-white">Mock Application Received!</h3>
                        <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                          Thank you for demonstrating your technical understanding of RICE feature prioritization, EMR interoperability requirements, and HIPAA data compliance limits.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setFormStep(1);
                          setSubmitSuccess(false);
                          setSandboxSuccess(false);
                          setSandboxAttempts(0);
                          setSandboxSetup({ backlogPriority: "", interoperability: "", accessControl: "" });
                          setFormData({
                            name: "",
                            email: "",
                            portfolioUrl: "",
                            primaryMethod: "agile",
                            pmYears: "3-5",
                            hipaaFamiliar: "yes",
                            resumeFile: null,
                            resumeName: "",
                          });
                        }}
                        className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"
                      >
                        <span>Submit another mock application</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
                                placeholder="Cassandra Thorne"
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
                                placeholder="cassandra.pm@example.com"
                                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or Portfolio URL</label>
                              <input
                                type="url"
                                value={formData.portfolioUrl}
                                onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                                placeholder="https://linkedin.com/in/cassandrapm"
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

                      {/* STEP 2: PM Experience */}
                      {formStep === 2 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-white">Product Management Profile</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Lifecycle Methodology</label>
                              <select
                                value={formData.primaryMethod}
                                onChange={(e) => setFormData(prev => ({ ...prev, primaryMethod: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="agile">Agile Scrum / Kanban (backlogs & sprints)</option>
                                <option value="waterfall">Structured Waterfall (formal phases)</option>
                                <option value="hybrid">Hybrid Agile-Waterfall model</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of Product Management Experience</label>
                              <select
                                value={formData.pmYears}
                                onChange={(e) => setFormData(prev => ({ ...prev, pmYears: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="0-2">0 to 2 Years</option>
                                <option value="3-5">3 to 5 Years</option>
                                <option value="5-8">5 to 8 Years</option>
                                <option value="8+">8+ Years</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable writing functional specifications for Epic/Cerner EHR integrations?</label>
                              <div className="flex gap-4">
                                {["yes", "no"].map((val) => (
                                  <button
                                    key={val}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, hipaaFamiliar: val }))}
                                    className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                      formData.hipaaFamiliar === val
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
                              <span>Proceed to Roadmap Sandbox</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: Roadmap Sandbox */}
                      {formStep === 3 && (
                        <div className="space-y-5">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-display font-extrabold text-lg text-white">Technical Product Roadmap Sandbox</h3>
                              <p className="text-xs text-gray-400 mt-1">
                                Prioritize the product backlog, specify interoperability guidelines, and verify compliance constraints.
                              </p>
                            </div>
                            <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                              Backlog Audit
                            </span>
                          </div>

                          {/* SANDBOX CHALLENGE */}
                          <div className="space-y-4 font-sans text-xs">
                            
                            {/* Scenario 1 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0" />
                                <span>Parameter 1: Backlog Prioritization (RICE Score)</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;Which backlog feature should be prioritized for the upcoming sprint, targeting optimal RICE value?&quot;
                              </p>
                              <div>
                                <select
                                  value={sandboxSetup.backlogPriority}
                                  onChange={(e) => setSandboxSetup(prev => ({ ...prev, backlogPriority: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Feature --</option>
                                  <option value="ai_triage_clinical">AI clinical triage helper (high reach, clinical efficiency, verified confidence, moderate dev effort) (Correct!)</option>
                                  <option value="legacy_database_migration">Migrate secondary historical clinical database (low reach, moderate impact, high effort)</option>
                                  <option value="custom_theme_portal">Support fully customizable color themes for portal accounts (high reach, low impact, low effort)</option>
                                </select>
                              </div>
                            </div>

                            {/* Scenario 2 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-indigo rounded-full shrink-0" />
                                <span>Parameter 2: EMR Interoperability Standard</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;How should the technical requirements define syncing patient medical intakes with hospital Epic/Cerner databases?&quot;
                              </p>
                              <div>
                                <select
                                  value={sandboxSetup.interoperability}
                                  onChange={(e) => setSandboxSetup(prev => ({ ...prev, interoperability: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Interoperability Rule --</option>
                                  <option value="fhir_intake_sync">Require writes of patient forms to hospital EMR servers using HL7 FHIR questionnaire resource structures (Correct!)</option>
                                  <option value="csv_export_manual">Export patient forms to a daily CSV file and distribute manually via email</option>
                                  <option value="database_direct_view">Allow direct SQL database read access from hospital terminals, bypassing API layers</option>
                                </select>
                              </div>
                            </div>

                            {/* Scenario 3 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-emerald rounded-full shrink-0" />
                                <span>Parameter 3: HIPAA Access Security Rules</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;Which access rule must be enforced on clinical dashboards to comply with HIPAA guidelines?&quot;
                              </p>
                              <div>
                                <select
                                  value={sandboxSetup.accessControl}
                                  onChange={(e) => setSandboxSetup(prev => ({ ...prev, accessControl: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Access Rule --</option>
                                  <option value="minimum_necessary_role">Configure RBAC restricting patient details to care providers, masking identifiers for admins (Correct!)</option>
                                  <option value="all_access_dashboard">Grant view access to all clinical dashboards for all registered platform staff users</option>
                                  <option value="physician_override_off">Allow physician users to override patient visibility limits without audit trail records</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* Error message */}
                          {sandboxError && (
                            <div className="flex items-start space-x-2.5 p-3.5 bg-red-950/40 border border-red-500/20 text-red-300 rounded-xl text-xs">
                              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                              <span>{sandboxError}</span>
                            </div>
                          )}

                          {/* Correct notification */}
                          {sandboxSuccess && (
                            <div className="flex items-start space-x-2.5 p-3.5 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-xl text-xs">
                              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                              <span>Roadmap requirements validated! AI Triage prioritized, HL7 FHIR questionnaire write-backs set, and minimum-necessary RBAC policy approved.</span>
                            </div>
                          )}

                          <div className="pt-4 flex justify-between">
                            <button
                              type="button"
                              onClick={() => setFormStep(2)}
                              className="inline-flex items-center space-x-2 border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                            >
                              <span>Back</span>
                            </button>
                            
                            {!sandboxSuccess ? (
                              <button
                                type="button"
                                onClick={validateSandbox}
                                className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                              >
                                <span>Audit Requirements Setup ({sandboxAttempts} attempts)</span>
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => setFormStep(4)}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-5 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs cursor-pointer"
                              >
                                <span>Proceed to Review</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      {/* STEP 4: Review and Submit */}
                      {formStep === 4 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-white">Review & Submit Application</h3>
                          
                          <div className="space-y-4 text-xs font-mono">
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Personal Profile</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Name:</span> {formData.name}</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Email:</span> {formData.email}</p>
                              {formData.portfolioUrl && (
                                <p className="text-gray-300"><span className="text-gray-500 font-sans">LinkedIn/Portfolio:</span> {formData.portfolioUrl}</p>
                              )}
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Resume:</span> {formData.resumeName}</p>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Product Manager Profile</p>
                              <p className="text-gray-300">
                                <span className="text-gray-500 font-sans">Lifecycle Method:</span>{" "}
                                <span className="capitalize">{formData.primaryMethod}</span>
                              </p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">PM Experience:</span> {formData.pmYears} years</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">EHR Spec Mapping Comfort:</span> {formData.hipaaFamiliar}</p>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-1.5">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Sandbox Audit Validation</p>
                              <p className="text-brand-emerald flex items-center space-x-1.5">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>AI clinical triage priority, FHIR intake sync requirements, and RBAC visibility rules approved</span>
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 flex justify-between">
                            <button
                              type="button"
                              onClick={() => setFormStep(3)}
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
                                  <span>Locking roadmap sprints...</span>
                                </>
                              ) : (
                                <>
                                  <Send className="w-3.5 h-3.5" />
                                  <span>Submit Product Application</span>
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

          {/* -- SIDEBAR SKILLS & REQUIREMENT CARD -- */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Technical Skills Required */}
            <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6">
              <h3 className="font-display font-extrabold text-base text-white">Technical Core</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border tracking-wide uppercase ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Healthcare Technology Focus Areas */}
            <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6">
              <div className="flex items-center space-x-2 text-white">
                <Shield className="w-4 h-4 text-brand-cyan" />
                <h3 className="font-display font-extrabold text-base">Key Systems Involved</h3>
              </div>
              <div className="space-y-4">
                {techAreas.map((area, index) => (
                  <div key={index} className="flex space-x-3.5">
                    <div className="w-8 h-8 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">{area.title}</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}
