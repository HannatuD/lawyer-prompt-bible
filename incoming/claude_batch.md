---
prompt_id: corp-drafting-sha-001
title: Share Purchase Agreement (E&W)
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [share-purchase, "m&a", warranties, corporate]
---

## Purpose
Generate a comprehensive share purchase agreement for the acquisition of a UK private limited company, including warranties, indemnities, and completion mechanics.

## Jurisdiction
England & Wales

## Professional Context
Used for the acquisition of shares in a private limited company, typically involving SMEs or mid-market transactions requiring detailed warranties and purchase price adjustments.

## Base Prompt
Draft a share purchase agreement under English law with:
- Purchaser: {{purchaser_name}}
- Seller: {{seller_name}}
- Target company: {{target_company}}
- Purchase price: £{{purchase_price}}
- Completion date: {{completion_date}}
- Warranty limitations: £{{warranty_cap}}
Include: conditions precedent, warranties schedule, disclosure letter mechanics, completion accounts mechanism, restrictive covenants, and tax covenant.

## Variables
- {{purchaser_name}} – full legal name of acquiring entity
- {{seller_name}} – full legal name of selling shareholder(s)
- {{target_company}} – name and company number
- {{purchase_price}} – total consideration in GBP
- {{completion_date}} – DD/MM/YYYY format
- {{warranty_cap}} – maximum warranty liability

## Example Usage
### Input
purchaser_name=Acquisition Holdings Ltd; seller_name=John Smith; target_company=Target Operations Ltd (12345678); purchase_price=5000000; completion_date=31/08/2025; warranty_cap=1000000

### Expected Output
SHARE PURCHASE AGREEMENT dated [date] between ACQUISITION HOLDINGS LTD (1) and JOHN SMITH (2) relating to the sale and purchase of shares in TARGET OPERATIONS LTD...

## Risk Warnings
⚠️ Warranty schedules must be tailored to specific business risks
⚠️ Tax clearances may be required pre-completion
⚠️ Consider separate disclosure letter and W&I insurance

### Audience: SME Business Owner
- This creates a legal contract for buying/selling company shares
- Key protections include warranties (promises about the business) and price adjustment mechanisms
- Always seek specialist M&A legal advice before signing
- Budget 4-8 weeks for negotiation process

--------

---
prompt_id: corp-reviewing-terms-002
title: B2B Terms Review Checklist
practice_area: corporate-commercial
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 30
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [terms-conditions, b2b, commercial, review]
---

## Purpose
Create a comprehensive checklist for reviewing business-to-business terms and conditions, identifying key risk areas and suggesting amendments.

## Jurisdiction
England & Wales

## Professional Context
Used when advising clients on supplier or customer standard terms, particularly for ongoing commercial relationships requiring balanced risk allocation.

## Base Prompt
Review the following B2B terms for {{client_name}} as {{client_role}}:
{{terms_text}}
Identify and assess:
- Payment terms and credit risk
- Liability limitations and indemnities
- IP ownership and licensing
- Termination rights
- Force majeure provisions
- GDPR compliance
- Dispute resolution mechanism
Provide risk rating (1-5) for each area and suggest protective amendments.

## Variables
- {{client_name}} – your client's business name
- {{client_role}} – "customer" or "supplier"
- {{terms_text}} – the terms to review

## Example Usage
### Input
client_name=Tech Solutions Ltd; client_role=customer; terms_text=[standard terms document]

### Expected Output
RISK ASSESSMENT SUMMARY
1. Payment Terms: Risk Level 3/5
   - 60-day payment terms unfavourable
   - Suggest: negotiate to 30 days...

## Risk Warnings
⚠️ Check incorporation of terms matches client's processes
⚠️ Consider industry-specific regulations
⚠️ Review insurance requirements against limitations

### Audience: SME Business Owner
- This tool reviews contracts to spot potential problems
- Focus on payment terms, liability caps, and exit rights
- Red flags: unlimited liability, no termination rights, one-sided indemnities
- Consider legal review for contracts over £50k annual value

--------

---
prompt_id: corp-analysis-duediligence-003
title: Legal Due Diligence Checklist
practice_area: corporate-commercial
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [due-diligence, m&a, acquisition, corporate]
---

## Purpose
Generate a comprehensive legal due diligence checklist for UK company acquisitions, covering all key risk areas and regulatory requirements.

## Jurisdiction
UK-wide

## Professional Context
Used in M&A transactions to systematically review target company's legal affairs, identify risks, and inform transaction structuring and pricing.

## Base Prompt
Create a legal due diligence checklist for acquiring {{target_type}} in {{industry_sector}}:
Structure by category:
1. Corporate structure and governance
2. Material contracts
3. Employment and pensions
4. Real estate
5. Intellectual property
6. Litigation and disputes
7. Regulatory compliance
8. Data protection
9. Environmental
10. Tax
For each category, list specific documents required and key risk indicators.

## Variables
- {{target_type}} – "private limited company" or "group structure"
- {{industry_sector}} – target's primary business sector

## Example Usage
### Input
target_type=private limited company; industry_sector=software development

### Expected Output
LEGAL DUE DILIGENCE CHECKLIST
1. CORPORATE STRUCTURE
   Documents required:
   - Certificate of incorporation
   - Articles of association
   - Statutory registers...

## Risk Warnings
⚠️ Tailor to transaction size and risk profile
⚠️ Consider warranty and indemnity insurance
⚠️ Check for change of control provisions

### Audience: SME Business Owner
- Due diligence = detailed investigation before buying a business
- Covers everything from contracts to employee issues
- Typically takes 4-6 weeks for SME deals
- Missing issues here can cost significantly post-acquisition

--------

---
prompt_id: corp-drafting-services-004
title: Professional Services Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [services, consulting, professional, b2b]
---

## Purpose
Draft a professional services agreement for B2B consulting or specialist services, with appropriate liability limitations and clear scope definition.

## Jurisdiction
England & Wales

## Professional Context
Used for engaging consultants, IT services, marketing agencies, or other professional service providers where clear deliverables and liability allocation are critical.

## Base Prompt
Draft a professional services agreement where {{service_provider}} provides {{service_type}} to {{client_name}}:
- Service term: {{term_length}}
- Fees: £{{fee_amount}} {{payment_frequency}}
- Notice period: {{notice_period}}
Include:
- Detailed services schedule
- IP ownership (work product to client)
- Confidentiality both ways
- Professional indemnity insurance requirement
- Liability cap at annual fees
- GDPR processor terms if applicable

## Variables
- {{service_provider}} – consultant/agency name
- {{client_name}} – customer name
- {{service_type}} – description of services
- {{term_length}} – "12 months" or "project basis"
- {{fee_amount}} – fee in GBP
- {{payment_frequency}} – "monthly" or "per milestone"
- {{notice_period}} – "30 days" typical

## Example Usage
### Input
service_provider=Digital Marketing Ltd; client_name=Retail Co; service_type=SEO and content marketing; term_length=12 months; fee_amount=5000; payment_frequency=monthly; notice_period=60 days

### Expected Output
PROFESSIONAL SERVICES AGREEMENT dated [date] between RETAIL CO ("Client") and DIGITAL MARKETING LTD ("Service Provider")...

## Risk Warnings
⚠️ Ensure service levels are measurable
⚠️ Check IR35 compliance for individual consultants
⚠️ Verify professional indemnity insurance levels

### Audience: SME Business Owner
- Protects both parties when hiring consultants/agencies
- Key terms: clear scope, payment terms, who owns the work
- Liability caps prevent unlimited exposure
- Include right to terminate if service is poor

--------

---
prompt_id: corp-summarising-contracts-005
title: Contract Portfolio Summary
practice_area: corporate-commercial
task_type: summarising
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [contracts, summary, portfolio, commercial]
---

## Purpose
Create an executive summary of a company's key commercial contracts, highlighting critical terms, renewal dates, and risk areas.

## Jurisdiction
UK-wide

## Professional Context
Used for board reporting, due diligence preparation, or contract management system implementation to understand contractual commitments and opportunities.

## Base Prompt
Summarise the following contracts for {{company_name}}:
{{contract_list}}
For each contract provide:
- Counterparty and contract type
- Key commercial terms (price, volume, exclusivity)
- Term and renewal provisions
- Termination rights and notice periods
- Key obligations and SLAs
- Liability and indemnity positions
- Change control mechanisms
- Risk rating (High/Medium/Low)
Create summary table and highlight top 5 risks/opportunities.

## Variables
- {{company_name}} – entity holding the contracts
- {{contract_list}} – list or details of contracts to review

## Example Usage
### Input
company_name=Services UK Ltd; contract_list=1. AWS hosting agreement 2. Salesforce license 3. Office lease...

### Expected Output
CONTRACT PORTFOLIO SUMMARY - SERVICES UK LTD
[Table with columns: Contract, Counterparty, Annual Value, Expiry, Notice Period, Key Terms, Risk Level]

## Risk Warnings
⚠️ Check for cross-default provisions
⚠️ Identify auto-renewal contracts requiring action
⚠️ Note any change of control restrictions

### Audience: SME Business Owner
- Gives helicopter view of all major contracts
- Helps spot upcoming renewals and termination windows
- Identifies contracts needing renegotiation
- Essential for exit planning or investment rounds

--------

---
prompt_id: corp-drafting-shareholders-006
title: Shareholders Agreement (Scotland)
practice_area: corporate-commercial
task_type: drafting
jurisdiction: scotland
complexity: advanced
time_estimate: 90
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [shareholders, investment, corporate, scotland]
---

## Purpose
Draft a shareholders agreement under Scots law for a private limited company with multiple investor classes and founder protections.

## Jurisdiction
Scotland

## Professional Context
Used when structuring investment rounds or formalising shareholder relationships in Scottish companies, particularly for growth businesses with external investment.

## Base Prompt
Draft a shareholders agreement under Scots law for {{company_name}} between:
- Founders: {{founders}} ({{founder_shares}}% ordinary shares)
- Investors: {{investors}} ({{investor_shares}}% preference shares)
Include:
- Board composition ({{board_structure}})
- Reserved matters requiring investor consent
- Pre-emption rights on transfer and allotment
- Tag-along and drag-along provisions
- Good and bad leaver provisions
- Dividend policy
- Exit and liquidity provisions
- Scottish law and jurisdiction clause

## Variables
- {{company_name}} – Scottish company name and SC number
- {{founders}} – names of founding shareholders
- {{founder_shares}} – percentage held by founders
- {{investors}} – names of investor entities
- {{investor_shares}} – percentage held by investors
- {{board_structure}} – e.g. "5 directors: 2 founders, 2 investors, 1 independent"

## Example Usage
### Input
company_name=Tech Innovations Scotland Ltd (SC123456); founders=A MacLeod, B Campbell; founder_shares=60; investors=Highland Ventures LLP; investor_shares=40; board_structure=3 directors: 2 founders, 1 investor

### Expected Output
SHAREHOLDERS AGREEMENT dated [date] among TECH INNOVATIONS SCOTLAND LTD (SC123456) and [parties]...

## Risk Warnings
⚠️ Consider Scots law differences in enforcement
⚠️ Align with articles of association
⚠️ HMRC clearances for EMI schemes

### Audience: SME Business Owner
- Legal contract between company owners setting rules
- Covers who controls decisions and how shares can be sold
- Protects minority shareholders and sets exit routes
- Essential when taking external investment

--------

---
prompt_id: corp-reviewing-distribution-007
title: Distribution Agreement Review
practice_area: corporate-commercial
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [distribution, agency, commercial, international]
---

## Purpose
Review and analyse distribution agreements for UK companies, identifying key commercial and legal risks in appointment of distributors.

## Jurisdiction
England & Wales

## Professional Context
Used when appointing or reviewing distribution arrangements, particularly for manufacturers or IP owners expanding market reach through third parties.

## Base Prompt
Review distribution agreement for {{principal_name}} appointing {{distributor_name}} for {{territory}}:
Assess and report on:
- Exclusivity and territory definitions
- Minimum purchase/sales commitments
- Pricing and payment terms
- Marketing obligations and brand guidelines
- Product liability and indemnities
- IP licensing and trademark usage
- Competition law compliance
- Termination and post-term provisions
- Stock disposal on termination
Provide commercial recommendations and amendment suggestions.

## Variables
- {{principal_name}} – manufacturer/supplier name
- {{distributor_name}} – appointed distributor
- {{territory}} – geographic scope

## Example Usage
### Input
principal_name=UK Manufacturers Ltd; distributor_name=European Sales GmbH; territory=Germany and Austria

### Expected Output
DISTRIBUTION AGREEMENT REVIEW
Principal: UK Manufacturers Ltd
Distributor: European Sales GmbH
Territory: Germany and Austria

KEY FINDINGS:
1. Exclusivity: Exclusive appointment but no minimum commitments - HIGH RISK...

## Risk Warnings
⚠️ Check competition law for exclusive territories
⚠️ Consider VAT and customs implications
⚠️ Review product liability insurance requirements

### Audience: SME Business Owner
- Reviews deals with companies selling your products
- Key issues: exclusive rights vs performance obligations
- Protections needed: minimum sales, brand control, easy exit
- Consider pilot period before exclusive arrangements

--------

---
prompt_id: corp-drafting-jv-008
title: Joint Venture Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [joint-venture, partnership, corporate, commercial]
---

## Purpose
Draft a comprehensive joint venture agreement for two parties establishing a new business venture with shared ownership and control.

## Jurisdiction
England & Wales

## Professional Context
Used when two or more businesses collaborate on a specific project or ongoing business, requiring clear governance, funding, and exit arrangements.

## Base Prompt
Draft a joint venture agreement between {{party_a}} and {{party_b}} to establish {{jv_purpose}}:
- JV vehicle: {{structure_type}}
- Ownership split: {{party_a_share}}% / {{party_b_share}}%
- Initial funding: £{{initial_capital}}
Include:
- Business plan and objectives
- Board and management structure
- Funding and cash calls
- Deadlock resolution mechanisms
- Non-compete and exclusivity
- IP contributions and ownership
- Profit distribution policy
- Exit mechanisms (IPO, trade sale, buy-out)
- Dissolution triggers and procedures

## Variables
- {{party_a}} – first JV partner name
- {{party_b}} – second JV partner name
- {{jv_purpose}} – business purpose of JV
- {{structure_type}} – "new company" or "contractual JV"
- {{party_a_share}} – party A's percentage
- {{party_b_share}} – party B's percentage
- {{initial_capital}} – starting capital amount

## Example Usage
### Input
party_a=Tech Corp Ltd; party_b=Retail Holdings Plc; jv_purpose=online marketplace for specialty goods; structure_type=new company; party_a_share=50; party_b_share=50; initial_capital=500000

### Expected Output
JOINT VENTURE AGREEMENT dated [date] between TECH CORP LTD and RETAIL HOLDINGS PLC...

## Risk Warnings
⚠️ Consider regulatory approvals (competition law)
⚠️ Align accounting treatment with structure
⚠️ Plan for deadlock and relationship breakdown

### Audience: SME Business Owner
- Legal framework for business partnership
- Covers ownership, control, funding, and exit
- Critical: deadlock breaking and exit rights
- Usually needs 2-3 months to negotiate properly

--------

---
prompt_id: corp-analysis-acquisition-009
title: Asset vs Share Purchase Analysis
practice_area: corporate-commercial
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [acquisition, asset-purchase, share-purchase, tax]
---

## Purpose
Analyse the legal and tax implications of structuring an acquisition as asset purchase versus share purchase from buyer perspective.

## Jurisdiction
UK-wide

## Professional Context
Used in early stages of acquisition planning to determine optimal deal structure considering liability exposure, tax efficiency, and commercial objectives.

## Base Prompt
Compare asset purchase vs share purchase for acquiring {{target_business}}:
- Purchase price: £{{purchase_price}}
- Target structure: {{company_structure}}
- Key assets: {{asset_types}}
- Employee numbers: {{employee_count}}
- Property interests: {{property_status}}
Analyse:
1. Liability exposure differences
2. Tax implications (stamp duty, VAT, corporation tax)
3. Employee transfer (TUPE) considerations
4. Pension obligations
5. Contract/permit transfers
6. Warranty and indemnity requirements
7. Due diligence scope
Provide recommendation with rationale.

## Variables
- {{target_business}} – business sector and name
- {{purchase_price}} – acquisition value
- {{company_structure}} – "single company" or "group"
- {{asset_types}} – main assets involved
- {{employee_count}} – number of employees
- {{property_status}} – "owned", "leased" or "none"

## Example Usage
### Input
target_business=software company; purchase_price=2000000; company_structure=single company; asset_types=IP, customer contracts, equipment; employee_count=25; property_status=leased

### Expected Output
ACQUISITION STRUCTURE ANALYSIS
Target: Software company
Price: £2,000,000

RECOMMENDATION: Asset purchase preferred
KEY FACTORS:
1. Clean liability position...

## Risk Warnings
⚠️ Consider hidden liabilities in share purchases
⚠️ Asset purchases may trigger change of control
⚠️ TUPE applies regardless of structure

### Audience: SME Business Owner
- Two ways to buy a business: buy the company (shares) or buy its assets
- Share purchase = you get everything (including problems)
- Asset purchase = pick what you want, leave liabilities
- Tax treatment differs significantly

--------

---
prompt_id: corp-drafting-franchise-010
title: Master Franchise Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 90
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [franchise, licensing, commercial, ip]
---

## Purpose
Draft a master franchise agreement for UK territory, granting rights to develop and sub-franchise a business format franchise system.

## Jurisdiction
England & Wales

## Professional Context
Used when appointing a master franchisee to develop a franchise network within UK, requiring careful balance of control, support, and commercial terms.

## Base Prompt
Draft a master franchise agreement where {{franchisor}} grants {{master_franchisee}} exclusive rights to develop {{franchise_system}} in {{territory}}:
- Development schedule: {{min_outlets}} outlets over {{dev_period}} years
- Master franchise fee: £{{master_fee}}
- Ongoing fees: {{royalty_rate}}% of sub-franchise revenues
Include:
- Grant of rights and exclusivity
- Development obligations and remedies
- Sub-franchising standards and approval
- Training and support obligations
- Marketing fund contributions
- IP licensing and brand standards
- Product supply arrangements
- Termination and consequences
- Post-term restrictions

## Variables
- {{franchisor}} – franchise system owner
- {{master_franchisee}} – UK developer
- {{franchise_system}} – brand/business name
- {{territory}} – geographic scope in UK
- {{min_outlets}} – minimum outlets to develop
- {{dev_period}} – development timeframe
- {{master_fee}} – upfront fee
- {{royalty_rate}} – ongoing percentage

## Example Usage
### Input
franchisor=Global Food Brands Inc; master_franchisee=UK Franchise Partners Ltd; franchise_system=QuickBite Restaurants; territory=United Kingdom; min_outlets=50; dev_period=5; master_fee=500000; royalty_rate=3

### Expected Output
MASTER FRANCHISE AGREEMENT dated [date] between GLOBAL FOOD BRANDS INC ("Franchisor") and UK FRANCHISE PARTNERS LTD ("Master Franchisee")...

## Risk Warnings
⚠️ Consider BFA membership and code compliance
⚠️ Ensure realistic development obligations
⚠️ Plan for sub-franchisee failures

### Audience: SME Business Owner
- Gives rights to develop a franchise brand in UK
- You recruit and manage sub-franchisees
- Revenue from sub-franchise fees minus royalties to franchisor
- Major commitment: typically 10-20 year terms

--------

---
prompt_id: corp-reviewing-licensing-011
title: Software Licensing Terms Review
practice_area: corporate-commercial
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 35
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [software, licensing, saas, technology]
---

## Purpose
Review enterprise software licensing agreements identifying key commercial and legal risks for UK businesses.

## Jurisdiction
UK-wide

## Professional Context
Used when procuring significant software licenses or SaaS subscriptions, particularly for business-critical systems requiring careful risk assessment.

## Base Prompt
Review software license agreement for {{licensee_name}} licensing {{software_name}} from {{vendor_name}}:
- License type: {{license_model}}
- Annual cost: £{{annual_fee}}
- User/usage scope: {{scope}}
Evaluate:
- License grant adequacy for intended use
- Warranty and support commitments
- SLA and remedy provisions
- Data protection and security
- Liability limitations and indemnities
- Price escalation and benchmarking
- Termination and data retrieval
- Audit rights and compliance
- Source code escrow needs
Rate each area and provide negotiation priorities.

## Variables
- {{licensee_name}} – customer company name
- {{software_name}} – software product/service
- {{vendor_name}} – software supplier
- {{license_model}} – "perpetual", "subscription", or "SaaS"
- {{annual_fee}} – yearly cost
- {{scope}} – "enterprise-wide" or specific limits

