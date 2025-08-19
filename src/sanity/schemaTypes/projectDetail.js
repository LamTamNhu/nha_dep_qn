export const projectDetailFields = [
    {
        name: 'title',
        title: 'Tiêu đề',
        type: 'string',
        validation: Rule => Rule.required()
    },
    {
        name: 'shortDescription',
        title: 'Mô tả ngắn',
        type: 'string'
    },
    {
        name: 'information',
        title: 'Thông tin',
        type: 'object',
        fields: [
            { name: 'landArea', title: 'Diện tích đất', type: 'string' },
            { name: 'constructionArea', title: 'Diện tích xây dựng', type: 'string' },
            { name: 'location', title: 'Địa điểm', type: 'string' },
            { name: 'function', title: 'Công năng', type: 'string' },
        ]
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
    },
    {
        name: 'category',
        title: 'Danh mục',
        type: 'string',
        options: {
            list: [
                { title: 'Biệt thự', value: 'mansion' },
                { title: 'Nhà phố', value: 'urbanHouse' },
                { title: 'Nhà vườn', value: 'countryHouse' },
                { title: 'Nhà tân cổ điển', value: 'neoClassicHouse' },
                { title: 'Công trình dịch vụ', value: 'serviceBuilding' },
            ],
        },
        validation: Rule => Rule.required()
    },
    {
        name: 'gallery',
        title: 'Thư viện ảnh',
        type: 'array',
        of: [
            {
                type: 'image',
                options: { hotspot: true },
                fields: [
                    {
                        name: 'alt',
                        title: 'Alt',
                        type: 'string',
                        description: 'Tự động tạo từ tiêu đề nếu bỏ trống'
                    }
                ]
            }
        ]
    },
    {
        name: 'body',
        title: 'Nội dung',
        type: 'blockContent'
    },
    {
        name: 'seo',
        title: 'SEO',
        type: 'seo',
        options: { collapsible: true, collapsed: true },
        initialValue: (_, { document }) => ({
            title: document?.title,
            description: document?.shortDescription,
            ogImage: document?.gallery?.[0]
        })
    }
];

export default {
    name: 'projectDetail',
    title: 'Dự án',
    type: 'document',
    fields: projectDetailFields
};
