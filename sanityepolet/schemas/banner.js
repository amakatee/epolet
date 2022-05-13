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
        {
          name: 'titleAbout',
          title: 'Текст Заголовок О компании',
         
          type: 'string'
      },
        {
          name: 'imageAbout',
          title:'Главное изображение О кмопании ',
          type: 'image',
          options: {
              hotspot: true,
          }

      },
      {
        name: 'titleKatalog',
        title: 'Текст Заголовок Каталог',
       
        type: 'string'
    },
      {
        name: 'imageKatalog',
        title:'Главное изображение Каталог',
        type: 'image',
        options: {
            hotspot: true,
        }

    },
    {
      name: 'titleContats',
      title: 'Текст Заголовок Контакты',
     
      type: 'string'
  },
    {
      name: 'imageContacts',
      title:'Главное изображение Контакты ',
      type: 'image',
      options: {
          hotspot: true,
      }

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