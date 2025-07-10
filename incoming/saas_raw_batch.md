---
prompt_id: tech-saas-customer-success-051
slug: saas-customer-success
title: Customer Success Playbook Generator
---

### Purpose  
Provide SaaS businesses with a structured prompt to create a Customer Success Playbook that drives onboarding, adoption, and retention for enterprise customers.

### Jurisdiction  
United Kingdom (general commercial practice).

### Professional Context  
For Customer Success leaders and operations managers within established SaaS companies.

### Base Prompt  
“You are a SaaS Customer Success strategist. Draft a **Customer Success Playbook** for **{{ProductName}}**, covering onboarding workflows, health-score metrics, QBR templates, churn-risk actions, and expansion playbooks. Align timelines with a standard 90-day onboarding model.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| ProductName | SaaS product name | “DataFlow Cloud” |

### Example Usage  
`/cs-playbook ProductName="DataFlow Cloud"`

### Risk Warnings  
* Over-automating touch points can alienate high-value customers—balance digital and human interactions.  

> **Audience:** SaaS Customer Success & Operations teams

--------
---
prompt_id: tech-saas-upsell-playbook-052
slug: saas-upsell-playbook
title: Upsell & Cross-Sell Strategy Prompt
---

### Purpose  
Generate a data-driven upsell and cross-sell strategy for mature SaaS businesses seeking net-revenue expansion.

### Jurisdiction  
United Kingdom.

### Professional Context  
SaaS sales enablement, account management, and finance teams.

### Base Prompt  
“You are a SaaS growth consultant. Create an **Upsell & Cross-Sell Strategy** for **{{Company}}** using existing install-base metrics (NRR, NPS, Product Usage Depth). Provide segment-specific plays and success KPIs.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Company | Legal entity | “ScaleCloud Ltd” |

### Example Usage  
`/upsell-strategy Company="ScaleCloud Ltd"`

### Risk Warnings  
* Aggressive upsell quotas without value alignment may increase churn—validate ROI for each segment.  

> **Audience:** SaaS Sales & Revenue Operations

--------
---
prompt_id: tech-saas-churn-analysis-053
slug: saas-churn-analysis
title: Churn Root-Cause Analysis Template
---

### Purpose  
Help SaaS businesses conduct structured churn diagnostics and identify actionable remediation.

### Jurisdiction  
United Kingdom.

### Professional Context  
Revenue operations, data analytics, and finance teams in SaaS firms.

### Base Prompt  
“You are a SaaS analytics lead. Produce a **Churn Root-Cause Analysis** using cohort data **{{DataRange}}**. Break down voluntary vs. involuntary churn, product usage predictors, and competitive displacement reasons.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| DataRange | Period analysed | “FY 2024-Q1 to FY 2025-Q1” |

### Example Usage  
`/churn-analysis DataRange="FY2024-Q1–FY2025-Q1"`

### Risk Warnings  
* GDPR restricts combining product logs with personally identifiable data—apply anonymisation where needed.  

> **Audience:** SaaS RevOps & Data teams

--------
---
prompt_id: tech-saas-pricing-review-054
slug: saas-pricing-review
title: SaaS Pricing Model Review Prompt
---

### Purpose  
Provide a framework for reviewing and optimising SaaS pricing models (subscription tiers, usage-based, hybrid).

### Jurisdiction  
United Kingdom.

### Professional Context  
Product management and finance departments of SaaS businesses.

### Base Prompt  
“You are a SaaS pricing strategist. Review **{{PricingStructure}}** for **{{Product}}**. Compare against value metrics, competitor benchmarks, and margin targets. Recommend tier adjustments and monetisation experiments.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Product | SaaS product | “InsightCRM” |
| PricingStructure | Current model description | “3 tiers + usage overage” |

### Example Usage  
`/pricing-review Product="InsightCRM" PricingStructure="3 tiers + usage"`

### Risk Warnings  
* Pricing changes can trigger MRR reclassification—coordinate with revenue recognition policy.  

> **Audience:** SaaS Product & Finance leaders

--------
---
prompt_id: tech-saas-expansion-framework-055
slug: saas-expansion-framework
title: Expansion Revenue Framework
---

### Purpose  
Create a repeatable framework to track and accelerate expansion revenue (upgrades, seats, add-ons) for SaaS enterprises.

### Jurisdiction  
United Kingdom.

### Professional Context  
Finance, sales, and product teams at mid-market and enterprise SaaS companies.

### Base Prompt  
“You are a SaaS finance analyst. Build an **Expansion Revenue Framework** for **{{Company}}**. Include dashboard metrics (NDR, expansion MRR), trigger events, and playbook alignment.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Company | Business name | “BlueWave Analytics” |

### Example Usage  
`/expansion-framework Company="BlueWave Analytics"`

### Risk Warnings  
* Expansion targets should not cannibalise net-new acquisition budgets—model P&L impact.  

> **Audience:** SaaS Finance & Revenue Leadership

--------
---
prompt_id: tech-saas-soc2-readiness-056
slug: saas-soc2-readiness
title: SOC 2 Readiness Checklist
---

### Purpose  
Help established SaaS companies prepare for a SOC 2 (Type II) audit.

### Jurisdiction  
United Kingdom (aligns with AICPA SOC 2 standards).

### Professional Context  
Security, compliance, and engineering leaders.

