export default {
    name: 'youtubeEmbed',
    title: 'Video YouTube Banner',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tiêu đề video'
        },
        {
            name: 'url',
            type: 'url',
            title: 'YouTube URL',
            validation: Rule =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }).regex(
                    /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+$/,
                    {
                        name: 'youtubeUrl',
                        invert: false,
                        message: 'URL phải là đường dẫn hợp lệ từ YouTube (youtube.com hoặc youtu.be)',
                    }
                )
        }
    ]
}
