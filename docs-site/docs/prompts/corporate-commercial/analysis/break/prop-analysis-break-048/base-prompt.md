---
prompt_id: prop-analysis-break-048
title: Lease Break Clause Analysis
practice_area: property
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 35
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, lease, break-clause, notice]
---

## Purpose
Analyse lease break clause requirements ensuring valid exercise and avoiding common pitfalls that invalidate notices.

## Jurisdiction
England & Wales

## Professional Context
Critical when planning lease termination as strict compliance required and errors cannot usually be corrected.

## Base Prompt
Analyse break clause in lease of {{property_address}}:
- Tenant: {{tenant_name}}
- Break date: {{break_date}}
- Notice period: {{notice_required}}
- Current date: {{today_date}}
- Conditions: {{break_conditions}}
Assess:
1. Notice timing calculations
2. Service requirements
3. Preconditions compliance
4. Vacant possession meaning
5. Rent payment status
6. Time of essence
7. Conditionality issues
8. Joint tenant requirements
9. Authorisation needed
10. Common pitfalls
Provide compliance checklist and timeline.

## Variables
- {{property_address}} – leased property
- {{tenant_name}} – tenant exercising break
- {{break_date}} – when break operates
- {{notice_required}} – notice period needed
- {{today_date}} – current date
- {{break_conditions}} – conditions to satisfy

## Example Usage
### Input
property_address=Unit 1 Retail Park; tenant_name=Fashion Store Ltd; break_date=25/12/2025; notice_required=6 months; today_date=1/5/2025; break_conditions=vacant possession, all rent paid

### Expected Output
BREAK CLAUSE ANALYSIS
Property: Unit 1 Retail Park
Break Date: 25/12/2025

TIMING:
- Notice deadline: 25/6/2025
- Recommended service: by 18/6/2025
- Days remaining: 48 days

CRITICAL REQUIREMENTS:
1. Vacant possession - remove ALL items...

## Risk Warnings
⚠️ One mistake invalidates break
⚠️ Cannot correct errors after deadline
⚠️ Vacant possession strictly interpreted

### Audience: SME Business Owner
- Early exit right from lease
- Must follow requirements exactly
- Miss deadline = stuck until lease ends
- Get professional help with notice