### Base Prompt  
“You are an information-security auditor. Generate a **SOC 2 Readiness Checklist** for **{{ServiceName}}**, mapping current controls to Trust Services Criteria, evidence requirements, and remediation tasks.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| ServiceName | SaaS platform | “DataLake 360” |

### Example Usage  
`/soc2-checklist ServiceName="DataLake 360"`

### Risk Warnings  
* Collecting evidence in ad hoc formats can prolong audit—standardise artefact storage.  

> **Audience:** SaaS Security & Compliance teams

--------
---
prompt_id: tech-saas-iso27001-plan-057
slug: saas-iso27001-plan
title: ISO 27001 Implementation Roadmap
---

### Purpose  
Provide a phased roadmap to achieve ISO 27001 certification for SaaS operations.

### Jurisdiction  
United Kingdom.

### Professional Context  
SaaS information security management and operations teams.

### Base Prompt  
“You are an ISO 27001 consultant. Draft a **12-Month Implementation Roadmap** for **{{Organisation}}**, including ISMS scope, policy drafts, risk assessment schedule, and internal audit plan.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Organisation | Company | “CloudMetrics Ltd” |

### Example Usage  
`/iso-roadmap Organisation="CloudMetrics Ltd"`

### Risk Warnings  
* Overlooked shadow-IT components can undermine certification scope integrity.  

> **Audience:** ISMS Managers & SaaS Ops

--------
---
prompt_id: tech-saas-pen-test-rfp-058
slug: saas-pen-test-rfp
title: Penetration Testing RFP Generator
---

### Purpose  
Generate a Request for Proposal (RFP) for selecting a penetration-testing provider suited to SaaS architecture.

### Jurisdiction  
United Kingdom.

### Professional Context  
Security and procurement teams at SaaS businesses.

### Base Prompt  
“You are a cybersecurity procurement advisor. Draft a **Pen-Testing RFP** for **{{Platform}}** highlighting scope (web app, APIs, cloud infra), reporting standards, and remediation timelines.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Platform | SaaS platform name | “TaskHub” |

### Example Usage  
`/pen-test-rfp Platform="TaskHub"`

### Risk Warnings  
* Pen-test engagement letters must exclude production data manipulation outside maintenance windows.  

> **Audience:** SaaS Security & Procurement

--------
---
prompt_id: tech-saas-data-migration-059
slug: saas-data-migration
title: Customer Data Migration Plan
---

### Purpose  
Provide a step-by-step plan to migrate customer data into a SaaS product, minimising downtime and risk.

### Jurisdiction  
United Kingdom (data protection compliance).

### Professional Context  
Professional Services and Customer Onboarding teams.

### Base Prompt  
“You are a SaaS migration architect. Produce a **Data Migration Plan** for onboarding **{{Customer}}** into **{{Product}}**, covering data mapping, validation, cut-over strategy, and rollback.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Customer | Client name | “RetailCo plc” |
| Product | SaaS product | “Inventory360” |

### Example Usage  
`/migration-plan Customer="RetailCo plc" Product="Inventory360"`

### Risk Warnings  
* Validate encryption-at-rest post-migration to meet contractual data-security clauses.  

> **Audience:** SaaS Professional Services & IT teams

--------
---
prompt_id: tech-saas-roadmap-governance-060
slug: saas-roadmap-governance
title: Product Roadmap Governance Charter
---

### Purpose  
Create a governance framework for managing SaaS product roadmaps and stakeholder expectations.

### Jurisdiction  
United Kingdom.

### Professional Context  
Product management and PMO functions.

### Base Prompt  
“You are a SaaS product governance expert. Draft a **Roadmap Governance Charter** for **{{ProductLine}}** detailing meeting cadences, decision rights (RACI), prioritisation criteria, and change-log transparency.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| ProductLine | Product suite | “Analytics Cloud” |

### Example Usage  
`/roadmap-charter ProductLine="Analytics Cloud"`

### Risk Warnings  
* Over-promising features in sales cycles without governance approval increases delivery risk and legal exposure.  

> **Audience:** SaaS Product & PMO teams

--------
---
prompt_id: tech-saas-feature-rollout-061
slug: saas-feature-rollout
title: Feature Rollout Communication Plan
---

### Purpose  
Generate a detailed communication plan for rolling out new SaaS features to existing customers.

### Jurisdiction  
United Kingdom.

### Professional Context  
Marketing, product, and customer-success teams.

### Base Prompt  
“You are a SaaS release manager. Create a **Feature Rollout Comms Plan** for feature **{{FeatureName}}**, including announcement emails, in-app messaging, release notes, and enablement training.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| FeatureName | New feature | “Advanced Reporting Widgets” |

### Example Usage  
`/rollout-comm FeatureName="Advanced Reporting Widgets"`

### Risk Warnings  
* Misaligned messaging with contractual SLAs can cause support overload—coordinate timelines.  

> **Audience:** SaaS Marketing & CS

--------
---
prompt_id: tech-saas-accessibility-check-062
slug: saas-accessibility-check
title: SaaS Accessibility Compliance Checklist
---

### Purpose  
Provide a checklist to ensure SaaS products meet WCAG 2.2 AA standards and UK Equalities Act obligations.

### Jurisdiction  
United Kingdom.

### Professional Context  
Product design, engineering, and legal compliance teams.

