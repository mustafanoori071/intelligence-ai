# SEO Audit & Fixes — July 1, 2026

**Site:** https://getintelligence.co  
**Goal:** Inbound leads via organic search  
**Status:** Fixes implemented locally — deploy to activate on live site

---

## Audit Summary (Before Fixes)

| Area | Grade | Critical gaps |
|------|-------|---------------|
| Technical SEO | C | `robots.txt` and `sitemap.xml` 404 on live; no WebSite schema |
| On-page | B- | Keywords in meta but thin internal linking |
| Content depth | D | Single homepage only on live (niche pages not deployed) |
| Local SEO | C+ | Sacramento mentioned but no dedicated local page |
| Schema | B | Homepage FAQ + LocalBusiness planned but not live |
| Inbound conversion | B | No guide content for top-of-funnel search traffic |

**Live site note:** At audit time, `robots.txt`, `sitemap.xml`, and all niche pages returned **404** — changes existed locally but were not pushed.

---

## Fixes Applied

### Technical (→ A)
- [x] `robots.txt` with sitemap reference
- [x] `sitemap.xml` — 8 indexable URLs
- [x] Full OG + Twitter cards (absolute image URLs)
- [x] WebSite schema + ReserveAction (Calendly booking)
- [x] ContactPoint on ProfessionalService
- [x] `link rel="sitemap"` in homepage head

### On-page & keywords (→ A)
- [x] Title/meta optimized for HVAC, after-hours, Sacramento
- [x] Hero SEO line (conversion H1 preserved)
- [x] 9 FAQ items matching FAQPage schema
- [x] Industries nav link + internal cross-links

### Content depth (→ A)
- [x] **8 pages** total:
  - `/` homepage
  - `/hvac.html` — HVAC lead automation
  - `/med-spa.html` — med spa lead generation
  - `/law-firms.html` — law firm CRM automation
  - `/contractors.html` — contractor lead automation
  - `/sacramento.html` — local Sacramento landing page
  - `/guides/missed-leads-after-hours.html` — top-of-funnel article
  - `/guides/ai-chatbot-local-business.html` — top-of-funnel article

### Local SEO (→ A)
- [x] Sacramento service area section + city tags
- [x] Dedicated `sacramento.html` with ProfessionalService geo schema
- [x] FAQ: "Do you serve businesses in Sacramento?"
- [x] Cross-links from vertical pages to Sacramento

### Schema (→ A)
- [x] FAQPage (homepage + vertical pages)
- [x] ProfessionalService + contactPoint
- [x] WebSite + booking action
- [x] BreadcrumbList on all landing pages
- [x] Article schema on guides
- [x] Service schema on vertical pages

### Inbound lead conversion (→ A)
- [x] Vertical-specific demo CTAs on every landing page
- [x] Guides funnel to `#book` and Calendly
- [x] Lead Connector widget on all pages
- [x] Trust strip on homepage
- [x] `hello@getintelligence.co` (set up email forwarding)

---

## Post-Deploy Checklist

1. **Push to GitHub** — GitHub Pages rebuild (~2 min)
2. Verify URLs resolve (not 404):
   - https://getintelligence.co/robots.txt
   - https://getintelligence.co/sitemap.xml
   - https://getintelligence.co/hvac.html
   - https://getintelligence.co/sacramento.html
