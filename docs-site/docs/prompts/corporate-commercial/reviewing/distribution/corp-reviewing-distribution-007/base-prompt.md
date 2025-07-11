---
prompt_id: corp-reviewing-distribution-007
title: Distribution Agreement Review
practice_area: corporate-commercial
task_type: reviewing
jurisdiction: england-wales
complexity: intermediate
time_estimate: 45
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [distribution, agency, commercial, international]
---

## Purpose
Review and analyse distribution agreements for UK companies, identifying key commercial and legal risks in appointment of distributors.

## Jurisdiction
England & Wales

## Professional Context
Used when appointing or reviewing distribution arrangements, particularly for manufacturers or IP owners expanding market reach through third parties.

## Base Prompt
```text
Review distribution agreement for {{principal_name}} appointing {{distributor_name}} for {{territory}}:
Assess and report on:
- Exclusivity and territory definitions
- Minimum purchase/sales commitments
- Pricing and payment terms
- Marketing obligations and brand guidelines
- Product liability and indemnities
- IP licensing and trademark usage
- Competition law compliance
- Termination and post-term provisions
- Stock disposal on termination
Provide commercial recommendations and amendment suggestions.
```

## Variables
```text
- {{principal_name}} – manufacturer/supplier name
- {{distributor_name}} – appointed distributor
- {{territory}} – geographic scope
```

## Example Usage
### Input
principal_name=UK Manufacturers Ltd; distributor_name=European Sales GmbH; territory=Germany and Austria

### Expected Output
DISTRIBUTION AGREEMENT REVIEW
Principal: UK Manufacturers Ltd
Distributor: European Sales GmbH
Territory: Germany and Austria

KEY FINDINGS:
1. Exclusivity: Exclusive appointment but no minimum commitments - HIGH RISK...

## Risk Warnings
⚠️ Check competition law for exclusive territories
⚠️ Consider VAT and customs implications
⚠️ Review product liability insurance requirements

### Audience: SME Business Owner
- Reviews deals with companies selling your products
- Key issues: exclusive rights vs performance obligations
- Protections needed: minimum sales, brand control, easy exit
- Consider pilot period before exclusive arrangements
