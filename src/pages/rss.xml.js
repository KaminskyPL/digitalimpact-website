import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
	const posts = await getCollection('blog');
	const blogPosts = posts
		.filter((post) => !post.id.startsWith('case-study-'))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return rss({
		title: 'Digital Impact – Blog o AI dla firm',
		description: 'Praktyczne artykuły o wdrożeniach AI, automatyzacji procesów i AI Act. Konkretnie, bez żargonu.',
		site: context.site,
		items: blogPosts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
