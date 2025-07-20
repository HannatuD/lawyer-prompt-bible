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
Review software license agreement for \\{\\{licensee_name\\}\\} licensing \\{\\{software_name\\}\\} from \\{\\{vendor_name\\}\\}:
- License type: \\{\\{license_model\\}\\}
- Annual cost: £\\{\\{annual_fee\\}\\}
- User/usage scope: \\{\\{scope\\}\\}
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
- \\{\\{licensee_name\\}\\} – customer company name
- \\{\\{software_name\\}\\} – software product/service
- \\{\\{vendor_name\\}\\} – software supplier
- \\{\\{license_model\\}\\} – "perpetual", "subscription", or "SaaS"
- \\{\\{annual_fee\\}\\} – yearly cost
- \\{\\{scope\\}\\} – "enterprise-wide" or specific limits

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
