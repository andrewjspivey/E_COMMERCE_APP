import React from 'react'
import { useState, useEffect, useContext } from 'react'
import {getProducts, getProductById} from '../../utils/fetch';
import {CartContext} from '../CartContext'


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        if (cart.includes(product)) {
            product.quantity += 1
            setCart([...cart])
        } else {
            product.quantity = 1
            setCart([...cart, product])
        }
    }

    const removeCartItem = (product, quantity) => {
        if (product.quantity > 1) {
            product.quantity -= 1
            setCart([...cart])
        } else {
            const newCart = cart.filter((item) => item.id !== product.id)
            setCart(newCart);
        }
    }


    return (
        <CartContext.Provider value={{cart, addToCart, removeCartItem}}>
            {children}
        </CartContext.Provider>
    );
    
}

export default CartProvider;