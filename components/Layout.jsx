import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import {useTransform, motion, useViewportScroll} from 'framer-motion'


const Layout = ({children}) => {
  const {scrollY} = useViewportScroll()
  const offsetY = [0, 300]
  return (
    <div className='layout'>
      <Head>
        <title>Изделия из ППУ - Эполет</title>
        <meta name="description" content="Компания Эполет специализируется на производстве изделий из мягкого, жесткого и интегрального пенополиуретана."/>
        <meta propery="og:title" content='Заливка эластичного, жесткого, интегрального пенополиуретана - Эполет'></meta>
        <meta name="keywords" content="Интегральный ппу Жесткий ппу Пена для матраса купить Поролон с памятью Лист для фрезеровки Подлокотники для офисных кресел Подлокотники для игровых кресел Подлокотник из ппу Автокресло из ппу Эластичный ппу Форма для ппу Кресло из ппу" />
        <meta name="yandex-verification" content="9ec83ae61756bb79" />
        <meta name="google-site-verification" content="ekJjGt66RkVIPuD-EczHFZfWUKB9o2Zll69H7F4nIrg" />
        <link rel="icon" href="/ep.png" />
      </Head>
      <header className='navbar'>
        <Navbar offsetY={offsetY} scrollY={scrollY} />
      </header>
      <main className='mainn'>
        {children}
      </main>
    
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout