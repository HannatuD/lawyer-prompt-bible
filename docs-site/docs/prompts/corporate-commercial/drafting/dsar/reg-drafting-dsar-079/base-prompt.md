---
prompt_id: reg-drafting-dsar-079
title: Data Subject Access Request Response
practice_area: regulatory-compliance
task_type: drafting
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [data-protection, gdpr, dsar, privacy]
---

## Purpose
Draft compliant response to data subject access request balancing transparency with exemptions.

## Jurisdiction
UK-wide

## Professional Context
Legal requirement to respond within one month with all personal data unless exemptions apply.

## Base Prompt
Draft DSAR response for \\{\\{data_subject\\}\\} to \\{\\{data_controller\\}\\}:
- Request date: \\{\\{request_date\\}\\}
- ID verified: \\{\\{id_confirmation\\}\\}
- Search conducted: \\{\\{systems_searched\\}\\}
- Data found: \\{\\{data_categories\\}\\}
- Exemptions applicable: \\{\\{exemptions\\}\\}
Include:
1. Confirmation of processing
2. Purposes of processing
3. Categories of data
4. Recipients/transfers
5. Retention periods
6. Rights reminder
7. Source of data
8. Automated decisions
9. Exemptions applied
10. Further rights
Ensure UK GDPR compliance.

## Variables
- \\{\\{data_subject\\}\\} – requester name
- \\{\\{data_controller\\}\\} – organisation
- \\{\\{request_date\\}\\} – when received
- \\{\\{id_confirmation\\}\\} – ID verification done
- \\{\\{systems_searched\\}\\} – systems checked
- \\{\\{data_categories\\}\\} – types of data found
- \\{\\{exemptions\\}\\} – applicable exemptions

## Example Usage
### Input
data_subject=John Customer; data_controller=Retail Ltd; request_date=1/6/25; id_confirmation=passport verified; systems_searched=CRM, email, CCTV; data_categories=contact details, purchase history, CCTV footage; exemptions=none applicable

### Expected Output
Dear Mr Customer,

DATA SUBJECT ACCESS REQUEST RESPONSE

Thank you for your request dated 1 June 2025. Following verification of your identity, we have conducted a thorough search...

YOUR PERSONAL DATA:
1. Contact Information
   - Name: John Customer
   - Address: [as held]...

PURPOSES OF PROCESSING:
- Contract performance
- Marketing (with consent)...

## Risk Warnings
⚠️ One month deadline strict
⚠️ Must include all personal data
⚠️ Exemptions narrowly interpreted

### Audience: SME Business Owner
- Legal right to access personal data
- Must respond within one month
- Include all data unless exempt
- Free for first request
