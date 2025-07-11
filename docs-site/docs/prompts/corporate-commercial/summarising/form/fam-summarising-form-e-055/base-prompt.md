---
prompt_id: fam-summarising-form-e-055
title: Form E Financial Summary
practice_area: family
task_type: summarising
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, divorce, financial-disclosure, form-e]
---

## Purpose
Summarise Form E financial disclosure identifying key assets, issues, and areas requiring investigation.

## Jurisdiction
England & Wales

## Professional Context
Essential analysis in financial remedy proceedings to understand financial landscape and identify disclosure gaps.

## Base Prompt
```text
Summarise Form E from {{party_name}} in {{case_name}}:
Extract:
1. Total assets summary
2. Income (all sources)
3. Liabilities
4. Pensions (CEVs)
5. Business interests
6. Property portfolio
7. Conduct allegations
8. Contributions claimed
9. Needs arguments
10. Proposed settlement
Analyse:
- Disclosure gaps
- Valuation issues
- Hidden assets indicators
- Lifestyle inconsistencies
- Questionnaire priorities
```

## Variables
```text
- {{party_name}} – disclosing party
- {{case_name}} – case reference
```

## Example Usage
### Input
party_name=Husband; case_name=Wife v Husband

### Expected Output
FORM E ANALYSIS - HUSBAND

ASSET SUMMARY:
- FMH: £850,000 (£350k equity)
- Business: £500,000 (needs SJE valuation)
- Pensions: £425,000
- Savings: £50,000
Total: £925,000 net

INCOME:
- Salary: £120,000
- Dividends: Variable (3-year average £40k)

RED FLAGS:
1. Business valuation seems low
2. Lifestyle exceeds declared income...

## Risk Warnings
⚠️ Full frank disclosure mandatory
⚠️ Check against tax returns
⚠️ Consider lifestyle analysis

### Audience: SME Business Owner
- Complete financial disclosure in divorce
- Shows all assets, debts, income
- Forms basis of settlement negotiations
- False disclosure is contempt
