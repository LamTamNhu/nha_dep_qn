export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    { name: 'title', title: 'Meta title', type: 'string', validation: r => r.max(60) },
    { name: 'description', title: 'Meta description', type: 'text', rows: 3, validation: r => r.max(160) },
    { name: 'canonical', title: 'Canonical URL (override)', type: 'url' },
    {
      name: 'ogImage',
      title: 'Open Graph image (1200×630)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    },
    { name: 'noIndex', title: 'Noindex', type: 'boolean' },
    { name: 'noFollow', title: 'Nofollow', type: 'boolean' },
    { name: 'keywords', title: 'Keywords (optional)', type: 'array', of: [{ type: 'string' }] }
  ],
  preview: {
    select: { title: 'title', description: 'description', media: 'ogImage' },
    prepare: ({ title, description, media }) => ({
      title: title || 'Untitled',
      subtitle: description ? (description.length > 80 ? description.slice(0, 77) + '…' : description) : 'No description',
      media
    })
  }
}
