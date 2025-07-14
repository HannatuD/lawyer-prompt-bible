---
prompt_id: crim-summarising-abcs-063
title: ABE Interview Summary
practice_area: criminal
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, abe-interview, evidence, disclosure]
---

## Purpose
Summarise Achieving Best Evidence interview identifying key evidence, inconsistencies and cross-examination areas.

## Jurisdiction
England & Wales

## Professional Context
Analysis of video recorded evidence from vulnerable witnesses crucial for defence preparation.

## Base Prompt
Summarise ABE interview of {{witness_name}} in {{case_name}}:
- Duration: {{interview_length}}
- Date recorded: {{recording_date}}
- Interviewer: {{interviewer_details}}
Extract:
1. Key allegations timeline
2. Specific details provided
3. Inconsistencies noted
4. Leading questions
5. Emotional presentation
6. Corroboration needs
7. Memory issues
8. Contamination risks
9. Rapport phase problems
10. Closure issues
Identify cross-examination topics while respecting vulnerability.

## Variables
- {{witness_name}} – interviewed witness
- {{case_name}} – case reference
- {{interview_length}} – duration
- {{recording_date}} – when recorded
- {{interviewer_details}} – officer details

## Example Usage
### Input
witness_name=Child A; case_name=R v Defendant; interview_length=47 minutes; recording_date=1/3/2025; interviewer_details=DC Jones

### Expected Output
ABE INTERVIEW SUMMARY
Witness: Child A
Case: R v Defendant
Duration: 47 minutes

KEY ALLEGATIONS:
1. Three incidents alleged
2. Dates: "after Christmas", "before birthday"...

EVIDENTIAL ISSUES:
1. Leading questions at mins 23-25
2. Inconsistent descriptions of location...

CAREFUL CROSS-EXAMINATION AREAS:
- Surrounding circumstances only
- Test reliability not credibility...

## Risk Warnings
⚠️ Special measures likely
⚠️ Ground rules hearing required
⚠️ Careful with vulnerable witnesses

### Audience: SME Business Owner
- Video evidence from vulnerable witnesses
- Replaces live evidence in court
- Needs careful analysis
- Cross-examination restricted
