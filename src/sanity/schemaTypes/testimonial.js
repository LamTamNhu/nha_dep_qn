export default {
    name: 'testimonial',
    title: 'Lời chứng thực',
    type: 'object',
    fields: [
        {
            name: 'quote',
            title: 'Nội dung lời cảm ơn',
            type: 'text',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'authorName',
            title: 'Tên khách hàng',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'authorInfo',
            title: 'Thông tin khách hàng (địa điểm, loại nhà)',
            type: 'string',
        },
        {
            name: 'avatar',
            title: 'Ảnh đại diện',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'link',
            title: 'Liên kết tham quan công trình',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'authorName',
            subtitle: 'authorInfo',
            media: 'avatar',
        },
    },
};
