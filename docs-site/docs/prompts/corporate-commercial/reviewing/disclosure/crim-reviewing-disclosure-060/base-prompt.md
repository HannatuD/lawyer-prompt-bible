---
prompt_id: crim-reviewing-disclosure-060
title: Initial Disclosure Review
practice_area: criminal
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, disclosure, idpc, prosecution]
---

## Purpose
Review initial prosecution disclosure identifying strengths, weaknesses and further disclosure requirements.

## Jurisdiction
England & Wales

## Professional Context
First assessment of prosecution case strength essential for plea advice and case strategy.

## Base Prompt
Review initial disclosure in R v \{\{defendant_name\}\} for \{\{charges\}\}:
\{\{disclosure_bundle\}\}
Assess:
1. Each element of offences
2. Evidence strength/admissibility
3. Witness credibility
4. Unused material hints
5. Expert evidence needs
6. CCTV/phone evidence
7. Identification issues
8. Disclosure failures
9. Abuse of process arguments
10. Plea negotiation potential
Identify:
- Defence statement strategy
- S.8 application needs
- Defence witnesses required

## Variables
- \{\{defendant_name\}\} – accused person
- \{\{charges\}\} – offences charged
- \{\{disclosure_bundle\}\} – prosecution papers

## Example Usage
### Input
defendant_name=Smith; charges=assault occasioning ABH; disclosure_bundle=[IDPC bundle contents]

### Expected Output
DISCLOSURE REVIEW - R v SMITH

CHARGE: Assault occasioning ABH (s.47 OAPA)

PROSECUTION STRENGTHS:
1. Independent witness to assault
2. Injury photos consistent with allegation...

WEAKNESSES IDENTIFIED:
1. No CCTV despite town centre location
2. Witness statements taken 3 weeks later...

FURTHER DISCLOSURE REQUIRED:
- 999 call recording
- First account from complainant...

## Risk Warnings
⚠️ Time limits for defence statement
⚠️ Disclosure obligations ongoing
⚠️ Alibi notice requirements

### Audience: SME Business Owner
- Prosecution evidence assessment
- Identifies what's missing
- Shapes defence strategy
- Basis for plea decisions
