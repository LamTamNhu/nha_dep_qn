export default {
    name: 'project',
    title: 'Hình ảnh',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Tiêu đề',
            type: 'string'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {hotspot: true}
        },
        {
            name: 'description',
            title: 'Mô tả',
            type: 'text',
        }
    ]
}