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
    primaryLang: "javascript",
    solutionsYears: "3-5",
    fhirFamiliar: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Integration Sandbox State
  const [integrationSetup, setIntegrationSetup] = useState({
    apiStandard: "",
    authFlow: "",
    syncSchedule: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "API Design & REST/GraphQL Integrations", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "OAuth 2.0 & JWT Security Mappings", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "EHR/EMR Systems Interoperability", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "HL7 & FHIR JSON Data Standards", level: "Required", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "SQL & Data Extraction Pipelines", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "Technical Pre-Sales Consulting", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS platforms", desc: "Design connection templates for hospitals integrating patient portal dashboards.", icon: <Globe className="w-5 h-5" /> },
    { title: "EHR/EMR integration systems", desc: "Formulate schemas mapping custom SaaS attributes into standard HL7/FHIR feeds.", icon: <Database className="w-5 h-5" /> },
    { title: "API-driven ecosystems", desc: "Build secure developer portals, API routes, and webhook notification parameters.", icon: <Code className="w-5 h-5" /> },
    { title: "Telemedicine platforms", desc: "Resolve video proxy routing constraints for clinic client firewalls.", icon: <HeartPulse className="w-5 h-5" /> },
    { title: "AI healthcare solutions", desc: "Deploy pipelines feeding raw clinical outcomes text into ingestion nodes.", icon: <Brain className="w-5 h-5" /> },
    { title: "Digital health infrastructure", desc: "Configure secure cloud proxies and HIPAA network boundaries for hospital groups.", icon: <Server className="w-5 h-5" /> },
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

  const validateIntegration = () => {
    setSandboxAttempts(prev => prev + 1);
    
    // Correct integration choices:
    // apiStandard -> fhir_json (HL7 FHIR JSON endpoints over HTTPS)
    // authFlow -> oauth_jwt (OAuth 2.0 Client Credentials flow with JWT signing & 15-min expiry)
    // syncSchedule -> webhook_realtime (Webhook triggers for real-time events + SSN/birthdate validation)
    
    const correctStandard = integrationSetup.apiStandard === "fhir_json";
    const correctAuth = integrationSetup.authFlow === "oauth_jwt";
    const correctSync = integrationSetup.syncSchedule === "webhook_realtime";
    
    if (correctStandard && correctAuth && correctSync) {
      setSandboxSuccess(true);
      setSandboxError("");
    } else {
      setSandboxSuccess(false);
      let incorrectCount = 0;
      if (!correctStandard) incorrectCount++;
      if (!correctAuth) incorrectCount++;
      if (!correctSync) incorrectCount++;
      
      setSandboxError(
        `Integration audit failed. ${incorrectCount}/3 configurations contain errors. Hint: Prioritize HL7 FHIR JSON protocols for modern REST connections; enforce ephemeral JWTs for API access security; and leverage webhooks for real-time updates.`
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
          <span className="text-white">Solutions Engineer</span>
        </div>

        {/* -- HERO HEADER -- */}
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Solutions Career</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Solutions Engineer
                </h1>

                <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                  Design, implement, and support technical integrations for healthcare SaaS platforms and digital health systems. Bridge clinical workflows with engineering APIs.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white">
                    <Code className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Data & Analytics</span>
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
                    Med Clinic X is a healthcare technology company building modern digital health systems that help healthcare organizations across the United States operate more efficiently.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We develop healthcare SaaS platforms, AI-powered healthcare systems, patient portals, telemedicine solutions, automation workflows, and integrated digital health products for clinics, hospitals, and healthcare providers.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our mission is to design intelligent, scalable solutions that connect healthcare systems, data, and workflows into one unified ecosystem.
                  </p>
                </section>

                {/* Job Overview */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We are seeking a <strong>Solutions Engineer</strong> to design, implement, and support technical solutions for healthcare SaaS platforms and digital health systems.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    In this role, you will act as a bridge between engineering, product, and healthcare clients, translating complex technical requirements into scalable healthcare solutions.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You will work on system integrations, APIs, workflow design, and platform configurations used by healthcare organizations across the United States.
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
                      <h3 className="font-semibold text-white text-sm">Healthcare Solution Design</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Design end-to-end technical solutions for SaaS.</li>
                        <li>Map client requirements to system architectures.</li>
                        <li>Support implementation of clinical workflow pipelines.</li>
                        <li>Design REST/GraphQL API connections for clients.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2">
                        <Database className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">System Integration</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Integrate SaaS platforms with hospital EHR/EMR networks.</li>
                        <li>Implement automated API token authorization loops.</li>
                        <li>Configure digital portals for medical practice groups.</li>
                        <li>Lead onboarding support and validation testing.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2">
                        <Users className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Technical Collaboration</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Work closely with software engineers & product managers.</li>
                        <li>Interface directly with hospital C-suite and IT teams.</li>
                        <li>Provide design guidelines during integration delivery.</li>
                        <li>Identify and fix API query bottlenecks for clients.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2">
                        <Code className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Pre-Sales Engineering</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Deliver technical demonstrations & pilot presentations.</li>
                        <li>Verify implementation feasibility and scopes.</li>
                        <li>Draft architectural schematics for sales pipelines.</li>
                        <li>Ensure patient-portal onboarding success metrics.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Join Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    At Med Clinic X, you will design and deliver real-world healthcare solutions used by clinics and hospitals. You will:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Build and design healthcare SaaS solutions at scale</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Work directly on system integrations and APIs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Collaborate with engineering teams and healthcare clients</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Bridge technology and real-world clinical workflows</span>
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
                      <span className={formStep === 3 ? "text-brand-cyan font-bold" : "text-gray-500"}>03. Integration Sandbox</span>
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
                          Thank you for demonstrating your technical solution design, API routing, and FHIR standard mapping choices.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setFormStep(1);
                          setSubmitSuccess(false);
                          setSandboxSuccess(false);
                          setSandboxAttempts(0);
                          setIntegrationSetup({ apiStandard: "", authFlow: "", syncSchedule: "" });
                          setFormData({
                            name: "",
                            email: "",
                            portfolioUrl: "",
                            primaryLang: "javascript",
                            solutionsYears: "3-5",
                            fhirFamiliar: "yes",
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
                                placeholder="Sylvia Vance"
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
                                placeholder="sylvia@example.com"
                                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or GitHub URL</label>
                              <input
                                type="url"
                                value={formData.portfolioUrl}
                                onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                                placeholder="https://github.com/sylviav"
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

                      {/* STEP 2: Solutions Experience */}
                      {formStep === 2 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-white">Solutions & Integration Profile</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Integration Language</label>
                              <select
                                value={formData.primaryLang}
                                onChange={(e) => setFormData(prev => ({ ...prev, primaryLang: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="javascript">JavaScript / TypeScript</option>
                                <option value="python">Python</option>
                                <option value="go">Go</option>
                                <option value="java">Java</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of experience in Solutions Engineering or Integration Consulting</label>
                              <select
                                value={formData.solutionsYears}
                                onChange={(e) => setFormData(prev => ({ ...prev, solutionsYears: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="0-2">0 to 2 Years</option>
                                <option value="3-5">3 to 5 Years</option>
                                <option value="5-8">5 to 8 Years</option>
                                <option value="8+">8+ Years</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable mapping legacy EMR schemas (HL7 v2 segments) to modern JSON FHIR resources?</label>
                              <div className="flex gap-4">
                                {["yes", "no"].map((val) => (
                                  <button
                                    key={val}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, fhirFamiliar: val }))}
                                    className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                      formData.fhirFamiliar === val
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
                              <span>Proceed to Integration Sandbox</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: Integration Sandbox */}
                      {formStep === 3 && (
                        <div className="space-y-5">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-display font-extrabold text-lg text-white">Solutions Engineering API & System Integration Sandbox</h3>
                              <p className="text-xs text-gray-400 mt-1">
                                Design the integration topology connecting Med Clinic X's patient portal with a hospital's legacy Epic EHR server.
                              </p>
                            </div>
                            <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                              Integration Challenge
                            </span>
                          </div>

                          {/* SANDBOX CHALLENGE */}
                          <div className="space-y-4 font-sans text-xs">
                            
                            {/* Scenario 1 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0" />
                                <span>Parameter 1: API Protocol & Patient Data Standard</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;Which REST API protocol standard is preferred for exchanging patient demographical records with external EHRs?&quot;
                              </p>
                              <div>
                                <select
                                  value={integrationSetup.apiStandard}
                                  onChange={(e) => setIntegrationSetup(prev => ({ ...prev, apiStandard: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Protocol --</option>
                                  <option value="soap_xml">Integrate via custom SOAP XML web services over custom VPN tunnels</option>
                                  <option value="fhir_json">Use HL7 FHIR JSON endpoints over secure HTTPS (Correct!)</option>
                                  <option value="direct_sql">Expose direct JDBC connections from the hospital server database</option>
                                </select>
                              </div>
                            </div>

                            {/* Scenario 2 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-indigo rounded-full shrink-0" />
                                <span>Parameter 2: Access Token & Authentication Flow</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;What security handshake authentication flow is required to secure the patient sync client endpoints?&quot;
                              </p>
                              <div>
                                <select
                                  value={integrationSetup.authFlow}
                                  onChange={(e) => setIntegrationSetup(prev => ({ ...prev, authFlow: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Auth Flow --</option>
                                  <option value="basic_auth">HTTP Basic Authentication with static client passwords</option>
                                  <option value="oauth_jwt">OAuth 2.0 Client Credentials flow with JWT signing & 15-minute token expiry (Correct!)</option>
                                  <option value="none_ip">Secure via IP address whitelisting, skipping credential verification</option>
                                </select>
                              </div>
                            </div>

                            {/* Scenario 3 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-emerald rounded-full shrink-0" />
                                <span>Parameter 3: Patient Sync Schedule & Conflict Resolution</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;How should the SaaS update patient records when details are edited in both the local portal and the hospital database?&quot;
                              </p>
                              <div>
                                <select
                                  value={integrationSetup.syncSchedule}
                                  onChange={(e) => setIntegrationSetup(prev => ({ ...prev, syncSchedule: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Sync Method --</option>
                                  <option value="webhook_realtime">Deploy webhook triggers for real-time sync with patient birthdate & SSN validation (Correct!)</option>
                                  <option value="batch_nightly">Run a nightly batch SQL script to overwrite all portal edits with EMR snapshots</option>
                                  <option value="manual_export">Train administrators to manually export and import CSV data logs daily</option>
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
                              <span>Integration parameters verified! FHIR JSON selected, OAuth 2.0 active with ephemeral JWT tokens, and real-time webhook sync configured.</span>
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
                                onClick={validateIntegration}
                                className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                              >
                                <span>Audit Integration Config ({sandboxAttempts} attempts)</span>
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
                                <p className="text-gray-300"><span className="text-gray-500 font-sans">LinkedIn/GitHub:</span> {formData.portfolioUrl}</p>
                              )}
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Resume:</span> {formData.resumeName}</p>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Solutions Engineering Profile</p>
                              <p className="text-gray-300">
                                <span className="text-gray-500 font-sans">Integration Language:</span>{" "}
                                <span className="capitalize">{formData.primaryLang}</span>
                              </p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Solutions Experience:</span> {formData.solutionsYears} years</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">HL7/FHIR Schema Familiarity:</span> {formData.fhirFamiliar}</p>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-1.5">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Sandbox Audit Validation</p>
                              <p className="text-brand-emerald flex items-center space-x-1.5">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>HL7 FHIR REST protocols, OAuth 2.0 Client credentials, and real-time webhook sync loops approved</span>
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
                                  <span>Authorizing channels...</span>
                                </>
                              ) : (
                                <>
                                  <Send className="w-3.5 h-3.5" />
                                  <span>Submit Solutions Application</span>
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
