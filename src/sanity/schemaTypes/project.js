export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => {
          if (!input) return ''
          let value = String(input).trim()

          // If a full URL is pasted, extract only the pathname
          let parsedPathname = ''
          try {
            const parsed = new URL(value)
            parsedPathname = parsed.pathname
          } catch (_) {
            // Not a full URL; continue
          }

          if (parsedPathname || value.includes('/')) {
            // Treat as URL or path; strip domain and normalize
            value = parsedPathname || value
            // Remove protocol/domain fragments if present without a valid URL parse
            value = value
              .replace(/^https?:\/\/(www\.)?/i, '') // strip protocol and www
              .replace(/^www\./i, '') // strip www when no protocol

            // If a domain is still present (e.g., nhadepquangnam.vn/du-an/...), drop it
            const firstSlashIndex = value.indexOf('/')
            if (firstSlashIndex > -1 && !value.startsWith('/')) {
              value = value.slice(firstSlashIndex)
            }

            // Remove query/hash
            value = value.split('?')[0].split('#')[0]

            // Normalize leading/trailing slashes and return path without leading/trailing '/'
            return value.replace(/^\/+|\/+$/g, '')
          }

          // Otherwise, generate a standard kebab-case slug from a title
          return value
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '')
        },
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Địa chỉ',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Diện tích (m2)',
      type: 'number',
    },
    {
      title: 'Năm thi công',
      name: 'startYear',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'NHÀ PHỐ', value: 'urbanHome' },
          { title: 'NHÀ VƯỜN', value: 'countryHome' },
          { title: 'CÔNG TRÌNH DỊCH VỤ', value: 'commercial' },
          { title: 'BIỆT THỰ', value: 'villa' },
          { title: 'NHÀ TÂN CỔ ĐIỂN', value: 'neoClassic' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectGallery',
      title: 'Hình ảnh dự án',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
}