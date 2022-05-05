import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Footer, Layout, Main, Product} from '../components'
import React from 'react'
import { client } from '../lib/client'
import AboutUs from '../components/AboutUs'
import ProductIcon from '../components/ProductIcon'
import PdfCont from '../components/PdfCont'
import {Button} from '@mui/material'
import {useRouter } from 'next/router'


export default function Home({products, bannerData}) {
  const router = useRouter()

 
  return (
    <>
    
     <section className='main-section' >
      <Main mainBanner={bannerData.length && bannerData[0]}/>
      </section> 
      <div className='about-section'>
        <AboutUs aboutBanner={bannerData.length && bannerData[0]}/>
      </div>

      <section className='katalog-section'>
        <div className='katalog-desc'>
        <h1 >Наша продукция</h1>
        <Button onClick={() => {router.push('/katalog')}}   color="secondary" variant="contained">Перейти в каталог</Button>
        </div>
        
        <div className='product-container-icon' id='katalog'>
          {products?.map(product => <ProductIcon key={product._id} id={product._id} product={product}/>)}
         
        </div>
       
       </section>

     
     
  
     </>
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