export default {
    name: 'aboutHeroSection',
    type: 'object',
    title: 'Hero Section',
    fields: [
        {name: 'title', type: 'string', title: 'Tiêu đề'},
        {name: 'companyName', type: 'string', title: 'Tên công ty'},
        {
            name: 'descriptions',
            type: 'array',
            title: 'Đoạn mô tả',
            of: [{type: 'text'}]
        },
        {name: 'image', type: 'image', title: 'Ảnh'},
        {name: 'imageAlt', type: 'string', title: 'Mô tả ảnh'}
    ]
};
