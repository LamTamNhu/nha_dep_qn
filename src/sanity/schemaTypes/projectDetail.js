import { apiVersion } from '@/sanity/env';

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
        validation: Rule =>
            Rule.required().custom(async (slug, context) => {
                const currentSlug = slug?.current;
                if (!currentSlug) {
                    return true;
                }

                const documentType = context?.document?._type;
                if (!documentType) {
                    return true;
                }

                const getClient = context?.getClient;
                if (typeof getClient !== 'function') {
                    return true;
                }

                const baseId = context?.document?._id?.replace(/^drafts\./, '');
                const client = getClient({ apiVersion });

                const duplicateCount = await client.fetch(
                    `count(*[_type == $type && slug.current == $slug && !(_id in [$draftId, $publishedId])])`,
                    {
                        type: documentType,
                        slug: currentSlug,
                        draftId: baseId ? `drafts.${baseId}` : null,
                        publishedId: baseId ?? null,
                    }
                );

                return duplicateCount === 0
                    || 'Slug đã được sử dụng cho một tài liệu cùng loại. Vui lòng chọn slug khác.';
            })
    },
    {
        name: 'createdDate',
        title: 'Ngày tạo',
        type: 'datetime',
        options: {
            dateFormat: 'DD/MM/YY',
            timeFormat: 'HH:mm:ss',
            timeStep: 1
        },
        initialValue: () => new Date().toISOString()
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
