import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Footer, Layout, Main, Product} from '../components'
import React from 'react'
import { client } from '../lib/client'
import AboutUs from '../components/AboutUs'
import ProductIcon from '../components/ProductIcon'
import PdfCont from '../components/PdfCont'


export default function Home({products, bannerData}) {

 
  return (
    <>
    
     <section className='main-section'>
      <Main mainBanner={bannerData.length && bannerData[0]}/>
      </section> 
      <div className='about-section'>
        <AboutUs />
      </div>

      <section className='katalog-section'>
        <h1 >Каталог</h1>
        <div className='product-container' id='katalog'>
          {products?.map(product => <ProductIcon key={product._id} id={product._id} product={product}/>)}
          {/* {products?.map((product) => <Product  key={product._id} id={product._id} product={product} />)} */}
        </div>
        {/* <Product product={product2} /> */}
       </section>

       
  
      {/* <div className='form-cont'>
       <Form />
       </div>  */}
       
       {/* <div className='pdf-cont'> 
         <PdfCont />
       </div> */}
     
     
  
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