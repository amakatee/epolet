import React from 'react'
import {Button}  from '@mui/material'
import {ImFilePdf} from 'react-icons/im'
import Link from 'next/link'

const PdfCont = () => {
  return (
    <div>
         <div className='pdf-files'>
             <div className='file'>
               <ImFilePdf />
               <h4>Сводная ведомость результатов</h4>
               <Link href='pdf1'>
                 <Button variant='outlined' color='secondary'>Посмотреть</Button>
              </Link>
            </div>
            <div className='file'>
              <ImFilePdf />
              <h4>Перечень рекомендуемых мероприятий</h4>
                <Button variant='outlined' color='secondary'>Посмотреть</Button>
            </div>

         </div>  
    </div>
  )
}

export default PdfCont