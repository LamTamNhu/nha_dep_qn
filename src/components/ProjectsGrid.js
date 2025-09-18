"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MoveUpRight } from "lucide-react"

export default function ProjectsGrid({ projects = [] }) {
    const pathname = usePathname()
    // Determine the base path
    const basePath = pathname?.includes("completed-projects")
        ? "/completed-projects"
        : "/projects"

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto max-w-6xl">
            {projects.length > 0 &&
                projects.map((project) => {
                    const projectLink = `${basePath}/${project.slug}`

                    return (
                        <div
                            key={project._id}
                            className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group h-fit flex flex-col"
                        >
                            {/* Image Section */}
                            <Link
                                href={projectLink}
                                className="relative h-85 flex-shrink-0 overflow-hidden"
                            >
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                            </Link>

                            {/* Content Section */}
                            <div className="p-4 flex flex-col justify-center flex-grow">
                                <div className="mb-2">
                                    <Link href={projectLink}>
                                        <h3 className="text-md h-10 text-left font-semibold text-gray-900 leading-tight line-clamp-2">
                                            {project.title}
                                        </h3>
                                    </Link>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                                    <div className="text-left truncate">
                                        <span className="font-semibold">Diện tích: </span>
                                        <span>{project?.landArea}</span>
                                    </div>
                                    <div className="text-left truncate">
                                        <span className="font-semibold">Địa điểm: </span>
                                        <span>{project?.location}</span>
                                    </div>
                                    <div className="text-left col-span-2 h-12">
                                        <span className="font-semibold">Công năng: </span>
                                        <span>{project?.function}</span>
                                    </div>
                                </div>

                                {!project.landArea &&
                                    !project.constructionArea &&
                                    !project.location &&
                                    !project.category &&
                                    project.shortDescription && (
                                        <div className="mb-4 flex-grow">
                                            <p className="text-sm text-gray-600 line-clamp-3">
                                                {project.shortDescription}
                                            </p>
                                        </div>
                                    )}

                                <div className="mt-auto">
                                    <Link
                                        href={projectLink}
                                        className="inline-flex text-white text-center w-40 justify-center gap-2 bg-orange-400 hover:bg-orange-300 font-medium mb-2 px-4 py-2 rounded transition-colors duration-200"
                                    >
                                        Xem thêm
                                        <span className="my-auto">
                      <MoveUpRight size={16} strokeWidth={3} />
                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
