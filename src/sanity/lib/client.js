import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId} from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn: true,
  stega: {studioUrl: '/admin'},
})
