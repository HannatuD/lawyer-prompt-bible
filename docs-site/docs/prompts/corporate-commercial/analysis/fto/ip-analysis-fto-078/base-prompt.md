---
prompt_id: ip-analysis-fto-078
title: Freedom to Operate Analysis
practice_area: intellectual-property
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 180
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, freedom-to-operate, clearance, risk]
---

## Purpose
Comprehensive freedom to operate analysis for new product launch identifying third party IP risks.

## Jurisdiction
UK-wide

## Professional Context
Essential pre-launch diligence to identify and mitigate IP infringement risks across all relevant rights.

## Base Prompt
Conduct FTO analysis for \\{\\{product_name\\}\\} launch in \\{\\{market_territory\\}\\}:
- Product features: \\{\\{technical_description\\}\\}
- Launch date: \\{\\{planned_launch\\}\\}
- Competitors: \\{\\{main_competitors\\}\\}
Search and analyse:
1. Patent landscape
2. Design rights
3. Trademark clearance
4. Copyright materials
5. Trade secrets risks
For each right:
- Infringement assessment
- Validity considerations
- Design-around options
- Licence prospects
- Geographic coverage
- Enforcement history
Provide risk matrix and mitigation plan.

## Variables
- \\{\\{product_name\\}\\} – new product
- \\{\\{market_territory\\}\\} – launch markets
- \\{\\{technical_description\\}\\} – product details
- \\{\\{planned_launch\\}\\} – target date
- \\{\\{main_competitors\\}\\} – key competitors

## Example Usage
### Input
product_name=SmartHome Hub; market_territory=UK and EU; technical_description=IoT controller with voice activation and mesh networking; planned_launch=Q4 2025; main_competitors=Amazon, Google, Apple

### Expected Output
FTO ANALYSIS - SMARTHOME HUB

PATENT LANDSCAPE:
- 47 relevant patent families identified
- 12 high relevance to product features
- 3 blocking patents identified

HIGH RISK PATENTS:
1. EP1234567 (Amazon) - Voice activation
   - Claim 1: potential infringement
   - Validity: questionable over prior art...

RISK MITIGATION PLAN:
1. Immediate: Design modification for voice feature
2. Short-term: Approach Amazon for licence...

## Risk Warnings
⚠️ Cannot guarantee complete clearance
⚠️ New filings emerge constantly
⚠️ Consider opinion insurance

### Audience: SME Business Owner
- Checks if product clear to launch
- Searches all types of IP rights
- Identifies blocking patents/marks
- Suggests ways to avoid problems
