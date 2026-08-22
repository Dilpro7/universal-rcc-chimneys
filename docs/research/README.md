# Universal RCC Chimneys — Research

## Purpose

This directory contains research performed for the Universal RCC
Chimneys website project.

Research should support actual project decisions rather than exist as
an unstructured collection of links and notes.

Research may cover:

- Market
- Competitors
- Customers
- Services
- Search behavior
- SEO
- Domains
- Technology
- Hosting
- UX
- Accessibility
- Performance
- Security
- Industry practices

---

# Research Principles

## 1. Evidence First

Prefer reliable evidence over assumptions.

Prioritize sources approximately in this order:

1. Official sources
2. Primary documentation
3. Government or regulatory sources
4. Search-engine results
5. Established industry sources
6. Reputable specialist publications
7. Community discussions
8. General web content

Source quality should be considered when drawing conclusions.

---

# 2. Separate Facts From Interpretation

Every research result should distinguish between:

### Fact

Something directly supported by a source.

### Observation

Something observed during research.

### Inference

A conclusion derived from multiple observations.

### Recommendation

A proposed action based on the evidence.

Do not present inference as fact.

---

# 3. Research Freshness

Some information changes quickly.

Examples:

- Search rankings
- Domain availability
- Hosting prices
- Technology versions
- Competitor websites
- Search-result features

When information can change, record the research date.

Do not assume that a research result remains permanently current.

---

# 4. Competitor Research

Competitor research should examine relevant businesses rather than
random companies.

Useful areas include:

- Business positioning
- Services
- Industries served
- Geographic coverage
- Website structure
- Service pages
- Project portfolio
- Technical information
- Trust signals
- Contact mechanisms
- Enquiry mechanisms
- SEO structure
- Content quality
- Performance
- Mobile UX

Do not copy competitor wording, design, images, or claims.

The purpose is to understand the market and identify opportunities.

---

# 5. Customer Research

Where possible, research should identify:

- Who searches for the services
- What terminology customers use
- What problems they are trying to solve
- What information they need before contacting a company
- What trust signals matter
- What objections may prevent an enquiry
- What information is required to request a quotation

The business owner's actual sales experience should take precedence over
generic assumptions about customers.

---

# 6. Market Research

Market research should investigate:

- Service categories
- Industry terminology
- Competitor positioning
- Geographic competition
- Customer expectations
- Common project types
- Common technical terminology
- Common website structures
- Relevant regulations or standards where applicable

Research should remain relevant to the actual business.

---

# 7. Technology Research

Technology research should answer a specific project question.

Examples:

- Which framework best fits the website?
- Static generation vs server rendering?
- Which hosting platform is appropriate?
- How should enquiry forms be handled?
- Is a backend required?
- Is a database required?
- Which analytics approach is appropriate?

Do not research technologies merely because they are popular.

Every major technology decision should have a requirement-based
justification.

---

# 8. Domain Research

Domain research should consider:

- Availability
- Brandability
- Memorability
- Spelling
- Pronunciation
- TLD
- Long-term brand value
- Search relevance
- Trademark/confusion risk

Do not assume an exact-match keyword domain is automatically superior
for SEO.

Domain availability should be checked at the time of decision because
availability can change.

---

# 9. Research Output

Research should produce useful project artifacts.

Depending on the research, outputs may include:

- Competitor analysis
- Keyword research
- SERP analysis
- Domain shortlist
- Technology comparison
- Hosting comparison
- Customer research
- Market analysis
- Content opportunities
- UX findings

Large research results should be stored in appropriately named files
rather than making this README unnecessarily large.

---

# 10. Evidence Record Standard

Every material finding must be concise and traceable. Record:

| Field | Requirement |
| --- | --- |
| Finding | A short, decision-relevant claim |
| Classification | Fact, observation, inference, or recommendation |
| Source and URL | Direct page/source URL, not a fabricated citation |
| Date | Observation date for volatile evidence; publication date where known |
| Evidence type | For example official source, SERP snapshot, first-party site, or interview |
| Scope | Query/locale/device, company, or other relevant boundary |
| Confidence | High, medium, or low, with uncertainty noted |
| Decision impact | Task, decision, or page affected |
| Business status | Required for business facts: link to the verification register |

`methodology.md` defines the common research sequence, workstream methods,
and source hierarchy. Do not convert research notes into business claims.

# 11. Recommended Research Format

Use this structure when creating a research document:

## Research Question

What are we trying to determine?

## Date

When was the research performed?

## Scope

What was included and excluded?

## Sources

List important sources.

## Findings

Record the relevant observations.

## Analysis

Explain what the findings mean.

## Recommendations

State the recommended action.

## Confidence

Use:

- High
- Medium
- Low

Explain uncertainty when necessary.

## Decision Impact

State which project decision the research affects.

---

# 12. Research Efficiency

Do not repeatedly investigate questions that have already been answered
and documented.

Before starting research:

1. Search the repository.
2. Check `DECISIONS.md`.
3. Check existing research.
4. Determine what remains unknown.
5. Research only the remaining uncertainty.

Research should reduce uncertainty.

Research that does not affect a project decision should generally be
deprioritized.

---

# 13. Research Integrity

Never:

- Fabricate sources
- Fabricate statistics
- Fabricate search volume
- Fabricate competitor information
- Fabricate customer behavior
- Fabricate market size
- Present assumptions as research findings

If reliable information cannot be obtained, explicitly state that.

---

# 14. Relationship to Project Decisions

Research does not automatically become a project decision.

The workflow is:

Research
→ Findings
→ Analysis
→ Recommendation
→ Decision

Significant decisions should be recorded separately in:

`DECISIONS.md`

---

# 15. Current Research Status

Status:

RECONNAISSANCE / SYSTEM SETUP COMPLETE

Current priority:

Collect dated SERP snapshots and build a purposive competitor sample before
keyword-to-page mapping or final information architecture.

The business owner is currently unavailable, so owner-dependent
information must remain explicitly marked as pending.

---

# 16. Active Research Documents and Incremental Structure

Current documents:

- `methodology.md` — research decision gates, evidence standard, and methods
- `owner-verification-questionnaire.md` — owner-only verification questions
- `serp/google-autocomplete-2026-08-22.md` — dated query-discovery evidence
- `serp/google-india-results-access-log-2026-08-22.md` — reproducible results-access limitation
- `keywords/initial-intent-clusters-2026-08-22.md` — provisional clusters
- `technical/google-search-guidance-2026-08-22.md` — primary Google guidance
- `domains/domain-research-status-2026-08-22.md` — domain-research boundary
- `competitors/research-status-2026-08-22.md` — documented SERP-access limit
- `../business/verification-status.md` — authoritative business-verification
  and website-readiness register

Create these directories only when their first evidence-backed record is ready:

```text
docs/research/
├── competitors/  # one dated analysis per sampled domain or comparison
├── serp/         # reproducible query snapshots and observations
├── keywords/     # clustered keyword evidence and page-mapping work
├── domains/      # dated candidate scoring and availability checks
├── technical/    # technology-neutral requirements research
└── sources/      # only sources reused across multiple research files
```

Keep industry, buyer, conversion, and market findings in a single focused topic
file until volume justifies a directory. Each research file begins with its
question, date, scope, short conclusion, next action, and evidence records.
Create files only when they provide meaningful persistent value; do not create
empty placeholders or retain undifferentiated research dumps.

Do not create unnecessary documentation files.
