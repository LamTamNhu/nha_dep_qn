export default {
    name: 'siteSettings',
    title: 'Cài đặt trang',
    type: 'document',
    fields: [
        { name: 'siteName', title: 'Tên trang', type: 'string' },
        { name: 'baseUrl', title: 'URL gốc (https://example.com)', type: 'url' },
        { name: 'defaultSeo', title: 'SEO mặc định', type: 'seo' },
        {
            name: 'robots',
            title: 'Thiết lập Robots',
            type: 'object',
            fields: [
                { name: 'index', title: 'Lập chỉ mục', type: 'boolean', initialValue: true },
                { name: 'follow', title: 'Theo liên kết', type: 'boolean', initialValue: true }
            ]
        },
        // các liên kết mạng xã hội đang dùng trên site
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'zalo', title: 'Zalo', type: 'url' },
        { name: 'youtube', title: 'Youtube', type: 'url' },
        // thông tin liên hệ
        { name: 'phoneNumber', title: 'Số điện thoại', type: 'string' },
        // mã theo dõi (tracking)
        {
            name: 'googleTagManagerId',
            title: 'Mã Google Tag Manager',
            type: 'string',
            description:
                'Dán mã container dạng GTM-XXXXXXX (lấy trong Google Tag Manager → Admin → Container ID). Để trống nếu chưa dùng.',
            placeholder: 'GTM-XXXXXXX',
            validation: (Rule) =>
                Rule.regex(/^GTM-[A-Z0-9]+$/, { name: 'Google Tag Manager ID' }).error(
                    'Mã phải có dạng GTM-XXXXXXX (chữ in hoa và số).'
                ),
        },
    ]
}
