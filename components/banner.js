export default {
    name:' banner',
    title: 'ds',
    type:'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type:'image',
            options: {
                hotspot:true
            },
        },
        {
            name: 'menu',
            title: 'Menu',
            type: 'array',
            of:[{type:'string'}]

        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string'
        }
    ]
}