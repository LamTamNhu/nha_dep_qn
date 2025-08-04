export default {
    name: 'process',
    title: 'Các bước quy trình',
    type: 'array',
    of: [
        {
            name: 'processTab',
            title: 'Tab Quy trình',
            type: 'object',
            fields: [
                {
                    name: 'label',
                    title: 'Tab Label',
                    type: 'string',
                    description: 'Title for the process tab (e.g., QUY TRÌNH THIẾT KẾ)',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'id',
                    title: 'Tab ID',
                    type: 'string',
                    description: 'Unique ID for the tab (e.g., design, construction)',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'steps',
                    title: 'Steps',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'icon',
                                    title: 'Icon',
                                    type: 'image',
                                    options: {
                                        hotspot: true
                                    }
                                },
                                {
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                    description: 'Image alt text for accessibility'
                                },
                                {
                                    name: 'title',
                                    title: 'Step Title',
                                    type: 'string',
                                    validation: Rule => Rule.required()
                                },
                                {
                                    name: 'description',
                                    title: 'Step Description',
                                    type: 'text',
                                    rows: 3
                                }
                            ]
                        }
                    ],
                    validation: Rule => Rule.min(1).max(6)
                }
            ]
        }
    ]
}
