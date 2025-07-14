---
prompt_id: fam-analysis-childact-053
title: Child Arrangements Analysis
practice_area: family
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 50
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [family, children, custody, contact]
---

## Purpose
Analyse proposed child arrangements against welfare checklist factors and likely court approach.

## Jurisdiction
England & Wales

## Professional Context
Used to assess child arrangements proposals in private law proceedings focusing on child's best interests.

## Base Prompt
Analyse child arrangements proposal for {{children_names}} (ages {{ages}}):
- Current arrangements: {{existing_pattern}}
- Proposed change: {{proposed_arrangements}}
- Reason for change: {{change_reason}}
- Parental positions: {{parent_views}}
Apply welfare checklist:
1. Child's wishes/feelings
2. Physical/emotional needs
3. Likely effect of change
4. Age/sex/background
5. Harm suffered/risk
6. Parental capability
7. Court powers available
Consider:
- Status quo principle
- Attachment patterns
- Practical logistics
- Sibling relationships

## Variables
- {{children_names}} – children involved
- {{ages}} – children's ages
- {{existing_pattern}} – current arrangements
- {{proposed_arrangements}} – suggested changes
- {{change_reason}} – why change sought
- {{parent_views}} – each parent's position

## Example Usage
### Input
children_names=Tom and Lucy; ages=8 and 6; existing_pattern=alternate weekends with father; proposed_arrangements=50/50 shared care; change_reason=father moved closer, more flexible job; parent_views=Mother opposes, father seeks equality

### Expected Output
CHILD ARRANGEMENTS ANALYSIS

Children: Tom (8) and Lucy (6)
Current: Alternate weekends with father
Proposed: 50/50 shared care

WELFARE CHECKLIST ANALYSIS:
1. Wishes/feelings: At 8 and 6, limited weight but should be explored
2. Needs: Stability, both parents involved...

LIKELY OUTCOME: Gradual increase rather than immediate 50/50...

## Risk Warnings
⚠️ Child's welfare paramount
⚠️ No presumption of 50/50
⚠️ Court favours stability

### Audience: SME Business Owner
- Court decisions about children's living arrangements
- Based on what's best for children
- Not about parents' rights
- Status quo has advantage
