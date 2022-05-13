import React from 'react'
import AboutUs from '../components/AboutUs'
import { client } from '../lib/client'
import {FaAnchor} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillThunderbolt} from 'react-icons/ai'
import {HiLightBulb} from 'react-icons/hi'
import {useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {BsArrowRight} from 'react-icons/bs'
import HeaderSection from '../components/HeaderSection'

const about = ({bannerData}) => {
    const aboutBanner = bannerData.length && bannerData[0]
    const router = useRouter()
    console.log(aboutBanner.titleAbout)
    
   
  return (
      <div>
        <HeaderSection imageURL={aboutBanner.imageAbout} mainText={aboutBanner.aboutsection} currentPage={aboutBanner.titleAbout} />
    
       
          <div className='about-route-section'  >

     
           
            <div className='about-route-children' > 

               <motion.div 
                whileHover={{
                  scale:1.1,
                  transition:{duration: .4}
                }}
                whileTap={{ scale: 0.95 }}
                className='about-route-child'>
               <FaAnchor size={45} /> 
               <h3>{aboutBanner.aboutArray[0] ? aboutBanner.aboutArray[0].description : 'Гибкое ценообразование'}</h3>
            </motion.div>


            <motion.div 
             whileHover={{
              scale:1.1,
              transition:{duration: .4}
            }}
            whileTap={{ scale: 0.95 }}
            className='about-route-child'> 
              <AiOutlineCopyrightCircle size={45} />
             <h3>{aboutBanner.aboutArray[1] ? aboutBanner.aboutArray[1].description : 'Изготовление изделий любой сложности'}</h3>
            </motion.div>

              
            <motion.div
             whileHover={{
              scale:1.02,
              transition:{duration: .4}
            }}
            whileTap={{ scale: 0.95 }}
             className='about-route-child'> 
              <HiLightBulb  size={45}/>
               <h3>{aboutBanner.aboutArray[2] ? aboutBanner.aboutArray[2].description : 'Гарантия качества на протяжении 20 лет'}</h3>
             </motion.div>
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