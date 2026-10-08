import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Same-day posts keep the order they had on the previous site's listing.
const LEGACY_ORDER = [
  'understanding-physician-burnout-key-factors-and-how-ai-can-help',
  'ai-assisted-patient-communication-enhancing-efficiency-and-empathy-in-healthcare',
  'the-power-of-omni-channel-communications-in-enhancing-patient-engagement',
  'raising-the-standard-in-ai-powered-clinical-documentation-how-care-e-compares-to-abridge',
  'how-ai-is-transforming-clinical-documentation-improvement-cdi',
];

const rank = (id: string) => {
  const i = LEGACY_ORDER.indexOf(id);
  return i === -1 ? -1 : i;
};

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || rank(a.id) - rank(b.id),
  );
}

/** Matches the previous site's category URLs, e.g. "AIvs Competitors" -> "aivs-competitors". */
export const categorySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const categoryHref = (name: string) => `/blog/category/${categorySlug(name)}/`;

/** Every category used by at least one post, alphabetically. */
export const allCategories = (posts: Post[]) =>
  [...new Set(posts.flatMap((p) => p.data.categories))].sort((a, b) =>
    a.localeCompare(b, 'en', { sensitivity: 'base' }),
  );

/** Plain-text excerpt from the post body, about `words` words long. */
export function excerpt(post: Post, words = 32) {
  const text = (post.body ?? '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s.*$/gm, '')
    .replace(/[*_`>#]/g, '')
    .replace(/^\s*(?:-|\d+\.)\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
  const parts = text.split(' ');
  return parts.length <= words ? text : `${parts.slice(0, words).join(' ')}…`;
}

/** Up to `count` other posts, ranked by how many categories they share. */
export function relatedPosts(post: Post, posts: Post[], count = 3) {
  const mine = new Set(post.data.categories);
  return posts
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, score: p.data.categories.filter((c) => mine.has(c)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ p }) => p);
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });
