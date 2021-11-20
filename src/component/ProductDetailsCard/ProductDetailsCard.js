import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetailsCard = (props) => {
    const { name, price, img } = props.product;

    return (
        <Card className="mt-5" style={{ width: '100%', textAlign: 'center' }}>
            <Card.Img variant="top" src={img} style={{ width: '250px', margin: 'auto' }} />
            <Card.Body>

                <Card.Text>
                    <h3 >{name} </h3>
                    <p>price: {price} </p>
                </Card.Text>
                <Button variant="warning" className="mb-4"><Link to="/shop" style={{ textDecoration: 'none' }}>Back</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default ProductDetailsCard;