import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import { useContext } from 'react';
import useStyles from './ProductCardStyles';
import {CartContext} from '../../contexts/CartContext';



const ProductCard = ({product, onClick}) => {
    const {addToCart} = useContext(CartContext)
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.title} onClick={onClick} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography noWrap variant="h7" >
                        {product.title}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                    <Typography variant="h5" >
                        ${product.price}
                    </Typography>
                <IconButton aria-label="Add to Cart" >
                    <AddShoppingCart onClick={() => addToCart(product)} />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductCard;