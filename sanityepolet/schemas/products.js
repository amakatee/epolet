export default {
    name: 'product',
    title: 'Каталог',
    type:'document',
    fields: [
        {
            name: 'image',
            title: 'Изображения',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotspot: true,
            }

        },
        {
            name: 'name',
            title: 'Заголовок',
            type: 'string'
        },
        {
            name: 'details',
            title:'Описание',
            type: 'string'
        }
    ]
}