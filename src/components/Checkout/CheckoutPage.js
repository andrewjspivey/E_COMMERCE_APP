import {React, useContext} from 'react';
import {CartContext} from '../../contexts/CartContext'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Checkout from './Checkout'

const CheckoutPage = () => {
    const {cart, cartPriceTotal} = useContext(CartContext)

    return (
        <Checkout cart={cart}/>
    );
}


export default CheckoutPage;