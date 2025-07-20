---
prompt_id: reg-reviewing-privacy-080
title: Privacy Policy Compliance Review
practice_area: regulatory-compliance
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [data-protection, privacy-policy, gdpr, website]
---

## Purpose
Review privacy policy for UK GDPR compliance identifying gaps and required updates.

## Jurisdiction
UK-wide

## Professional Context
Essential compliance document requiring regular updates to reflect processing activities and legal requirements.

## Base Prompt
Review privacy policy for \{\{company_name\}\} website:
\{\{policy_text\}\}
Check against UK GDPR Article 13/14:
1. Controller identity
2. DPO contact details
3. Processing purposes
4. Lawful bases stated
5. Legitimate interests
6. Recipients/transfers
7. International transfers
8. Retention periods
9. Subject rights
10. Complaint rights
11. Statutory requirements
12. Automated decisions
13. Source of data
Assess clarity and accessibility.

## Variables
- \{\{company_name\}\} – business name
- \{\{policy_text\}\} – current policy

## Example Usage
### Input
company_name=E-Commerce Ltd; policy_text=[current privacy policy]

### Expected Output
PRIVACY POLICY REVIEW
Company: E-Commerce Ltd

COMPLIANCE GAPS:
1. Lawful basis - not specified for marketing
2. Retention periods - vague "as long as necessary"
3. International transfers - no safeguards mentioned...

REQUIRED ADDITIONS:
- Specific lawful basis for each purpose
- Clear retention periods
- UK representative details...

ACCESSIBILITY ISSUES:
- Language too legalistic
- No layered approach
- Mobile formatting poor

## Risk Warnings
⚠️ ICO fines for non-compliance
⚠️ Must be easily accessible
⚠️ Update when processing changes

### Audience: SME Business Owner
- Required notice about data use
- Must include specific information
- Needs regular updates
- Should be clear and readable
