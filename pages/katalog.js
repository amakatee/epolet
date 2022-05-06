import React from 'react'
import { client } from '../lib/client'
import ProductIcon from '../components/ProductIcon'
import { useRouter } from 'next/router'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'

const katalog = ({products}) => {
  const router = useRouter()
  return (
    <div>
    <div className='upper-about-cont'>
            <div className='upper-img'>
              <img width='300px' src='./2.jpg'></img>
            </div>  
            <div className='upper-overlay'></div>
            <motion.div initial={{y:-100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{stiffness:90, damping:100}} className='upper-about-title'><h1>Каталог</h1></motion.div>
            <div className='upper-nav'>   
            <motion.span  onClick={() => {router.push('/')}} className='navSpan'>Главная</motion.span>
            <BsArrowRight color='white'  /> 
            <span className='navSpan currentLink'>Каталог</span>
            </div>
          </div>
    <div className='bp'>   
    <div className='product-container-icon'>
       {products?.map(product => <ProductIcon key={product._id} id={product._id} product={product}/>)}
    </div>
    </div>   
    </div>
  )
}
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)
    
  
    return {
      props: {products}
    }
  
  }
export default katalog