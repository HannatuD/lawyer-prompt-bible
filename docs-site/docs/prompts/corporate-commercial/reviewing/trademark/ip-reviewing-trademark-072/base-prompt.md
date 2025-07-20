---
prompt_id: ip-reviewing-trademark-072
title: Trademark Application Review
practice_area: intellectual-property
task_type: reviewing
jurisdiction: uk-wide
complexity: intermediate
time_estimate: 40
risk_level: medium
last_updated: 2025-07-10
author: UKLegalPromptArchitect
tags: [ip, trademark, brand, registration]
---

## Purpose
Review draft trademark application identifying potential objections and strengthening distinctiveness claims.

## Jurisdiction
UK-wide

## Professional Context
Pre-filing review to maximize registration chances and avoid costly objections or oppositions.

## Base Prompt
Review trademark application for \\{\\{mark_name\\}\\}:
- Type: \\{\\{mark_type\\}\\}
- Classes: \\{\\{nice_classes\\}\\}
- Goods/services: \\{\\{specification\\}\\}
- Applicant: \\{\\{applicant_name\\}\\}
- Prior search: \\{\\{search_results\\}\\}
Assess:
1. Inherent distinctiveness
2. Descriptiveness risk
3. Similarity to prior marks
4. Specification clarity
5. Class coverage adequacy
6. Series mark potential
7. Priority claims
8. Disclaimer needs
9. Translation issues
10. Opposition risks
Recommend improvements.

## Variables
- \\{\\{mark_name\\}\\} – trademark applied for
- \\{\\{mark_type\\}\\} – word/logo/combined
- \\{\\{nice_classes\\}\\} – classification numbers
- \\{\\{specification\\}\\} – goods/services list
- \\{\\{applicant_name\\}\\} – trademark owner
- \\{\\{search_results\\}\\} – clearance search outcome

## Example Usage
### Input
mark_name=TECHGUARD; mark_type=word mark; nice_classes=9, 42; specification=computer security software, IT security services; applicant_name=Security Solutions Ltd; search_results=similar marks in class 9

### Expected Output
TRADEMARK APPLICATION REVIEW
Mark: TECHGUARD
Classes: 9, 42

DISTINCTIVENESS: Medium risk
- "TECH" + "GUARD" potentially descriptive
- Suggest evidence of use...

PRIOR MARKS CONFLICT:
- "TECHGUARDIAN" in class 9
- Likelihood of confusion...

RECOMMENDATIONS:
1. Narrow specification to reduce conflict
2. Add logo element for distinctiveness...

## Risk Warnings
⚠️ Descriptive marks often refused
⚠️ Broad specifications invite opposition
⚠️ Consider Madrid Protocol

### Audience: SME Business Owner
- Protects your brand name/logo
- Must be distinctive not descriptive
- Check for similar existing marks
- Worth protecting core brands
