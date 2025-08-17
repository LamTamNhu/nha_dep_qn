import Image from 'next/image';
import Link from 'next/link';
import {getCategoryTitle} from "@/lib/utils";
import {MoveUpRight} from "lucide-react";

export default function ProjectsGrid({projects = []}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 max-w-6xl">
            {projects.length > 0 ? (
                projects.map(project => (
                    <div
                        key={project._id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-64 overflow-hidden">
                            {project.image && (
                                <Link
                                    href={`/projects/${project.slug}`}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Link>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-4 space-y-3">
                            {/* Title */}
                            <Link
                                href={`/projects/${project.slug}`}
                            >
                                <h3 className="text-md text-left font-semibold text-gray-900 leading-tight line-clamp-2 mb-2">
                                    {project.title}
                                </h3>
                            </Link>

                            {/* Project Details - 2 Column Grid */}
                            <div className="flex gap-2 text-sm text-gray-600">
                                {/* Left Column */}
                                <div className="flex flex-col space-y-1 text-left">
                                    {project.landArea && (
                                        <p>Diện tích đất: {project.landArea}</p>
                                    )}
                                    {project.constructionArea && (
                                        <p>Diện tích xây dựng: {project.constructionArea}</p>
                                    )}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col space-y-1 text-left">
                                    {project.location && (
                                        <p>Địa điểm: {project.location}</p>
                                    )}
                                    {project.function && (
                                        <p>Công năng: {project.function}</p>
                                    )}
                                </div>
                            </div>

                            {/* Fallback description if no details available */}
                            {!project.landArea && !project.constructionArea && !project.location && !project.category && project.shortDescription && (
                                <p className="text-sm text-gray-600 line-clamp-2">{project.shortDescription}</p>
                            )}

                            {/* CTA Button */}
                            <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex text-white items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-medium px-4 py-2 rounded transition-colors duration-200 mt-4"
                            >
                                Xem thêm
                                <span><MoveUpRight size={16} strokeWidth={3}/></span>
                            </Link>
                        </div>
                    </div>
                ))
            ) : null}
        </div>
    );
}