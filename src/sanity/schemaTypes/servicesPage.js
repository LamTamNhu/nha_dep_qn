export default {
    name: 'servicesPage',
    title: 'Trang dịch vụ',
    type: 'document',
    fields: [
        {
            name: 'services',
            title: 'Các dịch vụ',
            type: 'array',
            of: [{ type: 'service' }],
        },
    ],
    preview: {
        prepare() {
            return { title: 'Trang dịch vụ' };
        },
    },
};
