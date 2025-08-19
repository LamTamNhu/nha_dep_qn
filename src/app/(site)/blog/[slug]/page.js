import { client } from '@/sanity/lib/client';
import { postBySlugQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import { mapSeoToMetadata } from '@/app/lib/seo';
import { urlFor } from '@/sanity/lib/image';

export async function generateMetadata({ params }) {
  const [doc, settings] = await Promise.all([
    client.fetch(postBySlugQuery, { slug: params.slug }),
    client.fetch(siteSettingsQuery)
  ]);
  if (!doc) return { title: 'Not found', robots: { index: false } };
  return mapSeoToMetadata({ doc, settings, path: `/blog/${doc.slug}` });
}

export default async function PostPage({ params }) {
  const doc = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!doc) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: doc.title,
    datePublished: doc._createdAt,
    dateModified: doc._updatedAt || doc._createdAt,
    image: doc.mainImage ? [urlFor(doc.mainImage).width(1200).height(630).url()] : undefined,
    author: doc.author?.name ? [{ '@type': 'Person', name: doc.author.name }] : undefined,
    mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')}/blog/${doc.slug}`
  };

  return (
    <>
      <article></article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
