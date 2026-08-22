# Universal RCC Chimneys — Architecture & Project Decisions

## Purpose

This document records important decisions made during the Universal RCC
Chimneys website project.

The purpose is to preserve the reasoning behind significant decisions so
that future development does not repeatedly revisit the same questions.

A decision should be recorded when it affects:

- Architecture
- Technology
- SEO
- Information architecture
- Domain strategy
- Hosting
- Security
- Data handling
- Business content
- Project scope

Minor implementation choices do not require entries here.

---

# Decision 001 — Establish a Documentation-First Workflow

## Status

ACCEPTED

## Decision

The project will establish its business information, requirements,
research strategy, SEO strategy, and agent operating rules before major
website development begins.

## Reason

The business owner is currently unavailable for approximately 15–20
days.

Several important business facts therefore remain unverified.

Starting development immediately would create a significant risk of
building website content and architecture around assumptions.

## Consequence

The initial project phase focuses on:

1. Documentation
2. Business verification
3. Business and market research
4. SEO research
5. Information architecture
6. Technology architecture
7. UX/design
8. Development

---

# Decision 002 — Separate Verified Facts From Historical Information

## Status

ACCEPTED

## Decision

Business information will be explicitly classified as:

- VERIFIED
- HISTORICAL
- PENDING
- DO NOT PUBLISH

## Reason

The existing company catalogue contains useful business information,
but not all catalogue information has been confirmed as current.

The website must not silently convert historical information into
current claims.

## Consequence

`docs/business/verification-status.md` is treated as a critical
reference for public-facing business content.

---

# Decision 003 — Do Not Assume a Backend Is Required

## Status

ACCEPTED

## Decision

The website will not automatically include a backend, database,
authentication, JWT, or API.

The final architecture will be selected after requirements and research
are complete.

## Reason

The initial website is expected to be a content-driven B2B company
website.

A backend is justified only if a genuine requirement requires
server-side processing or persistent application data.

## Consequence

The initial architecture should favor simplicity and low operational
complexity.

Potential backend requirements such as persistent enquiry management,
CRM integration, customer accounts, or administrative workflows may be
evaluated later.

---

# Decision 004 — No Authentication Unless Required

## Status

ACCEPTED

## Decision

The initial website will not include user authentication unless a
specific protected-user workflow is identified.

## Reason

A public company website does not inherently require:

- User accounts
- Login
- Registration
- JWT
- Password management

Adding authentication without a requirement increases complexity and
security responsibilities without providing business value.

---

# Decision 005 — SEO Is a Primary Project Requirement

## Status

ACCEPTED

## Decision

Organic search visibility is a major objective of the website.

The website will be designed with SEO considerations from the
beginning rather than attempting to retrofit SEO after development.

## Reason

The business wants prominent Google visibility for relevant RCC
chimney and related industrial-service searches.

## Consequence

SEO research will influence:

- Information architecture
- Page structure
- Content strategy
- Internal linking
- Technical implementation
- Metadata
- Performance
- Search-intent targeting

---

# Decision 006 — No Guaranteed Google Ranking Claims

## Status

ACCEPTED

## Decision

The project will pursue strong organic search performance but will not
treat a #1 Google ranking as a guaranteed technical outcome.

## Reason

Search rankings depend on many external factors that cannot be
controlled by the website developer.

## Consequence

SEO success will be evaluated using measurable indicators including:

- Search visibility
- Relevant keyword rankings
- Organic impressions
- Organic clicks
- Qualified enquiries
- Search Console data
- Conversion performance

---

# Decision 007 — `rccchimney.com` Is Not the Company Domain

## Status

ACCEPTED

## Decision

`rccchimney.com` is not the company's domain.

It was provided only as an example of the desired type of search
visibility.

## Reason

The domain is owned by another group and has not been purchased by the
business.

## Consequence

The final company domain must be researched and selected separately.

No implementation or branding decision should assume that
`rccchimney.com` is available.

---

# Decision 008 — Domain Purchase Requires Explicit Approval

## Status

ACCEPTED

## Decision

Domain research may be performed autonomously, but purchasing or
transferring a domain requires explicit user approval.

## Reason

Domain registration involves money, ownership, and long-term business
consequences.

---

# Decision 009 — India Is the Primary Geographic Market

## Status

ACCEPTED

## Decision

The website will target customers throughout India.

## Reason

The business has stated that it serves customers across India.

## Consequence

The SEO strategy should focus primarily on nationwide relevance while
also considering legitimate local opportunities around the company's
actual offices and service areas.

---

# Decision 010 — Avoid Artificial Location Pages

## Status

ACCEPTED

## Decision

The project will not create large numbers of city/location pages
solely to capture geographic keywords.

## Reason

Such pages can create low-value or doorway-style content and may not
represent genuine business operations.

## Consequence

Location pages must correspond to legitimate business/service
relationships and provide useful unique information.

---

# Decision 011 — Real Project Evidence Is Preferred

## Status

ACCEPTED

## Decision

The website should prioritize genuine company project photographs,
project information, and verified client references.

## Reason

The target audience is B2B/industrial and credibility is important.

## Consequence

Stock imagery must not be presented as company project work.

Client names and photographs require appropriate permission before
publication.

---

# Decision 012 — Business Claims Require Verification

## Status

