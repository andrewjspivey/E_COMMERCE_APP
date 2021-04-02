import {React, useState, useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {CartContext} from '../../contexts/CartContext'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import useStyles from './CartPageStyles';
import ProductCard from "../Products/ProductCard"
import {Link} from 'react-dom'


const CartPage = () => {
    const classes = useStyles();

    const {cart} = useContext(CartContext);




    return (
        <>
        {cart.map((product, index) => 
            <ProductCard key={product.id} product={product} />
        )}
    </>
    )
}





export default CartPage