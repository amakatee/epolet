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
            name: 'coverImg',
            title:'Заставка',
            type: 'image',
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
            name: 'slug',
            title: 'Slug',
            type:'slug',
            options: {
                source:'name',
                maxLength: 90

            }
        },
        {
            name: 'details',
            title:'Описание',
            type: 'array',
            of: [
                {
                    type:'block'
                }
            ]
        }
    ]
}