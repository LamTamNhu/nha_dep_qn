// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
    S.list()
        .title('Nội dung')
        .items([
            S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
            ...S.documentTypeListItems().filter(item => item.getId() !== 'siteSettings')
        ])
