---
prompt_id: lit-summarising-bundle-021
title: Trial Bundle Index
practice_area: litigation
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, trial-bundle, evidence, procedure]
---

## Purpose
Create comprehensive index for trial bundle ensuring logical organisation and compliance with court requirements.

## Jurisdiction
England & Wales

## Professional Context
Used when preparing trial bundles, requiring systematic organisation of all case documents for efficient court reference.

## Base Prompt
Create trial bundle index for \\{\\{case_name\\}\\} organising these documents:
\\{\\{document_list\\}\\}
Structure per Practice Direction:
Section A: Pleadings
- Claim form
- Particulars of claim
- Defence
- Reply (if any)
Section B: Orders
- Case management orders
Section C: Evidence
- Witness statements
- Expert reports
Section D: Correspondence
- Key inter-party letters
Section E: Contract/Core documents
Provide:
- Logical pagination
- Clear descriptions
- Chronological ordering within sections
- Cross-reference table

## Variables
- \\{\\{case_name\\}\\} – case title
- \\{\\{document_list\\}\\} – all documents for inclusion

## Example Usage
### Input
case_name=ABC Ltd v XYZ Ltd; document_list=claim form, particulars, defence, CMC order, witness statements (3), contract, invoices, correspondence file

### Expected Output
TRIAL BUNDLE INDEX
ABC LTD v XYZ LTD
Claim No. 123456

SECTION A - PLEADINGS
A1-5: Claim Form (dated 1.1.25)
A6-15: Particulars of Claim
A16-25: Defence...

## Risk Warnings
⚠️ Include only admissible documents
⚠️ Check pagination accuracy
⚠️ Agree bundle with opponent

### Audience: SME Business Owner
- Organises all case documents for trial
- Judge uses this to find documents quickly
- Must be logical and complete
- Usually agreed with other side