### Base Prompt  
“You are a digital-accessibility auditor. Draft a **SaaS Accessibility Checklist** for **{{AppName}}** covering keyboard navigation, ARIA labels, colour contrast, and assistive technology testing.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| AppName | Application name | “TeamTrack” |

### Example Usage  
`/accessibility-check AppName="TeamTrack"`

### Risk Warnings  
* Ignoring accessibility can trigger discrimination claims—monitor compliance continuously.  

> **Audience:** SaaS UX, Engineering & Compliance

--------
---
prompt_id: tech-saas-financial-pack-063
slug: saas-financial-pack
title: Monthly SaaS Financial Pack Template
---

### Purpose  
Generate a monthly financial reporting pack tailored to SaaS metrics (MRR, ARR, CAC, LTV) for internal leadership review.

### Jurisdiction  
United Kingdom (FRS 102 & IFRS 15 considerations).

### Professional Context  
Finance controllers and FP&A teams at SaaS businesses.

### Base Prompt  
“You are a SaaS FP&A analyst. Produce a **Monthly Financial Pack** for **{{Month}}** including P&L, cash-flow, SaaS metrics, and narrative analysis.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Month | Reporting month | “June 2025” |

### Example Usage  
`/financial-pack Month="June 2025"`

### Risk Warnings  
* Revenue recognition must align with IFRS 15—adjust for multi-year deals and deferred revenue.  

> **Audience:** SaaS Finance & Leadership

--------
---
prompt_id: tech-saas-board-pack-064
slug: saas-board-pack
title: SaaS Board Pack Prompt
---

### Purpose  
Provide a structured outline for quarterly board packs focused on SaaS operational and financial performance.

### Jurisdiction  
United Kingdom.

### Professional Context  
Executive leadership and corporate governance teams.

### Base Prompt  
“You are a corporate governance advisor. Draft a **Quarterly Board Pack** for **{{Company}}** covering strategy updates, KPI dashboards, risk register changes, and investment proposals.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Company | Entity name | “TechSphere plc” |

### Example Usage  
`/board-pack Company="TechSphere plc"`

### Risk Warnings  
* Forward-looking statements require appropriate disclaimers to avoid market-abuse issues (if listed).  

> **Audience:** SaaS Executive & Board

--------
---
prompt_id: tech-saas-kpi-dashboard-065
slug: saas-kpi-dashboard
title: SaaS KPI Dashboard Requirements
---

### Purpose  
Define requirements for an executive KPI dashboard tracking key SaaS metrics.

### Jurisdiction  
United Kingdom.

### Professional Context  
Data engineering and business-intelligence teams.

### Base Prompt  
“You are a BI architect. Specify **KPI Dashboard Requirements** for **{{UserGroup}}** focusing on MRR, churn, customer health, and NPS. Provide data-source mapping and refresh cadence.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| UserGroup | Stakeholder group | “Executive Leadership” |

### Example Usage  
`/kpi-dashboard UserGroup="Executive Leadership"`

### Risk Warnings  
* Misaligned definitions (e.g., logo churn vs. revenue churn) can confuse stakeholders—document metric formulas.  

> **Audience:** SaaS BI & Analytics

--------
---
prompt_id: tech-saas-renewal-negotiation-066
slug: saas-renewal-negotiation
title: Renewal Negotiation Script
---

### Purpose  
Generate negotiation scripts for Customer-Success teams to secure contract renewals and price uplifts.

### Jurisdiction  
United Kingdom.

### Professional Context  
Account managers and Customer Success leads.

### Base Prompt  
“You are a SaaS negotiation coach. Draft a **Renewal Call Script** for customer **{{CustomerName}}** (ARR £{{ARR}}), including objection handling and ROI reminders.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| CustomerName | Client | “FinPro Ltd” |
| ARR | Annual recurring revenue | “120,000” |

### Example Usage  
`/renewal-script CustomerName="FinPro Ltd" ARR="120000"`

### Risk Warnings  
* Renewal concessions beyond pricing guidelines must be approved by finance to protect margin integrity.  

> **Audience:** SaaS Account Management

--------
---
prompt_id: tech-saas-partner-program-067
slug: saas-partner-program
title: SaaS Partner Programme Agreement
---

### Purpose  
Draft a partner-programme agreement for reselling SaaS licences in the UK and EMEA.

### Jurisdiction  
United Kingdom.

### Professional Context  
Channel sales and legal teams.

### Base Prompt  
“You are a SaaS channel lawyer. Draft a **Partner Programme Agreement** between **{{Vendor}}** and **{{Partner}}**, covering reseller margin, deal registration, training, and marketing funds.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Vendor | SaaS vendor | “SecureDocs Ltd” |
| Partner | Reseller | “AlphaTech Solutions” |

### Example Usage  
`/partner-agreement Vendor="SecureDocs Ltd" Partner="AlphaTech Solutions"`

### Risk Warnings  
* Channel conflict rules must be clear to avoid double compensation claims.  

> **Audience:** SaaS Channel & Legal teams

--------
---
prompt_id: tech-saas-marketplace-terms-068
slug: saas-marketplace-terms
title: Marketplace Listing Terms Prompt
---

### Purpose  
Generate terms for listing a SaaS application on cloud marketplaces (AWS, Azure, GCP).

### Jurisdiction  
United Kingdom.

### Professional Context  
Legal and marketplace operations teams.

