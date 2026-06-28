"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FileText, Shield, Activity, Upload, CheckCircle, Lock, Globe, Database, Layers, Send, Code, AlertCircle, Server, Search } from "lucide-react";
interface TechSkill { name: string; level: string; color: string; }
interface TechArea { title: string; desc: string; icon: React.ReactNode; }
export default function JobClient() {
  const [activeTab, setActiveTab] = useState<'description'|'apply'>('description');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ name:'',email:'',portfolioUrl:'',auditFramework:'cisa',auditYears:'3-5',hipaaFamiliar:'yes',resumeFile:null as File|null,resumeName:'' });
          const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const technicalSkills: TechSkill[] = [
    { name:'IT Audit Methodologies', level:'Required', color:'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20' },
    { name:'HIPAA / HITRUST / SOC 2', level:'Required', color:'text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20' },
    { name:'Cloud Platforms (AWS/Azure)', level:'Required', color:'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20' },
    { name:'IAM & Access Control Review', level:'Required', color:'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name:'Risk Assessment & Reporting', level:'Required', color:'text-amber-400 bg-amber-400/10 border-amber-400/20' },
    { name:'CISA / CISSP Certification', level:'Preferred', color:'text-rose-400 bg-rose-400/10 border-rose-400/20' },
  ];
  const techAreas: TechArea[] = [
    { title:'Healthcare SaaS Platforms', desc:'Audit access controls, API security, and session management across SaaS portals.', icon:<Globe className="w-5 h-5" /> },
    { title:'Cloud Infrastructure Systems', desc:'Review cloud architecture, IAM policies, and encryption configurations for compliance.', icon:<Layers className="w-5 h-5" /> },
    { title:'Patient Data Security Systems', desc:'Evaluate PHI data handling, masking policies, and storage encryption standards.', icon:<Database className="w-5 h-5" /> },
    { title:'EHR/EMR Integration Security', desc:'Assess authentication flows and data transmission security for EHR integrations.', icon:<Shield className="w-5 h-5" /> },
    { title:'AI Healthcare Systems', desc:'Audit logging, model governance, and data input/output validation for AI systems.', icon:<Activity className="w-5 h-5" /> },
    { title:'Healthcare Compliance Frameworks', desc:'Map controls against HIPAA, HITRUST CSF, and SOC 2 compliance requirements.', icon:<Server className="w-5 h-5" /> },
  ];
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) { const f=e.target.files[0]; setFormData(p=>({...p,resumeFile:f,resumeName:f.name})); } };
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); if (e.dataTransfer.files?.[0]) { const f=e.dataTransfer.files[0]; setFormData(p=>({...p,resumeFile:f,resumeName:f.name})); } };
    const submitApplication = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          portfolioUrl: formData.portfolioUrl,
          resumeName: formData.resumeName,
          position: "IT Auditor",
          extraFields: {
            ...formData
          }
        }),
      });
      if (!res.ok) {
        console.error("Failed to submit application");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };
  const resetForm = () => { setFormStep(1);setSubmitSuccess(false);setFormData({name:'',email:'',portfolioUrl:'',auditFramework:'cisa',auditYears:'3-5',hipaaFamiliar:'yes',resumeFile:null,resumeName:''}); };
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/careers" className="text-gray-500 hover:text-brand-cyan transition-colors">Careers</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">IT Auditor</span>
        </div>
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">IT Compliance & Audit</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">IT Auditor Careers at Med Clinic X</h1>
                <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">Evaluate security controls, audit cloud infrastructure, and ensure HIPAA, HITRUST, and SOC 2 compliance across healthcare SaaS platforms and digital health systems.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white"><Code className="w-3.5 h-3.5 text-brand-cyan" /><span>Clinical Informatics</span></span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white"><Globe className="w-3.5 h-3.5 text-brand-indigo" /><span>Remote (US Only)</span></span>
                  
                </div>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button onClick={()=>{setActiveTab('apply');const el=document.getElementById('job-content');if(el)el.scrollIntoView({behavior:'smooth'});}} className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-indigo/10 text-sm cursor-pointer"><span>Apply for this Role</span><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </header>
        <div className="border-b border-brand-border mb-8 flex space-x-8">
          <button onClick={()=>setActiveTab('description')} className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab==='description'?'border-brand-cyan text-brand-cyan':'border-transparent text-gray-400 hover:text-white'}`}>Job Description</button>
          <button onClick={()=>setActiveTab('apply')} className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab==='apply'?'border-brand-cyan text-brand-cyan':'border-transparent text-gray-400 hover:text-white'}`}>Apply Portal</button>
        </div>
        <div id="job-content" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <AnimatePresence mode="wait">
            {activeTab==='description' ? (
              <motion.div key="description" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:0.3}} className="lg:col-span-8 space-y-10">
                <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">About Med Clinic X</h2><p className="text-sm text-gray-300 leading-relaxed">Med Clinic X is a healthcare technology company building secure, compliant, and scalable digital health systems for healthcare organizations across the United States.</p><p className="text-sm text-gray-300 leading-relaxed">We develop healthcare SaaS platforms, AI-driven healthcare systems, patient portals, telemedicine solutions, automation workflows, and cloud-based digital health infrastructure.</p><p className="text-sm text-gray-300 leading-relaxed">Our mission is to ensure every system we build meets the highest standards of security, compliance, and operational integrity.</p></section>
                <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2><p className="text-sm text-gray-300 leading-relaxed">We are seeking an <strong>IT Auditor</strong> to evaluate, assess, and ensure compliance of healthcare SaaS platforms, cloud infrastructure, and digital health systems.</p><p className="text-sm text-gray-300 leading-relaxed">You will analyze IT controls, security frameworks, and operational processes to ensure alignment with healthcare regulations and industry best practices across the United States.</p></section>
                <section className="space-y-6"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Responsibilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-2"><Search className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">IT Risk & Compliance Auditing</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Conduct audits of healthcare IT systems and infrastructure.</li><li>Evaluate security controls, access management, and system policies.</li><li>Identify risks and recommend mitigation strategies.</li><li>Ensure compliance with healthcare IT standards and regulations.</li></ul></div>
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2"><Layers className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Healthcare System Governance</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Review SaaS platforms, cloud systems, and applications.</li><li>Assess EHR/EMR integrations for compliance and security.</li><li>Validate data protection and patient information handling.</li><li>Support governance frameworks for healthcare systems.</li></ul></div>
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2"><Lock className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Security & Controls Assessment</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Analyze cybersecurity controls across systems.</li><li>Review IAM Identity and Access Management policies.</li><li>Evaluate encryption, logging, and monitoring systems.</li><li>Identify vulnerabilities in healthcare IT environments.</li></ul></div>
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2"><FileText className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Reporting & Documentation</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Prepare detailed audit reports and findings.</li><li>Document compliance gaps and remediation plans.</li><li>Work with engineering and security teams on improvements.</li><li>Support internal and external audit processes.</li></ul></div>
                  </div></section>
                <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Qualifications</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="space-y-3"><h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-cyan">Required</h3><ul className="text-xs text-gray-400 space-y-2 list-disc list-inside"><li>Bachelor&apos;s in Information Systems, Cybersecurity, Accounting, or CS.</li><li>Experience in IT auditing, compliance, or risk management.</li><li>Strong understanding of IT systems and infrastructure security.</li><li>Knowledge of security frameworks and auditing principles.</li><li>Strong analytical, documentation, and communication skills.</li></ul></div><div className="space-y-3"><h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-indigo">Preferred</h3><ul className="text-xs text-gray-400 space-y-2 list-disc list-inside"><li>Experience in US healthcare or healthcare SaaS environments.</li><li>Familiarity with HIPAA, HITRUST, or SOC 2 frameworks.</li><li>Experience auditing cloud-based healthcare systems.</li><li>Exposure to cybersecurity or DevSecOps environments.</li><li>Certifications such as CISA, CISSP, or CISM.</li></ul></div></div></section>
                <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2><p className="text-sm text-gray-300 leading-relaxed">At Med Clinic X, you will help ensure the trust, security, and compliance of modern healthcare technology systems. You will:</p><ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">{['Audit real healthcare systems used across the US','Work on cloud, SaaS, and AI healthcare platforms','Strengthen security and compliance frameworks','Collaborate with engineering and security teams','Support healthcare regulatory readiness processes','Grow HIPAA, HITRUST, and SOC 2 compliance expertise'].map((item,i)=>(<li key={i} className="flex items-start space-x-2"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul></section>
              </motion.div>
            ) : (
              <motion.div key="apply" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:0.3}} className="lg:col-span-8">
                <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4 font-mono text-[10px]"><div className="flex space-x-4"><span className={formStep===1?'text-brand-cyan font-bold':'text-gray-500'}>01. Profile</span><span className={formStep===2?'text-brand-cyan font-bold':'text-gray-500'}>02. Experience</span><span className={formStep===3?'text-brand-cyan font-bold':'text-gray-500'}>03. Audit Sandbox</span></div><span className="text-gray-500">Step {formStep} of 3</span></div>
                  {submitSuccess ? (
                    <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto"><CheckCircle className="w-8 h-8" /></div>
                      <div className="space-y-2"><h3 className="font-display font-extrabold text-2xl text-white">Audit Pre-screen Completed!</h3><p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">Your IT audit compliance score is logged. We verified your quarterly RBAC access review methodology, AES-256 KMS encryption controls, and compliance gap remediation documentation approach.</p></div>
                      <button onClick={resetForm} className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"><span>Reset and restart mock screening</span><ArrowRight className="w-3.5 h-3.5" /></button>
                    </motion.div>
                  ) : (
                    <>
                      {formStep===1 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Let&apos;s start with your basics</h3><div className="space-y-4"><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Full Name <span className="text-red-400">*</span></label><input type="text" required value={formData.name} onChange={(e)=>setFormData(p=>({...p,name:e.target.value}))} placeholder="Jordan Wells" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address <span className="text-red-400">*</span></label><input type="email" required value={formData.email} onChange={(e)=>setFormData(p=>({...p,email:e.target.value}))} placeholder="jordan.audit@example.com" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or Portfolio URL</label><input type="url" value={formData.portfolioUrl} onChange={(e)=>setFormData(p=>({...p,portfolioUrl:e.target.value}))} placeholder="https://linkedin.com/in/jordanwells" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Upload Resume / CV <span className="text-red-400">*</span></label><div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed border-brand-border hover:border-brand-cyan/50 rounded-2xl p-6 text-center bg-white/2 cursor-pointer transition-colors relative"><input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" /><Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />{formData.resumeName?<p className="text-sm font-semibold text-brand-cyan">{formData.resumeName}</p>:<><p className="text-xs text-gray-300 font-semibold mb-1">Drag and drop your file here, or click to browse</p><p className="text-[10px] text-gray-500">Supports PDF, DOCX, DOC up to 10MB</p></>}</div></div></div><div className="pt-4 flex justify-end"><button type="button" disabled={!formData.name||!formData.email||!formData.resumeName} onClick={()=>setFormStep(2)} className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs disabled:opacity-30 cursor-pointer"><span>Next Step</span><ArrowRight className="w-3.5 h-3.5" /></button></div></div>)}
                      {formStep===2 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">IT Audit Profile</h3><div className="space-y-4"><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Audit Certification</label><select value={formData.auditFramework} onChange={(e)=>setFormData(p=>({...p,auditFramework:e.target.value}))} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"><option value="cisa">CISA - Certified Information Systems Auditor</option><option value="cissp">CISSP - Information Systems Security Professional</option><option value="cism">CISM - Certified Information Security Manager</option><option value="iso27001">ISO 27001 Lead Auditor</option><option value="none">No certification yet (pursuing)</option></select></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of IT Audit / Compliance Experience</label><select value={formData.auditYears} onChange={(e)=>setFormData(p=>({...p,auditYears:e.target.value}))} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"><option value="0-2">0 to 2 Years</option><option value="3-5">3 to 5 Years</option><option value="5-8">5 to 8 Years</option><option value="8+">8+ Years</option></select></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Have you conducted HIPAA or SOC 2 compliance audits before?</label><div className="flex gap-4">{['yes','no'].map(val=>(<button key={val} type="button" onClick={()=>setFormData(p=>({...p,hipaaFamiliar:val}))} className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${formData.hipaaFamiliar===val?'bg-brand-indigo/15 border-brand-indigo text-white':'border-brand-border text-gray-400 hover:border-gray-500'}`}>{val}</button>))}</div></div></div><div className="pt-4 flex justify-between"><button type="button" onClick={()=>setFormStep(1)} className="inline-flex items-center border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer">Back</button><button type="button" onClick={()=>setFormStep(3)} className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"><span>Review Application</span><ArrowRight className="w-3.5 h-3.5" /></button></div></div>)}
                      
                      {formStep===3 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Review & Submit Application</h3><div className="space-y-4 text-xs font-mono"><div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2"><p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Personal Profile</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Name:</span> {formData.name}</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Email:</span> {formData.email}</p>{formData.portfolioUrl&&<p className="text-gray-300"><span className="text-gray-500 font-sans">Portfolio:</span> {formData.portfolioUrl}</p>}<p className="text-gray-300"><span className="text-gray-500 font-sans">Resume:</span> {formData.resumeName}</p></div><div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2"><p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Audit Profile</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Certification:</span> <span className="uppercase">{formData.auditFramework}</span></p><p className="text-gray-300"><span className="text-gray-500 font-sans">Experience:</span> {formData.auditYears} years</p><p className="text-gray-300"><span className="text-gray-500 font-sans">HIPAA/SOC 2 Experience:</span> {formData.hipaaFamiliar}</p></div></div><div className="pt-4 flex justify-between"><button type="button" onClick={()=>setFormStep(2)} className="inline-flex items-center border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer">Back</button><button type="button" disabled={isSubmitting} onClick={submitApplication} className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs disabled:opacity-50 cursor-pointer">{isSubmitting?<><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Submitting audit report...</span></>:<><Send className="w-3.5 h-3.5" /><span>Submit IT Audit Application</span></>}</button></div></div>)}
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <aside className="lg:col-span-4 space-y-6">
            <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6"><h3 className="font-display font-extrabold text-base text-white">Technical Core</h3><div className="flex flex-wrap gap-2">{technicalSkills.map((skill,i)=>(<span key={i} className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border tracking-wide uppercase ${skill.color}`}>{skill.name}</span>))}</div></div>
            <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6"><div className="flex items-center space-x-2 text-white"><Shield className="w-4 h-4 text-brand-cyan" /><h3 className="font-display font-extrabold text-base">Key Systems Audited</h3></div><div className="space-y-4">{techAreas.map((area,i)=>(<div key={i} className="flex space-x-3.5"><div className="w-8 h-8 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">{area.icon}</div><div><h4 className="text-xs font-semibold text-white">{area.title}</h4><p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">{area.desc}</p></div></div>))}</div></div>
          </aside>
        </div>
      </div>
    </div>
  );
}