## Example Usage
### Input
licensee_name=Financial Services Ltd; software_name=CRM Platform Pro; vendor_name=Tech Solutions Inc; license_model=SaaS; annual_fee=50000; scope=100 users

### Expected Output
SOFTWARE LICENSE REVIEW - FINANCIAL SERVICES LTD
Software: CRM Platform Pro (SaaS)
Vendor: Tech Solutions Inc
Annual Cost: £50,000

RISK ASSESSMENT:
1. Data Protection - HIGH RISK
   - No UK data residency commitment...

## Risk Warnings
⚠️ Check data location for regulated industries
⚠️ Verify disaster recovery provisions
⚠️ Consider vendor lock-in risks

### Audience: SME Business Owner
- Reviews software contracts before signing
- Key areas: costs, data security, exit rights
- Watch for: auto-renewals, price increases, data lock-in
- Consider escrow for mission-critical systems

--------

---
prompt_id: corp-drafting-supply-012
title: Manufacturing Supply Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [supply, manufacturing, commercial, b2b]
---

## Purpose
Draft a manufacturing supply agreement for UK buyer procuring goods from manufacturer with quality, delivery, and pricing protections.

## Jurisdiction
England & Wales

## Professional Context
Used for establishing long-term supply relationships for manufactured goods, particularly where buyer requires security of supply and quality standards.

## Base Prompt
Draft a manufacturing supply agreement where {{manufacturer}} supplies {{products}} to {{buyer}}:
- Term: {{contract_term}} with {{renewal_option}}
- Minimum order: {{min_order}} units/month
- Pricing: £{{unit_price}} with {{price_review}}
Include:
- Detailed product specifications
- Quality standards and inspection rights
- Delivery terms (Incoterms 2020)
- Lead times and buffer stock
- Forecasting and ordering process
- Price adjustment mechanism
- Force majeure and allocation
- Product liability and recalls
- IP and confidentiality
- Termination and wind-down

## Variables
- {{manufacturer}} – supplier company name
- {{buyer}} – purchasing company name
- {{products}} – goods description
- {{contract_term}} – initial term length
- {{renewal_option}} – renewal provisions
- {{min_order}} – minimum monthly quantity
- {{unit_price}} – price per unit
- {{price_review}} – "annual review" or "fixed term"

## Example Usage
### Input
manufacturer=Precision Parts Ltd; buyer=Assembly Co UK; products=automotive components; contract_term=3 years; renewal_option=annual renewals; min_order=5000; unit_price=25; price_review=annual CPI adjustment

### Expected Output
MANUFACTURING SUPPLY AGREEMENT dated [date] between PRECISION PARTS LTD ("Manufacturer") and ASSEMBLY CO UK ("Buyer")...

## Risk Warnings
⚠️ Consider Brexit impact on EU suppliers
⚠️ Build in supply chain disruption provisions
⚠️ Verify insurance requirements adequate

### Audience: SME Business Owner
- Secures your supply of manufactured goods
- Protects on: price, quality, delivery times
- Include flexibility for demand changes
- Plan for supplier problems with alternatives

--------

---
prompt_id: corp-summarising-investment-013
title: Investment Terms Summary
practice_area: corporate-commercial
task_type: summarising
jurisdiction: uk-wide
complexity: advanced
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [investment, termsheet, venture-capital, equity]
---

## Purpose
Summarise complex investment term sheets or agreements into clear executive summary highlighting key commercial terms and founder implications.

## Jurisdiction
UK-wide

## Professional Context
Used to quickly understand and compare investment offers, particularly for founders and boards evaluating venture capital or private equity proposals.

## Base Prompt
Summarise the investment terms for {{company_name}} receiving investment from {{investor_name}}:
{{termsheet_content}}
Extract and explain:
- Investment amount and structure
- Pre/post-money valuation
- Liquidation preferences and participation
- Board composition changes
- Protective provisions/consent rights
- Anti-dilution provisions
- Vesting and good/bad leaver terms
- Exit rights (drag/tag/ROFR)
- Information rights
Create comparison table of key terms and highlight founder-unfriendly provisions.

## Variables
- {{company_name}} – target company
- {{investor_name}} – investing entity
- {{termsheet_content}} – term sheet text

## Example Usage
### Input
company_name=TechStart Ltd; investor_name=Growth Capital Partners; termsheet_content=[full term sheet text]

### Expected Output
INVESTMENT SUMMARY - TECHSTART LTD
Investor: Growth Capital Partners
Investment: £5M Series A

KEY TERMS:
- Pre-money valuation: £15M
- Investor stake: 25%...

## Risk Warnings
⚠️ Legal review essential before signing
⚠️ Model dilution scenarios
⚠️ Understand veto rights impact

### Audience: SME Business Owner
- Breaks down complex investment offers
- Shows what you're giving up for funding
- Key issues: control, dilution, exit restrictions
- Always model various exit scenarios

--------

---
prompt_id: corp-drafting-consultancy-014
title: IT Consultancy Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [consultancy, it-services, professional-services, ir35]
---

## Purpose
Draft IR35-compliant IT consultancy agreement for genuine business-to-business consulting services with appropriate commercial terms.

## Jurisdiction
England & Wales

## Professional Context
Used for engaging IT consultants through limited companies where demonstrating genuine business services (not disguised employment) is critical.

## Base Prompt
Draft an IT consultancy agreement between {{client}} and {{consultancy_company}} for {{consultant_name}} to provide {{services}}:
- Duration: {{contract_length}}
- Fee: £{{daily_rate}} per day
- Location: {{work_location}}
IR35 considerations:
- Right of substitution (qualified)
- No mutuality of obligation
- Consultancy controls how services delivered
- Financial risk on consultancy
- Equipment provided by consultancy
- Multiple client capability
- Fixed project deliverables
Include IP assignment, confidentiality, professional indemnity insurance.

## Variables
- {{client}} – end client company
- {{consultancy_company}} – consultant's limited company
- {{consultant_name}} – individual consultant
- {{services}} – IT services description
- {{contract_length}} – project duration
- {{daily_rate}} – consultancy rate
- {{work_location}} – "client site", "remote", or "mixed"

## Example Usage
### Input
client=Finance Corp UK; consultancy_company=Tech Consulting Ltd; consultant_name=Jane Developer; services=system architecture review and optimization; contract_length=6 months; daily_rate=650; work_location=mixed

### Expected Output
CONSULTANCY AGREEMENT dated [date] between FINANCE CORP UK ("Client") and TECH CONSULTING LTD ("Consultancy")...

## Risk Warnings
⚠️ Ensure working practices match contract
⚠️ Keep evidence of business-to-business relationship
⚠️ Review if legislation changes

### Audience: SME Business Owner
- Engages IT contractors through their companies
- Must prove real business service (not employment)
- Key: consultant controls how work done
- Keep records showing independent operation

--------

---
prompt_id: corp-analysis-brexit-015
title: Brexit Contract Impact Analysis
practice_area: corporate-commercial
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 50
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [brexit, eu-trade, commercial, regulatory]
---

## Purpose
Analyse commercial contracts for Brexit-related impacts and recommend amendments to address new UK-EU trade arrangements.

## Jurisdiction
UK-wide

## Professional Context
Used to review existing contracts with EU counterparties identifying areas requiring update post-Brexit transition including regulatory divergence.

## Base Prompt
Analyse {{contract_type}} between UK entity {{uk_party}} and EU entity {{eu_party}} for Brexit impacts:
Key areas to assess:
- Governing law and jurisdiction clauses
- Recognition of judgments
- Customs and Incoterms updates
- VAT and tax changes
- Regulatory compliance divergence
- Data transfer mechanisms
- Freedom of movement impacts
- Product standards and CE/UKCA marking
- Tariff and quota implications
- Force majeure coverage
Provide specific amendment recommendations and risk mitigation strategies.

## Variables
- {{contract_type}} – type of commercial agreement
- {{uk_party}} – UK contracting entity
- {{eu_party}} – EU contracting entity

## Example Usage
### Input
contract_type=distribution agreement; uk_party=UK Manufacturer Ltd; eu_party=German Distributors GmbH

### Expected Output
BREXIT IMPACT ANALYSIS
Contract: Distribution Agreement
Parties: UK Manufacturer Ltd / German Distributors GmbH

CRITICAL ISSUES IDENTIFIED:
1. VAT Treatment - HIGH IMPACT
   - Previous EU simplified procedures no longer apply...

## Risk Warnings
⚠️ Check specific sector agreements
⚠️ Monitor regulatory divergence
⚠️ Consider Northern Ireland protocol

### Audience: SME Business Owner
- Reviews how Brexit affects your EU contracts
- Key changes: customs, VAT, regulations
- May need new terms for smooth trade
- Consider local EU entity for major markets

--------

---
prompt_id: lit-drafting-poc-016
title: Particulars of Claim (County Court)
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, county-court, debt-claim, particulars]
---

## Purpose
Draft particulars of claim for straightforward County Court money claim following CPR requirements and Practice Direction 16.

## Jurisdiction
England & Wales

## Professional Context
Used for initiating County Court proceedings for debt recovery, breach of contract, or other money claims under £100,000.

## Base Prompt
Draft particulars of claim for {{claimant_name}} against {{defendant_name}} for {{claim_type}}:
- Amount claimed: £{{principal_amount}}
- Interest basis: {{interest_basis}}
- Key dates: {{key_dates}}
- Brief facts: {{fact_summary}}
Structure per CPR PD 16:
1. Parties and jurisdiction
2. Chronological factual background
3. Legal basis of claim
4. Breach/default by defendant
5. Loss and damage
6. Interest calculation
7. Prayer for relief
Include statement of truth wording.

## Variables
- {{claimant_name}} – claiming party
- {{defendant_name}} – defending party
- {{claim_type}} – "unpaid invoice", "breach of contract", etc.
- {{principal_amount}} – main sum claimed
- {{interest_basis}} – "contractual at X%" or "statutory"
- {{key_dates}} – relevant chronology
- {{fact_summary}} – brief factual background

## Example Usage
### Input
claimant_name=ABC Services Ltd; defendant_name=XYZ Customer Ltd; claim_type=unpaid invoices; principal_amount=25000; interest_basis=statutory (8%); key_dates=invoices dated 1/1/25-31/3/25, payment due 30 days; fact_summary=IT support services provided, invoices rendered, payment not received despite demands

### Expected Output
IN THE COUNTY COURT AT [COURT]
BETWEEN:
ABC SERVICES LTD (Claimant)
and
XYZ CUSTOMER LTD (Defendant)

PARTICULARS OF CLAIM
1. The Claimant is a limited company providing IT support services...

## Risk Warnings
⚠️ Comply with pre-action protocol first
⚠️ Check limitation periods
⚠️ Consider ADR requirements

### Audience: SME Business Owner
- Formal document starting court proceedings
- Must include all key facts and legal basis
- Get it right first time - amendments cost money
- Consider legal advice for claims over £10k

--------

---
prompt_id: lit-reviewing-defence-017
title: Defence Review and Response Strategy
practice_area: litigation
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, defence, strategy, county-court]
---

## Purpose
Review a defence filed in civil proceedings and develop response strategy including potential Part 18 requests and reply considerations.

## Jurisdiction
England & Wales

## Professional Context
Used when analysing opponent's defence to identify weaknesses, admissions, and areas requiring clarification or challenge.

## Base Prompt
Review the following defence filed in {{case_name}}:
{{defence_text}}
Analyse and report on:
1. Admissions made (express and implied)
2. Bare denials requiring evidence
3. Positive case advanced
4. Procedural defects
5. Limitation/statutory defences
6. Contributory negligence claims
7. Set-off or counterclaim
8. Areas needing clarification
Recommend:
- Part 18 requests needed
- Key evidence to obtain
- Witness requirements
- Whether to file reply

## Variables
- {{case_name}} – case title/reference
- {{defence_text}} – the defence document

## Example Usage
### Input
case_name=ABC Ltd v XYZ Ltd; defence_text=[full defence document]

### Expected Output
DEFENCE ANALYSIS - ABC LTD V XYZ LTD

ADMISSIONS IDENTIFIED:
1. Contract existence (para 3)
2. Some services provided (para 7)...

STRATEGIC RECOMMENDATIONS:
1. Part 18 Request for:
   - Clarification of "defective performance"...

## Risk Warnings
⚠️ Note deadline for reply (14 days)
⚠️ Check for amendments to statements of case
⚠️ Consider costs implications of challenges

### Audience: SME Business Owner
- Analyses opponent's response to your claim
- Identifies what they admit vs deny
- Highlights weak points to attack
- Guides evidence needed to win

--------

---
prompt_id: lit-drafting-witness-018
title: Witness Statement Template
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, witness-statement, evidence, trial]
---

## Purpose
Create witness statement template complying with CPR Practice Direction 32 for use in civil proceedings.

## Jurisdiction
England & Wales

## Professional Context
Used for preparing witness evidence in civil litigation, ensuring compliance with formal requirements and effective presentation of evidence.

## Base Prompt
Draft a witness statement template for {{witness_name}} in {{case_name}} covering {{subject_matter}}:
Structure per PD 32:
1. Formal heading with case details
2. Witness details and qualification to give evidence
3. Source of information and belief
4. Chronological factual account
5. Reference to exhibited documents
6. Opinion evidence (if expert)
7. Statement of truth
Key events: {{key_events}}
Documents to exhibit: {{exhibits}}
Ensure:
- First person narrative
- Factual not argumentative
- Clear paragraph numbering
- Proper exhibit referencing

## Variables
- {{witness_name}} – person giving evidence
- {{case_name}} – case title and number
- {{subject_matter}} – what evidence covers
- {{key_events}} – important dates/events
- {{exhibits}} – documents to attach

## Example Usage
### Input
witness_name=John Smith; case_name=ABC Ltd v XYZ Ltd (Claim No. 123456); subject_matter=contract negotiations and performance; key_events=meetings on 1/1/25, contract signed 15/1/25, problems arose 1/3/25; exhibits=contract, emails, meeting notes

### Expected Output
IN THE COUNTY COURT AT [LOCATION]
Claim No. 123456
BETWEEN:
ABC LTD (Claimant)
and
XYZ LTD (Defendant)

WITNESS STATEMENT OF JOHN SMITH

I, JOHN SMITH, of [address], Company Director, say as follows:...

## Risk Warnings
⚠️ Witness must read and sign personally
⚠️ False statements risk contempt proceedings
⚠️ Keep to relevant factual evidence

### Audience: SME Business Owner
- Your written evidence for court
- Tells your story in numbered paragraphs
- Attach key documents as exhibits
- Must be truthful - false statements are criminal

--------

---
prompt_id: lit-analysis-settlement-019
title: Settlement Agreement Analysis
practice_area: litigation
task_type: analysis
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, settlement, adr, dispute-resolution]
---

## Purpose
Analyse proposed settlement terms in litigation matter evaluating commercial merit against litigation risks and costs.

## Jurisdiction
UK-wide

## Professional Context
Used during settlement negotiations to objectively assess proposals against likely court outcomes, costs, and commercial objectives.

## Base Prompt
Analyse settlement proposal in {{case_name}}:
- Claim value: £{{claim_amount}}
- Settlement offer: £{{offer_amount}}
- Stage of proceedings: {{case_stage}}
- Costs to date: £{{costs_incurred}}
- Estimated future costs: £{{future_costs}}
Evaluate:
1. Percentage recovery vs claim
2. Net recovery after costs
3. Litigation risk assessment
4. Time value of money
5. Enforcement risks
6. Precedent value
7. Confidentiality benefits
8. Part 36 implications
Provide recommendation with reasoning.

## Variables
- {{case_name}} – case reference
- {{claim_amount}} – full claim value
- {{offer_amount}} – settlement proposed
- {{case_stage}} – "pre-action", "pleadings", "disclosure", etc.
- {{costs_incurred}} – costs spent so far
- {{future_costs}} – estimated costs to trial

## Example Usage
### Input
case_name=ABC v XYZ; claim_amount=100000; offer_amount=65000; case_stage=after disclosure; costs_incurred=25000; future_costs=40000

### Expected Output
SETTLEMENT ANALYSIS - ABC V XYZ

FINANCIAL ANALYSIS:
- Claim: £100,000
- Offer: £65,000 (65% of claim)
- Net recovery: £40,000 after costs to date...

RECOMMENDATION: Accept offer
REASONING:
1. Strong recovery percentage...

## Risk Warnings
⚠️ Consider Part 36 costs consequences
⚠️ Factor in enforcement difficulties
⚠️ Evaluate precedent implications

### Audience: SME Business Owner
- Weighs settlement offer vs fighting on
- Considers legal costs eating recovery
- Factors time, stress, and certainty
- Often better to settle for reasonable amount

--------

---
prompt_id: lit-drafting-directions-020
title: Directions Questionnaire
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, directions, case-management, procedure]
---

## Purpose
Complete directions questionnaire for case management in County Court proceedings ensuring appropriate track allocation.

## Jurisdiction
England & Wales

## Professional Context
Used after defence filed to inform court about case complexity, evidence needs, and preferred case management directions.

## Base Prompt
Complete directions questionnaire for {{party_name}} in {{case_name}}:
- Claim value: £{{claim_value}}
- Complexity: {{complexity_level}}
- Witnesses: {{witness_count}}
- Expert needed: {{expert_required}}
- Disclosure extent: {{disclosure_scope}}
- Trial estimate: {{trial_length}}
Address:
A. Settlement attempts/ADR
B. Court location preference
C. Track allocation views
D. Disclosure proposals
E. Witness evidence
F. Expert evidence needs
G. Trial readiness timeline
H. Costs budget (if multi-track)

## Variables
- {{party_name}} – your client's name
- {{case_name}} – case title
- {{claim_value}} – amount in dispute
- {{complexity_level}} – "straightforward", "moderate", "complex"
- {{witness_count}} – number of witnesses
- {{expert_required}} – "yes" or "no" and field
- {{disclosure_scope}} – "standard" or "specific"
- {{trial_length}} – estimated days

## Example Usage
### Input
party_name=ABC Ltd; case_name=ABC v XYZ; claim_value=75000; complexity_level=moderate; witness_count=3; expert_required=yes - accounting; disclosure_scope=standard; trial_length=2 days

### Expected Output
DIRECTIONS QUESTIONNAIRE
Case: ABC Ltd v XYZ Ltd

A. SETTLEMENT
1. ADR attempted: Yes - without prejudice meeting on [date]
2. Further ADR: Willing to consider mediation...

## Risk Warnings
⚠️ Accurate time estimates crucial
⚠️ Track allocation affects costs rules
⚠️ Consider proportionality

### Audience: SME Business Owner
- Tells court what's needed to prepare for trial
- Affects which track (and costs rules) apply
- Be realistic about time and evidence needs
- Court relies on this for scheduling

--------

---
prompt_id: lit-summarising-bundle-021
title: Trial Bundle Index
practice_area: litigation
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, trial-bundle, evidence, procedure]
---

## Purpose
Create comprehensive index for trial bundle ensuring logical organisation and compliance with court requirements.

## Jurisdiction
England & Wales

## Professional Context
Used when preparing trial bundles, requiring systematic organisation of all case documents for efficient court reference.

## Base Prompt
Create trial bundle index for {{case_name}} organising these documents:
{{document_list}}
Structure per Practice Direction:
Section A: Pleadings
- Claim form
- Particulars of claim
- Defence
- Reply (if any)
Section B: Orders
- Case management orders
Section C: Evidence
- Witness statements
- Expert reports
Section D: Correspondence
- Key inter-party letters
Section E: Contract/Core documents
Provide:
- Logical pagination
- Clear descriptions
- Chronological ordering within sections
- Cross-reference table

## Variables
- {{case_name}} – case title
- {{document_list}} – all documents for inclusion

## Example Usage
### Input
case_name=ABC Ltd v XYZ Ltd; document_list=claim form, particulars, defence, CMC order, witness statements (3), contract, invoices, correspondence file

### Expected Output
TRIAL BUNDLE INDEX
ABC LTD v XYZ LTD
Claim No. 123456

SECTION A - PLEADINGS
A1-5: Claim Form (dated 1.1.25)
A6-15: Particulars of Claim
A16-25: Defence...

## Risk Warnings
⚠️ Include only admissible documents
⚠️ Check pagination accuracy
⚠️ Agree bundle with opponent

### Audience: SME Business Owner
- Organises all case documents for trial
- Judge uses this to find documents quickly
- Must be logical and complete
- Usually agreed with other side

--------

---
prompt_id: lit-drafting-application-022
title: Interim Application Notice
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, application, interim, procedure]
---

## Purpose
Draft application notice for common interim applications with supporting evidence requirements and draft order.

