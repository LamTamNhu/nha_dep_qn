import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { visualEditingClient } from '@/sanity/lib/live'

const clientWithToken = visualEditingClient.withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
})

export async function GET(request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  )

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  draftMode().enable()

  redirect(redirectTo)
}