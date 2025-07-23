import {defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroSlides',
      title: 'Hero slides',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'introHeading',
      title: 'Introduction heading',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Introduction text',
      type: 'text',
    }),
    defineField({
      name: 'coreValues',
      title: 'Core values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'title', type: 'string'}),
          defineField({name: 'description', type: 'text'}),
        ]
      }]
    }),
    defineField({
      name: 'chooseUsTitle',
      title: 'Why choose us title',
      type: 'string'
    }),
    defineField({
      name: 'chooseUsBullets',
      title: 'Why choose us bullets',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'designHeading',
      title: 'Design section heading',
      type: 'string',
    }),
    defineField({
      name: 'designText',
      title: 'Design section text',
      type: 'text',
    }),
    defineField({
      name: 'thiCongHeading',
      title: 'Thi cong heading',
      type: 'string',
    }),
    defineField({
      name: 'thiCongText',
      title: 'Thi cong text',
      type: 'text',
    }),
    defineField({
      name: 'testimonialHeading',
      title: 'Testimonial heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonialQuote',
      title: 'Testimonial quote',
      type: 'text',
    }),
    defineField({
      name: 'testimonialAuthor',
      title: 'Testimonial author',
      type: 'string',
    }),
    defineField({
      name: 'testimonialText',
      title: 'Testimonial text',
      type: 'text',
    }),
    defineField({
      name: 'testimonialImage',
      title: 'Testimonial image',
      type: 'image',
    }),
  ],
})
