---
prompt_id: emp-drafting-settlement-034
title: Settlement Agreement (Exit)
practice_area: employment
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, settlement, compromise, exit]
---

## Purpose
Draft settlement agreement for agreed employee exit with appropriate waivers and compensation terms.

## Jurisdiction
England & Wales

## Professional Context
Used to document agreed exits ensuring clean break with waiver of claims in exchange for enhanced package.

## Base Prompt
Draft settlement agreement between \{\{employer\}\} and \{\{employee\}\} for \{\{exit_reason\}\}:
- Termination date: \{\{leave_date\}\}
- Ex gratia payment: £\{\{ex_gratia\}\}
- PILON: £\{\{pilon_amount\}\}
- Notice period: \{\{notice_weeks\}\} weeks
- Benefits: \{\{benefits_continuation\}\}
- Restrictive covenants: \{\{restrictions_position\}\}
Include:
1. Termination terms
2. Payment breakdown and tax treatment
3. Full waiver of claims
4. Reference wording
5. Confidentiality both ways
6. Return of property
7. Pension arrangements
8. Announcement wording
9. Legal advice confirmation
Ensure s.203 ERA compliance.

## Variables
- \{\{employer\}\} – company name
- \{\{employee\}\} – departing employee
- \{\{exit_reason\}\} – "redundancy", "mutual agreement", etc.
- \{\{leave_date\}\} – final day
- \{\{ex_gratia\}\} – compensation payment
- \{\{pilon_amount\}\} – pay in lieu amount
- \{\{notice_weeks\}\} – notice period
- \{\{benefits_continuation\}\} – ongoing benefits
- \{\{restrictions_position\}\} – affirm/waive/modify

## Example Usage
### Input
employer=Digital Co Ltd; employee=John Manager; exit_reason=mutual agreement; leave_date=31/8/25; ex_gratia=15000; pilon_amount=10000; notice_weeks=12; benefits_continuation=healthcare to 31/12/25; restrictions_position=affirm existing

### Expected Output
SETTLEMENT AGREEMENT

BETWEEN:
(1) Digital Co Ltd ("Company")
(2) John Manager ("Employee")

BACKGROUND
The parties have agreed to terminate the Employee's employment on terms set out below...

## Risk Warnings
⚠️ Employee must have independent legal advice
⚠️ Advisor must be qualified and insured
⚠️ First £30k can be tax-free

### Audience: SME Business Owner
- Legal agreement for employee departure
- Employee gives up right to sue
- Must involve employee's own lawyer
- Protects against future claims
