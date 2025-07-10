---
prompt_id: ip-analysis-infringement-073
title: Patent Infringement Analysis
practice_area: intellectual-property
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, patent, infringement, freedom-to-operate]
---

## Purpose
Analyse potential patent infringement comparing product features against patent claims systematically.

## Jurisdiction
UK-wide

## Professional Context
Critical analysis for product launch decisions or defence against infringement allegations.

## Base Prompt
Analyse infringement risk for {{product_name}} against {{patent_number}}:
- Patent holder: {{patentee}}
- Priority date: {{priority_date}}
- Product features: {{product_description}}
- Claims focus: {{relevant_claims}}
Conduct:
1. Claim construction
2. Feature-by-feature analysis
3. Doctrine of equivalents
4. Prior art relevance
5. Validity challenges
6. Prosecution history
7. Design around options
8. Licence availability
9. Invalidity prospects
10. Risk quantification
Provide FTO opinion structure.

## Variables
- {{product_name}} – product being assessed
- {{patent_number}} – patent of concern
- {{patentee}} – patent owner
- {{priority_date}} – patent priority
- {{product_description}} – product details
- {{relevant_claims}} – key patent claims

## Example Usage
### Input
product_name=SmartSensor v2; patent_number=GB2500123; patentee=Sensor Corp; priority_date=2018-03-15; product_description=wireless temperature sensor with mesh networking; relevant_claims=claims 1-3 covering networked sensors

### Expected Output
PATENT INFRINGEMENT ANALYSIS
Product: SmartSensor v2
Patent: GB2500123 (Sensor Corp)

CLAIM 1 ANALYSIS:
"A wireless sensor system comprising..."
- Element A: present in product ✓
- Element B: arguable equivalent
- Element C: not present ✗

INFRINGEMENT RISK: Medium
- Literal infringement unlikely
- Equivalents doctrine risk...

MITIGATION OPTIONS:
1. Design modification to avoid Element B
2. Validity challenge based on prior art...

## Risk Warnings
⚠️ Get formal FTO opinion
⚠️ Wilful infringement penalties
⚠️ Consider patent insurance

### Audience: SME Business Owner
- Checks if product infringes patents
- Compares your product to patent claims
- High stakes - can stop sales
- May need design changes