## Jurisdiction
England & Wales

## Professional Context
Used for making applications during proceedings such as summary judgment, security for costs, or specific disclosure.

## Base Prompt
Draft application notice for {{applicant}} seeking {{relief_sought}} in {{case_name}}:
- Legal basis: {{legal_grounds}}
- Evidence relied on: {{evidence_summary}}
- Time estimate: {{hearing_time}}
- Urgency: {{urgent_basis}}
Include:
1. Form N244 completion
2. Draft order sought
3. Supporting evidence outline
4. Legal basis summary
5. Costs position
Structure:
- Clear relief sought
- Grounds in numbered paragraphs
- Evidence referenced
- Time estimate justified

## Variables
- {{applicant}} – applying party
- {{relief_sought}} – what order seeking
- {{case_name}} – case reference
- {{legal_grounds}} – CPR rule/legal basis
- {{evidence_summary}} – supporting evidence
- {{hearing_time}} – estimated hearing length
- {{urgent_basis}} – if urgent, why

## Example Usage
### Input
applicant=ABC Ltd; relief_sought=summary judgment; case_name=ABC v XYZ; legal_grounds=CPR Part 24 - no real prospect of defence; evidence_summary=admissions in defence, clear documentary evidence; hearing_time=1 hour; urgent_basis=not urgent

### Expected Output
IN THE COUNTY COURT AT [LOCATION]
Claim No. 123456

APPLICATION NOTICE

The Applicant ABC Ltd applies for an order that:
1. Summary judgment be entered for the Claimant under CPR Part 24...

## Risk Warnings
⚠️ Serve with required notice period
⚠️ Include draft order
⚠️ File evidence in support

### Audience: SME Business Owner
- Formal request to court during case
- Must explain what you want and why
- Needs supporting evidence
- Other side gets to respond

--------

---
prompt_id: lit-reviewing-order-023
title: Court Order Compliance Review
practice_area: litigation
task_type: reviewing
jurisdiction: england-wales
complexity: basic
time_estimate: 25
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, court-orders, compliance, enforcement]
---

## Purpose
Review court orders to extract compliance requirements, deadlines, and consequences of breach.

## Jurisdiction
England & Wales

## Professional Context
Used to ensure full understanding and compliance with court orders, avoiding sanctions for breach.

## Base Prompt
Review court order in {{case_name}} dated {{order_date}}:
{{order_text}}
Extract and summarise:
1. Specific obligations on each party
2. Deadlines (with calendar dates)
3. Conditions precedent
4. Penal notices/contempt warnings
5. Cost orders
6. Permission to appeal deadline
7. Liberty to apply provisions
Create compliance checklist with:
- Action required
- Responsible party
- Deadline
- Consequences of breach
- Evidence of compliance needed

## Variables
- {{case_name}} – case reference
- {{order_date}} – date of order
- {{order_text}} – full order text

## Example Usage
### Input
case_name=ABC v XYZ; order_date=1/6/25; order_text=[full court order]

### Expected Output
ORDER COMPLIANCE CHECKLIST
Case: ABC v XYZ
Order Date: 1/6/25

CLAIMANT OBLIGATIONS:
1. File amended particulars
   Deadline: 4pm on 15/6/25
   Consequence: claim struck out...

## Risk Warnings
⚠️ Penal notices mean contempt risk
⚠️ Unless orders are strict
⚠️ Calculate dates carefully

### Audience: SME Business Owner
- Court orders must be followed exactly
- Missing deadlines can lose your case
- "Unless orders" = do it or case dismissed
- Keep evidence of compliance

--------

---
prompt_id: lit-analysis-costs-024
title: Costs Risk Assessment
practice_area: litigation
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 35
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, costs, risk-assessment, budgeting]
---

## Purpose
Analyse costs exposure in litigation including own costs, adverse costs risk, and Part 36 implications.

## Jurisdiction
England & Wales

## Professional Context
Used for advising clients on financial exposure in litigation and informing settlement decisions.

## Base Prompt
Assess costs position for {{party}} in {{case_name}}:
- Claim value: £{{claim_value}}
- Track: {{track}}
- Stage: {{current_stage}}
- Own costs to date: £{{own_costs}}
- Estimated future costs: £{{future_costs}}
- Part 36 offers: {{part36_position}}
Calculate:
1. Total own costs exposure
2. Adverse costs risk if lose
3. Irrecoverable costs if win
4. Part 36 consequences
5. Security for costs risk
6. Costs budget implications
7. ATE insurance benefits
Provide best/worst case scenarios.

## Variables
- {{party}} – claimant or defendant
- {{case_name}} – case reference
- {{claim_value}} – amount claimed
- {{track}} – small/fast/multi track
- {{current_stage}} – point in proceedings
- {{own_costs}} – costs incurred
- {{future_costs}} – costs to trial
- {{part36_position}} – any Part 36 offers

## Example Usage
### Input
party=Claimant; case_name=ABC v XYZ; claim_value=150000; track=multi-track; current_stage=after disclosure; own_costs=40000; future_costs=60000; part36_position=Defendant offered £80k 2 months ago

### Expected Output
COSTS RISK ASSESSMENT - ABC V XYZ

COSTS EXPOSURE SUMMARY:
Best case (win with costs):
- Recovery: £150,000
- Costs recovery (70%): £70,000...

## Risk Warnings
⚠️ Part 36 creates severe penalties
⚠️ Consider costs budget caps
⚠️ Factor proportionality test

### Audience: SME Business Owner
- Shows financial risks of litigation
- Winning doesn't mean recovering all costs
- Part 36 offers change costs dynamics
- Consider insurance for adverse costs

--------

---
prompt_id: lit-drafting-mediation-025
title: Mediation Position Statement
practice_area: litigation
task_type: drafting
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, mediation, adr, settlement]
---

## Purpose
Draft effective mediation position statement that advances settlement while maintaining litigation position if needed.

## Jurisdiction
UK-wide

## Professional Context
Used for mediation preparation, balancing openness for settlement with protection of litigation position.

## Base Prompt
Draft mediation position statement for {{party_name}} in {{dispute_description}}:
- Claim amount: £{{claim_amount}}
- Key issues: {{main_issues}}
- Settlement range: £{{min_settlement}} to £{{ideal_settlement}}
- Non-monetary terms: {{other_terms}}
Structure:
1. Brief case background
2. Key issues in dispute
3. Party's perspective on merits
4. Litigation risks acknowledged
5. Commercial drivers
6. Settlement parameters
7. Creative solutions
Tone: Constructive but protecting position
Mark "Without Prejudice Save as to Costs"

## Variables
- {{party_name}} – your client
- {{dispute_description}} – nature of dispute
- {{claim_amount}} – amount in dispute
- {{main_issues}} – key disagreement points
- {{min_settlement}} – minimum acceptable
- {{ideal_settlement}} – target settlement
- {{other_terms}} – non-monetary aspects

## Example Usage
### Input
party_name=ABC Ltd; dispute_description=construction defects claim; claim_amount=200000; main_issues=scope of defects, causation, quantum; min_settlement=120000; ideal_settlement=160000; other_terms=future work opportunity, payment terms

### Expected Output
WITHOUT PREJUDICE SAVE AS TO COSTS

MEDIATION POSITION STATEMENT
ABC LTD

1. BACKGROUND
This dispute arises from construction works completed in 2024...

## Risk Warnings
⚠️ Maintain without prejudice privilege
⚠️ Don't reveal bottom line
⚠️ Focus on interests not positions

### Audience: SME Business Owner
- Explains your case for mediator
- Shows willingness to settle
- Protects your litigation position
- Helps mediator find middle ground

--------

---
prompt_id: lit-analysis-limitation-026
title: Limitation Period Analysis
practice_area: litigation
task_type: analysis
jurisdiction: england-wales
complexity: advanced
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, limitation, time-limits, procedure]
---

## Purpose
Analyse limitation periods for potential claims ensuring proceedings commenced within statutory time limits.

## Jurisdiction
England & Wales

## Professional Context
Critical analysis required before commencing proceedings to ensure claims not time-barred under Limitation Act 1980.

## Base Prompt
Analyse limitation period for {{claim_type}} by {{claimant}} against {{defendant}}:
- Key dates: {{relevant_dates}}
- Basis of claim: {{claim_basis}}
- Knowledge date (if relevant): {{knowledge_date}}
- Defendant location: {{defendant_jurisdiction}}
Consider:
1. Primary limitation period
2. Date of accrual
3. Continuing breaches
4. Knowledge provisions (s.14A)
5. Fraud/concealment extension
6. Disability provisions
7. Acknowledgment/part payment
8. Foreign element issues
Calculate:
- Limitation expiry date
- Safety margin for issue
- Service requirements

## Variables
- {{claim_type}} – type of legal claim
- {{claimant}} – potential claimant
- {{defendant}} – potential defendant
- {{relevant_dates}} – key events/dates
- {{claim_basis}} – contract/tort/statute
- {{knowledge_date}} – when discovered claim
- {{defendant_jurisdiction}} – where defendant based

## Example Usage
### Input
claim_type=professional negligence; claimant=Tech Start Ltd; defendant=Accountants LLP; relevant_dates=advice given 1/3/2019, loss discovered 1/6/2024; claim_basis=negligent tax advice; knowledge_date=1/6/2024; defendant_jurisdiction=England

### Expected Output
LIMITATION ANALYSIS
Claim: Professional Negligence
Primary Period: 6 years from breach (1/3/2019)
Standard expiry: 1/3/2025

ALTERNATIVE PERIODS:
- S.14A knowledge: 3 years from 1/6/2024 = 1/6/2027...

## Risk Warnings
⚠️ Issue well before expiry
⚠️ Allow time for service
⚠️ Standstill agreements need care

### Audience: SME Business Owner
- Legal deadlines for bringing claims
- Miss deadline = lose right to claim
- Usually 6 years for contracts
- Shorter for some claims - act fast

--------

---
prompt_id: lit-drafting-scott-027
title: Scott Schedule Template
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, scott-schedule, construction, defects]
---

## Purpose
Create Scott Schedule for multi-item disputes (typically construction defects) enabling systematic item-by-item adjudication.

## Jurisdiction
England & Wales

## Professional Context
Used in construction disputes, dilapidations claims, and other multi-issue cases requiring itemised analysis of claims.

## Base Prompt
Create Scott Schedule for {{case_type}} in {{case_name}}:
Structure columns:
1. Item number
2. {{claimant_name}}'s description of {{item_type}}
3. {{claimant_name}}'s costing
4. {{defendant_name}}'s response
5. {{defendant_name}}'s costing
6. Court/Expert notes
For each item include:
- Clear description
- Location/reference
- Alleged breach
- Remedial work needed
- Cost breakdown
- Supporting evidence refs
Total items: {{item_count}}
Format as table suitable for ongoing use.

## Variables
- {{case_type}} – "construction defects", "dilapidations", etc.
- {{case_name}} – case reference
- {{claimant_name}} – claiming party
- {{defendant_name}} – defending party
- {{item_type}} – "defect", "breach", "disrepair"
- {{item_count}} – number of items

## Example Usage
### Input
case_type=construction defects; case_name=Owner v Builder Ltd; claimant_name=Property Owner; defendant_name=Builder Ltd; item_type=defect; item_count=25

### Expected Output
SCOTT SCHEDULE
Owner v Builder Ltd
Construction Defects Claim

[Table format]
Item | Owner's Description | Owner's Cost | Builder's Response | Builder's Cost | Notes
1 | Defective roof tiles allowing water ingress at grid ref A1-A5 | £5,000 | Admits defect but disputes extent | £2,000 | 

## Risk Warnings
⚠️ Agree format with opponent/court
⚠️ Keep descriptions objective
⚠️ Cross-reference to evidence

### Audience: SME Business Owner
- Systematic list of every disputed item
- Each side states their position
- Helps narrow real disputes
- Court works through item by item

--------

---
prompt_id: lit-reviewing-disclosure-028
title: Disclosure List Review
practice_area: litigation
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, disclosure, evidence, procedure]
---

## Purpose
Review opponent's disclosure list identifying missing documents, inspection requirements, and privilege challenges.

## Jurisdiction
England & Wales

## Professional Context
Used after standard disclosure to analyse opponent's document production and identify further disclosure needs.

## Base Prompt
Review disclosure list from {{disclosing_party}} in {{case_name}}:
{{disclosure_list}}
Analyse:
1. Documents disclosed vs issues in case
2. Obvious gaps or missing categories
3. Privilege claims appropriateness
4. Inspection withheld reasons
5. Date ranges covered
6. Control/possession issues
7. Electronic disclosure adequacy
Identify:
- Specific disclosure applications needed
- Documents to inspect urgently
- Privilege challenges
- Third party disclosure needs
Create action plan with deadlines.

## Variables
- {{disclosing_party}} – opponent's name
- {{case_name}} – case reference
- {{disclosure_list}} – their list of documents

## Example Usage
### Input
disclosing_party=XYZ Ltd; case_name=ABC v XYZ; disclosure_list=[N265 list of documents]

### Expected Output
DISCLOSURE REVIEW - ABC V XYZ
Disclosing Party: XYZ Ltd

GAPS IDENTIFIED:
1. Board minutes - only 2 of 12 months provided
2. Email correspondence - key personnel missing...

ACTION PLAN:
By [date]: Inspect privileged documents
By [date]: Apply for specific disclosure of...

## Risk Warnings
⚠️ Check disclosure statement signed
⚠️ Time limits for inspection
⚠️ Privilege must be properly claimed

### Audience: SME Business Owner
- Checks if opponent provided all documents
- Spots what's missing or hidden
- Can force more disclosure if needed
- Critical for proving your case

--------

---
prompt_id: lit-drafting-chronology-029
title: Case Chronology
practice_area: litigation
task_type: drafting
jurisdiction: uk-wide
complexity: basic
time_estimate: 40
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, chronology, case-preparation, trial]
---

## Purpose
Create clear chronology of events for litigation matter assisting case analysis and trial preparation.

## Jurisdiction
UK-wide

## Professional Context
Essential case preparation tool for identifying key events, patterns, and evidential gaps in complex disputes.

## Base Prompt
Create case chronology for {{case_name}} covering period {{start_date}} to {{end_date}}:
Key events: {{event_list}}
Format:
| Date | Event | Source | Significance | Page Ref |
Include:
- All relevant communications
- Contract/relationship milestones  
- Performance/breach incidents
- Notice/demand dates
- Without prejudice contacts (marked)
- Limitation relevant dates
Highlight:
- Disputed events
- Gaps in evidence
- Inconsistencies
Provide analysis of patterns revealed.

## Variables
- {{case_name}} – matter reference
- {{start_date}} – beginning of relevant period
- {{end_date}} – end of relevant period
- {{event_list}} – key events to include

## Example Usage
### Input
case_name=ABC v XYZ Contract Dispute; start_date=1/1/2024; end_date=31/12/2024; event_list=contract signed, delivery dates, complaints, termination

### Expected Output
CASE CHRONOLOGY - ABC V XYZ

| Date | Event | Source | Significance | Page Ref |
|------|-------|--------|--------------|----------|
| 1/1/24 | Contract executed | Contract | Commencement | Bundle p.1 |
| 15/1/24 | First delivery due | Contract cl.5 | Performance milestone | Bundle p.5 |

## Risk Warnings
⚠️ Include all relevant events
⚠️ Verify dates from source documents
⚠️ Note time zone issues

### Audience: SME Business Owner
- Timeline of everything that happened
- Shows patterns and problem development
- Helps lawyer present clear story
- Identifies what evidence needed

--------

---
prompt_id: lit-analysis-injunction-030
title: Injunction Risk Assessment
practice_area: litigation
task_type: analysis
jurisdiction: england-wales
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, injunction, interim-relief, urgent]
---

## Purpose
Assess merits and requirements for interim injunction application under American Cyanamid principles.

## Jurisdiction
England & Wales

## Professional Context
Used when considering urgent injunctive relief, requiring careful analysis of legal tests and practical considerations.

## Base Prompt
Assess injunction application for {{applicant}} against {{respondent}} seeking to {{injunction_purpose}}:
Current situation: {{factual_position}}
Analyse American Cyanamid criteria:
1. Serious issue to be tried
2. Damages adequate remedy?
3. Balance of convenience
4. Status quo considerations
5. Special factors
Also consider:
- Urgency/delay issues
- Undertaking in damages
- Evidence requirements
- Without notice justification
- Terms of order
- Enforcement practicalities
Provide success likelihood and tactical advice.

## Variables
- {{applicant}} – party seeking injunction
- {{respondent}} – party to be injuncted
- {{injunction_purpose}} – what order will prohibit/require
- {{factual_position}} – current situation

## Example Usage
### Input
applicant=Software Ltd; respondent=Ex-Employee; injunction_purpose=prevent use of confidential source code; factual_position=employee left last week, evidence of downloading, starting competitor

### Expected Output
INJUNCTION ASSESSMENT
Applicant: Software Ltd
Respondent: Ex-Employee

AMERICAN CYANAMID ANALYSIS:
1. Serious Issue: YES
   - Clear confidentiality obligations
   - Evidence of downloading...

SUCCESS LIKELIHOOD: 75%
Key risk: Delay in application...

## Risk Warnings
⚠️ Undertaking in damages is serious
⚠️ Full frank disclosure required
⚠️ Act quickly or lose urgency

### Audience: SME Business Owner
- Emergency court order to stop harmful action
- Must show real urgency and harm
- You guarantee compensation if wrong
- Hours/days matter in seeking

--------

---
prompt_id: emp-drafting-contract-031
title: Employment Contract (Senior Role)
practice_area: employment
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, contract, senior-employee, executive]
---

## Purpose
Draft comprehensive employment contract for senior employee with appropriate protections and post-termination restrictions.

## Jurisdiction
England & Wales

## Professional Context
Used for hiring senior employees where protecting business interests through carefully drafted terms is essential.

## Base Prompt
Draft employment contract for {{employer_name}} hiring {{employee_name}} as {{job_title}}:
- Salary: £{{annual_salary}}
- Start date: {{start_date}}
- Benefits: {{benefits_package}}
- Notice period: {{notice_months}} months
Include:
1. Duties and reporting
2. Confidentiality (during and post)
3. IP assignment
4. Garden leave clause
5. Post-termination restrictions:
   - Non-compete: {{compete_period}} months in {{compete_scope}}
   - Non-solicitation: {{solicit_period}} months
   - Non-dealing: {{dealing_period}} months
6. Bonus scheme (discretionary)
7. Share options reference
Ensure enforceability of restrictions.

## Variables
- {{employer_name}} – company name
- {{employee_name}} – individual's name
- {{job_title}} – position title
- {{annual_salary}} – base salary
- {{start_date}} – commencement date
- {{benefits_package}} – "car, healthcare, pension"
- {{notice_months}} – notice period
- {{compete_period}} – non-compete duration
- {{compete_scope}} – geographic/sector limit
- {{solicit_period}} – non-solicitation duration
- {{dealing_period}} – non-dealing duration

## Example Usage
### Input
employer_name=Tech Innovations Ltd; employee_name=Sarah Jones; job_title=Sales Director; annual_salary=80000; start_date=1/9/25; benefits_package=car allowance, private healthcare, 6% pension; notice_months=6; compete_period=12; compete_scope=UK fintech sector; solicit_period=12; dealing_period=12

### Expected Output
EMPLOYMENT CONTRACT

This Agreement is made on [date] between:
(1) Tech Innovations Ltd (Company)
(2) Sarah Jones (Employee)

1. APPOINTMENT
The Company employs the Employee as Sales Director from 1 September 2025...

## Risk Warnings
⚠️ Restrictions must protect legitimate interests
⚠️ Garden leave needs payment provisions
⚠️ Consider separate confidentiality agreement

### Audience: SME Business Owner
- Protects business when hiring senior staff
- Key clauses: notice periods, restrictions on competing
- Must be reasonable to be enforceable
- Consider garden leave for departures

--------

---
prompt_id: emp-reviewing-handbook-032
title: Employee Handbook Review
practice_area: employment
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, handbook, policies, compliance]
---

## Purpose
Review employee handbook for legal compliance, identifying gaps and areas requiring update under current employment law.

## Jurisdiction
UK-wide

## Professional Context
Essential HR compliance exercise ensuring policies meet statutory requirements and provide appropriate employer protections.

## Base Prompt
Review employee handbook for {{company_name}} with {{employee_count}} employees in {{industry_sector}}:
Check policies for:
1. Legal compliance:
   - Disciplinary and grievance (ACAS Code)
   - Equal opportunities
   - Family leave policies
   - Health and safety
   - Data protection/privacy
   - Whistleblowing
   - Anti-bribery
