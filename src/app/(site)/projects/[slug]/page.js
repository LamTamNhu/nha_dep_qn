import ProjectDetailPage, {
  generateMetadata,
  generateStaticParams,
} from "@/components/ProjectDetailPage"

export { generateMetadata, generateStaticParams }

export default function ProjectsPage({ params }) {
  return <ProjectDetailPage params={params} />
}
