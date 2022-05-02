export default {
    name: 'banner',
    title: 'Наполнение',
    type:'document',
    fields: [
        {
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            }

        },
        {
            name: 'title',
            title: 'Текст на главной',
            description:'(белый)',
            type: 'string'
        },
        {
            name: 'maindetails',
            title:'Текст на главной',
            description:'(желтый)',
            type: 'string'
            
        },
        {
          name: 'aboutsection',
          title: 'О компании заголовок',
          description: 'Заголовок для секции о компании',
          type: 'string'
        },
        {
          name: 'katalogsection',
          title: 'Каталог заголовок',
          description: 'Заголовок для Католога',
          type: 'string'
        },
        {
            name: 'aboutArray',
            title: 'Изменить',
            description:'Текст О Компании',
            type: 'array',
            of: [ {
                type: 'object',
                name: 'about',
               
                fields: [
                  {
                    title: 'Заголовок',
                    name: 'titles',
                    type: 'string',
                   
                  },
                  {
                    title: 'Описание',
                    name: 'description',
                    type: 'string',
                   
                  }
                ]
              }]
        },
        // {
        //     type: 'object',
        //     name: 'about',
           
        //     fields: [
        //       {
        //         title: 'Заголовок',
        //         name: 'titles',
        //         type: 'string',
               
        //       },
        //       {
        //         title: 'Описание',
        //         name: 'description',
        //         type: 'string',
               
        //       }
        //     ]
        //   }
    ]
}