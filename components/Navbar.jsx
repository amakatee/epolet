import React from 'react'
import {HiPhone} from 'react-icons/hi'
import { ImLocation2 } from 'react-icons/im'
import {SiMinutemailer} from 'react-icons/si'
import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
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
          <div><Link href='./../' aria-hidden="true">Продукция</Link></div>
          {/* <div><a href='#'>Галерея</a></div>
          <div><a href='#'>Контакты</a></div> */}
        </div>
    <button onClick={(e) => toggleNav()} className='mobile-nav-toggle' aria-controls='nav-menu-cont' aria-expanded={show}><span className='sr-only'></span></button>
     
    </div>
    </div>
   
  )
}

export default Navbar