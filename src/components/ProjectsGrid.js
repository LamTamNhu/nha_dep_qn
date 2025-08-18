import Image from 'next/image';
import Link from 'next/link';
import {getCategoryTitle} from "@/lib/utils";
import {MoveUpRight} from "lucide-react";

export default function ProjectsGrid({projects = []}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl">
            {projects.length > 0 ? (
                projects.map(project => (
                    <div
                        key={project._id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group h-[480px] flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-64 overflow-hidden flex-shrink-0">
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
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            {/* Title */}
                            <div className="mb-3">
                                <Link
                                    href={`/projects/${project.slug}`}
                                >
                                    <h3 className="text-md text-left font-semibold text-gray-900 leading-tight line-clamp-2">
                                        {project.title}
                                    </h3>
                                </Link>
                            </div>

                            {/* Project Details - 2 Column Grid */}
                            <div className="flex gap-6 text-sm text-gray-600 mb-4 flex-grow">
                                {/* Left Column */}
                                <div className="flex flex-col space-y-1 text-left flex-1">
                                    {project.landArea && (
                                        <p>Diện tích đất: {project.landArea}</p>
                                    )}
                                    {project.constructionArea && (
                                        <p>Diện tích xây dựng: {project.constructionArea}</p>
                                    )}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col space-y-1 text-left flex-1">
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
                                <div className="mb-4 flex-grow">
                                    <p className="text-sm text-gray-600 line-clamp-3">{project.shortDescription}</p>
                                </div>
                            )}

                            {/* CTA Button */}
                            <div className="mt-auto">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="inline-flex text-white text-center w-50 justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-medium px-4 py-2 rounded transition-colors duration-200"
                                >
                                    Xem thêm
                                    <span><MoveUpRight size={16} strokeWidth={3}/></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : null}
        </div>
    );
}