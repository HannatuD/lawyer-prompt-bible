---
prompt_id: lit-drafting-directions-020
title: Directions Questionnaire
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: basic
time_estimate: 30
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, directions, case-management, procedure]
---

## Purpose
Complete directions questionnaire for case management in County Court proceedings ensuring appropriate track allocation.

## Jurisdiction
England & Wales

## Professional Context
Used after defence filed to inform court about case complexity, evidence needs, and preferred case management directions.

## Base Prompt
Complete directions questionnaire for \{\{party_name\}\} in \{\{case_name\}\}:
- Claim value: £\{\{claim_value\}\}
- Complexity: \{\{complexity_level\}\}
- Witnesses: \{\{witness_count\}\}
- Expert needed: \{\{expert_required\}\}
- Disclosure extent: \{\{disclosure_scope\}\}
- Trial estimate: \{\{trial_length\}\}
Address:
A. Settlement attempts/ADR
B. Court location preference
C. Track allocation views
D. Disclosure proposals
E. Witness evidence
F. Expert evidence needs
G. Trial readiness timeline
H. Costs budget (if multi-track)

## Variables
- \{\{party_name\}\} – your client's name
- \{\{case_name\}\} – case title
- \{\{claim_value\}\} – amount in dispute
- \{\{complexity_level\}\} – "straightforward", "moderate", "complex"
- \{\{witness_count\}\} – number of witnesses
- \{\{expert_required\}\} – "yes" or "no" and field
- \{\{disclosure_scope\}\} – "standard" or "specific"
- \{\{trial_length\}\} – estimated days

## Example Usage
### Input
party_name=ABC Ltd; case_name=ABC v XYZ; claim_value=75000; complexity_level=moderate; witness_count=3; expert_required=yes - accounting; disclosure_scope=standard; trial_length=2 days

### Expected Output
DIRECTIONS QUESTIONNAIRE
Case: ABC Ltd v XYZ Ltd

A. SETTLEMENT
1. ADR attempted: Yes - without prejudice meeting on [date]
2. Further ADR: Willing to consider mediation...

## Risk Warnings
⚠️ Accurate time estimates crucial
⚠️ Track allocation affects costs rules
⚠️ Consider proportionality

### Audience: SME Business Owner
- Tells court what's needed to prepare for trial
- Affects which track (and costs rules) apply
- Be realistic about time and evidence needs
- Court relies on this for scheduling
