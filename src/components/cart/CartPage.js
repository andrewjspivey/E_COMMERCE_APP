import {React, useState, useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {CartContext} from '../../contexts/CartContext'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Button } from '@material-ui/core';
import useStyles from './CartPageStyles';
import ProductCard from "../Products/ProductCard"
import {Link} from 'react-dom'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const CartPage = () => {
    const classes = useStyles();

    const {cart, addToCart, removeCartItem, cartPriceTotal} = useContext(CartContext);


    return (
        <>
        <div style={{textAlign: 'center'}}>
            <h1>Your Cart </h1>
        </div>
        <Grid container justify="center" spacing={4} style={{margin: 'auto'}}>
        {cart.map((product, index) => 
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card key={index} className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.title} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography noWrap variant="h7">
                        {product.title}
                        </Typography>
                        <Typography variant="h5">
                        ${product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p" />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant="h5" style={{color: '#3f51b5'}}>
                        x {product.quantity}
                </Typography>
                <div>
                    <IconButton>
                        <RemoveIcon onClick={() => removeCartItem(product)}></RemoveIcon>
                    </IconButton>
                    <IconButton>
                        <AddIcon onClick={() => addToCart(product)}></AddIcon>
                    </IconButton>
                </div>
                </CardActions>
                </Card>
            </Grid>
        )}
        </Grid>
        <div style={{textAlign: 'center'}}>
            <h1>Cart Subtotal: ${cartPriceTotal(cart)}</h1>
        </div>
        <div className={classes.buttons}>
            <Button size='large' type='button' variant='contained' color='secondary' >Empty Cart</Button>
            <Button size='large' type='button' variant='contained' color='primary' >Checkout</Button>
        </div>
        </>
    )
    
}





export default CartPage