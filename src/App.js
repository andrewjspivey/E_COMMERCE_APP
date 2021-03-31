

import {getProducts, getProductById} from './utils/fetch';
import { React, useState, useEffect } from 'react';
import ProductList from './components/Products/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowProductPage from './components/Products/ShowProductPage';


const App = () => {

    const [products, setProducts] = useState([]);
    const [showProduct, setShowProduct] = useState(null);

    const fetchProducts = async () => {
      const data = await getProducts(10)
      setProducts(data)
    }

    const ShowProduct = async (productId) => {
      const product = await getProductById(productId)
      setShowProduct(product)
    }

    
    
    useEffect(() => {
      fetchProducts();
      console.log(products)
    }, []);



    return (
        <Router>
          <Switch>
            <Route exact path='/'>
              <ProductList products={products} onShow={ShowProduct}/>
            </Route>
            <Route exact path='/products/:id'>
              <ShowProductPage product={showProduct}/>
            </Route>

          </Switch>
        </Router>
      );
    }


export default App;
