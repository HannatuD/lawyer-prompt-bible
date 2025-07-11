---
prompt_id: prop-drafting-lease-041
title: Commercial Lease Agreement
practice_area: property
task_type: drafting
jurisdiction: england-wales
complexity: advanced
time_estimate: 120
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, commercial-lease, landlord, tenant]
---

## Purpose
Draft commercial lease for business premises with appropriate landlord protections and tenant operational flexibility.

## Jurisdiction
England & Wales

## Professional Context
Used for letting commercial property requiring balance between landlord investment protection and tenant business needs.

## Base Prompt
Draft commercial lease for {{property_address}}:
- Landlord: {{landlord_name}}
- Tenant: {{tenant_name}}
- Term: {{lease_term}} years
- Rent: £{{annual_rent}} per annum
- Rent reviews: {{review_pattern}}
- Use: {{permitted_use}}
- Break clause: {{break_options}}
Include:
1. Premises definition and rights
2. Rent payment (quarterly in advance)
3. Rent review mechanism
4. Repair obligations (FRI)
5. Use and alterations
6. Assignment/subletting conditions
7. Insurance provisions
8. Service charge if applicable
9. Break clauses
10. 1954 Act position
Include schedules for condition and services.

## Variables
- {{property_address}} – full property address
- {{landlord_name}} – landlord details
- {{tenant_name}} – tenant company
- {{lease_term}} – length in years
- {{annual_rent}} – yearly rent
- {{review_pattern}} – "5-yearly upward only"
- {{permitted_use}} – planning use class
- {{break_options}} – break clause details

## Example Usage
### Input
property_address=Unit 5, Business Park, Reading RG1 1AA; landlord_name=Property Investments Ltd; tenant_name=Tech Startup Ltd; lease_term=10; annual_rent=50000; review_pattern=5-yearly to market; permitted_use=B1 office use; break_options=mutual break at year 5

### Expected Output
LEASE

This Lease is made the [  ] day of [  ] 2025

BETWEEN:
(1) PROPERTY INVESTMENTS LTD (Landlord)
(2) TECH STARTUP LTD (Tenant)

PREMISES: Unit 5, Business Park, Reading RG1 1AA...

## Risk Warnings
⚠️ 1954 Act exclusion needs court procedure
⚠️ Guarantees may be needed
⚠️ Check planning compliance

### Audience: SME Business Owner
- Long-term rental agreement for business premises
- Key terms: rent, repairs, break clauses
- Usually "FRI" = you pay for everything
- Can be hard to exit early
