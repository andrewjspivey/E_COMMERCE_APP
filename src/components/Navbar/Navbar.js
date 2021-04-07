import React from 'react';

import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const cart = useContext(CartContext)


    return (
        <AppBar position="static" >
            <Toolbar style={{justifyContent: 'space-between'}}>
                <Link to={'/'} style={{ color: '#FFF', textDecoration: 'none' }}>
                    <Typography variant="h6" noWrap>E-Commerce</Typography>
                </Link>
                <Link to={'/cart'} style={{ color: '#FFF', textDecoration: 'none' }} >
                    <IconButton color="inherit">
                        <Badge badgeContent={cart.cart.length} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
    }

export default Navbar;