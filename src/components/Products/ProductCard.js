import {React, Component} from 'react'
import {getProducts} from '../../utils/fetch'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const ProductCard = ({product}) => {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.price}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
    )
}

export default ProductCard;