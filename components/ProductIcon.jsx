import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import {Button} from "@mui/material"
import {motion} from 'framer-motion'

const ProductIcon = ({product:{image, name, details, slug, coverImg}}) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <motion.div className='productI-card'
      whileHover={{
        scale:1.1,
        transition:{duration: .4}
      }}
      whileTap={{ scale: 0.95 }}
      >
       
        <div className='productI-img' >
            <img src={urlFor(coverImg && coverImg)} width={250}></img>
       </div>
       <div className='productI-desc'>
          <h1>{name}</h1>
          {/* <p>{`${details.substring(0,50)}...`}</p> */}
       </div>
   
      <Button variant='contained'color='secondary'>Подробнее</Button>
  
      </motion.div>
    </Link>
  )
}

export default ProductIcon