### Base Prompt  
“You are a SaaS marketplace lawyer. Draft **Listing Terms** for **{{Product}}** on **{{Marketplace}}**, covering pricing, support obligations, data residency, and delisting procedures.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Product | SaaS product | “Insight360” |
| Marketplace | Platform | “AWS Marketplace” |

### Example Usage  
`/listing-terms Product="Insight360" Marketplace="AWS Marketplace"`

### Risk Warnings  
* Marketplace revenue share fees impact net ARR—update financial forecasts accordingly.  

> **Audience:** SaaS Marketplace & Legal

--------
---
prompt_id: tech-saas-enterprise-sla-069
slug: saas-enterprise-sla
title: Enterprise SLA Template
---

### Purpose  
Provide an enhanced SLA template for enterprise SaaS customers requiring higher uptime and support tiers.

### Jurisdiction  
United Kingdom.

### Professional Context  
Legal, sales engineering, and service-delivery teams.

### Base Prompt  
“You are a SaaS service-delivery expert. Draft an **Enterprise SLA** for **{{Service}}** guaranteeing {{Uptime}} uptime, priority support, and service-credit calculations.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Service | SaaS service | “DataSync Pro” |
| Uptime | Target availability | “99.95 % per calendar quarter” |

### Example Usage  
`/enterprise-sla Service="DataSync Pro" Uptime="99.95%"`

### Risk Warnings  
* Higher uptime targets may require additional redundancy spend—validate cost model.  

> **Audience:** SaaS Service Delivery & Legal

--------
---
prompt_id: tech-saas-regional-tax-070
slug: saas-regional-tax
title: Regional SaaS Tax Implication Guide
---

### Purpose  
Assess indirect tax obligations when selling SaaS in multiple jurisdictions within EMEA and APAC.

### Jurisdiction  
United Kingdom (originating seller).

### Professional Context  
Tax and finance teams of SaaS companies.

### Base Prompt  
“You are a SaaS tax advisor. Summarise **Regional SaaS Tax Obligations** for sales into **{{Regions}}**, indicating VAT/GST registration thresholds and e-services rules.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Regions | Target regions | “EU, UAE, Australia” |

### Example Usage  
`/regional-tax Regions="EU, UAE, Australia"`

### Risk Warnings  
* Non-compliance with GST may lead to platform withholding—register proactively.  

> **Audience:** SaaS Tax & Finance

--------
---
prompt_id: tech-saas-vat-moss-071
slug: saas-vat-moss
title: VAT MOSS Transition Checklist
---

### Purpose  
Provide a checklist for transitioning from UK VAT MOSS to local EU OSS schemes post-Brexit.

### Jurisdiction  
United Kingdom & EU.

### Professional Context  
Finance controllers of SaaS companies.

### Base Prompt  
“You are an indirect-tax consultant. Draft a **VAT MOSS Transition Checklist** for **{{Company}}**, covering OSS registration, invoicing updates, and evidence of customer location.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Company | SaaS entity | “LinkCore Ltd” |

### Example Usage  
`/vat-moss Company="LinkCore Ltd"`

### Risk Warnings  
* Incomplete origin evidence (IP, billing address) can invalidate VAT rate applied.  

> **Audience:** SaaS Finance & Tax

--------
---
prompt_id: tech-saas-us-sales-tax-072
slug: saas-us-sales-tax
title: US Sales-Tax Nexus Assessment
---

### Purpose  
Evaluate economic nexus exposure for UK-based SaaS providers selling to US customers.

### Jurisdiction  
United Kingdom & United States.

### Professional Context  
Finance and legal teams.

### Base Prompt  
“You are a US sales-tax specialist. Perform a **Nexus Assessment** for **{{Company}}**, summarising state thresholds, SaaS taxability, and registration timelines.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Company | SaaS provider | “MailSync Ltd” |

### Example Usage  
`/nexus-assessment Company="MailSync Ltd"`

### Risk Warnings  
* Late registration penalties can be retroactive—budget for potential liability.  

> **Audience:** SaaS Finance & Legal

--------
---
prompt_id: tech-saas-data-retention-073
slug: saas-data-retention
title: Data Retention & Deletion Policy
---

### Purpose  
Draft an internal policy for data retention and deletion aligned with customer contracts and UK-GDPR.

### Jurisdiction  
United Kingdom.

### Professional Context  
Compliance, DevOps, and legal teams.

### Base Prompt  
“You are a SaaS data-governance officer. Draft a **Data Retention Policy** for **{{Product}}**, defining retention periods, auto-deletion jobs, and customer export options.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Product | SaaS platform | “DocsHub” |

### Example Usage  
`/retention-policy Product="DocsHub"`

### Risk Warnings  
* Contradictory retention terms across modules can breach contractual commitments.  

> **Audience:** SaaS Compliance & DevOps

--------
---
prompt_id: tech-saas-disaster-recovery-074
slug: saas-disaster-recovery
title: SaaS Disaster-Recovery Plan Prompt
---

### Purpose  
Create a comprehensive disaster-recovery (DR) plan for SaaS production environments.

### Jurisdiction  
United Kingdom.

### Professional Context  
Site-reliability engineering (SRE) and operations teams.

### Base Prompt  
“You are a SaaS reliability engineer. Produce a **Disaster-Recovery Plan** for **{{ServiceName}}**, including RTO/RPO targets, failover runbooks, and testing cadence.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| ServiceName | SaaS service | “ComputeGrid” |

