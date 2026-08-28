# Security & compliance audit — getintelligence.co

**Date:** August 2, 2026  
**Skill:** `~/.cursor/skills/marketing-site-security`  
**Scope:** Static marketing site, legal pages, lead artifacts, US privacy/TCPA/CAN-SPAM exposure for agency + clients  
**Disclaimer:** Not legal advice. Not a full penetration test.

## Executive summary

Highest risks were **prospect PII sitting in the repo path with no `.gitignore`**, **overbroad SMS consent language**, **thin CCPA privacy notice**, and **missing host security headers** (GitHub Pages limitation). Code/legal fixes were applied where possible; header hardening needs Cloudflare (or similar).

## Findings

| Severity | Location | Finding | Fix status |
|----------|----------|---------|------------|
| **Critical** | `docs/deliverables/*leads*` | Real business emails/phones/addresses in working tree; **no `.gitignore`** — one `git add .` = public leak on GitHub Pages repo | **Fixed:** moved to `docs/deliverables/private/` + `.gitignore` |
| **High** | `terms.html` / footer modals | “By providing your phone number, you authorize us to contact you” reads as blanket SMS consent — TCPA risk | **Fixed:** marketing SMS only with clear prior opt-in; phone alone ≠ marketing consent |
| **High** | `privacy.html` | Missing CCPA/CPRA categories, sources, retention window, Do Not Sell section, AI chat disclosure, client/end-customer split | **Fixed:** rewritten Aug 2, 2026 |
| **High** | Live response headers | No `Strict-Transport-Security`, `X-Frame-Options`/`frame-ancestors` header, `X-Content-Type-Options`, `Permissions-Policy` (GitHub Pages does not set these) | **Open — ops:** Cloudflare in front of Pages |
| **High** | Client SMS products | Elite multi-channel follow-up / missed-call text-back can create **client TCPA liability** if consent/A2P not configured | **Documented** in `.claude/COMPLIANCE.md` — enforce on every install |
| **Medium** | Index legal modals | Outdated duplicate privacy/terms (June 27) drifted from pages | **Fixed:** modals summarize + link to canonical pages |
| **Medium** | CSP | `script-src 'unsafe-inline'` required by GHL widget — XSS surface if other scripts ever inject | Accepted for widget; keep no other third parties |
| **Medium** | Cold outreach / scraper | Scraped phones must not be used for marketing SMS (TCPA $500–$1,500/text class actions) | **Documented** — email CAN-SPAM path only unless consented |
| **Low** | Calendly | Personal slug `mustafanoori071` leaks personal handle | Optional: brand Calendly URL |
| **Low** | Deliverable draft schema | `mustafanoori071@gmail.com` in old SEO audit draft | Archive only; live schema uses `hello@getintelligence.co` |

### Passes

- HTTPS on production  
- Privacy + Terms linked in footers  
- Third-party processors named (GHL, Calendly, GitHub Pages)  
- CSP present on marketing pages (meta)  
- No API secrets found in frontend HTML  
- No `innerHTML`/eval sinks with user data in `index.html`  
- `rel="noopener noreferrer"` on Calendly targets  

### N/A

- Auth, sessions, SQL, payment vault (brochure site)

## Changes made this audit

1. Added `.gitignore` (env, credentials, lead PII, caches)  
2. Moved lead CSV/JSON → `docs/deliverables/private/`  
3. Rewrote `privacy.html` (CCPA-oriented) and `terms.html` (TCPA-safer SMS)  
4. Synced homepage legal modals to link-out model  
5. Added `referrer` meta across HTML pages  
6. Added `.claude/COMPLIANCE.md` living rules  

## Your ASAP checklist (outside the repo)

- [ ] Confirm lead files never existed on a **public** remote commit (`git log --all -- '**/leads*'`). If they did, rotate any exposed Sheet credentials and treat as an incident.  
- [ ] Put **Cloudflare** on getintelligence.co → HSTS + security headers  
- [ ] Verify GHL chat SMS checkbox text = prior express written consent  
- [ ] Turn on **2FA** everywhere (GitHub, registrar, GHL, Google, Calendly)  
- [ ] Before any client SMS go-live: consent + STOP/HELP + A2P 10DLC (see COMPLIANCE.md)  
- [ ] Do not text scraped lead-scraper numbers for marketing  

## Sources

- OWASP WSTG / Cheat Sheets (via marketing-site-security skill)  
- CCPA/CPRA consumer rights (California AG materials)  
- TCPA prior express written consent norms for marketing SMS  
- CAN-SPAM Act (commercial email)
