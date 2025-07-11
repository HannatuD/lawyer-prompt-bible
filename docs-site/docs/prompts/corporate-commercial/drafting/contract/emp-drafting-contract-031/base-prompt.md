---
prompt_id: emp-drafting-contract-031
title: Employment Contract (Senior Role)
practice_area: employment
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, contract, senior-employee, executive]
---

## Purpose
Draft comprehensive employment contract for senior employee with appropriate protections and post-termination restrictions.

## Jurisdiction
England & Wales

## Professional Context
Used for hiring senior employees where protecting business interests through carefully drafted terms is essential.

## Base Prompt
```text
Draft employment contract for {{employer_name}} hiring {{employee_name}} as {{job_title}}:
- Salary: £{{annual_salary}}
- Start date: {{start_date}}
- Benefits: {{benefits_package}}
- Notice period: {{notice_months}} months
Include:
1. Duties and reporting
2. Confidentiality (during and post)
3. IP assignment
4. Garden leave clause
5. Post-termination restrictions:
   - Non-compete: {{compete_period}} months in {{compete_scope}}
   - Non-solicitation: {{solicit_period}} months
   - Non-dealing: {{dealing_period}} months
6. Bonus scheme (discretionary)
7. Share options reference
Ensure enforceability of restrictions.
```

## Variables
```text
- {{employer_name}} – company name
- {{employee_name}} – individual's name
- {{job_title}} – position title
- {{annual_salary}} – base salary
- {{start_date}} – commencement date
- {{benefits_package}} – "car, healthcare, pension"
- {{notice_months}} – notice period
- {{compete_period}} – non-compete duration
- {{compete_scope}} – geographic/sector limit
- {{solicit_period}} – non-solicitation duration
- {{dealing_period}} – non-dealing duration
```

## Example Usage
### Input
employer_name=Tech Innovations Ltd; employee_name=Sarah Jones; job_title=Sales Director; annual_salary=80000; start_date=1/9/25; benefits_package=car allowance, private healthcare, 6% pension; notice_months=6; compete_period=12; compete_scope=UK fintech sector; solicit_period=12; dealing_period=12

### Expected Output
EMPLOYMENT CONTRACT

This Agreement is made on [date] between:
(1) Tech Innovations Ltd (Company)
(2) Sarah Jones (Employee)

1. APPOINTMENT
The Company employs the Employee as Sales Director from 1 September 2025...

## Risk Warnings
⚠️ Restrictions must protect legitimate interests
⚠️ Garden leave needs payment provisions
⚠️ Consider separate confidentiality agreement

### Audience: SME Business Owner
- Protects business when hiring senior staff
- Key clauses: notice periods, restrictions on competing
- Must be reasonable to be enforceable
- Consider garden leave for departures
