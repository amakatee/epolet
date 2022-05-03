import React from 'react'
import {Button}  from '@mui/material'
import {ImFilePdf} from 'react-icons/im'
import Link from 'next/link'
import {HiPhone } from 'react-icons/hi'
import {ImLocation2} from 'react-icons/im'
import {SiMinutemailer} from 'react-icons/si'
import Form from './Form'
import { client } from '../lib/client'



const Footer = () => {

  return (
    <>
    <div className='footer-container'>
      <div className='footer-map'>

<iframe src="https://yandex.ru/map-widget/v1/-/CCUFFKVwxC" width="360" height="290" frameborder="1" allowfullscreen="true" ></iframe>
  
      </div>
      <div className='footer-contact'>
        <h2>Контакты</h2>

        <p> <HiPhone /> <span className='left-padding'> +7(916)003-28-81</span>  </p>
        {/* <Link href='https://goo.gl/maps/koZqKMwKgouDyT6T7'><a target='_blank'> <p className='border-bottom'> <ImLocation2 /> <span className='left-padding'>Московская Область, пгт. Шаховская, Волочановское шоссе дом 6А </span></p></a></Link> */}
      
        <p> <SiMinutemailer /> <span className='left-padding'>partner@epolet5.ru</span></p>


      
      </div>
    </div>
      <div className='form-cont'>
      <Form />
      </div> 
      </>
  )
}


export default Footer