import React from 'react';
import './ProductCard.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = (props) => {
    const { img, name, seller, price, stock, key } = props.props.product;

    return (
        <Card style={{ width: '18rem', }} className="m-3 d-flex">
            <Card.Img variant="top" src={img} rounded />
            <Card.Body>
                <Card.Title><h4> <Link to={"/product/" + key} style={{textDecoration: 'none'}}> {name} </Link> </h4></Card.Title>
                <Card.Text>
                    <p className="text-secondary mt-2">By: {seller} </p>
                    <strong className="text-danger"> Price: ${price} </strong> <br /> <br />
                    <p className="text-default mb-5">Only {stock} left in stock - Order soon</p>
                </Card.Text>

                {props.props.showAddToCart && <Button variant="primary" style={{ position: 'absolute', bottom: '4px' }}
                    className="addToCartBtn" onClick={() => props.props.handleAddProduct(props.props.product)} >
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </Button>}
            </Card.Body>
        </Card>
    );
};

export default ProductCard;


<br />





