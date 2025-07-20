---
prompt_id: prop-analysis-dilapidations-043
title: Dilapidations Liability Assessment
practice_area: property
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, dilapidations, lease-end, repair]
---

## Purpose
Assess potential dilapidations liability at lease end, comparing repair obligations against property condition.

## Jurisdiction
England & Wales

## Professional Context
Used to evaluate repair liability exposure and negotiate dilapidations claims at lease termination.

## Base Prompt
Assess dilapidations liability for \\{\\{tenant_name\\}\\} at \\{\\{property_address\\}\\}:
- Lease term: \\{\\{lease_details\\}\\}
- Repair covenant: \\{\\{repair_obligation\\}\\}
- Current condition: \\{\\{condition_summary\\}\\}
- Time to expiry: \\{\\{months_remaining\\}\\}
- Landlord's intentions: \\{\\{landlord_plans\\}\\}
Analyse:
1. Scope of repair obligation
2. Decoration requirements
3. Reinstatement of alterations
4. Statutory compliance updates
5. S.18 Landlord & Tenant Act cap
6. Diminution in value argument
7. Supersession potential
8. Cost estimate breakdown
9. Negotiation strategy
10. Early settlement benefits

## Variables
- \\{\\{tenant_name\\}\\} – tenant company
- \\{\\{property_address\\}\\} – leased premises
- \\{\\{lease_details\\}\\} – key lease terms
- \\{\\{repair_obligation\\}\\} – "full repairing" etc
- \\{\\{condition_summary\\}\\} – current state
- \\{\\{months_remaining\\}\\} – time to lease end
- \\{\\{landlord_plans\\}\\} – known intentions

## Example Usage
### Input
tenant_name=Retail Co Ltd; property_address=10 Shopping Centre; lease_details=10-year lease expiring Dec 2025; repair_obligation=full repairing and insuring; condition_summary=general wear, altered layout, dated decoration; months_remaining=6; landlord_plans=unknown, possibly redevelop

### Expected Output
DILAPIDATIONS ASSESSMENT
Tenant: Retail Co Ltd
Property: 10 Shopping Centre

ESTIMATED LIABILITY: £75,000-£125,000

BREAKDOWN:
- Repairs: £25,000
- Decoration: £15,000
- Reinstatement: £35,000
- Compliance: £25,000...

## Risk Warnings
⚠️ Early action reduces costs
⚠️ S.18 cap may apply
⚠️ Negotiate before schedule served

### Audience: SME Business Owner
- Repair bill when leaving leased premises
- Can be very expensive surprise
- Landlord's actual loss is cap
- Early negotiation often cheaper
