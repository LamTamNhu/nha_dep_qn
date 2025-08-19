import { client } from '../sanity/lib/client.js';
import { newsSlugsQuery, projectSlugsQuery } from '../sanity/lib/queries.js';

export default async function sitemap() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const [news, projects] = await Promise.all([
    client.fetch(newsSlugsQuery),
    client.fetch(projectSlugsQuery)
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
