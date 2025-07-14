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
