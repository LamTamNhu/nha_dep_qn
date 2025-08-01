// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
    S.list()
        .title('Nội dung')
        .items(S.documentTypeListItems())
