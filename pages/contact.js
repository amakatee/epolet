import React from 'react'
import { useRouter } from 'next/router'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import HeaderSection from '../components/HeaderSection'
import { client } from '../lib/client'

const contact = ({bannerData}) => {
  const contactBanner = bannerData.length && bannerData[0]
    const router = useRouter()
    console.log(contactBanner)
  return (
    <div>
      <HeaderSection imageURL={contactBanner.imageContacts} mainText={contactBanner.titleContats} currentPage={contactBanner.titleContats}  />

    </div>
  )
}
export const getStaticProps = async () => {
   
  const bannerQuery = '*[_type == "banner"]'

  const bannerData = await client.fetch(bannerQuery)
 

  return {
    props: {bannerData}
  }

}

export default contact