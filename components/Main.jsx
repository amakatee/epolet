import React from 'react'
import { Link } from 'react-scroll'

const Main = ({mainBanner}) => {
  return (
    <div className='main-page'>
      <div className='main-desc'>
       <h2>Производство пенополиуретановых изделий для Вас!</h2>
        <p>Наша фирма - лидер на рынке в своей области! </p >
     </div>
    <div className='main-container'>
     
    <Link to='about'>
      <div className='h-cont'>
      <div className='hexagon hex2'>
        <div className='shape'>О нас</div>
      </div>
       </div>
       </Link>  
      <Link to='katalog'>
       <div className='h-cont h-cont2'>
      <div className='hexagon hex2'>
        <div className='shape'>Каталог</div>
      </div>
       </div>
       </Link> 
       <Link to='form'>
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