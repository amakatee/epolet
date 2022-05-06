import React from 'react'
import { Link } from 'react-scroll'
import PdfCont from './PdfCont'
import { urlFor } from '../lib/client'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Main = ({mainBanner}) => {


  console.log(mainBanner.details)
  return (
    <div className='main-page' id='main'>
      <div className='main-desc'>
       <motion.h2 initial={{opacity:0, x:-80}} whileInView={{opacity:1, x:0}} transition={{delay:.2}}>{mainBanner.title}</motion.h2>
        {/* <p>{mainBanner.maindetails} </p > */}
     </div>
    {/* <div className='main-container'>
     
    <Link to='about' spy={true} smooth={true} duration={500} offset={-150}>
      <div className='h-cont'>
      <div className='hexagon hex2'>
        <div className='shape'>О нас</div>
      </div>
       </div>
       </Link>  
      <Link to='katalog' spy={true}  offset={-150} smooth={true} duration={500}>
       <div className='h-cont h-cont2'>
      <div className='hexagon hex2'>
        <div className='shape'>Каталог</div>
      </div>
       </div>
       </Link> 
       <Link to='form' spy={true} offset={-140} smooth={true} duration={500}>
       <div className='h-cont h-cont3'>
      <div className='hexagon hex2'>
        <div className='shape'>Контакты</div>
      </div>
       </div>
       </Link>
      
     
     
    </div> */}
    {mainBanner?.image  && 
    
    <div className='image-container-div'>
    <motion.img  initial={{scale:1}}
         animate={{
          scale: 1.1,
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: .3,
          repeatType: 'reverse'
        }}
         className='main-image-cont' src={urlFor(mainBanner.image)}></motion.img>
     <div className=' main-img-overlay'> </div>
     </div>  } 
   
    
    </div> 
  )
}

export default Main