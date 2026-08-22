# Research Methodology and Reconnaissance

## Status

Phase 2 research-system setup completed on 2026-08-22. This is a
methodology, not a statement of current business capability, market share,
or search ranking.

## Purpose and Decision Gates

Research must reduce a specific decision uncertainty before website
architecture is set. The evidence collected in this phase feeds these gates:

1. **Business truth:** which services, proof points, locations, and contact
   routes may be represented publicly?
2. **Demand and intent:** which verified offerings have qualified, achievable
   search and lead potential?
3. **Information architecture:** which user needs justify a unique page, and
   which terms belong on the same page?
4. **Conversion:** what information and contact path helps a serious B2B
   buyer start a useful enquiry?
5. **Implementation:** what technical, accessibility, performance, security,
   and measurement requirements follow from the approved architecture?

No keyword, competitor claim, or historical catalogue item passes the first
gate by itself. Public service content requires the status required by
`docs/business/verification-status.md`.

## Research Priority and Sequence

| Priority | Research area | Question to answer | Evidence to collect | Deliverable / decision impact |
| --- | --- | --- | --- | --- |
| 1 | Owner-question preparation | What information cannot be independently established? | Exact questions and requested documents | `owner-verification-questionnaire.md`; keeps later research from creating claims |
| 2 | SERP reconnaissance | What page types and intents currently satisfy the initial themes? | Dated result snapshots, URLs, features, page types, query locale/device | SERP records; determines candidate page types and competitor sample |
| 3 | Competitor and market sample | Who competes for the same commercial intent and how do they explain and convert it? | Dated site observations and comparison matrix | Competitor records; identifies patterns and gaps, never copies content |
| 4 | Keyword and intent clustering | Which terms describe the same user need, and which require distinct answers? | Query variants, SERP overlap, modifiers, intent labels | Keyword clusters and provisional page map |
| 5 | Buyer and conversion research | What does a qualified buyer need before enquiry, and what information is needed to quote? | Owner input, tender/procurement patterns where applicable, competitor flows | Conversion requirements; must be validated with owner workflow |
| 6 | Content and trust evidence | What credible evidence can support each proposed commercial page? | Approved project facts, permissions, technical sources, credentials | Content-evidence inventory and publishability gate |
| 7 | Local versus national model | Where is local presence legitimate and where is national service intent stronger? | Verified offices, SERP local features, actual delivery relationship | Location policy and page decision |
| 8 | Domain shortlist | Which names are credible, scalable, and low risk? | Candidate scoring, dated availability check, trademark/confusion screening | Shortlist for explicit owner approval; no registration |
| 9 | Technical implementation research | What requirements must the eventual stack meet? | Official search, accessibility, web-performance, and security guidance | Non-framework-specific acceptance criteria |

Priorities 2–4 can proceed while the owner is unavailable, but their
recommendations remain conditional on service confirmation. Do not begin
final information architecture until both the business-truth and intent gates
have sufficient evidence.

## Evidence Standard

Use one concise record per material finding. Keep raw exports/screenshots only
when they are necessary to reproduce a volatile observation.

| Field | Required record |
| --- | --- |
| ID and question | Stable ID (for example, `SERP-001`) and the decision question |
| Finding | Concise, falsifiable statement; no unsupported generalisation |
| Classification | **Fact**, **observation**, **inference**, or **recommendation** |
| Source | Publisher/site and page title where available |
| URL | Direct source URL; not merely a search-result URL |
| Observed/published date | Observation date is mandatory for volatile evidence |
| Evidence type | Official document, first-party page, SERP snapshot, registry, interview, or other |
| Scope | Query, locale, device, competitor, or other boundary needed to interpret it |
| Confidence | High, medium, or low, with the reason if not high |
| Decision link | Decision, task, or proposed page affected |
| Verification/publication status | For business facts, link to the verification register and retain its label |

Source hierarchy is: official/primary source; government or regulator;
directly observed SERP or first-party website; reputable specialist source;
secondary commentary. A competitor's website is evidence of its positioning
and website implementation, not evidence that its claims are true.

## Research Workstreams

### Industry and buyer research

Identify the buyer roles, plant events, procurement constraints, safety or
technical documents, terminology, and qualification questions associated with
the verified service scope. Separate independently observable industry terms
from claims about this business. Prefer standards bodies, regulators, tender
documents, and credible technical sources where a technical statement may
later be used in content.

### Competitor research

Build a purposive sample rather than a random company list. Include at least:

- **Direct competitors:** businesses offering a verified overlapping service.
- **SERP competitors:** domains repeatedly visible for target commercial
  queries, including directories and marketplaces where they take clicks.
- **Regional competitors:** businesses serving Gujarat, Andhra Pradesh, or a
  legitimately overlapping operating region.
- **National competitors:** India-wide industrial chimney/refractory firms.
- **Industrial-SEO comparators:** strong B2B industrial sites with useful
  content and conversion design, even if service names differ.
- **Intent competitors:** EPC, boiler, refractory, maintenance, or fabrication
  providers that solve the same buyer problem.

