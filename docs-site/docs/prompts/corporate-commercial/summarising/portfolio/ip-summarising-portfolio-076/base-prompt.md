---
prompt_id: ip-summarising-portfolio-076
title: IP Portfolio Audit Summary
practice_area: intellectual-property
task_type: summarising
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 60
risk_level: low
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, portfolio, audit, strategy]
---

## Purpose
Summarise intellectual property portfolio identifying gaps, renewal needs, and commercialisation opportunities.

## Jurisdiction
UK-wide

## Professional Context
Strategic IP review for business planning, investment rounds, or exit preparation.

## Base Prompt
```text
Audit IP portfolio for {{company_name}}:
Catalogue:
1. Patents (granted/pending)
2. Trademarks (registered/used)
3. Designs (registered/unregistered)
4. Copyright works
5. Trade secrets
6. Domain names
Assess each for:
- Protection status
- Geographic coverage
- Renewal dates
- Ownership clarity
- Encumbrances
- Commercial use
- Enforcement history
- Valuation factors
Identify strategic recommendations.
```

## Variables
```text
- {{company_name}} – portfolio owner
```

## Example Usage
### Input
company_name=Tech Innovations Ltd

### Expected Output
IP PORTFOLIO AUDIT - TECH INNOVATIONS LTD

PATENTS:
- 3 granted UK patents (software methods)
- 1 pending EPO application
- Gap: No US protection

TRADEMARKS:
- Core brand registered UK/EU
- Product names unprotected
- Risk: Competitor filed similar mark...

STRATEGIC PRIORITIES:
1. File US patents before bar date
2. Oppose conflicting trademark
3. Document trade secrets properly...

VALUE ASSESSMENT:
- Core patents: £500k-1M
- Brand value: £200k...

## Risk Warnings
⚠️ Renewal deadlines critical
⚠️ Chain of title issues common
⚠️ Unregistered rights need proof

### Audience: SME Business Owner
- Complete review of IP assets
- Identifies protection gaps
- Shows renewal deadlines
- Values IP for investment/sale
