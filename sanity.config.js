'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {table} from '@sanity/table'
import {presentationTool} from 'next-sanity'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {structure} from '@/sanity/structure'
import {schemas} from "@/sanity/schemaTypes";
export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: schemas,
    plugins: [
      structureTool({structure}),
      // Vision is for querying with GROQ from inside the Studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({defaultApiVersion: apiVersion}),
      table(),
      presentationTool({
        previewUrl: {
          origin: process.env.NEXT_PUBLIC_SITE_URL,
          previewMode: {
            enable: '/api/draft-mode/enable',
          },
        },
      }),
    ],
  })
