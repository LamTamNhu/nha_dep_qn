import titleAndDescription from "@/sanity/schemaTypes/titleAndDescription";

export default {
    name: 'homepage',
    type: 'document',
    title: 'Trang chủ nội dung',
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
            name:'processTabs',
            title: 'Quy trình',
            type: 'processTabs'
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
