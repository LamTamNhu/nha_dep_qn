import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/lib/queries';

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

    const { title, information, gallery, description, sections } = project;

    return (
        <div className="min-h-screen bg-[#272727] text-white">
            <div className="container mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {gallery.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img.url}
                                alt={img.alt || title}
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        ))}
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
        </div>
    );
}