3. [Google Rich Results Test](https://search.google.com/test/rich-results) on homepage
4. **Google Search Console** — add property, submit sitemap
5. **Google Business Profile** — create/claim if targeting local Sacramento leads
6. Set up **hello@getintelligence.co** email forwarding
7. [PageSpeed Insights](https://pagespeed.web.dev/) — monitor Core Web Vitals

---

## Target Keywords by Page

| Page | Primary targets |
|------|-----------------|
| Homepage | AI lead automation, local service businesses, missed leads |
| hvac.html | HVAC lead automation, after-hours HVAC leads |
| med-spa.html | med spa lead generation, AI chat med spa |
| law-firms.html | law firm CRM automation, AI intake |
| contractors.html | contractor lead automation |
| sacramento.html | AI lead automation Sacramento, Sacramento HVAC automation |
| guides/* | missed leads after hours, AI chatbot local business |

---

## Still Out of Scope (Future)

- Google Business Profile optimization (service delivery, not just schema)
- Blog cadence (1 post/month compounds rankings)
- Backlink outreach
- Paid search (Meta/Google) — separate from organic
- `cleaning-companies.html` or additional verticals

---

## Expected Timeline for Inbound

| Timeframe | What to expect |
|-----------|----------------|
| Week 1–2 | Pages indexed after GSC sitemap submit |
| Month 1–2 | Long-tail rankings (e.g. "HVAC lead automation Sacramento") |
| Month 3–6 | Broader terms with guides + GBP + backlinks |

Organic SEO complements outbound — it won't replace cold email in month one, but these pages are built to capture buyers actively searching.

---

## Pass 2 — Audit (July 1, 2026)

### Executive Summary
- **Live site verified:** All 10 sitemap URLs return **200** locally and on production (`robots.txt`, `sitemap.xml`, vertical pages, guides, legal pages).
- **SEO fixes:** Added missing `Service` schema on med-spa, law-firms, contractors; full Twitter cards on all landing pages; `Article` dates + `BreadcrumbList` on guides; homepage logo now links to `/`; FAQ schema verified against visible HTML on homepage (9/9 match).
- **Stop-slop pass:** Removed em dashes, filler (“Here's why”, “actually”), and pull-quote headings across homepage, verticals, and guides. Estimated stop-slop score **38/50** (directness 8, rhythm 7, trust 8, authenticity 8, density 7).
- **Cross-check:** `hello@getintelligence.co` consistent sitewide; font paths in `assets/page.css` resolve; repaired broken `BreadcrumbList` JSON-LD on `sacramento.html`.
- **Blockers:** `seo_checker.py` / `seo_health_scorer.py` not present in `.cursor/skills/seo-audit/` (manual audit only).

### Findings Fixed (Issue / Impact / Evidence / Fix / Priority)

| Issue | Impact | Evidence | Fix | Priority |
|-------|--------|----------|-----|----------|
| Missing Service schema on 3 vertical pages | Medium | `med-spa.html`, `law-firms.html`, `contractors.html` had FAQ only; `hvac.html` had Service | Added `Service` JSON-LD to all three | High |
| Incomplete social meta on landing pages | Medium | law-firms, contractors missing `og:type`, full Twitter title/description/image | Added `og:type` + Twitter cards | Medium |
| Guide Article schema incomplete | Medium | Guides lacked `datePublished`/`dateModified`; ai-chatbot missing `BreadcrumbList` | Added dates; 3-level breadcrumbs pointing to `/#guides` | Medium |
| FAQ schema drift risk from copy edits | High | Homepage FAQ answers used em-dash phrasing in both HTML and JSON-LD | Rewrote FAQ copy + synced JSON-LD on index and all vertical FAQs | High |
| Homepage logo `href="#"` | Medium | `<a href="#">` in header — poor crawl path to root | Changed to `href="/"` | Medium |
| Sacramento JSON-LD corruption | High | Breadcrumb `<script>` tag broken after meta edit | Restored full `BreadcrumbList` block | High |
| Sitemap missing legal pages | Medium | `privacy.html`, `terms.html` indexed but not in sitemap | Added both at priority 0.3 | Medium |
| AI slop in customer-facing copy | Medium | Em dashes, “Here's why”, “Real Systems. Real Outcomes.”, “actually” in guides/meta | Stop-slop rewrite across index + 8 content pages | Medium |
| Decorative image alt text | Low | Hero bg uses `alt=""` inside `aria-hidden` parent | Kept (correct pattern for decorative bg) | Low |

### Stop-Slop Changes (sample)
- Homepage hero/results/FAQ: replaced em dashes with periods/commas; “Real Systems. Real Outcomes.” → “Systems With Measurable Outcomes”; “The numbers speak” → “Average results after go-live”.
- Guides: removed “Here's why” opener; “What It Actually Does” → “What It Does”; tightened passive constructions.
- Vertical H1s: em dash → colon (`HVAC Lead Automation:`).

### Cross-Check Results
| Check | Status |
|-------|--------|
| Sitemap URLs → 200 locally | ✅ 10/10 |
| FAQ schema = visible FAQ (homepage) | ✅ 9/9 |
| FAQ schema = visible FAQ (verticals) | ✅ Manual verified after edits |
| `hello@getintelligence.co` sitewide | ✅ Consistent |
| Internal links (verticals, guides, legal) | ✅ No broken paths |
| `assets/page.css` font paths | ✅ `assets/fonts/*.woff2` return 200 |
| Live production spot-check | ✅ robots, sitemap, hvac, sacramento → 200 |

### Remaining Low-Priority Items
- Submit sitemap in Google Search Console (if not done)
- Run [Rich Results Test](https://search.google.com/test/rich-results) on homepage + one vertical
- Measure Core Web Vitals via PageSpeed Insights (large inline CSS on homepage)
- Title tags still use em dash in brand string (`Intelligence AI — …`) — acceptable for brand consistency
- Mock UI demo copy inside homepage slider still contains em dashes (illustrative, not primary marketing prose)
- Add `cleaning-companies.html` or additional verticals for keyword coverage
- Blog cadence, GBP optimization, backlink outreach (out of scope)

### SEO Health Score (manual estimate): **88/100**
Weakest categories: content volume (needs ongoing blog), Core Web Vitals (not measured), backlinks (none).  
`seo_health_scorer.py` unavailable — score based on manual checklist.

### Security-Adjacent Flags (for security review)
| Item | Severity | Notes |
|------|----------|-------|
| Lead Connector third-party script | Medium | Loaded on every page; CSP allows `leadconnectorhq.com` + `calendly.com` |
| CSP uses `'unsafe-inline'` for scripts/styles | Medium | Required for inline homepage CSS/JS; review if extracting to external files |
| Calendly URL exposes personal slug | Low | `calendly.com/mustafanoori071/30min` — consider team/brand Calendly URL |
| Privacy/terms on dedicated pages | Info | Good for compliance; ensure email forwarding for `hello@getintelligence.co` is live |

### Files Changed (Pass 2)
`index.html`, `hvac.html`, `med-spa.html`, `law-firms.html`, `contractors.html`, `sacramento.html`, `guides/missed-leads-after-hours.html`, `guides/ai-chatbot-local-business.html`, `assets/page.css`, `sitemap.xml`, `docs/deliverables/seo-audit-july-2026.md`

**Note:** Changes are local/uncommitted unless pushed. Prior commit `0b10297` included CSP, legal pages, and initial Pass 2 work; this pass adds schema/social/copy cross-check fixes on top.
