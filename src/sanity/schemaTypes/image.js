export default {
    name: 'imageAndThumbnail',
    title: 'Hình ảnh',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Tiêu đề / Alt (giữ nguyên)',
            type: 'string'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {hotspot: true}
        }
    ]
}