import {React, Component} from 'react'
import {getProducts} from '../utils/fetch'


const ProductCard = (props) => {

    const productData = this.props.data.map((productObj, index) => {
        return (
            <p key={`${productObj.id}`}>
                {productData.title} - {productData.price}
            </p>
        );
    })
}

export default ProductCard;