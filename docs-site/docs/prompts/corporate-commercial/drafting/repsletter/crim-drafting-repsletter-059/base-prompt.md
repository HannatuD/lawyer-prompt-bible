---
prompt_id: crim-drafting-repsletter-059
title: Police Station Representation Letter
practice_area: criminal
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 25
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, police-station, representation, pace]
---

## Purpose
Draft initial letter to police confirming representation and asserting client's rights during detention.

## Jurisdiction
England & Wales

## Professional Context
Urgent communication when client arrested, establishing legal representation and protecting fundamental rights.

## Base Prompt
Draft police station representation letter for \{\{client_name\}\} detained at \{\{police_station\}\}:
- Reference: \{\{custody_number\}\}
- Alleged offence: \{\{offence\}\}
- Time of detention: \{\{detention_time\}\}
- Interview scheduled: \{\{interview_time\}\}
Assert:
1. Confirmation of representation
2. Immediate consultation required
3. Disclosure request
4. Fit for interview assessment
5. Appropriate adult if needed
6. Interpreter requirements
7. Medical needs
8. PACE compliance
9. Interview postponement if needed
10. Bail representations preparation

## Variables
- \{\{client_name\}\} – detained person
- \{\{police_station\}\} – place of detention
- \{\{custody_number\}\} – custody reference
- \{\{offence\}\} – alleged offence
- \{\{detention_time\}\} – when detained
- \{\{interview_time\}\} – planned interview

## Example Usage
### Input
client_name=David Client; police_station=Central Police Station; custody_number=CP/12345/25; offence=fraud by false representation; detention_time=14:30 today; interview_time=18:00 today

### Expected Output
URGENT - LEGAL REPRESENTATION

To: Custody Sergeant, Central Police Station
Re: David Client - Custody Ref: CP/12345/25

I confirm I represent Mr David Client currently detained at your station.

I require:
1. Immediate private consultation with my client
2. Full disclosure of evidence...

## Risk Warnings
⚠️ Time critical for PACE limits
⚠️ Preserve right to silence
⚠️ Check vulnerability issues

### Audience: SME Business Owner
- Formal notice of legal representation
- Protects rights at police station
- Requests evidence disclosure
- Can delay interview if needed