### Example Usage  
`/dr-plan ServiceName="ComputeGrid"`

### Risk Warnings  
* Un-tested DR procedures offer false assurance—run annual failover drills.  

> **Audience:** SaaS SRE & Ops teams

--------
---
prompt_id: tech-saas-offboarding-checklist-075
slug: saas-offboarding-checklist
title: Customer Offboarding Checklist
---

### Purpose  
Provide a systematic offboarding checklist for SaaS customers ending subscriptions.

### Jurisdiction  
United Kingdom.

### Professional Context  
Customer Success, support, and legal teams.

### Base Prompt  
“You are a SaaS operations manager. Draft a **Customer Offboarding Checklist** covering data export, user deactivation, billing closure, and feedback survey.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| None | – | – |

### Example Usage  
`/offboarding-checklist`

### Risk Warnings  
* Failure to delete residual PII post-offboarding violates GDPR data-minimisation principle.  

> **Audience:** SaaS Customer Success & Ops

--------
---
prompt_id: tech-saas-license-analytics-076
slug: saas-license-analytics
title: Licence Usage Analytics Report
---

### Purpose  
Generate a licence-usage analytics template to identify under-utilised seats and upsell opportunities.

### Jurisdiction  
United Kingdom.

### Professional Context  
Product analytics and finance teams.

### Base Prompt  
“You are a SaaS data analyst. Create a **Licence Usage Report** for **{{CustomerSegment}}**, showing active vs. purchased seats, feature adoption, and upsell score.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| CustomerSegment | Segment analysed | “Mid-market customers” |

### Example Usage  
`/license-report CustomerSegment="Mid-market customers"`

### Risk Warnings  
* Usage tracking must respect customer privacy terms—avoid collecting prohibited data.  

> **Audience:** SaaS Analytics & Finance

--------
---
prompt_id: tech-saas-dora-compliance-077
slug: saas-dora-compliance
title: DORA Compliance Gap-Analysis
---

### Purpose  
Assess readiness for the EU Digital Operational Resilience Act (DORA) requirements.

### Jurisdiction  
European Union & United Kingdom.

### Professional Context  
Risk, compliance, and engineering teams at SaaS companies serving financial clients.

### Base Prompt  
“You are a regulatory compliance analyst. Conduct a **DORA Gap-Analysis** for **{{Service}}**, mapping ICT risk controls, incident reporting, and third-party oversight.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Service | SaaS service | “TradeFlow SaaS” |

### Example Usage  
`/dora-gap Service="TradeFlow SaaS"`

### Risk Warnings  
* Non-compliance may bar service provision to EU financial institutions—prioritise remediation budget.  

> **Audience:** SaaS Risk & Compliance

--------
---
prompt_id: tech-saas-esg-reporting-078
slug: saas-esg-reporting
title: SaaS ESG Reporting Framework
---

### Purpose  
Create an ESG reporting framework tailored to software-as-a-service operations.

### Jurisdiction  
United Kingdom.

### Professional Context  
Sustainability and finance teams.

### Base Prompt  
“You are an ESG consultant. Draft a **SaaS ESG Reporting Framework** for **{{Company}}** that covers Scope 1-3 emissions, data-centre energy efficiency, and social governance metrics.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Company | SaaS business | “LogicSoft Ltd” |

### Example Usage  
`/esg-framework Company="LogicSoft Ltd"`

### Risk Warnings  
* Cloud provider emissions data may be estimated—disclose methodology transparently.  

> **Audience:** SaaS Sustainability & Finance

--------
---
prompt_id: tech-saas-csrd-compliance-079
slug: saas-csrd-compliance
title: CSRD Readiness Checklist
---

### Purpose  
Provide a checklist to prepare SaaS companies for EU Corporate Sustainability Reporting Directive (CSRD).

### Jurisdiction  
European Union (extraterritorial) & United Kingdom.

### Professional Context  
Sustainability reporting and legal teams.

### Base Prompt  
“You are a sustainability standards advisor. Build a **CSRD Readiness Checklist** for **{{Company}}**, mapping ESRS disclosure requirements to existing data.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Company | SaaS entity | “DataVision Ltd” |

### Example Usage  
`/csrd-readiness Company="DataVision Ltd"`

### Risk Warnings  
* CSRD applies at group level—coordinate with parent and subsidiary reporting channels.  

> **Audience:** SaaS ESG & Legal teams

--------
---
prompt_id: tech-saas-security-training-080
slug: saas-security-training
title: Employee Security Training Programme
---

### Purpose  
Develop an annual security-awareness training plan for SaaS employees.

### Jurisdiction  
United Kingdom.

### Professional Context  
HR, IT security, and compliance departments.

### Base Prompt  
“You are a security education specialist. Design a **Security Training Programme** for **{{Year}}** including phishing modules, secure coding, and social-engineering drills.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Year | Programme year | “2026” |

### Example Usage  
`/security-training Year="2026"`

### Risk Warnings  
* Training fatigue reduces effectiveness—measure engagement metrics and iterate.  

> **Audience:** SaaS HR & Security

--------
---
prompt_id: tech-saas-phishing-sim-081
slug: saas-phishing-sim
title: Phishing Simulation Campaign Prompt
---

### Purpose  
Create a phishing-simulation plan to test employee resilience within SaaS organisations.