2. Commercial protections:
   - IT/social media usage
   - Confidentiality
   - Conflicts of interest
   - Expenses
3. Modern requirements:
   - Flexible working
   - Mental health
   - Remote working
Identify missing policies and outdated provisions.

## Variables
- {{company_name}} – employer name
- {{employee_count}} – workforce size
- {{industry_sector}} – type of business

## Example Usage
### Input
company_name=Retail Solutions Ltd; employee_count=75; industry_sector=retail and e-commerce

### Expected Output
EMPLOYEE HANDBOOK REVIEW
Retail Solutions Ltd

COMPLIANCE GAPS IDENTIFIED:
1. Whistleblowing Policy - MISSING (legally required)
2. Family Leave - Outdated (pre-April 2024 rates)...

RECOMMENDATIONS:
Priority 1 (Legal Requirements):
- Add whistleblowing policy
- Update family leave...

## Risk Warnings
⚠️ Some policies legally required
⚠️ Contractual vs non-contractual status
⚠️ Consultation may be needed for changes

### Audience: SME Business Owner
- Checks if your staff policies are legal
- Identifies missing required policies
- Flags outdated terms needing update
- Protects against employment claims

--------

---
prompt_id: emp-analysis-redundancy-033
title: Redundancy Process Plan
practice_area: employment
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 75
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, redundancy, restructuring, consultation]
---

## Purpose
Create compliant redundancy process plan including consultation requirements, selection criteria, and timeline.

## Jurisdiction
UK-wide

## Professional Context
Used when planning workforce reductions, ensuring fair process and minimising legal risk of unfair dismissal claims.

## Base Prompt
Plan redundancy process for {{company_name}}:
- Current employees: {{total_employees}}
- Proposed redundancies: {{redundancy_number}}
- Locations affected: {{locations}}
- Roles affected: {{affected_roles}}
- Business reason: {{redundancy_reason}}
- Timeline pressure: {{urgency_level}}
Develop:
1. Consultation requirements (individual/collective)
2. Selection pool definition
3. Selection criteria matrix
4. Scoring methodology
5. Consultation timeline
6. Alternative employment search
7. Redundancy payment calculations
8. Notice requirements
9. Appeal process
10. Protected characteristic impact

## Variables
- {{company_name}} – employer name
- {{total_employees}} – workforce size
- {{redundancy_number}} – proposed job losses
- {{locations}} – sites affected
- {{affected_roles}} – positions at risk
- {{redundancy_reason}} – business rationale
- {{urgency_level}} – time pressure

## Example Usage
### Input
company_name=Manufacturing Ltd; total_employees=120; redundancy_number=25; locations=Birmingham site; affected_roles=production operatives, supervisors; redundancy_reason=automation of production line; urgency_level=3 months to implement

### Expected Output
REDUNDANCY PROCESS PLAN
Manufacturing Ltd

COLLECTIVE CONSULTATION REQUIRED
- 25 redundancies = 30-day minimum consultation
- Must notify BEIS (Form HR1)...

PROPOSED TIMELINE:
Day 1: Announce proposals
Day 1-30: Collective consultation
Day 31-38: Individual consultation...

## Risk Warnings
⚠️ Collective consultation has strict rules
⚠️ Check for indirect discrimination
⚠️ Consider TUPE if outsourcing

### Audience: SME Business Owner
- Legal process for reducing workforce
- Must consult before deciding
- Fair selection criteria essential
- Get it wrong = expensive claims

--------

---
prompt_id: emp-drafting-settlement-034
title: Settlement Agreement (Exit)
practice_area: employment
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, settlement, compromise, exit]
---

## Purpose
Draft settlement agreement for agreed employee exit with appropriate waivers and compensation terms.

## Jurisdiction
England & Wales

## Professional Context
Used to document agreed exits ensuring clean break with waiver of claims in exchange for enhanced package.

## Base Prompt
Draft settlement agreement between {{employer}} and {{employee}} for {{exit_reason}}:
- Termination date: {{leave_date}}
- Ex gratia payment: £{{ex_gratia}}
- PILON: £{{pilon_amount}}
- Notice period: {{notice_weeks}} weeks
- Benefits: {{benefits_continuation}}
- Restrictive covenants: {{restrictions_position}}
Include:
1. Termination terms
2. Payment breakdown and tax treatment
3. Full waiver of claims
4. Reference wording
5. Confidentiality both ways
6. Return of property
7. Pension arrangements
8. Announcement wording
9. Legal advice confirmation
Ensure s.203 ERA compliance.

## Variables
- {{employer}} – company name
- {{employee}} – departing employee
- {{exit_reason}} – "redundancy", "mutual agreement", etc.
- {{leave_date}} – final day
- {{ex_gratia}} – compensation payment
- {{pilon_amount}} – pay in lieu amount
- {{notice_weeks}} – notice period
- {{benefits_continuation}} – ongoing benefits
- {{restrictions_position}} – affirm/waive/modify

## Example Usage
### Input
employer=Digital Co Ltd; employee=John Manager; exit_reason=mutual agreement; leave_date=31/8/25; ex_gratia=15000; pilon_amount=10000; notice_weeks=12; benefits_continuation=healthcare to 31/12/25; restrictions_position=affirm existing

### Expected Output
SETTLEMENT AGREEMENT

BETWEEN:
(1) Digital Co Ltd ("Company")
(2) John Manager ("Employee")

BACKGROUND
The parties have agreed to terminate the Employee's employment on terms set out below...

## Risk Warnings
⚠️ Employee must have independent legal advice
⚠️ Advisor must be qualified and insured
⚠️ First £30k can be tax-free

### Audience: SME Business Owner
- Legal agreement for employee departure
- Employee gives up right to sue
- Must involve employee's own lawyer
- Protects against future claims

--------

---
prompt_id: emp-reviewing-grievance-035
title: Grievance Response Review
practice_area: employment
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, grievance, acas, procedure]
---

## Purpose
Review draft grievance outcome letter ensuring ACAS Code compliance and minimising tribunal risk.

## Jurisdiction
UK-wide

## Professional Context
Critical document in grievance process requiring careful drafting to avoid discrimination claims or procedural challenges.

## Base Prompt
Review grievance outcome letter regarding {{employee_name}}'s complaint about {{grievance_subject}}:
{{draft_letter}}
Check for:
1. ACAS Code compliance
2. Each complaint addressed
3. Evidence consideration shown
4. Clear outcomes on each point
5. Reasoning explained
6. Impartiality demonstrated
7. Appeal rights stated
8. Timescales clear
9. Discrimination risks
10. Admission avoidance
Suggest improvements for:
- Clarity and structure
- Legal protection
- Employee relations

## Variables
- {{employee_name}} – complainant
- {{grievance_subject}} – nature of complaint
- {{draft_letter}} – draft response

## Example Usage
### Input
employee_name=Jane Smith; grievance_subject=bullying by line manager; draft_letter=[draft outcome letter text]

### Expected Output
GRIEVANCE OUTCOME REVIEW

ACAS COMPLIANCE: ✓ Meets requirements
STRUCTURE: Needs improvement

SUGGESTED AMENDMENTS:
Para 3: Remove "we accept management could have handled this better"
Replace with: "While different approach might have been taken..."

## Risk Warnings
⚠️ Avoid admissions of liability
⚠️ Ensure appeal deadline clear
⚠️ Consider protected characteristics

### Audience: SME Business Owner
- Reviews your response to employee complaint
- Ensures follows proper process
- Avoids creating legal problems
- Maintains employee relations

--------

---
prompt_id: emp-drafting-disciplinary-036
title: Disciplinary Invitation Letter
practice_area: employment
task_type: drafting
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 30
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, disciplinary, acas, misconduct]
---

## Purpose
Draft disciplinary hearing invitation letter complying with ACAS Code and establishing fair process.

## Jurisdiction
UK-wide

## Professional Context
First formal step in disciplinary process requiring careful drafting to ensure procedural fairness.

## Base Prompt
Draft disciplinary invitation letter for {{employee_name}} regarding {{allegation_type}}:
- Incident date(s): {{incident_dates}}
- Allegations: {{specific_allegations}}
- Hearing date: {{hearing_date}}
- Hearing location: {{location}}
- Hearing chair: {{chair_name}}
Include:
1. Clear allegation details
2. Potential outcomes (including dismissal if applicable)
3. Right to be accompanied
4. Evidence enclosed
5. Witness list
6. Request for employee's evidence
7. Alternative date process
8. Suspension status
9. Confidentiality reminder
Ensure ACAS Code compliance.

## Variables
- {{employee_name}} – employee facing disciplinary
- {{allegation_type}} – misconduct category
- {{incident_dates}} – when alleged incidents occurred
- {{specific_allegations}} – detailed allegations
- {{hearing_date}} – proposed hearing date/time
- {{location}} – hearing venue
- {{chair_name}} – who will chair hearing

## Example Usage
### Input
employee_name=Tom Jones; allegation_type=gross misconduct - theft; incident_dates=1-15 June 2025; specific_allegations=taking £500 cash from till on 3 occasions; hearing_date=1 July 2025 at 2pm; location=HR Office, Head Office; chair_name=Sarah Director

### Expected Output
PRIVATE AND CONFIDENTIAL
Tom Jones
[Address]

Dear Tom

INVITATION TO DISCIPLINARY HEARING

I write to invite you to attend a disciplinary hearing to discuss allegations of gross misconduct...

## Risk Warnings
⚠️ Give adequate time to prepare
⚠️ Include all evidence relied upon
⚠️ State dismissal risk if relevant

### Audience: SME Business Owner
- Formal notice of disciplinary hearing
- Must be clear about allegations
- Employee rights must be stated
- Sets foundation for fair process

--------

---
prompt_id: emp-analysis-tupe-037
title: TUPE Transfer Analysis
practice_area: employment
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, tupe, transfer, outsourcing]
---

## Purpose
Analyse whether TUPE applies to proposed business transfer and identify key obligations and risks.

## Jurisdiction
UK-wide

## Professional Context
Used in business sales, outsourcing, or re-tendering to determine employee transfer obligations and liabilities.

## Base Prompt
Analyse TUPE application for {{transfer_type}}:
- Transferor: {{current_employer}}
- Transferee: {{new_employer}}
- Activity/assets: {{transfer_description}}
- Employees affected: {{employee_numbers}}
- Transfer date: {{proposed_date}}
Assess:
1. TUPE application (business/service provision change)
2. Employee identification (organised grouping)
3. Information/consultation duties
4. Liability allocation
5. Measures envisaged
6. Pension implications
7. Harmonisation restrictions
8. Dismissal risks
9. Warranty/indemnity needs
10. Due diligence requirements
Provide compliance timeline.

## Variables
- {{transfer_type}} – "business sale", "outsourcing", "insourcing"
- {{current_employer}} – transferor entity
- {{new_employer}} – transferee entity
- {{transfer_description}} – what's transferring
- {{employee_numbers}} – staff potentially affected
- {{proposed_date}} – intended transfer date

## Example Usage
### Input
transfer_type=outsourcing; current_employer=Council Ltd; new_employer=Services Co; transfer_description=IT helpdesk services; employee_numbers=12 helpdesk staff; proposed_date=1/10/25

### Expected Output
TUPE ANALYSIS - IT HELPDESK OUTSOURCING

TUPE APPLIES: YES - Service Provision Change
- Organised grouping of employees
- Dedicated to IT helpdesk service...

TIMELINE:
By 1/9/25: Employee liability information
By 15/9/25: Start consultation...

## Risk Warnings
⚠️ Auto-transfer of employment contracts
⚠️ Dismissals connected to transfer unfair
⚠️ Consultation failures = compensation

### Audience: SME Business Owner
- Employees automatically transfer to buyer
- Cannot change their terms easily
- Must inform and consult
- Inherits all employment liabilities

--------

---
prompt_id: emp-summarising-tribunal-038
title: ET Claim Analysis
practice_area: employment
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, tribunal, et1, claims]
---

## Purpose
Summarise employment tribunal claim (ET1) identifying all heads of claim, deadlines, and response strategy.

## Jurisdiction
England & Wales

## Professional Context
Initial analysis of tribunal claim essential for response deadline compliance and early case assessment.

## Base Prompt
Analyse ET1 claim form for {{respondent_employer}}:
{{et1_content}}
Extract and summarise:
1. All claims brought (with statutory basis)
2. Key factual allegations
3. Timeline of events
4. Remedy sought
5. ACAS early conciliation details
6. Response deadline (28 days)
7. Preliminary hearing dates
8. Witness requirements
9. Document preservation needs
10. Settlement potential
Create action plan with:
- Immediate steps
- Investigation needs
- ET3 response strategy

## Variables
- {{respondent_employer}} – employer defending claim
- {{et1_content}} – claim form content

## Example Usage
### Input
respondent_employer=Tech Employer Ltd; et1_content=[Full ET1 form text]

### Expected Output
ET1 CLAIM ANALYSIS - TECH EMPLOYER LTD

CLAIMS IDENTIFIED:
1. Unfair dismissal (s.98 ERA)
2. Disability discrimination (s.15 EqA)
3. Failure to make adjustments (s.20 EqA)

RESPONSE DEADLINE: [Date] - 28 days from service

KEY ALLEGATIONS:
- Dismissed on 1/5/25 allegedly for performance
- Claimant says related to disability...

## Risk Warnings
⚠️ 28-day deadline is strict
⚠️ Must respond to all claims
⚠️ Consider costs warnings

### Audience: SME Business Owner
- Employee has sued at tribunal
- Lists all their complaints
- Strict deadline to respond
- Need immediate legal advice

--------

---
prompt_id: emp-drafting-reference-039
title: Employment Reference (Balanced)
practice_area: employment
task_type: drafting
jurisdiction: uk-wide
complexity: basic
time_estimate: 20
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, reference, liability, data]
---

## Purpose
Draft balanced employment reference that fulfils duty of care while minimising liability risks.

## Jurisdiction
UK-wide

## Professional Context
Providing references requires balancing duties to former employee and recipient employer while avoiding negligence claims.

## Base Prompt
Draft employment reference for {{employee_name}} who worked as {{job_title}} from {{start_date}} to {{end_date}}:
- Reason for leaving: {{departure_reason}}
- Performance level: {{performance_summary}}
- Attendance: {{attendance_record}}
- Conduct issues: {{any_issues}}
- Reference type: {{basic_or_detailed}}
Include:
- Factual employment details
- Objective performance comments
- Disclaimer if appropriate
- No speculation/opinion
- Balanced presentation
- Data protection compliance
Follow "true, accurate, fair" principle.

## Variables
- {{employee_name}} – former employee
- {{job_title}} – role held
- {{start_date}} – employment start
- {{end_date}} – employment end
- {{departure_reason}} – why they left
- {{performance_summary}} – objective assessment
- {{attendance_record}} – factual record
- {{any_issues}} – disciplinary/performance matters
- {{basic_or_detailed}} – level of detail required

## Example Usage
### Input
employee_name=David Sales; job_title=Sales Manager; start_date=1/1/20; end_date=31/12/24; departure_reason=resignation for new role; performance_summary=consistently met targets; attendance_record=good, average 5 days absence/year; any_issues=none; basic_or_detailed=detailed

### Expected Output
EMPLOYMENT REFERENCE

TO WHOM IT MAY CONCERN

David Sales was employed by [Company] as Sales Manager from 1 January 2020 to 31 December 2024.

During his employment, Mr Sales consistently met his sales targets...

## Risk Warnings
⚠️ Can be sued by both parties
⚠️ Stick to facts not opinions
⚠️ Cannot refuse if agreed in settlement

### Audience: SME Business Owner
- Legal duty to be accurate and fair
- Can be sued for bad or negligent reference
- Safest to give just facts
- Check settlement agreement requirements

--------

---
prompt_id: emp-reviewing-contract-040
title: Zero Hours Contract Review
practice_area: employment
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 35
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, zero-hours, casual, gig-economy]
---

## Purpose
Review zero hours contract ensuring compliance with worker rights and avoiding employment status risks.

## Jurisdiction
UK-wide

## Professional Context
Used for casual workforce arrangements requiring careful drafting to maintain flexibility while meeting legal obligations.

## Base Prompt
Review zero hours contract for {{employer}} engaging {{worker_type}}:
{{contract_text}}
Check for:
1. Mutuality of obligation clarity
2. Right to refuse work
3. No exclusivity
4. Worker vs employee status
5. Holiday pay compliance
6. Minimum wage compliance
7. Pension auto-enrolment
8. Substitution rights
9. Control factors
10. Tax/NI treatment
Identify risks of:
- Employment status claims
- Holiday pay calculations
- Continuity of employment

## Variables
- {{employer}} – company name
- {{worker_type}} – type of casual worker
- {{contract_text}} – contract to review

## Example Usage
### Input
employer=Hospitality Ltd; worker_type=event staff; contract_text=[zero hours agreement]

### Expected Output
ZERO HOURS CONTRACT REVIEW
Employer: Hospitality Ltd
Worker Type: Event staff

COMPLIANCE ISSUES:
1. Holiday Pay - Incorrect calculation method
   Current: 12.07% rolled up
   Required: Accrue and pay separately...

STATUS RISK: Medium
- Limited substitution right
- High degree of control...

## Risk Warnings
⚠️ Workers have increasing rights
⚠️ IR35 may apply to some
⚠️ Continuous service accumulates

### Audience: SME Business Owner
- Flexible staff without guaranteed hours
- Still have worker rights (holiday, minimum wage)
- Risk of becoming employees over time
- Need careful drafting and practice

--------

---
prompt_id: prop-drafting-lease-041
title: Commercial Lease Agreement
practice_area: property
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 120
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, commercial-lease, landlord, tenant]
---

## Purpose
Draft commercial lease for business premises with appropriate landlord protections and tenant operational flexibility.

## Jurisdiction
England & Wales

## Professional Context
Used for letting commercial property requiring balance between landlord investment protection and tenant business needs.

## Base Prompt
Draft commercial lease for {{property_address}}:
- Landlord: {{landlord_name}}
- Tenant: {{tenant_name}}
- Term: {{lease_term}} years
- Rent: £{{annual_rent}} per annum
- Rent reviews: {{review_pattern}}
- Use: {{permitted_use}}
- Break clause: {{break_options}}
Include:
1. Premises definition and rights
2. Rent payment (quarterly in advance)
3. Rent review mechanism
4. Repair obligations (FRI)
5. Use and alterations
6. Assignment/subletting conditions
7. Insurance provisions
8. Service charge if applicable
9. Break clauses
10. 1954 Act position
Include schedules for condition and services.

## Variables
- {{property_address}} – full property address
- {{landlord_name}} – landlord details
- {{tenant_name}} – tenant company
- {{lease_term}} – length in years
- {{annual_rent}} – yearly rent
- {{review_pattern}} – "5-yearly upward only"
- {{permitted_use}} – planning use class
- {{break_options}} – break clause details

## Example Usage
### Input
property_address=Unit 5, Business Park, Reading RG1 1AA; landlord_name=Property Investments Ltd; tenant_name=Tech Startup Ltd; lease_term=10; annual_rent=50000; review_pattern=5-yearly to market; permitted_use=B1 office use; break_options=mutual break at year 5

### Expected Output
LEASE

This Lease is made the [  ] day of [  ] 2025

BETWEEN:
(1) PROPERTY INVESTMENTS LTD (Landlord)
(2) TECH STARTUP LTD (Tenant)

PREMISES: Unit 5, Business Park, Reading RG1 1AA...

## Risk Warnings
⚠️ 1954 Act exclusion needs court procedure
⚠️ Guarantees may be needed
⚠️ Check planning compliance

### Audience: SME Business Owner
- Long-term rental agreement for business premises
- Key terms: rent, repairs, break clauses
- Usually "FRI" = you pay for everything
- Can be hard to exit early

--------

---
prompt_id: prop-reviewing-transfer-042
title: Property Transfer Review (TR1)
practice_area: property
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, transfer, conveyancing, land-registry]
---

## Purpose
Review draft transfer deed (TR1) ensuring accurate reflection of agreed terms and proper execution requirements.

## Jurisdiction
England & Wales

## Professional Context
Critical conveyancing document requiring careful review before completion to avoid post-completion disputes.

## Base Prompt
Review TR1 transfer for {{property_address}}:
- Transferor: {{seller_details}}
- Transferee: {{buyer_details}}
- Consideration: £{{purchase_price}}
- Title number: {{title_number}}
Check:
1. Property description matches title
2. Transferor/transferee details correct
3. Consideration accurately stated
4. Covenants/restrictions appropriate
5. Execution provisions correct
6. Joint ownership declarations
7. Certificate of value
8. Plans match if required
9. 9. Stamp duty provisions
10. Land Registry requirements
Flag any unusual provisions or missing elements.

