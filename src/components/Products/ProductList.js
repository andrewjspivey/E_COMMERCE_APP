
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ProductCard from './ProductCard'


const ProductList = ({products}) => {
    return (
    <Container>
        <Row>
            {products.map((product) => (
                <Col key={product.id} xs={12} sm={6} m={4} lg={3}>
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
    </Container>
    )
}


export default ProductList;