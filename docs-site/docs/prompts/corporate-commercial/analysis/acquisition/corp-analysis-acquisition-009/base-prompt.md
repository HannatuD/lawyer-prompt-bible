---
prompt_id: corp-analysis-acquisition-009
title: Asset vs Share Purchase Analysis
practice_area: corporate-commercial
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [acquisition, asset-purchase, share-purchase, tax]
---

## Purpose
Analyse the legal and tax implications of structuring an acquisition as asset purchase versus share purchase from buyer perspective.

## Jurisdiction
UK-wide

## Professional Context
Used in early stages of acquisition planning to determine optimal deal structure considering liability exposure, tax efficiency, and commercial objectives.

## Base Prompt
Compare asset purchase vs share purchase for acquiring \{\{target_business\}\}:
- Purchase price: £\{\{purchase_price\}\}
- Target structure: \{\{company_structure\}\}
- Key assets: \{\{asset_types\}\}
- Employee numbers: \{\{employee_count\}\}
- Property interests: \{\{property_status\}\}
Analyse:
1. Liability exposure differences
2. Tax implications (stamp duty, VAT, corporation tax)
3. Employee transfer (TUPE) considerations
4. Pension obligations
5. Contract/permit transfers
6. Warranty and indemnity requirements
7. Due diligence scope
Provide recommendation with rationale.

## Variables
- \{\{target_business\}\} – business sector and name
- \{\{purchase_price\}\} – acquisition value
- \{\{company_structure\}\} – "single company" or "group"
- \{\{asset_types\}\} – main assets involved
- \{\{employee_count\}\} – number of employees
- \{\{property_status\}\} – "owned", "leased" or "none"

## Example Usage
### Input
target_business=software company; purchase_price=2000000; company_structure=single company; asset_types=IP, customer contracts, equipment; employee_count=25; property_status=leased

### Expected Output
ACQUISITION STRUCTURE ANALYSIS
Target: Software company
Price: £2,000,000

RECOMMENDATION: Asset purchase preferred
KEY FACTORS:
1. Clean liability position...

## Risk Warnings
⚠️ Consider hidden liabilities in share purchases
⚠️ Asset purchases may trigger change of control
⚠️ TUPE applies regardless of structure

### Audience: SME Business Owner
- Two ways to buy a business: buy the company (shares) or buy its assets
- Share purchase = you get everything (including problems)
- Asset purchase = pick what you want, leave liabilities
- Tax treatment differs significantly
