import React from 'react'
import { motion } from 'framer-motion'
import {useRouter } from 'next/router'
import { urlFor } from '../lib/client'

import {BsArrowRight} from 'react-icons/bs'
const HeaderSection = ({imageURL, mainText, currentPage}) => {
  const router = useRouter()
  console.log(currentPage)
  return (
    <div className='upper-about-cont'>
            <div className='upper-img'>
              <img width='300px' src={urlFor(imageURL)}></img>
            </div>  
            <div className='upper-overlay'></div>
            {/* <motion.div  initial={{y:-100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:'1s'}} className='upper-about-title'><h1>{mainText}</h1></motion.div> */}
            <motion.div className='upper-about-title'><h1>{mainText}</h1></motion.div>
            <div className='upper-nav'>   
           
            <span onClick={() => {router.push('/')}} className='navSpan'>Главная</span>
            <BsArrowRight color='white'  /> 
            <span className='navSpan currentLink'>{mainText}</span>
            </div>
       
          </div>
  )
}

export default HeaderSection