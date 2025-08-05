export default {
    name: 'homepage',
    type: 'document',
    title: 'Nội dung trang chủ',
    fields: [
        {
            name: 'videoBanner',
            title: 'Video banner',
            type: 'youtubeEmbed'
        },
        {
            name: 'bannerTitle',
            title: 'Nội dung banner',
            type: 'titleAndDescription'
        },
        {
            name: 'sale',
            title: 'Nội dung sale',
            type: 'array',
            of: [
                {
                    name: 'saleTitle',
                    title: 'Mục sale',
                    type: 'object',
                    fields: [
                        {
                            name: 'topText',
                            title: 'Top Text',
                            type: 'string',
                        },
                        {
                            name: 'bottomText',
                            title: 'Bottom Text',
                            type: 'string',
                        }
                    ]
                }
            ]
        },
        {
            name: 'introduction',
            title: 'Giới thiệu',
            type: 'titleAndDescription'
        },
        {
            name: 'coreValues',
            title: 'Giá trị cốt lõi',
            type: "array",
            of: [
                {
                    name: 'coreValue',
                    title: "Giá trị",
                    type: 'titleAndDescription'
                }
            ]
        },
        {
            name: 'whyChooseUs',
            title: 'Tại sao chọn chúng tôi?',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Tiêu đề',
                    type: 'string',
                },
                {
                    name: 'text1',
                    title: 'Đoạn văn bản 1',
                    type: 'string',
                },
                {
                    name: 'text2',
                    title: 'Đoạn văn bản 2',
                    type: 'string',
                },
                {
                    name: 'text3',
                    title: 'Đoạn văn bản 3',
                    type: 'string',
                },
                {
                    name: 'text4',
                    title: 'Đoạn văn bản 4',
                    type: 'string',
                },
            ]
        },
        {
            name: 'processesTabs',
            title: 'Quy trình',
            type: 'process'
        },
        {
            name: 'showcases',
            title: 'Các phần showcase',
            type: 'array',
            of: [
                {
                    name: "showcase",
                    title: "showcase",
                    type: 'object',
                    fields: [
                        {
                            name: "id",
                            title: 'ID',
                            type: 'string',
                        },
                        {
                            name: "titleAndDescription",
                            title: "Tiêu đề và mô tả",
                            type: "titleAndDescription"
                        },
                        {
                            name: "projects",
                            title: "Các dự án showcase",
                            type: "array",
                            of: [
                                {
                                    name: "individualProject",
                                    title: "Dự án",
                                    type: 'project'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'constructionVideoSection',
            title: 'Video công trình',
            type: 'constructionVideo'
        },
        {
            name: 'partners',
            title: 'Danh sách đối tác',
            type: 'array',
            of: [
                {
                    name: 'partnerIndividual',
                    title: 'Đối tác',
                    type: 'partner'
                }
            ]
        },
        {
            name: 'testimonialSection',
            title: 'Khách hàng nói gì',
            type: 'testimonial'
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Trang chủ',
            };
        },
    },
};
