
import React from 'react'
import ProductCard from './ProductCard'
import {Grid} from '@material-ui/core';
import {useHistory} from 'react-router';
import {useContext} from 'react';
import {ProductContext} from '../../contexts/ProductContext';

const ProductList = () => {
    const {products} = useContext(ProductContext)

    const history = useHistory();
    
    return (
    <div style={{margin: '4rem'}}>
        <Grid container justify="center" spacing={4}>
                {products.map((product, index) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} onClick={() => history.push(`/products/${index}`)}/>
                    </Grid>
                ))}
        </Grid>
    </div>
    )
}


export default ProductList;