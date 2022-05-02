import React from 'react'
import {HiPhone} from 'react-icons/hi'
import { ImLocation2 } from 'react-icons/im'
import {SiMinutemailer} from 'react-icons/si'

import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/StateContext'
import{ Link } from 'react-scroll'
import { client } from '../lib/client'


const Navbar = () => {
  const {scrollToElement} = useContext(CartContext)
  const [show, setShow] = useState(false)

  
  const toggleNav = (e) => {
    setShow(show => !show)
  }
  return (
    <div className='nav'>
      <div className='nav-contact flex'>
        <p> <HiPhone /> <span className='left-padding'> +7(916)003-28-81</span>  </p>
        <p> <ImLocation2 /> <span className='left-padding'>Московская Область, пгт. Шаховская, Волочановское шоссе дом 6А </span></p>
        <p> <SiMinutemailer /> <span className='left-padding'>epolet5@mail.ru</span></p>
      </div>

       <div className='nav-main-cont flex'>
    
      <div className='nav-logo-cont flex'>
        <img className='logo-img' width="58px" src='../ep.png'></img>
        <Link href='./../'><h3  id='logo'>Эполет</h3></Link>
      </div>

     
        <div id='nav-menu-cont' data-visible={show} className='nav-menu-cont flex'>
          <div ><Link to='katalog' spy={true}  offset={-150} smooth={true} duration={500}>Каталог</Link></div>
          <div><Link to='about' spy={true} smooth={true} duration={500} offset={-150} aria-hidden="true">О Компании</Link></div>
          <div><Link to='form'  spy={true} offset={-140} smooth={true} duration={500} aria-hidden="true">Контакты</Link></div>
         
      
        </div>
    <button onClick={(e) => toggleNav()} className='mobile-nav-toggle' aria-controls='nav-menu-cont' aria-expanded={show}><span className='sr-only'></span></button>
     
    </div>
    </div>
   
  )
}

export default Navbar