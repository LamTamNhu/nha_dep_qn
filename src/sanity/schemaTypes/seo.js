export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    { name: 'title', title: 'Tiêu đề Meta', type: 'string', validation: r => r.max(60) },
    { name: 'description', title: 'Mô tả Meta', type: 'text', rows: 3, validation: r => r.max(160) },
    { name: 'canonical', title: 'URL chuẩn (ghi đè)', type: 'url' },
    {
      name: 'ogImage',
      title: 'Ảnh Open Graph (1200×630)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
    },
    { name: 'noIndex', title: 'Không lập chỉ mục', type: 'boolean' },
    { name: 'noFollow', title: 'Không theo liên kết', type: 'boolean' },
    { name: 'keywords', title: 'Từ khóa (tùy chọn)', type: 'array', of: [{ type: 'string' }] }
  ],
  preview: {
    select: { title: 'title', description: 'description', media: 'ogImage' },
    prepare: ({ title, description, media }) => ({
      title: title || 'Không có tiêu đề',
      subtitle: description ? (description.length > 80 ? description.slice(0, 77) + '…' : description) : 'Không có mô tả',
      media
    })
  }
}
