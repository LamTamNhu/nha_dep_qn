import {sanityFetch} from '../sanity/lib/live.js';
import { siteSettingsQuery } from '../sanity/lib/queries.js';

export default async function robots() {
  const {data: settings} = await sanityFetch({
    query: siteSettingsQuery,
    perspective: 'published',
    stega: false,
  });
  const base = (settings?.baseUrl || process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const allow = settings?.robots?.index !== false;

  return {
    rules: { userAgent: '*', allow: allow ? '/' : '', disallow: allow ? '' : '/' },
    sitemap: base ? `${base}/sitemap.xml` : undefined
  };
}
