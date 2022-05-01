import React, {createContext, useContext, useState, useEffect} from "react";

import Link from 'next/link'

const CartContext = createContext()

export const StateContext = ({children}) => {
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState(1)

  

    const closeImg = () => {
        setShow(false)
    
      }
    const scrollToElement = (s) => {
        <Link href='/'></Link>

    }

    return (
        <CartContext.Provider
        value={{
            show,
            setShow,
            index,
            setIndex,
            closeImg,
            scrollToElement
        }}
    
        >{children}</CartContext.Provider>
    )

}
export default CartContext