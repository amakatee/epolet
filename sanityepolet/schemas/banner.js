export default {
    name: 'banner',
    title: 'Наполнение',
    type:'document',
    fields: [
        {
            name: 'image',
            title: 'Изображение',
            type: 'image',
            options: {
                hotspot: true,
            }

        },
        {
            name: 'title',
            title: 'Загаловок',
            type: 'string'
        },
        {
            name: 'details',
            title:'Детали',
            type: 'string'
        }
    ]
}