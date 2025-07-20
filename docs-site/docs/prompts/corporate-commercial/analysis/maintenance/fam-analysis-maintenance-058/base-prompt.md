---
prompt_id: fam-analysis-maintenance-058
title: Child Maintenance Analysis
practice_area: family
task_type: analysis
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, child-maintenance, cms, financial]
---

## Purpose
Calculate child maintenance options comparing CMS formula with potential agreed arrangements.

## Jurisdiction
England & Wales

## Professional Context
Advising on child maintenance levels whether through Child Maintenance Service or private agreement.

## Base Prompt
Calculate child maintenance for \{\{paying_parent\}\}:
- Gross income: £\{\{annual_income\}\}
- Children: \{\{number_children\}\}
- Overnight stays: \{\{overnight_care\}\}
- Other children: \{\{other_dependents\}\}
Calculate:
1. CMS basic rate
2. Reduced rate if applicable
3. Shared care reduction
4. Variations possible
5. Top-up arguments (school fees, activities)
6. Agreement vs CMS pros/cons
7. Enforcement options
8. Review triggers
Compare with \{\{receiving_parent\}\} needs budget.

## Variables
- \{\{paying_parent\}\} – maintenance payer
- \{\{annual_income\}\} – gross yearly income
- \{\{number_children\}\} – qualifying children
- \{\{overnight_care\}\} – nights per year
- \{\{other_dependents\}\} – other relevant children
- \{\{receiving_parent\}\} – maintenance receiver

## Example Usage
### Input
paying_parent=Father; annual_income=60000; number_children=2; overnight_care=104; other_dependents=0; receiving_parent=Mother

### Expected Output
CHILD MAINTENANCE CALCULATION

Payer: Father (£60,000 gross)
Children: 2
Shared care: 104 nights (2/7)

CMS CALCULATION:
- Basic rate: 16% of gross
- Annual: £9,600
- Shared care reduction: 2/7
- Adjusted annual: £6,857
- Monthly payment: £571

ALTERNATIVE OPTIONS:
1. Private agreement with extras...

## Risk Warnings
⚠️ CMS can backdate
⚠️ Variations for wealth possible
⚠️ School fees separate issue

### Audience: SME Business Owner
- Regular payments for children
- Formula based on income
- Reduced for overnight stays
- Can agree different amount privately
