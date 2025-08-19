'use client'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {table} from '@sanity/table'
import {defineDocuments, defineLocations, presentationTool} from 'sanity/presentation'
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {structure} from '@/sanity/structure'
import {schemas} from "@/sanity/schemaTypes";
export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
    schema: schemas,
    plugins: [
      structureTool({structure}),
      visionTool({defaultApiVersion: apiVersion}),
      table(),
      presentationTool({
        previewUrl: {
          origin: process.env.NEXT_PUBLIC_SITE_URL,
          previewMode: {
            enable: '/api/draft-mode/enable',
          },
        },
        resolve: {
          mainDocuments: defineDocuments([
            // Pages
            {
              route: '/',
              filter: `_type == "homepage"`,
            },
            {
              route: '/about',
              filter: `_type == "aboutPage"`,
            },
            {
              route: '/services',
              filter: `_type == "servicesPage"`,
            },

            // Projects
            {
              route: '/projects/:slug',
              filter: `_type == "projectDetail" && slug.current == $slug`,
            },
            {
              route: '/completed-projects/:slug',
              filter: `_type == "completedProject" && slug.current == $slug`,
            },

            // News
            {
              route: '/news/:slug',
              filter: `_type == "news" && slug.current == $slug`,
            },

            // Services (if they have individual pages)
            {
              route: '/services/:slug',
              filter: `_type == "service" && slug.current == $slug`,
            },
          ]),

          locations: {
            // Settings documents (appear on all pages)
            siteSettings: defineLocations({
              message: 'This document is used for global site settings',
              tone: 'positive',
            }),
            contactSettings: defineLocations({
              message: 'This document is used for contact information across the site',
              tone: 'positive',
            }),
            footerSettings: defineLocations({
              message: 'This document is used for footer content across the site',
              tone: 'positive',
            }),

            // Homepage sections
            homepage: defineLocations({
              select: {
                title: 'title',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'Homepage',
                    href: '/',
                  },
                ],
              }),
            }),

            // About page sections
            aboutPage: defineLocations({
              select: {
                title: 'title',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'About Page',
                    href: '/about',
                  },
                ],
              }),
            }),

            aboutHeroSection: defineLocations({
              message: 'This section appears on the About page',
              tone: 'positive',
            }),

            visionSection: defineLocations({
              message: 'This section appears on the About page',
              tone: 'positive',
            }),

            teamSection: defineLocations({
              message: 'This section appears on the About page',
              tone: 'positive',
            }),

            commitments: defineLocations({
              message: 'This section appears on the About page',
              tone: 'positive',
            }),

            officePictures: defineLocations({
              message: 'These images appear on the About page',
              tone: 'positive',
            }),

            coreValues: defineLocations({
              message: 'This section appears on the About page',
              tone: 'positive',
            }),

            // Services
            servicesPage: defineLocations({
              select: {
                title: 'title',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'Services Page',
                    href: '/services',
                  },
                ],
              }),
            }),

            service: defineLocations({
              select: {
                title: 'title',
                slug: 'slug.current',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'Service',
                    href: `/services/${doc?.slug}`,
                  },
                  {
                    title: 'Services Page',
                    href: '/services',
                  },
                ],
              }),
            }),

            // Projects
            projectDetail: defineLocations({
              select: {
                title: 'title',
                slug: 'slug.current',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'Project',
                    href: `/projects/${doc?.slug}`,
                  },
                  {
                    title: 'Projects Page',
                    href: '/projects',
                  },
                ],
              }),
            }),

            completedProject: defineLocations({
              select: {
                title: 'title',
                slug: 'slug.current',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'Completed Project',
                    href: `/completed-projects/${doc?.slug}`,
                  },
                  {
                    title: 'Completed Projects Page',
                    href: '/completed-projects',
                  },
                ],
              }),
            }),

            // News
            news: defineLocations({
              select: {
                title: 'title',
                slug: 'slug.current',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'News Article',
                    href: `/news/${doc?.slug}`,
                  },
                  {
                    title: 'News Page',
                    href: '/news',
                  },
                ],
              }),
            }),

            // Content components that appear on multiple pages
            partner: defineLocations({
              select: {
                name: 'name',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: `Partner: ${doc?.name || 'Unnamed'}`,
                    href: '/',
                  },
                ],
              }),
            }),

            testimonial: defineLocations({
              select: {
                name: 'customerName',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: `Testimonial: ${doc?.name || 'Customer'}`,
                    href: '/',
                  },
                ],
              }),
            }),

            process: defineLocations({
              select: {
                title: 'title',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: `Process: ${doc?.title || 'Step'}`,
                    href: '/',
                  },
                ],
              }),
            }),

            constructionVideo: defineLocations({
              select: {
                title: 'title',
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: `Video: ${doc?.title || 'Construction Video'}`,
                    href: '/',
                  },
                ],
              }),
            }),
          },
        },
      })
    ],
  })
