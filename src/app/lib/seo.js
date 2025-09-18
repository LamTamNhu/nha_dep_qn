export function mapSeoToMetadata({ doc, settings, path }) {
  const base = (settings?.baseUrl || process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const siteName = settings?.siteName || 'Website';
  const d = doc?.seo || {};
  const fallback = settings?.defaultSeo || {};

  // derive path if not passed in
  const slug = typeof doc?.slug === 'string' ? doc.slug : doc?.slug?.current;
  const segment = doc?._type === 'completedProject' ? 'completed-projects' : 'projects';
  const derivedPath = slug ? `/${segment}/${slug}` : '';
  const canonicalPath = path || derivedPath;

  const title = d.title || doc?.title || fallback.title || siteName;
  const description = d.description || doc?.excerpt || doc?.shortDescription || fallback.description || '';
  const canonical = d.canonical || (canonicalPath ? `${base}${canonicalPath}` : base);

  const img = d.ogImage || doc?.mainImage || doc?.thumbnail || fallback.ogImage;
  const images = img ? [{
    url: urlFrom(img),
    width: 1200,
    height: 630,
    alt: (img.alt || title)
  }] : [];

  const robots = {
    index: d.noIndex ? false : settings?.robots?.index !== false,
    follow: d.noFollow ? false : settings?.robots?.follow !== false
  };

  return {
    metadataBase: base ? new URL(base) : undefined,
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      siteName,
      title,
      description,
      url: canonical,
      images
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.length ? [images[0].url] : undefined
    },
    robots
  };
}

function urlFrom(img) {
  try {
    const { urlFor } = require('../../sanity/lib/image');
    return urlFor(img).width(1200).height(630).fit('crop').url();
  } catch {
    return undefined;
  }
}
