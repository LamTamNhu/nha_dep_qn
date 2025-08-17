export default {
    name: 'commitments',
    title: '5 không',
    type: 'object',
    fields: [
        {
            name: 'items',
            title: 'Danh sách cam kết',
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
