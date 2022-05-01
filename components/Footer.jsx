import React from 'react'
import {Button}  from '@mui/material'
import {ImFilePdf} from 'react-icons/im'
import Link from 'next/link'
import {HiPhone } from 'react-icons/hi'
import {ImLocation2} from 'react-icons/im'
import {SiMinutemailer} from 'react-icons/si'
import Form from './Form'



const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className='footer-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8917.63961575856!2d35.488728094063845!3d56.02889124004799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ca09664b8741bd%3A0xe4c839d5d6a10304!2sEpolet!5e0!3m2!1sen!2sru!4v1651418085413!5m2!1sen!2sru"
      
      width="360" height="250"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
      </div>
      <div className='footer-contact'>
        <h2>Контакты</h2>

        <p> <HiPhone /> <span className='left-padding'> +7(916)003-28-81</span>  </p>
        {/* <Link href='https://goo.gl/maps/koZqKMwKgouDyT6T7'><a target='_blank'> <p className='border-bottom'> <ImLocation2 /> <span className='left-padding'>Московская Область, пгт. Шаховская, Волочановское шоссе дом 6А </span></p></a></Link> */}
      
        <p> <SiMinutemailer /> <span className='left-padding'>epolet5@mail.ru</span></p>


      
      </div>
    </div>
      <div className='form-cont'>
      <Form />
      </div> 
      </>
  )
}

export default Footer