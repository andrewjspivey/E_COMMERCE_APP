import React from 'react';

import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'

const Navbar = () => {

    const cart = useContext(CartContext)


    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    E-Commerce
                </Typography>
                <IconButton aria-label="show shopping cart" color="inherit">
                    <Badge badgeContent={cart.cart.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
    }

export default Navbar;