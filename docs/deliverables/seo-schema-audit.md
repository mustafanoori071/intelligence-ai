# SEO & Schema Audit — getintelligence.co

**Date:** June 30, 2026  
**Scope:** Technical/on-page SEO + structured data for local service search terms  
**Site audited:** https://getintelligence.co (live fetch + `index.html` source)

---

## Executive Summary

getintelligence.co is a single-page marketing site with strong topical relevance for **missed leads** and partial coverage of **AI chat**, **HVAC**, and **after-hours** themes in body copy and case studies. Critical gaps: **zero JSON-LD schema**, **no robots.txt or sitemap.xml** (both 404), **broken relative OG image URL**, and **target keywords absent from title/meta/H2 headings**. FAQ content exists on-page but is not marked up for rich results.

**Keyword coverage snapshot**

| Target term | Title | Meta desc | H1/H2 | Body | Schema |
|---|---|---|---|---|---|
| AI chat for local business | Partial ("AI chat") | Yes | H1 sub only | Strong | None |
| missed leads | Partial ("Never miss…lead") | Yes | H1 | Strong | None |
| HVAC automation | No | No | No (HVAC in case study only) | Weak — "HVAC" not "automation" | None |
| after-hours booking | No | No | No ("after-hours calls" in case study) | Weak — booking implied, not stated | None |

---

## 5 Fast High-Impact Fixes

### 1. Add FAQPage + LocalBusiness JSON-LD to `<head>`

**What:** Paste the JSON-LD blocks in the Schema section below into `index.html` before `</head>`.  
**Why:** FAQ accordion content is live but invisible to Google rich results and AI crawlers. This is the highest-ROI schema win — eligible for FAQ snippets and better entity understanding.  
**Effort:** Quick (~15 min)

### 2. Publish `robots.txt` and `sitemap.xml`

**What:** Add at site root:

```
# robots.txt
User-agent: *
Allow: /
Sitemap: https://getintelligence.co/sitemap.xml
```

```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://getintelligence.co/</loc>
    <lastmod>2026-06-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Why:** Both URLs currently return **404**. Crawlers have no sitemap signal and no explicit crawl directives.  
**Effort:** Quick (~10 min)

### 3. Fix Open Graph and Twitter Card meta tags

**What:** Replace the single broken `og:image` (relative path) and add missing social tags in `<head>`:

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://getintelligence.co/">
<meta property="og:title" content="Intelligence AI — AI Chat & Lead Automation for Local Businesses">
<meta property="og:description" content="Stop missing leads after hours. AI chat, CRM, and booking automation for HVAC, med spas, law firms, and contractors.">
<meta property="og:image" content="https://getintelligence.co/assets/hero-bg.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Intelligence AI — AI Chat & Lead Automation for Local Businesses">
<meta name="twitter:description" content="Stop missing leads after hours. AI chat, CRM, and booking automation for local service businesses.">
<meta name="twitter:image" content="https://getintelligence.co/assets/hero-bg.jpg">
```

**Why:** Relative `og:image` (`assets/hero-bg.jpg`) fails on social shares and link previews. Missing `og:title`/`og:description` forces platforms to guess.  
**Effort:** Quick (~10 min)

### 4. Optimize `<title>` and meta description for target keywords

**What:** Update head tags (SEO metadata only — not body copy):

```html
<title>Intelligence AI — AI Chat & Missed Lead Automation for HVAC & Local Businesses</title>
<meta name="description" content="AI chat, CRM, and after-hours booking automation for local service businesses. Stop missing leads — HVAC, med spas, law firms, contractors. Live in 1–4 days.">
```

**Why:** Current title ("AI-Powered Lead Capture & Automation") omits **HVAC**, **after-hours booking**, and **missed leads** — the four priority query clusters. Meta description is close but doesn't mention HVAC or after-hours booking explicitly.  
**Effort:** Quick (~5 min)

### 5. Add semantic FAQ heading + keyword-targeted FAQ items (on-page + schema sync)

**What:**
- Change `<span class="section-label">FAQ</span>` to `<h2 class="section-label">Frequently Asked Questions</h2>` (or add an `<h2>` above the FAQ list).
- Add 3 FAQ items that match target search intent (then mirror them in FAQPage schema):

