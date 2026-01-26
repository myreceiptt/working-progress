# Prof. NOTA's Working Progress

[WORKING PROGRESS](https://nota.endhonesa.com)

It's our working progress, it's not our work in progress since if our work on our project isn’t finished yet, it’s not our working progress but out work in progress.

## About This Repo

`working-progress` is our living public hub: a portfolio, a changelog, and a Web3-ready product surface that documents what we ship while remaining production-safe.

It combines narrative content (stories, project receipts, progress milestones, and long-form logs) with an onchain “Receipt” flow that can be used for access, check-ins, and verifiable artifacts.

### What We Ship Here

- **Living archive**: `stories/`, `projects/`, `progresses/`, and `loggers/` are authored as MDX and rendered as first-class pages.
- **Onchain receipts**: users can preview and mint receipts (NFT) from the UI; admins can manage receipt metadata.
- **Multichain wallet access**: connect flows support multiple wallets and networks, with chain-aware contract selection.
- **Server-side signing**: receipt mints are authorized via an API route that signs typed data (EIP-712) and then sends the transaction from the user wallet.

### Blockchains & Networks

This repo is designed as a **multichain EVM** app across:

- **Base Mainnet**
- **Base Sepolia**
- **Ethereum Mainnet**
- **OP Mainnet (Optimism)**
- **Celo Mainnet**
- **Monad**

Chain selection and contract addresses are configured via environment variables (public + server scopes), and the UI adapts to the connected wallet’s chain.

### Technology Used

- **Next.js** (App Router + API routes) + **React** + **TypeScript**
- **Tailwind CSS** for styling and design consistency
- **thirdweb SDK** for wallet connections and contract interactions (including in-app wallet via email/passkey)
- **viem** for server-side chain/rpc handling and typed-data signing utilities
- **MDX pipeline** via `next-mdx-remote` (RSC) with `remark-gfm`, `rehype-pretty-code`, and **Shiki** for syntax highlighting
- **Vercel**-friendly runtime patterns (Node **24.x**, pnpm **10.x**, production-safe builds)

### How We Build (Quality & Practice)

- **Build in public**: this repo acts as a transparent record of shipping progress and the ideas behind it.
- **Evergreen discipline**: we keep dependencies, tooling, and Node runtime current (without introducing feature drift) using the Prof. NOTA Evergreen Standard.
- **Reproducible delivery**: pinned runtime, deterministic installs via lockfile, and routine `audit` / `lint` / `build` checks.
- **Chain-aware safety**: contract addresses are explicit per chain and the app refuses actions when a chain is unsupported or unconfigured.

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
