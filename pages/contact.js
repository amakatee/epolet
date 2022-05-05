import React from 'react'
import { useRouter } from 'next/router'
import {BsArrowRight} from 'react-icons/bs'

const contact = () => {
    const router = useRouter()
  return (
    <div>
        <div className='upper-about-cont'>
            <div className='upper-img'>
              <img width='300px' src='./2.jpg'></img>
            </div>  
            <div className='upper-overlay'></div>
            <div className='upper-about-title'><h1>Контакты</h1></div>
            <div className='upper-nav'>   
            <span onClick={() => {router.push('/')}} className='navSpan'>Главная</span>
            <BsArrowRight color='white'  /> 
            <span className='navSpan currentLink'>Контакты</span>
            </div>
          </div>
    </div>
  )
}

export default contact