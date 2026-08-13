# Portfolio — where we left off

_Last updated: end of session, July 2, 2026_

## The short version
Your Astro portfolio (Starfolio template) is personalized, building cleanly, and
essentially deploy-ready. Most recent work has been writing/refining project
descriptions and syncing them to your Notion "Portfolio" database.

To preview it next time: open this folder in a terminal and run `pnpm dev`, then
visit http://localhost:4321.

## Current state (all done & verified)
- All ~22 project cards written, with icons, dates, tags, and links.
- Project descriptions in `src/data/resume.tsx` now **match your Notion database**.
- Projects are a **single-column** layout.
- Skill filter works: the "What I Do" pills filter the projects; "Show all" clears.
- No em dashes anywhere; site builds with 0 errors.
- Your headshot, LinkedIn, and domain (lauramcguinn.com) are all in.

## Open decisions / next steps (pick up here)
1. **Skill categories** — still deciding. Options on the table:
   - Keep 5 (Production, Design, Writing, Operations, Communications) — my rec.
   - Match your Notion's 4 (Production, Design, Writing, Operations) — drops Communications, needs re-tagging.
   - Rename Production → Programs.
2. **Magnolia Project OS card** — has no matching Notion entry; Notion instead has a
   separate "Novelly OS" that isn't on the site. Decide how to reconcile.
3. **7 Notion projects not on the site yet** — add cards for any of: Reflections on
   Careers, Grant Writing Webinar, Governor's Awards, "Thinking in Place" Email
   Initiative, Giving Tuesday Infographic, Board Welcome Packet, Novelly OS.
4. **Annual Report & Voices & Votes** — their Notion descriptions have trailing
   "[link] | [link]" text I left out (cards already show those as chips). Add inline?
5. **Years/tags not synced** — I only synced descriptions. A few differ from Notion
   (e.g., Community Leader Training is 2025 in Notion, 2024 on site). Sync those too?
6. **Deploy** — when ready, follow `DEPLOY.md` to publish to Cloudflare Pages and
   point lauramcguinn.com at it.

## Key files
- `src/data/resume.tsx` — all your content (bio, work, education, projects, skills).
- `src/data/config.ts` — site URL, theme, fonts.
- `DEPLOY.md` — how to run locally and deploy.
