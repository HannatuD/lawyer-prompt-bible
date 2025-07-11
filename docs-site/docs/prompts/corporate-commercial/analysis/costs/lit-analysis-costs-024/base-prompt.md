---
prompt_id: lit-analysis-costs-024
title: Costs Risk Assessment
practice_area: litigation
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 35
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, costs, risk-assessment, budgeting]
---

## Purpose
Analyse costs exposure in litigation including own costs, adverse costs risk, and Part 36 implications.

## Jurisdiction
England & Wales

## Professional Context
Used for advising clients on financial exposure in litigation and informing settlement decisions.

## Base Prompt
```text
Assess costs position for {{party}} in {{case_name}}:
- Claim value: £{{claim_value}}
- Track: {{track}}
- Stage: {{current_stage}}
- Own costs to date: £{{own_costs}}
- Estimated future costs: £{{future_costs}}
- Part 36 offers: {{part36_position}}
Calculate:
1. Total own costs exposure
2. Adverse costs risk if lose
3. Irrecoverable costs if win
4. Part 36 consequences
5. Security for costs risk
6. Costs budget implications
7. ATE insurance benefits
Provide best/worst case scenarios.
```

## Variables
```text
- {{party}} – claimant or defendant
- {{case_name}} – case reference
- {{claim_value}} – amount claimed
- {{track}} – small/fast/multi track
- {{current_stage}} – point in proceedings
- {{own_costs}} – costs incurred
- {{future_costs}} – costs to trial
- {{part36_position}} – any Part 36 offers
```

## Example Usage
### Input
party=Claimant; case_name=ABC v XYZ; claim_value=150000; track=multi-track; current_stage=after disclosure; own_costs=40000; future_costs=60000; part36_position=Defendant offered £80k 2 months ago

### Expected Output
COSTS RISK ASSESSMENT - ABC V XYZ

COSTS EXPOSURE SUMMARY:
Best case (win with costs):
- Recovery: £150,000
- Costs recovery (70%): £70,000...

## Risk Warnings
⚠️ Part 36 creates severe penalties
⚠️ Consider costs budget caps
⚠️ Factor proportionality test

### Audience: SME Business Owner
- Shows financial risks of litigation
- Winning doesn't mean recovering all costs
- Part 36 offers change costs dynamics
- Consider insurance for adverse costs
