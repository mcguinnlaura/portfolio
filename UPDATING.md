# Updating This Site

This site auto-deploys from GitHub. **Any change you want live has to reach the `main` branch** — that's what triggers Cloudflare to rebuild and redeploy (takes ~1–2 minutes).

## Two ways to make changes

**1. Edit on GitHub (easiest for small text edits)**

1. Open the file on github.com (most content is in `src/data/resume.tsx`; site settings are in `src/data/config.ts`).
2. Click the pencil ✏️ icon.
3. Make your edit and click **Commit changes**.

That's it — the commit to `main` auto-deploys.

**2. Edit locally in VS Code (better for bigger changes — lets you preview first)**

```bash
git pull                 # IMPORTANT: sync with GitHub before editing
pnpm dev                 # optional: preview at localhost before pushing
# ...make your edits...
git add -A
git commit -m "what you changed"
git push                 # this triggers the deploy
```

## Where the content lives

- `src/data/resume.tsx` — bio, work, education, projects, skills
- `src/data/config.ts` — site URL, theme, fonts

## Two rules to remember

- **Don't run `npx wrangler deploy` manually.** Let the GitHub push do the deploying — a manual deploy overwrites the good auto-deployed version with whatever is on your computer.
- **Always `git pull` before editing locally.** Otherwise you're working on an old version and will create conflicts.

## Checking a deploy

In the Cloudflare dashboard: **Workers & Pages → astrofolio → Deployments**. The top row with the blue marker is what's currently live.
