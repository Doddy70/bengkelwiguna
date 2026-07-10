# AI SEO Team — Bengkel Wiguna
> **Version:** 1.0.0
> **Date:** 2026-07-10
> **Based on:** User recommendation for multi-agent SEO workflow

---

## TEAM STRUCTURE

```
┌─────────────────────────────────────────────────────────────────┐
│                     SEO TEAM LEAD (You)                         │
│                  Task Assignment & Quality Control               │
└────────────────────────────┬────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────┐  ┌─────────────────┐  ┌───────────────────┐
│SEO STRATEGIST │  │CONTENT ARCHITECT│  │TECHNICAL SEO      │
│               │  │                 │  │REVIEWER           │
│• Keyword      │  │• Topical Map   │  │                   │
│  Research     │  │• Entity Link   │  │• Schema Markup    │
│• Cluster      │  │  Strategy      │  │• Metadata         │
│  Planning     │  │• Internal Link │  │• Core Web Vitals  │
│• Roadmap      │  │  Architecture   │  │• Canonical/OG     │
└───────────────┘  └─────────────────┘  └───────────────────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
              ┌─────────────────────────┐
              │AUTOMOTIVE TECHNICAL     │
              │WRITER                   │
              │                         │
              │• E-E-A-T Content       │
              │• Diagnosis Trees        │
              │• KO Reuse              │
              │• Evidence-Based        │
              └─────────────────────────┘
                             │
                             ▼
              ┌─────────────────────────┐
              │PERFORMANCE ANALYST     │
              │(Phase 3+)               │
              │                         │
              │• Search Console Review │
              │• Cannibalization       │
              │• Content Refresh       │
              │• Next Priorities       │
              └─────────────────────────┘
```

---

## AGENT DEFINITIONS

### 1. SEO STRATEGIST

**Role:** Menentukan keyword strategy, content cluster, dan roadmap

**Responsibilities:**
- Keyword research dan prioritization
- Content cluster planning
- Competitive analysis
- SEO roadmap development
- Keyword governance tracking

**Tools:**
- Keyword registry
- SERP analysis
- Competitor research

**Output:**
- Updated keyword-registry.md
- New cluster briefs
- Roadmap updates

---

### 2. CONTENT ARCHITECT

**Role:** Menyusun topical authority, entity mapping, dan internal linking strategy

**Responsibilities:**
- Topical authority mapping
- Entity relationship design
- Internal linking architecture
- Knowledge object creation
- Content reuse optimization

**Tools:**
- Entity mapping files
- Knowledge graph
- Internal linking templates

**Output:**
- Updated entity-mapping/
- New knowledge objects
- Internal link proposals

---

### 3. AUTOMOTIVE TECHNICAL WRITER

**Role:** Menulis artikel berdasarkan standar E-E-A-T Bengkel Wiguna

**Responsibilities:**
- Write articles following content brief
- Implement diagnosis trees (R8)
- Apply knowledge objects (R5)
- Follow evidence requirements (R6)
- Include trust signals (R11)
- Add citations (R12)

**Standards:**
- Authority Score MIN 90 (R10)
- No Guess Policy (R7)
- 5W+1H coverage (R15)
- Local SEO elements (R18)
- Media requirements (R19)

**Output:**
- Article content (Markdown/HTML)
- FAQ Schema markup
- Internal links

---

### 4. TECHNICAL SEO REVIEWER

**Role:** Memeriksa schema, metadata, canonical, Core Web Vitals, dan aspek teknis

**Responsibilities:**
- Schema markup validation
- Meta description optimization
- Canonical URL check
- Open Graph / Twitter Card
- Breadcrumb structure
- Core Web Vitals audit
- Indexing checklist

**Tools:**
- Schema validator
- Lighthouse
- Meta analyzer

**Output:**
- SEO checklist report
- Technical recommendations
- Fixes for schema/OG/canonical

---

### 5. PERFORMANCE ANALYST

**Role:** Membaca data Google Search Console, mendeteksi cannibalization, mengusulkan refresh

**Responsibilities:**
- Search Console analysis
- Ranking tracking
- Cannibalization detection (R17)
- CTR optimization
- Content refresh proposals
- Next priority recommendations

**KPIs:**
- Impressions
- CTR
- Rankings
- Index coverage

**Output:**
- Performance reports
- Refresh recommendations
- Priority updates

---

## WORKFLOW

### Phase 0: Intelligence (SEO Strategist)
```
1. Keyword Research → keyword-registry.md
2. SERP Analysis → serp-analysis/
3. Entity Mapping → entity-mapping/
4. Knowledge Graph → knowledge-graph/
```

### Phase 1-2: Content Creation (Content Architect + Technical Writer)
```
1. Content Brief → content-briefs/
2. Topical Map → internal linking plan
3. Write Article → E-E-A-T compliant
4. Technical Review → Technical SEO Reviewer
5. Publish → WordPress
```