### Jurisdiction  
United Kingdom.

### Professional Context  
Security operations and HR compliance.

### Base Prompt  
“You are a cyber-awareness lead. Draft a **Phishing Simulation Campaign** for **{{Department}}**, defining email templates, difficulty levels, and reporting KPIs.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Department | Target department | “Engineering” |

### Example Usage  
`/phishing-campaign Department="Engineering"`

### Risk Warnings  
* Simulations must avoid sensitive themes (e.g., redundancy) to prevent employee distress.  

> **Audience:** SaaS Security Ops & HR

--------
---
prompt_id: tech-saas-post-mortem-082
slug: saas-post-mortem
title: Incident Post-Mortem Template
---

### Purpose  
Generate a standard post-mortem report template for SaaS incident management.

### Jurisdiction  
United Kingdom.

### Professional Context  
SRE, engineering, and compliance teams.

### Base Prompt  
“You are a reliability engineer. Provide an **Incident Post-Mortem Template** including timeline, impact analysis, root cause, remediation, and preventative actions.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| None | – | – |

### Example Usage  
`/post-mortem-template`

### Risk Warnings  
* Post-mortems should be blameless—focus on systemic fixes to foster open culture.  

> **Audience:** SaaS SRE & Engineering

--------
---
prompt_id: tech-saas-performance-opt-083
slug: saas-performance-opt
title: Performance Optimisation Protocol
---

### Purpose  
Outline a protocol to monitor and optimise SaaS application performance.

### Jurisdiction  
United Kingdom.

### Professional Context  
Engineering and DevOps teams.

### Base Prompt  
“You are a performance engineer. Draft a **Performance Optimisation Protocol** for **{{App}}** addressing APM tooling, latency SLOs, and capacity planning.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| App | SaaS app | “QueryFast” |

### Example Usage  
`/performance-protocol App="QueryFast"`

### Risk Warnings  
* Optimisation without regression tests can degrade other modules—build CI gates.  

> **Audience:** SaaS DevOps & Engineering

--------
---
prompt_id: tech-saas-microservices-check-084
slug: saas-microservices-check
title: Microservices Architecture Checklist
---

### Purpose  
Provide a checklist for evaluating microservices readiness within SaaS platforms.

### Jurisdiction  
United Kingdom.

### Professional Context  
Architects and engineering leads.

### Base Prompt  
“You are a cloud-architecture consultant. Produce a **Microservices Readiness Checklist** for **{{Project}}**, covering service boundaries, observability, and deployment pipelines.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Project | Migration project | “Monolith-to-Microservices” |

### Example Usage  
`/microservices-check Project="Monolith-to-Microservices"`

### Risk Warnings  
* Over-fragmented services increase network latency and operational overhead—balance granularity with ROI.  

> **Audience:** SaaS Architects & Dev Leads

--------
---
prompt_id: tech-saas-billing-integration-085
slug: saas-billing-integration
title: Billing Integration Implementation Guide
---

### Purpose  
Draft an implementation guide for integrating third-party billing platforms with SaaS products.

### Jurisdiction  
United Kingdom.

### Professional Context  
Finance engineering and product teams.

### Base Prompt  
“You are a payments integration specialist. Create a **Billing Integration Guide** for **{{BillingPlatform}}** into **{{Product}}**, covering API authentication, webhook handling, and proration logic.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| BillingPlatform | Provider | “Stripe Billing” |
| Product | SaaS product | “CloudPrint” |

### Example Usage  
`/billing-guide BillingPlatform="Stripe Billing" Product="CloudPrint"`

### Risk Warnings  
* Currency rounding issues can create audit discrepancies—implement idempotent invoicing.  

> **Audience:** SaaS Finance Engineering

--------
---
prompt_id: tech-saas-multi-region-086
slug: saas-multi-region
title: Multi-Region Deployment Risk Assessment
---

### Purpose  
Assess risks of deploying SaaS services across multiple cloud regions for latency and compliance.

### Jurisdiction  
United Kingdom.

### Professional Context  
Cloud architects and compliance officers.

### Base Prompt  
“You are a cloud-risk analyst. Perform a **Multi-Region Deployment Assessment** for **{{Service}}**, evaluating latency impact, data-sovereignty, and cost.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Service | SaaS service | “StreamLogic” |

### Example Usage  
`/multi-region Service="StreamLogic"`

### Risk Warnings  
* Replication across jurisdictions can violate data-localisation laws—map customer data flows.  

> **Audience:** SaaS Cloud & Compliance

--------
---
prompt_id: tech-saas-openapi-standards-087
slug: saas-openapi-standards
title: OpenAPI Documentation Standards Prompt
---

### Purpose  
Define standards for documenting SaaS APIs using OpenAPI 3.x.

### Jurisdiction  
United Kingdom.

### Professional Context  
API product managers and technical writers.

### Base Prompt  
“You are an API documentation lead. Draft **OpenAPI Standards** for **{{APIName}}**, covering naming conventions, versioning, security schemes, and example payloads.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| APIName | API name | “PayFlow API” |

### Example Usage  
`/openapi-standards APIName="PayFlow API"`

### Risk Warnings  
* Missing example payloads impede developer adoption—track support tickets to iterate docs.  

> **Audience:** SaaS API & Docs teams

--------
---
prompt_id: tech-saas-api-rate-limit-088
slug: saas-api-rate-limit
title: API Rate-Limiting Strategy
---

