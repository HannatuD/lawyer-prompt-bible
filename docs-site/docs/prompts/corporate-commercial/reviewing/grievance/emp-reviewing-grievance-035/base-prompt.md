---
prompt_id: emp-reviewing-grievance-035
title: Grievance Response Review
practice_area: employment
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, grievance, acas, procedure]
---

## Purpose
Review draft grievance outcome letter ensuring ACAS Code compliance and minimising tribunal risk.

## Jurisdiction
UK-wide

## Professional Context
Critical document in grievance process requiring careful drafting to avoid discrimination claims or procedural challenges.

## Base Prompt
Review grievance outcome letter regarding {{employee_name}}'s complaint about {{grievance_subject}}:
{{draft_letter}}
Check for:
1. ACAS Code compliance
2. Each complaint addressed
3. Evidence consideration shown
4. Clear outcomes on each point
5. Reasoning explained
6. Impartiality demonstrated
7. Appeal rights stated
8. Timescales clear
9. Discrimination risks
10. Admission avoidance
Suggest improvements for:
- Clarity and structure
- Legal protection
- Employee relations

## Variables
- {{employee_name}} – complainant
- {{grievance_subject}} – nature of complaint
- {{draft_letter}} – draft response

## Example Usage
### Input
employee_name=Jane Smith; grievance_subject=bullying by line manager; draft_letter=[draft outcome letter text]

### Expected Output
GRIEVANCE OUTCOME REVIEW

ACAS COMPLIANCE: ✓ Meets requirements
STRUCTURE: Needs improvement

SUGGESTED AMENDMENTS:
Para 3: Remove "we accept management could have handled this better"
Replace with: "While different approach might have been taken..."

## Risk Warnings
⚠️ Avoid admissions of liability
⚠️ Ensure appeal deadline clear
⚠️ Consider protected characteristics

### Audience: SME Business Owner
- Reviews your response to employee complaint
- Ensures follows proper process
- Avoids creating legal problems
- Maintains employee relations
