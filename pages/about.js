import React from 'react'
import AboutUs from '../components/AboutUs'
import { client } from '../lib/client'
import {FaAnchor} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillThunderbolt} from 'react-icons/ai'
import {HiLightBulb} from 'react-icons/hi'
import {useRouter } from 'next/router'

import {BsArrowRight} from 'react-icons/bs'


const about = ({bannerData}) => {
    const aboutBanner = bannerData.length && bannerData[0]
    const router = useRouter()
    
   
  return (
      <div>
          <div className='upper-about-cont'>
            <div className='upper-img'>
              <img width='300px' src='./1.jpg'></img>
            </div>  
            <div className='upper-overlay'></div>
            <div className='upper-about-title'><h1>{aboutBanner.aboutsection}</h1></div>
            <div className='upper-nav'>   
            <span onClick={() => {router.push('/')}} className='navSpan'>Главная</span>
            <BsArrowRight color='white'  /> 
            <span className='navSpan currentLink'>О компании</span>
            </div>
          </div>
          
          {/* <UpperMenu aboutBanner={aboutBanner} /> */}
       

          <div className='about-route-section'  >

     
           
            <div className='about-route-children' > 

               <div className='about-route-child'>
               <FaAnchor size={45} /> 
               <h3>{aboutBanner.aboutArray[0] ? aboutBanner.aboutArray[0].description : 'Гибкое ценообразование'}</h3>
            </div>


            <div className='about-route-child'> 
              <AiOutlineCopyrightCircle size={45} />
             <h3>{aboutBanner.aboutArray[1] ? aboutBanner.aboutArray[1].description : 'Изготовление изделий любой сложности'}</h3>
            </div>

              
            <div className='about-route-child'> 
              <HiLightBulb  size={45}/>
               <h3>{aboutBanner.aboutArray[2] ? aboutBanner.aboutArray[2].description : 'Гарантия качества на протяжении 20 лет'}</h3>
             </div>
            </div>

         </div>
    </div>
   
  )
}


export const getStaticProps = async () => {
   
    const bannerQuery = '*[_type == "banner"]'
 
    const bannerData = await client.fetch(bannerQuery)
   
  
    return {
      props: {bannerData}
    }
  
  }


export default about 