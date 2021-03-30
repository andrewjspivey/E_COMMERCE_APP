
import './App.css';
import {getProducts} from './utils/fetch'
import { React, useState, useEffect } from 'react'
import ProductList from './components/Products/ProductList'



const App = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      const data = await getProducts(10)
      setProducts(data)
      console.log(products)
    }

    useEffect(() => {
      fetchProducts();
    }, []);

    console.log(products)



    return (
        <div>
          <ProductList products={products}/>
        </div>
      );
    }


export default App;
