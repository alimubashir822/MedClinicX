export interface JobItem {
  id: string;
  title: string;
  category: "Data & Analytics" | "Clinical Informatics" | "Project Management";
  iconName: "Database" | "Layers" | "Brain" | "Activity" | "Briefcase";
  desc: string;
  href: string;
  badge?: string;
  location: string;
  features: string[];
}

export const jobData: JobItem[] = [
  {
    id: "healthcare-data-analyst",
    title: "Healthcare Data Analyst",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Transform raw healthcare datasets into actionable clinical and operational insights. Support analytics requirements for healthcare SaaS platforms and prepare datasets for AI solutions.",
    href: "/careers/healthcare-data-analyst",
    badge: "Hot",
    location: "Remote (US)",
    features: [
      "Analyze clinical datasets & operational KPIs",
      "Support SaaS & AI-driven analytics workflows",
      "Relational database design & SQL schema management"
    ]
  },
  {
    id: "clinical-data-analyst",
    title: "Clinical Data Analyst",
    category: "Data & Analytics",
    iconName: "Activity",
    desc: "Transform clinical datasets into medical insights, develop performance dashboards, and clean healthcare data. Work with AI engineers to build intelligent reporting structures.",
    href: "/careers/clinical-data-analyst",
    badge: "Just Added",
    location: "Remote (US)",
    features: [
      "Analyze clinical outcomes & workflow trends",
      "Build reports & dashboards using Power BI/Tableau",
      "Prepare datasets for clinical AI model training"
    ]
  },
  {
    id: "clinical-informatics-specialist",
    title: "Clinical Informatics Specialist",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Optimize healthcare data mapping, EHR/EMR workflows, and systems interoperability. Work at the intersection of clinical operations and engineering to build safer, more efficient digital systems.",
    href: "/careers/clinical-informatics-specialist",
    badge: "New Role",
    location: "Remote (US)",
    features: [
      "Map clinical documentation & EHR integrations",
      "Ensure HIPAA compliance & data governance standards",
      "Interoperability utilizing HL7, FHIR, & API endpoints"
    ]
  },
  {
    id: "clinical-application-specialist",
    title: "Clinical Application Specialist",
    category: "Clinical Informatics",
    iconName: "Activity",
    desc: "Support implementation, custom configuration, and clinical adoption of healthcare SaaS products, patient portals, and EHR software systems.",
    href: "/careers/clinical-application-specialist",
    badge: "Just Added",
    location: "Remote (US)",
    features: [
      "Configure SaaS portals to clinical workflows",
      "Train medical professionals on system usage",
      "Troubleshoot API logs & EHR application errors"
    ]
  },
  {
    id: "healthcare-it-consultant",
    title: "Healthcare IT Consultant",
    category: "Clinical Informatics",
    iconName: "Brain",
    desc: "Advise US clinics and hospitals on digital health strategy, SaaS portal configurations, EMR/EHR system adoption, and clinical workflow optimization.",
    href: "/careers/healthcare-it-consultant",
    badge: "Strategic Advisory",
    location: "Remote (US)",
    features: [
      "Design clinical systems roadmaps & architectures",
      "Evaluate existing clinical systems for optimization",
      "Map integration architectures using HL7 & FHIR"
    ]
  },
  {
    id: "healthcare-project-manager",
    title: "Healthcare Project Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Lead cross-functional engineering, data, and design sprints to deliver healthcare SaaS products, patient portals, and EHR integrations for US hospitals.",
    href: "/careers/healthcare-project-manager",
    badge: "Agile Leadership",
    location: "Remote (US)",
    features: [
      "Manage end-to-end SDLC using Scrum/Agile",
      "Coordinate clinical workflows & technical teams",
      "Ensure HIPAA alignment & QA delivery guidelines"
    ]
  },
  {
    id: "healthcare-operations-manager",
    title: "Healthcare Operations Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Optimize daily healthcare SaaS and digital health operations. Map clinical and administrative workflows, monitor operational KPIs, and guide systems onboarding for US clinics and hospitals.",
    href: "/careers/healthcare-operations-manager",
    badge: "Operations Lead",
    location: "Remote (US)",
    features: [
      "Oversee healthcare SaaS operations & administrative workflows",
      "Optimize patient intake, scheduling, & clinic tools",
      "Coordinate onboarding support between clients & technical teams"
    ]
  },
  {
    id: "healthcare-program-manager",
    title: "Healthcare Program Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Lead and coordinate multiple healthcare technology projects and ensure successful delivery of large-scale, HIPAA-compliant digital health programs.",
    href: "/careers/healthcare-program-manager",
    badge: "Strategic Delivery",
    location: "Remote (US)",
    features: [
      "Lead cross-functional healthcare programs and project teams",
      "Coordinate complex EHR integrations and AI product rollouts",
      "Manage strategic program risk, compliance, and governance"
    ]
  },
  {
    id: "it-project-manager",
    title: "IT Project Manager",
    category: "Project Management",
    iconName: "Briefcase", // Fits Project Management Briefcase icon
    desc: "Manage Agile software development sprints, map out critical path dependencies, and deliver secure, HIPAA-compliant digital health systems.",
    href: "/careers/it-project-manager",
    badge: "IT & Software",
    location: "Remote (US)",
    features: [
      "Lead cross-functional engineering sprints & Agile backlog grooming",
      "Manage critical path timelines & resource allocation tracks",
      "Enforce compliance and data security policies on local test databases"
    ]
  },
  {
    id: "healthcare-data-scientist",
    title: "Healthcare Data Scientist",
    category: "Data & Analytics",
    iconName: "Brain",
    desc: "Design and train machine learning models for clinical risk prediction, patient outcomes, and SaaS product intelligence. Utilize clinical NLP and predictive analytics pipelines.",
    href: "/careers/healthcare-data-scientist",
    badge: "AI & ML",
    location: "Remote (US)",
    features: [
      "Build predictive models for clinical risk stratification",
      "Develop medical NLP applications for symptom intake parsing",
      "Collaborate on MLOps & production deployment pipelines"
    ]
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    category: "Data & Analytics",
    iconName: "Database", // Fits infrastructure/platform data roles
    desc: "Design, build, and maintain secure, scalable cloud-native infrastructure for healthcare SaaS products, clinical APIs, and AI platform clusters.",
    href: "/careers/cloud-engineer",
    badge: "Infrastructure",
    location: "Remote (US)",
    features: [
      "Design secure cloud architectures complying with HIPAA",
      "Deploy scalable CI/CD pipelines & Kubernetes clusters",
      "Automate configuration management using Terraform (IaC)"
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    category: "Data & Analytics",
    iconName: "Database", // Fits DevOps data & systems automation roles
    desc: "Design, build, and automate secure, scalable CI/CD deployment pipelines, container orchestration environments, and system reliability monitoring tools.",
    href: "/careers/devops-engineer",
    badge: "Automation",
    location: "Remote (US)",
    features: [
      "Build secure, automated CI/CD microservice release pipelines",
      "Manage Kubernetes node groups & container deployments at scale",
      "Configure Prometheus & Grafana alerting frameworks for reliability"
    ]
  },
  {
    id: "medical-data-analyst",
    title: "Medical Data Analyst",
    category: "Data & Analytics",
    iconName: "Activity",
    desc: "Analyze clinical and operational datasets to generate hospital and SaaS dashboard insights. Clean EHR data, design BI reports, and prepare cohorts for clinical outreach programs.",
    href: "/careers/medical-data-analyst",
    badge: "Reporting & BI",
    location: "Remote (US)",
    features: [
      "Design clinical BI dashboards & SQL reporting queries",
      "Process & validate longitudinal EHR datasets",
      "Configure cohort filters for medical outreach campaigns"
    ]
  },
  {
    id: "ai-automation-specialist",
    title: "AI Automation Specialist",
    category: "Clinical Informatics",
    iconName: "Brain",
    desc: "Design and implement AI-driven workflows and automation systems. Connect clinic APIs, configure n8n/Zapier pipelines, and deploy LLM agents for clinical triaging.",
    href: "/careers/ai-automation-specialist",
    badge: "AI & Workflow",
    location: "Remote (US)",
    features: [
      "Design event-driven webhook & API automation triggers",
      "Deploy LLM workflow nodes & urgency routing switches",
      "Integrate automation platforms with EHR/EMR pipelines"
    ]
  },
  {
    id: "patient-engagement-specialist",
    title: "Patient Engagement Specialist",
    category: "Clinical Informatics",
    iconName: "Activity",
    desc: "Improve digital patient experiences, portal adoption, and care coordination. Design patient outreach campaigns, analyze engagement metrics, and optimize scheduling workflows.",
    href: "/careers/patient-engagement-specialist",
    badge: "Patient Experience",
    location: "Remote (US)",
    features: [
      "Optimize patient portal adoption & onboarding workflows",
      "Design targeted patient outreach & communication campaigns",
      "Coordinate patient-facing features with product engineers"
    ]
  },
  {
    id: "chief-medical-information-officer",
    title: "Chief Medical Information Officer (CMIO)",
    category: "Clinical Informatics",
    iconName: "Briefcase",
    desc: "Oversee clinical informatics strategy, EHR integrations, medical AI governance, and digital transformation at an executive level. Bridge technology with patient care systems.",
    href: "/careers/chief-medical-information-officer",
    badge: "Executive Leadership",
    location: "Remote (US)",
    features: [
      "Define enterprise clinical informatics & digital health strategy",
      "Establish governance guidelines for clinical AI validation",
      "Advise hospital C-suite on EHR interoperability architectures"
    ]
  },
  {
    id: "medical-informatics-specialist",
    title: "Medical Informatics Specialist",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Bridge clinical documentation requirements with EHR engineering specifications. Standardize clinical vital schemas, configure FHIR Observation resource mappings, and validate data quality.",
    href: "/careers/medical-informatics-specialist",
    badge: "Clinical Systems",
    location: "Remote (US)",
    features: [
      "Map clinical documentation to standard FHIR Observation resources",
      "Translate provider workflow requirements into system specifications",
      "Validate clinical data quality across integrated hospital databases"
    ]
  },
  {
    id: "product-designer",
    title: "Product Designer",
    category: "Clinical Informatics",
    iconName: "Layers", // Fits UI/UX systems design layers
    desc: "Design intuitive and accessible user interfaces for healthcare SaaS portals, clinician workflow dashboards, and patient engagement platforms.",
    href: "/careers/product-designer",
    badge: "UI & UX",
    location: "Remote (US)",
    features: [
      "Design intuitive patient portals & clinic dashboards in Figma",
      "Ensure compliance with HIPAA privacy and WCAG accessibility",
      "Conduct usability tests with patients and medical professionals"
    ]
  },
  {
    id: "technical-support-engineer",
    title: "Technical Support Engineer",
    category: "Clinical Informatics",
    iconName: "Activity", // Fits support and troubleshooting Activity icon maps
    desc: "Provide technical support and troubleshoot issues for healthcare SaaS portals, APIs, and integrated patient portal applications.",
    href: "/careers/technical-support-engineer",
    badge: "Helpdesk & IT",
    location: "Remote (US)",
    features: [
      "Troubleshoot API integration and FHIR OAuth token syncing issues",
      "Manage helpdesk escalations in Jira Service Management",
      "Maintain clinical HIPAA access privacy and verification rules"
    ]
  },
  {
    id: "cybersecurity-engineer",
    title: "Cybersecurity Engineer",
    category: "Clinical Informatics",
    iconName: "Layers", // Fits security systems design layers
    desc: "Design and implement security controls, secure cloud-based patient databases, and protect platforms against cybersecurity threats.",
    href: "/careers/cybersecurity-engineer",
    badge: "Security & SOC",
    location: "Remote (US)",
    features: [
      "Secure SaaS APIs and cloud environments with WAF & IAM",
      "Ensure HIPAA and data security compliance across systems",
      "Monitor SIEM alerts and design DevSecOps pipelines"
    ]
  },
  {
    id: "solutions-engineer",
    title: "Solutions Engineer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design, implement, and support technical solutions for healthcare SaaS platforms and digital health systems. Bridge clinical workflows with engineering APIs.",
    href: "/careers/solutions-engineer",
    badge: "API & Integration",
    location: "Remote (US)",
    features: [
      "Design end-to-end technical solutions for healthcare SaaS",
      "Integrate SaaS platforms with EHR/EMR systems and APIs",
      "Bridge technical requirements between clients and engineering"
    ]
  },
  {
    id: "power-bi-developer",
    title: "Power BI Developer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design and build interactive dashboards, reports, and data visualization systems for healthcare SaaS and clinical platforms.",
    href: "/careers/power-bi-developer",
    badge: "BI & Visualization",
    location: "Remote (US)",
    features: [
      "Build interactive Power BI dashboards for healthcare data",
      "Optimize data models and write performant SQL queries",
      "Configure row-level security (RLS) policies for HIPAA containment"
    ]
  },
  {
    id: "erp-consultant",
    title: "ERP Consultant",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Design, implement, and optimize healthcare ERP systems that improve operational efficiency across healthcare organizations.",
    href: "/careers/erp-consultant",
    badge: "Enterprise & ERP",
    location: "Remote (US)",
    features: [
      "Configure Workday, SAP, or Oracle modules for healthcare clients",
      "Optimize clinical and financial workflow interoperability",
      "Enforce role-based access controls and PHI data masking"
    ]
  },
  {
    id: "embedded-software-engineer",
    title: "Embedded Software Engineer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design and develop firmware and embedded systems for healthcare-related devices and connected digital health solutions.",
    href: "/careers/embedded-software-engineer",
    badge: "IoT & Firmware",
    location: "Remote (US)",
    features: [
      "Design embedded software for healthcare IoT devices",
      "Configure FreeRTOS preemptive kernels and event loops",
      "Secure cloud telemetry endpoints using AES-256 and TLS"
    ]
  },
  {
    id: "technical-product-manager",
    title: "Technical Product Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Lead the strategy, development, and execution of healthcare SaaS and AI-powered digital health products.",
    href: "/careers/technical-product-manager",
    badge: "Product & AI",
    location: "Remote (US)",
    features: [
      "Define product strategy and roadmaps for healthcare SaaS",
      "Prioritize sprint backlogs using RICE prioritization schemas",
      "Bridge technical specifications between design, clinicians, and engineers"
    ]
  },
  {
    id: "cloud-security-engineer",
    title: "Cloud Security Engineer",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Design, implement, and maintain secure cloud environments for healthcare SaaS platforms and digital health systems.",
    href: "/careers/cloud-security-engineer",
    badge: "Cloud Security",
    location: "Remote (US)",
    features: [
      "Secure SaaS workloads on AWS using WAF, ALB, and VPC boundaries",
      "Automate credentials security using KMS key-rotation schemes",
      "Harden DevSecOps pipelines with Trivy container build scanners"
    ]
  },
  {
    id: "infrastructure-engineer",
    title: "Infrastructure Engineer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design, build, and maintain scalable infrastructure for healthcare SaaS and digital health platforms.",
    href: "/careers/infrastructure-engineer",
    badge: "Scale & Infra",
    location: "Remote (US)",
    features: [
      "Design scalable, Multi-AZ cloud topologies on AWS",
      "Configure Kubernetes auto-scalers and Horizontal Pod Autoscalers",
      "Implement automated version-controlled GitOps workflows with Terraform"
    ]
  },
  {
    id: "java-developer",
    title: "Java Developer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design, develop, and maintain backend services and APIs for healthcare SaaS and digital health platforms.",
    href: "/careers/java-developer",
    badge: "API & Backend",
    location: "Remote (US)",
    features: [
      "Develop scalable backend services and APIs using Java",
      "Design and maintain microservices-based architectures",
      "Optimize application performance and database latency"
    ]
  },
  {
    id: "quality-assurance-analyst",
    title: "Quality Assurance Analyst",
    category: "Clinical Informatics",
    iconName: "Activity",
    desc: "Test and validate healthcare SaaS applications, patient portals, and AI-driven digital health systems.",
    href: "/careers/quality-assurance-analyst",
    badge: "Quality & Testing",
    location: "Remote (US)",
    features: [
      "Perform manual and automated testing across digital platforms",
      "Validate clinical workflows, APIs, and portal features",
      "Ensure compliance and data security before release"
    ]
  },
  {
    id: "marketing-automation-specialist",
    title: "Marketing Automation Specialist",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Design, build, and optimize automated marketing systems, CRM workflows, and lead nurturing funnels for healthcare products.",
    href: "/careers/marketing-automation-specialist",
    badge: "Growth & CRM",
    location: "Remote (US)",
    features: [
      "Build and manage automated CRM workflows and campaigns",
      "Design growth funnels, drip campaigns, and lead nurture tracks",
      "Track marketing conversion performance using server-side webhook APIs"
    ]
  },
  {
    id: "technical-account-manager",
    title: "Technical Account Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Manage client relationships, oversee technical onboarding, and ensure successful adoption of healthcare SaaS platforms.",
    href: "/careers/technical-account-manager",
    badge: "Client Success",
    location: "Remote (US)",
    features: [
      "Manage technical onboarding and integrations for hospital clients",
      "Troubleshoot clinical API integrations and EHR sync pipelines",
      "Coordinate with product and backend engineering teams for SLA resolutions"
    ]
  },
  {
    id: "business-intelligence-developer",
    title: "Business Intelligence Developer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design and build data models, dashboards, and reporting systems for healthcare SaaS and clinical platforms.",
    href: "/careers/business-intelligence-developer",
    badge: "Analytics & BI",
    location: "Remote (US)",
    features: [
      "Design and build BI dashboards for clinical and operational insights",
      "Develop relational star-schema data models and warehouse ETLs",
      "Configure row-level security and dynamic suppressions for HIPAA alignment"
    ]
  },
  {
    id: "firmware-engineer",
    title: "Firmware Engineer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design, develop, and optimize firmware for healthcare devices and IoT-enabled medical systems.",
    href: "/careers/firmware-engineer",
    badge: "IoT & Firmware",
    location: "Remote (US)",
    features: [
      "Design secure embedded firmware for medical IoT devices",
      "Configure preemptive RTOS schedulers and vital sensor sample buffers",
      "Implement TLS 1.3 telemetry encryption and cryptographic Secure Boot OTA verification"
    ]
  },
  {
    id: "it-administrator",
    title: "IT Administrator",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Manage healthcare IT systems, cloud infrastructure, user access controls, and support operations for US healthcare SaaS platforms.",
    href: "/careers/it-administrator",
    badge: "IT & Systems",
    location: "Remote (US)",
    features: [
      "Manage RBAC user access controls with MFA enforcement and least-privilege scoping",
      "Configure secure VPN network access and whitelist static IP firewall rules",
      "Establish daily automated encrypted WORM backups and disaster recovery protocols"
    ]
  },
  {
    id: "it-auditor",
    title: "IT Auditor",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Evaluate, assess, and ensure compliance of healthcare SaaS platforms, cloud infrastructure, and digital health systems across the United States.",
    href: "/careers/it-auditor",
    badge: "Audit & Compliance",
    location: "Remote (US)",
    features: [
      "Conduct HIPAA, HITRUST, and SOC 2 compliance audits across healthcare systems",
      "Review IAM access policies, encryption controls, and security vulnerability reports",
      "Produce formal gap remediation plans with risk ratings and closure timelines"
    ]
  },
  {
    id: "technical-seo-specialist",
    title: "Technical SEO Specialist",
    category: "Clinical Informatics",
    iconName: "Activity",
    desc: "Optimize healthcare SaaS websites, landing pages, and digital health platforms for search engines and drive organic growth across US healthcare markets.",
    href: "/careers/technical-seo-specialist",
    badge: "SEO & Growth",
    location: "Remote (US)",
    features: [
      "Optimize Core Web Vitals, site architecture, and technical SEO signals",
      "Conduct keyword research and develop SEO strategies for US healthcare markets",
      "Implement schema markup and improve organic ranking for healthcare SaaS platforms"
    ]
  },
  {
    id: "documentation-specialist",
    title: "Documentation Specialist",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Create, organize, and maintain high-quality technical documentation for healthcare SaaS platforms, APIs, and digital health systems across the United States.",
    href: "/careers/documentation-specialist",
    badge: "Docs & Writing",
    location: "Remote (US)",
    features: [
      "Write OpenAPI specs, developer guides, and API reference documentation",
      "Document EHR/EMR integrations, clinical workflows, and patient portal features",
      "Organize docs in structured information architectures with audience-based entry paths"
    ]
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Design, develop, and maintain scalable backend services, APIs, and microservices for healthcare SaaS platforms and digital health systems across the United States.",
    href: "/careers/backend-engineer",
    badge: "Engineering",
    location: "Remote (US)",
    features: [
      "Build versioned REST APIs with idempotency keys and per-client rate limiting",
      "Implement CQRS with read replicas and optimized indexes for high-read clinical workloads",
      "Design event-driven Saga patterns with circuit breakers for distributed healthcare microservices"
    ]
  },
  {
    id: "database-engineer",
    title: "Database Engineer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design, build, and optimize secure, high-performance database systems and HIPAA-compliant data architectures for clinical SaaS and healthcare platforms in the USA.",
    href: "/careers/database-engineer",
    badge: "Data & Infrastructure",
    location: "Remote (US)",
    features: [
      "Implement normalized relational schemas with PHI isolation and column-level encryption",
      "Optimize query performance using query execution plans, composite indexes, and partitioning",
      "Deploy multi-AZ primary/standby replication with automated failover and point-in-time recovery"
    ]
  },
  {
    id: "implementation-consultant",
    title: "Implementation Consultant",
    category: "Clinical Informatics",
    iconName: "Briefcase",
    desc: "Manage the deployment, configuration, and onboarding of healthcare SaaS platforms for clients across the United States, aligning systems with clinical workflows.",
    href: "/careers/implementation-consultant",
    badge: "Client Services",
    location: "Remote (US)",
    features: [
      "Design role-based HIPAA-compliant access permissions for clinical and billing dashboards",
      "Configure secure bidirectional HL7 FHIR API integrations mapped to EHR database systems",
      "Implement phased Train-the-Trainer rollout models with feedback loops for high clinical adoption"
    ]
  },
  {
    id: "integration-engineer",
    title: "Integration Engineer",
    category: "Clinical Informatics",
    iconName: "Activity",
    desc: "Design, build, and maintain integrations between healthcare SaaS platforms, EHR/EMR systems, APIs, and third-party healthcare tools.",
    href: "/careers/integration-engineer",
    badge: "Engineering",
    location: "Remote (US)",
    features: [
      "Build secure RESTful HL7 FHIR JSON endpoints and map data fields to internal schemas",
      "Configure OAuth 2.0 with mutual TLS (mTLS) for backend server-to-server data exchange",
      "Deploy event-driven webhook sync pipelines using Kafka/RabbitMQ with Dead Letter Queues"
    ]
  },
  {
    id: "crm-specialist",
    title: "CRM Specialist",
    category: "Data & Analytics",
    iconName: "Briefcase",
    desc: "Manage, optimize, and scale customer relationship platforms and automated business workflows to support healthcare SaaS growth operations.",
    href: "/careers/crm-specialist",
    badge: "Growth Ops",
    location: "Remote (US)",
    features: [
      "Configure CRM pipeline automations and data validation rules using custom layout objects",
      "Establish conditional lead scoring rules and webhook syncs to trigger sales team workflows",
      "Implement field-level PHI masking and access audit logging to secure sensitive patient datasets"
    ]
  },
  {
    id: "service-delivery-manager",
    title: "Service Delivery Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Oversee the successful delivery, performance, and continuous improvement of healthcare technology services and client operations.",
    href: "/careers/service-delivery-manager",
    badge: "IT Operations",
    location: "Remote (US)",
    features: [
      "Lead Priority-1 incident response plans with unified war-room triage and SLA compliance",
      "Coordinate resource capacity planning and sprint schedules across engineering and support leads",
      "Manage customer SLA escalations and deliver formal RCAs (Root Cause Analysis) to clinical partners"
    ]
  },
  {
    id: "devsecops-engineer",
    title: "DevSecOps Engineer",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Integrate security automation into software development pipelines, secure cloud networks, and secure healthcare data handling policies.",
    href: "/careers/devsecops-engineer",
    badge: "Security Engineering",
    location: "Remote (US)",
    features: [
      "Integrate automated SAST, SCA, and image scanning gates into active CI/CD pipelines",
      "Enforce least-privilege AWS IAM security controls with KMS key envelope encryption policies",
      "Deploy regex-based DLP logs masking filters to dynamically scrub PHI in cloud storage buckets"
    ]
  },
  {
    id: "it-operations-manager",
    title: "IT Operations Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Lead and optimize technology operations, infrastructure management, and IT service delivery across Med Clinic X platforms.",
    href: "/careers/it-operations-manager",
    badge: "Operations",
    location: "Remote (US)",
    features: [
      "Deploy multi-region active-active cloud clusters with Route53 routing configurations",
      "Enforce ITIL ticketing escalation matrices, track SLAs, and lead Root Cause Analyses",
      "Configure active directory Single Sign-On (SSO) with least-privilege IAM policies"
    ]
  },
  {
    id: "technical-architect",
    title: "Technical Architect",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Design and guide the architecture of healthcare SaaS platforms, cloud systems, and enterprise digital health solutions.",
    href: "/careers/technical-architect",
    badge: "Architecture",
    location: "Remote (US)",
    features: [
      "Design tenant logical DB isolation models using PostgreSQL Row-Level Security (RLS)",
      "Architect HL7 FHIR API facade gateway routers over legacy hospital EHR interfaces",
      "Build event-driven microservices scaling pipelines using Kafka with Outbox patterns"
    ]
  },
  {
    id: "customer-success-engineer",
    title: "Customer Success Engineer",
    category: "Clinical Informatics",
    iconName: "Briefcase",
    desc: "Support healthcare SaaS clients, integrations, and technical solutions for US healthcare organizations.",
    href: "/careers/customer-success-engineer",
    badge: "Client Success",
    location: "Remote (US)",
    features: [
      "Act as a technical partner for healthcare customers, troubleshooting platform issues",
      "Support API integrations, EHR connectivity, and configure custom clinical workflows",
      "Collaborate with engineering teams to resolve technical issues and improve products"
    ]
  },
  {
    id: "data-visualization-specialist",
    title: "Data Visualization Specialist",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Design, develop, and maintain interactive dashboards, reports, and visual analytics solutions for healthcare technology platforms.",
    href: "/careers/data-visualization-specialist",
    badge: "Analytics & BI",
    location: "Remote (US)",
    features: [
      "Design interactive dashboards and visual reporting solutions using Power BI and Tableau",
      "Develop analytical database models using fact-and-dimension Star Schema architectures",
      "Enforce HIPAA cell suppression rules on query aggregates to prevent client re-identification"
    ]
  },
  {
    id: "application-architect",
    title: "Application Architect",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Design scalable healthcare SaaS applications, cloud solutions, and digital health platforms in the USA.",
    href: "/careers/application-architect",
    badge: "Architecture",
    location: "Remote (US)",
    features: [
      "Design robust, secure, and auto-scaling architectures for clinical workflows and patient portal software",
      "Enforce data tenant logical isolation limits utilizing database-level PostgreSQL Row-Level Security (RLS)",
      "Architect secure REST and HL7 FHIR API data exchange layers with error-handling webhook retry pipelines"
    ]
  },
  {
    id: "azure-cloud-engineer",
    title: "Azure Cloud Engineer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Build secure cloud infrastructure, healthcare SaaS platforms, and digital health solutions in the USA.",
    href: "/careers/azure-cloud-engineer",
    badge: "Cloud Infrastructure",
    location: "Remote (US)",
    features: [
      "Design and manage secure Microsoft Azure cloud environments for patient portals and SaaS applications",
      "Implement robust cloud identity controls utilizing Microsoft Entra ID (Azure AD) and RBAC policies",
      "Automate infrastructure provisioning using Terraform templates deployed via Azure DevOps YAML pipelines"
    ]
  },
  {
    id: "iot-developer",
    title: "IoT Developer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Build connected healthcare devices, IoT platforms, and digital health solutions for US healthcare systems.",
    href: "/careers/iot-developer",
    badge: "Connected Devices",
    location: "Remote (US)",
    features: [
      "Design and integrate secure IoT solutions connecting medical devices to cloud portals",
      "Implement preemptive RTOS task schedules prioritizing telemetry collection over background metrics",
      "Enforce TLS 1.3 mutual auth (mTLS) telemetry endpoints and signature-verified OTA boot configurations"
    ]
  },
  {
    id: "it-program-manager",
    title: "IT Program Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Lead healthcare SaaS programs, digital health delivery, and cross-functional tech initiatives in the USA.",
    href: "/careers/it-program-manager",
    badge: "Program Management",
    location: "Remote (US)",
    features: [
      "Lead cross-functional healthcare SaaS programs, engineering initiatives, and product launches",
      "Govern portfolio timelines, critical path schedules, and cross-team dependencies",
      "Conduct HIPAA compliance vendor audits, BAA reviews, and change management approvals (CAB)"
    ]
  },
  {
    id: "erp-developer",
    title: "ERP Developer",
    category: "Data & Analytics",
    iconName: "Database",
    desc: "Build and customize healthcare ERP systems, integrations, and automation for US healthcare organizations.",
    href: "/careers/erp-developer",
    badge: "Enterprise ERP",
    location: "Remote (US)",
    features: [
      "Design and customize Odoo/SAP modules for clinical inventory and procedure fee allocations",
      "Enforce double-entry accounting ledger schemas locked within single atomic database transactions",
      "Implement role-based field-level security checks to scrub clinical diagnostics (ICD-10) from admin invoices"
    ]
  },
  {
    id: "it-service-manager",
    title: "IT Service Manager",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Lead healthcare IT service operations, SaaS support, and infrastructure reliability for US healthcare systems.",
    href: "/careers/it-service-manager",
    badge: "ITIL Operations",
    location: "Remote (US)",
    features: [
      "Oversee IT service operations and incident, problem, and change controls across SaaS products",
      "Govern critical Sev-1 outage triage protocols, war rooms, and client communications channels",
      "Enforce ITIL standards and SLA compliance targets, designing solutions to prevent repeat incidents"
    ]
  },
  {
    id: "pre-sales-engineer",
    title: "Pre-Sales Engineer",
    category: "Clinical Informatics",
    iconName: "Layers",
    desc: "Support healthcare SaaS sales, demos, and technical solutions for US hospitals, clinics, and providers.",
    href: "/careers/pre-sales-engineer",
    badge: "Technical Sales",
    location: "Remote (US)",
    features: [
      "Support sales teams with technical product demonstrations presenting healthcare SaaS solutions to potential clients",
      "Understand client requirements mapping workflows to standard HL7 FHIR API capabilities and preparing architecture overviews",
      "Navigate CISO HIPAA objections, deliver compliance documentation, and establish proof-of-concept success parameters"
    ]
  },
  {
    id: "technology-strategist",
    title: "Technology Strategist",
    category: "Project Management",
    iconName: "Briefcase",
    desc: "Shape healthcare SaaS strategy, AI systems, and digital health innovation for US healthcare organizations.",
    href: "/careers/technology-strategist",
    badge: "Tech Strategy",
    location: "Remote (US)",
    features: [
      "Define and align long-term technology roadmaps and architectural designs with business goals for healthcare SaaS",
      "Guide the safe adoption of AI note-taking and clinical NLP tools using Human-in-the-Loop governance protocols",
      "Migrate legacy clinical systems to standard cloud architectures leveraging HL7 FHIR API facade gateways and LOINC mappings"
    ]
  }
];
