import {sanityFetch} from "@/sanity/lib/live";
import {projectsQuery} from "@/sanity/lib/queries";
import Banner from "@/components/ui/banner";
import ProjectsFilter from "@/components/ProjectsFilter";

export default async function ProjectsPage({ searchParams }) {
    const { category } = await searchParams;
    const {data: projects} = await sanityFetch({query: projectsQuery});
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Dự án" />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <ProjectsFilter projects={projects} initialCategory={category || 'all'} />
            </div>
        </div>
    );
}

