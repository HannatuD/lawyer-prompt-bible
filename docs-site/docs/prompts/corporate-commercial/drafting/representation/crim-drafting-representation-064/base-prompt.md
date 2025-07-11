---
prompt_id: crim-drafting-representation-064
title: Plea in Mitigation Speech
practice_area: criminal
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, mitigation, sentencing, advocacy]
---

## Purpose
Draft structured plea in mitigation for sentencing hearing emphasising factors reducing sentence severity.

## Jurisdiction
England & Wales

## Professional Context
Advocacy document for sentencing hearing aiming to achieve lowest appropriate sentence.

## Base Prompt
```text
Draft mitigation for {{defendant_name}} being sentenced for {{offence}}:
Personal circumstances:
- Age: {{age}}
- Employment: {{job_status}}
- Family: {{family_situation}}
- Health: {{health_issues}}
- Previous character: {{character}}
Structure:
1. Acknowledge offence seriousness
2. Guilty plea credit
3. Remorse/insight
4. Personal mitigation
5. Offence context
6. Impact of sentence
7. Rehabilitation prospects
8. Realistic proposal
Include references/testimonials approach.
```

## Variables
```text
- {{defendant_name}} – person being sentenced
- {{offence}} – conviction
- {{age}} – defendant's age
- {{job_status}} – employment situation
- {{family_situation}} – dependents
- {{health_issues}} – relevant conditions
- {{character}} – previous behaviour
```

## Example Usage
### Input
defendant_name=Sarah Jones; offence=theft from employer; age=35; job_status=now unemployed, previously accounts clerk; family_situation=single mother, 2 children; health_issues=depression, financial stress; character=15 years good employment

### Expected Output
PLEA IN MITIGATION
Sarah Jones - Theft from Employer

May it please Your Honour,

Ms Jones appears before you having pleaded guilty at the earliest opportunity to theft from her employer. She fully accepts the seriousness of breaching trust...

PERSONAL MITIGATION:
This offence is entirely out of character for Ms Jones, who worked without incident for 15 years...

## Risk Warnings
⚠️ Don't minimise offence
⚠️ Be realistic about outcome
⚠️ Have references ready

### Audience: SME Business Owner
- Speech to reduce sentence
- Explains personal circumstances
- Shows why lesser sentence appropriate
- Must accept wrongdoing first