## Variables
- {{property_address}} – property being transferred
- {{seller_details}} – transferor name(s)
- {{buyer_details}} – transferee name(s)
- {{purchase_price}} – consideration amount
- {{title_number}} – Land Registry title

## Example Usage
### Input
property_address=123 High Street, London W1; seller_details=John Smith; buyer_details=ABC Properties Ltd; purchase_price=750000; title_number=LN123456

### Expected Output
TR1 REVIEW - 123 HIGH STREET

CRITICAL ISSUES:
1. Execution - Company buyer needs two signatures/seal
2. Declaration of trust missing - required for company...

AMENDMENTS NEEDED:
Panel 11: Add declaration of trust
Panel 12: Include certificate of value...

## Risk Warnings
⚠️ Execution errors invalidate transfer
⚠️ Wrong covenants bind forever
⚠️ Check ID requirements met

### Audience: SME Business Owner
- Legal document transferring property ownership
- Must be perfect - errors hard to fix
- Check company execution rules
- Declares stamp duty position

--------

---
prompt_id: prop-analysis-dilapidations-043
title: Dilapidations Liability Assessment
practice_area: property
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, dilapidations, lease-end, repair]
---

## Purpose
Assess potential dilapidations liability at lease end, comparing repair obligations against property condition.

## Jurisdiction
England & Wales

## Professional Context
Used to evaluate repair liability exposure and negotiate dilapidations claims at lease termination.

## Base Prompt
Assess dilapidations liability for {{tenant_name}} at {{property_address}}:
- Lease term: {{lease_details}}
- Repair covenant: {{repair_obligation}}
- Current condition: {{condition_summary}}
- Time to expiry: {{months_remaining}}
- Landlord's intentions: {{landlord_plans}}
Analyse:
1. Scope of repair obligation
2. Decoration requirements
3. Reinstatement of alterations
4. Statutory compliance updates
5. S.18 Landlord & Tenant Act cap
6. Diminution in value argument
7. Supersession potential
8. Cost estimate breakdown
9. Negotiation strategy
10. Early settlement benefits

## Variables
- {{tenant_name}} – tenant company
- {{property_address}} – leased premises
- {{lease_details}} – key lease terms
- {{repair_obligation}} – "full repairing" etc
- {{condition_summary}} – current state
- {{months_remaining}} – time to lease end
- {{landlord_plans}} – known intentions

## Example Usage
### Input
tenant_name=Retail Co Ltd; property_address=10 Shopping Centre; lease_details=10-year lease expiring Dec 2025; repair_obligation=full repairing and insuring; condition_summary=general wear, altered layout, dated decoration; months_remaining=6; landlord_plans=unknown, possibly redevelop

### Expected Output
DILAPIDATIONS ASSESSMENT
Tenant: Retail Co Ltd
Property: 10 Shopping Centre

ESTIMATED LIABILITY: £75,000-£125,000

BREAKDOWN:
- Repairs: £25,000
- Decoration: £15,000
- Reinstatement: £35,000
- Compliance: £25,000...

## Risk Warnings
⚠️ Early action reduces costs
⚠️ S.18 cap may apply
⚠️ Negotiate before schedule served

### Audience: SME Business Owner
- Repair bill when leaving leased premises
- Can be very expensive surprise
- Landlord's actual loss is cap
- Early negotiation often cheaper

--------

---
prompt_id: prop-drafting-option-044
title: Option Agreement for Land Purchase
practice_area: property
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, option, development, land]
---

## Purpose
Draft option agreement giving developer right to purchase land subject to planning permission or other conditions.

## Jurisdiction
England & Wales

## Professional Context
Used in development projects where purchaser needs time to secure planning before committing to purchase.

## Base Prompt
Draft option agreement between {{landowner}} and {{developer}} for {{site_description}}:
- Option period: {{option_term}}
- Option fee: £{{option_payment}}
- Purchase price: £{{purchase_price}} or {{price_mechanism}}
- Trigger: {{exercise_conditions}}
- Planning: {{planning_requirements}}
Include:
1. Grant of option
2. Restrictions during option period
3. Planning application obligations
4. Exercise mechanism
5. Purchase terms on exercise
6. Overage/uplift provisions
7. Access rights for surveys
8. Confidentiality
9. Assignment rights
10. Tax provisions

## Variables
- {{landowner}} – grantor of option
- {{developer}} – option holder
- {{site_description}} – land description
- {{option_term}} – option period length
- {{option_payment}} – option fee
- {{purchase_price}} – fixed price or
- {{price_mechanism}} – calculation method
- {{exercise_conditions}} – triggers for exercise
- {{planning_requirements}} – planning needed

## Example Usage
### Input
landowner=Farmer Brown; developer=Homes Developer Ltd; site_description=5 acres at Green Farm; option_term=3 years; option_payment=50000; purchase_price=market value; price_mechanism=per plot achieved; exercise_conditions=detailed planning for 50+ units; planning_requirements=residential C3 use

### Expected Output
OPTION AGREEMENT

Date: [  ]

BETWEEN:
(1) FARMER BROWN of Green Farm ("Grantor")
(2) HOMES DEVELOPER LTD ("Developer")

BACKGROUND
The Grantor owns land suitable for development...

## Risk Warnings
⚠️ Planning conditions must be clear
⚠️ Consider ransom strip issues
⚠️ Overage period and triggers crucial

### Audience: SME Business Owner
- Locks in right to buy land later
- Usually conditional on planning permission
- Seller restricted during option period
- Complex price mechanisms common

--------

---
prompt_id: prop-summarising-report-045
title: Property Title Report Summary
practice_area: property
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, title, conveyancing, due-diligence]
---

## Purpose
Summarise complex property title report highlighting key issues, restrictions and requirements for client decision.

## Jurisdiction
England & Wales

## Professional Context
Essential for client understanding of property title complexities before exchange of contracts.

## Base Prompt
Summarise title report for {{property_address}}:
{{title_documents}}
Extract and explain:
1. Ownership verification
2. Boundaries and plans
3. Rights benefiting (easements)
4. Rights burdening (covenants)
5. Mortgages/charges
6. Restrictions on register
7. Overriding interests
8. Missing documents
9. Defects in title
10. Insurance requirements
Present as:
- Executive summary
- Key issues for decision
- Required undertakings
- Completion requirements

## Variables
- {{property_address}} – subject property
- {{title_documents}} – title report content

## Example Usage
### Input
property_address=Development Site, Main Road; title_documents=[full title report including registers, plan, and deeds]

### Expected Output
TITLE REPORT SUMMARY
Development Site, Main Road

EXECUTIVE SUMMARY:
Freehold title with significant restrictions affecting development potential...

KEY ISSUES:
1. Restrictive covenant (1925) limiting to single dwelling
2. Ransom strip excluding access to main road...

ACTION REQUIRED:
- Insurance for covenant breach
- Negotiate access rights...

## Risk Warnings
⚠️ Covenants may prevent intended use
⚠️ Check indemnity insurance availability
⚠️ Missing documents create risk

### Audience: SME Business Owner
- Explains what you're actually buying
- Highlights restrictions on use
- Shows what problems need solving
- Identifies additional costs needed

--------

---
prompt_id: prop-drafting-licence-046
title: Licence to Alter Commercial Premises
practice_area: property
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 50
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, alterations, licence, commercial]
---

## Purpose
Draft licence permitting tenant to carry out alterations to leased commercial premises with appropriate protections.

## Jurisdiction
England & Wales

## Professional Context
Required when tenant needs landlord consent for alterations under lease terms, documenting agreed works and conditions.

## Base Prompt
Draft licence to alter for {{tenant_name}} at {{property_address}}:
- Landlord: {{landlord_name}}
- Proposed works: {{works_description}}
- Plans reference: {{plans_ref}}
- Timescale: {{completion_time}}
- Reinstatement required: {{reinstatement}}
Include:
1. Permission scope (plans annexed)
2. Conditions precedent
3. Works standards/supervision
4. Compliance with regulations
5. Indemnity for damage
6. Insurance requirements
7. Reinstatement obligation
8. Rent suspension provisions
9. Professional fees
10. Documentation requirements

## Variables
- {{tenant_name}} – tenant company
- {{property_address}} – premises location
- {{landlord_name}} – landlord entity
- {{works_description}} – alteration summary
- {{plans_ref}} – drawing references
- {{completion_time}} – works timescale
- {{reinstatement}} – "yes" or "no"

## Example Usage
### Input
tenant_name=Tech Office Ltd; property_address=Suite 10, Office Building; landlord_name=Commercial Landlords Plc; works_description=install partitioning and air conditioning; plans_ref=Drawing ABC/123 Rev B; completion_time=8 weeks; reinstatement=yes

### Expected Output
LICENCE TO ALTER

Date: [  ]

PARTIES:
(1) COMMERCIAL LANDLORDS PLC (Landlord)
(2) TECH OFFICE LTD (Tenant)

Property: Suite 10, Office Building

THIS LICENCE witnesses that the Landlord permits the Tenant to carry out the Works...

## Risk Warnings
⚠️ Plans must be detailed and annexed
⚠️ CDM Regulations may apply
⚠️ Check lease alteration provisions

### Audience: SME Business Owner
- Formal permission to alter leased premises
- Sets conditions and standards
- Usually requires reinstatement on exit
- Protects against lease breach claims

--------

---
prompt_id: prop-reviewing-survey-047
title: Commercial Property Survey Review
practice_area: property
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, survey, building, defects]
---

## Purpose
Review building survey report extracting key defects, cost implications, and negotiation points for property transaction.

## Jurisdiction
UK-wide

## Professional Context
Critical analysis for purchase decision and price negotiation based on property condition findings.

## Base Prompt
Review building survey for {{property_address}}:
{{survey_report}}
Identify and assess:
1. Structural issues
2. Environmental concerns
3. Deleterious materials
4. Regulatory compliance
5. Health & safety issues
6. Urgent repairs needed
7. Planned maintenance items
8. Cost estimates provided
9. Further investigations needed
10. Deal-breaker defects
Provide:
- Priority issues list
- Total cost implications
- Price chip recommendations
- Conditions precedent suggestions

## Variables
- {{property_address}} – surveyed property
- {{survey_report}} – survey content

## Example Usage
### Input
property_address=Industrial Unit, Birmingham; survey_report=[full building survey report]

### Expected Output
SURVEY ANALYSIS - INDUSTRIAL UNIT

CRITICAL ISSUES:
1. Asbestos in roof - £50k removal
2. Ground contamination suspected - investigation needed
3. Electrical installation requires rewire - £30k...

TOTAL ESTIMATED COSTS: £150,000-200,000

RECOMMENDATIONS:
1. Price reduction of £175,000
2. OR retention pending further tests...

## Risk Warnings
⚠️ Hidden defects remain buyer's risk
⚠️ Specialist surveys may be needed
⚠️ Factor in business disruption

### Audience: SME Business Owner
- Independent check of building condition
- Identifies problems and repair costs
- Basis for price negotiation
- May reveal deal-breaking issues

--------

---
prompt_id: prop-analysis-break-048
title: Lease Break Clause Analysis
practice_area: property
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 35
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, lease, break-clause, notice]
---

## Purpose
Analyse lease break clause requirements ensuring valid exercise and avoiding common pitfalls that invalidate notices.

## Jurisdiction
England & Wales

## Professional Context
Critical when planning lease termination as strict compliance required and errors cannot usually be corrected.

## Base Prompt
Analyse break clause in lease of {{property_address}}:
- Tenant: {{tenant_name}}
- Break date: {{break_date}}
- Notice period: {{notice_required}}
- Current date: {{today_date}}
- Conditions: {{break_conditions}}
Assess:
1. Notice timing calculations
2. Service requirements
3. Preconditions compliance
4. Vacant possession meaning
5. Rent payment status
6. Time of essence
7. Conditionality issues
8. Joint tenant requirements
9. Authorisation needed
10. Common pitfalls
Provide compliance checklist and timeline.

## Variables
- {{property_address}} – leased property
- {{tenant_name}} – tenant exercising break
- {{break_date}} – when break operates
- {{notice_required}} – notice period needed
- {{today_date}} – current date
- {{break_conditions}} – conditions to satisfy

## Example Usage
### Input
property_address=Unit 1 Retail Park; tenant_name=Fashion Store Ltd; break_date=25/12/2025; notice_required=6 months; today_date=1/5/2025; break_conditions=vacant possession, all rent paid

### Expected Output
BREAK CLAUSE ANALYSIS
Property: Unit 1 Retail Park
Break Date: 25/12/2025

TIMING:
- Notice deadline: 25/6/2025
- Recommended service: by 18/6/2025
- Days remaining: 48 days

CRITICAL REQUIREMENTS:
1. Vacant possession - remove ALL items...

## Risk Warnings
⚠️ One mistake invalidates break
⚠️ Cannot correct errors after deadline
⚠️ Vacant possession strictly interpreted

### Audience: SME Business Owner
- Early exit right from lease
- Must follow requirements exactly
- Miss deadline = stuck until lease ends
- Get professional help with notice

--------

---
prompt_id: prop-drafting-easement-049
title: Deed of Easement (Right of Way)
practice_area: property
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, easement, right-of-way, deed]
---

## Purpose
Draft deed granting permanent right of way over servient land for benefit of dominant tenement.

## Jurisdiction
England & Wales

## Professional Context
Used to formalise access rights between neighbouring properties, essential for landlocked sites or shared accessways.

## Base Prompt
Draft deed of easement between {{grantor}} (servient owner) and {{grantee}} (dominant owner):
- Servient land: {{burdened_property}}
- Dominant land: {{benefited_property}}
- Right granted: {{access_description}}
- Route: {{route_details}}
- Payment: £{{consideration}}
- Maintenance: {{maintenance_split}}
Include:
1. Clear grant of right
2. Extent (vehicles/pedestrian)
3. Times of use
4. Maintenance obligations
5. Insurance and indemnity
6. Reserved rights
7. Dispute resolution
8. Registration requirements
9. Plans showing route
10. Successor binding

## Variables
- {{grantor}} – owner granting right
- {{grantee}} – owner receiving benefit
- {{burdened_property}} – servient land
- {{benefited_property}} – dominant land
- {{access_description}} – type of access
- {{route_details}} – physical route
- {{consideration}} – payment amount
- {{maintenance_split}} – cost sharing

## Example Usage
### Input
grantor=Farm Owner Ltd; grantee=House Buyer; burdened_property=Green Farm; benefited_property=The Cottage, Green Lane; access_description=vehicular and pedestrian access; route_details=existing track shown red on plan; consideration=10000; maintenance_split=50/50 shared

### Expected Output
DEED OF GRANT OF EASEMENT

Date: [  ]

BETWEEN:
(1) FARM OWNER LTD (Grantor)
(2) [HOUSE BUYER] (Grantee)

BACKGROUND
A. The Grantor owns the freehold property known as Green Farm
B. The Grantee owns The Cottage, Green Lane which requires access...

## Risk Warnings
⚠️ Must be by deed to be legal
⚠️ Register at Land Registry
⚠️ Consider future development impact

### Audience: SME Business Owner
- Legal right to use someone else's land
- Typically for access to your property
- Permanent and binds future owners
- Must be clearly defined route

--------

---
prompt_id: prop-summarising-cpse-050
title: CPSE Replies Analysis
practice_area: property
task_type: summarising
jurisdiction: england-wales
complexity: advanced
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, cpse, commercial, enquiries]
---

## Purpose
Analyse Commercial Property Standard Enquiries responses identifying incomplete answers, concerns, and follow-up requirements.

## Jurisdiction
England & Wales

## Professional Context
Critical due diligence review in commercial property transactions to uncover issues affecting value or usability.

## Base Prompt
Review CPSE replies for purchase of {{property_address}} from {{seller_name}}:
Analyse responses for:
1. Incomplete/evasive answers
2. Disclosed problems
3. Missing documentation
4. Warranty limitations
5. Environmental issues
6. Planning/building regs
7. Disputes or complaints
8. Alterations history
9. Services/utilities
10. Insurance claims
Create:
- Red flag summary
- Follow-up enquiries
- Document requisitions
- Insurance requirements
- Price negotiation points

## Variables
- {{property_address}} – target property
- {{seller_name}} – selling entity

## Example Usage
### Input
property_address=Warehouse Complex, M1 Junction; seller_name=Industrial Props Ltd

### Expected Output
CPSE ANALYSIS - WAREHOUSE COMPLEX

RED FLAGS:
1. Environmental - Phase 1 only, contamination "possible"
2. Planning - unauthorised mezzanine installed 2020
3. Disputes - ongoing rates appeal...

CRITICAL FOLLOW-UPS:
1. Demand Phase 2 environmental survey
2. Regularisation of mezzanine required...

## Risk Warnings
⚠️ "Not so far as aware" = no reliance
⚠️ Check insurance claims history
⚠️ Verify replies against documents

### Audience: SME Business Owner
- Seller's answers about property
- Often incomplete or evasive
- Reveals problems and risks
- Basis for price negotiation

--------

---
prompt_id: fam-drafting-prenup-051
title: Pre-nuptial Agreement
practice_area: family
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, prenup, marriage, financial]
---

## Purpose
Draft pre-nuptial agreement protecting pre-acquired assets while ensuring fairness and enforceability.

## Jurisdiction
England & Wales

## Professional Context
Used by couples seeking to regulate financial arrangements on divorce, requiring careful balance of protection and fairness.

## Base Prompt
Draft pre-nuptial agreement between {{party_a}} and {{party_b}}:
- Party A assets: {{a_assets}}
- Party B assets: {{b_assets}}
- Wedding date: {{marriage_date}}
- Provision intent: {{financial_approach}}
Include:
1. Current financial disclosure
2. Pre-acquired asset protection
3. Marital home provisions
4. Income/inheritance treatment
5. Business interest protection
6. Spousal maintenance terms
7. Children provisions (noting limits)
8. Review mechanisms
9. Variation/setting aside
10. Legal advice confirmation
Follow Radmacher principles.

## Variables
- {{party_a}} – first party name
- {{party_b}} – second party name
- {{a_assets}} – Party A's assets summary
- {{b_assets}} – Party B's assets summary
- {{marriage_date}} – intended wedding date
- {{financial_approach}} – "protect pre-acquired" etc

## Example Usage
### Input
party_a=James Smith; party_b=Sarah Jones; a_assets=£2m business, £500k property; b_assets=£200k savings, £50k pension; marriage_date=1/9/2025; financial_approach=protect pre-acquired, share marital acquest

### Expected Output
PRE-NUPTIAL AGREEMENT

Between:
(1) JAMES SMITH
(2) SARAH JONES

WHEREAS:
A. The parties intend to marry on 1 September 2025
B. Each wishes to define their financial rights...

## Risk Warnings
⚠️ Cannot oust court's jurisdiction
⚠️ Both need independent legal advice
⚠️ Must be fair to be upheld

### Audience: SME Business Owner
- Agreement about finances if you divorce
- Protects business and pre-marriage assets
- Must be fair to be enforceable
- Both need separate lawyers

--------

---
prompt_id: fam-reviewing-consent-052
title: Consent Order Review (Divorce)
practice_area: family
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, divorce, consent-order, financial]
---

## Purpose
Review draft consent order in financial remedy proceedings ensuring comprehensive resolution and enforceability.

## Jurisdiction
England & Wales

## Professional Context
Final financial order by consent requiring careful review to ensure clean break and practical workability.

## Base Prompt
Review consent order for {{applicant}} and {{respondent}} in divorce:
{{draft_order}}
Check for:
1. Clean break achieved
2. Property transfer mechanics
3. Pension sharing details
4. Lump sum payment terms
5. Child maintenance (if CMS)
6. Implementation timescales
7. Tax implications
8. Enforcement provisions
9. Dismissal of claims
10. Undertakings clarity
Identify:
- Missing provisions
- Practical difficulties
- Ambiguous terms
- Enforcement issues

## Variables
- {{applicant}} – applying party
- {{respondent}} – responding party
- {{draft_order}} – draft consent order

## Example Usage
### Input
applicant=Wife; respondent=Husband; draft_order=[draft consent order text]

### Expected Output
CONSENT ORDER REVIEW

PARTIES: Wife (Applicant) v Husband (Respondent)

ISSUES IDENTIFIED:
1. Mortgage capacity - no evidence Wife can assume
2. Pension share - missing CE reference
3. Child maintenance - should be recital only...

MISSING PROVISIONS:
- Costs order
- Liberty to apply limited to implementation...

## Risk Warnings
⚠️ Final order - hard to vary
⚠️ Check mortgage assumptions realistic
⚠️ Pension sharing needs precision

