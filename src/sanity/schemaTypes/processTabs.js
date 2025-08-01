export default {
    name: 'processTabs',
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
                            name: "label",
                            title: "Tiêu đề của tab",
                            type: "string"
                        },
                        {
                            name: "id",
                            title: "Id của tab (KHÔNG ĐƯỢC SỬA)",
                            type: "string"
                        },
                        {
                            name: "steps",
                            title: "Các bước quy trình",
                            type: "step"
                        }
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
