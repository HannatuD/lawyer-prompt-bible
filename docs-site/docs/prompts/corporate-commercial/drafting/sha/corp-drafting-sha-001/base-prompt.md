---
prompt_id: corp-drafting-sha-001
title: Share Purchase Agreement (E&W)
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [share-purchase, "m&a", warranties, corporate]
---

## Purpose
Generate a comprehensive share purchase agreement for the acquisition of a UK private limited company, including warranties, indemnities, and completion mechanics.

## Jurisdiction
England & Wales

## Professional Context
Used for the acquisition of shares in a private limited company, typically involving SMEs or mid-market transactions requiring detailed warranties and purchase price adjustments.

## Base Prompt
Draft a share purchase agreement under English law with:
- Purchaser: \{\{purchaser_name\}\}
- Seller: \{\{seller_name\}\}
- Target company: \{\{target_company\}\}
- Purchase price: £\{\{purchase_price\}\}
- Completion date: \{\{completion_date\}\}
- Warranty limitations: £\{\{warranty_cap\}\}
Include: conditions precedent, warranties schedule, disclosure letter mechanics, completion accounts mechanism, restrictive covenants, and tax covenant.

## Variables
- \{\{purchaser_name\}\} – full legal name of acquiring entity
- \{\{seller_name\}\} – full legal name of selling shareholder(s)
- \{\{target_company\}\} – name and company number
- \{\{purchase_price\}\} – total consideration in GBP
- \{\{completion_date\}\} – DD/MM/YYYY format
- \{\{warranty_cap\}\} – maximum warranty liability

## Example Usage
### Input
purchaser_name=Acquisition Holdings Ltd; seller_name=John Smith; target_company=Target Operations Ltd (12345678); purchase_price=5000000; completion_date=31/08/2025; warranty_cap=1000000

### Expected Output
SHARE PURCHASE AGREEMENT dated [date] between ACQUISITION HOLDINGS LTD (1) and JOHN SMITH (2) relating to the sale and purchase of shares in TARGET OPERATIONS LTD...

## Risk Warnings
⚠️ Warranty schedules must be tailored to specific business risks
⚠️ Tax clearances may be required pre-completion
⚠️ Consider separate disclosure letter and W&I insurance

### Audience: SME Business Owner
- This creates a legal contract for buying/selling company shares
- Key protections include warranties (promises about the business) and price adjustment mechanisms
- Always seek specialist M&A legal advice before signing
- Budget 4-8 weeks for negotiation process
