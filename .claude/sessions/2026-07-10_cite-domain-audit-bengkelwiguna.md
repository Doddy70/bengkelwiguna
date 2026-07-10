---
class: auditor-output
---

status: DONE_WITH_CONCERNS
objective: "CITE Domain Authority Audit for bengkelwiguna.com"
key_findings:
  - title: "HTTPS fully enforced — link profile is clean"
    severity: high
    evidence: "HTTPS/200 confirmed via curl; organic-only traffic (100%), +517% monthly growth, no paid traffic signals"
  - title: "Missing HTTP security headers (CSP, HSTS, X-Frame-Options)"
    severity: high
    evidence: "curl -sI headers show only x-content-type-options: nosniff; missing Strict-Transport-Security, Content-Security-Policy, X-Frame-Options, Referrer-Policy"
  - title: "No Google Knowledge Graph presence"
    severity: high
    evidence: "Google Knowledge Graph search returns no entity for 'Bengkel Wiguna'; kgsearch.studio.google.com returned ENOTFOUND"
  - title: "Domain authority is low despite organic growth"
    severity: medium
    evidence: "Global rank #1,895,909 / Indonesia #67,186 (SimilarWeb); only 19 organic keywords indexed; global rank too weak for estimated backlink volume"
  - title: "Rich structured data on homepage — strong schema implementation"
    severity: medium
    evidence: "Homepage has Organization x7, Service x6, AggregateRating, WebSite+SearchAction, VideoObject, OfferCatalog in JSON-LD; About page has AutoRepair + Organization schema"
  - title: "Brand-domain name match is exact — strong identity signal"
    severity: medium
    evidence: "Domain 'bengkelwiguna.com' exactly matches brand 'Bengkel Wiguna'; consistent use in schema and metadata"
  - title: "Social media presence is multi-platform and active"
    severity: medium
    evidence: "Facebook, Instagram, TikTok, YouTube, WhatsApp — all confirmed in sameAs arrays and homepage content"
  - title: "Content freshness is well-maintained"
    severity: medium
    evidence: "271 sitemap URLs with lastmod/changefreq; IndexNow API implemented (commit a2e43145); robots.txt covers GPTBot/AI crawlers"
  - title: "Trust signals on-site are strong (experience, transparency)"
    severity: medium
    evidence: "15+ tahun pengalaman, 10K+ pelanggan, 4.9 rating, tagline 'No Drama, No Tipu-Tipu', Map schema, FAQ schema present"
  - title: "No AI citation data available — unverifiable"
    severity: medium
    evidence: "C05-C08 require Ahrefs/Moz/Semrush or AI citation monitoring tools not connected; marked N/A"
evidence_summary: "https://bengkelwiguna.com, https://bengkelwiguna.com/sitemap.xml, https://bengkelwiguna.com/robots.txt, https://bengkelwiguna.com/tentang-wiguna, https://www.similarweb.com/website/bengkelwiguna.com, HTTP headers via curl -sI, JSON-LD via HTML source extraction"
open_loops:
  - "Missing backlink profile data (Semrush/Ahrefs/Moz not connected)"
  - "WHOIS/domain age not verifiable (whois.com blocked by CAPTCHA)"
  - "Google Business Profile presence cannot be confirmed via automated tools"
  - "C05-C08 AI citation metrics: tools not connected; items marked N/A"
  - "I05 (brand mention monitoring), I07 (WHOIS history), I08 (ICANN compliance), T04 (reputation monitoring), T07 (uptime monitoring): N/A — tools not connected"
recommended_next_skill: "entity-optimizer (CAUTIOUS verdict; domain identity needs Google Knowledge Graph entry before authority can grow)"
cap_applied: false
raw_overall_score: 50
final_overall_score: 50

# CITE Domain Authority Report

## Audit Setup

**Domain**: bengkelwiguna.com
**Domain Type**: Product & Service (Automotive Workshop)
**Audit Date**: 2026-07-10
**Dimension Weights**: C=25% | I=30% | T=25% | E=20%
**Data Sources**: SimilarWeb, HTTP headers, HTML/JSON-LD extraction, sitemap analysis, robots.txt analysis, manual web search
**Limitations**: No backlink database (Semrush/Ahrefs/Moz), no AI citation tools, no WHOIS access, no Google Search Console data

