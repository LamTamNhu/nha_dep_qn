export default {
  name: 'homepage',
  type: 'document',
  title: 'Trang chủ',
  fields: [
    {
      name: 'title',
      title: 'Video banner homepage',
      type: 'youtubeEmbed'
    },
    {
      name: 'introHeading',
      type: 'string',
      title: 'Tiêu đề giới thiệu',
    },
    {
      name: 'introDescription',
      type: 'text',
      title: 'Mô tả giới thiệu',
    },
    {
      name: 'coreValues',
      type: 'array',
      title: 'Giá trị cốt lõi / Sứ mệnh / Tầm nhìn',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Tiêu đề' },
            { name: 'description', type: 'text', title: 'Nội dung' },
            { name: 'iconName', type: 'string', title: 'Tên icon (Lucide)' },
          ],
        },
      ],
    },
    {
      name: 'whyChooseUs',
      type: 'array',
      title: 'Vì sao chọn chúng tôi',
      of: [
        { name: 'reason', type: 'text', title: 'Lý do' },
      ],
    },
    {
      name: 'designProjects',
      type: 'array',
      title: 'Công trình thiết kế',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Hình ảnh' },
            { name: 'title', type: 'string', title: 'Tiêu đề' },
            { name: 'description', type: 'text', title: 'Mô tả' },
          ],
        },
      ],
    },
    {
      name: 'executionProjects',
      type: 'array',
      title: 'Thi công thực tế',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Hình ảnh' },
            { name: 'title', type: 'string', title: 'Tiêu đề' },
            { name: 'description', type: 'text', title: 'Mô tả' },
          ],
        },
      ],
    },
    {
      name: 'testimonial',
      type: 'object',
      title: 'Cảm nhận khách hàng',
      fields: [
        { name: 'quote', type: 'text', title: 'Trích dẫn' },
        { name: 'author', type: 'string', title: 'Người nhận xét' },
        { name: 'link', type: 'url', title: 'Liên kết tham khảo' },
        { name: 'avatar', type: 'image', title: 'Ảnh đại diện' },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Trang chủ (singleton)',
      };
    },
  },
};
