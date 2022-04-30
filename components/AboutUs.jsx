import React from 'react'
import {FaAnchor} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillThunderbolt} from 'react-icons/ai'

const AboutUs = () => {
  return (
    <div className='about flex' id='about' >
        <h1 className='about-title'>О Компании </h1> 
        <div className='about-child flex'> 
        <div className='about-single-child '>
      
           <FaAnchor size={45} /> 
           <h1>Преимуществo</h1> 
           <h3>Гибкое ценообразование</h3>
        </div>
        <div className='about-single-child'> 
        <AiOutlineCopyrightCircle size={45} />
       
           <h1>Особенность</h1>  
           <h3>Изготовление изделий любой сложности</h3>
        </div>
        <div className='about-single-child'> 
        <AiFillThunderbolt  size={45}/>
           <h1>Отличительная черта</h1> 
           <h3>Гарантия качества на протяжении 20 лет </h3>
        </div>
        </div>

    </div>
  )
}

export default AboutUs