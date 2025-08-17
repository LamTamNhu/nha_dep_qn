export default {
    name: 'contactSettings',
    title: 'Form liên hệ',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tiêu đề chính',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Phụ đề',
            type: 'text',
        },
        {
            name: 'contactHeader',
            title: 'Tiêu đề liên hệ',
            type: 'string',
        },
        {
            name: 'office',
            title: 'Thông tin văn phòng',
            type: 'object',
            fields: [
                { name: 'label', type: 'string', title: 'Nhãn' },
                { name: 'value', type: 'string', title: 'Địa chỉ' },
            ],
        },
        {
            name: 'fanpage',
            title: 'Fanpage Facebook',
            type: 'object',
            fields: [
                { name: 'label', type: 'string' },
                { name: 'link', type: 'url' },
            ],
        },
        {
            name: 'hotline',
            title: 'Hotline',
            type: 'object',
            fields: [
                { name: 'label', type: 'string' },
                { name: 'value', type: 'string' },
            ],
        },
        {
            name: 'budgetOptions',
            title: 'Các tùy chọn ngân sách',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
