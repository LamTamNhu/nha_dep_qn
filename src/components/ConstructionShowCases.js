'use client';
import * as React from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

// ✅ Component con để gọi hook đúng cách
function ProjectImage({ project }) {
    const imageProps = useNextSanityImage(client, project.thumbnail);

    return (
        <a
            href={project.link || '#'}
            className="group aspect-[3/2] bg-gray-200 rounded-2xl overflow-hidden relative block"
        >
            {imageProps ? (
                <Image
                    {...imageProps}
                    alt={project.title || "Project image"}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="bg-gray-400 w-full h-full" />
            )}

            <div className="absolute text-center flex flex-col justify-center items-center inset-0 bg-orange-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="text-white text-xl font-semibold px-4">
                    {project.title || "Dự án"}
                </div>
                <div className="text-black text-md font-normal px-4">
                    {project.description || ""}
                </div>
                {project.link && (
                    <span className="mt-2 text-white font-semibold">Xem thêm</span>
                )}
            </div>
        </a>
    );
}

export default function ConstructionShowCases({ data }) {
    const designSection = data?.find((section) => section.id === "construction");
    const title = designSection?.titleAndDescription?.title || "Thi công thực tế";
    const description =
        designSection?.titleAndDescription?.description ||
        "Mỗi năm, NHÀ ĐẸP QUẢNG NAM thực hiện hàng trăm công trình thiết kế ở mọi miền đất nước. Phong cách thiết kế chính là hiện đại - tối giản - tiện nghi - thông thoáng. Ngoài ra, những ý tưởng và sở thích của gia chủ cũng được ưu tiên hàng đầu, để tạo nên một công trình nhà ở độc bản, mang đậm dấu ấn cá nhân.";
    const projects = designSection?.projects || [];

    return (
        <section className="py-12 px-4 md:px-10 bg-white">
            <div className="max-w-370 grid grid-cols-1 md:grid-cols-4 gap-8 items-end ml-auto">
                {/* Images Grid */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 slide-in-right">
                    {projects.map((project, index) => (
                        <ProjectImage key={index} project={project} />
                    ))}
                </div>

                {/* Text Column */}
                <div className="md:col-span-1 flex flex-col h-full">
                    <div>
                        <SectionHeading>{title}</SectionHeading>
                        <p className="text-base mb-8 leading-relaxed text-black whitespace-pre-line">
                            {description}
                        </p>
                    </div>
                    <a
                        href="/completed-projects/"
                        className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 w-max"
                    >
                        Xem thêm <ArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    );
}
