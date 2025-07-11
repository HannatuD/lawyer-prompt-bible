---
prompt_id: corp-drafting-consultancy-014
title: IT Consultancy Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [consultancy, it-services, professional-services, ir35]
---

## Purpose
Draft IR35-compliant IT consultancy agreement for genuine business-to-business consulting services with appropriate commercial terms.

## Jurisdiction
England & Wales

## Professional Context
Used for engaging IT consultants through limited companies where demonstrating genuine business services (not disguised employment) is critical.

## Base Prompt
```text
Draft an IT consultancy agreement between {{client}} and {{consultancy_company}} for {{consultant_name}} to provide {{services}}:
- Duration: {{contract_length}}
- Fee: £{{daily_rate}} per day
- Location: {{work_location}}
IR35 considerations:
- Right of substitution (qualified)
- No mutuality of obligation
- Consultancy controls how services delivered
- Financial risk on consultancy
- Equipment provided by consultancy
- Multiple client capability
- Fixed project deliverables
Include IP assignment, confidentiality, professional indemnity insurance.
```

## Variables
```text
- {{client}} – end client company
- {{consultancy_company}} – consultant's limited company
- {{consultant_name}} – individual consultant
- {{services}} – IT services description
- {{contract_length}} – project duration
- {{daily_rate}} – consultancy rate
- {{work_location}} – "client site", "remote", or "mixed"
```

## Example Usage
### Input
client=Finance Corp UK; consultancy_company=Tech Consulting Ltd; consultant_name=Jane Developer; services=system architecture review and optimization; contract_length=6 months; daily_rate=650; work_location=mixed

### Expected Output
CONSULTANCY AGREEMENT dated [date] between FINANCE CORP UK ("Client") and TECH CONSULTING LTD ("Consultancy")...

## Risk Warnings
⚠️ Ensure working practices match contract
⚠️ Keep evidence of business-to-business relationship
⚠️ Review if legislation changes

### Audience: SME Business Owner
- Engages IT contractors through their companies
- Must prove real business service (not employment)
- Key: consultant controls how work done
- Keep records showing independent operation
