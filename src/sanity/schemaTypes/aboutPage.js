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