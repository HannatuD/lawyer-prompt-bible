---
prompt_id: crim-reviewing-caution-065
title: Simple Caution Review
practice_area: criminal
task_type: reviewing
jurisdiction: england-wales
complexity: basic
time_estimate: 20
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, caution, admission, disposal]
---

## Purpose
Review proposed simple caution assessing appropriateness and long-term implications for client.

## Jurisdiction
England & Wales

## Professional Context
Advising on whether to accept caution as alternative to prosecution considering admission requirements and consequences.

## Base Prompt
Review caution proposal for \\{\\{client_name\\}\\} for \\{\\{offence\\}\\}:
- Evidence strength: \\{\\{evidence_summary\\}\\}
- Admission made: \\{\\{admission_status\\}\\}
- Previous record: \\{\\{previous_cautions\\}\\}
- Immigration status: \\{\\{immigration\\}\\}
Consider:
1. Prosecution likelihood
2. Conviction chances
3. Caution criteria met
4. Future implications:
   - Enhanced DBS disclosure
   - Professional body impact
   - Immigration consequences
   - Travel restrictions
   - Future prosecution weight
5. Alternatives available
Advise on acceptance.

## Variables
- \\{\\{client_name\\}\\} – person offered caution
- \\{\\{offence\\}\\} – alleged offence
- \\{\\{evidence_summary\\}\\} – prosecution evidence
- \\{\\{admission_status\\}\\} – whether admitted
- \\{\\{previous_cautions\\}\\} – criminal history
- \\{\\{immigration\\}\\} – visa status if relevant

## Example Usage
### Input
client_name=Professional Client; offence=common assault; evidence_summary=one witness, CCTV unclear; admission_status=partial admission in interview; previous_cautions=none; immigration=British citizen

### Expected Output
CAUTION ASSESSMENT

Client: Professional Client
Offence: Common assault
Evidence: Moderate strength

RECOMMENDATION: Decline caution

REASONING:
1. Weak prosecution case
2. Professional implications severe
3. Enhanced DBS disclosure for life...

ALTERNATIVES:
- Request NFA
- Challenge prosecution decision...

## Risk Warnings
⚠️ Cautions require full admission
⚠️ Shows on enhanced DBS
⚠️ Can affect professional status

### Audience: SME Business Owner
- Police warning instead of court
- Must admit offence fully
- Still goes on record
- Can affect job prospects
