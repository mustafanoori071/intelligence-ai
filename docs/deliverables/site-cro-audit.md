# Site CRO Audit — getintelligence.co

**Date:** June 30, 2026  
**Agent:** Site CRO  
**Primary conversion goal:** Demo booked via Calendly (`https://calendly.com/mustafanoori071/30min`)  
**Assumption:** Hero copy updated to **Variant A (blended)** from `docs/deliverables/site-copy-hero-variants.md`  
**Sources:** Live site fetch, `index.html`, `.claude/product-marketing-context.md`, page-cro / form-cro / analytics-tracking skills

---

## Executive Summary

getintelligence.co has strong proof content (before/after slider, case studies, pipeline demo) but a **broken demo-booking path**: most "Book Now" clicks scroll the page instead of opening Calendly, package cards offer no price or CTA, and the mid-funnel Results CTA has no button. **Zero GA4/GTM** is installed, so the team cannot measure chat vs. Calendly vs. phone as booking paths.

**Conversion audit score:** Not run (`scripts/conversion_audit.py` not present in repo). Manual scan: **CTA count high (6+ "Book Now" labels), Calendly links = 1, pricing visible = 0, form/booking embed = 0, analytics = 0.**

### #1 Weakest Funnel Point

**Primary booking path ends in a scroll, not a calendar.** Hero and header "Book Now" link to `#book` (in-page anchor). The only Calendly URL sits in the bottom CTA banner — after Pain → How It Works → Results (~3,500px) → Packages → FAQ. Visitors who click "Book Now" expecting a calendar get a long scroll; many never reach Calendly.

---

## Funnel Map (Post–Variant A Hero)

```
Land → Hero (Variant A) → [Book Now → scroll ↓] → Pain → How It Works → Results (no book button)
  → Packages (no price, no CTA) → FAQ (no CTA) → #book Calendly (new tab)
Parallel exits: Chat widget (GHL), footer phone/email (untracked)
```

---

## Section-by-Section Audit

### Hero (assuming Variant A deployed)

| Element | Current (live) | After Variant A | CRO assessment |
|---------|----------------|-----------------|----------------|
| Headline | Never Miss Another Lead Again | Missed Calls After Hours Are Missed Money | Variant A fixes generic promise; names the pain ICP recognizes |
| Subhead | Tech-stack list (chat, CRM, 24/7) | HVAC + med spa, competitor dynamic, "done for you, live in days" | Strong message match for target traffic; reduces bounce from cold paid/organic |
| Primary CTA | Book Now → `#book` | Book Now (unchanged label) | **High friction:** label promises booking; behavior is scroll |
| Secondary CTA | View Packages → `#packages` | — | Acceptable for researchers; splits ready-to-book traffic |

**Remaining hero issues (structure, not copy):**

1. **Eyebrow** ("AI-Powered Lead Systems") still generic — does not reinforce after-hours angle Variant A establishes. Impact: low. Effort: quick win.
2. **No hero proof line** — 60% after-hours stat and "47 sec booking" live only below the fold. One line under subhead would lift trust for ready buyers. Impact: medium. Effort: quick win.
3. **Hero visual** shows pipeline image, not the live chat widget prospects would receive — missed "product preview" trust. Impact: medium. Effort: larger change.

---

### Pain Section ("Sound familiar?")

**Strengths:** Three cards mirror marketing-context language ("missed calls = missed money," after-hours loss). Aligns with Variant A headline — reinforces rather than contradicts.

**Issues:**

| Issue | Why it hurts demo bookings | Impact | Effort |
|-------|---------------------------|--------|--------|
| No CTA after pain grid | Visitor feels the pain but next action is marquee + "How It Works" — research mode | Medium | Quick win |
| Partial redundancy with Variant A hero | Cards 1 and 3 repeat after-hours/missed-call themes | Low (repetition aids memory) | — |
| Card 2 ("no follow-up") underplays after-hours | Weaker tie to Variant A's night-call positioning | Low | Quick copy tweak (site-copy scope) |

**Fix:** Add a single line + `Book Now` button below pain grid: *"Stop the leak — book a 30-min demo."* Link directly to Calendly, not `#book`.

---

### Results Section

**Strengths:** Best trust asset on the site — before/after slider, animated stats (3x leads, 47% faster, 23 jobs/30 days case study), chat/phone mocks, CRM table. Directly addresses "will this work for my business?"

**Issues:**

| Issue | Why it hurts demo bookings | Impact | Effort |
|-------|---------------------------|--------|--------|
| **`#results-cta` has headline + text, no button** | Strongest proof moment with no conversion action | **High** | Quick win |
| ~3,500px before first real Calendly link | Engaged users finish Results still without booking path | High | Quick win (CTAs) |
| Stats labeled "Average results" without attribution | Trust gap for skeptical owners | Medium | Quick win (footnote or "client avg") |
| Meta ad mock CTA is decorative (`<div>`, not clickable) | Teaches "Book Now" pattern then doesn't deliver | Low | Quick win |

