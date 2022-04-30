import React from 'react'
import { Link } from 'react-scroll'
import PdfCont from './PdfCont'

const Main = ({mainBanner}) => {
  return (
    <div className='main-page'>
      <div className='main-desc'>
       <h2>Производство пенополиуретановых изделий для Вас!</h2>
        <p>Наша фирма - лидер на рынке в своей области! </p >
     </div>
    <div className='main-container'>
     
    <Link to='about' spy={true} smooth={true} duration={500} offset={-150}>
      <div className='h-cont'>
      <div className='hexagon hex2'>
        <div className='shape'>О нас</div>
      </div>
       </div>
       </Link>  
      <Link to='katalog' spy={true}  offset={-150} smooth={true} duration={500}>
       <div className='h-cont h-cont2'>
      <div className='hexagon hex2'>
        <div className='shape'>Каталог</div>
      </div>
       </div>
       </Link> 
       <Link to='form' spy={true} offset={-140} smooth={true} duration={500}>
       <div className='h-cont h-cont3'>
      <div className='hexagon hex2'>
        <div className='shape'>Контакты</div>
      </div>
       </div>
       </Link>
      
     
     
    </div>

    
    </div> 
  )
}

export default Main