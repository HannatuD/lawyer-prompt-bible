---
prompt_id: prop-reviewing-survey-047
title: Commercial Property Survey Review
practice_area: property
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 45
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [property, survey, building, defects]
---

## Purpose
Review building survey report extracting key defects, cost implications, and negotiation points for property transaction.

## Jurisdiction
UK-wide

## Professional Context
Critical analysis for purchase decision and price negotiation based on property condition findings.

## Base Prompt
Review building survey for {{property_address}}:
{{survey_report}}
Identify and assess:
1. Structural issues
2. Environmental concerns
3. Deleterious materials
4. Regulatory compliance
5. Health & safety issues
6. Urgent repairs needed
7. Planned maintenance items
8. Cost estimates provided
9. Further investigations needed
10. Deal-breaker defects
Provide:
- Priority issues list
- Total cost implications
- Price chip recommendations
- Conditions precedent suggestions

## Variables
- {{property_address}} – surveyed property
- {{survey_report}} – survey content

## Example Usage
### Input
property_address=Industrial Unit, Birmingham; survey_report=[full building survey report]

### Expected Output
SURVEY ANALYSIS - INDUSTRIAL UNIT

CRITICAL ISSUES:
1. Asbestos in roof - £50k removal
2. Ground contamination suspected - investigation needed
3. Electrical installation requires rewire - £30k...

TOTAL ESTIMATED COSTS: £150,000-200,000

RECOMMENDATIONS:
1. Price reduction of £175,000
2. OR retention pending further tests...

## Risk Warnings
⚠️ Hidden defects remain buyer's risk
⚠️ Specialist surveys may be needed
⚠️ Factor in business disruption

### Audience: SME Business Owner
- Independent check of building condition
- Identifies problems and repair costs
- Basis for price negotiation
- May reveal deal-breaking issues
