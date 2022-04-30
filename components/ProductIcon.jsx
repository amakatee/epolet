import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import {Button} from "@mui/material"

const ProductIcon = ({product:{image, name, details, slug, coverImg}}) => {
  return (
    <div className='productI-card'>
       <Link href={`/product/${slug.current}`}>
        <div className='productI-img' >
            <img src={urlFor(coverImg && coverImg)} width={250}></img>
       </div>
       <div className='productI-desc'>
          <h1>{name}</h1>
          <p>{`${details.substring(0,50)}...`}</p>
       </div>
   
    <Button variant='contained'color='secondary'>Подробнее</Button>
    </Link>
    </div>
  )
}

export default ProductIcon