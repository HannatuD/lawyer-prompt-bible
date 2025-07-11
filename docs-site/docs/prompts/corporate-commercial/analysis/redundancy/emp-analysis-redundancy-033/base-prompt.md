---
prompt_id: emp-analysis-redundancy-033
title: Redundancy Process Plan
practice_area: employment
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 75
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, redundancy, restructuring, consultation]
---

## Purpose
Create compliant redundancy process plan including consultation requirements, selection criteria, and timeline.

## Jurisdiction
UK-wide

## Professional Context
Used when planning workforce reductions, ensuring fair process and minimising legal risk of unfair dismissal claims.

## Base Prompt
```text
Plan redundancy process for {{company_name}}:
- Current employees: {{total_employees}}
- Proposed redundancies: {{redundancy_number}}
- Locations affected: {{locations}}
- Roles affected: {{affected_roles}}
- Business reason: {{redundancy_reason}}
- Timeline pressure: {{urgency_level}}
Develop:
1. Consultation requirements (individual/collective)
2. Selection pool definition
3. Selection criteria matrix
4. Scoring methodology
5. Consultation timeline
6. Alternative employment search
7. Redundancy payment calculations
8. Notice requirements
9. Appeal process
10. Protected characteristic impact
```

## Variables
```text
- {{company_name}} – employer name
- {{total_employees}} – workforce size
- {{redundancy_number}} – proposed job losses
- {{locations}} – sites affected
- {{affected_roles}} – positions at risk
- {{redundancy_reason}} – business rationale
- {{urgency_level}} – time pressure
```

## Example Usage
### Input
company_name=Manufacturing Ltd; total_employees=120; redundancy_number=25; locations=Birmingham site; affected_roles=production operatives, supervisors; redundancy_reason=automation of production line; urgency_level=3 months to implement

### Expected Output
REDUNDANCY PROCESS PLAN
Manufacturing Ltd

COLLECTIVE CONSULTATION REQUIRED
- 25 redundancies = 30-day minimum consultation
- Must notify BEIS (Form HR1)...

PROPOSED TIMELINE:
Day 1: Announce proposals
Day 1-30: Collective consultation
Day 31-38: Individual consultation...

## Risk Warnings
⚠️ Collective consultation has strict rules
⚠️ Check for indirect discrimination
⚠️ Consider TUPE if outsourcing

### Audience: SME Business Owner
- Legal process for reducing workforce
- Must consult before deciding
- Fair selection criteria essential
- Get it wrong = expensive claims
