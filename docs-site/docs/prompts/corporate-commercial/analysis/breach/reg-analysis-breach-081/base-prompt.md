---
prompt_id: reg-analysis-breach-081
title: Data Breach Impact Assessment
practice_area: regulatory-compliance
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 90
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [data-protection, breach, incident, gdpr]
---

## Purpose
Assess data breach severity determining notification requirements and mitigation priorities.

## Jurisdiction
UK-wide

## Professional Context
Critical incident response requiring rapid assessment of risks and legal notification obligations.

## Base Prompt
Assess data breach at \\{\\{organisation_name\\}\\}:
- Incident type: \\{\\{breach_type\\}\\}
- Data affected: \\{\\{data_categories\\}\\}
- Individuals affected: \\{\\{number_affected\\}\\}
- Detection date: \\{\\{discovery_date\\}\\}
- Cause: \\{\\{breach_cause\\}\\}
Evaluate:
1. Risk to individuals
2. Severity assessment
3. ICO notification requirement
4. Individual notification need
5. Mitigation measures
6. Evidence preservation
7. Root cause analysis
8. Cross-border aspects
9. Law enforcement involvement
10. PR/media strategy
Create action plan with timelines.

## Variables
- \\{\\{organisation_name\\}\\} – affected entity
- \\{\\{breach_type\\}\\} – nature of breach
- \\{\\{data_categories\\}\\} – types compromised
- \\{\\{number_affected\\}\\} – scale of breach
- \\{\\{discovery_date\\}\\} – when discovered
- \\{\\{breach_cause\\}\\} – how occurred

## Example Usage
### Input
organisation_name=Health Clinic Ltd; breach_type=ransomware attack; data_categories=patient records including health data; number_affected=5000 patients; discovery_date=today at 9am; breach_cause=phishing email opened

### Expected Output
DATA BREACH ASSESSMENT
Organisation: Health Clinic Ltd
Severity: HIGH RISK

ICO NOTIFICATION: Required within 72 hours
- Special category data involved
- Large scale (5000 individuals)
- Health data particularly sensitive

INDIVIDUAL NOTIFICATION: Required without undue delay
- High risk to rights and freedoms
- Potential discrimination/harm...

IMMEDIATE ACTIONS:
1. Hour 1-4: Isolate systems, preserve evidence
2. Hour 4-8: Draft ICO notification...

## Risk Warnings
⚠️ 72-hour ICO deadline
⚠️ Criminal offence if cover up
⚠️ Compensation claims likely

### Audience: SME Business Owner
- Urgent response needed for data loss
- Must notify ICO within 72 hours
- May need to tell individuals
- Document everything done
