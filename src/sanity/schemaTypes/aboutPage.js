export default {
    name: 'aboutPage',
    type: 'document',
    title: 'Giới thiệu',
    fields: [
        {
            name: 'aboutShort',
            type: 'text',
            title: 'Giới thiệu ngắn',
        },
        {
            name: 'ceoQuote',
            type: 'text',
            title: 'Trích dẫn CEO'
        },
        {
            name: 'members',
            type: 'array',
            title: 'Thành viên đội ngũ',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Họ tên' },
                        { name: 'title', type: 'string', title: 'Chức vụ' },
                        { name: 'thumbnail', type: 'image', title: 'Ảnh đại diện' },
                    ]
                }
            ]
        },
        {
            name: 'coreValues',
            type: 'array',
            title: 'Giá trị cốt lõi',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Tiêu đề' },
                        { name: 'description', type: 'text', title: 'Mô tả' },
                        { name: 'icon', type: 'image', title: 'Biểu tượng' },
                    ]
                }
            ]
        },
        {
            name: 'coreValues2',
            type: 'array',
            title: 'Giá trị bổ sung',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Tiêu đề' },
                        { name: 'description', type: 'text', title: 'Mô tả' },
                        { name: 'icon', type: 'image', title: 'Biểu tượng' },
                    ]
                }
            ]
        },
        {
            name: 'officeImages',
            type: 'array',
            title: 'Hình ảnh văn phòng',
            of: [
                { type: 'image' }
            ]
        },
        {
            name: 'commitments',
            type: 'array',
            title: '5 Giá trị cam kết',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'text', type: 'string', title: 'Nội dung chính' },
                        { name: 'description', type: 'text', title: 'Mô tả' },
                    ]
                }
            ]
        },
        {
            name: 'policies',
            type: 'array',
            title: 'Chính sách',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Tiêu đề' },
                        { name: 'icon', type: 'string', title: 'Tên icon LucideReact' }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        }
    },
    initialValue: {
        aboutShort: 'Với ước mơ tạo ra những ngôi nhà thật đẹp chàng kĩ sư trẻ Nguyên Tương Tổng Giám Đốc tại công ty Nhà Đẹp Quảng Nam chia sẻ.',
        ceoQuote: 'Chúng tôi không chỉ đơn thuần xây dựng những công trình, mà còn kiến tạo nên những tổ ấm - nơi gia đình sum vầy, nơi nuôi dưỡng những khoảnh khắc hạnh phúc.',
        commitments: [
            {
                text: 'KHÔNG sử dụng vật tư kém chất lượng',
                description: 'Chỉ sử dụng vật liệu chất lượng cao, đạt tiêu chuẩn nghiêm ngặt, đảm bảo độ bền và hiệu quả lâu dài'
            },
            {
                text: 'KHÔNG sử dụng vật tư khác với báo giá',
                description: 'Giá cả minh bạch theo đúng thông số thực tế, không có chi phí ẩn hay báo giá sai lệch'
            },
            {
                text: 'KHÔNG cắt giảm vật tư, thi công đủ và đúng tiêu chuẩn',
                description: 'Mọi công trình được thực hiện với đủ khối lượng vật tư và phương pháp thi công đúng kỹ thuật, tuân thủ tiêu chuẩn không cắt giảm'
            },
            {
                text: 'KHÔNG bán thầu, kiểm soát chất lượng từ A-Z',
                description: 'Giám sát chất lượng toàn bộ quy trình từ đầu đến cuối, loại bỏ rủi ro bán thầu, đảm bảo chất lượng thống nhất'
            },
            {
                text: 'KHÔNG giấu giếm, minh bạch trong từng khâu thi công',
                description: 'Mọi giai đoạn thi công được thực hiện công khai, khách hàng có thể theo dõi tiến độ và phương pháp mọi lúc'
            }
        ]
    }
}