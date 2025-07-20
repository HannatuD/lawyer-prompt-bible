---
prompt_id: lit-analysis-injunction-030
title: Injunction Risk Assessment
practice_area: litigation
task_type: analysis
jurisdiction: england-wales
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, injunction, interim-relief, urgent]
---

## Purpose
Assess merits and requirements for interim injunction application under American Cyanamid principles.

## Jurisdiction
England & Wales

## Professional Context
Used when considering urgent injunctive relief, requiring careful analysis of legal tests and practical considerations.

## Base Prompt
Assess injunction application for \\{\\{applicant\\}\\} against \\{\\{respondent\\}\\} seeking to \\{\\{injunction_purpose\\}\\}:
Current situation: \\{\\{factual_position\\}\\}
Analyse American Cyanamid criteria:
1. Serious issue to be tried
2. Damages adequate remedy?
3. Balance of convenience
4. Status quo considerations
5. Special factors
Also consider:
- Urgency/delay issues
- Undertaking in damages
- Evidence requirements
- Without notice justification
- Terms of order
- Enforcement practicalities
Provide success likelihood and tactical advice.

## Variables
- \\{\\{applicant\\}\\} – party seeking injunction
- \\{\\{respondent\\}\\} – party to be injuncted
- \\{\\{injunction_purpose\\}\\} – what order will prohibit/require
- \\{\\{factual_position\\}\\} – current situation

## Example Usage
### Input
applicant=Software Ltd; respondent=Ex-Employee; injunction_purpose=prevent use of confidential source code; factual_position=employee left last week, evidence of downloading, starting competitor

### Expected Output
INJUNCTION ASSESSMENT
Applicant: Software Ltd
Respondent: Ex-Employee

AMERICAN CYANAMID ANALYSIS:
1. Serious Issue: YES
   - Clear confidentiality obligations
   - Evidence of downloading...

SUCCESS LIKELIHOOD: 75%
Key risk: Delay in application...

## Risk Warnings
⚠️ Undertaking in damages is serious
⚠️ Full frank disclosure required
⚠️ Act quickly or lose urgency

### Audience: SME Business Owner
- Emergency court order to stop harmful action
- Must show real urgency and harm
- You guarantee compensation if wrong
- Hours/days matter in seeking
