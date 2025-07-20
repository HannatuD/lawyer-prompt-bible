---
prompt_id: emp-analysis-tupe-037
title: TUPE Transfer Analysis
practice_area: employment
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, tupe, transfer, outsourcing]
---

## Purpose
Analyse whether TUPE applies to proposed business transfer and identify key obligations and risks.

## Jurisdiction
UK-wide

## Professional Context
Used in business sales, outsourcing, or re-tendering to determine employee transfer obligations and liabilities.

## Base Prompt
Analyse TUPE application for \\{\\{transfer_type\\}\\}:
- Transferor: \\{\\{current_employer\\}\\}
- Transferee: \\{\\{new_employer\\}\\}
- Activity/assets: \\{\\{transfer_description\\}\\}
- Employees affected: \\{\\{employee_numbers\\}\\}
- Transfer date: \\{\\{proposed_date\\}\\}
Assess:
1. TUPE application (business/service provision change)
2. Employee identification (organised grouping)
3. Information/consultation duties
4. Liability allocation
5. Measures envisaged
6. Pension implications
7. Harmonisation restrictions
8. Dismissal risks
9. Warranty/indemnity needs
10. Due diligence requirements
Provide compliance timeline.

## Variables
- \\{\\{transfer_type\\}\\} – "business sale", "outsourcing", "insourcing"
- \\{\\{current_employer\\}\\} – transferor entity
- \\{\\{new_employer\\}\\} – transferee entity
- \\{\\{transfer_description\\}\\} – what's transferring
- \\{\\{employee_numbers\\}\\} – staff potentially affected
- \\{\\{proposed_date\\}\\} – intended transfer date

## Example Usage
### Input
transfer_type=outsourcing; current_employer=Council Ltd; new_employer=Services Co; transfer_description=IT helpdesk services; employee_numbers=12 helpdesk staff; proposed_date=1/10/25

### Expected Output
TUPE ANALYSIS - IT HELPDESK OUTSOURCING

TUPE APPLIES: YES - Service Provision Change
- Organised grouping of employees
- Dedicated to IT helpdesk service...

TIMELINE:
By 1/9/25: Employee liability information
By 15/9/25: Start consultation...

## Risk Warnings
⚠️ Auto-transfer of employment contracts
⚠️ Dismissals connected to transfer unfair
⚠️ Consultation failures = compensation

### Audience: SME Business Owner
- Employees automatically transfer to buyer
- Cannot change their terms easily
- Must inform and consult
- Inherits all employment liabilities
