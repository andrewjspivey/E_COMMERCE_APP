import React from 'react'
import { useState, useEffect } from 'react'
import {getProducts, getProductById} from '../../utils/fetch';
import {ProductContext} from "../ProductContext";


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [showProduct, setShowProduct] = useState(null);


    const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(() => {
        const products = fetchProducts();
        console.log(products)
    }, []);
    console.log(products)

    const selectProduct = async (productId) => {
        const product = await getProductById(productId)
        setShowProduct(product)
    }

    return (
        <ProductContext.Provider value={{ products: [products, setProducts], showProduct: [showProduct, setShowProduct], fetchProducts, selectProduct }}>
            {children}
        </ProductContext.Provider>
    );
    

}

export default ProductProvider;