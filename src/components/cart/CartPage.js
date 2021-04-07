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
            <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    ${product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" component="p" />
            </CardContent>
            </Card>
        )}
    </>
    )
}





export default CartPage