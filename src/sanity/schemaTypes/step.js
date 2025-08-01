export default {
    name: "step",
    title: "Bước quy trình",
    type: "object",
    fields: [
        {
            name: "stepTitleAndDesc",
            title: "Nội dung",
            type: 'titleAndDescription'
        },
        {
            name: "icon",
            title: "Icon",
            type: "image"
        },
        {
            name: "alt",
            title: "alt của icon",
            type: "string"
        }
    ]
}