---
prompt_id: lit-drafting-scott-027
title: Scott Schedule Template
practice_area: litigation
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 90
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, scott-schedule, construction, defects]
---

## Purpose
Create Scott Schedule for multi-item disputes (typically construction defects) enabling systematic item-by-item adjudication.

## Jurisdiction
England & Wales

## Professional Context
Used in construction disputes, dilapidations claims, and other multi-issue cases requiring itemised analysis of claims.

## Base Prompt
```text
Create Scott Schedule for {{case_type}} in {{case_name}}:
Structure columns:
1. Item number
2. {{claimant_name}}'s description of {{item_type}}
3. {{claimant_name}}'s costing
4. {{defendant_name}}'s response
5. {{defendant_name}}'s costing
6. Court/Expert notes
For each item include:
- Clear description
- Location/reference
- Alleged breach
- Remedial work needed
- Cost breakdown
- Supporting evidence refs
Total items: {{item_count}}
Format as table suitable for ongoing use.
```

## Variables
```text
- {{case_type}} – "construction defects", "dilapidations", etc.
- {{case_name}} – case reference
- {{claimant_name}} – claiming party
- {{defendant_name}} – defending party
- {{item_type}} – "defect", "breach", "disrepair"
- {{item_count}} – number of items
```

## Example Usage
### Input
case_type=construction defects; case_name=Owner v Builder Ltd; claimant_name=Property Owner; defendant_name=Builder Ltd; item_type=defect; item_count=25

### Expected Output
SCOTT SCHEDULE
Owner v Builder Ltd
Construction Defects Claim

[Table format]
Item | Owner's Description | Owner's Cost | Builder's Response | Builder's Cost | Notes
1 | Defective roof tiles allowing water ingress at grid ref A1-A5 | £5,000 | Admits defect but disputes extent | £2,000 | 

## Risk Warnings
⚠️ Agree format with opponent/court
⚠️ Keep descriptions objective
⚠️ Cross-reference to evidence

### Audience: SME Business Owner
- Systematic list of every disputed item
- Each side states their position
- Helps narrow real disputes
- Court works through item by item
