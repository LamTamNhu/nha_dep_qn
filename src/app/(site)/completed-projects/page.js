import {sanityFetch} from "@/sanity/lib/live";
import { completedProjectsQuery, bannerQuery } from "@/sanity/lib/queries";
import Banner from "@/components/ui/banner";
import ProjectsFilter from "@/components/ProjectsFilter";

export default async function CompletedProject({ searchParams }) {
    const { category } = await searchParams;
    const {data: projects} = await sanityFetch({query: completedProjectsQuery});
    const {data: banner} = await sanityFetch({query: bannerQuery});
    const useDefault = banner?.completedUseDefault !== false;
    const images = (useDefault ? banner?.defaultSlides : banner?.completedSlides) || [];
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Thi công thực tế" images={images} />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <ProjectsFilter projects={projects} initialCategory={category || 'all'} />
            </div>
        </div>
    );
}
