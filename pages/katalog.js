import React from 'react'
import { client } from '../lib/client'
import ProductIcon from '../components/ProductIcon'
import { useRouter } from 'next/router'
import {BsArrowRight} from 'react-icons/bs'

const katalog = ({products}) => {
  const router = useRouter()
  return (
    <div>
    <div className='upper-about-cont'>
            <div className='upper-img'>
              <img width='300px' src='./2.jpg'></img>
            </div>  
            <div className='upper-overlay'></div>
            <div className='upper-about-title'><h1>Каталог</h1></div>
            <div className='upper-nav'>   
            <span onClick={() => {router.push('/')}} className='navSpan'>Главная</span>
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