For every sampled domain, record homepage and navigation structure; service,
project, industry, and location pages; visible proof and trust signals;
contact and quote flow; title/meta/H1 patterns; internal links; content depth;
structured data visible in source where practical; mobile usability; page
weight/performance observations; and conversion mechanisms. Record what was
actually observed, its URL, and date. Do not treat an observed page as a
ranking or a claim as verified fact.

### SERP and keyword methodology

Start with the existing themes only as seeds, then collect query variants from
search suggestions, related searches, Search Console after launch, reputable
keyword tooling where available, customer language, competitor terminology,
and industry/tender language. For each candidate query, record the date,
search engine, country/language, device, query, visible features, top page
types/domains, local-pack or marketplace presence, and interpretation of
intent.

Classify queries by primary intent: informational, problem/diagnostic,
commercial investigation, transactional/lead, navigational, or mixed. Add
modifiers such as service, material/type, industry, problem, specification,
location, supplier/contractor, repair, quotation, and tender. Assess clusters
using business eligibility, intent, SERP fit, conversion value, content-evidence
availability, and likely effort—not volume alone.

A dedicated page is justified only when the cluster has a distinct user task,
meaningfully different SERP/page type, verified commercial relevance, enough
unique evidence to satisfy the task, and a clear internal-linking role. Map one
primary intent cluster to one canonical page; use secondary terms as natural
supporting language. Merge variants with the same intent and SERP overlap.

Location modifiers require an additional test: an actual, verified service
relationship or office and locally useful, unique content. Never produce thin
city pages, near-duplicates, or doorway pages.

“Rank #1 for chimneys” is not a usable strategy: the term is broad and may
have multiple meanings, uncertain buyer intent, different SERP formats, and
weak correspondence to a verified service or qualified lead. Rankings also
vary by location, device, time, and competition. The strategy should instead
prioritise verified offerings and the queries where useful evidence, intent
fit, technical quality, trust, and conversion paths can produce qualified
enquiries. No ranking position is guaranteed.

### Content, trust, and conversion research

For each prospective page, create a content-evidence inventory before writing:
the user need, approved business capability, permissible technical evidence,
projects/photos with rights, qualifications, source material, owner, CTA, and
missing proof. Real project evidence, clear identity/contact details when
verified, transparent scope, and helpful technical explanation are more
valuable than unsupported E-E-A-T signals.

Research the lead journey as a B2B qualification process: preferred first
contact channel, responder and response expectation, minimum quote inputs,
document/photo need, consent/privacy expectations, serviceable geography, and
handoff. These decisions require owner confirmation; competitor forms are
examples, not requirements.

### Technical quality research

Translate authoritative guidance into technology-neutral acceptance criteria:
indexable semantic pages, accurate metadata/canonicals, crawl controls,
sitemaps, stable URLs and redirects, accessible form and keyboard flows,
responsive performance, restrained third-party scripts, input validation and
spam controls, and only supported structured data. Google’s spam policies and
helpful-content guidance specifically inform the prohibition on scaled,
low-value location content; structured data must match visible, supported page
content. [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies), [helpful, reliable, people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), and [structured-data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) were accessed on 2026-08-22.

### Domain research methodology

Generate brand-led and restrained descriptive candidates only after the public
business name is confirmed. Score each candidate for brand fit, memorability,
unambiguous spelling, pronunciation, B2B credibility, India-wide suitability,
room to expand beyond a single service, and practical SEO relevance. Treat an
exact-match phrase as a trade-off, not an inherent ranking advantage.

For finalists, record exact spelling/TLD, checked registrar or registry URL,
availability result, observation date/time, renewal and management
considerations, search results for confusing use, and trademark screening
sources/results. Prefer a credible, manageable extension appropriate to the
market; compare `.com` and `.in` rather than assuming either wins. Availability
is volatile and must be rechecked immediately before any owner-approved
purchase. Research is not registration, DNS work, or legal clearance.

## Initial Reconnaissance: What Is Independently Known

- The repository establishes a documentation-first, India-wide B2B objective,
  but the current service list is **HISTORICAL** and cannot be turned into
  current landing-page claims without owner confirmation.
- Gujarat and Vuyyuru offices and India-wide coverage are **VERIFIED**, while
  exact addresses and public contact routes are pending. This permits research
  into national/local SERP intent but not local-profile or location-page
  publication decisions.
- The live SERP research endpoint available to this session returned an
  authorization error, and direct search requests did not yield inspectable
  result listings. Google autocomplete was independently accessible and is
  recorded as query-discovery evidence in
  `serp/google-autocomplete-2026-08-22.md`; it is not treated as ranking or
  competitor evidence. No competitor, ranking, or search-feature claims are
  recorded from this attempt. A future session must collect reproducible,
  dated SERP snapshots before drawing conclusions.

## Owner-Dependent Boundary

See `owner-verification-questionnaire.md` for the exact questions and evidence
request. Independent research must not attempt to infer legal identity,
addresses, contacts, current scope, design/turnkey capability, projects,
permissions, certifications, the KGN relationship, or lead workflow from old
catalogue material or third-party listings.

## Research Output Rules

Create a topic file only after it contains a decision-relevant finding. Each
topic file starts with a short conclusion/next action and links to detailed
records. Keep a compact source list in the same file unless a source is reused
across multiple workstreams; then add it to `sources/README.md`. Archive no
large raw dumps in Git without a reproduction reason.
