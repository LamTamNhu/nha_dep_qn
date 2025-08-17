export default {
    name: 'aboutPage',
    type: 'document',
    title: 'Trang giới thiệu',
    fields: [
        {
            name: 'heroSection',
            type: 'aboutHeroSection',
            title: 'Hero Section'
        },
        {
            name: 'teamSection',
            type: 'teamSection',
            title: 'Đội ngũ'
        },
        {
            name: 'officePictures',
            type: 'officePictures',
            title: 'Hình ảnh văn phòng'
        },
        {
            name: 'commitments',
            type: 'commitments',
            title: 'Cam kết'
        },
        {
            name: 'coreValues',
            type: 'coreValues',
            title: 'Giá trị cốt lõi'
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Trang giới thiệu'
            }
        }
    }
}