ACCEPTED

## Decision

Public-facing business claims must be supported by verified
information.

## Reason

The website represents a real company and inaccurate claims can damage
credibility and potentially create legal/commercial problems.

## Consequence

Codex must follow:

`docs/business/verification-status.md`

before publishing business facts.

---

# Decision 013 — Simple Architecture Is Preferred

## Status

ACCEPTED

## Decision

The project will prefer the simplest architecture capable of meeting
the business requirements.

## Reason

Complexity has an operational cost.

The website does not benefit from a database, authentication system,
or complex backend unless actual requirements justify them.

## Consequence

Technology selection must be evidence-driven rather than based on
technology popularity.

---

# Decision 014 — Research Before Final Technology Selection

## Status

ACCEPTED

## Decision

The final frontend framework, rendering strategy, hosting platform,
form architecture, and other major technical choices will be
determined after appropriate research.

## Reason

Selecting a technology before understanding the complete requirements
can unnecessarily constrain the project.

---

# Decision 015 — Consequential External Actions Require Approval

## Status

ACCEPTED

## Decision

Codex may research and prepare external actions, but actions involving
money, ownership, production infrastructure, or irreversible changes
require explicit user approval.

Examples:

- Domain purchase
- Domain transfer
- DNS changes
- Paid services
- Production deployment
- Destructive infrastructure changes

## Reason

These actions have consequences outside the development environment.

---

# Decision 016 — Git Is the Project's Version-Control System

## Status

ACCEPTED

## Decision

GitHub is the project's source-control platform.

Repository:

`universal-rcc-chimneys`

The repository is currently connected to the local project and the
initial documentation structure has been committed and pushed.

## Consequence

Development work should be version-controlled through Git.

Meaningful changes should use focused commits.

---

# Decision 017 — Documentation Is Persistent Project Context

## Status

ACCEPTED

## Decision

Important project knowledge must be stored in repository documentation
rather than relying solely on conversation history.

## Reason

AI-agent context is not a suitable permanent source of truth.

## Consequence

Important information belongs in:

- `PROJECT.md`
- `AGENTS.md`
- `TASKS.md`
- `DECISIONS.md`
- `docs/business/`
- `docs/research/`
- `docs/seo/`

---

# Decision 018 — Owner Verification Will Be Performed Later

## Status

ACCEPTED

## Decision

The project will continue with research and preparation while the
business owner is unavailable.

Current unknowns will remain explicitly marked as pending.

## Reason

The business owner is currently in Nepal for a project and is
expected to become available after approximately 15–20 days.

## Consequence

The project can progress on:

- Technical research
- SEO research
- Competitor research
- Domain research
- Architecture evaluation
- UX planning
- Development preparation

But unverified business facts must not be presented as current public
content.

---

# Decision 019 — Website Is a B2B Lead-Generation Platform

## Status

ACCEPTED

## Decision

The website will be designed primarily as a B2B industrial
lead-generation platform rather than an e-commerce application or
general-purpose web application.

## Reason

The intended business outcome is to attract potential industrial
customers and generate enquiries/quotation requests.

## Consequence

UX and information architecture should prioritize:

- Services
- Projects
- Industries
- Trust
- Technical credibility
- Contact
- Enquiry/quotation conversion

---

# Decision 020 — Current Phase Is Documentation and Research

## Status

ACCEPTED

## Decision

The project is currently in the foundation phase.

No major production website implementation should begin until the
initial research and architecture decisions have been established.

## Current Workflow

Foundation
→ Business / Market Research
→ SEO Research
→ Information Architecture
→ Technology Architecture
→ UX / Design
→ Development
→ Testing
→ Deployment
→ SEO Monitoring / Iteration

---

# Decision 021 — Use a Traceable Research Evidence Model

## Status

ACCEPTED

## Decision

Research findings will be recorded as compact, source-linked evidence records
that distinguish facts, observations, inferences, and recommendations. The
research system will be expanded incrementally: topic directories are created
only when their first evidence-backed artifact is ready.

## Context

Phase 2 requires SERP, competitor, keyword, domain, technical, and buyer
research across several future sessions while material business facts remain
pending. Unstructured notes would make time-sensitive evidence difficult to
audit and encourage repeated research or accidental conversion of research
inferences into business claims.

## Alternatives Considered

1. Keep all research in a single README.
2. Create a full directory tree and empty templates immediately.
3. Use a methodology, evidence standard, and owner questionnaire now; create
   focused topic artifacts only as evidence is collected.

## Reason

The third option preserves traceability and context efficiency without creating
documentation theatre. It also makes date, source, scope, confidence, and
business-verification boundaries explicit for volatile SERP and domain work.

## Consequences

`docs/research/methodology.md` is the shared method. SERP and competitor
observations require direct URLs and dates; business facts continue to be
governed by `docs/business/verification-status.md`. This decision does not
select a website architecture, domain, technology, or service scope.

---

# Decision Log Maintenance

When adding a new significant decision:

1. Assign the next sequential decision number.
2. State the status.
3. State the decision.
4. Explain the reason.
5. Explain consequences.
6. Record relevant alternatives when useful.
7. Update the relevant project documentation.

Do not delete previous decisions merely because a later decision
supersedes them.

Instead, mark the old decision as:

SUPERSEDED

and reference the newer decision.
