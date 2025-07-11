---
prompt_id: corp-drafting-jv-008
title: Joint Venture Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [joint-venture, partnership, corporate, commercial]
---

## Purpose
Draft a comprehensive joint venture agreement for two parties establishing a new business venture with shared ownership and control.

## Jurisdiction
England & Wales

## Professional Context
Used when two or more businesses collaborate on a specific project or ongoing business, requiring clear governance, funding, and exit arrangements.

## Base Prompt
```text
Draft a joint venture agreement between {{party_a}} and {{party_b}} to establish {{jv_purpose}}:
- JV vehicle: {{structure_type}}
- Ownership split: {{party_a_share}}% / {{party_b_share}}%
- Initial funding: £{{initial_capital}}
Include:
- Business plan and objectives
- Board and management structure
- Funding and cash calls
- Deadlock resolution mechanisms
- Non-compete and exclusivity
- IP contributions and ownership
- Profit distribution policy
- Exit mechanisms (IPO, trade sale, buy-out)
- Dissolution triggers and procedures
```

## Variables
```text
- {{party_a}} – first JV partner name
- {{party_b}} – second JV partner name
- {{jv_purpose}} – business purpose of JV
- {{structure_type}} – "new company" or "contractual JV"
- {{party_a_share}} – party A's percentage
- {{party_b_share}} – party B's percentage
- {{initial_capital}} – starting capital amount
```

## Example Usage
### Input
party_a=Tech Corp Ltd; party_b=Retail Holdings Plc; jv_purpose=online marketplace for specialty goods; structure_type=new company; party_a_share=50; party_b_share=50; initial_capital=500000

### Expected Output
JOINT VENTURE AGREEMENT dated [date] between TECH CORP LTD and RETAIL HOLDINGS PLC...

## Risk Warnings
⚠️ Consider regulatory approvals (competition law)
⚠️ Align accounting treatment with structure
⚠️ Plan for deadlock and relationship breakdown

### Audience: SME Business Owner
- Legal framework for business partnership
- Covers ownership, control, funding, and exit
- Critical: deadlock breaking and exit rights
- Usually needs 2-3 months to negotiate properly
