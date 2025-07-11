---
prompt_id: lit-drafting-poc-016
title: Particulars of Claim (County Court)
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, county-court, debt-claim, particulars]
---

## Purpose
Draft particulars of claim for straightforward County Court money claim following CPR requirements and Practice Direction 16.

## Jurisdiction
England & Wales

## Professional Context
Used for initiating County Court proceedings for debt recovery, breach of contract, or other money claims under £100,000.

## Base Prompt
```text
Draft particulars of claim for {{claimant_name}} against {{defendant_name}} for {{claim_type}}:
- Amount claimed: £{{principal_amount}}
- Interest basis: {{interest_basis}}
- Key dates: {{key_dates}}
- Brief facts: {{fact_summary}}
Structure per CPR PD 16:
1. Parties and jurisdiction
2. Chronological factual background
3. Legal basis of claim
4. Breach/default by defendant
5. Loss and damage
6. Interest calculation
7. Prayer for relief
Include statement of truth wording.
```

## Variables
```text
- {{claimant_name}} – claiming party
- {{defendant_name}} – defending party
- {{claim_type}} – "unpaid invoice", "breach of contract", etc.
- {{principal_amount}} – main sum claimed
- {{interest_basis}} – "contractual at X%" or "statutory"
- {{key_dates}} – relevant chronology
- {{fact_summary}} – brief factual background
```

## Example Usage
### Input
claimant_name=ABC Services Ltd; defendant_name=XYZ Customer Ltd; claim_type=unpaid invoices; principal_amount=25000; interest_basis=statutory (8%); key_dates=invoices dated 1/1/25-31/3/25, payment due 30 days; fact_summary=IT support services provided, invoices rendered, payment not received despite demands

### Expected Output
IN THE COUNTY COURT AT [COURT]
BETWEEN:
ABC SERVICES LTD (Claimant)
and
XYZ CUSTOMER LTD (Defendant)

PARTICULARS OF CLAIM
1. The Claimant is a limited company providing IT support services...

## Risk Warnings
⚠️ Comply with pre-action protocol first
⚠️ Check limitation periods
⚠️ Consider ADR requirements

### Audience: SME Business Owner
- Formal document starting court proceedings
- Must include all key facts and legal basis
- Get it right first time - amendments cost money
- Consider legal advice for claims over £10k
