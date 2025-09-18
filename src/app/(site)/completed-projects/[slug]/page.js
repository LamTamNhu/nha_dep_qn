import ProjectDetailPage, {
  generateMetadata,
  generateStaticParams,
} from "@/components/ProjectDetailPage"

export { generateMetadata, generateStaticParams }

export default function CompletedProjectsPage({ params }) {
  return <ProjectDetailPage params={params} />
}
