
export default {
    name: 'processTab',
    type: 'object',
    title: 'Quy trình',
    fields: [
        {
            name: 'tabs',
            title: 'Tabs',
            type: 'array',
            of: [
                {
                    name: 'tab',
                    title: 'Tab',
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                        },
                        {
                            name: 'id',
                            title: 'Tab ID',
                            type: 'string',
                        },
                        {
                            name: 'steps',
                            title: 'Steps',
                            type: 'array',
                            of: [
                                {
                                    name: 'step',
                                    title: 'Step',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'iconSrc',
                                            title: 'Icon Source',
                                            type: 'image',
                                        },
                                        {
                                            name: 'alt',
                                            title: 'Image Alt Text',
                                            type: 'string',
                                        },
                                        {
                                            name: 'title',
                                            title: 'Step Title',
                                            type: 'string',
                                        },
                                        {
                                            name: 'description',
                                            title: 'Step Description',
                                            type: 'string',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Quy trình',
            };
        },
    },
};
