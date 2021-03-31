import React from 'react';
import {Grid} from '@material-ui/core'
import ProductCard from './ProductCard';



const ShowProductPage = ({ShowProduct}) => {
    return (
        <div>
            <Grid container justify="center">
                <Grid item md={8}>
                    {ShowProduct.image}
                </Grid>
            </Grid>
        </div>
    )
}




export default ShowProductPage