import {sanityFetch} from '@/sanity/lib/live';
import { newsSlugsQuery, projectSlugsQuery } from '@/sanity/lib/queries';

export default async function sitemap() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const [{data: news}, {data: projects}] = await Promise.all([
    sanityFetch({query: newsSlugsQuery, perspective: 'published', stega: false}),
    sanityFetch({query: projectSlugsQuery, perspective: 'published', stega: false})
  ]);

  const staticRoutes = ['', '/about', '/services', '/projects', '/contact', '/news'].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date().toISOString()
  }));

  const newsRoutes = (news || []).map((n) => ({
    url: `${base}/news/${n.slug}`,
    lastModified: n._updatedAt
  }));

  const projectRoutes = (projects || []).map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: p._updatedAt
  }));

  return [...staticRoutes, ...newsRoutes, ...projectRoutes];
}
