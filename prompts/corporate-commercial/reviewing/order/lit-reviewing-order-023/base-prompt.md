---
prompt_id: lit-reviewing-order-023
title: Court Order Compliance Review
practice_area: litigation
task_type: reviewing
jurisdiction: england-wales
complexity: basic
time_estimate: 25
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, court-orders, compliance, enforcement]
---

## Purpose
Review court orders to extract compliance requirements, deadlines, and consequences of breach.

## Jurisdiction
England & Wales

## Professional Context
Used to ensure full understanding and compliance with court orders, avoiding sanctions for breach.

## Base Prompt
Review court order in {{case_name}} dated {{order_date}}:
{{order_text}}
Extract and summarise:
1. Specific obligations on each party
2. Deadlines (with calendar dates)
3. Conditions precedent
4. Penal notices/contempt warnings
5. Cost orders
6. Permission to appeal deadline
7. Liberty to apply provisions
Create compliance checklist with:
- Action required
- Responsible party
- Deadline
- Consequences of breach
- Evidence of compliance needed

## Variables
- {{case_name}} – case reference
- {{order_date}} – date of order
- {{order_text}} – full order text

## Example Usage
### Input
case_name=ABC v XYZ; order_date=1/6/25; order_text=[full court order]

### Expected Output
ORDER COMPLIANCE CHECKLIST
Case: ABC v XYZ
Order Date: 1/6/25

CLAIMANT OBLIGATIONS:
1. File amended particulars
   Deadline: 4pm on 15/6/25
   Consequence: claim struck out...

## Risk Warnings
⚠️ Penal notices mean contempt risk
⚠️ Unless orders are strict
⚠️ Calculate dates carefully

### Audience: SME Business Owner
- Court orders must be followed exactly
- Missing deadlines can lose your case
- "Unless orders" = do it or case dismissed
- Keep evidence of compliance
