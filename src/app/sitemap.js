import { client } from '../sanity/lib/client.js';
import { allPostSlugsQuery } from '../sanity/lib/queries.js';

export default async function sitemap() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const posts = await client.fetch(allPostSlugsQuery);

  const staticRoutes = ['', '/about'].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date().toISOString()
  }));

  const postRoutes = (posts || []).map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p._updatedAt
  }));

  return [...staticRoutes, ...postRoutes];
}
