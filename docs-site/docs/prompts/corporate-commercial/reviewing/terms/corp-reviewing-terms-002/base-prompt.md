---
prompt_id: corp-reviewing-terms-002
title: B2B Terms Review Checklist
practice_area: corporate-commercial
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 30
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [terms-conditions, b2b, commercial, review]
---

## Purpose
Create a comprehensive checklist for reviewing business-to-business terms and conditions, identifying key risk areas and suggesting amendments.

## Jurisdiction
England & Wales

## Professional Context
Used when advising clients on supplier or customer standard terms, particularly for ongoing commercial relationships requiring balanced risk allocation.

## Base Prompt
Review the following B2B terms for \\{\\{client_name\\}\\} as \\{\\{client_role\\}\\}:
\\{\\{terms_text\\}\\}
Identify and assess:
- Payment terms and credit risk
- Liability limitations and indemnities
- IP ownership and licensing
- Termination rights
- Force majeure provisions
- GDPR compliance
- Dispute resolution mechanism
Provide risk rating (1-5) for each area and suggest protective amendments.

## Variables
- \\{\\{client_name\\}\\} – your client's business name
- \\{\\{client_role\\}\\} – "customer" or "supplier"
- \\{\\{terms_text\\}\\} – the terms to review

## Example Usage
### Input
client_name=Tech Solutions Ltd; client_role=customer; terms_text=[standard terms document]

### Expected Output
RISK ASSESSMENT SUMMARY
1. Payment Terms: Risk Level 3/5
   - 60-day payment terms unfavourable
   - Suggest: negotiate to 30 days...

## Risk Warnings
⚠️ Check incorporation of terms matches client's processes
⚠️ Consider industry-specific regulations
⚠️ Review insurance requirements against limitations

### Audience: SME Business Owner
- This tool reviews contracts to spot potential problems
- Focus on payment terms, liability caps, and exit rights
- Red flags: unlimited liability, no termination rights, one-sided indemnities
- Consider legal review for contracts over £50k annual value
