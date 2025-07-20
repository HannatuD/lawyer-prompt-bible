---
prompt_id: emp-drafting-reference-039
title: Employment Reference (Balanced)
practice_area: employment
task_type: drafting
jurisdiction: uk-wide
complexity: basic
time_estimate: 20
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [employment, reference, liability, data]
---

## Purpose
Draft balanced employment reference that fulfils duty of care while minimising liability risks.

## Jurisdiction
UK-wide

## Professional Context
Providing references requires balancing duties to former employee and recipient employer while avoiding negligence claims.

## Base Prompt
Draft employment reference for \{\{employee_name\}\} who worked as \{\{job_title\}\} from \{\{start_date\}\} to \{\{end_date\}\}:
- Reason for leaving: \{\{departure_reason\}\}
- Performance level: \{\{performance_summary\}\}
- Attendance: \{\{attendance_record\}\}
- Conduct issues: \{\{any_issues\}\}
- Reference type: \{\{basic_or_detailed\}\}
Include:
- Factual employment details
- Objective performance comments
- Disclaimer if appropriate
- No speculation/opinion
- Balanced presentation
- Data protection compliance
Follow "true, accurate, fair" principle.

## Variables
- \{\{employee_name\}\} – former employee
- \{\{job_title\}\} – role held
- \{\{start_date\}\} – employment start
- \{\{end_date\}\} – employment end
- \{\{departure_reason\}\} – why they left
- \{\{performance_summary\}\} – objective assessment
- \{\{attendance_record\}\} – factual record
- \{\{any_issues\}\} – disciplinary/performance matters
- \{\{basic_or_detailed\}\} – level of detail required

## Example Usage
### Input
employee_name=David Sales; job_title=Sales Manager; start_date=1/1/20; end_date=31/12/24; departure_reason=resignation for new role; performance_summary=consistently met targets; attendance_record=good, average 5 days absence/year; any_issues=none; basic_or_detailed=detailed

### Expected Output
EMPLOYMENT REFERENCE

TO WHOM IT MAY CONCERN

David Sales was employed by [Company] as Sales Manager from 1 January 2020 to 31 December 2024.

During his employment, Mr Sales consistently met his sales targets...

## Risk Warnings
⚠️ Can be sued by both parties
⚠️ Stick to facts not opinions
⚠️ Cannot refuse if agreed in settlement

### Audience: SME Business Owner
- Legal duty to be accurate and fair
- Can be sued for bad or negligent reference
- Safest to give just facts
- Check settlement agreement requirements
