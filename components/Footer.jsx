import React from 'react'
import {Button}  from '@mui/material'
import {ImFilePdf} from 'react-icons/im'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <div className='pdf-files'>
      <div className='file'>
        <ImFilePdf />
        <h4>Сводная ведомость результатов</h4>
        <Link href='pdf1'>
          <Button variant='outlined' color='secondary'>Посмотреть</Button>
        </Link>
      </div>
      <div className='file'>
        <ImFilePdf />
        <h4>Перечень рекомендуемых меропри</h4>
        <Button variant='outlined' color='secondary'>Посмотреть</Button>
      </div>

      </div>   */}
      <div className='footer-contact'>

      </div>
    </div>
  )
}

export default Footer