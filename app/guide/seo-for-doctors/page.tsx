import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Calendar, 
  User, 
  ShieldCheck, 
  Search, 
  MapPin, 
  MousePointerClick, 
  Layers, 
  TrendingUp, 
  Sparkles,
  Building,
  Target,
  FileText,
  Star,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO for Doctors | Healthcare SEO Services to Grow Your Practice",
  description:
    "Grow your medical practice with SEO services for doctors, local SEO strategies, healthcare content optimization, and patient-focused digital growth.",
  alternates: {
    canonical: "https://medclinicx.com/guide/seo-for-doctors",
  },
  openGraph: {
    title: "SEO for Doctors | Healthcare SEO Services to Grow Your Practice",
    description:
      "Grow your medical practice with SEO services for doctors, local SEO strategies, healthcare content optimization, and patient-focused digital growth.",
    url: "https://medclinicx.com/guide/seo-for-doctors",
    type: "article",
    publishedTime: "2026-06-30T00:00:00.000Z",
    authors: ["Med Clinic X Editorial Team"],
  },
};

export default function SeoForDoctorsGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://medclinicx.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://medclinicx.com/guide"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO for Doctors",
        "item": "https://medclinicx.com/guide/seo-for-doctors"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "How Can SEO for Doctors Help Medical Practices Get More Patients Online?",
    "description": "Grow your medical practice with SEO services for doctors, local SEO strategies, healthcare content optimization, and patient-focused digital growth.",
    "inLanguage": "en",
    "author": {
      "@type": "Organization",
      "name": "Med Clinic X",
      "url": "https://medclinicx.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Med Clinic X",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medclinicx.com/logo.png"
      }
    },
    "datePublished": "2026-06-30T00:00:00.000Z",
    "mainEntityOfPage": "https://medclinicx.com/guide/seo-for-doctors"
  };

  const tocItems = [
    { id: "introduction", label: "Quick Summary" },
    { id: "what-is-seo", label: "What is Doctor SEO?" },
    { id: "why-needed", label: "Why Doctors Need SEO" },
    { id: "strategy", label: "How Strategy Works" },
    { id: "included", label: "What is Included" },
    { id: "google-ads", label: "SEO & Google Ads" },
    { id: "best-agency", label: "Choosing the Best Agency" },
    { id: "use-cases", label: "Industry Examples" },
    { id: "benefits", label: "Key Benefits" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-gray-100 py-12 md:py-20 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/guide" className="hover:text-brand-cyan transition-colors">Guides</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300">SEO for Doctors</span>
        </nav>

        {/* Article Header */}
        <header className="max-w-4xl mb-12 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wide">Featured Guide</span>
          </div>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            How Can SEO for Doctors Help Medical Practices Get More Patients Online?
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-gray-400 border-t border-brand-border/40">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-cyan" />
              <span>By Med Clinic X Editorial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-brand-indigo" />
              <span>Updated June 30, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>8 Min Read</span>
            </div>
          </div>
        </header>

        {/* 2-Column Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content Column */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* Short Direct Answer */}
            <section id="introduction" className="scroll-mt-24">
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-brand-cyan/20 bg-brand-cyan/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-xl pointer-events-none" />
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-3">Quick Answer</h2>
                <p className="text-base md:text-lg text-white leading-relaxed font-medium">
                  SEO for doctors helps healthcare providers improve their visibility on search engines, attract more qualified patients, and build long-term online growth. A strong doctor SEO strategy combines local SEO, healthcare content optimization, technical SEO, and patient-focused website improvements to help medical practices appear when people search for healthcare services.
                </p>
              </div>
            </section>

            {/* Section: What Is SEO for Doctors */}
            <section id="what-is-seo" className="space-y-6 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-cyan pl-4">
                What Is SEO for Doctors?
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                SEO for doctors is a healthcare-focused digital marketing strategy designed to improve a physician’s online presence and help their practice rank higher in search results. Unlike general SEO, doctor SEO focuses on medical search behavior, patient intent, healthcare regulations, and location-based searches.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Patients today often search online before choosing a doctor, specialist, clinic, or healthcare provider. A well-optimized healthcare website helps practices connect with patients at the exact moment they are looking for medical services.
              </p>
            </section>

            {/* Section: Why Do Doctors Need SEO Services */}
            <section id="why-needed" className="space-y-6 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-indigo pl-4">
                Why Do Doctors Need SEO Services?
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                Many healthcare providers rely only on referrals or paid advertising. While these methods can generate results, SEO creates sustainable visibility by helping doctors appear in organic search results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Increase Patient Discovery", desc: "Show up in search results when potential patients look for treatments." },
                  { title: "Improve Google Rankings", desc: "Build authority so search engines position your website on page one." },
                  { title: "Generate Qualified Inquiries", desc: "Attract visitors looking specifically for your medical specialties." },
                  { title: "Build Trust & Credibility", desc: "Highlight patient reviews, clinic certifications, and clinical expertise." },
                  { title: "Improve Local Visibility", desc: "Rank at the top of local maps packages and proximity searches." },
                  { title: "Reduce Dependency on Ads", desc: "Sustain steady organic lead volume and lower acquisition costs." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel p-5 rounded-2xl border border-brand-border bg-[#040D18]/20 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: How Does SEO Strategy for Doctors Work? */}
            <section id="strategy" className="space-y-8 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-cyan pl-4">
                How Does SEO Strategy for Doctors Work?
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                A professional SEO strategy for doctors usually includes multiple core areas that work together to optimize your practice's search presence.
              </p>

              {/* Sub-section 1 */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center text-xs font-bold font-mono">1</span>
                  <span>Healthcare Website SEO</span>
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  A medical website should be optimized for both search engines and patients. Important technical and on-page improvements include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-gray-300">
                  <div className="bg-brand-bg/40 border border-brand-border/60 p-3 rounded-lg flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>Fast Performance</span>
                  </div>
                  <div className="bg-brand-bg/40 border border-brand-border/60 p-3 rounded-lg flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>Mobile-friendly Design</span>
                  </div>
                  <div className="bg-brand-bg/40 border border-brand-border/60 p-3 rounded-lg flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>Clear Service Pages</span>
                  </div>
                  <div className="bg-brand-bg/40 border border-brand-border/60 p-3 rounded-lg flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>Specialty Subpages</span>
                  </div>
                  <div className="bg-brand-bg/40 border border-brand-border/60 p-3 rounded-lg flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>Easy Appointment Forms</span>
                  </div>
                  <div className="bg-brand-bg/40 border border-brand-border/60 p-3 rounded-lg flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    <span>Trust-building Copy</span>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-brand-border/50 bg-[#040D18]/30 space-y-4">
                  <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">Example: Mapping Patient Intent</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                      <p className="text-xs text-red-400 font-bold uppercase tracking-wider mb-1">Suboptimal Structure</p>
                      <p className="text-sm font-bold text-white mb-2">&quot;Cardiology Services&quot;</p>
                      <p className="text-xs text-gray-400">Too generic, doesn't address the user's specific problem or location.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                      <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Optimized Structure</p>
                      <p className="text-sm font-bold text-white mb-2">&quot;Best Cardiologist in [City] - Heart Care & Consultation&quot;</p>
                      <p className="text-xs text-gray-400">Directly maps to the search queries patients type into Google.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-section 2 */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-white flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-brand-indigo/20 text-brand-indigo flex items-center justify-center text-xs font-bold font-mono">2</span>
                  <span>Local SEO for Doctors</span>
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  Local SEO helps doctors appear when patients search for nearby healthcare providers.
                </p>
                <div className="border-l-2 border-brand-cyan pl-4 space-y-2 text-sm text-gray-400 italic">
                  <p>&quot;Primary care doctor near me&quot;</p>
                  <p>&quot;Best dentist in Chicago&quot;</p>
                  <p>&quot;Family physician near me&quot;</p>
                </div>
                <p className="text-base text-gray-400 leading-relaxed">
                  Our local SEO optimizations include: Google Business Profile configuration, location-specific landings, keyword targeting, review collection strategies, and consistent citation sync across health directories.
                </p>
              </div>
            </section>

            {/* Section: What Is Included in SEO Services for Doctors? */}
            <section id="included" className="space-y-8 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-indigo pl-4">
                What Is Included in SEO Services for Doctors?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white">Keyword Research</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Finding high-intent terms patients use. Examples: <em>&quot;seo for doctor&quot;</em>, <em>&quot;best doctor near me&quot;</em>, <em>&quot;specialist consultation&quot;</em>, and specific treatment queries.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white">Content Marketing</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Creating educational resources answering user questions. Examples: symptoms guides, treatment deep-dives, clinical FAQs, and medical condition resources.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white">Technical SEO</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Improving page load speed, website architecture, indexing setups, secure HTTPS certificates, mobile UX, and structured schema markups.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-brand-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <MousePointerClick className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white">Conversion Optimization</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Converting visits to new patients via prominent appointment booking forms, direct click-to-call integrations, and clear calls-to-action.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: How Google Ads and SEO Work Together */}
            <section id="google-ads" className="space-y-6 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-cyan pl-4">
                How Google Ads and SEO Work Together for Doctors
              </h2>
              <h3 className="font-display font-bold text-lg text-white">Google Ads for Doctors SEO Outline</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Google Ads can generate immediate visibility, while SEO builds long-term organic growth. A combined search engine strategy helps medical practices capture immediate demand, test healthcare keywords, optimize landing pages, and boost overall booking conversions.
              </p>
              
              <div className="glass-panel p-6 rounded-2xl border border-brand-border bg-[#040D18]/30 space-y-4">
                <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">Example: Dual Marketing Funnel</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5">
                    <p className="text-xs text-brand-cyan font-bold uppercase tracking-wider mb-1">Paid Ads Channel</p>
                    <p className="text-sm font-bold text-white mb-2">&quot;Emergency dentist near me&quot;</p>
                    <p className="text-xs text-gray-400">Drives immediate, same-day dental inquiries but requires ad spend for every click.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-brand-indigo/20 bg-brand-indigo/5">
                    <p className="text-xs text-brand-indigo font-bold uppercase tracking-wider mb-1">Organic SEO Channel</p>
                    <p className="text-sm font-bold text-white mb-2">&quot;How to Find an Emergency Dentist in [City]&quot;</p>
                    <p className="text-xs text-gray-400">Captures research queries, builds long-term authority, and drives recurring patients for free.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: What Makes the Best SEO Company for Doctors Different? */}
            <section id="best-agency" className="space-y-6 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-indigo pl-4">
                What Makes the Best SEO Company for Doctors Different?
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                The best SEO company for doctors understands that healthcare marketing requires more than keyword rankings. A healthcare-focused SEO agency should understand patient search behavior, medical terminology, healthcare compliance (HIPAA), local competition, and patient acquisition funnels.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                A strong SEO partner focuses on attracting the right patients, not just increasing website traffic.
              </p>
            </section>

            {/* Section: Examples of SEO Strategy for Different Healthcare Businesses */}
            <section id="use-cases" className="space-y-8 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-cyan pl-4">
                SEO Strategy for Different Healthcare Businesses
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { type: "Healthcare Clinics", target: "SEO helps clinics rank for local services offered, clinical treatments, and patient FAQs." },
                  { type: "Hospitals", target: "SEO supports department visibility, authoritative health educational content, and local patient resources." },
                  { type: "Doctors & Specialists", target: "SEO improves personal brand visibility, credentials indexation, and specialist consultation queries." },
                  { type: "Dental Practices", target: "Local maps SEO helps dentists attract new patient searches, cosmetic treatment traffic, and emergency dental inquiries." },
                  { type: "Medical Startups", target: "SEO builds early brand awareness, healthcare technology visibility, and organic software lead pipelines." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel p-5 rounded-2xl border border-brand-border bg-[#040D18]/15 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base text-white mb-2">{item.type}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.target}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Key Benefits */}
            <section id="benefits" className="space-y-6 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-indigo pl-4">
                Key Benefits of SEO for Doctors
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "More qualified patient leads",
                  "Higher Google and search visibility",
                  "Stronger online reputation & ratings",
                  "Better patient trust & professional credibility",
                  "Increased direct appointment requests",
                  "Long-term marketing growth and ROI",
                  "Better competitive positioning in local markets"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: FAQ */}
            <section id="faq" className="space-y-6 scroll-mt-24">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white border-l-4 border-brand-cyan pl-4">
                SEO for Doctors FAQ
              </h2>
              
              <div className="space-y-4">
                {[
                  { q: "How long does SEO take for doctors?", a: "SEO results usually require consistent optimization over time. Healthcare practices often see improvements as search engines recognize website authority, content quality, and technical improvements." },
                  { q: "How much do SEO services for doctors cost?", a: "SEO pricing depends on competition, location, website condition, and the services included. A customized healthcare SEO strategy is usually created based on practice goals." },
                  { q: "Can SEO help doctors get more patients?", a: "Yes. SEO helps doctors reach patients actively searching for healthcare services, treatments, and medical info." },
                  { q: "What is local SEO for doctors?", a: "Local SEO helps doctors appear in location-based searches and improves visibility in Google Maps and local search results." },
                  { q: "Should doctors use Google Ads or SEO?", a: "Many healthcare practices benefit from using both. Google Ads provides immediate traffic, while SEO creates sustainable organic growth." },
                  { q: "Why do doctors need a healthcare SEO agency?", a: "Healthcare SEO requires knowledge of medical search behavior, patient intent, and healthcare-specific marketing strategies." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-brand-border/60 bg-[#040D18]/25 space-y-2">
                    <h4 className="font-display font-bold text-sm text-white">{item.q}</h4>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action Footer */}
            <section className="pt-12 border-t border-brand-border/40">
              <div className="glass-panel p-8 rounded-3xl border border-brand-border relative overflow-hidden bg-[#040D18]/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
                <div className="max-w-2xl space-y-4">
                  <h3 className="font-display font-bold text-2xl text-white">Grow Your Healthcare Practice With Med Clinic X</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Med Clinic X helps doctors, clinics, hospitals, and healthcare organizations improve their digital presence through healthcare SEO, modern websites, AI solutions, patient portals, and healthcare technology.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/seo-services-for-doctors#consultation"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-6 py-3 rounded-xl text-xs hover:opacity-95 transition-opacity"
                    >
                      <span>Request Your SEO Growth Strategy</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

          </main>

          {/* Sticky Sidebar Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 hidden lg:block space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-brand-border/80 bg-[#040D18]/45">
              <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-brand-border/40">
                Table of Contents
              </h3>
              <nav className="space-y-3.5">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs font-medium text-gray-400 hover:text-brand-cyan transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-brand-border/60 bg-gradient-to-br from-brand-cyan/5 to-transparent space-y-4">
              <Star className="w-5 h-5 text-brand-cyan" />
              <h4 className="font-display font-bold text-sm text-white">Free Practice Audit</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Find out where your practice ranks locally on Google compared to your top 3 competitors.
              </p>
              <Link 
                href="/seo-services-for-doctors#consultation"
                className="block text-center text-xs font-semibold bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan/20 py-2.5 rounded-xl transition-colors"
              >
                Get Free Audit Report
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
