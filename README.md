<div align="center">
    <a href="https://wp.straight-line.org"><h1 align="center">WORKING PROGRESS</h1></a>

It's our working progress, it's not our work in progress since if our work on our project isn’t finished yet, it’s not our working progress but out work in progress.

</div>

<br/>

[Deploy with Vercel](https://vercel.com/new/prof-nota/clone?teamCreateStatus=hidden&demo-title=Prof.+NOTA%27s+Working+Progress&demo-description=It%27s%20my%20working%20progress,%20it%27s%20not%20my%20work%20in%20progress%20since%20if%20my%20work%20on%20my%20project%20isn%E2%80%99t%20finished%20yet,%20it%E2%80%99s%20not%20my%20%E2%80%9Cworking%20progress%E2%80%9D%20but%20my%20%E2%80%9Cwork%20in%20progress.%E2%80%9D&demo-url=https%3A%2F%2Fwp.straight-line.org%2F&demo-image=https://prompt.straight-line.org/prof-nota-v.1.20.jpg&project-name=Prof.+NOTA's+Working+Progress&repository-name=working-progress&repository-url=https%3A%2F%2Fgithub.com%2Fmyreceiptt%2Fworking-progress&teamSlug=clone)

---
---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)

  - ~~example alternatives: 22.x / 20.x (adjust if platform requires)~~

- Package manager:

  - **PNPM** (lockfile: `pnpm-lock.yaml`)
  - ~~Yarn (lockfile: `yarn.lock`)~~
  - ~~NPM (lockfile: `package-lock.json`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:

   - `pnpm outdated`
   - ~~yarn outdated~~
   - ~~npm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `pnpm update`
   - ~~yarn upgrade~~
   - ~~npm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `pnpm audit --audit-level=moderate`
   - ~~yarn audit --level moderate~~
   - ~~npm audit~~
   - `pnpm run build`
   - ~~yarn build~~
   - ~~npm run build~~

4. Deploy:

   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples:

- Node major version
- Next.js / React major version
- Tailwind CSS major version
- Package manager major version

---

---

## Running Locally

```sh-session
git clone https://github.com/myreceiptt/working-progress.git
cd working-progress
```

Create a `.env` file similar to [`.env.example`](https://github.com/myreceiptt/working-progress/blob/main/.env.example).

Then install dependencies and run the development server:

```sh-session
pnpm install
pnpm dev
```

## Cloning / Forking

Please remove all of our personal information (projects, images, etc.) before deploying your own version of this site.
