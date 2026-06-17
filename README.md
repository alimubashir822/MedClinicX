# MedClinicX — AI-Powered Healthcare Digital Operating System

MedClinicX is a next-generation SaaS operating system for medical clinics, dental practices, and hospital networks. It is designed to unify the entire patient journey—handling visitor qualification, automated booking, voice/chat reception, HIPAA-aligned patient portals, and recall follow-ups in a centralized dashboard.

---

## 🚀 Core Solutions & Modules

### 1. AI Medical Receptionist System (CareDesk)
An AI employee that works 24/7 for healthcare businesses to eliminate front-desk overload, recover missed calls, and boost booking conversions.
* **Omnichannel Assistant**: Same conversational brain deployed across Web Widget, SMS, WhatsApp, Email, and Phone.
* **AI Voice Receptionist**: Uses speech synthesis and interactive call routing to answer telephone scheduling, verify coverage, and route emergencies.
* **Revenue Opportunity Finder**: Flags unconverted queries (e.g. implants or whitening checks), highlights estimated lost revenue, and alerts office managers for follow-up.
* **Human Handoff**: Automatically escalates complex or urgent inquiries to clinic staff with a summary transcript.

### 2. Smart Dental Patient Portal (SmileOS)
A comprehensive digital dental experience for patient retention and clinic workflows.
* **Visual Treatment Plans**: Progress tracking from scanning to implant placement and crowns.
* **AI Dental Companion**: Explains clinical procedures and recovery checklists in plain language.
* **Records Vault**: Secure storage for X-rays, 3D CBCT scans, and clinical galleries.
* **Billing & Installments**: Stripe-integrated phase-based deposit collection and payment plans.

### 3. AI Patient Portal Platform (PatientIQ)
An enterprise-grade patient portal for multi-specialty practices and hospital groups.
* **Visual Health Timeline**: Unified chronology of conditions, meds, and lab results.
* **AI Document Reader**: Instant summaries and explanations of uploaded medical reports (PDFs).
* **Family Health Hub**: Coordinated calendar blocks, reminders, and shared insurance limits.

---

## 🛠️ Technology Stack

* **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, lucide-react.
* **Backend & API**: Next.js Server Actions, Route Handlers, Zod schema validation.
* **Database & ORM**: PostgreSQL (for production), SQLite (for local dev), Prisma ORM.
* **AI Engine**: OpenAI GPT-4o LLM, LangChain framework.
* **Communication & Voice**: Twilio (SMS & Phone Call SIP Routing), ElevenLabs (Speech Synthesis), SendGrid (Email).
* **Billing**: Stripe payment gateway integration.

---

## 📂 Relational Database Schema (Prisma)

The database schema is fully typed, migration-safe, and isolated per clinic:

* `User`: Roster credentials, role scope (ADMIN, DOCTOR, PATIENT, STAFF).
* `Clinic`: Configuration settings, payment plan details, domain namespaces.
* `Patient`: Health records, uploaded files, links to medical histories.
* `Doctor`: Clinical provider profiles, specialty groupings, and rosters.
* `Appointment`: Roster slot allocations, visit summaries, and triage survey notes.
* `Message`: Encrypted patient-to-provider or patient-to-AI dialogue logs.
* `KnowledgeBase`: Clinic policy PDFs, URLs index, and FAQ sheets for AI training.
* `Automation`: Cron schedules for notifications, recall triggers, and post-op checklists.
* `Analytics`: Call volumes, AI resolution rate %, and recovered revenue trackers.

---

## 💻 Getting Started

### Prerequisites
* Node.js (v18.x or later)
* npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alimubashir822/MedClinicX.git
   cd MedClinicX
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Initialize Database Schema**:
   Generate the Prisma client and run migrations:
   ```bash
   npx prisma db push
   ```

5. **Seed the Database**:
   Populate test clinic, doctor, and patient profiles:
   ```bash
   node prisma/seed.js
   ```

6. **Run local dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to access the application locally.

---

## 🧪 Verification & Build Checks

Before pushing code or deploying changes, ensure all verification checks pass successfully:

* **Type Safety Check**:
  ```bash
  npx tsc --noEmit
  ```
* **Linting Check**:
  ```bash
  npm run lint
  ```
* **Production Build Compilation**:
  ```bash
  npm run build
  ```
