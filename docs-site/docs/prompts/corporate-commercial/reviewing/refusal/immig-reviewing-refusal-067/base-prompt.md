---
prompt_id: immig-reviewing-refusal-067
title: Visa Refusal Review
practice_area: immigration
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [immigration, visa-refusal, appeal, review]
---

## Purpose
Review visa refusal decision identifying grounds for challenge through administrative review or appeal.

## Jurisdiction
UK-wide

## Professional Context
Critical analysis determining whether refusal can be challenged and best route for challenge.

## Base Prompt
Review refusal of \{\{visa_type\}\} for \{\{applicant_name\}\}:
\{\{refusal_letter\}\}
Analyse:
1. Refusal reasons validity
2. Evidence considered/ignored
3. Policy applied correctly
4. Human rights engaged
5. Procedural fairness
6. Fresh evidence available
7. Legal errors made
8. Discretion exercised
Determine:
- Administrative review eligibility
- Appeal rights available
- Judicial review grounds
- Fresh application prospects
- Urgent factors

## Variables
- \{\{visa_type\}\} – type of visa refused
- \{\{applicant_name\}\} – refused applicant
- \{\{refusal_letter\}\} – decision letter

## Example Usage
### Input
visa_type=Skilled Worker visa; applicant_name=Dr A Kumar; refusal_letter=[full refusal text]

### Expected Output
VISA REFUSAL ANALYSIS
Applicant: Dr A Kumar
Application: Skilled Worker

REFUSAL GROUNDS:
1. Salary threshold not met - £38,700 offered vs £38,701 required
2. English language - certificate validity questioned

CHALLENGE PROSPECTS: Strong

ERRORS IDENTIFIED:
1. Salary - failed to include guaranteed bonus
2. English - certificate valid, caseworker error...

RECOMMENDED ACTION: Administrative Review

## Risk Warnings
⚠️ Strict time limits apply
⚠️ Limited grounds for review
⚠️ No new evidence usually

### Audience: SME Business Owner
- Reviews why visa was refused
- Identifies if decision wrong
- Determines challenge options
- Time limits very strict
