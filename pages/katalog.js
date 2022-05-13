import React from 'react'
import { client } from '../lib/client'
import ProductIcon from '../components/ProductIcon'
import { useRouter } from 'next/router'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import HeaderSection from '../components/HeaderSection'

const katalog = ({products, bannerData}) => {
  const katalogBanner = bannerData.length && bannerData[0]
  const router = useRouter()

  return (
    <div>
      <HeaderSection imageURL={katalogBanner.imageKatalog} mainText={katalogBanner.titleKatalog} currentPage={katalogBanner.titleKatalog}/>
   
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
    const bannerQuery = '*[_type == "banner"]'
 
    const bannerData = await client.fetch(bannerQuery)
    
  
    return {
      props: {products, bannerData}
    }
  
  }
export default katalog