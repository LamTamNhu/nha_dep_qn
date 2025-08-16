import Image from 'next/image';
import Link from 'next/link';
import {getCategoryTitle} from "@/lib/utils";
import {MoveUpRight} from "lucide-react";

export default function ProjectsGrid({projects = []}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {projects.length > 0 ? (
                projects.map(project => (
                    <div
                        key={project._id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-64 overflow-hidden">
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-6 space-y-3">
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
                                {project.title}
                            </h3>

                            {/* Project Details - 2 Column Grid */}
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                {/* Left Column */}
                                <div className="space-y-1">
                                    {project.landArea && (
                                        <div>Diện tích đất: <p className="font-medium">{project.landArea}</p></div>
                                    )}
                                    {project.constructionArea && (
                                        <div>Diện tích xây dựng: <p
                                            className="font-medium">{project.constructionArea}</p></div>
                                    )}
                                </div>

                                {/* Right Column */}
                                <div className="space-y-1">
                                    {project.location && (
                                        <div>Địa điểm: <p className="font-medium">{project.location}</p></div>
                                    )}
                                    {project.category && (
                                        <div>Loại hình: <p
                                            className="font-medium">{getCategoryTitle(project.category)}</p></div>
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