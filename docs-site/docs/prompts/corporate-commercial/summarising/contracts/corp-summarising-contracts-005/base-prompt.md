---
prompt_id: corp-summarising-contracts-005
title: Contract Portfolio Summary
practice_area: corporate-commercial
task_type: summarising
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [contracts, summary, portfolio, commercial]
---

## Purpose
Create an executive summary of a company's key commercial contracts, highlighting critical terms, renewal dates, and risk areas.

## Jurisdiction
UK-wide

## Professional Context
Used for board reporting, due diligence preparation, or contract management system implementation to understand contractual commitments and opportunities.

## Base Prompt
Summarise the following contracts for \{\{company_name\}\}:
\{\{contract_list\}\}
For each contract provide:
- Counterparty and contract type
- Key commercial terms (price, volume, exclusivity)
- Term and renewal provisions
- Termination rights and notice periods
- Key obligations and SLAs
- Liability and indemnity positions
- Change control mechanisms
- Risk rating (High/Medium/Low)
Create summary table and highlight top 5 risks/opportunities.

## Variables
- \{\{company_name\}\} – entity holding the contracts
- \{\{contract_list\}\} – list or details of contracts to review

## Example Usage
### Input
company_name=Services UK Ltd; contract_list=1. AWS hosting agreement 2. Salesforce license 3. Office lease...

### Expected Output
CONTRACT PORTFOLIO SUMMARY - SERVICES UK LTD
[Table with columns: Contract, Counterparty, Annual Value, Expiry, Notice Period, Key Terms, Risk Level]

## Risk Warnings
⚠️ Check for cross-default provisions
⚠️ Identify auto-renewal contracts requiring action
⚠️ Note any change of control restrictions

### Audience: SME Business Owner
- Gives helicopter view of all major contracts
- Helps spot upcoming renewals and termination windows
- Identifies contracts needing renegotiation
- Essential for exit planning or investment rounds
