---
prompt_id: lit-analysis-settlement-019
title: Settlement Agreement Analysis
practice_area: litigation
task_type: analysis
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, settlement, adr, dispute-resolution]
---

## Purpose
Analyse proposed settlement terms in litigation matter evaluating commercial merit against litigation risks and costs.

## Jurisdiction
UK-wide

## Professional Context
Used during settlement negotiations to objectively assess proposals against likely court outcomes, costs, and commercial objectives.

## Base Prompt
Analyse settlement proposal in {{case_name}}:
- Claim value: £{{claim_amount}}
- Settlement offer: £{{offer_amount}}
- Stage of proceedings: {{case_stage}}
- Costs to date: £{{costs_incurred}}
- Estimated future costs: £{{future_costs}}
Evaluate:
1. Percentage recovery vs claim
2. Net recovery after costs
3. Litigation risk assessment
4. Time value of money
5. Enforcement risks
6. Precedent value
7. Confidentiality benefits
8. Part 36 implications
Provide recommendation with reasoning.

## Variables
- {{case_name}} – case reference
- {{claim_amount}} – full claim value
- {{offer_amount}} – settlement proposed
- {{case_stage}} – "pre-action", "pleadings", "disclosure", etc.
- {{costs_incurred}} – costs spent so far
- {{future_costs}} – estimated costs to trial

## Example Usage
### Input
case_name=ABC v XYZ; claim_amount=100000; offer_amount=65000; case_stage=after disclosure; costs_incurred=25000; future_costs=40000

### Expected Output
SETTLEMENT ANALYSIS - ABC V XYZ

FINANCIAL ANALYSIS:
- Claim: £100,000
- Offer: £65,000 (65% of claim)
- Net recovery: £40,000 after costs to date...

RECOMMENDATION: Accept offer
REASONING:
1. Strong recovery percentage...

## Risk Warnings
⚠️ Consider Part 36 costs consequences
⚠️ Factor in enforcement difficulties
⚠️ Evaluate precedent implications

### Audience: SME Business Owner
- Weighs settlement offer vs fighting on
- Considers legal costs eating recovery
- Factors time, stress, and certainty
- Often better to settle for reasonable amount
