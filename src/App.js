import {getProducts, getProductById} from './utils/fetch';
import { React, useState, useEffect } from 'react';
import ProductList from './components/Products/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowProductPage from './components/Products/ShowProductPage';
import ProductProvider from './contexts/providers/ProductProvider'
import CartProvider from './contexts/providers/CartProvider'
import CartPage from './components/cart/CartPage'


const App = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <Router>
                    <Switch>
                    <Route exact path='/'>
                        <ProductList />
                    </Route>
                    <Route exact path='/products/:id'>
                        <ShowProductPage />
                    </Route>
                    <Route exact path='/cart'>
                        <CartPage />
                    </Route>
                    </Switch>
                </Router>
            </CartProvider>
        </ProductProvider>
        );
    }


export default App;
