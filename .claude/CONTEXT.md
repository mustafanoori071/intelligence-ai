# Intelligence AI — Agent Operating Context

Living facts + efficiency contract. Re-run when the user says **audit context** or after a major feature.

---

## Efficiency contract (do this every task)

| Step | Action | Skip unless needed |
|------|--------|--------------------|
| 1 | Read **this file** | — |
| 2 | Brand/copy/outbound/ads? → `.claude/product-marketing-context.md` | Pure code/HTML/CSS with no messaging |
| 3 | **Skill-first** (protocol below) — match → read → execute | Only trivial typos / one-line HTML with zero domain judgment |
| 4 | Prose draft done → `stop-slop` | Non-prose tasks |
| 5 | Done | Do not open sibling skills “for completeness” |

### Skill-first protocol (no reinventing the wheel)

**Goal:** Every non-trivial prompt uses a real skill playbook. Do not invent process, checklists, or frameworks from memory when a skill exists.

1. **Match installed**
   - Playbook intent → `.cursor/agents/<lane>.md` (already lists skills)
   - Else → `.cursor/skills/system-orchestrator/SKILL.md` → one `~/.cursor/skills/<name>/SKILL.md`
   - Also check session `available_skills` and `~/.claude/skills/` (SEO suite)
2. **Read and follow** that skill’s steps (and its `references/` / scripts if present). State which skill you are using in one short line.
3. **No match?** Search before freestyling:
   - WebSearch / browse catalogs (prefer these sources):
     - https://github.com/alirezarezvani/claude-skills (marketing, growth, engineering, ops — primary)
     - https://alirezarezvani.github.io/claude-skills/skills/ (browse by domain)
     - SEO family already local via `~/.cursor/skills/seo` (AgriciDaniel) — do not re-download
   - If a matching skill exists upstream: **tell the user the name + install one-liner**, then ask to install *or* (if they say yes) install to `~/.cursor/skills/` via:
     - `npx agent-skills-cli add alirezarezvani/claude-skills --agent cursor` (bundle), or
     - copy/symlink that skill’s folder into `~/.cursor/skills/<name>/`
   - Use `~/.cursor/skills-cursor/create-skill/SKILL.md` only when building a **new** Intelligence-AI-specific skill after confirming nothing suitable exists upstream.
4. **Still nothing?** Proceed with best judgment, but say so: “No skill found locally or in catalog for X — proceeding without one.” Prefer asking the user over inventing a fake playbook.

**Never:** bulk-load the skill library · invent CONTEXT gaps · treat `docs/deliverables/*` as living truth when facts change · skip skill search on marketing/SEO/design/sales/ops work and “wing it.”

**Skill libraries:**

| Tier | Path | Role |
|------|------|------|
| Project | `.cursor/skills/` | **Only** `system-orchestrator` (router) |
| Global Cursor | `~/.cursor/skills/` | All installed how-tos |
| Global Claude | `~/.claude/skills/` | SEO suite mirror |
| Upstream | GitHub catalogs above | Find & install when local miss |

**Do not copy skills into the project repo** (shadowing). Install missing skills to `~/.cursor/skills/`. Deep SEO → `~/.cursor/skills/seo/SKILL.md` once.

**New agents:** Only for a new playbook lane. One-off work → orchestrator → skill (or GitHub find → install).

---

## File jobs (one job each)

| File | Job | Do not put here |
|------|-----|-----------------|
| `.cursorrules` | Always-on boot + skill-first hard rules | Ops tables, brand voice, full routing matrix |
| `.claude/CONTEXT.md` | Ops, playbook status, gaps, efficiency contract | Brand voice, skill how-tos |
| `.claude/product-marketing-context.md` | Brand, ICP, voice, package narrative | Tooling URLs, playbook weeks, skill routing |
| `.cursor/skills/system-orchestrator/SKILL.md` | Intent → global skill table | Brand, stack, playbook status |
| `.cursor/agents/*.md` | One playbook lane brief | Full skill text, dumping SEO suite |
| `~/.cursor/skills/<name>/` | How-to skills (single source) | Project facts / playbook status |
| `~/.claude/skills/` | SEO suite mirror | Living project facts |
| `docs/deliverables/*` | Archived work products | Living source of truth |
| `index.html` + vertical pages | Live site | Agent instructions |

