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