### Purpose  
Create a scalable rate-limiting strategy for public SaaS APIs.

### Jurisdiction  
United Kingdom.

### Professional Context  
Platform engineers and product managers.

### Base Prompt  
“You are a platform architect. Design an **API Rate-Limiting Strategy** for **{{APIName}}**, including quota tiers, burst handling, and overage billing.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| APIName | Public API | “DataFetch API” |

### Example Usage  
`/rate-limit APIName="DataFetch API"`

### Risk Warnings  
* Overly restrictive limits frustrate partners—balance performance protection with customer needs.  

> **Audience:** SaaS Platform Engineering

--------
---
prompt_id: tech-saas-data-warehouse-089
slug: saas-data-warehouse
title: Customer Data-Warehouse Schema Plan
---

### Purpose  
Generate a schema plan for a customer-facing data warehouse (e.g., Snowflake) to deliver analytics exports.

### Jurisdiction  
United Kingdom.

### Professional Context  
Data engineering teams.

### Base Prompt  
“You are a data-warehouse architect. Draft a **Schema Plan** for **{{WarehouseName}}**, mapping SaaS event data to fact and dimension tables, with partitioning and RBAC.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| WarehouseName | Warehouse project | “CustomerInsightsDW” |

### Example Usage  
`/dw-schema WarehouseName="CustomerInsightsDW"`

### Risk Warnings  
* Exposing raw logs may leak PII—apply field-level masking before customer access.  

> **Audience:** SaaS Data Engineering

--------
---
prompt_id: tech-saas-anonymisation-090
slug: saas-anonymisation
title: Data Anonymisation Playbook
---

### Purpose  
Provide a playbook to anonymise SaaS usage data for analytics while preserving utility.

### Jurisdiction  
United Kingdom (UK-GDPR).

### Professional Context  
Data science and privacy teams.

### Base Prompt  
“You are a privacy engineer. Develop a **Data Anonymisation Playbook** for **{{Dataset}}** applying techniques like hashing, differential privacy, and aggregation.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Dataset | Data set name | “UserBehaviourEvents” |

### Example Usage  
`/anonymisation Dataset="UserBehaviourEvents"`

### Risk Warnings  
* Re-identification risk increases with external data joins—perform k-anonymity checks.  

> **Audience:** SaaS Data Science & Privacy

--------
---
prompt_id: tech-saas-cmp-implementation-091
slug: saas-cmp-implementation
title: Consent Management Platform Implementation
---

### Purpose  
Guide SaaS businesses through implementing a Consent Management Platform (CMP) across web and app surfaces.

### Jurisdiction  
United Kingdom (PECR & UK-GDPR).

### Professional Context  
Web engineering and privacy compliance teams.

### Base Prompt  
“You are a CMP implementation specialist. Draft an **Implementation Plan** for **{{CMPVendor}}** across **{{Surfaces}}**, including consent logging, A/B banner testing, and user preference centres.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| CMPVendor | CMP provider | “OneTrust” |
| Surfaces | Digital surfaces | “Web app & mobile app” |

### Example Usage  
`/cmp-plan CMPVendor="OneTrust" Surfaces="Web app & mobile app"`

### Risk Warnings  
* Inconsistent consent states across devices breach GDPR consent integrity—sync via user ID.  

> **Audience:** SaaS Web & Privacy teams

--------
---
prompt_id: tech-saas-cookie-banner-092
slug: saas-cookie-banner
title: Cookie Banner Design Checklist
---

### Purpose  
Generate a UX and legal compliance checklist for cookie-consent banners on SaaS marketing sites.

### Jurisdiction  
United Kingdom.

### Professional Context  
UX designers and legal reviewers.

### Base Prompt  
“You are a privacy-focused UX designer. Provide a **Cookie Banner Checklist** for **{{Site}}**, ensuring PECR compliance, accessibility, and conversion impact.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Site | Website domain | “saaspro.com” |

### Example Usage  
`/cookie-banner Site="saaspro.com"`

### Risk Warnings  
* Dark-pattern designs can attract ICO scrutiny—use equal prominence for Accept and Reject.  

> **Audience:** SaaS Marketing & UX

--------
---
prompt_id: tech-saas-contracting-playbook-093
slug: saas-contracting-playbook
title: SaaS Contracting Playbook
---

### Purpose  
Create an internal playbook for negotiating SaaS customer contracts, including fallback positions.

### Jurisdiction  
United Kingdom.

### Professional Context  
Legal and sales teams.

### Base Prompt  
“You are a SaaS contract counsel. Draft a **Contracting Playbook** covering key clauses (liability cap, SLA, DPA) with primary, fallback, and walk-away positions.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| None | – | – |

### Example Usage  
`/contracting-playbook`

### Risk Warnings  
* Sales must align with playbook to avoid unauthorised concessions—establish approval workflow.  

> **Audience:** SaaS Legal & Sales enablement

--------
---
prompt_id: tech-saas-third-party-risk-094
slug: saas-third-party-risk
title: Third-Party Risk Management Procedure
---

### Purpose  
Provide a procedure to assess and monitor third-party vendors critical to SaaS operations.

### Jurisdiction  
United Kingdom.

### Professional Context  
Risk, compliance, and procurement teams.

