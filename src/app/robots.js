import { client } from '../sanity/lib/client.js';
import { siteSettingsQuery } from '../sanity/lib/queries.js';

export default async function robots() {
  const settings = await client.fetch(siteSettingsQuery);
  const base = (settings?.baseUrl || process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const allow = settings?.robots?.index !== false;

  return {
    rules: { userAgent: '*', allow: allow ? '/' : '', disallow: allow ? '' : '/' },
    sitemap: base ? `${base}/sitemap.xml` : undefined
  };
}
