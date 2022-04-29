import React from 'react'
import { urlFor } from '../lib/client'
import { useState } from 'react'

import { useContext } from 'react'
import CartContext from '../context/StateContext'
import ProductGridImg from './ProductGridImg'

const Product = ({ id,product:{image, name, details, slug}}) => {
  const { show, setShow, index, setIndex, closeImg} = useContext(CartContext)
  const [idP, setIdP ] = useState(null)
  const existingImg = image.find((item, i) => i === index )
  
 
  const openImg = (i) => {
    console.log(i)
       setIndex(i)
      setShow(show => !show)
  }

  const tapForward = () => {
    if(index !== image.length - 1 ){
      setIndex(index + 1)
    } else if(index === image.length - 1){
      setIndex(0)
    }
  }
  const tapBack = () => {
    if(index !== 0) {
      setIndex(index - 1)
    } else if(index === 0){
      setIndex(image.length - 1)
    } 

  }

 
  return (
    
      <div key={id}  className='product-cart flex'> 
     { show && <div onClick={() => closeImg()} className='over-lay'></div>}
        <ProductGridImg tapBack={tapBack} tapForward={tapForward}  image={image} existingImg={existingImg} openImg={openImg}/>
        <div className='products-desc'>
          <h1 className='product-title'>{name}</h1> <br/>
          <p>{details}</p>
        </div>

   

      </div>
   
  )
}

export default Product
{/* <img src={urlFor(i.image[0])}></img> */}