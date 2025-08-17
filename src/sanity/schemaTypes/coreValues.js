export default {
    name: 'coreValues',
    title: 'Giá trị cốt lõi',
    type: 'object',
    fields: [
        {
            name: 'values',
            title: 'Danh sách giá trị',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Tiêu đề', type: 'string' },
                        { name: 'description', title: 'Mô tả', type: 'text' },
                        { name: 'icon', title: 'Biểu tượng', type: 'image' },
                    ]
                }
            ]
        }
    ]
};
