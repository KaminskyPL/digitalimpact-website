import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
klient: z.string().optional(),
			branża: z.string().optional(),
			efekt: z.string().optional(),
			kategoria: z.string().optional(),
			czas_czytania: z.string().optional(),
		}),
});

export const collections = { blog };
