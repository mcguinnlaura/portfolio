# Deploying to Cloudflare

This site is configured for **Cloudflare Workers** (see `wrangler.jsonc`, project
name `astrofolio`). Deploy from your own terminal. The login step opens a browser
to authorize your Cloudflare account.

## First deploy (CLI)

From this project folder:

```
pnpm install        # one time — installs dependencies locally
pnpm build          # builds to dist/
npx wrangler login  # opens a browser; click "Allow" to connect Cloudflare
npx wrangler deploy # deploys; prints a URL like https://astrofolio.<you>.workers.dev
```

Open the printed `*.workers.dev` URL to see it live.

Optional: before the first deploy, you can rename the project in `wrangler.jsonc`
(change `"name": "astrofolio"` to e.g. `"lauramcguinn"`) for a cleaner default URL.

## After any edits/updates:

```
pnpm build
npx wrangler deploy
```

For automatic deploys, push this project to a GitHub repo and connect it in the
Cloudflare dashboard (Workers & Pages -> Create -> Import a repository). Then every
push rebuilds and redeploys automatically.

## Key files
- `src/data/resume.tsx` - all your content (bio, work, education, projects, skills)
- `src/data/config.ts` - site URL, theme, fonts
- `wrangler.jsonc` - Cloudflare deploy config (project name lives here)
