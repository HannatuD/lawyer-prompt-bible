---
prompt_id: prop-drafting-easement-049
title: Deed of Easement (Right of Way)
practice_area: property
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, easement, right-of-way, deed]
---

## Purpose
Draft deed granting permanent right of way over servient land for benefit of dominant tenement.

## Jurisdiction
England & Wales

## Professional Context
Used to formalise access rights between neighbouring properties, essential for landlocked sites or shared accessways.

## Base Prompt
Draft deed of easement between {{grantor}} (servient owner) and {{grantee}} (dominant owner):
- Servient land: {{burdened_property}}
- Dominant land: {{benefited_property}}
- Right granted: {{access_description}}
- Route: {{route_details}}
- Payment: £{{consideration}}
- Maintenance: {{maintenance_split}}
Include:
1. Clear grant of right
2. Extent (vehicles/pedestrian)
3. Times of use
4. Maintenance obligations
5. Insurance and indemnity
6. Reserved rights
7. Dispute resolution
8. Registration requirements
9. Plans showing route
10. Successor binding

## Variables
- {{grantor}} – owner granting right
- {{grantee}} – owner receiving benefit
- {{burdened_property}} – servient land
- {{benefited_property}} – dominant land
- {{access_description}} – type of access
- {{route_details}} – physical route
- {{consideration}} – payment amount
- {{maintenance_split}} – cost sharing

## Example Usage
### Input
grantor=Farm Owner Ltd; grantee=House Buyer; burdened_property=Green Farm; benefited_property=The Cottage, Green Lane; access_description=vehicular and pedestrian access; route_details=existing track shown red on plan; consideration=10000; maintenance_split=50/50 shared

### Expected Output
DEED OF GRANT OF EASEMENT

Date: [  ]

BETWEEN:
(1) FARM OWNER LTD (Grantor)
(2) [HOUSE BUYER] (Grantee)

BACKGROUND
A. The Grantor owns the freehold property known as Green Farm
B. The Grantee owns The Cottage, Green Lane which requires access...

## Risk Warnings
⚠️ Must be by deed to be legal
⚠️ Register at Land Registry
⚠️ Consider future development impact

### Audience: SME Business Owner
- Legal right to use someone else's land
- Typically for access to your property
- Permanent and binds future owners
- Must be clearly defined route
