import React from 'react'
import {Button}  from '@mui/material'
import {ImFilePdf} from 'react-icons/im'
import Link from 'next/link'
import {HiPhone } from 'react-icons/hi'
import {ImLocation2} from 'react-icons/im'
import {SiMinutemailer} from 'react-icons/si'



const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-img'>
        {/* <img width='110px' src='../ep.png'></img> */}
      </div>
      <div className='footer-contact'>
        <h2>Контакты</h2>

        <p> <HiPhone /> <span className='left-padding'> +7(916)003-28-81</span>  </p>
        <p> <ImLocation2 /> <span className='left-padding'>Московская Область, пгт. Шаховская, Волочановское шоссе дом 6А </span></p>
        <p> <SiMinutemailer /> <span className='left-padding'>epolet5@mail.ru</span></p>


      
      </div>
    </div>
  )
}

export default Footer