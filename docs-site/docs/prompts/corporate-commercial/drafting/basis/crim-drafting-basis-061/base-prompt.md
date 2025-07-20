---
prompt_id: crim-drafting-basis-061
title: Basis of Plea Document
practice_area: criminal
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, plea, basis, sentencing]
---

## Purpose
Draft basis of plea for guilty plea on specific factual basis requiring prosecution and court agreement.

## Jurisdiction
England & Wales

## Professional Context
Used where defendant admits offence but disputes prosecution version of facts affecting sentence.

## Base Prompt
Draft basis of plea for \{\{defendant_name\}\} pleading guilty to \{\{offence\}\}:
- Prosecution version: \{\{pros_facts\}\}
- Defence version: \{\{def_facts\}\}
- Key disputes: \{\{disputed_elements\}\}
Structure:
1. Charge admitted
2. Elements agreed
3. Specific disputes
4. Mitigation factors
5. Sentencing impact
6. Newton hearing position
Ensure:
- Admits all elements
- Clear factual basis
- Affects sentence legitimately
- Supported by evidence

## Variables
- \{\{defendant_name\}\} – defendant
- \{\{offence\}\} – charge pleading to
- \{\{pros_facts\}\} – prosecution version
- \{\{def_facts\}\} – defendant's version
- \{\{disputed_elements\}\} – key differences

## Example Usage
### Input
defendant_name=John Defendant; offence=assault by beating; pros_facts=unprovoked punch causing injury; def_facts=single push in self-defence after provocation; disputed_elements=level of violence, provocation, injuries

### Expected Output
BASIS OF PLEA

R v John Defendant

1. The Defendant pleads guilty to assault by beating contrary to s.39 Criminal Justice Act 1988.

2. The Defendant accepts:
   - Physical contact with complainant
   - No lawful justification...

3. The Defendant's basis is:
   - Single push not punch
   - Response to aggression...

## Risk Warnings
⚠️ Must admit all elements
⚠️ Newton hearing if not accepted
⚠️ Can affect credit for plea

### Audience: SME Business Owner
- Admits crime but disputes details
- Important for sentencing level
- Prosecution must accept or trial on facts
- Affects how judge sentences