| Question | Answer |
|---|---|
| Can AI chat capture leads for my local business after hours? | Yes. Our AI chat widget works 24/7 — it qualifies visitors, collects contact info, and books appointments even when your office is closed. |
| Do you offer HVAC lead automation? | Yes. We build AI chat, CRM, and booking systems for HVAC contractors — including after-hours missed-call recovery and automatic appointment scheduling. |
| How does after-hours booking work? | When a lead comes in outside business hours, the AI responds instantly, asks qualifying questions, and syncs booked appointments to your Calendly and CRM — no manual follow-up required. |

**Why:** Target terms appear in body copy but not in indexable FAQ/Q&A format. Google surfaces FAQ rich results from explicit Q&A blocks; adding these closes the HVAC automation and after-hours booking gaps without new pages.  
**Effort:** Moderate (~30–45 min — requires visible FAQ additions + schema update)

---

## Ready-to-Paste Schema Markup

**Placement:** Insert both `<script>` blocks in `index.html` inside `<head>`, after the canonical tag and before the chat widget script.

**Note:** LocalBusiness schema uses `ProfessionalService` (a LocalBusiness subtype) because Intelligence AI is a B2B agency, not a walk-in storefront. Physical `address` is omitted — add when a public business address is available for local pack eligibility.

### Block 1 — FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most systems go live within 1–4 days."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need any tech experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "None at all. We handle everything end to end."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local service businesses — HVAC, cleaning, med spas, law firms, contractors, and more."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if something breaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We monitor all automations 24/7 and fix issues same day on Growth and Elite plans."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free 30-minute demo call. We'll map out your system and show you exactly what it looks like."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI chat capture leads for my local business after hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our AI chat widget works 24/7 — it qualifies visitors, collects contact info, and books appointments even when your office is closed."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer HVAC lead automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build AI chat, CRM, and booking systems for HVAC contractors — including after-hours missed-call recovery and automatic appointment scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "How does after-hours booking work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a lead comes in outside business hours, the AI responds instantly, asks qualifying questions, and syncs booked appointments to your Calendly and CRM — no manual follow-up required."
      }
    }
  ]
}
</script>
```

> **Important:** The last 3 FAQ entries (after-hours, HVAC, booking) must be added to the visible FAQ section on the page before deploying this schema. Google requires schema to match visible content.

### Block 2 — LocalBusiness (ProfessionalService)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Intelligence AI",
  "url": "https://getintelligence.co",
  "logo": "https://getintelligence.co/assets/hero-bg.jpg",
  "image": "https://getintelligence.co/assets/hero-bg.jpg",
  "description": "AI-powered lead capture and automation for local service businesses. AI chat widgets, CRM setup, and after-hours booking systems for HVAC, med spas, law firms, and contractors.",
  "telephone": "+1-279-235-7067",
  "email": "mustafanoori071@gmail.com",
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "AI chat widget for local businesses",
    "Missed lead recovery automation",
    "HVAC lead automation",
    "After-hours booking automation",
    "CRM and Calendly integration"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Intelligence AI Service Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Starter",
          "description": "AI chat widget, Airtable CRM setup, Calendly booking, and lead notifications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth",
          "description": "Everything in Starter plus AI receptionist, follow-up emails, appointment reminders, and Google Review automation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Elite",
          "description": "Full front-office automation including Meta ads, multi-channel follow-up, custom chatbot, and live lead dashboard."
        }
      }
    ]
  },
  "sameAs": []
}
</script>
```

> Add `sameAs` URLs when available (LinkedIn, Facebook, Google Business Profile). Add `address` block when a public business address is confirmed:
>
> ```json
> "address": {
>   "@type": "PostalAddress",
>   "addressLocality": "City",
>   "addressRegion": "ST",
>   "postalCode": "00000",
>   "addressCountry": "US"
> }
> ```

---

## Validation Checklist (post-deploy)

1. [Google Rich Results Test](https://search.google.com/test/rich-results) — confirm FAQPage eligible
2. [Schema.org Validator](https://validator.schema.org) — confirm no errors on both blocks
3. Confirm `https://getintelligence.co/robots.txt` and `/sitemap.xml` resolve (not 404)
4. Submit sitemap in Google Search Console
5. Re-crawl homepage in GSC after schema deploy (1–2 weeks for Enhancements report)

---

## Out of Scope (noted for future)

- Vertical landing pages (`/hvac`, `/med-spa`) for programmatic local SEO
- Google Business Profile optimization (Elite package line item — no dedicated skill)
- Core Web Vitals measurement (requires PageSpeed Insights / CrUX data)
- Body copy rewrites beyond FAQ additions flagged in Fix #5
