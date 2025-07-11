---
prompt_id: lit-drafting-mediation-025
title: Mediation Position Statement
practice_area: litigation
task_type: drafting
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, mediation, adr, settlement]
---

## Purpose
Draft effective mediation position statement that advances settlement while maintaining litigation position if needed.

## Jurisdiction
UK-wide

## Professional Context
Used for mediation preparation, balancing openness for settlement with protection of litigation position.

## Base Prompt
```text
Draft mediation position statement for {{party_name}} in {{dispute_description}}:
- Claim amount: £{{claim_amount}}
- Key issues: {{main_issues}}
- Settlement range: £{{min_settlement}} to £{{ideal_settlement}}
- Non-monetary terms: {{other_terms}}
Structure:
1. Brief case background
2. Key issues in dispute
3. Party's perspective on merits
4. Litigation risks acknowledged
5. Commercial drivers
6. Settlement parameters
7. Creative solutions
Tone: Constructive but protecting position
Mark "Without Prejudice Save as to Costs"
```

## Variables
```text
- {{party_name}} – your client
- {{dispute_description}} – nature of dispute
- {{claim_amount}} – amount in dispute
- {{main_issues}} – key disagreement points
- {{min_settlement}} – minimum acceptable
- {{ideal_settlement}} – target settlement
- {{other_terms}} – non-monetary aspects
```

## Example Usage
### Input
party_name=ABC Ltd; dispute_description=construction defects claim; claim_amount=200000; main_issues=scope of defects, causation, quantum; min_settlement=120000; ideal_settlement=160000; other_terms=future work opportunity, payment terms

### Expected Output
WITHOUT PREJUDICE SAVE AS TO COSTS

MEDIATION POSITION STATEMENT
ABC LTD

1. BACKGROUND
This dispute arises from construction works completed in 2024...

## Risk Warnings
⚠️ Maintain without prejudice privilege
⚠️ Don't reveal bottom line
⚠️ Focus on interests not positions

### Audience: SME Business Owner
- Explains your case for mediator
- Shows willingness to settle
- Protects your litigation position
- Helps mediator find middle ground
