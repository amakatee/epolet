import React from 'react'
import {FaAnchor} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillThunderbolt} from 'react-icons/ai'
import {HiLightBulb} from 'react-icons/hi'
import {Button} from '@mui/material'
import Link from 'next/link'
import {useRouter } from 'next/router'
import {motion} from 'framer-motion'

const AboutUs = ({aboutBanner}) => {
   const router = useRouter()
   console.log(aboutBanner)
   const aboutVariant = {
      hidden:{
         y: '-100%',
         opacity: 0
      

      },
      visible: {
         y:100,
         opacity:1
        
      }
   }


  return (
  
    <motion.div className='about flex' id='about' >
       <motion.div   
       className='about-logo' >
          <motion.h1 initial={{x:-20, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration:.9}} >Компания <br /> Эполет</motion.h1>
       </motion.div>
       <motion.div 
       
       className='about-nav'>
          <motion.p className='about-child' >{aboutBanner.maindetails}</motion.p>
         <Button onClick={() => {router.push('/about')}} color="primary" variant='contained'>{aboutBanner.aboutsection}</Button>
       </motion.div>

     

        
  
    </motion.div>
  )
}

export default AboutUs


{/* <div className='about-child '> 
        <div className='about-single-child '>
      
           <FaAnchor size={45} /> 
          
           <h3>{aboutBanner.aboutArray[0] ? aboutBanner.aboutArray[0].description : 'Гибкое ценообразование'}</h3>
        </div>
        <div className='about-single-child'> 
        <AiOutlineCopyrightCircle size={45} />
       
           <h3>{aboutBanner.aboutArray[1] ? aboutBanner.aboutArray[1].description : 'Изготовление изделий любой сложности'}</h3>
        </div>
        <div className='about-single-child'> 
        <HiLightBulb  size={45}/>
           <h3>{aboutBanner.aboutArray[2] ? aboutBanner.aboutArray[2].description : 'Гарантия качества на протяжении 20 лет'}</h3>
        </div>
        </div> */}