import titleAndDescription from "@/sanity/schemaTypes/titleAndDescription";

export default {
    name: 'homepage',
    type: 'document',
    title: 'Trang chủ',
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
                    type: 'document',
                    fields:[
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
                titleAndDescription
            ]
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Trang chủ',
            };
        },
    },
};
