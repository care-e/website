/**
 * Prefixes a root-relative path with the configured `base`, so the site works both at
 * a subpath (e.g. https://care-e.github.io/website/) and at the root of a custom domain.
 */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('/') ? `${base}${path}` : path;
}