---

## Ops stack (source of truth)

| Concern | Current truth | Notes |
|---------|---------------|-------|
| Domain | getintelligence.co | Repo root static site |
| Demo booking | `https://calendly.com/mustafanoori071/30min` | Primary conversion; many Book Now still → `#book` scroll (see CRO audit) |
| Chat / booking | Custom Calendly widget (`/assets/booking-chat.js`) | Booking-only on site; no GHL/Lead Connector on getintelligence.co |
| CRM (packaged) | Airtable (Starter line item) | Marketing says Airtable; site widget is Calendly-only — do not invent a third CRM |
| Phone | `+1-279-235-7067` | |
| Analytics | **None live** | If installing: `chat_open`, `calendly_click`, `phone_tap` |
| Lead scraper | `.cursor/skills/lead-scraper/` → Call Queue Sheet | Sacramento ~2hr; Maps/Playwright default |
| Outbound supplements | `docs/deliverables/outbound-context-{vertical}-{city}.md` | Never overwrite product-marketing-context |
| Compliance | `.claude/COMPLIANCE.md` | TCPA/CCPA/CAN-SPAM + client SMS rules — read before outbound SMS or client go-live |
| Lead PII | `docs/deliverables/private/` (gitignored) | Never commit lead CSVs |

---

## 4-week growth playbook (status)

| Week | Agent | Focus | Status |
|------|-------|-------|--------|
| 1 D1–3 | `site-cro` | CRO + booking + GA4 plan | **Done** — `docs/deliverables/site-cro-audit.md` (site fixes mostly unimplemented) |
| 1 D2 | `site-copy` | Hero / CTA variants | **Done** — `docs/deliverables/site-copy-hero-variants.md` (Variant A; confirm if live) |
| 1 D4–5 | `seo-schema` | SEO + FAQ/LocalBusiness | **Done** — seo-schema + july audits |
| 2 | `outbound` | Vertical/city cold email | **Partial** — HVAC general sequence; no city `outbound-context-*` yet |
| 3 | `paid-ads` | $20/day Meta demo | **Not started** |
| 4 | `referral-reactivation` | Referral + 60-day win-back | **Not started** |

Deps: brand context before outbound/ads/copy · CRO booking + GA4 before meaningful ad spend · `project-orchestrator` reviews only.

---

## Fill gaps (ask once — do not invent)

Paste answers under each line when known; delete the bullet when filled.

- [ ] **Pricing:** Starter $__/mo · Growth $__/mo · Elite $__/mo (or “custom quote only”)
- [ ] **Competitors:** 1.___ 2.___ 3.___
- [ ] **ICP size:** employees ___ · revenue band ___
- [ ] **Day-to-day user:** owner only / sometimes office manager
- [ ] **GA4 measurement ID:** G-___ · **GTM:** GTM-___
- [ ] **Referral incentive $:** referrer ___ · referee ___
- [ ] Style extras (Oxford comma, banned words) — else defer to stop-slop

Skill gaps (infra): multi-channel follow-up build, custom chatbot from scratch.  
GBP / local SEO → global `seo-local`. **Removed:** project `seo-audit` + global `seo-audit-agency` (weaker duplicates).

---

## Contradiction log (resolved)

| Issue | Resolution |
|-------|------------|
| Fat `.cursorrules` vs orchestrator | Boot = efficiency rules only |
| Agents re-read orchestrator | Agents list their skills; orchestrator for ad hoc only |
| Project skill copies shadowed globals | Deleted from repo; how-tos live in `~/.cursor/skills/` |
| Weak `seo-audit` / `seo-audit-agency` | Removed; use `seo` meta-router |
| Airtable vs GHL | Both documented in Ops stack |
| Missing playbook file | Status table in this file |

---

## Audit trigger

**audit context** or major feature → remap this file, prune bloat, fill gaps that caused guessing, simulate next 3 likely tasks against the efficiency contract.
