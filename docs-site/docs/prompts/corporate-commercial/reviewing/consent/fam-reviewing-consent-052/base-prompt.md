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
Review consent order for \\{\\{applicant\\}\\} and \\{\\{respondent\\}\\} in divorce:
\\{\\{draft_order\\}\\}
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
- \\{\\{applicant\\}\\} – applying party
- \\{\\{respondent\\}\\} – responding party
- \\{\\{draft_order\\}\\} – draft consent order

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
