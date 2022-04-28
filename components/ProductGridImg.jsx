import React from 'react'
import { urlFor } from '../lib/client'
import { useContext } from 'react'
import CartContext from '../context/StateContext'
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'

const ProductGridImg = ({image, existingImg, tapBack, tapForward, openImg}) => {
  const { show} = useContext(CartContext)
  return (
    <>
     <div className='products-grid'>
        { image.map((im, i) => {
          return (
            
              <div  onClick={() => openImg(i)} className='product-img-cont'>
                <img  src={urlFor(im)}></img>
              </div>
            
          )
        })}
       { show && <div className='product-carousel'>
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