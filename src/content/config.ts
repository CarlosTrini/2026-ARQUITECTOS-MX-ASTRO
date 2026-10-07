
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Arquitectos MX'),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Diseño y Construcción'),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum(['Residencial', 'Comercial', 'Interiorismo', 'Restauración']),
    location: z.string(),
    year: z.string(),
    area: z.string(),
    image: z.string(),
    gallery: z.array(z.string()),
    summary: z.string(),
    highlights: z.array(z.string()),
  }),
})

export const collections = { posts, projects };
