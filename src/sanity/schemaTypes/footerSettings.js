export default {
    name: 'footerSettings',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Tên công ty',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo CTA',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'ctaText',
            title: 'Tiêu đề CTA',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Mô tả CTA',
            type: 'text',
        },
        {
            name: 'mainBranch',
            title: 'Chi nhánh chính',
            type: 'object',
            fields: [
                { name: 'address', title: 'Địa chỉ', type: 'string' },
                { name: 'email', title: 'Email', type: 'string' },
                {
                    name: 'phones',
                    title: 'Số điện thoại',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
            ],
        },
        {
            name: 'otherBranches',
            title: 'Chi nhánh khác',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'city', title: 'Thành phố', type: 'string' },
                        { name: 'address', title: 'Địa chỉ', type: 'string' },
                        {
                            name: 'phones',
                            title: 'Số điện thoại',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                    ],
                },
            ],
        },
    ],
};