### Audience: SME Business Owner
- Final financial settlement on divorce
- Divides all assets and debts
- Very difficult to change later
- Must be workable in practice

--------

---
prompt_id: fam-analysis-childact-053
title: Child Arrangements Analysis
practice_area: family
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 50
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, children, custody, contact]
---

## Purpose
Analyse proposed child arrangements against welfare checklist factors and likely court approach.

## Jurisdiction
England & Wales

## Professional Context
Used to assess child arrangements proposals in private law proceedings focusing on child's best interests.

## Base Prompt
Analyse child arrangements proposal for {{children_names}} (ages {{ages}}):
- Current arrangements: {{existing_pattern}}
- Proposed change: {{proposed_arrangements}}
- Reason for change: {{change_reason}}
- Parental positions: {{parent_views}}
Apply welfare checklist:
1. Child's wishes/feelings
2. Physical/emotional needs
3. Likely effect of change
4. Age/sex/background
5. Harm suffered/risk
6. Parental capability
7. Court powers available
Consider:
- Status quo principle
- Attachment patterns
- Practical logistics
- Sibling relationships

## Variables
- {{children_names}} – children involved
- {{ages}} – children's ages
- {{existing_pattern}} – current arrangements
- {{proposed_arrangements}} – suggested changes
- {{change_reason}} – why change sought
- {{parent_views}} – each parent's position

## Example Usage
### Input
children_names=Tom and Lucy; ages=8 and 6; existing_pattern=alternate weekends with father; proposed_arrangements=50/50 shared care; change_reason=father moved closer, more flexible job; parent_views=Mother opposes, father seeks equality

### Expected Output
CHILD ARRANGEMENTS ANALYSIS

Children: Tom (8) and Lucy (6)
Current: Alternate weekends with father
Proposed: 50/50 shared care

WELFARE CHECKLIST ANALYSIS:
1. Wishes/feelings: At 8 and 6, limited weight but should be explored
2. Needs: Stability, both parents involved...

LIKELY OUTCOME: Gradual increase rather than immediate 50/50...

## Risk Warnings
⚠️ Child's welfare paramount
⚠️ No presumption of 50/50
⚠️ Court favours stability

### Audience: SME Business Owner
- Court decisions about children's living arrangements
- Based on what's best for children
- Not about parents' rights
- Status quo has advantage

--------

---
prompt_id: fam-drafting-separation-054
title: Separation Agreement
practice_area: family
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, separation, cohabitation, unmarried]
---

## Purpose
Draft separation agreement for unmarried couples dividing property and setting child arrangements.

## Jurisdiction
England & Wales

## Professional Context
Used when cohabitees separate, lacking divorce law protections but needing formal arrangement for assets and children.

## Base Prompt
Draft separation agreement for {{party_1}} and {{party_2}} (unmarried):
- Shared property: {{property_details}}
- Ownership: {{ownership_shares}}
- Children: {{children_details}}
- Separation date: {{sep_date}}
Include:
1. Property sale/transfer terms
2. Mortgage responsibility
3. Contents division
4. Bank accounts/debts
5. Child arrangements
6. Child maintenance
7. Pet arrangements
8. Confidentiality
9. Legal advice confirmation
10. Variation provisions
Note limits without court order.

## Variables
- {{party_1}} – first party
- {{party_2}} – second party
- {{property_details}} – shared home details
- {{ownership_shares}} – legal ownership split
- {{children_details}} – children and ages
- {{sep_date}} – when separated

## Example Usage
### Input
party_1=John Partner; party_2=Jane Ex; property_details=123 Home Road (joint tenants); ownership_shares=50/50 equity; children_details=Sam age 5; sep_date=1/6/2025

### Expected Output
SEPARATION AGREEMENT

BETWEEN:
(1) John Partner
(2) Jane Ex

BACKGROUND:
1. The parties cohabited from [date] to 1 June 2025
2. They jointly own 123 Home Road...

AGREED TERMS:
1. PROPERTY
1.1 The property shall be sold and proceeds divided equally...

## Risk Warnings
⚠️ Cannot override court on children
⚠️ Property agreements binding
⚠️ No automatic financial claims

### Audience: SME Business Owner
- Agreement when unmarried couples split
- Covers property, debts, children
- More limited than divorce rights
- Property agreements usually binding

--------

---
prompt_id: fam-summarising-form-e-055
title: Form E Financial Summary
practice_area: family
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, divorce, financial-disclosure, form-e]
---

## Purpose
Summarise Form E financial disclosure identifying key assets, issues, and areas requiring investigation.

## Jurisdiction
England & Wales

## Professional Context
Essential analysis in financial remedy proceedings to understand financial landscape and identify disclosure gaps.

## Base Prompt
Summarise Form E from {{party_name}} in {{case_name}}:
Extract:
1. Total assets summary
2. Income (all sources)
3. Liabilities
4. Pensions (CEVs)
5. Business interests
6. Property portfolio
7. Conduct allegations
8. Contributions claimed
9. Needs arguments
10. Proposed settlement
Analyse:
- Disclosure gaps
- Valuation issues
- Hidden assets indicators
- Lifestyle inconsistencies
- Questionnaire priorities

## Variables
- {{party_name}} – disclosing party
- {{case_name}} – case reference

## Example Usage
### Input
party_name=Husband; case_name=Wife v Husband

### Expected Output
FORM E ANALYSIS - HUSBAND

ASSET SUMMARY:
- FMH: £850,000 (£350k equity)
- Business: £500,000 (needs SJE valuation)
- Pensions: £425,000
- Savings: £50,000
Total: £925,000 net

INCOME:
- Salary: £120,000
- Dividends: Variable (3-year average £40k)

RED FLAGS:
1. Business valuation seems low
2. Lifestyle exceeds declared income...

## Risk Warnings
⚠️ Full frank disclosure mandatory
⚠️ Check against tax returns
⚠️ Consider lifestyle analysis

### Audience: SME Business Owner
- Complete financial disclosure in divorce
- Shows all assets, debts, income
- Forms basis of settlement negotiations
- False disclosure is contempt

--------

---
prompt_id: fam-drafting-occupation-056
title: Occupation Order Application
practice_area: family
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, occupation-order, domestic-abuse, injunction]
---

## Purpose
Draft occupation order application under Family Law Act 1996 seeking to regulate occupation of family home.

## Jurisdiction
England & Wales

## Professional Context
Emergency application in cases of domestic abuse or relationship breakdown requiring one party to leave home.

## Base Prompt
Draft occupation order application for {{applicant_name}} against {{respondent_name}}:
- Property: {{property_address}}
- Ownership: {{ownership_status}}
- Relationship: {{relationship_type}}
- Children: {{children_present}}
- Incidents: {{abuse_summary}}
Apply s.33/35/36/37/38 tests:
1. Property rights
2. Conduct
3. Housing needs
4. Financial resources
5. Health impact
6. Child welfare
Include:
- Statement support
- Urgency factors
- Without notice justification
- Power of arrest need

## Variables
- {{applicant_name}} – person seeking order
- {{respondent_name}} – person to be excluded
- {{property_address}} – family home
- {{ownership_status}} – who owns/rents
- {{relationship_type}} – married/cohabiting
- {{children_present}} – children details
- {{abuse_summary}} – conduct relied on

## Example Usage
### Input
applicant_name=Jane Smith; respondent_name=John Smith; property_address=10 Family Home; ownership_status=joint tenants; relationship_type=married; children_present=2 children ages 5 and 8; abuse_summary=physical violence, police called twice

### Expected Output
IN THE FAMILY COURT AT [LOCATION]

OCCUPATION ORDER APPLICATION

APPLICANT: Jane Smith
RESPONDENT: John Smith

The Applicant applies under s.33 Family Law Act 1996 for:
1. An order that the Respondent shall leave 10 Family Home
2. An order prohibiting the Respondent from entering...

## Risk Warnings
⚠️ High threshold for exclusion
⚠️ Without notice needs justification
⚠️ Consider non-molestation order too

### Audience: SME Business Owner
- Court order about who lives in family home
- Can exclude even property owner
- Needs serious reasons (violence/abuse)
- Emergency applications possible

--------

---
prompt_id: fam-reviewing-pension-057
title: Pension Sharing Order Review
practice_area: family
task_type: reviewing
jurisdiction: england-wales
complexity: advanced
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, pension, divorce, sharing-order]
---

## Purpose
Review pension sharing annex ensuring accuracy and compliance with scheme requirements.

## Jurisdiction
England & Wales

## Professional Context
Technical document requiring precision as errors can invalidate transfer or cause significant delays.

## Base Prompt
Review pension sharing annex for {{pension_scheme}}:
- Member: {{member_name}}
- Transfer percentage: {{percentage}}%
- CE value: £{{cev_amount}}
- CE date: {{cev_date}}
Check:
1. Scheme details accuracy
2. Member reference numbers
3. Percentage vs amount
4. External/internal transfer
5. State pension exclusion
6. Multiple pensions clarity
7. Charges allocation
8. Implementation timeline
9. Death provisions
10. Information requirements

## Variables
- {{pension_scheme}} – pension provider
- {{member_name}} – pension member
- {{percentage}} – share percentage
- {{cev_amount}} – cash equivalent
- {{cev_date}} – valuation date

## Example Usage
### Input
pension_scheme=ABC Company Pension; member_name=John Smith; percentage=40; cev_amount=500000; cev_date=1/3/2025

### Expected Output
PENSION SHARING ANNEX REVIEW

Scheme: ABC Company Pension
Member: John Smith
Share: 40% (£200,000 based on CE)

ISSUES IDENTIFIED:
1. CE date over 4 months old - update needed
2. External transfer not specified...

AMENDMENTS REQUIRED:
- Update CE to within 4 months
- Confirm external transfer election...

## Risk Warnings
⚠️ Precision essential for validity
⚠️ Time limits for implementation
⚠️ Charges can be significant

### Audience: SME Business Owner
- Splits pension on divorce
- Very technical requirements
- Mistakes cause major delays
- Can be pension scheme charges

--------

---
prompt_id: fam-analysis-maintenance-058
title: Child Maintenance Analysis
practice_area: family
task_type: analysis
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, child-maintenance, cms, financial]
---

## Purpose
Calculate child maintenance options comparing CMS formula with potential agreed arrangements.

## Jurisdiction
England & Wales

## Professional Context
Advising on child maintenance levels whether through Child Maintenance Service or private agreement.

## Base Prompt
Calculate child maintenance for {{paying_parent}}:
- Gross income: £{{annual_income}}
- Children: {{number_children}}
- Overnight stays: {{overnight_care}}
- Other children: {{other_dependents}}
Calculate:
1. CMS basic rate
2. Reduced rate if applicable
3. Shared care reduction
4. Variations possible
5. Top-up arguments (school fees, activities)
6. Agreement vs CMS pros/cons
7. Enforcement options
8. Review triggers
Compare with {{receiving_parent}} needs budget.

## Variables
- {{paying_parent}} – maintenance payer
- {{annual_income}} – gross yearly income
- {{number_children}} – qualifying children
- {{overnight_care}} – nights per year
- {{other_dependents}} – other relevant children
- {{receiving_parent}} – maintenance receiver

## Example Usage
### Input
paying_parent=Father; annual_income=60000; number_children=2; overnight_care=104; other_dependents=0; receiving_parent=Mother

### Expected Output
CHILD MAINTENANCE CALCULATION

Payer: Father (£60,000 gross)
Children: 2
Shared care: 104 nights (2/7)

CMS CALCULATION:
- Basic rate: 16% of gross
- Annual: £9,600
- Shared care reduction: 2/7
- Adjusted annual: £6,857
- Monthly payment: £571

ALTERNATIVE OPTIONS:
1. Private agreement with extras...

## Risk Warnings
⚠️ CMS can backdate
⚠️ Variations for wealth possible
⚠️ School fees separate issue

### Audience: SME Business Owner
- Regular payments for children
- Formula based on income
- Reduced for overnight stays
- Can agree different amount privately

--------

---
prompt_id: crim-drafting-repsletter-059
title: Police Station Representation Letter
practice_area: criminal
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 25
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, police-station, representation, pace]
---

## Purpose
Draft initial letter to police confirming representation and asserting client's rights during detention.

## Jurisdiction
England & Wales

## Professional Context
Urgent communication when client arrested, establishing legal representation and protecting fundamental rights.

## Base Prompt
Draft police station representation letter for {{client_name}} detained at {{police_station}}:
- Reference: {{custody_number}}
- Alleged offence: {{offence}}
- Time of detention: {{detention_time}}
- Interview scheduled: {{interview_time}}
Assert:
1. Confirmation of representation
2. Immediate consultation required
3. Disclosure request
4. Fit for interview assessment
5. Appropriate adult if needed
6. Interpreter requirements
7. Medical needs
8. PACE compliance
9. Interview postponement if needed
10. Bail representations preparation

## Variables
- {{client_name}} – detained person
- {{police_station}} – place of detention
- {{custody_number}} – custody reference
- {{offence}} – alleged offence
- {{detention_time}} – when detained
- {{interview_time}} – planned interview

## Example Usage
### Input
client_name=David Client; police_station=Central Police Station; custody_number=CP/12345/25; offence=fraud by false representation; detention_time=14:30 today; interview_time=18:00 today

### Expected Output
URGENT - LEGAL REPRESENTATION

To: Custody Sergeant, Central Police Station
Re: David Client - Custody Ref: CP/12345/25

I confirm I represent Mr David Client currently detained at your station.

I require:
1. Immediate private consultation with my client
2. Full disclosure of evidence...

## Risk Warnings
⚠️ Time critical for PACE limits
⚠️ Preserve right to silence
⚠️ Check vulnerability issues

### Audience: SME Business Owner
- Formal notice of legal representation
- Protects rights at police station
- Requests evidence disclosure
- Can delay interview if needed

--------

---
prompt_id: crim-reviewing-disclosure-060
title: Initial Disclosure Review
practice_area: criminal
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, disclosure, idpc, prosecution]
---

## Purpose
Review initial prosecution disclosure identifying strengths, weaknesses and further disclosure requirements.

## Jurisdiction
England & Wales

## Professional Context
First assessment of prosecution case strength essential for plea advice and case strategy.

## Base Prompt
Review initial disclosure in R v {{defendant_name}} for {{charges}}:
{{disclosure_bundle}}
Assess:
1. Each element of offences
2. Evidence strength/admissibility
3. Witness credibility
4. Unused material hints
5. Expert evidence needs
6. CCTV/phone evidence
7. Identification issues
8. Disclosure failures
9. Abuse of process arguments
10. Plea negotiation potential
Identify:
- Defence statement strategy
- S.8 application needs
- Defence witnesses required

## Variables
- {{defendant_name}} – accused person
- {{charges}} – offences charged
- {{disclosure_bundle}} – prosecution papers

## Example Usage
### Input
defendant_name=Smith; charges=assault occasioning ABH; disclosure_bundle=[IDPC bundle contents]

### Expected Output
DISCLOSURE REVIEW - R v SMITH

CHARGE: Assault occasioning ABH (s.47 OAPA)

PROSECUTION STRENGTHS:
1. Independent witness to assault
2. Injury photos consistent with allegation...

WEAKNESSES IDENTIFIED:
1. No CCTV despite town centre location
2. Witness statements taken 3 weeks later...

FURTHER DISCLOSURE REQUIRED:
- 999 call recording
- First account from complainant...

## Risk Warnings
⚠️ Time limits for defence statement
⚠️ Disclosure obligations ongoing
⚠️ Alibi notice requirements

### Audience: SME Business Owner
- Prosecution evidence assessment
- Identifies what's missing
- Shapes defence strategy
- Basis for plea decisions

--------

---
prompt_id: crim-drafting-basis-061
title: Basis of Plea Document
practice_area: criminal
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, plea, basis, sentencing]
---

## Purpose
Draft basis of plea for guilty plea on specific factual basis requiring prosecution and court agreement.

## Jurisdiction
England & Wales

## Professional Context
Used where defendant admits offence but disputes prosecution version of facts affecting sentence.

## Base Prompt
Draft basis of plea for {{defendant_name}} pleading guilty to {{offence}}:
- Prosecution version: {{pros_facts}}
- Defence version: {{def_facts}}
- Key disputes: {{disputed_elements}}
Structure:
1. Charge admitted
2. Elements agreed
3. Specific disputes
4. Mitigation factors
5. Sentencing impact
6. Newton hearing position
Ensure:
- Admits all elements
- Clear factual basis
- Affects sentence legitimately
- Supported by evidence

## Variables
- {{defendant_name}} – defendant
- {{offence}} – charge pleading to
- {{pros_facts}} – prosecution version
- {{def_facts}} – defendant's version
- {{disputed_elements}} – key differences

## Example Usage
### Input
defendant_name=John Defendant; offence=assault by beating; pros_facts=unprovoked punch causing injury; def_facts=single push in self-defence after provocation; disputed_elements=level of violence, provocation, injuries

### Expected Output
BASIS OF PLEA

R v John Defendant

1. The Defendant pleads guilty to assault by beating contrary to s.39 Criminal Justice Act 1988.

2. The Defendant accepts:
   - Physical contact with complainant
   - No lawful justification...

3. The Defendant's basis is:
   - Single push not punch
   - Response to aggression...

## Risk Warnings
⚠️ Must admit all elements
⚠️ Newton hearing if not accepted
⚠️ Can affect credit for plea

### Audience: SME Business Owner
- Admits crime but disputes details
- Important for sentencing level
- Prosecution must accept or trial on facts
- Affects how judge sentences

--------

---
prompt_id: crim-analysis-sentencing-062
title: Sentencing Guidelines Analysis
practice_area: criminal
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 35
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, sentencing, guidelines, mitigation]
---

## Purpose
Analyse likely sentence using Sentencing Council guidelines identifying realistic range and mitigation impact.

## Jurisdiction
England & Wales

## Professional Context
Essential for client advice on plea decisions and managing expectations about likely outcomes.

## Base Prompt
Analyse sentencing for {{defendant_name}} convicted of {{offence}}:
- Previous convictions: {{antecedents}}
- Offence category: {{category_factors}}
- Harm factors: {{harm_level}}
- Culpability: {{culpability_level}}
Apply guidelines:
1. Starting point identification
2. Category range
3. Aggravating factors
4. Mitigating factors
5. Guilty plea reduction
6. Totality principle
7. Dangerousness assessment
8. Ancillary orders
Consider:
- Custody threshold
- Suspended sentence
- Community options

## Variables
- {{defendant_name}} – person being sentenced
- {{offence}} – conviction offence
- {{antecedents}} – criminal record
- {{category_factors}} – offence specifics
- {{harm_level}} – harm caused
- {{culpability_level}} – culpability factors

## Example Usage
### Input
defendant_name=Smith; offence=ABH s.47; antecedents=no previous convictions; category_factors=single punch, minor injury; harm_level=Category 3 lesser harm; culpability_level=Category C lesser culpability

### Expected Output
SENTENCING ANALYSIS - SMITH

Offence: ABH (s.47 OAPA)
Guidelines: Assault Definitive Guideline

CATEGORISATION:
- Harm: Category 3 (minor injury)
- Culpability: Category C (lesser role)
- Starting point: Medium level community order
- Range: Low level community - 26 weeks custody

ADJUSTMENTS:
- Previous good character: reduce
- Early guilty plea (33%): reduce by third...

LIKELY OUTCOME: Community order 12-18 months

## Risk Warnings
⚠️ Guidelines are starting point only
⚠️ Judge has discretion
⚠️ Consider all options

### Audience: SME Business Owner
- Predicts likely sentence using official guidelines
- Shows impact of guilty plea
- Identifies if prison likely
- Helps decide whether to plead

--------

---
prompt_id: crim-summarising-abcs-063
title: ABE Interview Summary
practice_area: criminal
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, abe-interview, evidence, disclosure]
---

## Purpose
Summarise Achieving Best Evidence interview identifying key evidence, inconsistencies and cross-examination areas.

## Jurisdiction
England & Wales

## Professional Context
Analysis of video recorded evidence from vulnerable witnesses crucial for defence preparation.

## Base Prompt
Summarise ABE interview of {{witness_name}} in {{case_name}}:
- Duration: {{interview_length}}
- Date recorded: {{recording_date}}
- Interviewer: {{interviewer_details}}
Extract:
1. Key allegations timeline
2. Specific details provided
3. Inconsistencies noted
4. Leading questions
5. Emotional presentation
6. Corroboration needs
7. Memory issues
8. Contamination risks
9. Rapport phase problems
10. Closure issues
Identify cross-examination topics while respecting vulnerability.

