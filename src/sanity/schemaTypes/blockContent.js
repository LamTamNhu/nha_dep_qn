export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Normal (Center)', value: 'normalCenter' },
        { title: 'Normal (Right)', value: 'normalRight' },
        { title: 'Normal (Justify)', value: 'normalJustify' },
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 1 (Center)', value: 'h1Center' },
        { title: 'Heading 1 (Right)', value: 'h1Right' },
        { title: 'Heading 1 (Justify)', value: 'h1Justify' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 2 (Center)', value: 'h2Center' },
        { title: 'Heading 2 (Right)', value: 'h2Right' },
        { title: 'Heading 2 (Justify)', value: 'h2Justify' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 3 (Center)', value: 'h3Center' },
        { title: 'Heading 3 (Right)', value: 'h3Right' },
        { title: 'Heading 3 (Justify)', value: 'h3Justify' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              { name: 'href', type: 'url', title: 'Url' },
            ],
          },
        ],
      },
    },
    { type: 'table' },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Alternative text for the image',
        },
      ],
    },
  ],
}
