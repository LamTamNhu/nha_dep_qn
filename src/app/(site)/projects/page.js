import {client} from "@/sanity/lib/client";
import {projectsQuery} from "@/sanity/lib/queries";
import Banner from "@/components/ui/banner";
import ProjectsGrid from "@/components/ProjectsGrid";
import ProjectsFilter from "@/components/ProjectsFilter";

export default async function ProjectsPage() {
    const projects = await client.fetch(projectsQuery);
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Dự án" />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <ProjectsFilter projects={projects} />
            </div>
        </div>
    );
}

