---
prompt_id: lit-drafting-chronology-029
title: Case Chronology
practice_area: litigation
task_type: drafting
jurisdiction: uk-wide
complexity: basic
time_estimate: 40
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [litigation, chronology, case-preparation, trial]
---

## Purpose
Create clear chronology of events for litigation matter assisting case analysis and trial preparation.

## Jurisdiction
UK-wide

## Professional Context
Essential case preparation tool for identifying key events, patterns, and evidential gaps in complex disputes.

## Base Prompt
Create case chronology for \{\{case_name\}\} covering period \{\{start_date\}\} to \{\{end_date\}\}:
Key events: \{\{event_list\}\}
Format:
| Date | Event | Source | Significance | Page Ref |
Include:
- All relevant communications
- Contract/relationship milestones  
- Performance/breach incidents
- Notice/demand dates
- Without prejudice contacts (marked)
- Limitation relevant dates
Highlight:
- Disputed events
- Gaps in evidence
- Inconsistencies
Provide analysis of patterns revealed.

## Variables
- \{\{case_name\}\} – matter reference
- \{\{start_date\}\} – beginning of relevant period
- \{\{end_date\}\} – end of relevant period
- \{\{event_list\}\} – key events to include

## Example Usage
### Input
case_name=ABC v XYZ Contract Dispute; start_date=1/1/2024; end_date=31/12/2024; event_list=contract signed, delivery dates, complaints, termination

### Expected Output
CASE CHRONOLOGY - ABC V XYZ

| Date | Event | Source | Significance | Page Ref |
|------|-------|
