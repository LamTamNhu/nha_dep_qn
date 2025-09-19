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
            title: 'Hình ảnh hoạt động'
        },
        {
            name: 'commitments',
            type: 'commitments',
            title: '5 không'
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