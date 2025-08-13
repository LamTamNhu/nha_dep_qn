import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

let internalClient = null

export const getClient = () => {
  if (!projectId || !dataset) return null
  if (!internalClient) {
    internalClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    })
  }
  return internalClient
}

export const client = new Proxy(
  {},
  {
    get(_target, prop, receiver) {
      const c = getClient()
      if (!c) {
        throw new Error('Sanity client not configured')
      }
      const value = Reflect.get(c, prop, receiver)
      if (typeof value === 'function') {
        return value.bind(c)
      }
      return value
    },
  }
)