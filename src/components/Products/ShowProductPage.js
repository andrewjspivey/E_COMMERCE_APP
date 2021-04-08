import {React, useState, useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import {CartContext} from '../../contexts/CartContext'
import { Typography, Button, Box, } from "@material-ui/core"
import useStyles from './ShowProductStyles';


const ShowProductPage = () => {
    const { id } = useParams();
    const {cart, addToCart} = useContext(CartContext)
    const {products} = useContext(ProductContext)
    const product = products[id]
    const classes = useStyles()


    return (
        <>
        <div className={classes.root}>
                <div>
                    <img src={product.image}/>
                </div>
            <Box mt={2} style={{margin: '4rem'}}>
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="subtitle1" style={{margin: '2rem'}}>{product.description}</Typography>
                <Typography style={{marginLeft: '2rem'}} variant="h5">${product.price}</Typography>
                <div className={classes.button} >
                <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                    Add To Cart
                </Button>
                </div>
            </Box>
        </div>
        </>
    )
}



export default ShowProductPage