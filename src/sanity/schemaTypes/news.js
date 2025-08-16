const customSlugify = (input) => {
    let slug = input.trim();
    if (slug.startsWith('http')) {
        try {
            const url = new URL(slug);
            if (url.hostname !== 'nhadepquangnam.vn') {
                return 'invalid-domain';
            }
            slug = url.pathname.replace(/^\/news\//, '').replace(/^\/+|\/+$/g, '');
        } catch {
            return 'invalid-domain';
        }
    }
    return slug
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

export default {
    name: 'news',
    title: 'Tin tức',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tiêu đề',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: customSlugify,
            },
            validation: Rule => Rule.required().custom(slug => {
                if (slug?.current === 'invalid-domain') {
                    return 'URL phải thuộc tên miền nhadepquangnam.vn';
                }
                return true;
            }),
        },
        {
            name: 'category',
            title: 'Danh mục',
            type: 'string',
            options: {
                list: [
                    { title: 'Tin tức chung', value: 'generalNews' },
                    { title: 'Hoạt động công ty', value: 'activities' },
                ],
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: { hotspot: true },
            fields: [{ name: 'alt', title: 'Alt', type: 'string', description: 'Tự động tạo từ tiêu đề nếu bỏ trống' }],
        },
        {
            name: 'excerpt',
            title: 'Mô tả ngắn',
            type: 'text',
        },
        {
            name: 'sections',
            title: 'Các phần',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'header', title: 'Tiêu đề phần', type: 'string' },
                        { name: 'content', title: 'Nội dung', type: 'text' },
                        {
                            name: 'images',
                            title: 'Hình ảnh',
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
                                            description: 'Tự động tạo từ tiêu đề nếu bỏ trống',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
