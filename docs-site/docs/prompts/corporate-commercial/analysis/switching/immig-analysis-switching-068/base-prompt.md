---
prompt_id: immig-analysis-switching-068
title: In-Country Visa Switch Analysis
practice_area: immigration
task_type: analysis
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [immigration, switching, visa-categories, eligibility]
---

## Purpose
Analyse eligibility and requirements for switching visa categories within UK avoiding need to return home.

## Jurisdiction
UK-wide

## Professional Context
Strategic advice on changing immigration status while remaining in UK, navigating complex switching restrictions.

## Base Prompt
```text
Analyse visa switch for {{applicant_name}}:
- Current visa: {{current_status}}
- Expiry date: {{visa_expiry}}
- Target visa: {{desired_status}}
- Circumstances: {{change_reason}}
Assess:
1. Switching permitted
2. Eligibility requirements
3. Timing considerations
4. Financial requirements
5. English language
6. Maintenance funds
7. Employer obligations
8. Family members
9. Gap risks
10. Settlement impact
Provide application timeline.
```

## Variables
```text
- {{applicant_name}} – visa holder
- {{current_status}} – present visa type
- {{visa_expiry}} – current visa end date
- {{desired_status}} – target visa category
- {{change_reason}} – why switching
```

## Example Usage
### Input
applicant_name=Maria Student; current_status=Student visa; visa_expiry=30/9/2025; desired_status=Skilled Worker; change_reason=job offer after graduation

### Expected Output
VISA SWITCHING ANALYSIS
Applicant: Maria Student
Current: Student visa (expires 30/9/2025)
Target: Skilled Worker

SWITCHING PERMITTED: Yes

REQUIREMENTS:
1. Job offer from licensed sponsor
2. Certificate of Sponsorship
3. Salary minimum £38,700 or going rate
4. English - met through degree...

TIMELINE:
By 1/8/25: Secure job offer
By 15/8/25: CoS assigned...

## Risk Warnings
⚠️ Cannot switch from visitor
⚠️ Apply before expiry
⚠️ No gap permitted

### Audience: SME Business Owner
- Changing visa type within UK
- Strict rules on what's allowed
- Must apply before current expires
- Different requirements for each route