## Variables
- {{witness_name}} – interviewed witness
- {{case_name}} – case reference
- {{interview_length}} – duration
- {{recording_date}} – when recorded
- {{interviewer_details}} – officer details

## Example Usage
### Input
witness_name=Child A; case_name=R v Defendant; interview_length=47 minutes; recording_date=1/3/2025; interviewer_details=DC Jones

### Expected Output
ABE INTERVIEW SUMMARY
Witness: Child A
Case: R v Defendant
Duration: 47 minutes

KEY ALLEGATIONS:
1. Three incidents alleged
2. Dates: "after Christmas", "before birthday"...

EVIDENTIAL ISSUES:
1. Leading questions at mins 23-25
2. Inconsistent descriptions of location...

CAREFUL CROSS-EXAMINATION AREAS:
- Surrounding circumstances only
- Test reliability not credibility...

## Risk Warnings
⚠️ Special measures likely
⚠️ Ground rules hearing required
⚠️ Careful with vulnerable witnesses

### Audience: SME Business Owner
- Video evidence from vulnerable witnesses
- Replaces live evidence in court
- Needs careful analysis
- Cross-examination restricted

--------

---
prompt_id: crim-drafting-representation-064
title: Plea in Mitigation Speech
practice_area: criminal
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, mitigation, sentencing, advocacy]
---

## Purpose
Draft structured plea in mitigation for sentencing hearing emphasising factors reducing sentence severity.

## Jurisdiction
England & Wales

## Professional Context
Advocacy document for sentencing hearing aiming to achieve lowest appropriate sentence.

## Base Prompt
Draft mitigation for {{defendant_name}} being sentenced for {{offence}}:
Personal circumstances:
- Age: {{age}}
- Employment: {{job_status}}
- Family: {{family_situation}}
- Health: {{health_issues}}
- Previous character: {{character}}
Structure:
1. Acknowledge offence seriousness
2. Guilty plea credit
3. Remorse/insight
4. Personal mitigation
5. Offence context
6. Impact of sentence
7. Rehabilitation prospects
8. Realistic proposal
Include references/testimonials approach.

## Variables
- {{defendant_name}} – person being sentenced
- {{offence}} – conviction
- {{age}} – defendant's age
- {{job_status}} – employment situation
- {{family_situation}} – dependents
- {{health_issues}} – relevant conditions
- {{character}} – previous behaviour

## Example Usage
### Input
defendant_name=Sarah Jones; offence=theft from employer; age=35; job_status=now unemployed, previously accounts clerk; family_situation=single mother, 2 children; health_issues=depression, financial stress; character=15 years good employment

### Expected Output
PLEA IN MITIGATION
Sarah Jones - Theft from Employer

May it please Your Honour,

Ms Jones appears before you having pleaded guilty at the earliest opportunity to theft from her employer. She fully accepts the seriousness of breaching trust...

PERSONAL MITIGATION:
This offence is entirely out of character for Ms Jones, who worked without incident for 15 years...

## Risk Warnings
⚠️ Don't minimise offence
⚠️ Be realistic about outcome
⚠️ Have references ready

### Audience: SME Business Owner
- Speech to reduce sentence
- Explains personal circumstances
- Shows why lesser sentence appropriate
- Must accept wrongdoing first

--------

---
prompt_id: crim-reviewing-caution-065
title: Simple Caution Review
practice_area: criminal
task_type: reviewing
jurisdiction: england-wales
complexity: basic
time_estimate: 20
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, caution, admission, disposal]
---

## Purpose
Review proposed simple caution assessing appropriateness and long-term implications for client.

## Jurisdiction
England & Wales

## Professional Context
Advising on whether to accept caution as alternative to prosecution considering admission requirements and consequences.

## Base Prompt
Review caution proposal for {{client_name}} for {{offence}}:
- Evidence strength: {{evidence_summary}}
- Admission made: {{admission_status}}
- Previous record: {{previous_cautions}}
- Immigration status: {{immigration}}
Consider:
1. Prosecution likelihood
2. Conviction chances
3. Caution criteria met
4. Future implications:
   - Enhanced DBS disclosure
   - Professional body impact
   - Immigration consequences
   - Travel restrictions
   - Future prosecution weight
5. Alternatives available
Advise on acceptance.

## Variables
- {{client_name}} – person offered caution
- {{offence}} – alleged offence
- {{evidence_summary}} – prosecution evidence
- {{admission_status}} – whether admitted
- {{previous_cautions}} – criminal history
- {{immigration}} – visa status if relevant

## Example Usage
### Input
client_name=Professional Client; offence=common assault; evidence_summary=one witness, CCTV unclear; admission_status=partial admission in interview; previous_cautions=none; immigration=British citizen

### Expected Output
CAUTION ASSESSMENT

Client: Professional Client
Offence: Common assault
Evidence: Moderate strength

RECOMMENDATION: Decline caution

REASONING:
1. Weak prosecution case
2. Professional implications severe
3. Enhanced DBS disclosure for life...

ALTERNATIVES:
- Request NFA
- Challenge prosecution decision...

## Risk Warnings
⚠️ Cautions require full admission
⚠️ Shows on enhanced DBS
⚠️ Can affect professional status

### Audience: SME Business Owner
- Police warning instead of court
- Must admit offence fully
- Still goes on record
- Can affect job prospects

--------

---
prompt_id: immig-drafting-sponsor-066
title: Sponsor Licence Application
practice_area: immigration
task_type: drafting
jurisdiction: uk-wide
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [immigration, sponsor-licence, skilled-worker, business]
---

## Purpose
Draft sponsor licence application for UK employer seeking to hire overseas workers under Points Based System.

## Jurisdiction
UK-wide

## Professional Context
Complex application requiring detailed evidence of genuine need and robust HR systems for compliance.

## Base Prompt
Prepare sponsor licence application for {{company_name}}:
- Business type: {{business_sector}}
- Size: {{employee_count}} employees
- Roles needed: {{job_roles}}
- Trading history: {{years_trading}}
Structure application covering:
1. Genuine trading business
2. HR systems adequacy
3. Key personnel suitability
4. Genuine vacancies evidence
5. Resident labour test
6. Compliance history
7. Financial stability
8. Office inspection readiness
9. Document retention systems
10. Reporting procedures
Include supporting evidence checklist.

## Variables
- {{company_name}} – applicant employer
- {{business_sector}} – industry type
- {{employee_count}} – company size
- {{job_roles}} – positions for migrants
- {{years_trading}} – business history

## Example Usage
### Input
company_name=Tech Solutions Ltd; business_sector=software development; employee_count=45; job_roles=senior developers, data scientists; years_trading=5 years

### Expected Output
SPONSOR LICENCE APPLICATION
Applicant: Tech Solutions Ltd

BUSINESS OVERVIEW:
Tech Solutions Ltd is an established software development company...

KEY PERSONNEL:
- Authorising Officer: [Director details]
- Key Contact: [HR Manager]
- Level 1 User: [HR Officer]

GENUINE VACANCY EVIDENCE:
1. Recruitment attempts (3 months)
2. Skills shortage evidence...

## Risk Warnings
⚠️ UKVI inspections possible
⚠️ Compliance duties ongoing
⚠️ Fees non-refundable

### Audience: SME Business Owner
- Licence to hire overseas workers
- Strict requirements and systems needed
- Ongoing compliance duties
- Can be inspected anytime

--------

---
prompt_id: immig-reviewing-refusal-067
title: Visa Refusal Review
practice_area: immigration
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [immigration, visa-refusal, appeal, review]
---

## Purpose
Review visa refusal decision identifying grounds for challenge through administrative review or appeal.

## Jurisdiction
UK-wide

## Professional Context
Critical analysis determining whether refusal can be challenged and best route for challenge.

## Base Prompt
Review refusal of {{visa_type}} for {{applicant_name}}:
{{refusal_letter}}
Analyse:
1. Refusal reasons validity
2. Evidence considered/ignored
3. Policy applied correctly
4. Human rights engaged
5. Procedural fairness
6. Fresh evidence available
7. Legal errors made
8. Discretion exercised
Determine:
- Administrative review eligibility
- Appeal rights available
- Judicial review grounds
- Fresh application prospects
- Urgent factors

## Variables
- {{visa_type}} – type of visa refused
- {{applicant_name}} – refused applicant
- {{refusal_letter}} – decision letter

## Example Usage
### Input
visa_type=Skilled Worker visa; applicant_name=Dr A Kumar; refusal_letter=[full refusal text]

### Expected Output
VISA REFUSAL ANALYSIS
Applicant: Dr A Kumar
Application: Skilled Worker

REFUSAL GROUNDS:
1. Salary threshold not met - £38,700 offered vs £38,701 required
2. English language - certificate validity questioned

CHALLENGE PROSPECTS: Strong

ERRORS IDENTIFIED:
1. Salary - failed to include guaranteed bonus
2. English - certificate valid, caseworker error...

RECOMMENDED ACTION: Administrative Review

## Risk Warnings
⚠️ Strict time limits apply
⚠️ Limited grounds for review
⚠️ No new evidence usually

### Audience: SME Business Owner
- Reviews why visa was refused
- Identifies if decision wrong
- Determines challenge options
- Time limits very strict

--------

---
prompt_id: immig-analysis-switching-068
title: In-Country Visa Switch Analysis
practice_area: immigration
task_type: analysis
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [immigration, switching, visa-categories, eligibility]
---

## Purpose
Analyse eligibility and requirements for switching visa categories within UK avoiding need to return home.

## Jurisdiction
UK-wide

## Professional Context
Strategic advice on changing immigration status while remaining in UK, navigating complex switching restrictions.

## Base Prompt
Analyse visa switch for {{applicant_name}}:
- Current visa: {{current_status}}
- Expiry date: {{visa_expiry}}
- Target visa: {{desired_status}}
- Circumstances: {{change_reason}}
Assess:
1. Switching permitted
2. Eligibility requirements
3. Timing considerations
4. Financial requirements
5. English language
6. Maintenance funds
7. Employer obligations
8. Family members
9. Gap risks
10. Settlement impact
Provide application timeline.

## Variables
- {{applicant_name}} – visa holder
- {{current_status}} – present visa type
- {{visa_expiry}} – current visa end date
- {{desired_status}} – target visa category
- {{change_reason}} – why switching

## Example Usage
### Input
applicant_name=Maria Student; current_status=Student visa; visa_expiry=30/9/2025; desired_status=Skilled Worker; change_reason=job offer after graduation

### Expected Output
VISA SWITCHING ANALYSIS
Applicant: Maria Student
Current: Student visa (expires 30/9/2025)
Target: Skilled Worker

SWITCHING PERMITTED: Yes

REQUIREMENTS:
1. Job offer from licensed sponsor
2. Certificate of Sponsorship
3. Salary minimum £38,700 or going rate
4. English - met through degree...

TIMELINE:
By 1/8/25: Secure job offer
By 15/8/25: CoS assigned...

## Risk Warnings
⚠️ Cannot switch from visitor
⚠️ Apply before expiry
⚠️ No gap permitted

### Audience: SME Business Owner
- Changing visa type within UK
- Strict rules on what's allowed
- Must apply before current expires
- Different requirements for each route

--------

---
prompt_id: immig-drafting-fresh-069
title: Fresh Asylum Claim
practice_area: immigration
task_type: drafting
jurisdiction: uk-wide
complexity: advanced
time_estimate: 180
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [immigration, asylum, human-rights, fresh-claim]
---

## Purpose
Draft fresh asylum claim based on new evidence or changed circumstances following previous refusal.

## Jurisdiction
UK-wide

## Professional Context
Complex submission requiring clear demonstration of genuinely fresh grounds meeting paragraph 353 requirements.

## Base Prompt
Draft fresh claim for {{applicant_name}} from {{country_origin}}:
- Previous refusal: {{refusal_date}}
- New evidence: {{new_material}}
- Changed circumstances: {{country_changes}}
- UK connections: {{uk_factors}}
Structure submission:
1. Previous claim summary
2. Why claim is fresh
3. New evidence analysis
4. Country situation update
5. Risk on return
6. Article 3 ECHR
7. Article 8 factors
8. Best interests of children
9. Exceptional circumstances
10. Why significantly different
Include objective evidence bundle.

## Variables
- {{applicant_name}} – asylum seeker
- {{country_origin}} – country of origin
- {{refusal_date}} – previous refusal
- {{new_material}} – new evidence
- {{country_changes}} – country developments
- {{uk_factors}} – UK ties/family

## Example Usage
### Input
applicant_name=Mr X; country_origin=Afghanistan; refusal_date=2023; new_material=Taliban takeover, new threats; country_changes=regime change August 2021; uk_factors=2 British children, partner

### Expected Output
FRESH CLAIM SUBMISSION

RE: Mr X (HO Ref: [number])
Country: Afghanistan

This submission constitutes a fresh claim under paragraph 353...

NEW MATERIAL:
1. Taliban control of Afghanistan
2. Specific threats due to previous employment
3. Country guidance case update...

## Risk Warnings
⚠️ High threshold for fresh claim
⚠️ Must be significantly different
⚠️ Further submissions rights limited

### Audience: SME Business Owner
- New asylum claim after refusal
- Needs genuinely new evidence
- Very difficult to succeed
- Specialist legal help essential

--------

---
prompt_id: immig-summarising-bundle-070
title: Immigration Appeal Bundle Review
practice_area: immigration
task_type: summarising
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [immigration, appeal, tribunal, evidence]
---

## Purpose
Review and summarise immigration appeal bundle identifying key evidence and weak points for tribunal hearing.

## Jurisdiction
UK-wide

## Professional Context
Pre-hearing analysis essential for effective tribunal advocacy and identifying additional evidence needs.

## Base Prompt
Review appeal bundle for {{appellant_name}} v SSHD:
Summarise:
1. Grounds of appeal
2. Refusal reasons
3. Evidence filed:
   - Witness statements
   - Documentary evidence
   - Expert reports
   - Country evidence
4. Respondent's review
5. Missing evidence
6. Credibility issues
7. Legal arguments
8. Previous determinations
Create hearing preparation notes including:
- Key points checklist
- Cross-examination areas
- Submissions structure

## Variables
- {{appellant_name}} – person appealing

## Example Usage
### Input
appellant_name=Mrs Y

### Expected Output
APPEAL BUNDLE ANALYSIS
Appellant: Mrs Y
Appeal: HU/12345/2024

GROUNDS OF APPEAL:
1. Article 8 - family life with British children
2. Best interests of children
3. Proportionality of removal

KEY EVIDENCE:
- 3 witness statements (appellant, spouse, teacher)
- School reports showing impact
- Medical evidence - child's anxiety...

WEAKNESSES:
- Immigration history
- Lack of integration evidence...

## Risk Warnings
⚠️ Bundle deadlines strict
⚠️ Late evidence may be excluded
⚠️ Original documents for hearing

### Audience: SME Business Owner
- Court papers for immigration appeal
- Must include all evidence
- Identifies what's missing
- Guides hearing preparation

--------

---
prompt_id: ip-drafting-agreement-071
title: Software Development Agreement
practice_area: intellectual-property
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, software, development, copyright]
---

## Purpose
Draft software development agreement ensuring clear IP ownership and comprehensive specifications.

## Jurisdiction
England & Wales

## Professional Context
Protecting client's interests in custom software development with appropriate IP assignments and delivery terms.

## Base Prompt
Draft software development agreement between {{client_company}} and {{developer_company}}:
- Project: {{project_description}}
- Phases: {{development_phases}}
- Timeline: {{delivery_schedule}}
- Budget: £{{total_cost}}
- Payment: {{payment_terms}}
Include:
1. Detailed specifications schedule
2. IP ownership/assignment
3. Moral rights waiver
4. Third-party components
5. Source code provision
6. Testing/acceptance
7. Warranties and indemnities
8. Maintenance terms
9. Confidentiality
10. Dispute escalation

## Variables
- {{client_company}} – commissioning party
- {{developer_company}} – software developer
- {{project_description}} – software purpose
- {{development_phases}} – project stages
- {{delivery_schedule}} – timeline
- {{total_cost}} – project value
- {{payment_terms}} – payment structure

## Example Usage
### Input
client_company=Retail Systems Ltd; developer_company=CodeCraft Ltd; project_description=inventory management system; development_phases=design, development, testing, deployment; delivery_schedule=6 months; total_cost=150000; payment_terms=monthly milestones

### Expected Output
SOFTWARE DEVELOPMENT AGREEMENT

BETWEEN:
(1) Retail Systems Ltd ("Client")
(2) CodeCraft Ltd ("Developer")

1. DEFINITIONS AND INTERPRETATION
"Software" means the inventory management system...

2. DEVELOPMENT SERVICES
The Developer shall develop the Software in accordance with the Specification...

## Risk Warnings
⚠️ IP must vest in client clearly
⚠️ Define acceptance criteria precisely
⚠️ Consider escrow for source code

### Audience: SME Business Owner
- Contract for custom software creation
- Ensures you own the code
- Sets clear delivery milestones
- Protects against project failure

--------

---
prompt_id: ip-reviewing-trademark-072
title: Trademark Application Review
practice_area: intellectual-property
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, trademark, brand, registration]
---

## Purpose
Review draft trademark application identifying potential objections and strengthening distinctiveness claims.

## Jurisdiction
UK-wide

## Professional Context
Pre-filing review to maximize registration chances and avoid costly objections or oppositions.

## Base Prompt
Review trademark application for {{mark_name}}:
- Type: {{mark_type}}
- Classes: {{nice_classes}}
- Goods/services: {{specification}}
- Applicant: {{applicant_name}}
- Prior search: {{search_results}}
Assess:
1. Inherent distinctiveness
2. Descriptiveness risk
3. Similarity to prior marks
4. Specification clarity
5. Class coverage adequacy
6. Series mark potential
7. Priority claims
8. Disclaimer needs
9. Translation issues
10. Opposition risks
Recommend improvements.

## Variables
- {{mark_name}} – trademark applied for
- {{mark_type}} – word/logo/combined
- {{nice_classes}} – classification numbers
- {{specification}} – goods/services list
- {{applicant_name}} – trademark owner
- {{search_results}} – clearance search outcome

## Example Usage
### Input
mark_name=TECHGUARD; mark_type=word mark; nice_classes=9, 42; specification=computer security software, IT security services; applicant_name=Security Solutions Ltd; search_results=similar marks in class 9

### Expected Output
TRADEMARK APPLICATION REVIEW
Mark: TECHGUARD
Classes: 9, 42

DISTINCTIVENESS: Medium risk
- "TECH" + "GUARD" potentially descriptive
- Suggest evidence of use...

PRIOR MARKS CONFLICT:
- "TECHGUARDIAN" in class 9
- Likelihood of confusion...

RECOMMENDATIONS:
1. Narrow specification to reduce conflict
2. Add logo element for distinctiveness...

## Risk Warnings
⚠️ Descriptive marks often refused
⚠️ Broad specifications invite opposition
⚠️ Consider Madrid Protocol

### Audience: SME Business Owner
- Protects your brand name/logo
- Must be distinctive not descriptive
- Check for similar existing marks
- Worth protecting core brands

--------

---
prompt_id: ip-analysis-infringement-073
title: Patent Infringement Analysis
practice_area: intellectual-property
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, patent, infringement, freedom-to-operate]
---

## Purpose
Analyse potential patent infringement comparing product features against patent claims systematically.

## Jurisdiction
UK-wide

## Professional Context
Critical analysis for product launch decisions or defence against infringement allegations.

## Base Prompt
Analyse infringement risk for {{product_name}} against {{patent_number}}:
- Patent holder: {{patentee}}
- Priority date: {{priority_date}}
- Product features: {{product_description}}
- Claims focus: {{relevant_claims}}
Conduct:
1. Claim construction
2. Feature-by-feature analysis
3. Doctrine of equivalents
4. Prior art relevance
5. Validity challenges
6. Prosecution history
7. Design around options
8. Licence availability
9. Invalidity prospects
10. Risk quantification
Provide FTO opinion structure.

## Variables
- {{product_name}} – product being assessed
- {{patent_number}} – patent of concern
- {{patentee}} – patent owner
- {{priority_date}} – patent priority
- {{product_description}} – product details
- {{relevant_claims}} – key patent claims

## Example Usage
### Input
product_name=SmartSensor v2; patent_number=GB2500123; patentee=Sensor Corp; priority_date=2018-03-15; product_description=wireless temperature sensor with mesh networking; relevant_claims=claims 1-3 covering networked sensors

### Expected Output
PATENT INFRINGEMENT ANALYSIS
Product: SmartSensor v2
Patent: GB2500123 (Sensor Corp)

CLAIM 1 ANALYSIS:
"A wireless sensor system comprising..."
- Element A: present in product ✓
- Element B: arguable equivalent
- Element C: not present ✗

