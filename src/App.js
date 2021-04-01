import {getProducts, getProductById} from './utils/fetch';
import { React, useState, useEffect } from 'react';
import ProductList from './components/Products/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowProductPage from './components/Products/ShowProductPage';
import ProductProvider from './contexts/providers/ProductProvider'

const App = () => {

    return (
        <ProductProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <ProductList />
            </Route>
            <Route exact path='/products/:id'>
              <ShowProductPage />
            </Route>
          </Switch>
        </Router>
        </ProductProvider>
      );
    }


export default App;
