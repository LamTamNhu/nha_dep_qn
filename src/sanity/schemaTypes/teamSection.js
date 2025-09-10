export default {
    name: 'teamSection',
    type: 'object',
    title: 'Đội ngũ',
    fields: [
        {
            name: 'members',
            type: 'array',
            title: 'Thành viên đội ngũ',
            of: [
                {
                    type: 'object',
                    fields: [
                        {name: 'name', type: 'string', title: 'Họ tên'},
                        {name: 'title', type: 'string', title: 'Chức vụ'},
                        {name: 'thumbnail', type: 'image', title: 'Ảnh đại diện'},
                        {name: 'aboutShort', type: 'text', title: 'Giới thiệu ngắn'}
                    ]
                }
            ]
        }
    ]
};
