import React, {createContext, useContext, useState, useEffect} from "react";

const CartContext = createContext()

export const StateContext = ({children}) => {
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState(1)

  

    const closeImg = () => {
        setShow(false)
    
      }
      

    return (
        <CartContext.Provider
        value={{
            show,
            setShow,
            index,
            setIndex,
            closeImg
        }}
    
        >{children}</CartContext.Provider>
    )

}
export default CartContext