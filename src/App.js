import {getProducts, getProductById} from './utils/fetch';
import { React, useState, useEffect } from 'react';
import ProductList from './components/Products/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowProductPage from './components/Products/ShowProductPage';
import ProductProvider from './contexts/providers/ProductProvider'
import CartProvider from './contexts/providers/CartProvider'
import CartPage from './components/cart/CartPage'
import Navbar from './components/Navbar/Navbar'
import CheckoutPage from './components/Checkout/CheckoutPage'
import Checkout from './components/Checkout/Checkout'
import {useContext} from 'react'
import { CartContext } from './contexts/CartContext';

const App = () => {


    return (
        <ProductProvider>
            <CartProvider>
                <Router>
                    <Switch>
                    <Route exact path='/'>
                        <Navbar />
                        <ProductList />
                    </Route>
                    <Route exact path='/products/:id'>
                        <Navbar />
                        <ShowProductPage />
                    </Route>
                    <Route exact path='/cart'>
                        <Navbar />
                        <CartPage />
                    </Route>
                    <Route exact path='/checkout'>
                        <Navbar />
                        <CheckoutPage />
                    </Route>
                    </Switch>
                </Router>
            </CartProvider>
        </ProductProvider>
        );
    }


export default App;
