---
prompt_id: prop-reviewing-transfer-042
title: Property Transfer Review (TR1)
practice_area: property
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, transfer, conveyancing, land-registry]
---

## Purpose
Review draft transfer deed (TR1) ensuring accurate reflection of agreed terms and proper execution requirements.

## Jurisdiction
England & Wales

## Professional Context
Critical conveyancing document requiring careful review before completion to avoid post-completion disputes.

## Base Prompt
```text
Review TR1 transfer for {{property_address}}:
- Transferor: {{seller_details}}
- Transferee: {{buyer_details}}
- Consideration: £{{purchase_price}}
- Title number: {{title_number}}
Check:
1. Property description matches title
2. Transferor/transferee details correct
3. Consideration accurately stated
4. Covenants/restrictions appropriate
5. Execution provisions correct
6. Joint ownership declarations
7. Certificate of value
8. Plans match if required
9. 9. Stamp duty provisions
10. Land Registry requirements
Flag any unusual provisions or missing elements.
```

## Variables
```text
- {{property_address}} – property being transferred
- {{seller_details}} – transferor name(s)
- {{buyer_details}} – transferee name(s)
- {{purchase_price}} – consideration amount
- {{title_number}} – Land Registry title
```

## Example Usage
### Input
property_address=123 High Street, London W1; seller_details=John Smith; buyer_details=ABC Properties Ltd; purchase_price=750000; title_number=LN123456

### Expected Output
TR1 REVIEW - 123 HIGH STREET

CRITICAL ISSUES:
1. Execution - Company buyer needs two signatures/seal
2. Declaration of trust missing - required for company...

AMENDMENTS NEEDED:
Panel 11: Add declaration of trust
Panel 12: Include certificate of value...

## Risk Warnings
⚠️ Execution errors invalidate transfer
⚠️ Wrong covenants bind forever
⚠️ Check ID requirements met

### Audience: SME Business Owner
- Legal document transferring property ownership
- Must be perfect - errors hard to fix
- Check company execution rules
- Declares stamp duty position
