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
- **Security review:** No critical/high issues. Two medium items addressed (CSP + privacy on all pages).
- **SEO:** 10 indexable URLs in sitemap; schema/FAQ aligned; logo links to `/`; legal pages added.
- **Stop-slop:** Guide copy tightened (removed em dashes, filler, pull-quote phrasing).
- **Remaining low priority:** Google Search Console submission, GBP claim, Core Web Vitals measurement, blog cadence.

### Fixes Applied (Pass 2)
| Issue | Fix |
|-------|-----|
| Privacy missing on landing/guide pages | `privacy.html`, `terms.html` + footer links on all widget pages |
| Thin privacy disclosure | Expanded policy (subprocessors, cookies, retention, rights) |
| No CSP with Lead Connector | Meta CSP on all HTML pages |
| Guide AI slop patterns | Rewrote `guides/*.html` prose |
| Sitemap incomplete | Added privacy.html, terms.html |

### SEO Health Score (manual estimate): **88/100**
Weakest categories: content volume (needs ongoing blog), CWV (not yet measured), backlinks (none).
