export default {
    name: 'officePictures',
    title: 'Hình ảnh văn phòng',
    type: 'object',
    fields: [
        {
            name: 'images',
            title: 'Danh sách hình ảnh',
            type: 'array',
            of: [{ type: 'image' }]
        }
    ]
};
