
import React from 'react'
import ProductCard from './ProductCard'
import {Grid} from '@material-ui/core';
import {useHistory} from 'react-router';
import {useContext} from 'react';
import {ProductContext} from '../../contexts/ProductContext';

const ProductList = () => {
    const { products } = useContext(ProductContext)
    const [allProducts] = products;

    const history = useHistory();

    return (
    <div>
        <Grid container justify="center" spacing={4}>
                {allProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
        </Grid>
    </div>
    )
}


export default ProductList;