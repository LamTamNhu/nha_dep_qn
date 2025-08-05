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
            name: 'branches',
            title: 'Danh sách chi nhánh',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'city', type: 'string', title: 'Thành phố' },
                        { name: 'address', type: 'string', title: 'Địa chỉ' },
                        { name: 'email', type: 'string', title: 'Email' },
                        {
                            name: 'phones',
                            type: 'array',
                            title: 'Số điện thoại',
                            of: [{ type: 'string' }],
                        },
                    ],
                },
            ],
        },
    ],
};
