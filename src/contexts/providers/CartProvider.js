import React from 'react'
import { useState, useEffect, useContext } from 'react'
import {getProducts, getProductById} from '../../utils/fetch';
import {CartContext} from '../CartContext'


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        setCart([...cart, product])
    }



    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
    

}

export default CartProvider;