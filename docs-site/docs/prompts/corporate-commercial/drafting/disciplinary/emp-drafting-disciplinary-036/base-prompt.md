---
prompt_id: emp-drafting-disciplinary-036
title: Disciplinary Invitation Letter
practice_area: employment
task_type: drafting
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 30
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, disciplinary, acas, misconduct]
---

## Purpose
Draft disciplinary hearing invitation letter complying with ACAS Code and establishing fair process.

## Jurisdiction
UK-wide

## Professional Context
First formal step in disciplinary process requiring careful drafting to ensure procedural fairness.

## Base Prompt
```text
Draft disciplinary invitation letter for {{employee_name}} regarding {{allegation_type}}:
- Incident date(s): {{incident_dates}}
- Allegations: {{specific_allegations}}
- Hearing date: {{hearing_date}}
- Hearing location: {{location}}
- Hearing chair: {{chair_name}}
Include:
1. Clear allegation details
2. Potential outcomes (including dismissal if applicable)
3. Right to be accompanied
4. Evidence enclosed
5. Witness list
6. Request for employee's evidence
7. Alternative date process
8. Suspension status
9. Confidentiality reminder
Ensure ACAS Code compliance.
```

## Variables
```text
- {{employee_name}} – employee facing disciplinary
- {{allegation_type}} – misconduct category
- {{incident_dates}} – when alleged incidents occurred
- {{specific_allegations}} – detailed allegations
- {{hearing_date}} – proposed hearing date/time
- {{location}} – hearing venue
- {{chair_name}} – who will chair hearing
```

## Example Usage
### Input
employee_name=Tom Jones; allegation_type=gross misconduct - theft; incident_dates=1-15 June 2025; specific_allegations=taking £500 cash from till on 3 occasions; hearing_date=1 July 2025 at 2pm; location=HR Office, Head Office; chair_name=Sarah Director

### Expected Output
PRIVATE AND CONFIDENTIAL
Tom Jones
[Address]

Dear Tom

INVITATION TO DISCIPLINARY HEARING

I write to invite you to attend a disciplinary hearing to discuss allegations of gross misconduct...

## Risk Warnings
⚠️ Give adequate time to prepare
⚠️ Include all evidence relied upon
⚠️ State dismissal risk if relevant

### Audience: SME Business Owner
- Formal notice of disciplinary hearing
- Must be clear about allegations
- Employee rights must be stated
- Sets foundation for fair process
