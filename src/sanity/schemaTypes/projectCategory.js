export default {
    name: 'projectCategory',
    title: 'Danh mục dự án',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tiêu đề',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }
    ]
};
