import Image from 'next/image';
import Link from 'next/link';
import {getCategoryTitle} from "@/lib/utils";
import {MoveUpRight} from "lucide-react";

export default function ProjectsGrid({projects = []}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto max-w-6xl">
            {projects.length > 0 ? (
                projects.map(project => (
                    <div
                        key={project._id}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group h-fit flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-64 flex-shrink-0 overflow-hidden">
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
                        <div className="p-4 flex flex-col justify-center flex-grow">
                            {/* Title */}
                            <div className="mb-2">
                                <Link
                                    href={`/projects/${project.slug}`}
                                >
                                    <h3 className="text-md h-10 text-left font-semibold text-gray-900 leading-tight line-clamp-2">
                                        {project.title}
                                    </h3>
                                </Link>
                            </div>

                            {/* Project Details - 2 Column Grid */}
                            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                                {/* Left Column */}
                                <div className="flex flex-col space-y-1 text-left">
                                    <p className="truncate">Diện tích đất: {project?.landArea}</p>
                                    <p className="truncate">Diện tích xây dựng: {project?.constructionArea}</p>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col space-y-1 text-left">
                                    <p className="truncate">Địa điểm: {project?.location}</p>
                                    <p className="truncate">Công năng: {project?.function}</p>
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
                                    className="inline-flex text-white text-center w-40 justify-center gap-2 bg-orange-400 hover:bg-orange-300 font-medium px-4 py-2 rounded transition-colors duration-200"
                                >
                                    Xem thêm
                                    <span className="my-auto"><MoveUpRight size={16} strokeWidth={3}/></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : null}
        </div>
    );
}