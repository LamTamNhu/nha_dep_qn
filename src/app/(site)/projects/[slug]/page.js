import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { projectBySlugQuery, projectSlugsQuery, contactFormQuery } from '@/sanity/lib/queries';
import ContactForm from '@/components/ContactForm';
import ProjectGallery from '@/components/ProjectGallery';
import { Facebook, Share2 } from 'lucide-react';
import ProjectInformation from "@/components/ProjectInformation";

export async function generateStaticParams() {
    const slugs = await client.fetch(projectSlugsQuery);
    return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = await client.fetch(projectBySlugQuery, { slug });
    if (!project) {
        return {};
    }
    return {
        title: project.title,
        description: project.shortDescription,
    };
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = await client.fetch(projectBySlugQuery, { slug });
    if (!project) {
        notFound();
    }
    const contactData = await client.fetch(contactFormQuery);

    const { title, shortDescription, information, gallery, body, category, _createdAt } = project;
    const categoryLabels = {
        mansion: 'Biệt thự',
        urbanHouse: 'Nhà phố',
        countryHouse: 'Nhà vườn',
        neoClassicHouse: 'Nhà tân cổ điển',
        serviceBuilding: 'Công trình dịch vụ',
    };

    return (
        <div className="min-h-screen bg-[#272727] text-white pt-26">
            <div className="container mx-auto py-10 px-6">
                <nav className="text-sm text-gray-400 mb-4">
                    <Link href="/" className="hover:underline">Trang chủ</Link>
                    <span className="mx-1">&gt;</span>
                    <Link href="/projects" className="hover:underline">Dự án</Link>
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
                        {gallery && gallery.length > 0 && (
                            <div className="mb-8">
                                <ProjectGallery images={gallery} />
                            </div>
                        )}
                        <ProjectInformation data={project?.information} shortDescription={shortDescription}/>
                        {body && (
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
                        )}

                        {/* Share Section */}
                        <div className="mt-12 pt-8 border-t border-gray-600">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Chia sẻ bài viết
                            </h3>
                            <div className="flex gap-3">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/projects/${slug}`)}&quote=${encodeURIComponent(`Xem dự án: ${title}`)}`}
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
                                    href={`https://zalo.me/share?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}/projects/${slug}`)}&title=${encodeURIComponent(`Xem dự án: ${title}`)}`}
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
                    <div className="md:col-span-1">
                        <div className="sticky top-18">
                            <ContactForm data={contactData} sidebarMode={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}