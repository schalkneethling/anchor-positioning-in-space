# Handoff: Anchor Positioning in Space

Snapshot date: 2026-09-07

## Purpose

This repository publishes **Anchor Positioning in Space**, an educational static site about CSS Anchor Positioning. It combines a four-part Starlight documentation series with two standalone interactive learning tools:

- `/playground/position-area/` — explores the `position-area` grid and generated CSS.
- `/playground/fundamentals-quiz/` — presents randomized questions about `anchor-name`, `position-anchor`, and `position-area`.

The configured production URL is `https://anchor-positioning-in-space.schalkneethling.com`.

## Stack and layout

- **Astro 6** provides the site build and file-based routes.
- **Starlight 0.38** renders the documentation collection and its navigation.
- **pnpm** is the intended package manager, indicated by `pnpm-lock.yaml` and `pnpm-workspace.yaml`. `README.md` currently shows equivalent `npm` commands.
- **TypeScript strict configuration** comes from Astro's strict preset.
- `@tsparticles/confetti` provides the quiz completion effect; `sharp` is a direct dependency used for image processing.

| Location | Responsibility |
| --- | --- |
| `astro.config.mjs` | Site URL, Starlight configuration, sidebar, custom CSS, static head metadata, edit links, and Umami analytics script. |
| `src/content.config.ts` | Declares the Starlight docs collection. |
| `src/content/docs/parts/*.mdx` | The four ordered articles: fundamentals, precise control, fallbacks, scoping and visibility. |
| `src/pages/index.astro` | Custom landing page linking the series and both tools. |
| `src/pages/playground/position-area.astro` | Page shell for the `position-area` tool. |
| `src/components/PositionAreaPlayground.astro` | Tool UI, interaction state, feature detection, live anchor-positioned stage, and generated-CSS display. |
| `src/pages/playground/fundamentals-quiz.astro` | Page shell for the quiz. |
| `src/components/FundamentalsQuiz.astro` | Quiz scenarios, answer evaluation, native-feature detection, and completion confetti. |
| `src/components/SiteHead.astro` | Shared canonical, favicon, Open Graph, and Twitter metadata for custom Astro pages. |
| `src/styles/space-theme.css` | Shared space-themed Starlight/custom-page styling. |
| `public/` | Favicons, web-manifest icons, and social-share image copied directly to the output. |
| `dist/` | Generated Astro output; it is ignored and should be rebuilt, not edited. |

The Starlight sidebar lists the four series parts plus the `position-area` playground. The quiz is reachable from the landing page and the playground navigation, but is not a sidebar item.

## Setup and local commands

Use Node.js `>=22.12.0`, which is the installed Astro package's declared engine range. The environment used for this handoff had Node `v24.20.0` and pnpm `11.10.0`.

```sh
git clone https://github.com/schalkneethling/anchor-positioning-in-space.git
cd anchor-positioning-in-space
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

The corresponding scripts are also available through `npm run dev`, `npm run build`, and `npm run preview`, as documented in `README.md`.

Astro pages that use CSS Anchor Positioning deliberately check browser support with `CSS.supports()` in their client-side code. Use a browser with Anchor Positioning support when validating the live playground and quiz; unsupported browsers should receive the component's fallback messaging rather than the interactive anchored view.

There is no test, lint, typecheck, CI, deployment, or environment-template configuration in the tracked files. A production build is the available repository-level verification command.

## Current repository state

At the start of this handoff work, `main` was at `8c9e730` (`Merge pull request #3 from schalkneethling/codex/fundamentals-quiz`), matching `origin/main`. The latest feature merged into `main` added the Fundamentals Quiz. The remote is:

```text
https://github.com/schalkneethling/anchor-positioning-in-space.git
```

The repository was initially clean. During dependency installation with pnpm 11, pnpm temporarily added `allowBuilds` placeholders to the tracked `pnpm-workspace.yaml`; this was an installation side effect, not a project decision, and it was restored. This handoff is the only source change on `codex/project-handoff`. Before the pull request is merged, check out that branch after cloning to access this document; after merging, it will be available on `main`.

Dependency installation with `pnpm install --frozen-lockfile` encountered `ERR_PNPM_IGNORED_BUILDS` for `@tsparticles/engine`, `esbuild`, and `sharp`. With pnpm 11, review/approve the required build scripts through pnpm's supported mechanism before relying on a fresh installation. This is an environment/package-manager compatibility issue observed during the handoff, not a source change.

Validation performed for this handoff: `npm run build` passed and generated eight pages, a Pagefind index, and a sitemap. It invokes the repository's Astro build script directly. `pnpm build` could not complete because its automatic installation-status check aborted in a non-TTY environment (`ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`); retry it in an interactive terminal after resolving the pnpm 11 build-script approvals.

## Decisions visible in the code

- The site uses a custom landing page and custom standalone playground pages, while the long-form content remains in Starlight's docs collection.
- The visual theme is intentionally dark, space-themed, and applied to both Starlight and custom pages via `space-theme.css`.
- Analytics is configured directly in `astro.config.mjs` with the hosted Umami script and a website ID. Do not replace it with a secret or expose unrelated credentials.
- The theme selector is deliberately suppressed by the `NoThemeSelect.astro` component.
- The interactive tools generate unique anchor names per component instance and use live CSS Anchor Positioning rather than simulating its layout in JavaScript.

## Follow-up candidates

1. Complete a clean dependency install and production-build check, resolving the pnpm 11 ignored-build-script workflow if it recurs.
2. Manually test both playgrounds in a supported browser, including the unsupported-browser paths and narrow viewport layouts.
3. Review internal links in the MDX articles. Several article introductions link to legacy-looking `/posts/...` paths, while the configured Starlight routes and sidebar use `/parts/...`; verify whether redirects exist before changing links.
4. Decide whether the Fundamentals Quiz should also be added to the Starlight sidebar for parity with the `position-area` playground.
5. Establish and document the deployment provider if it is needed for maintenance; no deployment configuration is tracked in this repository.
6. If the project gains CI, start with a reproducible pnpm install and `pnpm build`; there is no automated validation currently tracked.

## Working conventions

- Keep authored source under `src/` and public assets under `public/`; do not hand-edit `dist/` or `.astro/` generated files.
- Preserve the MIT license in `LICENSE`.
- No secrets are required for local setup. Avoid committing `.env` files; they are ignored.
- When code applies a file-size limit, preserve the repository's local safety rule: enforce it with `stat`/`lstat` before reading, then check size again after reading to guard against races and encoding differences.
