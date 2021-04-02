import {React, useState, useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import ProductCard from './ProductCard'
import { getProductById, getProducts } from '../../utils/fetch'
import {CartContext} from '../../contexts/CartContext'
import { Grid, Typography, Divider, Button, Box, IconButton} from "@material-ui/core"
import {AddShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom'


const ShowProductPage = () => {
   // const [singleProduct, setSingleProduct] = useState([])
    const { id } = useParams();
    const {cart, addToCart} = useContext(CartContext)
    const {products} = useContext(ProductContext)
    const product = products[id]



    console.log(product)

    return (
        <Grid container direction="column" style={{margin: '4rem'}}>
        <Link to="/cart">CART</Link>
            <div>
                <div>
                    <img src={product.image}/>
                </div>
            </div>
            <Divider/>
            <Box mt={2} style={{margin: '4rem'}}>
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="subtitle1" style={{margin: '2rem'}}>{product.description}</Typography>
                <Typography variant="h5">${product.price}</Typography>
            </Box>
    
            <Button style={{marginright: '3rem'}} variant="contained" color="primary" onClick={() => addToCart(product)}>
                Add To Cart
            </Button>
        </Grid>
    )
}



export default ShowProductPage