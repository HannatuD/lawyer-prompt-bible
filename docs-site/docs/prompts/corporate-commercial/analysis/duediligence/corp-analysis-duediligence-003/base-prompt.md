---
prompt_id: corp-analysis-duediligence-003
title: Legal Due Diligence Checklist
practice_area: corporate-commercial
task_type: analysis
jurisdiction: uk-wide
complexity: advanced
time_estimate: 120
risk_level: high
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [due-diligence, m&a, acquisition, corporate]
---

## Purpose
Generate a comprehensive legal due diligence checklist for UK company acquisitions, covering all key risk areas and regulatory requirements.

## Jurisdiction
UK-wide

## Professional Context
Used in M&A transactions to systematically review target company's legal affairs, identify risks, and inform transaction structuring and pricing.

## Base Prompt
```text
Create a legal due diligence checklist for acquiring {{target_type}} in {{industry_sector}}:
Structure by category:
1. Corporate structure and governance
2. Material contracts
3. Employment and pensions
4. Real estate
5. Intellectual property
6. Litigation and disputes
7. Regulatory compliance
8. Data protection
9. Environmental
10. Tax
For each category, list specific documents required and key risk indicators.
```

## Variables
```text
- {{target_type}} – "private limited company" or "group structure"
- {{industry_sector}} – target's primary business sector
```

## Example Usage
### Input
target_type=private limited company; industry_sector=software development

### Expected Output
LEGAL DUE DILIGENCE CHECKLIST
1. CORPORATE STRUCTURE
   Documents required:
   - Certificate of incorporation
   - Articles of association
   - Statutory registers...

## Risk Warnings
⚠️ Tailor to transaction size and risk profile
⚠️ Consider warranty and indemnity insurance
⚠️ Check for change of control provisions

### Audience: SME Business Owner
- Due diligence = detailed investigation before buying a business
- Covers everything from contracts to employee issues
- Typically takes 4-6 weeks for SME deals
- Missing issues here can cost significantly post-acquisition
