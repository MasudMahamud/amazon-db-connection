import React from 'react';
import { Button, Card } from 'react-bootstrap';


const ReviewItem = (props) => {
    const { name, quantity, key, price, img } = props.product;

    return (
        <Card style={{ width: '100%', }}>
            <Card.Img variant="top" src={img} style={{width:'120px'}} />
            <Card.Body>

                <Card.Text>
                    <h4 >{name} </h4>
                    <p className="quantity"> Quantity: {quantity} </p>
                    <p>price: {price} </p>
                </Card.Text>

                <Button
                    className="addToCartBtn "
                    onClick={() => props.handleRemoveProduct(key)} >
                    Remove
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ReviewItem;