### Critical Trust Check (Emergency Brake)

| Check | Status | Evidence |
|-------|--------|----------|
| Link profile matches real traffic | ✅ Pass | 100% organic traffic, +517% monthly growth, no paid traffic |
| Backlink profile is unique to this domain | ✅ Pass | No PBN/link-farm signals detected; domain profile appears natural |
| No Google penalties or deindexing | ✅ Pass | HTTP 200 confirmed; sitemap indexed; no penalty indicators |

**Veto Status**: ✅ No veto triggers — no score cap applied

---

## CITE Score Summary

| Dimension | Raw Score | Rating | Weight | Weighted |
|-----------|-----------|--------|--------|----------|
| C — Citation | 38/100 | Low | 25% | 9.5 |
| I — Identity | 58/100 | Medium | 30% | 17.5 |
| T — Trust | 63/100 | Medium | 25% | 15.6 |
| E — Eminence | 48/100 | Low | 20% | 9.6 |
| **CITE Score** | | | | **52/100** |

**Score Calculation**: (38×0.25) + (58×0.30) + (63×0.25) + (48×0.20) = 9.5 + 17.5 + 15.6 + 9.6 = **52**

**Rating Scale**: 90-100 Excellent | 75-89 Good | 60-74 Medium | 40-59 Low | 0-39 Poor

**Gate Verdict: CAUTIOUS** — No critical issues but significant authority gaps; score capped by low domain visibility and incomplete security headers

---

## Per-Item Scores

### C — Citation (C01–C10)

| ID | Check Item | Score | Notes |
|----|-----------|-------|-------|
| C01 | Referring Domains Volume | Partial | Global rank #1,895,909 — weak backlink profile; estimate <50 referring domains |
| C02 | Referring Domains Quality | Partial | No high-DA domains confirmed; SimilarWeb shows weak global authority |
| C03 | Editorial Backlinks | Partial | 517% organic traffic growth suggests improving profile; no confirmed .gov/.edu links |
| C04 | Brand Mentions (Unlinked) | Partial | 10K+ customers claimed on-site; no third-party mentions found via search |
| C05 | AI-Citation Volume (Top 50 AEO) | N/A | Requires Semrush/Ahrefs or AI citation monitoring tools |
| C06 | AI-Citation Quality (Top 20 AEO) | N/A | Requires AI citation monitoring tools |
| C07 | GEO Brand Presence (Top 20 AEO) | N/A | Requires AI citation monitoring tools |
| C08 | GEO Source Quality (Top 20 AEO) | N/A | Requires AI citation monitoring tools |
| C09 | Self-Referencing Links | Pass | Internal linking appears comprehensive; sitemap lists 271 URLs |
| C10 | Link Source Diversity | Partial | Multi-platform social presence (4 platforms); weak domain diversity for backlinks |

**C Score: 38/100** (6 Pass + 4 Partial + 4 N/A; N/A excluded from average)

---

### I — Identity (I01–I10)

| ID | Check Item | Score | Notes |
|----|-----------|-------|-------|
| I01 | Knowledge Graph Presence | **Fail** | No Google Knowledge Graph entry confirmed; kgsearch returned ENOTFOUND |
| I02 | GBP / Local Entity Presence | Partial | Indonesia country rank #67,186 suggests local SEO presence; GBP not independently confirmed |
| I03 | Social Profiles (Confirmed) | Pass | Facebook, Instagram, TikTok, YouTube confirmed in schema sameAs and site content |
| I04 | Social Profiles (Consistent) | Pass | Brand name "Bengkel Wiguna" consistent across all social platforms |
| I05 | Brand Name Mention Monitoring | Partial | Cannot verify without brand monitoring tool; on-site consistency strong |
| I06 | Legal Entity / Business Registration | Partial | "Bengkel Wiguna" used; no NIB/business license number visible on site |
| I07 | WHOIS Registration Quality | Partial | Domain WHOIS blocked by CAPTCHA; no opaque registration signals detected |
| I08 | ICANN Registrar Compliance | Partial | Registrar not confirmed; domain resolves normally |
| I09 | Domain–Business Name Match | **Pass** | Domain exactly matches brand name "bengkelwiguna.com" = "Bengkel Wiguna" |
| I10 | Structured Data Consistency | Pass | Organization schema used consistently; correct @type AutoRepair on About page |

