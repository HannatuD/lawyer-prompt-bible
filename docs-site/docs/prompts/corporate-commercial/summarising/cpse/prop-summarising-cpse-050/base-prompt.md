---
prompt_id: prop-summarising-cpse-050
title: CPSE Replies Analysis
practice_area: property
task_type: summarising
jurisdiction: england-wales
complexity: advanced
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, cpse, commercial, enquiries]
---

## Purpose
Analyse Commercial Property Standard Enquiries responses identifying incomplete answers, concerns, and follow-up requirements.

## Jurisdiction
England & Wales

## Professional Context
Critical due diligence review in commercial property transactions to uncover issues affecting value or usability.

## Base Prompt
```text
Review CPSE replies for purchase of {{property_address}} from {{seller_name}}:
Analyse responses for:
1. Incomplete/evasive answers
2. Disclosed problems
3. Missing documentation
4. Warranty limitations
5. Environmental issues
6. Planning/building regs
7. Disputes or complaints
8. Alterations history
9. Services/utilities
10. Insurance claims
Create:
- Red flag summary
- Follow-up enquiries
- Document requisitions
- Insurance requirements
- Price negotiation points
```

## Variables
```text
- {{property_address}} – target property
- {{seller_name}} – selling entity
```

## Example Usage
### Input
property_address=Warehouse Complex, M1 Junction; seller_name=Industrial Props Ltd

### Expected Output
CPSE ANALYSIS - WAREHOUSE COMPLEX

RED FLAGS:
1. Environmental - Phase 1 only, contamination "possible"
2. Planning - unauthorised mezzanine installed 2020
3. Disputes - ongoing rates appeal...

CRITICAL FOLLOW-UPS:
1. Demand Phase 2 environmental survey
2. Regularisation of mezzanine required...

## Risk Warnings
⚠️ "Not so far as aware" = no reliance
⚠️ Check insurance claims history
⚠️ Verify replies against documents

### Audience: SME Business Owner
- Seller's answers about property
- Often incomplete or evasive
- Reveals problems and risks
- Basis for price negotiation
