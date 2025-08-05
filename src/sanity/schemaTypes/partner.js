export default {
    name: 'partner',
    title: 'Đối tác',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Tên đối tác',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'logo',
            title: 'Logo đối tác',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'logo'
        }
    }
};