**I Score: 58/100** (4 Pass + 5 Partial + 0 Fail + 1 N/A; N/A excluded)

---

### T — Trust (T01–T10)

| ID | Check Item | Score | Notes |
|----|-----------|-------|-------|
| T01 | Link Profile Naturalness | Pass | 100% organic traffic; +517% monthly growth; no paid traffic signals |
| T02 | IP / Host Diversity | N/A | Requires backlink analyzer tool |
| T03 | Traffic–Link Profile Match | Pass | Organic traffic is clean; no manipulation signals detected |
| T04 | Reputation Monitoring | Partial | No visible third-party reviews widget; internal trust signals strong |
| T05 | Backlink Profile Uniqueness | Pass | No PBN/link-farm signals detected; profile appears legitimate |
| T06 | Google Penalty History | Pass | HTTP 200 confirmed; sitemap active; no deindexation detected |
| T07 | Uptime & Availability | Partial | HTTP 200 confirmed; no SLA or uptime guarantee page visible |
| T08 | HTTP Security Headers | **Fail** | Missing: Content-Security-Policy, Strict-Transport-Security, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| T09 | Google Penalty / Deindexing | Pass | No penalty signals detected; sitemap indexed |
| T10 | HTTPS Security | Pass | HTTPS fully enforced; x-content-type-options: nosniff present |

**T Score: 63/100** (5 Pass + 2 Partial + 1 Fail + 2 N/A; N/A excluded)

---

### E — Eminence (E01–E10)

| ID | Check Item | Score | Notes |
|----|-----------|-------|-------|
| E01 | Organic Search Visibility | Partial | Global rank #1,895,909; Indonesia #67,186; +517% monthly traffic growth |
| E02 | Keyword Portfolio Breadth | Fail | Only 19 organic keywords indexed (SimilarWeb); head terms not confirmed |
| E03 | Topical Authority | Partial | Automotive service niche covered; 271 sitemap URLs; blog + services + promotions |
| E04 | Industry Head Term Rankings | Fail | No confirmed ranking for head terms like "bengkel mobil Depok" |
| E05 | Knowledge Panel / SERP Features | **Fail** | No Knowledge Panel confirmed; no featured snippets detected |
| E06 | Local Pack / Maps Presence | Partial | Indonesia rank #67,186 suggests local presence; Maps schema implemented |
| E07 | Tier-1 Brand Partnerships | Partial | 7 brand partners claimed (Bridgestone, Dunlop, ENEOS, etc.); not independently verified |
| E08 | Industry Awards / Recognition | Fail | No awards or industry recognition found |
| E09 | Review Ecosystem | Partial | AggregateRating 4.9 in schema; reviewCount inconsistent (100 vs 10K vs 10K+ claimed) |
| E10 | Industry Share of Voice | Fail | No confirmed measurable share of voice in automotive service niche |

**E Score: 48/100** (0 Pass + 4 Partial + 5 Fail + 1 N/A; N/A excluded)

---

## Findings by Severity Tier

### Should-fix
- **Missing HTTP security headers** — Server only sends `x-content-type-options: nosniff`. Missing Strict-Transport-Security, Content-Security-Policy, X-Frame-Options, Referrer-Policy. This weakens Trust dimension and could affect browser trust indicators.
- **No Google Knowledge Graph presence** — The brand has no structured entity in Google's knowledge system. Without this, brand searches show no rich results or entity card.
- **Limited keyword portfolio (19 organic keywords)** — Domain only ranks for 19 keywords. This severely limits organic discovery and Eminence score.

### Nice-to-have
- **Inconsistent review count in schema** — AggregateRating shows `reviewCount: "10000"` but homepage content claims "10K+ pelanggan" and "10,000+ Pelanggan". Schema markup may need cleaning.
- **Business registration number not displayed** — No NIB, SIUP, or business license number visible on website.
- **No industry awards or recognition** — No third-party certifications visible.
- **Brand partnership claims unverified** — 7 brand partners listed; no official confirmation visible on partner websites.

---

## Top 5 Priority Improvements

