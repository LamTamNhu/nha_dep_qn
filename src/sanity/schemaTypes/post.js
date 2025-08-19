export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    },
    { name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'seo', title: 'SEO', type: 'seo', options: { collapsible: true, collapsed: true } },
    { name: 'body', title: 'Body', type: 'blockContent' }
  ]
}
