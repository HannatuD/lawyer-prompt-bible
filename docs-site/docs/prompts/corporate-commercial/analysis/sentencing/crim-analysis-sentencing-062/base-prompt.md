---
prompt_id: crim-analysis-sentencing-062
title: Sentencing Guidelines Analysis
practice_area: criminal
task_type: analysis
jurisdiction: england-wales
complexity: intermediate
time_estimate: 35
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [criminal, sentencing, guidelines, mitigation]
---

## Purpose
Analyse likely sentence using Sentencing Council guidelines identifying realistic range and mitigation impact.

## Jurisdiction
England & Wales

## Professional Context
Essential for client advice on plea decisions and managing expectations about likely outcomes.

## Base Prompt
Analyse sentencing for \\{\\{defendant_name\\}\\} convicted of \\{\\{offence\\}\\}:
- Previous convictions: \\{\\{antecedents\\}\\}
- Offence category: \\{\\{category_factors\\}\\}
- Harm factors: \\{\\{harm_level\\}\\}
- Culpability: \\{\\{culpability_level\\}\\}
Apply guidelines:
1. Starting point identification
2. Category range
3. Aggravating factors
4. Mitigating factors
5. Guilty plea reduction
6. Totality principle
7. Dangerousness assessment
8. Ancillary orders
Consider:
- Custody threshold
- Suspended sentence
- Community options

## Variables
- \\{\\{defendant_name\\}\\} – person being sentenced
- \\{\\{offence\\}\\} – conviction offence
- \\{\\{antecedents\\}\\} – criminal record
- \\{\\{category_factors\\}\\} – offence specifics
- \\{\\{harm_level\\}\\} – harm caused
- \\{\\{culpability_level\\}\\} – culpability factors

## Example Usage
### Input
defendant_name=Smith; offence=ABH s.47; antecedents=no previous convictions; category_factors=single punch, minor injury; harm_level=Category 3 lesser harm; culpability_level=Category C lesser culpability

### Expected Output
SENTENCING ANALYSIS - SMITH

Offence: ABH (s.47 OAPA)
Guidelines: Assault Definitive Guideline

CATEGORISATION:
- Harm: Category 3 (minor injury)
- Culpability: Category C (lesser role)
- Starting point: Medium level community order
- Range: Low level community - 26 weeks custody

ADJUSTMENTS:
- Previous good character: reduce
- Early guilty plea (33%): reduce by third...

LIKELY OUTCOME: Community order 12-18 months

## Risk Warnings
⚠️ Guidelines are starting point only
⚠️ Judge has discretion
⚠️ Consider all options

### Audience: SME Business Owner
- Predicts likely sentence using official guidelines
- Shows impact of guilty plea
- Identifies if prison likely
- Helps decide whether to plead
