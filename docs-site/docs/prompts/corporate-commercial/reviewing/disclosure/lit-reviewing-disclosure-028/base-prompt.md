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
Review disclosure list from \\{\\{disclosing_party\\}\\} in \\{\\{case_name\\}\\}:
\\{\\{disclosure_list\\}\\}
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
- \\{\\{disclosing_party\\}\\} – opponent's name
- \\{\\{case_name\\}\\} – case reference
- \\{\\{disclosure_list\\}\\} – their list of documents

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
