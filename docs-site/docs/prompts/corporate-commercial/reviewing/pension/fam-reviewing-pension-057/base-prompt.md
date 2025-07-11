---
prompt_id: fam-reviewing-pension-057
title: Pension Sharing Order Review
practice_area: family
task_type: reviewing
jurisdiction: england-wales
complexity: advanced
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, pension, divorce, sharing-order]
---

## Purpose
Review pension sharing annex ensuring accuracy and compliance with scheme requirements.

## Jurisdiction
England & Wales

## Professional Context
Technical document requiring precision as errors can invalidate transfer or cause significant delays.

## Base Prompt
```text
Review pension sharing annex for {{pension_scheme}}:
- Member: {{member_name}}
- Transfer percentage: {{percentage}}%
- CE value: £{{cev_amount}}
- CE date: {{cev_date}}
Check:
1. Scheme details accuracy
2. Member reference numbers
3. Percentage vs amount
4. External/internal transfer
5. State pension exclusion
6. Multiple pensions clarity
7. Charges allocation
8. Implementation timeline
9. Death provisions
10. Information requirements
```

## Variables
```text
- {{pension_scheme}} – pension provider
- {{member_name}} – pension member
- {{percentage}} – share percentage
- {{cev_amount}} – cash equivalent
- {{cev_date}} – valuation date
```

## Example Usage
### Input
pension_scheme=ABC Company Pension; member_name=John Smith; percentage=40; cev_amount=500000; cev_date=1/3/2025

### Expected Output
PENSION SHARING ANNEX REVIEW

Scheme: ABC Company Pension
Member: John Smith
Share: 40% (£200,000 based on CE)

ISSUES IDENTIFIED:
1. CE date over 4 months old - update needed
2. External transfer not specified...

AMENDMENTS REQUIRED:
- Update CE to within 4 months
- Confirm external transfer election...

## Risk Warnings
⚠️ Precision essential for validity
⚠️ Time limits for implementation
⚠️ Charges can be significant

### Audience: SME Business Owner
- Splits pension on divorce
- Very technical requirements
- Mistakes cause major delays
- Can be pension scheme charges
