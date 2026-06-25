"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, HardDrive,
  Check, Send, Code, AlertCircle, FileSpreadsheet, Layers
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
    informaticsFocus: "ehr",
    healthcareYears: "3-5",
    fhirFamiliar: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Schema Mapping Sandbox State
  const [scenarios, setScenarios] = useState({
    categoryCode: "",
    loincCode: "",
    ucumUnit: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "Clinical Informatics & Data Systems", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "EHR/EMR documentation mapping", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "HL7 & FHIR Interoperability standards", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "SQL & Clinical Database querying", level: "Highly Valued", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "Data validation & quality audits", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "HIPAA Governance & compliance rules", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS platforms", desc: "Formulate data-model requirements translating clinical documentation styles into software forms.", icon: <Globe className="w-5 h-5" /> },
    { title: "Clinical informatics systems", desc: "Ensure medical terminology codes (SNOMED, RxNorm, LOINC) align correctly within dynamic database tables.", icon: <Layers className="w-5 h-5" /> },
    { title: "EHR/EMR integration systems", desc: "Oversee data mapping scripts connecting hospital networks with our portals.", icon: <Database className="w-5 h-5" /> },
    { title: "Patient portal platforms", desc: "Verify results release rules, lab reports views, and demographic update fields meet safety rules.", icon: <Users className="w-5 h-5" /> },
    { title: "Healthcare automation systems", desc: "Streamline clinical alert flows, reducing notification fatigue for doctors during shifts.", icon: <Activity className="w-5 h-5" /> },
    { title: "AI healthcare solutions", desc: "Validate and clean large clinical outcomes datasets to assist engineers testing diagnostic algorithms.", icon: <Brain className="w-5 h-5" /> },
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

  const validateScenarios = () => {
    setSandboxAttempts(prev => prev + 1);
    
    // Correct choices:
    // categoryCode -> vital_signs (vital-signs (LOINC / FHIR Category Code))
    // loincCode -> systolic_bp (8480-6 (Systolic blood pressure LOINC))
    // ucumUnit -> mm_hg (mm[Hg] (Millimeters of Mercury UCUM))
    
    const correct1 = scenarios.categoryCode === "vital_signs";
    const correct2 = scenarios.loincCode === "systolic_bp";
    const correct3 = scenarios.ucumUnit === "mm_hg";
    
    if (correct1 && correct2 && correct3) {
      setSandboxSuccess(true);
      setSandboxError("");
    } else {
      setSandboxSuccess(false);
      let incorrectCount = 0;
      if (!correct1) incorrectCount++;
      if (!correct2) incorrectCount++;
      if (!correct3) incorrectCount++;
      
      setSandboxError(
        `Database mapping mismatch. ${incorrectCount}/3 resource parameters mapped incorrectly. Hint: Observations category is vital-signs; systolic blood pressure LOINC is 8480-6; UCUM units for blood pressure is mm[Hg].`
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
          <span className="text-white">Medical Informatics Specialist</span>
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
                  Medical Informatics Specialist
                </h1>

                <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
                  Bridge clinical documentation with EHR systems architecture, standardize database clinical records, and validate data mapping to FHIR schemas.
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
                      Med Clinic X is a healthcare technology company building modern digital health solutions for healthcare organizations across the United States.
                    </p>
                    <p>
                      We design and develop healthcare SaaS platforms, AI-driven clinical systems, patient portals, telemedicine solutions, automation tools, and integrated digital health products for clinics, hospitals, and healthcare providers.
                    </p>
                    <p>
                      Our mission is to connect clinical workflows with advanced technology to improve patient care, operational efficiency, and healthcare data intelligence.
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
                      We are seeking a <strong className="text-white font-semibold">Medical Informatics Specialist</strong> to support the design, implementation, and optimization of healthcare information systems across digital health platforms.
                    </p>
                    <p>
                      In this role, you will bridge clinical workflows and healthcare technology systems, ensuring that data is accurately captured, structured, and used effectively across EHR/EMR systems, SaaS platforms, and clinical applications.
                    </p>
                    <p>
                      You will work closely with engineering teams, product managers, clinicians, and healthcare stakeholders to improve healthcare data usability and system performance.
                    </p>
                  </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Key Responsibilities
                  </h2>

                  <div className="space-y-6">
                    {/* Clinical Informatics */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Layers className="w-5 h-5 text-brand-cyan" />
                        <span>Clinical Informatics & Data Systems</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Analyze clinical workflows and translate them into structured informatics requirements.</li>
                        <li>Support implementation and optimization of EHR/EMR systems.</li>
                        <li>Improve clinical data accuracy, consistency, and usability.</li>
                        <li>Assist in designing healthcare data models and documentation standards.</li>
                      </ul>
                    </div>

                    {/* Data integration */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Database className="w-5 h-5 text-brand-indigo" />
                        <span>Healthcare Data Integration</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Support integration of healthcare systems using APIs and data standards.</li>
                        <li>Work with structured clinical datasets and healthcare data pipelines.</li>
                        <li>Ensure interoperability between healthcare SaaS platforms and clinical systems.</li>
                        <li>Validate data quality across multiple healthcare sources.</li>
                      </ul>
                    </div>

                    {/* Tech collaboration */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Code className="w-5 h-5 text-brand-emerald" />
                        <span>Healthcare Technology Collaboration</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Collaborate with engineering and product teams on healthcare system design.</li>
                        <li>Translate clinical requirements into technical specifications.</li>
                        <li>Support testing and validation of healthcare software systems.</li>
                        <li>Contribute to improving healthcare SaaS and digital health platforms.</li>
                      </ul>
                    </div>

                    {/* Optimization */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-rose-400" />
                        <span>Clinical Workflow Optimization</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Analyze inefficiencies in healthcare workflows and recommend improvements.</li>
                        <li>Improve adoption of digital tools in clinical environments.</li>
                        <li>Support automation and optimization of healthcare processes.</li>
                        <li>Enhance usability of clinical applications and patient systems.</li>
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
                      <span>Bachelor’s in Health Informatics, Nursing, IS, CS, or related field.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience in clinical informatics or clinical systems analyst roles.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Strong understanding of clinical workflows, documentation, and EMR data structures.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Excellent verbal/written skills to coordinate clinical and engineering pipelines.</span>
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
                      <span>Familiarity with HIPAA compliance and clinical data privacy schemas.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience with EMR database systems (Epic, Cerner) and data mapping.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Knowledge of HL7, FHIR, or clinical REST APIs.</span>
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
                      <span>Connect clinic systems with modern, advanced SaaS platforms.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Directly influence clinical database usability and EMR data structures.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Advance your expertise in healthcare interoperability and digital health.</span>
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
                    {formStep === 2 && "Clinical Informatics Focus"}
                    {formStep === 3 && "Schema Mapping Sandbox"}
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
                        Thank you for applying, <strong className="text-white">{formData.name}</strong>. Your profile has passed our EMR database schema mapping test. The informatics recruitment team will contact you.
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border max-w-sm mx-auto text-left space-y-2 font-mono text-xs">
                      <p className="text-brand-cyan font-bold uppercase text-[10px] tracking-wider mb-2">Automated Match Summary</p>
                      <p className="text-gray-400">Position: <span className="text-white">Medical Informatics Specialist</span></p>
                      <p className="text-gray-400">Schema Mapping: <span className="text-brand-emerald">3/3 Mappings Validated</span></p>
                      <p className="text-gray-400">Clinical systems fit: <span className="text-brand-cyan">Highly Compatible</span></p>
                      <p className="text-gray-400">Status: <span className="text-brand-emerald animate-pulse">Under Review by VP of Clinical Informatics</span></p>
                    </div>

                    <button
                      onClick={() => {
                        setFormStep(1);
                        setSubmitSuccess(false);
                        setSandboxSuccess(false);
                        setSandboxAttempts(0);
                        setScenarios({ categoryCode: "", loincCode: "", ucumUnit: "" });
                        setFormData({
                          name: "",
                          email: "",
                          portfolioUrl: "",
                          informaticsFocus: "ehr",
                          healthcareYears: "3-5",
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
                              placeholder="Fiona Brooks"
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
                              placeholder="fiona@example.com"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or Portfolio URL</label>
                            <input
                              type="url"
                              value={formData.portfolioUrl}
                              onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                              placeholder="https://linkedin.com/in/fiona-brooks"
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

                    {/* STEP 2: Clinical Informatics Focus */}
                    {formStep === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Informatics & Systems Focus</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Informatics Area</label>
                            <select
                              value={formData.informaticsFocus}
                              onChange={(e) => setFormData(prev => ({ ...prev, informaticsFocus: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="ehr">EHR/EMR Customization & Mapping (Epic, Cerner)</option>
                              <option value="interop">Interoperability & Data Standards (HL7, FHIR)</option>
                              <option value="clinical">Clinical Documentation & Practice Workflow Design</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of experience in clinical informatics systems</label>
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
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable mapping legacy EMR schemas to standard FHIR JSON resources?</label>
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
                            <span>Proceed to Schema Sandbox</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Schema Mapping Sandbox */}
                    {formStep === 3 && (
                      <div className="space-y-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-display font-extrabold text-lg text-white">Clinical EMR Schema Mapping Sandbox</h3>
                            <p className="text-xs text-gray-400 mt-1">
                              Map incoming clinical vital sign metrics to the correct FHIR Observation resource schema.
                            </p>
                          </div>
                          <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                            Mapping Challenge
                          </span>
                        </div>

                        {/* MAPPING INTERFACE */}
                        <div className="space-y-4 font-sans text-xs">
                          
                          {/* Parameter 1 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0" />
                              <span>Parameter 1: Observation Category Code</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;Classify the category code for patient blood pressure measurements.&quot;
                            </p>
                            <div>
                              <select
                                value={scenarios.categoryCode}
                                onChange={(e) => setScenarios(prev => ({ ...prev, categoryCode: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Choose Category Code --</option>
                                <option value="laboratory">laboratory (LOINC / FHIR Lab Code)</option>
                                <option value="vital_signs">vital-signs (LOINC / FHIR Category Code) (Correct!)</option>
                                <option value="social_history">social-history (Demographic data classes)</option>
                              </select>
                            </div>
                          </div>

                          {/* Parameter 2 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-indigo rounded-full shrink-0" />
                              <span>Parameter 2: Systolic Blood Pressure LOINC Code</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;Identify the correct standardized LOINC terminology code for Systolic Blood Pressure.&quot;
                            </p>
                            <div>
                              <select
                                value={scenarios.loincCode}
                                onChange={(e) => setScenarios(prev => ({ ...prev, loincCode: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Choose LOINC Code --</option>
                                <option value="diastolic_bp">8462-4 (Diastolic blood pressure LOINC)</option>
                                <option value="heart_rate">8867-4 (Heart rate LOINC)</option>
                                <option value="systolic_bp">8480-6 (Systolic blood pressure LOINC) (Correct!)</option>
                              </select>
                            </div>
                          </div>

                          {/* Parameter 3 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-emerald rounded-full shrink-0" />
                              <span>Parameter 3: Measurement Standard Unit (UCUM)</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;Select the UCUM measurement unit corresponding to blood pressure metrics.&quot;
                            </p>
                            <div>
                              <select
                                value={scenarios.ucumUnit}
                                onChange={(e) => setScenarios(prev => ({ ...prev, ucumUnit: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Choose UCUM Unit --</option>
                                <option value="celsius">Cel (Celsius)</option>
                                <option value="mm_hg">mm[Hg] (Millimeters of Mercury) (Correct!)</option>
                                <option value="beats_min">/min (beats per minute)</option>
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
                            <span>Informatics schema validated! All database mappings converge successfully.</span>
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
                              onClick={validateScenarios}
                              className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                            >
                              <span>Test Database Mappings ({sandboxAttempts} attempts)</span>
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
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Personal Profile</p>
                            <p className="text-gray-300"><span className="text-gray-500">Name:</span> {formData.name}</p>
                            <p className="text-gray-300"><span className="text-gray-500">Email:</span> {formData.email}</p>
                            {formData.portfolioUrl && (
                              <p className="text-gray-300"><span className="text-gray-500">LinkedIn/Portfolio:</span> {formData.portfolioUrl}</p>
                            )}
                            <p className="text-gray-300"><span className="text-gray-500">Resume:</span> {formData.resumeName}</p>
                          </div>

                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Informatics Profile</p>
                            <p className="text-gray-300">
                              <span className="text-gray-500">Focus Area:</span>{" "}
                              <span className="capitalize">{formData.informaticsFocus}</span>
                            </p>
                            <p className="text-gray-300"><span className="text-gray-500">Healthcare experience:</span> {formData.healthcareYears} years</p>
                            <p className="text-gray-300"><span className="text-gray-500">FHIR database mapping:</span> {formData.fhirFamiliar}</p>
                          </div>

                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-1.5">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Schema Sandbox Validation</p>
                            <p className="text-brand-emerald flex items-center space-x-1.5">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Clinical vital metrics database mappings to FHIR schemas verified</span>
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
                                <span>Triaging profile...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                <span>Submit Specialist Application</span>
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
