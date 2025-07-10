---
prompt_id: lit-reviewing-defence-017
title: Defence Review and Response Strategy
practice_area: litigation
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, defence, strategy, county-court]
---

## Purpose
Review a defence filed in civil proceedings and develop response strategy including potential Part 18 requests and reply considerations.

## Jurisdiction
England & Wales

## Professional Context
Used when analysing opponent's defence to identify weaknesses, admissions, and areas requiring clarification or challenge.

## Base Prompt
Review the following defence filed in {{case_name}}:
{{defence_text}}
Analyse and report on:
1. Admissions made (express and implied)
2. Bare denials requiring evidence
3. Positive case advanced
4. Procedural defects
5. Limitation/statutory defences
6. Contributory negligence claims
7. Set-off or counterclaim
8. Areas needing clarification
Recommend:
- Part 18 requests needed
- Key evidence to obtain
- Witness requirements
- Whether to file reply

## Variables
- {{case_name}} – case title/reference
- {{defence_text}} – the defence document

## Example Usage
### Input
case_name=ABC Ltd v XYZ Ltd; defence_text=[full defence document]

### Expected Output
DEFENCE ANALYSIS - ABC LTD V XYZ LTD

ADMISSIONS IDENTIFIED:
1. Contract existence (para 3)
2. Some services provided (para 7)...

STRATEGIC RECOMMENDATIONS:
1. Part 18 Request for:
   - Clarification of "defective performance"...

## Risk Warnings
⚠️ Note deadline for reply (14 days)
⚠️ Check for amendments to statements of case
⚠️ Consider costs implications of challenges

### Audience: SME Business Owner
- Analyses opponent's response to your claim
- Identifies what they admit vs deny
- Highlights weak points to attack
- Guides evidence needed to win
