"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, Layers,
  Check, Send, Code, AlertCircle, FileSpreadsheet
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
    primaryTicketing: "jira",
    supportYears: "3-5",
    sqlFamiliar: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Support Sandbox State
  const [triageSetup, setTriageSetup] = useState({
    errorDiagnosis: "",
    privacyAction: "",
    escalationPath: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "SaaS Application Troubleshooting", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "API & Web Services Debugging", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "SQL Data Querying & Logs Analysis", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "Ticketing (Jira, Zendesk, ServiceNow)", level: "Required", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "HIPAA Privacy Auditing Guidelines", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "EHR/EMR Interface Integrations", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS platforms", desc: "Troubleshoot clinical UI issues, portal access logs, and tenant configuration settings.", icon: <Globe className="w-5 h-5" /> },
    { title: "Patient portal systems", desc: "Support client onboarding workflows, profile configurations, and patient-account syncing errors.", icon: <Users className="w-5 h-5" /> },
    { title: "Clinical software applications", desc: "Triage scheduling calendar lags, e-prescribing queue issues, and vital-sign charts.", icon: <Layers className="w-5 h-5" /> },
    { title: "Telemedicine platforms", desc: "Identify and resolve WebRTC call logs issues, connection drops, and browser permission hurdles.", icon: <HeartPulse className="w-5 h-5" /> },
    { title: "Healthcare APIs & integrations", desc: "Debug REST/GraphQL calls, HL7 mappings, and FHIR resource integrations.", icon: <Code className="w-5 h-5" /> },
    { title: "AI healthcare systems", desc: "Triage automated intake NLP parsing issues and routing errors for provider validation.", icon: <Brain className="w-5 h-5" /> },
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

  const validateTriage = () => {
    setSandboxAttempts(prev => prev + 1);
    
    // Correct choices:
    // errorDiagnosis -> expired_token (Expired FHIR OAuth Access Token - 403 Forbidden)
    // privacyAction -> match_verify (Deny auto-linking, create an verification task, require clinic staff database update)
    // escalationPath -> engineer_escalate (Escalate to backend engineering / DevOps with logs and token details)
    
    const correctDiagnosis = triageSetup.errorDiagnosis === "expired_token";
    const correctPrivacy = triageSetup.privacyAction === "match_verify";
    const correctEscalation = triageSetup.escalationPath === "engineer_escalate";
    
    if (correctDiagnosis && correctPrivacy && correctEscalation) {
      setSandboxSuccess(true);
      setSandboxError("");
    } else {
      setSandboxSuccess(false);
      let incorrectCount = 0;
      if (!correctDiagnosis) incorrectCount++;
      if (!correctPrivacy) incorrectCount++;
      if (!correctEscalation) incorrectCount++;
      
      setSandboxError(
        `Triage audit failed. ${incorrectCount}/3 steps resolved incorrectly. Hint: Analyze status codes and reasons in the logs; follow strict HIPAA verification routes for email discrepancies; and route unresolved API bugs directly to DevOps.`
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
          <span className="text-white">Technical Support Engineer</span>
        </div>

        {/* -- HERO HEADER -- */}
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Support Career</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Technical Support Engineer
                </h1>

                <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                  Provide technical assistance, troubleshoot system issues, and support healthcare SaaS platforms. Bridge communication between providers, patients, and engineering teams.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white">
                    <Activity className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Clinical Informatics</span>
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
                    Med Clinic X is a healthcare technology company building modern digital health systems that power healthcare organizations across the United States.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We develop healthcare SaaS platforms, patient portals, AI-powered healthcare systems, telemedicine solutions, automation tools, and integrated digital health products for clinics, hospitals, and healthcare providers.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our mission is to ensure healthcare technology runs smoothly, reliably, and efficiently for both clinicians and patients.
                  </p>
                </section>

                {/* Job Overview */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We are seeking a <strong>Technical Support Engineer</strong> to provide technical assistance, troubleshoot system issues, and support healthcare SaaS platforms used by healthcare organizations across the United States.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    In this role, you will act as a bridge between customers, healthcare providers, and engineering teams, ensuring that issues are resolved quickly and systems remain fully operational.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You will support patient portals, clinical systems, APIs, and digital health platforms that are critical to daily healthcare operations.
                  </p>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Responsibilities</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-2">
                        <Activity className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Technical Support</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Diagnose and resolve technical issues in SaaS platforms.</li>
                        <li>Support patient portals, clinical tools, and APIs.</li>
                        <li>Investigate database errors, bugs, and performance.</li>
                        <li>Escalate complex issues with diagnostic logs.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2">
                        <Globe className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Healthcare SaaS Support</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Assist US healthcare organizations on system usage.</li>
                        <li>Support tenant onboarding & layout configurations.</li>
                        <li>Guide administrators through clinical portals.</li>
                        <li>Verify connection health parameters.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">System & Ticket Management</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Respond to Zendesk or Jira helpdesk escalations.</li>
                        <li>Monitor system dashboards for active outages.</li>
                        <li>Document replication steps for dev review.</li>
                        <li>Maintain service level agreements (SLAs) efficiently.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2">
                        <Shield className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">HIPAA & Data Controls</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Adhere to HIPAA rules regarding PHI screen exposure.</li>
                        <li>Maintain strict identity verification workflows.</li>
                        <li>Help administrators manage roles & permissions.</li>
                        <li>Coordinate secure, audited database changes.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Join Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    At Med Clinic X, you will ensure that critical healthcare systems run smoothly and reliably. You will:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Support real healthcare platforms used by clinics and hospitals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Work directly with engineering and product teams daily</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Solve real-world technical issues in healthcare systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Build a strong career in healthcare SaaS support</span>
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
                      <span className={formStep === 3 ? "text-brand-cyan font-bold" : "text-gray-500"}>03. Triage Sandbox</span>
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
                          Thank you for demonstrating your technical troubleshooting and HIPAA compliance skills. This sandbox exercise simulates how we manage production logs.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setFormStep(1);
                          setSubmitSuccess(false);
                          setSandboxSuccess(false);
                          setSandboxAttempts(0);
                          setTriageSetup({ errorDiagnosis: "", privacyAction: "", escalationPath: "" });
                          setFormData({
                            name: "",
                            email: "",
                            portfolioUrl: "",
                            primaryTicketing: "jira",
                            supportYears: "3-5",
                            sqlFamiliar: "yes",
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
                                placeholder="Ethan Vance"
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
                                placeholder="ethan@example.com"
                                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or GitHub URL</label>
                              <input
                                type="url"
                                value={formData.portfolioUrl}
                                onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                                placeholder="https://linkedin.com/in/ethanv"
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

                      {/* STEP 2: Support Experience */}
                      {formStep === 2 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-white">Technical Support Experience</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Ticketing / Helpdesk Tool</label>
                              <select
                                value={formData.primaryTicketing}
                                onChange={(e) => setFormData(prev => ({ ...prev, primaryTicketing: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="jira">Jira Service Management</option>
                                <option value="zendesk">Zendesk</option>
                                <option value="servicenow">ServiceNow</option>
                                <option value="freshdesk">Freshdesk</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of experience in Technical Support or Helpdesk roles</label>
                              <select
                                value={formData.supportYears}
                                onChange={(e) => setFormData(prev => ({ ...prev, supportYears: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="0-2">0 to 2 Years</option>
                                <option value="3-5">3 to 5 Years</option>
                                <option value="5-8">5 to 8 Years</option>
                                <option value="8+">8+ Years</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable writing basic SQL queries to audit database transaction logs?</label>
                              <div className="flex gap-4">
                                {["yes", "no"].map((val) => (
                                  <button
                                    key={val}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, sqlFamiliar: val }))}
                                    className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                      formData.sqlFamiliar === val
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
                              <span>Proceed to Triage Sandbox</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: Triage Sandbox */}
                      {formStep === 3 && (
                        <div className="space-y-5">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-display font-extrabold text-lg text-white">Clinical API Log Debugging & Ticket Triage Sandbox</h3>
                              <p className="text-xs text-gray-400 mt-1">
                                Review the API logs below to triage the sync error and configure appropriate escalation/resolution parameters.
                              </p>
                            </div>
                            <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                              Triage Challenge
                            </span>
                          </div>

                          {/* API LOG FILE SIMULATION */}
                          <div className="bg-brand-bg border border-brand-border rounded-xl p-4 font-mono text-[10px] text-gray-300 space-y-1">
                            <p className="text-gray-500">// Simulated Server Output Traces //</p>
                            <p><span className="text-gray-500">2026-06-25T11:04:12Z</span> [INFO] [AuthService] Inbound login request received. user_id = 94812</p>
                            <p><span className="text-gray-500">2026-06-25T11:04:13Z</span> [INFO] [AuthService] JWT Token signature verified successfully.</p>
                            <p className="text-red-400"><span className="text-gray-500">2026-06-25T11:04:14Z</span> [ERROR] [AuthService] EHR Patient Sync failed for user_id = 94812. Status Code: 403 Forbidden. Reason: Expired FHIR access credentials.</p>
                            <p><span className="text-gray-500">2026-06-25T11:04:15Z</span> [INFO] [AuthService] Transaction aborted. Rollback completed.</p>
                          </div>

                          {/* SANDBOX CHALLENGE */}
                          <div className="space-y-4 font-sans text-xs">
                            
                            {/* Parameter 1 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0" />
                                <span>Parameter 1: Error Diagnosis from Logs</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;Based on the error trace, identify the core root cause of this syncing ticket.&quot;
                              </p>
                              <div>
                                <select
                                  value={triageSetup.errorDiagnosis}
                                  onChange={(e) => setTriageSetup(prev => ({ ...prev, errorDiagnosis: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Diagnosis --</option>
                                  <option value="db_crash">Relational Database Connection Pool Out of Memory (500 Error)</option>
                                  <option value="cors_error">Browser Cross-Origin Resource Sharing (CORS) security header block</option>
                                  <option value="expired_token">Expired FHIR OAuth Access Token (403 Forbidden) (Correct!)</option>
                                </select>
                              </div>
                            </div>

                            {/* Parameter 2 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-indigo rounded-full shrink-0" />
                                <span>Parameter 2: Patient Security & HIPAA Action</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;The patient portal account email does not match the EHR record email, but the clinic asks you to manually override it immediately. What compliance action do you take?&quot;
                              </p>
                              <div>
                                <select
                                  value={triageSetup.privacyAction}
                                  onChange={(e) => setTriageSetup(prev => ({ ...prev, privacyAction: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Action --</option>
                                  <option value="match_verify">Deny auto-linking, flag the email mismatch, and instruct the clinic to verify and update the EHR email first (Correct!)</option>
                                  <option value="force_override">Override database parameters immediately to bypass clinical blocks and sync the record</option>
                                  <option value="share_creds">Generate a temp access bypass link and email it directly to the patient's portal address</option>
                                </select>
                              </div>
                            </div>

                            {/* Parameter 3 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-emerald rounded-full shrink-0" />
                                <span>Parameter 3: Ticket Escalation Path</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;The API continues returning a 502 Bad Gateway even after updating credentials and access tokens. How do you route the ticket?&quot;
                              </p>
                              <div>
                                <select
                                  value={triageSetup.escalationPath}
                                  onChange={(e) => setTriageSetup(prev => ({ ...prev, escalationPath: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Escalation Path --</option>
                                  <option value="engineer_escalate">Escalate the ticket to backend engineering / DevOps with logs and OAuth tokens (Correct!)</option>
                                  <option value="close_ticket">Close the ticket and instruct the clinician to wait 24 hours for system refreshing</option>
                                  <option value="reboot_router">Advise the patient to clear browser cookies and reboot their local internet router</option>
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
                              <span>Triage rules verified! Root cause identified correctly, security protocols respected, and correct escalation mapped.</span>
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
                                onClick={validateTriage}
                                className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                              >
                                <span>Audit Triage Resolution ({sandboxAttempts} attempts)</span>
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
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Support Profile</p>
                              <p className="text-gray-300">
                                <span className="text-gray-500 font-sans">Helpdesk Platform:</span>{" "}
                                <span className="capitalize">{formData.primaryTicketing}</span>
                              </p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Support Experience:</span> {formData.supportYears} years</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">SQL Log Familiarity:</span> {formData.sqlFamiliar}</p>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-1.5">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Sandbox Audit Validation</p>
                              <p className="text-brand-emerald flex items-center space-x-1.5">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>Expired token diagnosis, identity verification guidelines, and engineering escalation routes validated</span>
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
                                  <span>Logging ticket...</span>
                                </>
                              ) : (
                                <>
                                  <Send className="w-3.5 h-3.5" />
                                  <span>Submit Support Application</span>
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