### Phase 3+: Monitoring (Performance Analyst)
```
1. Search Console Review → Weekly
2. Ranking Analysis → Bi-weekly
3. Refresh Proposals → Monthly
4. Next Priorities → Quarterly
```

---

## AGENT INVOCATION TEMPLATE

### SEO Strategist (for new cluster)
```
Agent({
  subagent_type: "general-purpose",
  prompt: "Act as SEO Strategist for Bengkel Wiguna. Create keyword research and cluster plan for [TOPIC]. Output: keyword-registry entry, SERP analysis, content brief."
})
```

### Automotive Technical Writer (for article)
```
Agent({
  subagent_type: "general-purpose",
  prompt: "Act as Automotive Technical Writer for Bengkel Wiguna. Write article about [TOPIC] following content brief at [PATH]. Apply all 20 rules (R1-R20). Output: article content in HTML."
})
```

### Technical SEO Reviewer (for validation)
```
Agent({
  subagent_type: "general-purpose",
  prompt: "Act as Technical SEO Reviewer. Review article at [URL/CODE] for: schema markup, meta tags, canonical, OG tags, internal links. Output: checklist and fixes."
})
```

---

## CURRENT TEAM DEPLOYMENT

| Agent | Status | Current Task |
|-------|--------|--------------|
| SEO Strategist | ✅ DONE | Phase 0 Intelligence |
| Content Architect | ⏳ NEXT | Phase 1 Setup |
| Automotive Writer | ⏳ NEXT | Phase 2.1 Pillar Article |
| Technical SEO Reviewer | ⏳ NEXT | Post-article validation |
| Performance Analyst | ⏳ LATER | Phase 3+ |

---

## QUALITY GATES

Each article must pass:

```
GATE 1: SEO Strategist ✓
  └── Keyword approved
  └── SERP analysis done
  └── Content brief complete

GATE 2: Content Architect ✓
  └── Topical authority map
  └── Internal links planned
  └── Knowledge objects ready

GATE 3: Technical Writer ✓
  └── Authority Score MIN 90
  └── All rules followed (R1-R20)
  └── E-E-A-T compliant

GATE 4: Technical SEO Reviewer ✓
  └── Schema valid
  └── Meta optimized
  └── Technical checks pass

GATE 5: Performance Analyst (post-publish)
  └── Ranking tracked
  └── CTR monitored
  └── Refresh scheduled
```

---

## AGENT PROMPTS LIBRARY

### SEO Strategist Prompt
```
You are the SEO Strategist for Bengkel Wiguna, an automotive workshop in Depok, Indonesia.
Your task: Research and plan content cluster for [INSERT TOPIC].

Deliverables:
1. Keyword research (primary + secondary + LSI)
2. SERP analysis (top 5 competitors)
3. Content gaps identified
4. Content brief (H1, H2 structure, word count, media)
5. Keyword registry entry

Follow rules:
- R1: Keyword Governance (NOT_STARTED tracking)
- R2: Search Intent Classification
- R3: Vehicle Entity Layer (Toyota, Honda, Mitsubishi)
- R4: Problem→Service Mapping
- R15: 5W+1H optimization
- R18: Local SEO (Depok, Margonda, etc.)
```

### Automotive Technical Writer Prompt
```
You are the Automotive Technical Writer for Bengkel Wiguna, an automotive workshop in Depok, Indonesia.
Your task: Write article about [INSERT TOPIC] following content brief at [INSERT PATH].

Standards:
- Authority Score MIN 90 (R10)
- Include Diagnosis Tree (R8)
- Use Knowledge Objects from [INSERT PATH]
- Evidence-based, no speculation (R7)
- E-E-A-T: Technician name, date, warranty (R11)
- Cite API/SAE/Toyota/Honda (R12)
- Include FAQ Schema (R14)
- Internal links to cluster articles
- Local SEO elements (R18)
- Media: Table, Diagram, Hero Image (R19)

Output: Article HTML ready for WordPress
```

### Technical SEO Reviewer Prompt
```
You are the Technical SEO Reviewer for Bengkel Wiguna website.
Your task: Review article [INSERT URL/CODE] for technical SEO compliance.

Checklist:
1. Schema markup (FAQ, Article, HowTo, LocalBusiness)
2. Meta title (50-60 chars)
3. Meta description (150-160 chars)
4. Canonical URL
5. Open Graph tags
6. Twitter Card
7. Breadcrumb JSON-LD
8. Internal links (MIN 5)
9. External links (MIN 2 quality)
10. Images (alt text, lazy loading)

Output: Validation report with fixes
```

---

Generated by: Claude Code
Date: 2026-07-10
Version: 1.0.0
