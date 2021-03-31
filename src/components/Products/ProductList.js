
import React from 'react'
import ProductCard from './ProductCard'
import {Grid} from '@material-ui/core';
import {useHistory} from 'react-router'

const ProductList = ({products, onShow}) => {

    const history = useHistory();

    return (
    <div>
        <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} onClick={() => history.push(`/contacts/${product.id}`)}/>
                    </Grid>
                ))}
        </Grid>
    </div>
    )
}


export default ProductList;