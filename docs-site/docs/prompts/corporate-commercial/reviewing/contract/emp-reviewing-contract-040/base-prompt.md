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
```text
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
```

## Variables
```text
- {{employer}} – company name
- {{worker_type}} – type of casual worker
- {{contract_text}} – contract to review
```

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
