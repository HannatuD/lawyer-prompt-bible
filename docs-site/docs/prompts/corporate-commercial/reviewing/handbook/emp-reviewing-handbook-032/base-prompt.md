---
prompt_id: emp-reviewing-handbook-032
title: Employee Handbook Review
practice_area: employment
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, handbook, policies, compliance]
---

## Purpose
Review employee handbook for legal compliance, identifying gaps and areas requiring update under current employment law.

## Jurisdiction
UK-wide

## Professional Context
Essential HR compliance exercise ensuring policies meet statutory requirements and provide appropriate employer protections.

## Base Prompt
Review employee handbook for \{\{company_name\}\} with \{\{employee_count\}\} employees in \{\{industry_sector\}\}:
Check policies for:
1. Legal compliance:
   - Disciplinary and grievance (ACAS Code)
   - Equal opportunities
   - Family leave policies
   - Health and safety
   - Data protection/privacy
   - Whistleblowing
   - Anti-bribery
2. Commercial protections:
   - IT/social media usage
   - Confidentiality
   - Conflicts of interest
   - Expenses
3. Modern requirements:
   - Flexible working
   - Mental health
   - Remote working
Identify missing policies and outdated provisions.

## Variables
- \{\{company_name\}\} – employer name
- \{\{employee_count\}\} – workforce size
- \{\{industry_sector\}\} – type of business

## Example Usage
### Input
company_name=Retail Solutions Ltd; employee_count=75; industry_sector=retail and e-commerce

### Expected Output
EMPLOYEE HANDBOOK REVIEW
Retail Solutions Ltd

COMPLIANCE GAPS IDENTIFIED:
1. Whistleblowing Policy - MISSING (legally required)
2. Family Leave - Outdated (pre-April 2024 rates)...

RECOMMENDATIONS:
Priority 1 (Legal Requirements):
- Add whistleblowing policy
- Update family leave...

## Risk Warnings
⚠️ Some policies legally required
⚠️ Contractual vs non-contractual status
⚠️ Consultation may be needed for changes

### Audience: SME Business Owner
- Checks if your staff policies are legal
- Identifies missing required policies
- Flags outdated terms needing update
- Protects against employment claims
