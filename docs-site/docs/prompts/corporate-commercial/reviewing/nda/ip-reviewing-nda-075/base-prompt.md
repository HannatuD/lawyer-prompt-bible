---
prompt_id: ip-reviewing-nda-075
title: Technology NDA Review
practice_area: intellectual-property
task_type: reviewing
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, nda, confidentiality, technology]
---

## Purpose
Review non-disclosure agreement for technology discussions ensuring adequate protection without hindering business.

## Jurisdiction
England & Wales

## Professional Context
Pre-collaboration review ensuring confidential information protected while enabling meaningful technical discussions.

## Base Prompt
Review NDA for \\{\\{disclosing_party\\}\\} sharing with \\{\\{receiving_party\\}\\}:
- Purpose: \\{\\{disclosure_purpose\\}\\}
- Information type: \\{\\{info_category\\}\\}
- Duration: \\{\\{nda_term\\}\\}
Check for:
1. Definition breadth
2. Permitted use scope
3. Standard exceptions
4. Residuals clause
5. Non-solicitation
6. Return obligations
7. Injunctive relief
8. Governing law
9. Third party rights
10. Future dealings
Flag unusual or problematic terms.

## Variables
- \\{\\{disclosing_party\\}\\} – information owner
- \\{\\{receiving_party\\}\\} – recipient
- \\{\\{disclosure_purpose\\}\\} – why disclosing
- \\{\\{info_category\\}\\} – type of information
- \\{\\{nda_term\\}\\} – confidentiality period

## Example Usage
### Input
disclosing_party=Startup Ltd; receiving_party=BigCorp Plc; disclosure_purpose=potential investment/acquisition; info_category=proprietary algorithms and business model; nda_term=3 years

### Expected Output
NDA REVIEW - STARTUP LTD

PURPOSE: Investment discussions
TERM: 3 years

KEY CONCERNS:
1. Residuals clause - allows mental retention
   Risk: Core algorithms vulnerable
   
2. No non-compete protection
   Risk: BigCorp could develop competing product...

AMENDMENTS NEEDED:
1. Delete residuals clause
2. Add limited non-compete...

## Risk Warnings
⚠️ Residuals clauses risky for code
⚠️ Check group company coverage
⚠️ Injunction rights important

### Audience: SME Business Owner
- Protects your confidential information
- Watch for loopholes and exceptions
- Should cover likely scenarios
- Consider what you're really protecting
