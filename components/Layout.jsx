import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Изделия из ППУ - Эполет</title>
        <meta name="description" content="Контрактная заливка жесткого, эластичного и интегрального пенополиуретана. "/>
        <link rel="icon" href="/ep.png" />
      </Head>
      <header className='navbar'>
        <Navbar />
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