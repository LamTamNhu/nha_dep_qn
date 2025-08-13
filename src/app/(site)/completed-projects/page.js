"use client";

import Projects from "@/components/Projects";
import { client } from "@/sanity/lib/client";
import { projectsListQuery } from "@/sanity/lib/queries";
import { projectId, dataset } from "@/sanity/env";

export default async function CompletedProject() {
  const projects = projectId && dataset ? await client.fetch(projectsListQuery) : [];
  return <Projects pageTitle="Thi công thực tế" projects={projects} />;
}