"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, HardDrive,
  Check, Send, Code, AlertCircle, FileSpreadsheet, Briefcase, Layers
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
    pmExperience: "agile",
    healthcareYears: "3-5",
    hipaaFamiliar: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Project Dependency Matcher State
  const [dependencies, setDependencies] = useState({
    phaseA: "",
    phaseB: "",
    phaseC: "",
    phaseD: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "Agile, Scrum, or Kanban Workflows", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "Project Management Tools (Jira, Asana)", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "SDLC & Scope Management", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "Healthcare SaaS or IT systems", level: "Required", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "EHR/EMR Systems Deployment", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "HIPAA Auditing & Security QA", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS platforms", desc: "Coordinate sprints and scope deliverables for clinical management portals.", icon: <Globe className="w-5 h-5" /> },
    { title: "Patient portal systems", desc: "Oversee milestones mapping features like symptom triagers, booking tools, and medical charts.", icon: <Users className="w-5 h-5" /> },
    { title: "EHR/EMR integrations", desc: "Manage engineering backlogs linking portals to Epic, Cerner, and hospital networks.", icon: <Database className="w-5 h-5" /> },
    { title: "Healthcare automation solutions", desc: "Supervise operational flow deployments mapping clinic lead metrics.", icon: <Activity className="w-5 h-5" /> },
    { title: "Telemedicine platforms", desc: "Direct WebRTC calling tool updates, slot scheduler calendars, and invoice triggers.", icon: <HeartPulse className="w-5 h-5" /> },
    { title: "AI healthcare solutions", desc: "Manage timelines for LLM training runs, clinical rule mapping, and speech transcription pilots.", icon: <Brain className="w-5 h-5" /> },
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

  const validateDependencies = () => {
    setSandboxAttempts(prev => prev + 1);
    
    // Correct predecessors:
    // phaseA -> none
    // phaseB -> phaseA
    // phaseC -> phaseA
    // phaseD -> bothBC
    
    const correctA = dependencies.phaseA === "none";
    const correctB = dependencies.phaseB === "phaseA";
    const correctC = dependencies.phaseC === "phaseA";
    const correctD = dependencies.phaseD === "bothBC";
    
    if (correctA && correctB && correctC && correctD) {
      setSandboxSuccess(true);
      setSandboxError("");
    } else {
      setSandboxSuccess(false);
      let incorrectCount = 0;
      if (!correctA) incorrectCount++;
      if (!correctB) incorrectCount++;
      if (!correctC) incorrectCount++;
      if (!correctD) incorrectCount++;
      
      setSandboxError(
        `Scoping error. ${incorrectCount}/4 dependencies mapped incorrectly. Hint: EHR API Development (Phase B) and AI Model Training (Phase C) can run in parallel but both require Requirements (Phase A) to start first. System Integration (Phase D) requires both completion before launch.`
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
      {/* Glow backgrounds */}
      <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        {/* -- BREADCRUMB -- */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/careers" className="text-gray-500 hover:text-brand-cyan transition-colors">Careers</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">Healthcare Project Manager</span>
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
                  Healthcare Project Manager
                </h1>

                <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
                  Lead end-to-end Agile lifecycles delivering clinical SaaS platforms, EHR integrations, and telemedicine solutions for hospitals and clinics across the USA.
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
                      Med Clinic X is a healthcare technology company focused on building modern digital solutions that transform how healthcare organizations operate across the United States.
                    </p>
                    <p>
                      We develop healthcare SaaS platforms, patient portals, AI-powered healthcare systems, telemedicine solutions, automation workflows, and integrated digital health products for clinics, hospitals, and healthcare providers.
                    </p>
                    <p>
                      Our mission is to deliver scalable, secure, and high-impact healthcare technology that improves patient care and operational efficiency.
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
                      We are seeking a <strong className="text-white font-semibold">Healthcare Project Manager</strong> to lead the planning, execution, and delivery of healthcare technology projects across multiple digital health and SaaS initiatives.
                    </p>
                    <p>
                      In this role, you will manage cross-functional teams including developers, designers, AI engineers, data analysts, and healthcare stakeholders. You will ensure projects are delivered on time, within scope, and aligned with healthcare industry requirements.
                    </p>
                    <p>
                      You will play a key role in delivering healthcare SaaS platforms, patient portals, EHR integrations, AI healthcare systems, and digital transformation projects for US-based healthcare organizations.
                    </p>
                  </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Key Responsibilities
                  </h2>

                  <div className="space-y-6">
                    {/* Block 1 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Layers className="w-5 h-5 text-brand-cyan" />
                        <span>Project Planning & Execution</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Lead end-to-end healthcare technology project lifecycles.</li>
                        <li>Define project scope, timelines, milestones, and deliverables.</li>
                        <li>Manage Agile/Scrum workflows for healthcare SaaS development projects.</li>
                        <li>Ensure timely delivery of healthcare software and digital health solutions.</li>
                      </ul>
                    </div>

                    {/* Block 2 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Database className="w-5 h-5 text-brand-indigo" />
                        <span>Healthcare Technology Delivery</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Oversee development of healthcare SaaS platforms and patient portals.</li>
                        <li>Manage EHR/EMR integration projects and healthcare system deployments.</li>
                        <li>Coordinate AI healthcare solution development and implementation.</li>
                        <li>Ensure compliance with healthcare workflows and data requirements.</li>
                      </ul>
                    </div>

                    {/* Block 3 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Users className="w-5 h-5 text-brand-emerald" />
                        <span>Cross-Functional Team Management</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Collaborate with engineering, product, AI, and data teams.</li>
                        <li>Align healthcare stakeholders with technical development teams.</li>
                        <li>Facilitate sprint planning, standups, and project reviews.</li>
                        <li>Manage communication between technical and non-technical teams.</li>
                      </ul>
                    </div>

                    {/* Block 4 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-rose-400" />
                        <span>Risk, Quality & Compliance</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Identify project risks and implement mitigation strategies.</li>
                        <li>Ensure healthcare data privacy and compliance considerations (HIPAA-aligned).</li>
                        <li>Maintain quality assurance across healthcare software delivery.</li>
                        <li>Monitor project KPIs and performance metrics.</li>
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
                      <span>Bachelor’s degree in Project Management, CS, Healthcare Admin, IS, or related field.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience managing software or healthcare technology projects.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Strong understanding of Agile, Scrum, or similar methodologies.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Ability to manage multiple projects in a fast-paced environment.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Understanding of healthcare systems and digital health workflows.</span>
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
                      <span>Experience in US healthcare or healthcare SaaS companies.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Familiarity with HIPAA compliance and healthcare data security constraints.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience managing EHR/EMR integrations and telemedicine platforms.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>PMP, Scrum Master, or Agile certifications (highly preferred).</span>
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
                      <span>Lead impactful healthcare SaaS and AI projects.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Work directly with modern Agile development teams.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Build experience in a rapidly growing health tech sector.</span>
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
                  <span>STEP {formStep} OF 4</span>
                  <span>
                    {formStep === 1 && "Personal Information"}
                    {formStep === 2 && "Agile & Certifications"}
                    {formStep === 3 && "Healthcare Dependency Matcher"}
                    {formStep === 4 && "Review & Submit"}
                  </span>
                </div>
                <div className="w-full bg-slate-900 border border-brand-border h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand-cyan to-brand-indigo h-full transition-all duration-300"
                    style={{ width: `${(formStep / 4) * 100}%` }}
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
                        Thank you for applying, <strong className="text-white">{formData.name}</strong>. Your profile has passed our scheduling dependency screening test. The operations recruitment team will reach out.
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border max-w-sm mx-auto text-left space-y-2 font-mono text-xs">
                      <p className="text-brand-cyan font-bold uppercase text-[10px] tracking-wider mb-2">Automated Match Summary</p>
                      <p className="text-gray-400">Position: <span className="text-white">Healthcare Project Manager</span></p>
                      <p className="text-gray-400">Roadmap Test: <span className="text-brand-emerald">4/4 Critical Path Links Correct</span></p>
                      <p className="text-gray-400">US Healthcare PM fit: <span className="text-brand-cyan">Experienced</span></p>
                      <p className="text-gray-400">Status: <span className="text-brand-emerald animate-pulse">Under Review by VP of Operations</span></p>
                    </div>

                    <button
                      onClick={() => {
                        setFormStep(1);
                        setSubmitSuccess(false);
                        setSandboxSuccess(false);
                        setSandboxAttempts(0);
                        setDependencies({ phaseA: "", phaseB: "", phaseC: "", phaseD: "" });
                        setFormData({
                          name: "",
                          email: "",
                          portfolioUrl: "",
                          pmExperience: "agile",
                          healthcareYears: "3-5",
                          hipaaFamiliar: "yes",
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
                              placeholder="Elena Gomez"
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
                              placeholder="elena@example.com"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Portfolio or LinkedIn URL</label>
                            <input
                              type="url"
                              value={formData.portfolioUrl}
                              onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                              placeholder="https://linkedin.com/in/elena-gomez"
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

                    {/* STEP 2: Agile & Certs */}
                    {formStep === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Project Workflows & Certs</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Agile Methodology Expertise</label>
                            <select
                              value={formData.pmExperience}
                              onChange={(e) => setFormData(prev => ({ ...prev, pmExperience: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="scrum">Scrum Master / Sprint Facilitator</option>
                              <option value="agile">Traditional Agile / Kanban</option>
                              <option value="waterfall">Waterfall / Hybrid delivery</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of Experience managing digital health/healthcare IT projects</label>
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
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Do you hold active certifications (PMP, PMI-ACP, CSM)?</label>
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
                            <span>Proceed to Dependency Matcher</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Interactive Sandbox */}
                    {formStep === 3 && (
                      <div className="space-y-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-display font-extrabold text-lg text-white">Healthcare Project Roadmap Scheduler</h3>
                            <p className="text-xs text-gray-400 mt-1">
                              Match each EHR Integration Phase to its correct project Predecessor Task.
                            </p>
                          </div>
                          <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                            Roadmap Scoping
                          </span>
                        </div>

                        {/* MAPPING INTERFACE */}
                        <div className="space-y-4 font-sans text-xs">
                          {/* Row 1: Phase A */}
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-white/2 border border-white/5 p-3 rounded-xl">
                            <div className="sm:col-span-5 font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-cyan rounded-full" />
                              <span>Phase A: Clinical Requirements & HIPAA Audit</span>
                            </div>
                            <div className="sm:col-span-1 text-center text-gray-500 font-semibold">&rarr;</div>
                            <div className="sm:col-span-6">
                              <select
                                value={dependencies.phaseA}
                                onChange={(e) => setDependencies(prev => ({ ...prev, phaseA: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Select Predecessor task --</option>
                                <option value="none">No Predecessors (Starts Project First)</option>
                                <option value="phaseA">Phase A (Requirements & HIPAA Completed)</option>
                                <option value="bothBC">Both Phase B and Phase C Completed</option>
                              </select>
                            </div>
                          </div>

                          {/* Row 2: Phase B */}
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-white/2 border border-white/5 p-3 rounded-xl">
                            <div className="sm:col-span-5 font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-indigo rounded-full" />
                              <span>Phase B: EHR API Development & Data Mapping</span>
                            </div>
                            <div className="sm:col-span-1 text-center text-gray-500 font-semibold">&rarr;</div>
                            <div className="sm:col-span-6">
                              <select
                                value={dependencies.phaseB}
                                onChange={(e) => setDependencies(prev => ({ ...prev, phaseB: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Select Predecessor task --</option>
                                <option value="none">No Predecessors (Starts Project First)</option>
                                <option value="phaseA">Phase A (Requirements & HIPAA Completed)</option>
                                <option value="bothBC">Both Phase B and Phase C Completed</option>
                              </select>
                            </div>
                          </div>

                          {/* Row 3: Phase C */}
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-white/2 border border-white/5 p-3 rounded-xl">
                            <div className="sm:col-span-5 font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-emerald rounded-full" />
                              <span>Phase C: AI Receptionist Model Training</span>
                            </div>
                            <div className="sm:col-span-1 text-center text-gray-500 font-semibold">&rarr;</div>
                            <div className="sm:col-span-6">
                              <select
                                value={dependencies.phaseC}
                                onChange={(e) => setDependencies(prev => ({ ...prev, phaseC: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Select Predecessor task --</option>
                                <option value="none">No Predecessors (Starts Project First)</option>
                                <option value="phaseA">Phase A (Requirements & HIPAA Completed)</option>
                                <option value="bothBC">Both Phase B and Phase C Completed</option>
                              </select>
                            </div>
                          </div>

                          {/* Row 4: Phase D */}
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-white/2 border border-white/5 p-3 rounded-xl">
                            <div className="sm:col-span-5 font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-amber-400 rounded-full" />
                              <span>Phase D: System Integration & Pilot Launch</span>
                            </div>
                            <div className="sm:col-span-1 text-center text-gray-500 font-semibold">&rarr;</div>
                            <div className="sm:col-span-6">
                              <select
                                value={dependencies.phaseD}
                                onChange={(e) => setDependencies(prev => ({ ...prev, phaseD: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Select Predecessor task --</option>
                                <option value="none">No Predecessors (Starts Project First)</option>
                                <option value="phaseA">Phase A (Requirements & HIPAA Completed)</option>
                                <option value="bothBC">Both Phase B and Phase C Completed</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Execute Button */}
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={validateDependencies}
                            className="bg-brand-indigo/25 hover:bg-brand-indigo/40 text-brand-indigo-light border border-brand-indigo/35 font-bold text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                          >
                            Verify Roadmap Schedule
                          </button>
                          {sandboxAttempts > 0 && (
                            <span className="text-[11px] font-semibold font-mono text-gray-400">
                              {sandboxAttempts} validation check{sandboxAttempts > 1 ? "s" : ""}
                            </span>
                          )}
                        </div>

                        {/* Output Sandbox console */}
                        {sandboxAttempts > 0 && (
                          <div className={`p-4 rounded-xl border font-mono text-xs ${
                            sandboxSuccess 
                              ? "bg-brand-emerald/5 border-brand-emerald/30 text-brand-emerald" 
                              : "bg-rose-950/20 border-rose-500/30 text-rose-400"
                          }`}>
                            <div className="flex items-start space-x-2">
                              {sandboxSuccess ? (
                                <>
                                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  <div className="space-y-1.5">
                                    <p className="font-bold">✓ Success: Roadmap dependencies and critical path verified!</p>
                                    <p className="text-[10px] text-gray-400 leading-normal">
                                      Phase A has no predecessor. Phase B and Phase C depend on Phase A. Phase D requires completion of both Phase B and C. Roadmap evaluation passed successfully.
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  <p className="leading-relaxed font-semibold">{sandboxError}</p>
                                </>
                              )}
                            </div>
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
                          <button
                            type="button"
                            disabled={!sandboxSuccess}
                            onClick={() => setFormStep(4)}
                            className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs disabled:opacity-30 cursor-pointer"
                          >
                            <span>Review Application</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Review & Submit */}
                    {formStep === 4 && (
                      <div className="space-y-6">
                        <h3 className="font-display font-extrabold text-lg text-white">Review &amp; Submit</h3>
                        
                        <div className="space-y-4">
                          <div className="glass-panel border border-brand-border rounded-2xl p-5 space-y-3.5 text-xs">
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Full Name</span>
                              <span className="text-white font-bold">{formData.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Email</span>
                              <span className="text-white font-bold">{formData.email}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">LinkedIn/Portfolio</span>
                              <span className="text-white font-mono font-bold truncate max-w-[200px]">{formData.portfolioUrl || "Not Provided"}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Resume File</span>
                              <span className="text-brand-cyan font-bold">{formData.resumeName}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Agile expertise</span>
                              <span className="text-white capitalize font-bold">{formData.pmExperience}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Health Tech PM Experience</span>
                              <span className="text-white font-bold">{formData.healthcareYears} years</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-semibold">Roadmap Sandbox Screening</span>
                              <span className="text-brand-emerald font-bold font-mono">4 / 4 Correct (Passed)</span>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-3 bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl text-[11px] text-gray-300 leading-normal">
                            <Shield className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                            <p>
                              By submitting, you agree to have your roadmap scheduling and project delivery credentials evaluated by Med Clinic X.
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
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-95 shadow-lg shadow-brand-cyan/20 text-xs disabled:opacity-55 transition-all cursor-pointer"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center space-x-1.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                                <span>Submitting...</span>
                              </div>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                <span>Submit Job Application</span>
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
