import React from 'react'
import { useState, useEffect } from 'react'
import {getProducts, getProductById} from '../../utils/fetch';
import {ProductContext} from "../ProductContext";


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(() => {
        const products = fetchProducts();
    }, []);


    // const fetchSingleProduct = async (productId) => {
    //     const product = await getProductById(productId)
    //     setSingleProduct(product)
    // }

    return (
        <ProductContext.Provider value={{products, fetchProducts}}>
            {children}
        </ProductContext.Provider>
    );
    

}

export default ProductProvider;