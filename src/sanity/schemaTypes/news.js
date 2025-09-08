const customSlugify = (input) => {
    let slug = input.trim();

    // Handle URL input
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

    // Vietnamese character mapping
    const vietnameseMap = {
        'à': 'a', 'á': 'a', 'ạ': 'a', 'ả': 'a', 'ã': 'a', 'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ậ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ặ': 'a', 'ẳ': 'a', 'ẵ': 'a',
        'è': 'e', 'é': 'e', 'ẹ': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ê': 'e', 'ề': 'e', 'ế': 'e', 'ệ': 'e', 'ể': 'e', 'ễ': 'e',
        'ì': 'i', 'í': 'i', 'ị': 'i', 'ỉ': 'i', 'ĩ': 'i',
        'ò': 'o', 'ó': 'o', 'ọ': 'o', 'ỏ': 'o', 'õ': 'o', 'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ộ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ợ': 'o', 'ở': 'o', 'ỡ': 'o',
        'ù': 'u', 'ú': 'u', 'ụ': 'u', 'ủ': 'u', 'ũ': 'u', 'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ự': 'u', 'ử': 'u', 'ữ': 'u',
        'ỳ': 'y', 'ý': 'y', 'ỵ': 'y', 'ỷ': 'y', 'ỹ': 'y',
        'đ': 'd',
        // Uppercase versions
        'À': 'a', 'Á': 'a', 'Ạ': 'a', 'Ả': 'a', 'Ã': 'a', 'Â': 'a', 'Ầ': 'a', 'Ấ': 'a', 'Ậ': 'a', 'Ẩ': 'a', 'Ẫ': 'a', 'Ă': 'a', 'Ằ': 'a', 'Ắ': 'a', 'Ặ': 'a', 'Ẳ': 'a', 'Ẵ': 'a',
        'È': 'e', 'É': 'e', 'Ẹ': 'e', 'Ẻ': 'e', 'Ẽ': 'e', 'Ê': 'e', 'Ề': 'e', 'Ế': 'e', 'Ệ': 'e', 'Ể': 'e', 'Ễ': 'e',
        'Ì': 'i', 'Í': 'i', 'Ị': 'i', 'Ỉ': 'i', 'Ĩ': 'i',
        'Ò': 'o', 'Ó': 'o', 'Ọ': 'o', 'Ỏ': 'o', 'Õ': 'o', 'Ô': 'o', 'Ồ': 'o', 'Ố': 'o', 'Ộ': 'o', 'Ổ': 'o', 'Ỗ': 'o', 'Ơ': 'o', 'Ờ': 'o', 'Ớ': 'o', 'Ợ': 'o', 'Ở': 'o', 'Ỡ': 'o',
        'Ù': 'u', 'Ú': 'u', 'Ụ': 'u', 'Ủ': 'u', 'Ũ': 'u', 'Ư': 'u', 'Ừ': 'u', 'Ứ': 'u', 'Ự': 'u', 'Ử': 'u', 'Ữ': 'u',
        'Ỳ': 'y', 'Ý': 'y', 'Ỵ': 'y', 'Ỷ': 'y', 'Ỹ': 'y',
        'Đ': 'd'
    };

    return slug
        .toString()
        .toLowerCase()
        // Convert Vietnamese characters to Latin equivalents
        .replace(/./g, char => vietnameseMap[char] || char)
        // Replace spaces and special characters with hyphens
        .replace(/[^a-z0-9-]+/g, '-')
        // Remove leading and trailing hyphens
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
            name: 'body',
            title: 'Nội dung',
            type: 'blockContent',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            options: { collapsible: true, collapsed: true },
            initialValue: (_, { document }) => ({
                title: document?.title,
                description: document?.excerpt,
                ogImage: document?.thumbnail
            })
        },
    ],
};