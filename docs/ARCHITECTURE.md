# Working Progress Architecture Notes

This document captures the key pieces I learned while exploring the repository.

## Framework and Tooling
- **Next.js 14 App Router** powers the UI from the `app/` directory, with `app/layout.tsx` providing global metadata, font loading, and analytics instrumentation.
- **Tailwind CSS** supplies utility-first styling through `global.css` and the Tailwind configuration at the project root.
- **Contentlayer** ingests MDX entries from the `content/` directory, mapping them into typed collections (`Logger`, `Progress`, `Project`, and `Story`) configured in `contentlayer.config.js`.

## Application Shell
- `app/layout.tsx` sets comprehensive SEO metadata, loads Inter and CalSans fonts, integrates Vercel Analytics, and wraps the tree with a `ThirdwebProvider` so that web3-aware components have access to the SDK context.
- Shared visual effects such as animated particles and gradient dividers are orchestrated in `app/page.tsx`, which renders the home landing page navigation, hero heading, and Spotify embed.

## Content Model
- MDX files in `content/loggers`, `content/progresses`, `content/projects`, and `content/stories` inherit computed fields such as `path` and `slug`, enabling consistent routing and linking across the site.
- The `rehype-pretty-code`, `rehype-slug`, and `rehype-autolink-headings` plugins enrich rendered markdown with code highlighting and deep-linkable headings, while `remark-gfm` adds GitHub-flavored markdown support.

## Utilities and Styling
- Global CSS introduces a reusable `.text-edge-outline` helper and enables smooth scrolling across the experience.
- `util/` modules (e.g., `client.ts`, `mouse.ts`, and `view.ts`) centralize browser-specific helpers for detecting client environments, tracking pointer position, and observing viewport state—supporting interactive UI flourishes throughout the app.

These notes should accelerate future onboarding by summarizing how content, styling, and runtime providers come together inside the Working Progress project.
