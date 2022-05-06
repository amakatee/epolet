import React from 'react'
import { client, urlFor } from '../../lib/client'
import { useState } from 'react'
import { useContext } from 'react'
import Head from 'next/head'
import {PortableText} from '@portabletext/react'


import CartContext from '../../context/StateContext'
import ProductGridImg from '../../components/ProductGridImg'

const ProductDetails = ({ products, product}) => {
const {image, name, details, slug} = product
  const { show, setShow, index, setIndex, closeImg} = useContext(CartContext)
  const [idP, setIdP ] = useState(null)
  const existingImg = image.find((item, i) => i === index )
  console.log(`id ${product._id}`)
  
 
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
    <div className= {slug.current === 'integralnyi-ppu-light' ? 'light product-detail-section' : 'dark product-detail-section'}>
      <Head>
        <title> {name} - Эполет</title>
        <meta name='description' content=''></meta>
        <meta property='og:title' content={`${name} ППУ - Эполет`}></meta>
      </Head>
    
      <div className='product-cart '> 
     { show && <div onClick={() => closeImg()} className='over-lay'></div>}
        <ProductGridImg tapBack={tapBack} tapForward={tapForward}  image={image} existingImg={existingImg} openImg={openImg}/>
        <div className='products-desc'>
          <h1 className='product-title'>{name}</h1> <br/>
          {/* <p>{details}</p> */}
          <p><PortableText value={details} /></p>
        </div>

   

      </div>
    </div>   
   
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == 'product'] {
        slug {
            current
        }
      }
      `
        const products = await client.fetch(query)
        const paths = products.map((product) => ({
            params: {
                slug: product.slug.current
            }
        }))
        return {
            paths,
            fallback: 'blocking'
        }
    }

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const productsQuerry = '*[_type == "product"]'
    const product = await client.fetch(query)
    const products = await client.fetch(productsQuerry)
   
  
    return {
      props: {products, product}
    }
  
  }
export default ProductDetails