**Fix:** Add `Book Now` (Calendly) to `#results-cta`. Repeat sticky or inline CTA after client result cards.

---

### Packages Section

**Strengths:** Clear tier names and feature lists; Growth marked "Most Popular"; taglines map to JTBD ("Get found," "Never miss a lead," "Entire front office").

**Critical issues:**

| Issue | Why it hurts demo bookings | Impact | Effort |
|-------|---------------------------|--------|--------|
| **No prices displayed** | CSS supports `.price-amount` but HTML has none — owners expect ballpark before a sales call | **High** | Medium (pricing decision) |
| **No CTAs on any package card** | `.price-cta` styles exist but unused — dead end after comparison | **High** | Quick win |
| Mobile horizontal scroll — Starter may appear first | "Most Popular" Growth not default-visible | Medium | Quick win (scroll-snap center Growth) |
| No "which plan?" routing | FAQ doesn't answer plan selection; increases demo no-shows if wrong expectations | Medium | Medium |

**Fix:** Add "Book Free Demo" on each card (all → same Calendly). Show "Starting at $X/mo" or "Custom quote on demo" to reduce price anxiety. On mobile, `scroll-snap-align: center` on `.price-card.featured`.

---

### FAQ Section

**Strengths:** Covers setup time, tech skill, verticals, breakage, getting started. Accordion UX is clean.

**Gaps (objection handling → demo bookings):**

| Missing objection | From marketing-context | Impact |
|-------------------|------------------------|--------|
| "I don't trust AI with my customers" | #1 sales objection | **High** |
| "What does this cost?" | #2 objection | High |
| "What happens on the demo call?" | Reduces no-shows | Medium |

**Structural issue:** No CTA after FAQ. Last FAQ answer says "Book a free 30-minute demo" but is not clickable. Impact: **High**. Effort: Quick win.

**Fix:** Add FAQ items for AI trust + pricing framing. Add button below FAQ list linking to Calendly.

---

### Book Now CTA (`#book`)

**Strengths:** Clear offer ("free 30-minute demo"), single primary button, opens Calendly.

**Issues:**

| Issue | Why it hurts demo bookings | Impact | Effort |
|-------|---------------------------|--------|--------|
| Only Calendly touchpoint on page | All upstream CTAs funnel here via scroll | High | Quick win (direct links) |
| Opens new tab (`target="_blank"`) | Context switch; mobile back-button confusion | Medium | Test inline embed |
| Calendly URL is personal (`mustafanoori071`) | Less brand trust vs. `/intelligence-ai` slug | Low–Medium | Quick win |
| No microcopy under button | Missing "Free · No obligation · 30 min" | Medium | Quick win |
| No cross-domain GA4 | Calendly completions invisible on site | High (measurement) | Medium |

**Calendly flow (form-cro lens):** Calendly's native form (name, email, optional questions) is appropriate for demo booking — 3–4 fields is within lead-gen ceiling. **Recommendation:** Keep Calendly form as-is; reduce friction *before* Calendly (direct links, inline embed option). Enable Calendly→GA4 integration or redirect thank-you with UTM for `demo_booked` key event.

---

### Chat Widget (Lead Connector / GHL)

**Implementation:** `widgets.leadconnectorhq.com/loader.js` in `<head>`, widget ID `6a405fcaa3d7dca4976092f1`.

| Issue | Why it hurts demo bookings | Impact | Effort |
|-------|---------------------------|--------|--------|
| **Untracked** | Cannot compare chat-lead vs. Calendly demo volume | High (measurement) | Medium |
| Loads in head before content | Potential LCP delay on mobile | Medium | Medium (defer script) |
| Competes with Book Now, no routing | Owner may chat instead of book — OK if qualified, bad if unstaffed | Medium | GHL config |
| No visible "Book a demo" prompt on bubble | Widget is generic; doesn't mirror page CTA | Medium | GHL config |

**Fix:** Configure widget greeting to offer demo booking + after-hours qualification. Defer widget script until `DOMContentLoaded`. Fire `chat_open` on first open (see GA4 spec).

---

### Footer / Phone Path

- `tel:+12792357067` in footer only — no sticky mobile call button.
- Gmail address in footer (not `@getintelligence.co`) — minor trust drag for enterprise-minded owners.
- Phone taps untracked.

**Fix:** Sticky mobile bar: Book Now (Calendly) + Call. Fire `phone_tap` event.

---

## Prioritized Fixes (Demo-Booking Impact)

Ranked by expected impact on **demo bookings**, not cosmetic polish.

### Quick Wins (implement this week)

| # | What to change | Why it matters | Impact | Effort |
|---|----------------|----------------|--------|--------|
| 1 | **Point every "Book Now" to Calendly** (hero, nav, results-cta, post-FAQ, package cards). Keep `#book` as scroll target only for "View Packages" researchers, or embed Calendly inline at `#book` | Removes false affordance; cuts scroll abandonment | **High** | Quick win |
| 2 | **Add Book Now button to `#results-cta`** and after FAQ | Converts peak-trust moments | **High** | Quick win |
| 3 | **Add "Book Free Demo" CTAs on all three package cards** | Unblocks comparison shoppers | **High** | Quick win |
| 4 | **Install GA4 + GTM; implement three events below** | Enables optimization; currently flying blind | **High** | Quick–medium |
| 5 | Add microcopy under final CTA: *Free · 30 minutes · No obligation* | Reduces demo anxiety | Medium | Quick win |
| 6 | Make FAQ answer "How do I get started?" a Calendly link | Clickable intent match | Medium | Quick win |

### High-Impact Changes (prioritize next)

| # | What to change | Why it matters | Impact | Effort |
|---|----------------|----------------|--------|--------|
| 7 | **Show package pricing or "From $X/mo — confirm on demo"** | #2 sales objection; stops unqualified demos and increases qualified ones | **High** | Larger change |
| 8 | **Inline Calendly embed at `#book`** instead of new-tab link | Keeps visitor on domain; typical +15–30% scheduler completion vs. redirect (industry benchmark, 🟡 estimated) | **High** | Medium |
| 9 | Add FAQ: AI trust + pricing framing | Closes objections before booking | **High** | Medium (copy) |
| 10 | **Sticky mobile CTA bar** (Book Now + optional Call) | Mobile visitors lose nav CTA on scroll | **High** | Medium |
| 11 | Defer chat widget load; set demo-first greeting | Protects LCP; aligns chat with conversion goal | Medium | Medium |
| 12 | Calendly cross-domain + `demo_booked` key event | Closes funnel measurement loop | **High** | Medium |

### Test Ideas (after fixes ship)

| Hypothesis | Variant | Success metric |
|------------|---------|----------------|
| Inline Calendly vs. new-tab link | A: embed at `#book` / B: external | `calendly_click` → Calendly completed ratio |
| Hero secondary CTA | A: View Packages / B: See Results | Demo booking rate by first CTA clicked |
| Hero proof line | A: with "60% after-hours calls missed" / B: without | Hero bounce rate, `calendly_click` rate |
| Package card CTA copy | A: Book Free Demo / B: See If You Qualify | Demo show rate |

---

## GA4 Event Definitions

**Naming:** `object_action` snake_case per analytics-tracking skill.  
**Current state:** 🟢 Verified — no `gtag`, GTM, or `dataLayer` in `index.html`.

### Required Events (requested)

#### 1. `chat_open`

Fires when the visitor opens the Lead Connector chat widget for the first time per session.

| Field | Value |
|-------|-------|
| **Event name** | `chat_open` |
| **Key event?** | No (micro-conversion) |
| **Trigger** | First widget open per session |

**Parameters:**

| Parameter | Type | Example | Required |
|-----------|------|---------|----------|
| `page_location` | string | `https://getintelligence.co/` | Auto |
| `content_group` | string | `homepage` | Yes |
| `widget_provider` | string | `lead_connector` | Yes |
| `open_method` | string | `bubble_click` / `auto_prompt` | If available |

**GTM implementation:**

```
Trigger: Custom Event OR Element Visibility + Click on GHL bubble
         (inspect widget DOM after load; fallback: MutationObserver in Custom HTML tag)

Tag: GA4 Event
  Event Name: chat_open
  Parameters: content_group, widget_provider, open_method

Session dedup: fire once per session (GTM trigger group or sessionStorage flag)
```

**App-code fallback** (if GHL exposes hook):

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'chat_open',
  content_group: 'homepage',
  widget_provider: 'lead_connector',
  open_method: 'bubble_click'
});
```

---

#### 2. `calendly_click`

Fires when any element linking to Calendly is clicked.

| Field | Value |
|-------|-------|
| **Event name** | `calendly_click` |
| **Key event?** | **Yes** — mark as GA4 key event (primary micro-conversion) |
| **Trigger** | Click on `a[href*="calendly.com"]` |

**Parameters:**

| Parameter | Type | Example | Required |
|-----------|------|---------|----------|
| `link_url` | string | `https://calendly.com/mustafanoori071/30min` | Yes |
| `link_text` | string | `Book Now` | Yes |
| `cta_location` | string | `hero` / `nav` / `results` / `packages_starter` / `packages_growth` / `packages_elite` / `faq` / `footer_banner` / `sticky_mobile` | Yes |
| `content_group` | string | `homepage` | Yes |

**HTML prep (recommended):** Add `data-track="calendly"` and `data-cta-location="hero"` to each Calendly anchor for reliable GTM selectors.

**GTM implementation:**

```
Trigger: Click - All Elements
  Click URL contains calendly.com

Tag: GA4 Event
  Event Name: calendly_click
  Parameters:
    link_url: {{Click URL}}
    link_text: {{Click Text}}
    cta_location: {{DLV - cta_location}} OR CSS/data-attribute lookup
```

**Downstream:** Enable [Calendly Google Analytics integration](https://help.calendly.com/hc/en-us/articles/223193288) or Zapier webhook → push `demo_booked` when event is scheduled. Add `calendly.com` to GA4 **list unwanted referrers** (Admin → Data Streams → Configure tag settings) so session doesn't reset mid-funnel.

---

#### 3. `phone_tap`

Fires when the footer (or sticky) phone link is clicked.

| Field | Value |
|-------|-------|
| **Event name** | `phone_tap` |
| **Key event?** | No (alternate conversion path — promote to key event if phone demos are tracked in CRM) |
| **Trigger** | Click on `a[href^="tel:"]` |

**Parameters:**

| Parameter | Type | Example | Required |
|-----------|------|---------|----------|
| `phone_number` | string | `+12792357067` | Yes |
| `link_text` | string | `279-235-7067` | Yes |
| `cta_location` | string | `footer` / `sticky_mobile` | Yes |
| `content_group` | string | `homepage` | Yes |

**GTM implementation:**

```
Trigger: Click - All Elements
  Click URL matches RegEx ^tel:

Tag: GA4 Event
  Event Name: phone_tap
  Parameters: phone_number, link_text, cta_location, content_group
```

---

### Supporting Events (recommended, not requested)

| Event | When | Key event? |
|-------|------|------------|
| `demo_booked` | Calendly "invitee.created" webhook or thank-you page | **Yes** (true conversion) |
| `cta_click` | Any `#book` scroll anchor click (to measure scroll-vs-book confusion) | No |
| `package_view` | Pricing section 50% visible (Intersection Observer) | No |
| `faq_expand` | FAQ accordion opened (param: `question_text`) | No |

### GTM Container Checklist

1. Create GA4 property + web data stream for `getintelligence.co`
2. GTM container: GA4 Configuration tag (All Pages)
3. Add tags for `chat_open`, `calendly_click`, `phone_tap`
4. Mark `calendly_click` and `demo_booked` as key events
5. Enable Enhanced Measurement (scroll, outbound — disable if duplicating custom outbound)
6. Configure cross-domain: `getintelligence.co` ↔ `calendly.com`
7. UTM convention for paid: `utm_source=meta&utm_medium=cpc&utm_campaign=demo-bookings&utm_content=hero-variant-a`
8. Validate in GTM Preview + GA4 DebugView before publish

---

## Variant A — Post-Deploy CRO Notes

Once Variant A is live, re-check:

1. **Message match:** Paid ad copy using after-hours angles should land on this hero without modification.
2. **Pain redundancy:** Monitor heatmaps — if users bounce after pain section, tighten card 1 or 3 to avoid headline echo.
3. **Proof placement:** Variant A deliberately omits 60%/47sec stats from hero; if `calendly_click` rate is low after deploy, test one proof line under subhead (A/B, not default).

---

## Out of Scope (other agents)

- Hero/subhead copy production → site-copy (`site-copy-hero-variants.md` already delivered)
- JSON-LD / meta tags → seo-schema (`docs/deliverables/seo-schema-audit.md`)
- Meta ad landing paths → paid-ads

---

## Summary Table

| Section | Grade | Biggest issue |
|---------|-------|---------------|
| Hero (Variant A) | B+ | CTA scrolls, not books |
| Pain | B | No CTA |
| Results | A− content / D conversion | Mid-section CTA has no button |
| Packages | D | No price, no CTAs |
| FAQ | B− | Missing trust/price objections; no CTA |
| Book Now banner | B+ | Single point of failure |
| Calendly flow | C+ | External tab, no tracking |
| Chat widget | C | Untracked, competes silently |
| Analytics | F | Not installed |

**Top 3 fixes:**

1. **Wire all Book Now CTAs directly to Calendly** (or embed Calendly at `#book`) — fixes the #1 funnel leak.
2. **Add Book Demo buttons to Results CTA, FAQ footer, and all package cards** — converts proof and comparison intent.
3. **Deploy GA4/GTM with `calendly_click`, `chat_open`, `phone_tap`** — required to measure and iterate on the above.
