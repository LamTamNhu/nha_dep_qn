import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsGrid({projects = []}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {projects.length > 0 ? (
                projects.map(project => (
                    <Link
                        key={project._id}
                        href={`/projects/${project.slug}`}
                        className="relative bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                    >
                        <div className="relative w-full h-80 overflow-hidden">
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={700}
                                    height={700}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-lg font-semibold text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.title}
                                </h3>
                                {project.shortDescription && (
                                    <p className="text-md text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 mt-2 px-4">
                                        {project.shortDescription}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="text-center text-gray-600 col-span-full">Không tìm thấy dự án nào.</p>
            )}
        </div>
    );
}
