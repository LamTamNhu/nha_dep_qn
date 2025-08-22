import {sanityFetch} from "@/sanity/lib/live";
import {projectsQuery, bannerQuery, projectCategoriesQuery} from "@/sanity/lib/queries";
import Banner from "@/components/ui/banner";
import ProjectsFilter from "@/components/ProjectsFilter";

export default async function ProjectsPage({ searchParams }) {
    const { category } = await searchParams;
    const [{data: projects}, {data: banner}, {data: categories}] = await Promise.all([
        sanityFetch({query: projectsQuery}),
        sanityFetch({query: bannerQuery}),
        sanityFetch({query: projectCategoriesQuery})
    ]);
    const useDefault = banner?.projectsUseDefault !== false;
    const images = (useDefault ? banner?.defaultSlides : banner?.projectsSlides) || [];
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Dự án" images={images} />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <ProjectsFilter projects={projects} categories={categories} initialCategory={category || 'all'} />
            </div>
        </div>
    );
}

