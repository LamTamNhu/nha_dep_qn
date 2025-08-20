export default {
  name: 'siteBanner',
  type: 'document',
  title: 'Banner Slide',
  fieldsets: [
    { name: 'defaults', title: 'Mặc định', options: { collapsible: true, collapsed: false } },
    { name: 'news', title: 'Trang Tin tức', options: { collapsible: true, collapsed: true } },
    { name: 'projects', title: 'Trang Dự án', options: { collapsible: true, collapsed: true } },
    { name: 'completed', title: 'Trang Thi công thực tế', options: { collapsible: true, collapsed: true } },
    { name: 'services', title: 'Trang Dịch vụ', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    {
      name: 'defaultSlides',
      title: 'Slide mặc định',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Văn bản thay thế' }
          ]
        }
      ],
      description: 'Ảnh sử dụng mặc định cho các trang nếu không có ảnh riêng.',
      fieldset: 'defaults',
      validation: Rule => Rule.required().min(1).error('Cần tối thiểu 1 ảnh mặc định.')
    },

    // Tin tức
    {
      name: 'newsUseDefault',
      title: 'Tin tức dùng slide mặc định',
      type: 'boolean',
      initialValue: true,
      description: 'Bật để dùng ảnh mặc định thay vì ảnh riêng.',
      fieldset: 'news',
    },
    {
      name: 'newsSlides',
      title: 'Ảnh cho trang Tin tức',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Văn bản thay thế' }
          ]
        }
      ],
      hidden: ({document}) => document?.newsUseDefault,
      fieldset: 'news',
      validation: Rule => Rule.custom((value, context) => {
        if (context?.document?.newsUseDefault === false) {
          return (value && value.length > 0) || 'Vui lòng thêm ít nhất 1 ảnh cho trang Tin tức hoặc bật dùng ảnh mặc định.'
        }
        return true
      })
    },

    // Dự án
    {
      name: 'projectsUseDefault',
      title: 'Dự án dùng slide mặc định',
      type: 'boolean',
      initialValue: true,
      description: 'Bật để dùng ảnh mặc định thay vì ảnh riêng.',
      fieldset: 'projects',
    },
    {
      name: 'projectsSlides',
      title: 'Ảnh cho trang Dự án',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Văn bản thay thế' }
          ]
        }
      ],
      hidden: ({document}) => document?.projectsUseDefault,
      fieldset: 'projects',
      validation: Rule => Rule.custom((value, context) => {
        if (context?.document?.projectsUseDefault === false) {
          return (value && value.length > 0) || 'Vui lòng thêm ít nhất 1 ảnh cho trang Dự án hoặc bật dùng ảnh mặc định.'
        }
        return true
      })
    },

    // Thi công thực tế
    {
      name: 'completedUseDefault',
      title: 'Thi công thực tế dùng slide mặc định',
      type: 'boolean',
      initialValue: true,
      description: 'Bật để dùng ảnh mặc định thay vì ảnh riêng.',
      fieldset: 'completed',
    },
    {
      name: 'completedSlides',
      title: 'Ảnh cho trang Thi công thực tế',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Văn bản thay thế' }
          ]
        }
      ],
      hidden: ({document}) => document?.completedUseDefault,
      fieldset: 'completed',
      validation: Rule => Rule.custom((value, context) => {
        if (context?.document?.completedUseDefault === false) {
          return (value && value.length > 0) || 'Vui lòng thêm ít nhất 1 ảnh cho trang Thi công thực tế hoặc bật dùng ảnh mặc định.'
        }
        return true
      })
    },

    // Dịch vụ
    {
      name: 'servicesUseDefault',
      title: 'Dịch vụ dùng slide mặc định',
      type: 'boolean',
      initialValue: true,
      description: 'Bật để dùng ảnh mặc định thay vì ảnh riêng.',
      fieldset: 'services',
    },
    {
      name: 'servicesSlides',
      title: 'Ảnh cho trang Dịch vụ',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Văn bản thay thế' }
          ]
        }
      ],
      hidden: ({document}) => document?.servicesUseDefault,
      fieldset: 'services',
      validation: Rule => Rule.custom((value, context) => {
        if (context?.document?.servicesUseDefault === false) {
          return (value && value.length > 0) || 'Vui lòng thêm ít nhất 1 ảnh cho trang Dịch vụ hoặc bật dùng ảnh mặc định.'
        }
        return true
      })
    },
  ],
  preview: {
    prepare() {
      return { title: 'Banner Slide' }
    }
  }
}

