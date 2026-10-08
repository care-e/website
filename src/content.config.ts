import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Blog posts and FAQ answers migrated from the previous care-e.ai site.
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      author: z.string().optional(),
      heroImage: image().optional(),
      heroAlt: z.string().default(''),
      categories: z.array(z.string()).default([]),
    }),
});

const faq = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    category: z.enum([
      'Company',
      'Support and Implementation',
      'Technology, Integrations and Security',
      'Industry Terms',
      'General',
    ]),
    order: z.number(),
  }),
});

export const collections = { blog, faq };
