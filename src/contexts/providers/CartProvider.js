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

    const cartNumber = () => {
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            count += cart[i].quantity
        }
        return count;
    }
    
    const cartPriceTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity
        }
        return +(total.toFixed(2))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeCartItem, cartNumber, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    );
    
}

export default CartProvider;