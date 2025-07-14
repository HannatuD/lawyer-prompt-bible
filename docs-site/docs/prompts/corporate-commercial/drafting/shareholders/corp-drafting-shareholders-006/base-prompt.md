---
prompt_id: corp-drafting-shareholders-006
title: Shareholders Agreement (Scotland)
practice_area: corporate-commercial
task_type: drafting
jurisdiction: scotland
complexity: advanced
time_estimate: 90
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [shareholders, investment, corporate, scotland]
---

## Purpose
Draft a shareholders agreement under Scots law for a private limited company with multiple investor classes and founder protections.

## Jurisdiction
Scotland

## Professional Context
Used when structuring investment rounds or formalising shareholder relationships in Scottish companies, particularly for growth businesses with external investment.

## Base Prompt
Draft a shareholders agreement under Scots law for {{company_name}} between:
- Founders: {{founders}} ({{founder_shares}}% ordinary shares)
- Investors: {{investors}} ({{investor_shares}}% preference shares)
Include:
- Board composition ({{board_structure}})
- Reserved matters requiring investor consent
- Pre-emption rights on transfer and allotment
- Tag-along and drag-along provisions
- Good and bad leaver provisions
- Dividend policy
- Exit and liquidity provisions
- Scottish law and jurisdiction clause

## Variables
- {{company_name}} – Scottish company name and SC number
- {{founders}} – names of founding shareholders
- {{founder_shares}} – percentage held by founders
- {{investors}} – names of investor entities
- {{investor_shares}} – percentage held by investors
- {{board_structure}} – e.g. "5 directors: 2 founders, 2 investors, 1 independent"

## Example Usage
### Input
company_name=Tech Innovations Scotland Ltd (SC123456); founders=A MacLeod, B Campbell; founder_shares=60; investors=Highland Ventures LLP; investor_shares=40; board_structure=3 directors: 2 founders, 1 investor

### Expected Output
SHAREHOLDERS AGREEMENT dated [date] among TECH INNOVATIONS SCOTLAND LTD (SC123456) and [parties]...

## Risk Warnings
⚠️ Consider Scots law differences in enforcement
⚠️ Align with articles of association
⚠️ HMRC clearances for EMI schemes

### Audience: SME Business Owner
- Legal contract between company owners setting rules
- Covers who controls decisions and how shares can be sold
- Protects minority shareholders and sets exit routes
- Essential when taking external investment