INFRINGEMENT RISK: Medium
- Literal infringement unlikely
- Equivalents doctrine risk...

MITIGATION OPTIONS:
1. Design modification to avoid Element B
2. Validity challenge based on prior art...

## Risk Warnings
⚠️ Get formal FTO opinion
⚠️ Wilful infringement penalties
⚠️ Consider patent insurance

### Audience: SME Business Owner
- Checks if product infringes patents
- Compares your product to patent claims
- High stakes - can stop sales
- May need design changes

--------

---
prompt_id: ip-drafting-licence-074
title: IP Licence Agreement
practice_area: intellectual-property
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 75
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, licensing, royalties, technology]
---

## Purpose
Draft intellectual property licence balancing licensor protection with licensee commercial needs.

## Jurisdiction
England & Wales

## Professional Context
Structuring IP licensing deal ensuring clear scope, appropriate controls, and fair commercial terms.

## Base Prompt
Draft IP licence between {{licensor}} and {{licensee}}:
- IP type: {{ip_rights}}
- Scope: {{licence_scope}}
- Territory: {{territory}}
- Term: {{licence_term}}
- Royalty: {{royalty_structure}}
- Exclusivity: {{exclusive_status}}
Include:
1. Grant clause precision
2. Field of use limits
3. Quality control
4. IP improvements
5. Sublicensing rights
6. Royalty calculations
7. Records and audit
8. IP warranties
9. Infringement procedure
10. Termination events

## Variables
- {{licensor}} – IP owner
- {{licensee}} – party receiving licence
- {{ip_rights}} – patents/copyright/trademark
- {{licence_scope}} – permitted uses
- {{territory}} – geographic limits
- {{licence_term}} – duration
- {{royalty_structure}} – payment terms
- {{exclusive_status}} – exclusive/non-exclusive

## Example Usage
### Input
licensor=Innovation Corp; licensee=Manufacturer Ltd; ip_rights=patent portfolio for widgets; licence_scope=manufacture and sell; territory=UK and EU; licence_term=5 years; royalty_structure=5% net sales; exclusive_status=exclusive in UK

### Expected Output
INTELLECTUAL PROPERTY LICENCE AGREEMENT

Date: [  ]

BETWEEN:
(1) Innovation Corp ("Licensor")
(2) Manufacturer Ltd ("Licensee")

RECITALS
A. Licensor owns patents relating to widget technology
B. Licensee wishes to manufacture under licence...

1. GRANT OF LICENCE
1.1 The Licensor grants to the Licensee an exclusive licence in the UK...

## Risk Warnings
⚠️ Define scope precisely
⚠️ Monitor quality standards
⚠️ Audit rights essential

### Audience: SME Business Owner
- Permission to use someone's IP
- Can be exclusive or shared
- Usually involves royalty payments
- Strictly limited to agreed scope

--------

---
prompt_id: ip-reviewing-nda-075
title: Technology NDA Review
practice_area: intellectual-property
task_type: reviewing
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, nda, confidentiality, technology]
---

## Purpose
Review non-disclosure agreement for technology discussions ensuring adequate protection without hindering business.

## Jurisdiction
England & Wales

## Professional Context
Pre-collaboration review ensuring confidential information protected while enabling meaningful technical discussions.

## Base Prompt
Review NDA for {{disclosing_party}} sharing with {{receiving_party}}:
- Purpose: {{disclosure_purpose}}
- Information type: {{info_category}}
- Duration: {{nda_term}}
Check for:
1. Definition breadth
2. Permitted use scope
3. Standard exceptions
4. Residuals clause
5. Non-solicitation
6. Return obligations
7. Injunctive relief
8. Governing law
9. Third party rights
10. Future dealings
Flag unusual or problematic terms.

## Variables
- {{disclosing_party}} – information owner
- {{receiving_party}} – recipient
- {{disclosure_purpose}} – why disclosing
- {{info_category}} – type of information
- {{nda_term}} – confidentiality period

## Example Usage
### Input
disclosing_party=Startup Ltd; receiving_party=BigCorp Plc; disclosure_purpose=potential investment/acquisition; info_category=proprietary algorithms and business model; nda_term=3 years

### Expected Output
NDA REVIEW - STARTUP LTD

PURPOSE: Investment discussions
TERM: 3 years

KEY CONCERNS:
1. Residuals clause - allows mental retention
   Risk: Core algorithms vulnerable
   
2. No non-compete protection
   Risk: BigCorp could develop competing product...

AMENDMENTS NEEDED:
1. Delete residuals clause
2. Add limited non-compete...

## Risk Warnings
⚠️ Residuals clauses risky for code
⚠️ Check group company coverage
⚠️ Injunction rights important

### Audience: SME Business Owner
- Protects your confidential information
- Watch for loopholes and exceptions
- Should cover likely scenarios
- Consider what you're really protecting

--------

---
prompt_id: ip-summarising-portfolio-076
title: IP Portfolio Audit Summary
practice_area: intellectual-property
task_type: summarising
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, portfolio, audit, strategy]
---

## Purpose
Summarise intellectual property portfolio identifying gaps, renewal needs, and commercialisation opportunities.

## Jurisdiction
UK-wide

## Professional Context
Strategic IP review for business planning, investment rounds, or exit preparation.

## Base Prompt
Audit IP portfolio for {{company_name}}:
Catalogue:
1. Patents (granted/pending)
2. Trademarks (registered/used)
3. Designs (registered/unregistered)
4. Copyright works
5. Trade secrets
6. Domain names
Assess each for:
- Protection status
- Geographic coverage
- Renewal dates
- Ownership clarity
- Encumbrances
- Commercial use
- Enforcement history
- Valuation factors
Identify strategic recommendations.

## Variables
- {{company_name}} – portfolio owner

## Example Usage
### Input
company_name=Tech Innovations Ltd

### Expected Output
IP PORTFOLIO AUDIT - TECH INNOVATIONS LTD

PATENTS:
- 3 granted UK patents (software methods)
- 1 pending EPO application
- Gap: No US protection

TRADEMARKS:
- Core brand registered UK/EU
- Product names unprotected
- Risk: Competitor filed similar mark...

STRATEGIC PRIORITIES:
1. File US patents before bar date
2. Oppose conflicting trademark
3. Document trade secrets properly...

VALUE ASSESSMENT:
- Core patents: £500k-1M
- Brand value: £200k...

## Risk Warnings
⚠️ Renewal deadlines critical
⚠️ Chain of title issues common
⚠️ Unregistered rights need proof

### Audience: SME Business Owner
- Complete review of IP assets
- Identifies protection gaps
- Shows renewal deadlines
- Values IP for investment/sale

--------

---
prompt_id: ip-drafting-assignment-077
title: IP Assignment Deed
practice_area: intellectual-property
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, assignment, transfer, ownership]
---

## Purpose
Draft deed assigning intellectual property rights with comprehensive warranties and clear transfer mechanism.

## Jurisdiction
England & Wales

## Professional Context
Formal transfer of IP ownership requiring precision to ensure complete and valid assignment.

## Base Prompt
Draft IP assignment from {{assignor}} to {{assignee}}:
- IP description: {{ip_assets}}
- Consideration: £{{purchase_price}}
- Effective date: {{transfer_date}}
- Territory: {{geographic_scope}}
Include:
1. Full title guarantee
2. Present and future rights
3. Rights of action
4. Moral rights waiver
5. Further assurance
6. Power of attorney
7. Warranties on ownership
8. No encumbrances
9. Prosecution cooperation
10. Formal execution
Address all IP types comprehensively.

## Variables
- {{assignor}} – current IP owner
- {{assignee}} – new IP owner
- {{ip_assets}} – IP being transferred
- {{purchase_price}} – consideration
- {{transfer_date}} – when effective
- {{geographic_scope}} – worldwide/limited

## Example Usage
### Input
assignor=Developer Name; assignee=Company Ltd; ip_assets=mobile app including code, designs, and branding; purchase_price=25000; transfer_date=immediate; geographic_scope=worldwide

### Expected Output
DEED OF ASSIGNMENT

This Deed is made the [  ] day of [  ] 2025

BETWEEN:
(1) [Developer Name] ("Assignor")
(2) Company Ltd (Company No. 12345678) ("Assignee")

WHEREAS the Assignor has developed certain intellectual property...

NOW THIS DEED WITNESSES:

1. ASSIGNMENT
The Assignor hereby assigns to the Assignee absolutely...

## Risk Warnings
⚠️ Must be executed as deed
⚠️ Consider tax implications
⚠️ Register where possible

### Audience: SME Business Owner
- Legal transfer of IP ownership
- Must be properly executed deed
- Covers all current and future rights
- Essential for clean ownership

--------

---
prompt_id: ip-analysis-fto-078
title: Freedom to Operate Analysis
practice_area: intellectual-property
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 180
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, freedom-to-operate, clearance, risk]
---

## Purpose
Comprehensive freedom to operate analysis for new product launch identifying third party IP risks.

## Jurisdiction
UK-wide

## Professional Context
Essential pre-launch diligence to identify and mitigate IP infringement risks across all relevant rights.

## Base Prompt
Conduct FTO analysis for {{product_name}} launch in {{market_territory}}:
- Product features: {{technical_description}}
- Launch date: {{planned_launch}}
- Competitors: {{main_competitors}}
Search and analyse:
1. Patent landscape
2. Design rights
3. Trademark clearance
4. Copyright materials
5. Trade secrets risks
For each right:
- Infringement assessment
- Validity considerations
- Design-around options
- Licence prospects
- Geographic coverage
- Enforcement history
Provide risk matrix and mitigation plan.

## Variables
- {{product_name}} – new product
- {{market_territory}} – launch markets
- {{technical_description}} – product details
- {{planned_launch}} – target date
- {{main_competitors}} – key competitors

## Example Usage
### Input
product_name=SmartHome Hub; market_territory=UK and EU; technical_description=IoT controller with voice activation and mesh networking; planned_launch=Q4 2025; main_competitors=Amazon, Google, Apple

### Expected Output
FTO ANALYSIS - SMARTHOME HUB

PATENT LANDSCAPE:
- 47 relevant patent families identified
- 12 high relevance to product features
- 3 blocking patents identified

HIGH RISK PATENTS:
1. EP1234567 (Amazon) - Voice activation
   - Claim 1: potential infringement
   - Validity: questionable over prior art...

RISK MITIGATION PLAN:
1. Immediate: Design modification for voice feature
2. Short-term: Approach Amazon for licence...

## Risk Warnings
⚠️ Cannot guarantee complete clearance
⚠️ New filings emerge constantly
⚠️ Consider opinion insurance

### Audience: SME Business Owner
- Checks if product clear to launch
- Searches all types of IP rights
- Identifies blocking patents/marks
- Suggests ways to avoid problems

--------

---
prompt_id: reg-drafting-dsar-079
title: Data Subject Access Request Response
practice_area: regulatory-compliance
task_type: drafting
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [data-protection, gdpr, dsar, privacy]
---

## Purpose
Draft compliant response to data subject access request balancing transparency with exemptions.

## Jurisdiction
UK-wide

## Professional Context
Legal requirement to respond within one month with all personal data unless exemptions apply.

## Base Prompt
Draft DSAR response for {{data_subject}} to {{data_controller}}:
- Request date: {{request_date}}
- ID verified: {{id_confirmation}}
- Search conducted: {{systems_searched}}
- Data found: {{data_categories}}
- Exemptions applicable: {{exemptions}}
Include:
1. Confirmation of processing
2. Purposes of processing
3. Categories of data
4. Recipients/transfers
5. Retention periods
6. Rights reminder
7. Source of data
8. Automated decisions
9. Exemptions applied
10. Further rights
Ensure UK GDPR compliance.

## Variables
- {{data_subject}} – requester name
- {{data_controller}} – organisation
- {{request_date}} – when received
- {{id_confirmation}} – ID verification done
- {{systems_searched}} – systems checked
- {{data_categories}} – types of data found
- {{exemptions}} – applicable exemptions

## Example Usage
### Input
data_subject=John Customer; data_controller=Retail Ltd; request_date=1/6/25; id_confirmation=passport verified; systems_searched=CRM, email, CCTV; data_categories=contact details, purchase history, CCTV footage; exemptions=none applicable

### Expected Output
Dear Mr Customer,

DATA SUBJECT ACCESS REQUEST RESPONSE

Thank you for your request dated 1 June 2025. Following verification of your identity, we have conducted a thorough search...

YOUR PERSONAL DATA:
1. Contact Information
   - Name: John Customer
   - Address: [as held]...

PURPOSES OF PROCESSING:
- Contract performance
- Marketing (with consent)...

## Risk Warnings
⚠️ One month deadline strict
⚠️ Must include all personal data
⚠️ Exemptions narrowly interpreted

### Audience: SME Business Owner
- Legal right to access personal data
- Must respond within one month
- Include all data unless exempt
- Free for first request

--------

---
prompt_id: reg-reviewing-privacy-080
title: Privacy Policy Compliance Review
practice_area: regulatory-compliance
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [data-protection, privacy-policy, gdpr, website]
---

## Purpose
Review privacy policy for UK GDPR compliance identifying gaps and required updates.

## Jurisdiction
UK-wide

## Professional Context
Essential compliance document requiring regular updates to reflect processing activities and legal requirements.

## Base Prompt
Review privacy policy for {{company_name}} website:
{{policy_text}}
Check against UK GDPR Article 13/14:
1. Controller identity
2. DPO contact details
3. Processing purposes
4. Lawful bases stated
5. Legitimate interests
6. Recipients/transfers
7. International transfers
8. Retention periods
9. Subject rights
10. Complaint rights
11. Statutory requirements
12. Automated decisions
13. Source of data
Assess clarity and accessibility.

## Variables
- {{company_name}} – business name
- {{policy_text}} – current policy

## Example Usage
### Input
company_name=E-Commerce Ltd; policy_text=[current privacy policy]

### Expected Output
PRIVACY POLICY REVIEW
Company: E-Commerce Ltd

COMPLIANCE GAPS:
1. Lawful basis - not specified for marketing
2. Retention periods - vague "as long as necessary"
3. International transfers - no safeguards mentioned...

REQUIRED ADDITIONS:
- Specific lawful basis for each purpose
- Clear retention periods
- UK representative details...

ACCESSIBILITY ISSUES:
- Language too legalistic
- No layered approach
- Mobile formatting poor

## Risk Warnings
⚠️ ICO fines for non-compliance
⚠️ Must be easily accessible
⚠️ Update when processing changes

### Audience: SME Business Owner
- Required notice about data use
- Must include specific information
- Needs regular updates
- Should be clear and readable

--------

---
prompt_id: reg-analysis-breach-081
title: Data Breach Impact Assessment
practice_area: regulatory-compliance
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 90
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [data-protection, breach, incident, gdpr]
---

## Purpose
Assess data breach severity determining notification requirements and mitigation priorities.

## Jurisdiction
UK-wide

## Professional Context
Critical incident response requiring rapid assessment of risks and legal notification obligations.

## Base Prompt
Assess data breach at {{organisation_name}}:
- Incident type: {{breach_type}}
- Data affected: {{data_categories}}
- Individuals affected: {{number_affected}}
- Detection date: {{discovery_date}}
- Cause: {{breach_cause}}
Evaluate:
1. Risk to individuals
2. Severity assessment
3. ICO notification requirement
4. Individual notification need
5. Mitigation measures
6. Evidence preservation
7. Root cause analysis
8. Cross-border aspects
9. Law enforcement involvement
10. PR/media strategy
Create action plan with timelines.

## Variables
- {{organisation_name}} – affected entity
- {{breach_type}} – nature of breach
- {{data_categories}} – types compromised
- {{number_affected}} – scale of breach
- {{discovery_date}} – when discovered
- {{breach_cause}} – how occurred

## Example Usage
### Input
organisation_name=Health Clinic Ltd; breach_type=ransomware attack; data_categories=patient records including health data; number_affected=5000 patients; discovery_date=today at 9am; breach_cause=phishing email opened

### Expected Output
DATA BREACH ASSESSMENT
Organisation: Health Clinic Ltd
Severity: HIGH RISK

ICO NOTIFICATION: Required within 72 hours
- Special category data involved
- Large scale (5000 individuals)
- Health data particularly sensitive

INDIVIDUAL NOTIFICATION: Required without undue delay
- High risk to rights and freedoms
- Potential discrimination/harm...

IMMEDIATE ACTIONS:
1. Hour 1-4: Isolate systems, preserve evidence
2. Hour 4-8: Draft ICO notification...

## Risk Warnings
⚠️ 72-hour ICO deadline
⚠️ Criminal offence if cover up
⚠️ Compensation claims likely

### Audience: SME Business Owner
- Urgent response needed for data loss
- Must notify ICO within 72 hours
- May need to tell individuals
- Document everything done

--------

---
prompt_id: reg-drafting-policy-082
title: Anti-Money Laundering Policy
practice_area: regulatory-compliance
task_type: drafting
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 90
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [aml, money-laundering, compliance, financial]
---

## Purpose
Draft comprehensive AML policy meeting regulatory requirements for relevant business sector.

## Jurisdiction
UK-wide

## Professional Context
Mandatory compliance framework for regulated entities preventing business being used for money laundering.

## Base Prompt
Draft AML policy for {{business_name}} in {{sector_type}}:
- Business activities: {{services_provided}}
- Risk profile: {{risk_level}}
- Staff size: {{employee_count}}
Include:
1. Risk assessment framework
2. Customer due diligence procedures
3. Enhanced due diligence triggers
4. Simplified due diligence criteria
5. Ongoing monitoring
6. Suspicious activity reporting
7. Record keeping requirements
8. Staff training program
9. MLRO appointment
10. Regular review process
Align with MLR 2017 requirements.

## Variables
- {{business_name}} – company name
- {{sector_type}} – business sector
- {{services_provided}} – regulated activities
- {{risk_level}} – inherent risk
- {{employee_count}} – staff numbers

## Example Usage
### Input
business_name=Property Agents Ltd; sector_type=estate agency; services_provided=residential sales and lettings; risk_level=medium-high; employee_count=25

### Expected Output
ANTI-MONEY LAUNDERING POLICY
Property Agents Ltd

1. INTRODUCTION
This policy ensures compliance with Money Laundering Regulations 2017...

2. RISK ASSESSMENT
2.1 Our business faces the following risks:
- High value transactions
- Property investment by overseas persons...

3. CUSTOMER DUE DILIGENCE
3.1 Identity Verification
All clients must provide:
- Photo ID (passport/driving licence)
- Proof of address (utility bill <3 months)...

## Risk Warnings
⚠️ Personal liability for failures
⚠️ Unlimited fines possible
⚠️ Regular updates essential

### Audience: SME Business Owner
- Legal requirement for many businesses
- Prevents criminal use of services
- Must verify customer identity
- Report suspicious transactions

--------

---
prompt_id: reg-reviewing-contract-083
title: Consumer Contract Compliance Review
practice_area: regulatory-compliance
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [consumer-law, contracts, compliance, b2c]
---

## Purpose
Review consumer contracts for compliance with consumer protection regulations and unfair terms legislation.

## Jurisdiction
UK-wide

## Professional Context
Ensuring B2C contracts comply with extensive consumer protection framework avoiding enforcement action.

## Base Prompt
Review consumer contract for {{business_name}}:
{{contract_terms}}
Check compliance with:
1. Consumer Rights Act 2015
2. Unfair terms assessment
3. Pre-contract information
4. Cancellation rights
5. Digital content rules
6. Services standards
7. Remedies availability
8. ADR information
9. Plain English usage
10. Prominence of key terms
Identify:
- Potentially unfair terms
- Missing mandatory information
- Enforcement risks

## Variables
- {{business_name}} – trader name
- {{contract_terms}} – terms to review

## Example Usage
### Input
business_name=Online Retailer Ltd; contract_terms=[standard T&Cs]

### Expected Output
CONSUMER CONTRACT REVIEW
Business: Online Retailer Ltd

UNFAIR TERMS IDENTIFIED:
1. Clause 5.2 - Excludes statutory rights
   Status: Void and unenforceable
   
2. Clause 8.1 - Hidden 12-month contract
   Issue: Not prominent/transparent...

MISSING INFORMATION:
- 14-day cancellation rights
- ADR provider details
- Complaint handling process...

ENFORCEMENT RISK: High
- CMA could take action
- Trading Standards involvement likely

## Risk Warnings
⚠️ Unfair terms void automatically
⚠️ Criminal offence for some breaches
⚠️ Reputational damage

### Audience: SME Business Owner
- Special rules for consumer contracts
- Many standard terms are unfair
- Must give cancellation rights
- Plain English essential

--------
