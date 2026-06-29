"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FileText, Shield, Activity, Upload, CheckCircle, TrendingUp, Globe, Database, Layers, Send, Code, AlertCircle, Server, Cpu, Users } from "lucide-react";

interface TechSkill { name: string; level: string; color: string; }
interface TechArea { title: string; desc: string; icon: React.ReactNode; }

export default function JobClient() {
  const [activeTab, setActiveTab] = useState<'description'|'apply'>('description');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ name:'',email:'',portfolioUrl:'',primaryLang:'itil',expYears:'3-5',cloudExp:'yes',resumeFile:null as File|null,resumeName:'' });
          const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name:'IT Service Management (ITSM)', level:'Required', color:'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20' },
    { name:'SLA & KPI Tracking', level:'Required', color:'text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20' },
    { name:'Incident Triage & Management', level:'Required', color:'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20' },
    { name:'Agile / Scrum Methodologies', level:'Required', color:'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name:'HIPAA & Security Compliance', level:'Required', color:'text-amber-400 bg-amber-400/10 border-amber-400/20' },
    { name:'Root Cause Analysis (RCA)', level:'Preferred', color:'text-rose-400 bg-rose-400/10 border-rose-400/20' },
  ];

  const techAreas: TechArea[] = [
    { title:'SaaS Delivery Management', desc:'Direct the onboarding and configuration cycles for enterprise clinics using our SaaS platforms.', icon:<Layers className="w-5 h-5" /> },
    { title:'Critical Incident SLAs', desc:'Establish incident response workflows keeping server availability and security compliance above 99.99%.', icon:<Shield className="w-5 h-5" /> },
    { title:'Cross-Functional Sprints', desc:'Coordinate resource allocation across backend engineers, QA, and client onboarding teams.', icon:<Users className="w-5 h-5" /> },
    { title:'EHR Integration Projects', desc:'Monitor data sync latency thresholds across active HL7/FHIR database connections.', icon:<Database className="w-5 h-5" /> },
    { title:'RCA & Client Remediations', desc:'Author system downtime RCAs and coordinate SLA-related updates with client administrators.', icon:<Activity className="w-5 h-5" /> },
    { title:'KPI Analytics Reporting', desc:'Deliver dashboard reports mapping system response time and support desk ticket resolution rates.', icon:<TrendingUp className="w-5 h-5" /> },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) { const f=e.target.files[0]; setFormData(p=>({...p,resumeFile:f,resumeName:f.name})); } };
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); if (e.dataTransfer.files?.[0]) { const f=e.dataTransfer.files[0]; setFormData(p=>({...p,resumeFile:f,resumeName:f.name})); } };

  
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
          position: "Service Delivery Manager",
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
  const resetForm = () => { setFormStep(1);setSubmitSuccess(false);setFormData({name:'',email:'',portfolioUrl:'',primaryLang:'itil',expYears:'3-5',cloudExp:'yes',resumeFile:null,resumeName:''}); };

  return (<div className="relative overflow-hidden min-h-screen">
    <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
    <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-8 flex items-center space-x-2 text-xs"><Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link><span className="text-gray-600">/</span><Link href="/careers" className="text-gray-500 hover:text-brand-cyan transition-colors">Careers</Link><span className="text-gray-600">/</span><span className="text-white">Service Delivery Manager</span></div>
      <header className="mb-12 relative"><div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" /><div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12"><div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5"><div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" /><span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">IT Operations & Delivery</span><Sparkles className="w-3 h-3 text-brand-cyan" /></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">Service Delivery Manager Careers at Med Clinic X</h1>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">Oversee the successful delivery, performance, and continuous improvement of healthcare technology services and client operations.</p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white"><Code className="w-3.5 h-3.5 text-brand-cyan" /><span>Management</span></span>
            <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white"><Globe className="w-3.5 h-3.5 text-brand-indigo" /><span>Remote (US Only)</span></span>
            
          </div>
        </div>
        <div className="md:col-span-4 flex justify-start md:justify-end"><button onClick={()=>{setActiveTab('apply');const el=document.getElementById('job-content');if(el)el.scrollIntoView({behavior:'smooth'});}} className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-indigo/10 text-sm cursor-pointer"><span>Apply for this Role</span><ArrowRight className="w-4 h-4" /></button></div>
      </div></div></header>
      <div className="border-b border-brand-border mb-8 flex space-x-8">
        <button onClick={()=>setActiveTab('description')} className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab==='description'?'border-brand-cyan text-brand-cyan':'border-transparent text-gray-400 hover:text-white'}`}>Job Description</button>
        <button onClick={()=>setActiveTab('apply')} className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab==='apply'?'border-brand-cyan text-brand-cyan':'border-transparent text-gray-400 hover:text-white'}`}>Apply Portal</button>
      </div>
      <div id="job-content" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><AnimatePresence mode="wait">
        {activeTab==='description' ? (
          <motion.div key="description" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:0.3}} className="lg:col-span-8 space-y-10">
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">About Med Clinic X</h2><p className="text-sm text-gray-300 leading-relaxed">Med Clinic X is a healthcare technology company building secure and scalable digital solutions that help healthcare organizations across the United States improve operations and deliver better patient experiences.</p><p className="text-sm text-gray-300 leading-relaxed">We develop healthcare SaaS platforms, AI-driven healthcare systems, patient portals, telemedicine solutions, automation workflows, and digital health products for clinics, hospitals, and healthcare providers.</p><p className="text-sm text-gray-300 leading-relaxed">Our mission is to deliver reliable healthcare technology services that create measurable value for healthcare organizations.</p></section>
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2><p className="text-sm text-gray-300 leading-relaxed">We are seeking a <strong>Service Delivery Manager</strong> to oversee the successful delivery, performance, and continuous improvement of healthcare technology services.</p><p className="text-sm text-gray-300 leading-relaxed">In this role, you will manage client delivery operations, coordinate cross-functional teams, and ensure healthcare SaaS solutions are implemented and supported effectively. You will act as a key connection between clients, engineering teams, support teams, and business stakeholders to ensure high-quality service delivery.</p></section>
            <section className="space-y-6"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Responsibilities</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-2"><Layers className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Service Delivery Management</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Manage delivery of healthcare SaaS products and technology services.</li><li>Ensure projects and client services are delivered on time.</li><li>Monitor service availability, performance, and reliability.</li><li>Develop processes to improve operational efficiency.</li></ul></div>
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2"><Users className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Client Relationship Management</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Build strong relationships with healthcare organizations.</li><li>Act as the primary point of contact for service delivery.</li><li>Understand client requirements and ensure successful outcomes.</li><li>Manage customer escalations and coordinate issue resolution.</li></ul></div>
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2"><Shield className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Healthcare Technology Operations</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Oversee implementation onboarding and support teams.</li><li>Ensure compliance with HIPAA data security rules.</li><li>Coordinate with engineering and technical leads on releases.</li><li>Ensure healthcare platforms meet SLA agreements.</li></ul></div>
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2"><FileText className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Process Improvement & Reporting</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Track service metrics and performance indicators (SLA, KPI).</li><li>Create reports for internal and client stakeholders.</li><li>Identify workflow improvements and automation opportunities.</li><li>Implement ITSM/ITIL best practices for service management.</li></ul></div>
            </div></section>
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Qualifications</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="space-y-3"><h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-cyan">Required</h3><ul className="text-xs text-gray-400 space-y-2 list-disc list-inside"><li>Bachelor’s in IT, Business Administration, Healthcare Management, or related field.</li><li>Experience in service delivery, IT operations, or SaaS management.</li><li>Strong project and stakeholder management skills.</li><li>Excellent communication and leadership abilities.</li><li>Experience managing client-facing technology services.</li></ul></div><div className="space-y-3"><h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-indigo">Preferred</h3><ul className="text-xs text-gray-400 space-y-2 list-disc list-inside"><li>Experience in US healthcare or healthcare SaaS environments.</li><li>Familiarity with HIPAA compliance and healthcare SLA rules.</li><li>Experience managing enterprise software implementations.</li><li>Knowledge of ITIL service management practices.</li><li>Background in healthcare IT consulting or client success.</li></ul></div></div></section>
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2><p className="text-sm text-gray-300 leading-relaxed">At Med Clinic X, you will lead the delivery of technology solutions that support modern healthcare organizations. You will:</p><ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">{['Manage healthcare technology delivery for US organizations','Lead cross-functional teams and client operations','Improve service quality and customer experiences','Work with innovative SaaS and AI healthcare platforms','Help scale healthcare technology services'].map((item,i)=>(<li key={i} className="flex items-start space-x-2"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul></section>
          </motion.div>
        ) : (
          <motion.div key="apply" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:0.3}} className="lg:col-span-8">
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4 font-mono text-[10px]"><div className="flex space-x-4"><span className={formStep===1?'text-brand-cyan font-bold':'text-gray-500'}>01. Profile</span><span className={formStep===2?'text-brand-cyan font-bold':'text-gray-500'}>02. Experience</span><span className={formStep===3?'text-brand-cyan font-bold':'text-gray-500'}>03. Operations Sandbox</span></div><span className="text-gray-500">Step {formStep} of 3</span></div>
              {submitSuccess ? (<motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-white">Application Submitted!</h3>
                      <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                        Thanks for applying, <strong className="text-white">{formData.name}</strong>. Our team will review your application and be in touch soon.
                      </p>
                    </div>

                    <button onClick={resetForm} className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"><span>Reset and restart mock screening</span><ArrowRight className="w-3.5 h-3.5" /></button>
              </motion.div>) : (<>
                {formStep===1 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Let&apos;s start with your basics</h3><div className="space-y-4"><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Full Name <span className="text-red-400">*</span></label><input type="text" required value={formData.name} onChange={(e)=>setFormData(p=>({...p,name:e.target.value}))} placeholder="Jordan Kelly" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address <span className="text-red-400">*</span></label><input type="email" required value={formData.email} onChange={(e)=>setFormData(p=>({...p,email:e.target.value}))} placeholder="jordan.kelly@example.com" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or Portfolio URL</label><input type="url" value={formData.portfolioUrl} onChange={(e)=>setFormData(p=>({...p,portfolioUrl:e.target.value}))} placeholder="https://linkedin.com/in/jordankelly" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Upload Resume / CV <span className="text-red-400">*</span></label><div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed border-brand-border hover:border-brand-cyan/50 rounded-2xl p-6 text-center bg-white/2 cursor-pointer transition-colors relative"><input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" /><Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />{formData.resumeName?<p className="text-sm font-semibold text-brand-cyan">{formData.resumeName}</p>:<><p className="text-xs text-gray-300 font-semibold mb-1">Drag and drop your file here, or click to browse</p><p className="text-[10px] text-gray-500">Supports PDF, DOCX, DOC up to 10MB</p></>}</div></div></div><div className="pt-4 flex justify-end"><button type="button" disabled={!formData.name||!formData.email||!formData.resumeName} onClick={()=>setFormStep(2)} className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs disabled:opacity-30 cursor-pointer"><span>Next Step</span><ArrowRight className="w-3.5 h-3.5" /></button>{submitError && <p className="text-xs text-red-400 text-center mt-2">{submitError}</p>}</div></div>)}
                {formStep===2 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Service Delivery Experience</h3><div className="space-y-4"><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Service Framework</label><select value={formData.primaryLang} onChange={(e)=>setFormData(p=>({...p,primaryLang:e.target.value}))} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"><option value="itil">ITIL (Service Management)</option><option value="agile_scrum">Agile / Scrum Methodologies</option><option value="cobit">COBIT (Governance)</option><option value="other">Other Framework</option></select></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of Operations / Delivery Experience</label><select value={formData.expYears} onChange={(e)=>setFormData(p=>({...p,expYears:e.target.value}))} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"><option value="0-2">0 to 2 Years</option><option value="3-5">3 to 5 Years</option><option value="5-8">5 to 8 Years</option><option value="8+">8+ Years</option></select></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Do you have experience managing HIPAA-compliant SLAs?</label><div className="flex gap-4">{['yes','no'].map(val=>(<button key={val} type="button" onClick={()=>setFormData(p=>({...p,cloudExp:val}))} className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${formData.cloudExp===val?'bg-brand-indigo/15 border-brand-indigo text-white':'border-brand-border text-gray-400 hover:border-gray-500'}`}>{val}</button>))}</div></div></div><div className="pt-4 flex justify-between"><button type="button" onClick={()=>setFormStep(1)} className="inline-flex items-center border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer">Back</button><button type="button" onClick={()=>setFormStep(3)} className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"><span>Review Application</span><ArrowRight className="w-3.5 h-3.5" /></button>{submitError && <p className="text-xs text-red-400 text-center mt-2">{submitError}</p>}</div></div>)}
                
                {formStep===3 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Review & Submit Application</h3><div className="space-y-4 text-xs font-mono"><div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2"><p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Personal Profile</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Name:</span> {formData.name}</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Email:</span> {formData.email}</p>{formData.portfolioUrl&&<p className="text-gray-300"><span className="text-gray-500 font-sans">LinkedIn:</span> {formData.portfolioUrl}</p>}<p className="text-gray-300"><span className="text-gray-500 font-sans">Resume:</span> {formData.resumeName}</p></div><div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2"><p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Operations Profile</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Framework:</span> <span className="uppercase">{formData.primaryLang.replace('_',' ')}</span></p><p className="text-gray-300"><span className="text-gray-500 font-sans">Experience:</span> {formData.expYears} years</p><p className="text-gray-300"><span className="text-gray-500 font-sans">HIPAA SLAs:</span> {formData.cloudExp}</p></div></div><div className="pt-4 flex justify-between"><button type="button" onClick={()=>setFormStep(2)} className="inline-flex items-center border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer">Back</button><button type="button" disabled={isSubmitting} onClick={submitApplication} className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs disabled:opacity-50 cursor-pointer">{isSubmitting?<><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Submitting application...</span></>:<><Send className="w-3.5 h-3.5" /><span>Submit Service Delivery Manager Application</span></>}</button>{submitError && <p className="text-xs text-red-400 text-center mt-2">{submitError}</p>}</div></div>)}
              </>)}
            </div></motion.div>)}
        </AnimatePresence>
        <aside className="lg:col-span-4 space-y-6">
          <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6"><h3 className="font-display font-extrabold text-base text-white">Technical Core</h3><div className="flex flex-wrap gap-2">{technicalSkills.map((skill,i)=>(<span key={i} className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border tracking-wide uppercase ${skill.color}`}>{skill.name}</span>))}</div></div>
          <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6"><div className="flex items-center space-x-2 text-white"><Shield className="w-4 h-4 text-brand-cyan" /><h3 className="font-display font-extrabold text-base">Systems You Will Work With</h3></div><div className="space-y-4">{techAreas.map((area,i)=>(<div key={i} className="flex space-x-3.5"><div className="w-8 h-8 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">{area.icon}</div><div><h4 className="text-xs font-semibold text-white">{area.title}</h4><p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">{area.desc}</p></div></div>))}</div></div>
        </aside>
      </div>
    </div>
  </div>);
}
