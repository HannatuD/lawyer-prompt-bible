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
```text
Draft AML policy for \{\{business_name\}\} in \{\{sector_type\}\}:
- Business activities: \{\{services_provided\}\}
- Risk profile: \{\{risk_level\}\}
- Staff size: \{\{employee_count\}\}

Include:
1. Risk assessment framework
2. Customer due diligence procedures
3. Enhanced due diligence triggers
4. Simplified due diligence criteria
5. Ongoing monitoring
6. Suspicious activity reporting
7. Record-keeping requirements
8. Staff training program
9. MLRO appointment
10. Regular review process

Align with MLR 2017 requirements.


## Variables
- \{\{business_name\}\} – company name
- \{\{sector_type\}\} – business sector
- \{\{services_provided\}\} – regulated activities
- \{\{risk_level\}\} – inherent risk
- \{\{employee_count\}\} – staff numbers

### Input
business_name=Property Agents Ltd; sector_type=estate agency;
services_provided=residential sales and lettings; risk_level=medium-high;
employee_count=25

### Expected Output
ANTI-MONEY LAUNDERING POLICY
Property Agents Ltd

1. INTRODUCTION
This policy ensures compliance with Money Laundering Regulations 2017…

2. RISK ASSESSMENT
2.1 Our business faces the following risks:
- High-value transactions
- Property investment by overseas persons…

3. CUSTOMER DUE DILIGENCE
3.1 Identity Verification
All clients must provide:
- Photo ID (passport/driving licence)
- Proof of address (utility bill less than 3 months old)…


## Risk Warnings
⚠️ Personal liability for failures
⚠️ Unlimited fines possible
⚠️ Regular updates essential

### Audience: SME Business Owner
- Legal requirement for many businesses
- Prevents criminal use of services
- Must verify customer identity
- Report suspicious transactions
