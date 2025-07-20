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
Draft application notice for \{\{applicant\}\} seeking \{\{relief_sought\}\} in \{\{case_name\}\}:
- Legal basis: \{\{legal_grounds\}\}
- Evidence relied on: \{\{evidence_summary\}\}
- Time estimate: \{\{hearing_time\}\}
- Urgency: \{\{urgent_basis\}\}
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
- \{\{applicant\}\} – applying party
- \{\{relief_sought\}\} – what order seeking
- \{\{case_name\}\} – case reference
- \{\{legal_grounds\}\} – CPR rule/legal basis
- \{\{evidence_summary\}\} – supporting evidence
- \{\{hearing_time\}\} – estimated hearing length
- \{\{urgent_basis\}\} – if urgent, why

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
