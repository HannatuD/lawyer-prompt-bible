# Contributing to the UK Legal Prompt Bible 📚⚖️

Thank you for helping us build a trusted library of AI prompts for UK lawyers.  
All contributions are peer-reviewed for legal accuracy and formatting consistency.

---

## 1  Submission checklist

- You are **UK-qualified** (or supervised by someone who is).
- Your prompt file begins with the **YAML front-matter** shown below.
- No client-identifiable or confidential data is included.
- You have tested the prompt in at least one GPT-4-class model.

## 2  YAML front-matter template

```yaml
---
prompt_id: [practice]-[task]-[001]
title: Brief descriptive title
practice_area: corporate-commercial | litigation | ...
task_type: drafting | reviewing | summarising | analysis
jurisdiction: england-wales | scotland | northern-ireland | uk-wide
complexity: basic | intermediate | advanced
time_estimate: 20            # in minutes
risk_level: low | medium | high
last_updated: YYYY-MM-DD
author: GitHubUsername
reviewer: ReviewerUsername    # must be UK-qualified
tags: [nda, confidentiality]
---