### Base Prompt  
“You are a third-party risk analyst. Draft a **Vendor Risk Procedure** for **{{CriticalityLevels}}**, including onboarding questionnaires, SLA monitoring, and exit plans.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| CriticalityLevels | Levels defined | “Critical, High, Moderate, Low” |

### Example Usage  
`/vendor-risk CriticalityLevels="Critical, High, Moderate, Low"`

### Risk Warnings  
* Inadequate monitoring of critical vendors undermines SOC 2 commitments—review quarterly.  

> **Audience:** SaaS Risk & Procurement

--------
---
prompt_id: tech-saas-procurement-policy-095
slug: saas-procurement-policy
title: SaaS Procurement Policy
---

### Purpose  
Draft an internal procurement policy tailored to subscription and cloud services.

### Jurisdiction  
United Kingdom.

### Professional Context  
Finance, legal, and operations teams.

### Base Prompt  
“You are a procurement policy consultant. Create a **SaaS Procurement Policy** setting spend thresholds, approval matrices, contractual standards, and renewal tracking.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| None | – | – |

### Example Usage  
`/procurement-policy`

### Risk Warnings  
* Shadow IT subscriptions outside policy increase cost and security risk—enforce centralised onboarding.  

> **Audience:** SaaS Finance & Procurement

--------
---
prompt_id: tech-saas-scalability-assess-096
slug: saas-scalability-assess
title: Platform Scalability Assessment
---

### Purpose  
Assess scalability of a SaaS platform under projected customer growth.

### Jurisdiction  
United Kingdom.

### Professional Context  
Engineering leadership and capacity-planning teams.

### Base Prompt  
“You are a scalability engineer. Conduct a **Scalability Assessment** for **{{GrowthScenario}}**, modelling CPU, memory, and network utilisation.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| GrowthScenario | Usage growth forecast | “5× traffic over 12 months” |

### Example Usage  
`/scalability-assessment GrowthScenario="5x traffic over 12 months"`

### Risk Warnings  
* Over-provisioning inflates cloud spend—optimise autoscaling thresholds.  

> **Audience:** SaaS Engineering & Finance

--------
---
prompt_id: tech-saas-support-tiers-097
slug: saas-support-tiers
title: Support Tier Definition Prompt
---

### Purpose  
Define customer support tiers (Standard, Premium, Enterprise) with response and resolution times.

### Jurisdiction  
United Kingdom.

### Professional Context  
Support operations and service delivery teams.

### Base Prompt  
“You are a SaaS support architect. Draft **Support Tier Definitions** for **{{Product}}**, including channel availability, SLAs, and escalation paths.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Product | SaaS product | “CodeStream” |

### Example Usage  
`/support-tiers Product="CodeStream"`

### Risk Warnings  
* Misaligned tier promises can breach enterprise SLAs—ensure cross-reference.  

> **Audience:** SaaS Support & Service Delivery

--------
---
prompt_id: tech-saas-hotfix-procedure-098
slug: saas-hotfix-procedure
title: Hotfix Deployment Procedure
---

### Purpose  
Provide a clear procedure for deploying hotfixes to production with minimal disruption.

### Jurisdiction  
United Kingdom.

### Professional Context  
DevOps and SRE teams.

### Base Prompt  
“You are a release-engineering lead. Create a **Hotfix Deployment Procedure** for **{{Service}}**, covering rollbacks, approvals, and customer comms.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Service | SaaS service | “LiveDocs” |

### Example Usage  
`/hotfix-procedure Service="LiveDocs"`

### Risk Warnings  
* Deploying hotfixes outside version control undermines audit trail—enforce tagged releases.  

> **Audience:** SaaS DevOps & SRE

--------
---
prompt_id: tech-saas-release-train-099
slug: saas-release-train
title: Release Train Schedule Prompt
---

### Purpose  
Design a structured release-train schedule (monthly/bi-weekly) for SaaS product updates.

### Jurisdiction  
United Kingdom.

### Professional Context  
Release management and engineering teams.

### Base Prompt  
“You are an agile release-train engineer. Draft a **Release Train Schedule** for **{{Cadence}}** releases, including freeze periods, regression testing, and comms milestones.”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Cadence | Release frequency | “Monthly” |

### Example Usage  
`/release-train Cadence="Monthly"`

### Risk Warnings  
* Overlapping feature flags across trains can create technical debt—track flag lifecycle.  

> **Audience:** SaaS Release Management

--------
---
prompt_id: tech-saas-data-centre-strategy-100
slug: saas-data-centre-strategy
title: Cross-Border Data-Centre Strategy
---

### Purpose  
Develop a strategy for selecting and managing multiple data-centre regions to balance latency, cost, and compliance.

### Jurisdiction  
United Kingdom with global considerations.

### Professional Context  
Infrastructure strategy and compliance teams.

### Base Prompt  
“You are a cloud strategy consultant. Draft a **Data-Centre Strategy** for **{{Product}}**, evaluating region selection, failover policies, and regulatory constraints (GDPR, HIPAA, etc.).”

### Variables  
| Variable | Description | Example |
|----------|-------------|---------|
| Product | SaaS product | “SecureVault Cloud” |

### Example Usage  
`/data-centre-strategy Product="SecureVault Cloud"`

### Risk Warnings  
* Cross-border replication needs data transfer assessments—update DPA with subprocessors.  

> **Audience:** SaaS Infrastructure & Compliance
