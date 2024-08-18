import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext(null)

    
const BasketProvider = ({children}) =>{
const products = localStorage.getItem('products')
    const [basket, setBasket] = useState(JSON.parse (products)||[])

    const getBasketData = (data) => {
        
        const isExist = basket.some((item) => item.id === data.id)

        if (!isExist) {
            
            setBasket([...basket, data])
        }
    }
useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(basket))
},[basket])

    return(
        <BasketContext.Provider value={{getBasketData, basket,setBasket}}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider