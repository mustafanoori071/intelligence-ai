# Security & US compliance notes (Intelligence AI)

Not legal advice. Living checklist for getintelligence.co and client deliveries.
Skill used: `marketing-site-security`.

## Must never

- Commit lead/prospect CSVs or phone/email lists (`docs/deliverables/private/` is gitignored)
- Send marketing SMS without clear prior express written consent (TCPA)
- Use scraped phone numbers for autodialed/marketing texts
- Put API keys, GHL private tokens, or Google service accounts in the repo or frontend
- Claim fake reviews, guaranteed results, or invent AggregateRating schema

## Site (getintelligence.co)

| Control | Status |
|---------|--------|
| Privacy + Terms linked | Pass — canonical pages `privacy.html` / `terms.html` |
| CCPA categories + Do Not Sell | Pass (Aug 2026 rewrite) — keep modals in sync via link-out |
| SMS marketing only with widget opt-in | Pass in Terms — **verify GHL widget copy matches** |
| HTTPS | Pass (GitHub Pages) |
| CSP meta on pages | Pass (allows GHL + Calendly; `unsafe-inline` required for widgets) |
| HSTS / X-Frame-Options / nosniff headers | **Fail on raw GitHub Pages** — put Cloudflare (or similar) in front and set headers |
| Lead PII in git | Mitigated — private folder + `.gitignore` |

## Outbound & lead scraper (you / agency)

| Risk | Rule |
|------|------|
| Cold **email** (B2B) | CAN-SPAM: accurate From, physical address, unsubscribe, non-deceptive subject |
| Cold **SMS / ringless voicemail** | Treat as high TCPA risk — do **not** text scraped numbers for marketing without consent |
| Lead lists | Store only under `docs/deliverables/private/` or outside the repo; encrypt backups |

## Client deliveries (makes clients vulnerable if skipped)

When configuring chat/SMS/CRM for a client:

1. **Prior express written consent** language in the chat/SMS opt-in (TCPA) before any marketing texts
2. STOP / HELP keywords working on their number
3. A2P 10DLC brand/campaign registration for their sending number
4. Privacy policy on **their** site disclosing GHL/AI chat + SMS
5. Written DPA / service terms: client is controller of their customer data; Intelligence AI is service provider
6. No enabling “blast all CRM contacts” without documented consent source
7. HIPAA: do **not** put PHI in standard GHL chat for medical/med-spa clinical data unless BAA + compliant stack is confirmed

## Ops actions still required (cannot fix in HTML alone)

1. Put Cloudflare (free) in front of GitHub Pages → enable HSTS, security headers, bot fight
2. Audit GHL chat opt-in checkbox text against carrier/TCPA requirements
3. Confirm Calendly uses a brand URL (not personal slug) when practical
4. Enable 2FA on GitHub, domain registrar, GHL, Google, Calendly
5. Have counsel review Privacy/Terms if you scale or enter healthcare/finance verticals
