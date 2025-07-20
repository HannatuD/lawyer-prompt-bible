---
prompt_id: fam-drafting-occupation-056
title: Occupation Order Application
practice_area: family
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, occupation-order, domestic-abuse, injunction]
---

## Purpose
Draft occupation order application under Family Law Act 1996 seeking to regulate occupation of family home.

## Jurisdiction
England & Wales

## Professional Context
Emergency application in cases of domestic abuse or relationship breakdown requiring one party to leave home.

## Base Prompt
Draft occupation order application for \{\{applicant_name\}\} against \{\{respondent_name\}\}:
- Property: \{\{property_address\}\}
- Ownership: \{\{ownership_status\}\}
- Relationship: \{\{relationship_type\}\}
- Children: \{\{children_present\}\}
- Incidents: \{\{abuse_summary\}\}
Apply s.33/35/36/37/38 tests:
1. Property rights
2. Conduct
3. Housing needs
4. Financial resources
5. Health impact
6. Child welfare
Include:
- Statement support
- Urgency factors
- Without notice justification
- Power of arrest need

## Variables
- \{\{applicant_name\}\} – person seeking order
- \{\{respondent_name\}\} – person to be excluded
- \{\{property_address\}\} – family home
- \{\{ownership_status\}\} – who owns/rents
- \{\{relationship_type\}\} – married/cohabiting
- \{\{children_present\}\} – children details
- \{\{abuse_summary\}\} – conduct relied on

## Example Usage
### Input
applicant_name=Jane Smith; respondent_name=John Smith; property_address=10 Family Home; ownership_status=joint tenants; relationship_type=married; children_present=2 children ages 5 and 8; abuse_summary=physical violence, police called twice

### Expected Output
IN THE FAMILY COURT AT [LOCATION]

OCCUPATION ORDER APPLICATION

APPLICANT: Jane Smith
RESPONDENT: John Smith

The Applicant applies under s.33 Family Law Act 1996 for:
1. An order that the Respondent shall leave 10 Family Home
2. An order prohibiting the Respondent from entering...

## Risk Warnings
⚠️ High threshold for exclusion
⚠️ Without notice needs justification
⚠️ Consider non-molestation order too

### Audience: SME Business Owner
- Court order about who lives in family home
- Can exclude even property owner
- Needs serious reasons (violence/abuse)
- Emergency applications possible
