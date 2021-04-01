import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext'

const ProductCard = ({product}) => {

    const {selectProduct} = useContext(ProductContext)
    

    return (
    <Card className="card" onClick={selectProduct(product.id)}>
        <CardMedia className="card-media" image={product.image} title={product.title} />
        <CardContent>
            <div className="card-content">
                <Typography variant="h5" gutterBottom>
                    {product.title}
                </Typography>
                <Typography variant="h5">
                    ${product.price}
                </Typography>
            </div>
        </CardContent>
        <CardActions className="card-actions">
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
    )
}

export default ProductCard;