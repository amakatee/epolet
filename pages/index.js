import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Footer, Layout, Main, Product, Form} from '../components'
import React from 'react'
import { client } from '../lib/client'


export default function Home({products, bannerData}) {
  const product2 = products[1]
 
  return (
    <>
    
     <section className='main-section'>
      <Main mainBanner={bannerData.length && bannerData[0]}/>
      </section> 

      <section className='katalog-section'>
        <div className='product-container'>
          {products.map((product) => <Product  key={product._id} id={product._id} product={product} />)}
        </div>
        {/* <Product product={product2} /> */}
       </section>
       
       {/* <Product product={secondProd} /> */}
      <div className='form-cont'>
       <Form />
       </div> 
     
     
  
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