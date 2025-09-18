import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import { urlFor } from '@/sanity/lib/image'
import {
    projectBySlugQuery,
    projectSlugsQuery,
    contactFormQuery,
    siteSettingsQuery,
} from '@/sanity/lib/queries'
import { mapSeoToMetadata } from '@/app/lib/seo'
import ContactForm from '@/components/ContactForm'
import ProjectGallery from '@/components/ProjectGallery'
import { Facebook, Share2 } from 'lucide-react'
import ProjectInformation from '@/components/ProjectInformation'

// helpers
const getSlug = (v) =>
    typeof v === 'string' ? v : Array.isArray(v) ? v[0] : v && v.current

export async function generateStaticParams() {
    const { data: slugs } = await sanityFetch({
        query: projectSlugsQuery,
        perspective: 'published',
        stega: false,
    })
    return (slugs || [])
        .map((s) => ({ slug: getSlug(s?.slug ?? s) }))
        .filter((p) => !!p.slug)
}

export async function generateMetadata({ params }) {
    const slug = getSlug(params?.slug)
    if (!slug) return { title: 'Not found', robots: { index: false } }

    const [{ data: doc }, { data: settings }] = await Promise.all([
        sanityFetch({ query: projectBySlugQuery, params: { slug } }),
        sanityFetch({ query: siteSettingsQuery }),
    ])
    if (!doc) return { title: 'Not found', robots: { index: false } }

    return mapSeoToMetadata({ doc, settings })
}

export default async function ProjectDetailPage({ params }) {
    const slug = getSlug(params?.slug)
    if (!slug) notFound()

    const { data: project } = await sanityFetch({ query: projectBySlugQuery, params: { slug } })
    if (!project) notFound()

    const { data: contactData } = await sanityFetch({ query: contactFormQuery })

    const {
        title,
        shortDescription,
        information,
        gallery,
        body,
        category,
        createdDate,
        _createdAt,
        _updatedAt,
        _type,
        mainImage,
        slug: projectSlug,
    } = project

    const isCompleted = _type === 'completedProject'
    const segment = isCompleted ? 'completed-projects' : 'projects'
    const slugStr = getSlug(projectSlug) || slug
    const publishedDate = createdDate || _createdAt
    const updatedDate = _updatedAt || publishedDate

    const categoryLabels = {
        mansion: 'Biệt thự',
        urbanHouse: 'Nhà phố',
        countryHouse: 'Nhà vườn',
        neoClassicHouse: 'Nhà tân cổ điển',
        serviceBuilding: 'Công trình dịch vụ',
    }

    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '')
    const imageUrl = mainImage ? urlFor(mainImage).width(1200).height(630).url() : undefined

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        datePublished: publishedDate,
        dateModified: updatedDate,
        image: imageUrl ? [imageUrl] : undefined,
        mainEntityOfPage: `${baseUrl}/${segment}/${slugStr}`,
    }

    return (
        <>
            <div className="min-h-screen bg-[#272727] text-white">
                <div className="container mx-auto py-10 px-6 pt-26">
                    <nav className="text-sm text-gray-400 mb-4">
                        <Link href="/" className="hover:underline">Trang chủ</Link>
                        <span className="mx-1">&gt;</span>
                        <Link href={`/${segment}`} className="hover:underline">
                            {isCompleted ? 'Thi công thực tế' : 'Dự án'}
                        </Link>
                        {category && (
                            <>
                                <span className="mx-1">&gt;</span>
                                <Link href={`/${segment}?category=${category}`} className="hover:underline">
                                    {categoryLabels[category] || category}
                                </Link>
                            </>
                        )}
                        <span className="mx-1">&gt;</span>
                        <span className="text-white">{title}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-8 max-w-screen">
                        <div className="min-w-0 flex-grow">
                            <h1 className="text-3xl font-bold mb-8">{title}</h1>

                            {gallery?.length > 0 && (
                                <div className="mb-8 w-full">
                                    <ProjectGallery images={gallery} />
                                </div>
                            )}

                            <ProjectInformation data={information} shortDescription={shortDescription} />

                            {body && (
                                <div className="prose prose-invert mb-12">
                                    <PortableText
                                        value={body}
                                        components={{
                                            block: {
                                                h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
                                                h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
                                                h3: ({ children }) => <h3 className="text-xl font-semibold my-2">{children}</h3>,
                                            },
                                            types: {
                                                image: ({ value }) => (
                                                    <Image
                                                        src={urlFor(value).width(800).url()}
                                                        alt={value.alt || title}
                                                        width={800}
                                                        height={600}
                                                        className="w-full h-auto my-4"
                                                    />
                                                ),
                                            },
                                        }}
                                    />
                                </div>
                            )}

                            <div className="mt-12 pt-8 border-t border-gray-600">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Share2 className="w-5 h-5" />
                                    Chia sẻ bài viết
                                </h3>
                                <div className="flex gap-3">
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${baseUrl}/${segment}/${slugStr}`)}&quote=${encodeURIComponent(`Xem dự án: ${title}`)}`}
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
                                        href={`https://zalo.me/share?url=${encodeURIComponent(`${baseUrl}/${segment}/${slugStr}`)}&title=${encodeURIComponent(`Xem dự án: ${title}`)}`}
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

                        <div className="flex-none mx-auto">
                            <div className="lg:sticky top-16">
                                <div className="p-4">
                                    <ContactForm data={contactData} sidebarMode={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    )
}
