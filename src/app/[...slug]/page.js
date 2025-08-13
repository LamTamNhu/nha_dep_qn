import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { projectDetailQuery } from '@/sanity/lib/queries'
import Banner from '@/components/ui/banner'
import { projectId, dataset } from '@/sanity/env'

export const revalidate = 60

export async function generateStaticParams() {
  if (!projectId || !dataset) return []
  try {
    const slugs = await client.fetch(`*[_type == "project" && defined(slug.current)][].slug.current`)
    return slugs.map((s) => ({ slug: s.split('/') }))
  } catch {
    return []
  }
}

export default async function ProjectPage({ params }) {
  if (!projectId || !dataset) notFound()

  const slugParam = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
  const project = await client.fetch(projectDetailQuery, { slug: slugParam })

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#272727]">
      <Banner title={project.title} />
      <div className="container mx-auto px-6 md:px-10 py-10">
        {project.mainImageUrl && (
          <div className="relative w-full h-[400px] md:h-[540px] mb-8">
            <Image
              src={project.mainImageUrl}
              alt={project.title}
              fill
              className="object-cover rounded"
              sizes="100vw"
            />
          </div>
        )}
        {project.description && (
          <div className="prose prose-invert max-w-none">
            <p>{project.description}</p>
          </div>
        )}
        {Array.isArray(project.galleryUrls) && project.galleryUrls.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {project.galleryUrls.map((url, idx) => (
              <div key={idx} className="relative w-full aspect-square">
                <Image src={url} alt={`${project.title} ${idx + 1}`} fill className="object-cover rounded" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}