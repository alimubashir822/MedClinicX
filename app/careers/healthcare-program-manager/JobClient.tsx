"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, HardDrive,
  Check, Send, Code, AlertCircle, FileSpreadsheet, Briefcase
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
    programScope: "enterprise",
    programYears: "5-8",
    agileComfort: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Program Governance Sandbox State
  const [governance, setGovernance] = useState({
    resourcePath: "",
    governanceGate: "",
    launchDependency: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "Program & Portfolio Leadership", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "Healthcare SaaS & IT Systems", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "Agile, Scrum, or PgMP Frameworks", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "SDLC & Scope Management", level: "Required", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "HIPAA Auditing & Regulatory QA", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "EHR/EMR Systems Deployment (Epic/Cerner)", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS platforms", desc: "Oversee program portfolios deploying core clinical systems and portal infrastructures.", icon: <Globe className="w-5 h-5" /> },
    { title: "Clinical workflow systems", desc: "Co-design milestones aligning doctor intake methods with back-end SaaS APIs.", icon: <FileSpreadsheet className="w-5 h-5" /> },
    { title: "EHR/EMR integrations", desc: "Map strategic roadmaps linking patient charts safely to hospital database repositories.", icon: <Database className="w-5 h-5" /> },
    { title: "Telemedicine platforms", desc: "Align cross-functional projects delivering high-availability WebRTC consult solutions.", icon: <HeartPulse className="w-5 h-5" /> },
    { title: "AI healthcare solutions", desc: "Manage risk profiles and data schemas for LLM-based triaging and analytics launches.", icon: <Brain className="w-5 h-5" /> },
    { title: "Healthcare automation systems", desc: "Supervise RPA and scheduling automation programs to reduce doctor documentation fatigue.", icon: <Activity className="w-5 h-5" /> },
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

  const validateGovernance = () => {
    setSandboxAttempts(prev => prev + 1);
    
    // Correct governance answers:
    // resourcePath -> reallocate (Reallocate senior resources from parallel, non-blocking tracks to the critical path)
    // governanceGate -> compliance_accuracy (HIPAA compliance auditing & clinical accuracy verification by medical officers)
    // launchDependency -> integrate_complete (Only after EHR Portal and AI Urgency Webhook complete integration testing)
    
    const correctPath = governance.resourcePath === "reallocate";
    const correctGate = governance.governanceGate === "compliance_accuracy";
    const correctLaunch = governance.launchDependency === "integrate_complete";
    
    if (correctPath && correctGate && correctLaunch) {
      setSandboxSuccess(true);
      setSandboxError("");
    } else {
      setSandboxSuccess(false);
      let incorrectCount = 0;
      if (!correctPath) incorrectCount++;
      if (!correctGate) incorrectCount++;
      if (!correctLaunch) incorrectCount++;
      
      setSandboxError(
        `Portfolio alignment mismatch. ${incorrectCount}/3 parameters mapped incorrectly. Hint: Mitigate blocking delays by shifting resources to critical paths; audit AI nodes for HIPAA/Accuracy before clinical pilot launch; and launch pilots only when integration steps succeed.`
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
          <span className="text-white">Healthcare Program Manager</span>
        </div>

        {/* -- HERO HEADER -- */}
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Leadership Career</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Healthcare Program Manager
                </h1>

                <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                  Lead multiple enterprise digital health initiatives, connect clinical SaaS workflows, and drive high-impact program delivery across hospital systems in the USA.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white">
                    <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
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
                    Med Clinic X is a healthcare technology company focused on delivering large-scale digital transformation across healthcare organizations in the United States.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We design and build healthcare SaaS platforms, AI-powered clinical systems, patient portals, telemedicine solutions, automation workflows, and integrated digital health products for clinics, hospitals, and healthcare providers.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our mission is to connect multiple healthcare initiatives into scalable, coordinated programs that improve patient outcomes and operational efficiency.
                  </p>
                </section>

                {/* Job Overview */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We are seeking a <strong>Healthcare Program Manager</strong> to lead and coordinate multiple healthcare technology projects and ensure successful delivery of large-scale digital health programs.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    In this role, you will oversee interconnected initiatives such as SaaS platform development, EHR integrations, AI healthcare solutions, and patient engagement systems. You will ensure all projects align with strategic healthcare objectives, timelines, and regulatory requirements.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You will work closely with executive leadership, engineering teams, product managers, clinicians, and healthcare stakeholders across the United States.
                  </p>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Responsibilities</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-2">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Program Leadership & Strategy</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Lead end-to-end programs across multiple teams.</li>
                        <li>Define program goals, timelines, and dependencies.</li>
                        <li>Align program execution with clinical objectives.</li>
                        <li>Oversee multiple interconnected IT projects.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2">
                        <Database className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Healthcare Technology Delivery</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Manage delivery of SaaS platforms & health systems.</li>
                        <li>Coordinate EHR/EMR integrations across networks.</li>
                        <li>Oversee AI healthcare & automation systems.</li>
                        <li>Ensure consistent execution across scrum teams.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2">
                        <Users className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Cross-Functional Coordination</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Align engineering, product, clinical, and ops.</li>
                        <li>Facilitate communication to align stakeholders.</li>
                        <li>Resolve project roadblocks and dependency risks.</li>
                        <li>Conduct program reviews & executive reporting.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2">
                        <Shield className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Risk, Compliance & Quality</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Implement mitigation strategies across programs.</li>
                        <li>Ensure compliance with HIPAA rules and standards.</li>
                        <li>Maintain robust quality benchmarks across software.</li>
                        <li>Track KPIs and program performance metrics.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Join Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    At Med Clinic X, you will lead high-impact healthcare programs that shape how modern healthcare systems operate. You will:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Lead large-scale healthcare digital transformation programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Work across multiple SaaS and AI healthcare initiatives</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Collaborate with executive, clinical, and engineering teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Drive enterprise-level healthcare system delivery in the US</span>
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
                      <span className={formStep === 3 ? "text-brand-cyan font-bold" : "text-gray-500"}>03. Alignment Sandbox</span>
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
                          Thank you for demonstrating your program coordination skills in our sandbox mapping challenge. This simulation simulates how we evaluate critical dependencies.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setFormStep(1);
                          setSubmitSuccess(false);
                          setSandboxSuccess(false);
                          setSandboxAttempts(0);
                          setGovernance({ resourcePath: "", governanceGate: "", launchDependency: "" });
                          setFormData({
                            name: "",
                            email: "",
                            portfolioUrl: "",
                            programScope: "enterprise",
                            programYears: "5-8",
                            agileComfort: "yes",
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
                                placeholder="Evelyn Carter"
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
                                placeholder="evelyn@example.com"
                                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or Portfolio URL</label>
                              <input
                                type="url"
                                value={formData.portfolioUrl}
                                onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                                placeholder="https://linkedin.com/in/evelyn-carter"
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

                      {/* STEP 2: Program Management Focus */}
                      {formStep === 2 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-white">Program Management Experience</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Max Scope of Programs Managed Previously</label>
                              <select
                                value={formData.programScope}
                                onChange={(e) => setFormData(prev => ({ ...prev, programScope: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="single">Single Large Project ($100k-$500k)</option>
                                <option value="multi">Multiple Parallel Projects ($500k-$2M)</option>
                                <option value="enterprise">Enterprise Portfolio / Strategic Programs ($2M+)</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of experience in healthcare program/portfolio management</label>
                              <select
                                value={formData.programYears}
                                onChange={(e) => setFormData(prev => ({ ...prev, programYears: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="0-4">0 to 4 Years</option>
                                <option value="5-8">5 to 8 Years</option>
                                <option value="8-12">8 to 12 Years</option>
                                <option value="12+">12+ Years</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable aligning multiple scrum/kanban development sprints towards unified strategic goals?</label>
                              <div className="flex gap-4">
                                {["yes", "no"].map((val) => (
                                  <button
                                    key={val}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, agileComfort: val }))}
                                    className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                      formData.agileComfort === val
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
                              <span>Proceed to Portfolio Sandbox</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: Program Governance Sandbox */}
                      {formStep === 3 && (
                        <div className="space-y-5">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-display font-extrabold text-lg text-white">Healthcare Portfolio & Dependency Governance Sandbox</h3>
                              <p className="text-xs text-gray-400 mt-1">
                                Resolve dependency blocks, choose compliance risk gates, and structure launch dependencies for our multi-initiative clinical portal program.
                              </p>
                            </div>
                            <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                              Program Matcher
                            </span>
                          </div>

                          {/* SANDBOX CHALLENGE */}
                          <div className="space-y-4 font-sans text-xs">
                            
                            {/* Scenario 1 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0" />
                                <span>Parameter 1: Resource Reallocation Strategy</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;Project 1 (Core EMR API Integration) is running 2 weeks late, threatening Project 2 (AI Symptom intake webhook deployment) which relies directly on EMR endpoints. How do you re-schedule?&quot;
                              </p>
                              <div>
                                <select
                                  value={governance.resourcePath}
                                  onChange={(e) => setGovernance(prev => ({ ...prev, resourcePath: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Strategy --</option>
                                  <option value="delay">Delay Project 2 and absorb the 2-week slip across the whole program</option>
                                  <option value="reallocate">Reallocate senior developers from parallel, non-blocking tracks to Project 1 (Correct!)</option>
                                  <option value="scope">Reduce EMR API test coverage specifications to hit the timeline</option>
                                </select>
                              </div>
                            </div>

                            {/* Scenario 2 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-indigo rounded-full shrink-0" />
                                <span>Parameter 2: Clinical Governance Risk Gate</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;Before pushing the AI Urgency Webhook tool to public pilot testing, what clinical governance audit must be completed?&quot;
                              </p>
                              <div>
                                <select
                                  value={governance.governanceGate}
                                  onChange={(e) => setGovernance(prev => ({ ...prev, governanceGate: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Risk Gate --</option>
                                  <option value="compliance_accuracy">HIPAA compliance auditing & clinical accuracy verification by medical officers (Correct!)</option>
                                  <option value="marketing_ui">UI/UX user feedback survey and aesthetic branding alignment reviews</option>
                                  <option value="speed_perf">Load testing execution and database querying performance audit</option>
                                </select>
                              </div>
                            </div>

                            {/* Scenario 3 */}
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                              <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                                <span className="w-2 h-2 bg-brand-emerald rounded-full shrink-0" />
                                <span>Parameter 3: Multi-Project Pilot Launch Dependency</span>
                              </div>
                              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                                &quot;Under what dependency sequence can the final Hospital Pilot Deployment (Project 3) begin?&quot;
                              </p>
                              <div>
                                <select
                                  value={governance.launchDependency}
                                  onChange={(e) => setGovernance(prev => ({ ...prev, launchDependency: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Launch Condition --</option>
                                  <option value="emr_ready">Immediately after Project 1 (EMR API Integration) completes, running the AI webhook concurrently</option>
                                  <option value="integrate_complete">Only after EHR Portal and AI Urgency Webhook complete integration testing (Correct!)</option>
                                  <option value="immediate">Start Pilot immediately using mock datasets, skipping real-time API integrations</option>
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
                              <span>Program portfolio governance validated! Dependencies aligned successfully with HIPAA and clinical safeguards.</span>
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
                                onClick={validateGovernance}
                                className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                              >
                                <span>Align Portfolio Metrics ({sandboxAttempts} attempts)</span>
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
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Program Management Profile</p>
                              <p className="text-gray-300">
                                <span className="text-gray-500 font-sans">Max Scope:</span>{" "}
                                <span className="capitalize">{formData.programScope}</span>
                              </p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Healthcare Program Experience:</span> {formData.programYears} years</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Cross-Scrum Agile Comfort:</span> {formData.agileComfort}</p>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-1.5">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Program Sandbox Validation</p>
                              <p className="text-brand-emerald flex items-center space-x-1.5">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>Multi-project dependencies and clinical compliance risk gates verified</span>
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
                                  <span>Submitting profile...</span>
                                </>
                              ) : (
                                <>
                                  <Send className="w-3.5 h-3.5" />
                                  <span>Submit Program Manager Application</span>
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
