import React from 'react'
import {HiPhone} from 'react-icons/hi'
import { ImLocation2 } from 'react-icons/im'
import {SiMinutemailer} from 'react-icons/si'

import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/StateContext'
import{ Link } from 'next/link'
import { client } from '../lib/client'
import {useRouter } from 'next/router'
import about from './../pages'
import {motion, useTransform} from 'framer-motion'



const Navbar = ({offsetY, scrollY}) => {
  const {scrollToElement} = useContext(CartContext)
  const router = useRouter()
  const [show, setShow] = useState(false)

  const divSize = ['11px', '0px']
 


  const fontSize = useTransform(scrollY, offsetY, divSize)




  
  const toggleNav = (e) => {
    setShow(show => !show)
  }
  return (
    <motion.div className='nav'>

   <motion.div className='nav-contact flex' >
    <motion.p > <HiPhone /> <span className='left-padding'> +7(916)003-28-81</span>  </motion.p>
    <motion.p > <ImLocation2 /> <span className='left-padding'>Московская Область, пгт. Шаховская, Волочановское шоссе дом 6А </span></motion.p>
     <p> <SiMinutemailer /> <span className='left-padding'>partner@epolet5.ru</span></p>
  </motion.div>


       <div className='nav-main-cont flex'>
    
      <div onClick={() => {router.push('/')}} className='nav-logo-cont flex'>

        <img className='logo-img' width="58px" src='../ep.png'></img>
        {/* <Link to='main'><h3  id='logo'>Эполет</h3></Link> */}
        <motion.h3  whileHover={{
        scale:1.1,
        transition:{duration: .4}
      }}
      whileTap={{ scale: 0.95 }} id='logo'>Эполет</motion.h3>

        </div>
      
       
    

     
        <div id='nav-menu-cont' data-visible={show} className='nav-menu-cont flex'>
          <div onClick={() => {router.push('/katalog')}}> Каталог </div>
          <div onClick={() => {router.push('/about')}} > О Компании </div>
          <div onClick={() => {router.push('/contact')}}>Контакты</div>
         
      
        </div>
    <button onClick={(e) => toggleNav()} className='mobile-nav-t' aria-controls='nav-menu-cont' aria-expanded={show}><span className='sr-only'></span></button>
     
    </div>
    </motion.div>
   
  )
}

export default Navbar