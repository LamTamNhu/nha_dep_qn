import {client} from "@/sanity/lib/client";
import {projectsQuery} from "@/sanity/lib/queries";
import Banner from "@/components/ui/banner";
import ProjectsGrid from "@/components/ProjectsGrid";

export default async function ProjectsPage() {
    const projects = await client.fetch(projectsQuery, { isCompleted: false });
    return (
        <div className="min-h-screen bg-[#272727] text-white">
            <Banner title="Dự án" />
            <div className="py-20 px-6 md:px-10 container mx-auto">
                <ProjectsGrid projects={projects} />
            </div>
            <div className="pb-70 bg-[#272727]"/>
        </div>
    );
}

