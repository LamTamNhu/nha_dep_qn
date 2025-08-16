export default {
    name: 'visionSection',
    title: 'Tầm nhìn và Sứ mệnh',
    type: 'object',
    fields: [
        {
            name: 'vision',
            title: 'Tầm nhìn',
            type: 'object',
            fields: [
                {name: 'title', title: 'Tiêu đề', type: 'string'},
                {name: 'description1', title: 'Đoạn văn 1', type: 'text'},
                {name: 'description2', title: 'Đoạn văn 2', type: 'text'},
                {
                    name: 'images',
                    title: 'Hình ảnh',
                    type: 'array',
                    of: [{type: 'image', options: {hotspot: true}}],
                    validation: (Rule) => Rule.max(2),
                },
            ],
        },
        {
            name: 'mission',
            title: 'Sứ mệnh',
            type: 'object',
            fields: [
                {name: 'title', title: 'Tiêu đề', type: 'string'},
                {name: 'description1', title: 'Đoạn văn 1', type: 'text'},
                {name: 'description2', title: 'Đoạn văn 2', type: 'text'},
                {
                    name: 'images',
                    title: 'Hình ảnh',
                    type: 'array',
                    of: [{type: 'image', options: {hotspot: true}}],
                    validation: (Rule) => Rule.max(2),
                },
            ],
        },
    ],
};
