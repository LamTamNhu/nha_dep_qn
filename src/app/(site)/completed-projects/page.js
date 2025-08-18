import { client } from "@/sanity/lib/client";
import { completedProjectsQuery } from "@/sanity/lib/queries";
import Banner from "@/components/ui/banner";
import ProjectsFilter from "@/components/ProjectsFilter";

export default async function CompletedProject() {
    const projects = await client.fetch(completedProjectsQuery);
    return (
        <div className="min-h-screen bg-[#272727] text-center">
            <Banner title="Thi công thực tế" />
            <div className="container mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-30">
                <ProjectsFilter projects={projects} />
            </div>
        </div>
    );
}