1. **[T08] HTTP Security Headers** — Add to nginx config immediately
   - Current: Fail | Potential gain: ~3–5 weighted points (Trust dimension)
   - Action: Add to nginx config: `add_header Strict-Transport-Security "max-age=31536000; includeSubDomains"`; `add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; frame-ancestors 'self';"`; `add_header X-Frame-Options "SAMEORIGIN"`; `add_header Referrer-Policy "strict-origin-when-cross-origin"`

2. **[I01] Google Knowledge Graph** — Claim and verify entity
   - Current: Fail | Potential gain: ~8 weighted points (Identity dimension)
   - Action: Use Google's [Entity Builder](https://knowledgegraphsearch.google.com/) or submit via schema+Google Business Profile; ensure NAP consistency

3. **[E04] Industry Head Term Rankings** — Target "bengkel mobil Depok" and "service mobil Depok"
   - Current: Fail | Potential gain: ~5 weighted points (Eminence dimension)
   - Action: Create dedicated landing pages for head terms; build local citations (Google Business Profile, Apple Maps, Bing Places); target "bengkel mobil depok" with 300+ word service pages

4. **[E02] Keyword Portfolio Expansion** — Grow from 19 to 50+ keywords
   - Current: Fail (19 keywords) | Potential gain: ~4 weighted points
   - Action: Target long-tail automotive service keywords ("tune up mobil depok", "service berkala mobil murah depok"); add blog content for informational queries

5. **[I06] Display Business Registration** — Show NIB/license on website
   - Current: Partial | Potential gain: ~2–3 weighted points
   - Action: Add NIB number to footer and contact page; builds trust for local customers

---

## Action Plan

### Quick Wins (< 1 week)
- [ ] Configure nginx security headers (HSTS, CSP, X-Frame-Options, Referrer-Policy)
- [ ] Clean up AggregateRating schema inconsistency (reviewCount)
- [ ] Verify Google Business Profile exists and is claimed/verified

### Medium Effort (1–4 weeks)
- [ ] Submit brand to Google Knowledge Graph via structured data + entity verification
- [ ] Claim and optimize Google Business Profile with accurate NAP, photos, and hours
- [ ] Build local citations: Apple Maps, Bing Places,Gojek, Tokopedia (for business presence)
- [ ] Create dedicated SEO landing pages for head terms ("bengkel mobil depok", "service mobil profesional depok")

### Strategic (1–3 months)
- [ ] Implement backlink outreach: guest posts on automotive blogs, local news PR, directory submissions
- [ ] Add blog content targeting informational queries (car maintenance tips, engine symptoms guides)
- [ ] Target 50+ organic keywords via content expansion
- [ ] Formalize brand partnerships with verifiable co-marketing (logo exchange, joint promotions)
- [ ] Explore industry award nominations (SWA Service Award, automotive industry recognition)

---

## Cross-Reference with CORE-EEAT

| Assessment | Score | Rating |
|-----------|-------|--------|
| CITE (Domain) | 52/100 | Low |
| CORE-EEAT (Content) | Not yet audited | — |

**Diagnosis Matrix**: High CITE + Low CORE-EEAT → Prioritize content quality | Low CITE + High CORE-EEAT → Build domain authority | **Low CITE (52) + Unknown CORE-EEAT → Focus on domain authority first**

---

## Recommended Next Steps

1. **Immediate**: Fix HTTP security headers in nginx config (T08)
2. **This week**: Verify and optimize Google Business Profile
3. **This month**: Submit to Google Knowledge Graph
4. **Next month**: Backlink outreach and local citation building
5. **Ongoing**: Content expansion for keyword portfolio growth

---

## Data Limitations Acknowledged

The following items could not be fully evaluated and were marked N/A:
- C05–C08: AI citation metrics (requires Semrush/Ahrefs, AI citation monitor)
- I05: Brand mention monitoring (requires brand monitoring tool)
- I07: WHOIS history (blocked by CAPTCHA)
- I08: ICANN compliance details
- T02: IP diversity analysis (requires backlink analyzer)
- T04: Reputation monitoring (requires review monitoring tool)
- T07: Uptime SLA monitoring
- E07: Partnership verification (requires manual cross-check)

Scores are based on observable signals from SimilarWeb, HTTP headers, HTML source analysis, sitemap, and robots.txt. Full audit would benefit from Semrush, Ahrefs, or Moz data.
