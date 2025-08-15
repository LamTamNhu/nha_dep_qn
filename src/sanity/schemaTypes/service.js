export default {
    name: 'service',
    title: 'Dịch vụ',
    type: 'object',
    fields: [
        { name: 'title', title: 'Tiêu đề', type: 'string', validation: Rule => Rule.required() },
        { name: 'description', title: 'Mô tả', type: 'text', validation: Rule => Rule.required() },
        { name: 'image', title: 'Hình ảnh', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
        { name: 'alt', title: 'Alt text', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    ],
};
