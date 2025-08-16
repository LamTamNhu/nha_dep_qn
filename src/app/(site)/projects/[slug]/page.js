import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery, contactFormQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import ContactForm from '@/components/ContactForm';
import ProjectGallery from '@/components/ProjectGallery';
import { Facebook, Youtube } from 'lucide-react';

export async function generateStaticParams() {
    const slugs = await client.fetch(projectSlugsQuery);
    return slugs.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = params;
    const project = await client.fetch(projectBySlugQuery, { slug });
    if (!project) {
        notFound();
    }
    const contactData = await client.fetch(contactFormQuery);
    const siteSettings = await client.fetch(siteSettingsQuery);

    const { title, information, gallery, description, sections, category, _createdAt } = project;
    const categoryLabels = {
        mansion: 'Biệt thự',
        urbanHouse: 'Nhà phố',
        countryHouse: 'Nhà vườn',
        neoClassicHouse: 'Nhà tân cổ điển',
        serviceBuilding: 'Công trình dịch vụ',
    };

    return (
        <div className="min-h-screen bg-[#272727] text-white">
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
                        <h1 className="text-3xl font-bold mb-2">{title}</h1>
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
                            <span className="text-sm text-gray-400">{new Date(_createdAt).toLocaleDateString('vi-VN')}</span>
                        </div>
                        {information && (
                            <div className="space-y-1 mb-8">
                                {information.shortDescription && <p>{information.shortDescription}</p>}
                                {information.location && <p>Địa điểm: {information.location}</p>}
                                {information.floors && <p>Số tầng: {information.floors}</p>}
                                {information.landArea && <p>Diện tích đất: {information.landArea}</p>}
                                {information.constructionArea && <p>Diện tích xây dựng: {information.constructionArea}</p>}
                                {information.cost && <p>Chi phí: {information.cost}</p>}
                            </div>
                        )}
                        {gallery && gallery.length > 0 && (
                            <div className="mb-8">
                                <ProjectGallery images={gallery} />
                            </div>
                        )}
                        {description && <p className="mb-8 whitespace-pre-line">{description}</p>}
                        {sections && sections.length > 0 && (
                            <div className="space-y-12">
                                {sections.map((section, idx) => (
                                    <div key={idx}>
                                        {section.image && (
                                            <div className="mb-4">
                                                <Image
                                                    src={section.image.url}
                                                    alt={section.image.alt || title}
                                                    width={800}
                                                    height={600}
                                                    className="w-full h-auto"
                                                />
                                                {section.imageSubtitle && (
                                                    <p className="text-sm italic mt-2">{section.imageSubtitle}</p>
                                                )}
                                            </div>
                                        )}
                                        {section.content && (
                                            <p className="whitespace-pre-line">{section.content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="md:col-span-1">
                        <div className="sticky top-4">
                            <ContactForm data={contactData} compact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
