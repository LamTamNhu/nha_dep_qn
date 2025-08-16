export default {
    name: 'projectDetail',
    title: 'Dự án',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tiêu đề',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'information',
            title: 'Thông tin',
            type: 'object',
            fields: [
                { name: 'shortDescription', title: 'Mô tả ngắn', type: 'string' },
                { name: 'location', title: 'Địa điểm', type: 'string' },
                { name: 'floors', title: 'Số tầng', type: 'string' },
                { name: 'landArea', title: 'Diện tích đất', type: 'string' },
                { name: 'constructionArea', title: 'Diện tích xây dựng', type: 'string' },
                { name: 'cost', title: 'Chi phí', type: 'string' },
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
            type: 'string'
        },
        {
            name: 'isCompleted',
            title: 'Thi công thực tế',
            type: 'boolean',
            initialValue: false
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
            name: 'description',
            title: 'Mô tả',
            type: 'text'
        },
        {
            name: 'sections',
            title: 'Các phần',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'content', title: 'Nội dung', type: 'text' },
                        {
                            name: 'image',
                            title: 'Hình ảnh',
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
                        },
                        { name: 'imageSubtitle', title: 'Chú thích ảnh', type: 'string' }
                    ]
                }
            ]
        }
    ]
};
