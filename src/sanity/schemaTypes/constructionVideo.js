export default {
  name: 'constructionVideo',
  title: 'Construction Video Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Tiêu đề phần video',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Mô tả',
      type: 'text'
    },
    {
      name: 'videos',
      title: 'Các video công trình (Giữ nguyên 6 video mặc định)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'youtubeUrl',
              title: 'YouTube URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
};
