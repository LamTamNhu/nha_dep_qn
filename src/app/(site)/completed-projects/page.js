import {sanityFetch} from "@/sanity/lib/live";
import { completedProjectsQuery, bannerQuery, projectCategoriesQuery } from "@/sanity/lib/queries";
import Banner from "@/components/ui/banner";
import ProjectsFilter from "@/components/ProjectsFilter";

export default async function CompletedProject({ searchParams }) {
    const { category } = await searchParams;
    const [{data: projects}, {data: banner}, {data: categories}] = await Promise.all([
        sanityFetch({query: completedProjectsQuery}),
        sanityFetch({query: bannerQuery}),
        sanityFetch({query: projectCategoriesQuery})
    ]);
    const useDefault = banner?.completedUseDefault !== false;
    const images = (useDefault ? banner?.defaultSlides : banner?.completedSlides) || [];
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Thi công thực tế" images={images} />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <ProjectsFilter projects={projects} categories={categories} initialCategory={category || 'all'} />
            </div>
        </div>
    );
}
