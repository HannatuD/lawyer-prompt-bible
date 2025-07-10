---
prompt_id: corp-analysis-brexit-015
title: Brexit Contract Impact Analysis
practice_area: corporate-commercial
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 50
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [brexit, eu-trade, commercial, regulatory]
---

## Purpose
Analyse commercial contracts for Brexit-related impacts and recommend amendments to address new UK-EU trade arrangements.

## Jurisdiction
UK-wide

## Professional Context
Used to review existing contracts with EU counterparties identifying areas requiring update post-Brexit transition including regulatory divergence.

## Base Prompt
Analyse {{contract_type}} between UK entity {{uk_party}} and EU entity {{eu_party}} for Brexit impacts:
Key areas to assess:
- Governing law and jurisdiction clauses
- Recognition of judgments
- Customs and Incoterms updates
- VAT and tax changes
- Regulatory compliance divergence
- Data transfer mechanisms
- Freedom of movement impacts
- Product standards and CE/UKCA marking
- Tariff and quota implications
- Force majeure coverage
Provide specific amendment recommendations and risk mitigation strategies.

## Variables
- {{contract_type}} – type of commercial agreement
- {{uk_party}} – UK contracting entity
- {{eu_party}} – EU contracting entity

## Example Usage
### Input
contract_type=distribution agreement; uk_party=UK Manufacturer Ltd; eu_party=German Distributors GmbH

### Expected Output
BREXIT IMPACT ANALYSIS
Contract: Distribution Agreement
Parties: UK Manufacturer Ltd / German Distributors GmbH

CRITICAL ISSUES IDENTIFIED:
1. VAT Treatment - HIGH IMPACT
   - Previous EU simplified procedures no longer apply...

## Risk Warnings
⚠️ Check specific sector agreements
⚠️ Monitor regulatory divergence
⚠️ Consider Northern Ireland protocol

### Audience: SME Business Owner
- Reviews how Brexit affects your EU contracts
- Key changes: customs, VAT, regulations
- May need new terms for smooth trade
- Consider local EU entity for major markets
