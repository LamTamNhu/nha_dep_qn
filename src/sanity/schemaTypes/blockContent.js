import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

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
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
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
          { title: 'Left', value: 'left', icon: AlignLeft },
          { title: 'Center', value: 'center', icon: AlignCenter },
          { title: 'Right', value: 'right', icon: AlignRight },
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
      name: 'seeMore',
      title: 'Xem thêm',
      type: 'object',
      fields: [
        {
          name: 'mode',
          title: 'Chế độ',
          type: 'string',
          initialValue: 'automatic',
          options: {
            list: [
              { title: 'Tự động (random cùng chủ đề)', value: 'automatic' },
              { title: 'Thủ công (tự chọn liên kết)', value: 'manual' },
            ],
            layout: 'radio',
          },
        },
        {
          name: 'count',
          title: 'Số liên kết hiển thị',
          type: 'number',
          initialValue: 3,
          validation: (Rule) => Rule.min(1).max(10).integer(),
          hidden: ({ parent }) => parent?.mode === 'manual',
        },
        {
          name: 'links',
          title: 'Danh sách liên kết',
          type: 'array',
          hidden: ({ parent }) => parent?.mode !== 'manual',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', type: 'string', title: 'Tiêu đề' },
                { name: 'href', type: 'url', title: 'Đường dẫn' },
              ],
              preview: { select: { title: 'text', subtitle: 'href' } },
            },
          ],
        },
      ],
      preview: {
        select: { mode: 'mode', count: 'count', links: 'links' },
        prepare({ mode, count, links }) {
          if (mode === 'manual') {
            return { title: `Xem thêm — Thủ công (${(links || []).length} liên kết)` };
          }
          return { title: `Xem thêm — Tự động (${count ?? 3} bài)` };
        },
      },
    },
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
