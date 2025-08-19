export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        { name: 'siteName', title: 'Site name', type: 'string' },
        { name: 'baseUrl', title: 'Base URL (https://example.com)', type: 'url' },
        { name: 'defaultSeo', title: 'Default SEO', type: 'seo' },
        {
            name: 'social',
            title: 'Social Accounts',
            type: 'object',
            fields: [
                { name: 'twitter', title: 'Twitter handle', type: 'string' },
                { name: 'facebookAppId', title: 'Facebook App ID', type: 'string' }
            ]
        },
        {
            name: 'robots',
            title: 'Robots Defaults',
            type: 'object',
            fields: [
                { name: 'index', title: 'Index', type: 'boolean', initialValue: true },
                { name: 'follow', title: 'Follow', type: 'boolean', initialValue: true }
            ]
        },
        // existing fields for social links used in site
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'zalo', title: 'Zalo', type: 'url' },
        { name: 'youtube', title: 'Youtube', type: 'url' },
    ]
}
