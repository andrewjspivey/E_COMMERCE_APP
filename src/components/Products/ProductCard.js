import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext'
import useStyles from './ProductCardStyles';
import CartProvider from '../../contexts/providers/CartProvider';



const ProductCard = ({product, onClick}) => {
    const classes = useStyles();


    return (

    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.title} onClick={onClick} />
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
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart" >
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
    )
}

export default ProductCard;