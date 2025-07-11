---
prompt_id: reg-reviewing-contract-083
title: Consumer Contract Compliance Review
practice_area: regulatory-compliance
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [consumer-law, contracts, compliance, b2c]
---

## Purpose
Review consumer contracts for compliance with consumer protection regulations and unfair terms legislation.

## Jurisdiction
UK-wide

## Professional Context
Ensuring B2C contracts comply with extensive consumer protection framework avoiding enforcement action.

## Base Prompt
Review consumer contract for {{business_name}}:
{{contract_terms}}
Check compliance with:
1. Consumer Rights Act 2015
2. Unfair terms assessment
3. Pre-contract information
4. Cancellation rights
5. Digital content rules
6. Services standards
7. Remedies availability
8. ADR information
9. Plain English usage
10. Prominence of key terms
Identify:
- Potentially unfair terms
- Missing mandatory information
- Enforcement risks

## Variables
- {{business_name}} – trader name
- {{contract_terms}} – terms to review

## Example Usage
### Input
business_name=Online Retailer Ltd; contract_terms=[standard T&Cs]

### Expected Output
CONSUMER CONTRACT REVIEW
Business: Online Retailer Ltd

UNFAIR TERMS IDENTIFIED:
1. Clause 5.2 - Excludes statutory rights
   Status: Void and unenforceable
   
2. Clause 8.1 - Hidden 12-month contract
   Issue: Not prominent/transparent...

MISSING INFORMATION:
- 14-day cancellation rights
- ADR provider details
- Complaint handling process...

ENFORCEMENT RISK: High
- CMA could take action
- Trading Standards involvement likely

## Risk Warnings
⚠️ Unfair terms void automatically
⚠️ Criminal offence for some breaches
⚠️ Reputational damage

### Audience: SME Business Owner
- Special rules for consumer contracts
- Many standard terms are unfair
- Must give cancellation rights
- Plain English essential
