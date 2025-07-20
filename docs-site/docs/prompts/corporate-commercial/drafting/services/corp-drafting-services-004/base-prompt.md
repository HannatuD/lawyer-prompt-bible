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
Draft a professional services agreement where \{\{service_provider\}\} provides \{\{service_type\}\} to \{\{client_name\}\}:
- Service term: \{\{term_length\}\}
- Fees: £\{\{fee_amount\}\} \{\{payment_frequency\}\}
- Notice period: \{\{notice_period\}\}
Include:
- Detailed services schedule
- IP ownership (work product to client)
- Confidentiality both ways
- Professional indemnity insurance requirement
- Liability cap at annual fees
- GDPR processor terms if applicable

## Variables
- \{\{service_provider\}\} – consultant/agency name
- \{\{client_name\}\} – customer name
- \{\{service_type\}\} – description of services
- \{\{term_length\}\} – "12 months" or "project basis"
- \{\{fee_amount\}\} – fee in GBP
- \{\{payment_frequency\}\} – "monthly" or "per milestone"
- \{\{notice_period\}\} – "30 days" typical

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
