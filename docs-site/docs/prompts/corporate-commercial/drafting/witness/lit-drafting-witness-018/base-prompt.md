---
prompt_id: lit-drafting-witness-018
title: Witness Statement Template
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, witness-statement, evidence, trial]
---

## Purpose
Create witness statement template complying with CPR Practice Direction 32 for use in civil proceedings.

## Jurisdiction
England & Wales

## Professional Context
Used for preparing witness evidence in civil litigation, ensuring compliance with formal requirements and effective presentation of evidence.

## Base Prompt
Draft a witness statement template for \{\{witness_name\}\} in \{\{case_name\}\} covering \{\{subject_matter\}\}:
Structure per PD 32:
1. Formal heading with case details
2. Witness details and qualification to give evidence
3. Source of information and belief
4. Chronological factual account
5. Reference to exhibited documents
6. Opinion evidence (if expert)
7. Statement of truth
Key events: \{\{key_events\}\}
Documents to exhibit: \{\{exhibits\}\}
Ensure:
- First person narrative
- Factual not argumentative
- Clear paragraph numbering
- Proper exhibit referencing

## Variables
- \{\{witness_name\}\} – person giving evidence
- \{\{case_name\}\} – case title and number
- \{\{subject_matter\}\} – what evidence covers
- \{\{key_events\}\} – important dates/events
- \{\{exhibits\}\} – documents to attach

## Example Usage
### Input
witness_name=John Smith; case_name=ABC Ltd v XYZ Ltd (Claim No. 123456); subject_matter=contract negotiations and performance; key_events=meetings on 1/1/25, contract signed 15/1/25, problems arose 1/3/25; exhibits=contract, emails, meeting notes

### Expected Output
IN THE COUNTY COURT AT [LOCATION]
Claim No. 123456
BETWEEN:
ABC LTD (Claimant)
and
XYZ LTD (Defendant)

WITNESS STATEMENT OF JOHN SMITH

I, JOHN SMITH, of [address], Company Director, say as follows:...

## Risk Warnings
⚠️ Witness must read and sign personally
⚠️ False statements risk contempt proceedings
⚠️ Keep to relevant factual evidence

### Audience: SME Business Owner
- Your written evidence for court
- Tells your story in numbered paragraphs
- Attach key documents as exhibits
- Must be truthful - false statements are criminal
