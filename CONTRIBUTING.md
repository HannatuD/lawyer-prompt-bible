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
3 Prompt body structure
# [Prompt Title]

## Purpose
Why a UK lawyer would use this prompt.

## Base Prompt
[Paste the actual prompt text with variables such as {{client_name}}]

## Variables
- {{client_name}} – full legal name
- {{effective_date}} – DD Month YYYY

## Example usage
Input and expected model output.

## Risk warnings
⚠️  Hallucination review required for all statutory references.
4 How to submit
Fork the repo and create a branch
git checkout -b add-[practice]-[prompt-name]

Add your prompt file under the correct folder.

Run the validator:
python tools/validation/prompt-validator.py path/to/file.md

Commit, push, and open a Pull Request.

A qualified reviewer will approve or request changes.

5 Review criteria
 Legal accuracy for the stated jurisdiction

 Follows taxonomy and file-naming rules

 Front-matter complete and valid

 Clear, jargon-controlled language for each audience variant

 No confidential data


