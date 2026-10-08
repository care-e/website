# Caree website

Built with [Astro](https://docs.astro.build). Uses [Bun](https://bun.sh) for package management and scripts. Astro itself runs on Node 24 (see `.nvmrc`).

## Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun install`          | Install dependencies                             |
| `bun run dev`          | Start the dev server at `localhost:4321`         |
| `bun run build`        | Type-check, then build the site to `./dist/`     |
| `bun run preview`      | Preview the production build locally             |
| `bun run check`        | Type-check `.astro` and `.ts` files              |
| `bun run lint`         | Lint with ESLint (`bun run lint:fix` to autofix) |
| `bun run format`       | Format with Prettier                             |
| `bun run format:check` | Verify formatting                                |

## Structure

```
public/              Static assets served as-is
src/
  components/        Reusable components (BaseHead: meta, canonical, Open Graph)
  layouts/           Page shells (BaseLayout)
  pages/             File-based routes, including robots.txt and 404
  styles/            Global CSS
  consts.ts          Site title, description and locale
```

## Before launch

- Set `site` in `astro.config.mjs` to the production URL. Canonical URLs, the sitemap and `robots.txt` depend on it.
- Fill in `SITE_DESCRIPTION` in `src/consts.ts`.
