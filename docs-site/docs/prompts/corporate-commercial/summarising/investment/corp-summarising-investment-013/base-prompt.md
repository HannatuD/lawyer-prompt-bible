---
prompt_id: corp-summarising-investment-013
title: Investment Terms Summary
practice_area: corporate-commercial
task_type: summarising
jurisdiction: uk-wide
complexity: advanced
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [investment, termsheet, venture-capital, equity]
---

## Purpose
Summarise complex investment term sheets or agreements into clear executive summary highlighting key commercial terms and founder implications.

## Jurisdiction
UK-wide

## Professional Context
Used to quickly understand and compare investment offers, particularly for founders and boards evaluating venture capital or private equity proposals.

## Base Prompt
Summarise the investment terms for \\{\\{company_name\\}\\} receiving investment from \\{\\{investor_name\\}\\}:
\\{\\{termsheet_content\\}\\}
Extract and explain:
- Investment amount and structure
- Pre/post-money valuation
- Liquidation preferences and participation
- Board composition changes
- Protective provisions/consent rights
- Anti-dilution provisions
- Vesting and good/bad leaver terms
- Exit rights (drag/tag/ROFR)
- Information rights
Create comparison table of key terms and highlight founder-unfriendly provisions.

## Variables
- \\{\\{company_name\\}\\} – target company
- \\{\\{investor_name\\}\\} – investing entity
- \\{\\{termsheet_content\\}\\} – term sheet text

## Example Usage
### Input
company_name=TechStart Ltd; investor_name=Growth Capital Partners; termsheet_content=[full term sheet text]

### Expected Output
INVESTMENT SUMMARY - TECHSTART LTD
Investor: Growth Capital Partners
Investment: £5M Series A

KEY TERMS:
- Pre-money valuation: £15M
- Investor stake: 25%...

## Risk Warnings
⚠️ Legal review essential before signing
⚠️ Model dilution scenarios
⚠️ Understand veto rights impact

### Audience: SME Business Owner
- Breaks down complex investment offers
- Shows what you're giving up for funding
- Key issues: control, dilution, exit restrictions
- Always model various exit scenarios
