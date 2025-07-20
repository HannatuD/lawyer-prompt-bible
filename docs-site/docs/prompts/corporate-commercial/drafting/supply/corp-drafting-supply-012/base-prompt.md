---
prompt_id: corp-drafting-supply-012
title: Manufacturing Supply Agreement
practice_area: corporate-commercial
task_type: drafting
jurisdiction: england-wales
complexity: intermediate
time_estimate: 60
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [supply, manufacturing, commercial, b2b]
---

## Purpose
Draft a manufacturing supply agreement for UK buyer procuring goods from manufacturer with quality, delivery, and pricing protections.

## Jurisdiction
England & Wales

## Professional Context
Used for establishing long-term supply relationships for manufactured goods, particularly where buyer requires security of supply and quality standards.

## Base Prompt
Draft a manufacturing supply agreement where \{\{manufacturer\}\} supplies \{\{products\}\} to \{\{buyer\}\}:
- Term: \{\{contract_term\}\} with \{\{renewal_option\}\}
- Minimum order: \{\{min_order\}\} units/month
- Pricing: £\{\{unit_price\}\} with \{\{price_review\}\}
Include:
- Detailed product specifications
- Quality standards and inspection rights
- Delivery terms (Incoterms 2020)
- Lead times and buffer stock
- Forecasting and ordering process
- Price adjustment mechanism
- Force majeure and allocation
- Product liability and recalls
- IP and confidentiality
- Termination and wind-down

## Variables
- \{\{manufacturer\}\} – supplier company name
- \{\{buyer\}\} – purchasing company name
- \{\{products\}\} – goods description
- \{\{contract_term\}\} – initial term length
- \{\{renewal_option\}\} – renewal provisions
- \{\{min_order\}\} – minimum monthly quantity
- \{\{unit_price\}\} – price per unit
- \{\{price_review\}\} – "annual review" or "fixed term"

## Example Usage
### Input
manufacturer=Precision Parts Ltd; buyer=Assembly Co UK; products=automotive components; contract_term=3 years; renewal_option=annual renewals; min_order=5000; unit_price=25; price_review=annual CPI adjustment

### Expected Output
MANUFACTURING SUPPLY AGREEMENT dated [date] between PRECISION PARTS LTD ("Manufacturer") and ASSEMBLY CO UK ("Buyer")...

## Risk Warnings
⚠️ Consider Brexit impact on EU suppliers
⚠️ Build in supply chain disruption provisions
⚠️ Verify insurance requirements adequate

### Audience: SME Business Owner
- Secures your supply of manufactured goods
- Protects on: price, quality, delivery times
- Include flexibility for demand changes
- Plan for supplier problems with alternatives
