import React from 'react'
import {FaAnchor} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillThunderbolt} from 'react-icons/ai'
import {HiLightBulb} from 'react-icons/hi'
import {Button} from '@mui/material'
import Link from 'next/link'
import {useRouter } from 'next/router'

const AboutUs = ({aboutBanner}) => {
   const router = useRouter()
   console.log(aboutBanner)


  return (
  
    <div className='about flex' id='about' >
       <div className='about-logo'>
          <h1>Компания <br /> Эполет</h1>
       </div>
       <div className='about-nav'>
          <p className='about-child'>{aboutBanner.title}</p>
         <Button onClick={() => {router.push('/about')}} color="primary" variant='contained'>{aboutBanner.aboutsection}</Button>
       </div>

     

        
  
    </div>
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