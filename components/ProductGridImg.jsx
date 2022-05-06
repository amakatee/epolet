import React from 'react'
import { urlFor } from '../lib/client'
import { useContext } from 'react'
import CartContext from '../context/StateContext'
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'
import { motion } from 'framer-motion'
const ProductGridImg = ({image, existingImg, tapBack, tapForward, openImg}) => {
  const { show, closeImg} = useContext(CartContext)
 
  return (
    <>
     <div className='products-grid'>
        { image.map((im, i) => {
          return (
            
              <motion.div  whileHover={{
                scale:1.15,
                transition:{duration: .4}
              }}
              whileTap={{ scale: 0.95 }}
               onClick={() => openImg(i)} className='product-img-cont'>
                <img  src={urlFor(im)}></img>
              </motion.div>
            
          )
        })}
       { show && <div className='product-carousel'>
         <button onClick={() => closeImg()}  className='carousel-close-button'></button>
        <MdArrowBackIosNew className='arrowBack' onClick={() => tapBack()} color='#fefefa' 
        
         size={40} />

         <div className='product-carous-cont'>
      
            <img width="60px" src={urlFor(existingImg)}></img>
         </div> 
         
          <MdArrowForwardIos className='arrowFor' onClick={() => tapForward()} color='#fefefa' 
            size={40} />

        </div> 
        }
        </div></>
  )
}

export default ProductGridImg