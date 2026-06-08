import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import {sanityFetch} from '@/sanity/lib/live';
import { urlFor } from '@/sanity/lib/image';
import { newsBySlugQuery, newsSlugsQuery, contactFormQuery, siteSettingsQuery, recentNewsQuery, newsByCategoryQuery } from '@/sanity/lib/queries';
import { mapSeoToMetadata } from '@/app/lib/seo';
import ContactForm from '@/components/ContactForm';
import { Facebook, Youtube, Share2 } from 'lucide-react';
import PortableTextZoomImage from '@/components/PortableTextZoomImage';


export async function generateStaticParams() {
    const {data: slugs} = await sanityFetch({
        query: newsSlugsQuery,
        perspective: 'published',
        stega: false,
    });
    return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const [{data: doc}, {data: settings}] = await Promise.all([
        sanityFetch({
            query: newsBySlugQuery,
            params: { slug },
            perspective: 'published',
            stega: false,
        }),
        sanityFetch({query: siteSettingsQuery, perspective: 'published', stega: false}),
    ]);
    if (!doc) return { title: 'Not found', robots: { index: false } };
    return mapSeoToMetadata({ doc, settings, path: `/news/${doc.slug}` });
}

export default async function NewsDetailPage({ params }) {
    const { slug } = await params;
    const {data: news} = await sanityFetch({query: newsBySlugQuery, params: { slug }});
    if (!news) {
        notFound();
    }
    const [{data: contactData}, {data: siteSettings}, {data: recentNews}, {data: sameCategoryNews}] = await Promise.all([
        sanityFetch({query: contactFormQuery}),
        sanityFetch({query: siteSettingsQuery}),
        sanityFetch({query: recentNewsQuery}),
        sanityFetch({query: newsByCategoryQuery, params: { category: news.category ?? '', excludeId: news._id }}),
    ]);

    const { title, body, category, createdDate, _createdAt, _updatedAt, thumbnail } = news;
    const publishedDate = createdDate || _createdAt;
    const updatedDate = _updatedAt || publishedDate;
    const categoryLabels = {
        generalNews: 'Tin tức chung',
        activities: 'Hoạt động công ty',
    };

    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: title,
        datePublished: publishedDate,
        dateModified: updatedDate,
        image: thumbnail ? [urlFor(thumbnail).width(1200).height(630).url()] : undefined,
        mainEntityOfPage: `${baseUrl}/news/${news.slug}`
    };

    return (
        <>
        <div className="min-h-screen bg-[#272727] text-white pt-26">
            <div className="container mx-auto py-10 px-6">
                <nav className="text-sm text-gray-400 mb-4">
                    <Link href="/" className="hover:underline">Trang chủ</Link>
                    <span className="mx-1">&gt;</span>
                    <Link href="/news" className="hover:underline">Tin tức</Link>
                    {category && (
                        <>
                            <span className="mx-1">&gt;</span>
                            <span>{categoryLabels[category] || category}</span>
                        </>
                    )}
                    <span className="mx-1">&gt;</span>
                    <span className="text-white">{title}</span>
                </nav>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h1 className="text-3xl font-bold mb-8">{title}</h1>
                        <div className="flex items-center gap-4 mb-6">
                            {siteSettings?.facebook && (
                                <a href={siteSettings.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            )}
                            {siteSettings?.zalo && (
                                <a href={siteSettings.zalo} target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                                    <Image src="/images/Icon_of_Zalo.svg" alt="Zalo" width={20} height={20} />
                                </a>
                            )}
                            {siteSettings?.youtube && (
                                <a href={siteSettings.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            )}
                            <span className="text-sm text-gray-400">{new Date(publishedDate).toLocaleDateString('vi-VN')}</span>
                        </div>
                          {body && (
                              <PortableText
                                  value={body}
                                  components={{
                                      block: {
                                          normal: ({ children }) => <p>{children}</p>,
                                          h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
                                          h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
                                          h3: ({ children }) => <h3 className="text-xl font-semibold my-2">{children}</h3>,
                                          blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                                      },
                                      marks: {
                                          left: ({ children }) => <span className="block text-left w-full">{children}</span>,
                                          center: ({ children }) => <span className="block text-center w-full">{children}</span>,
                                          right: ({ children }) => <span className="block text-right w-full">{children}</span>,
                                      },
                                      types: {
                                          image: ({ value }) => (
                                              <PortableTextZoomImage value={value} fallbackAlt={title} />
                                          ),
                                          seeMore: ({ value }) => {
                                              const isManual = value.mode === 'manual';
                                              let picks = [];
                                              if (isManual) {
                                                  picks = (value.links || []).map((l) => ({
                                                      _id: l.href,
                                                      title: l.text,
                                                      href: l.href,
                                                  }));
                                              } else {
                                                  const count = value.count ?? 3;
                                                  const pool = [...(sameCategoryNews || [])];
                                                  for (let i = pool.length - 1; i > 0; i--) {
                                                      const j = Math.floor(Math.random() * (i + 1));
                                                      [pool[i], pool[j]] = [pool[j], pool[i]];
                                                  }
                                                  picks = pool.slice(0, count).map((item) => ({
                                                      _id: item._id,
                                                      title: item.title,
                                                      href: `/news/${item.slug}`,
                                                  }));
                                              }
                                              if (picks.length === 0) return null;
                                              return (
                                                  <div className="border-l-4 border-[var(--accent)] pl-4 my-4">
                                                      <p className="text-sm font-semibold text-gray-300 mb-1">&gt;&gt; Xem thêm:</p>
                                                      {picks.map((item) => (
                                                          <Link key={item._id} href={item.href} className="block text-[var(--accent)] hover:underline text-sm mb-1">
                                                              {item.title}
                                                          </Link>
                                                      ))}
                                                  </div>
                                              );
                                          },
                                      },
                                  }}
                              />
                          )}
                        <div className="mt-12 pt-8 border-t border-gray-600">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Chia sẻ bài viết
                            </h3>
                            <div className="flex gap-3">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/news/${slug}`)}&quote=${encodeURIComponent(`Xem tin tức: ${title}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group flex items-center justify-center w-10 h-10 hover:rounded-full transition-colors"
                                    aria-label="Chia sẻ lên Facebook"
                                    title="Chia sẻ Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Chia sẻ Facebook
                                    </span>
                                </a>
                                <a
                                    href={`https://zalo.me/share?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/news/${slug}`)}&title=${encodeURIComponent(`Xem tin tức: ${title}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group flex items-center justify-center w-10 h-10 hover:rounded-full transition-colors"
                                    aria-label="Chia sẻ lên Zalo"
                                    title="Chia sẻ Zalo"
                                >
                                    <Image src="/images/Icon_of_Zalo.svg" alt="Zalo" width={20} height={20} />
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Chia sẻ Zalo
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Sticky zone — ContactForm dừng khi chạm Bài đăng mới */}
                        <div className="flex-1">
                            <div className="sticky top-18">
                                <ContactForm data={contactData} sidebarMode={true} />
                            </div>
                        </div>
                        {/* Bài đăng mới cố định ở cuối sidebar */}
                        {recentNews && recentNews.length > 0 && (
                            <div>
                                <div className="bg-black px-4 py-3 mb-3">
                                    <h3 className="text-[var(--accent)] font-bold text-lg text-center">Bài đăng mới</h3>
                                </div>
                                <ul className="flex flex-col divide-y divide-gray-700">
                                    {recentNews.map((item) => (
                                        <li key={item._id}>
                                            <Link href={`/news/${item.slug}`} className="flex gap-3 py-3 hover:opacity-80 transition-opacity">
                                                {item.image ? (
                                                    <div className="relative w-16 h-16 flex-shrink-0">
                                                        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="64px" />
                                                    </div>
                                                ) : (
                                                    <div className="w-16 h-16 flex-shrink-0 bg-gray-700" />
                                                )}
                                                <span className="text-sm text-gray-200 line-clamp-3 leading-snug">{item.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
