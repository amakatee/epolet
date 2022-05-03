import React from 'react'
import {FaAnchor} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillThunderbolt} from 'react-icons/ai'
import {HiLightBulb} from 'react-icons/hi'


const AboutUs = ({aboutBanner}) => {
   console.log(aboutBanner.aboutArray[1].titles)

  return (
  
    <div className='about flex' id='about' >

     
        <h1 className='about-title'>{aboutBanner.aboutsection} </h1> 
        <div className='about-child flex'> 
        <div className='about-single-child '>
      
           <FaAnchor size={45} /> 
          
           <h1>{aboutBanner.aboutArray[0] ? aboutBanner.aboutArray[0].titles : 'Преимуществo'}</h1> 
           <h3>{aboutBanner.aboutArray[0] ? aboutBanner.aboutArray[0].description : 'Гибкое ценообразование'}</h3>
        </div>
        <div className='about-single-child'> 
        <AiOutlineCopyrightCircle size={45} />
       
           <h1>{aboutBanner.aboutArray[1] ? aboutBanner.aboutArray[1].titles : 'Особенность'}</h1> 
           <h3>{aboutBanner.aboutArray[1] ? aboutBanner.aboutArray[1].description : 'Изготовление изделий любой сложности'}</h3>
        </div>
        <div className='about-single-child'> 
        <HiLightBulb  size={45}/>
           <h1>{aboutBanner.aboutArray[2] ? aboutBanner.aboutArray[2].titles : 'Отличительная черта'}</h1> 
           <h3>{aboutBanner.aboutArray[2] ? aboutBanner.aboutArray[2].description : 'Гарантия качества на протяжении 20 лет'}</h3>
        </div>
        </div>

    </div>
  )
}

export default AboutUs