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
Summarise title report for \{\{property_address\}\}:
\{\{title_documents\}\}
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
- \{\{property_address\}\} – subject property
- \{\{title_documents\}\} – title report content

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
