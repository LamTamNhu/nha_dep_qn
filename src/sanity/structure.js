import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import introduction from './schemaTypes/introduction'

export default defineConfig({
      name: 'default',
      title: 'My Sanity Project',

      projectId: 'your_project_id',
      dataset: 'production',

      plugins: [
            structureTool({
                  structure: (S) =>
                      S.list()
                          .title('Content')
                          .items([
                                S.documentTypeListItem('introduction').title('Introduction'),
                          ]),
            }),
      ],

      schema: {
            types: [introduction],
      },
})
