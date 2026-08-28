---
name: system-orchestrator
description: "Routing index for Intelligence AI using global ~/.cursor skills (+ project facts). Use before marketing, sales, SEO, design, or client work to pick one skill. Read when intent is unclear."
disable-model-invocation: true
---
# System Orchestrator

Routing only. Facts: `.claude/CONTEXT.md`. Brand: `.claude/product-marketing-context.md`.

**Efficiency:** open once for ad hoc work → load **exactly one** skill. Playbook lanes → `.cursor/agents/*` (skip this file). Never bulk-load.

**Skill home:** All how-tos live in `~/.cursor/skills/<name>/SKILL.md` (SEO suite also mirrored under `~/.claude/skills/`). This repo keeps **only** this orchestrator under `.cursor/skills/` — no duplicate skill copies (they shadowed better globals).

---

## Agency / growth

| Intent | Skill |
|--------|-------|
| Cold outreach sequences | `~/.cursor/skills/cold-email/SKILL.md` |
| Page CRO | `~/.cursor/skills/page-cro/SKILL.md` |
| Form CRO | `~/.cursor/skills/form-cro/SKILL.md` |
| Page copy | `~/.cursor/skills/copywriting/SKILL.md` → then `stop-slop` |
| No-website lead scrape | `~/.cursor/skills/lead-scraper/SKILL.md` |
| Brand/ICP context doc | `~/.cursor/skills/marketing-context/SKILL.md` |
| Process / onboarding map | `~/.cursor/skills/process-mapper/SKILL.md` |
| Meta campaign strategy | `~/.cursor/skills/paid-ads/SKILL.md` |
| Ad creative | `~/.cursor/skills/ad-creative/SKILL.md` |
| Campaign analytics | `~/.cursor/skills/campaign-analytics/SKILL.md` |
| GA4/GTM / UTMs | `~/.cursor/skills/analytics-tracking/SKILL.md` |
| Referral program | `~/.cursor/skills/referral-program/SKILL.md` |
| Win-back / save offers | `~/.cursor/skills/churn-prevention/SKILL.md` |
| Custom MCP / API code | `~/.cursor/skills/mcp-server-builder/SKILL.md` |
| RFP / competitive / POC | `~/.cursor/skills/sales-engineer/SKILL.md` |
| Account health | `~/.cursor/skills/customer-success-manager/SKILL.md` |
| Contract / proposal | `~/.cursor/skills/contract-and-proposal-writer/SKILL.md` |
| Pressure-test plan | `~/.cursor/skills/grill-me/SKILL.md` |
| Prose anti-slop | `~/.cursor/skills/stop-slop/SKILL.md` |

## Site build & design (global)

| Intent | Skill |
|--------|-------|
| Build/redesign website or landing | `~/.cursor/skills/website-builder/SKILL.md` (**only** builder) |
| Frontend / visual UI | `~/.cursor/skills/frontend-design/SKILL.md` |
| UX patterns | `~/.cursor/skills/ui-ux-pro-max/SKILL.md` |
| shadcn/Tailwind UI | `~/.cursor/skills/ui-styling/SKILL.md` |
| Brand identity / logos | `~/.cursor/skills/brand/SKILL.md` or `design/SKILL.md` |
| Design tokens / slides system | `~/.cursor/skills/design-system/SKILL.md` |
| Banners / social assets | `~/.cursor/skills/banner-design/SKILL.md` |
| Visual art PNG/PDF | `~/.cursor/skills/canvas-design/SKILL.md` |
| HTML presentations | `~/.cursor/skills/slides/SKILL.md` |
| Playwright testing | `~/.cursor/skills/webapp-testing/SKILL.md` |
| Marketing site security | `~/.cursor/skills/marketing-site-security/SKILL.md` |

## SEO (one meta-router — do not use light duplicates)

Open **`~/.cursor/skills/seo/SKILL.md`** once and follow its command table.

| Intent | Via |
|--------|-----|
| Full / any serious SEO audit | `seo` → audit (global `seo-audit`) |
| Schema / JSON-LD | `seo` → schema (`seo-schema`) |
| Local / GBP / NAP | `seo-local` |
| Maps / geo-grid | `seo-maps` |
| Technical / CWV | `seo-technical` |
| GSC / CrUX | `seo-google` |
| Everything else | see `seo` quick reference |

**Removed on purpose:** project `seo-audit` checklist and `seo-audit-agency` — both were weaker and stole routing from the real suite.

Playbook `seo-schema` agent: use global `seo` + `seo-schema` (and `seo-local` when GBP/local).

---

## Rules

1. One skill per intent. Sequence only when needed (copy → stop-slop; paid-ads → ad-creative).
2. Playbook lane → agent file, not this table.
3. Client marketing → marketing-context first.
4. **No row matches?** Do **not** freestyle. Follow CONTEXT **Skill-first protocol**: search GitHub catalogs (alirezarezvani/claude-skills, etc.), propose install to `~/.cursor/skills/`, then run. Only proceed without a skill if search finds nothing — and say so.
5. Do **not** re-copy global skills into `.cursor/skills/` (causes shadowing).

## Remaining gaps (infra)

- Multi-channel follow-up build (GHL/Make)
- Custom chatbot from scratch (`mcp-server-builder` only if coding)

If a gap becomes frequent, search upstream for a skill first; only then create a new one with `create-skill`.
