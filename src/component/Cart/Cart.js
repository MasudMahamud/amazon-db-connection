import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity || 1, 0);

    let shipping = 0;
    if (total > 50) {
        shipping = 0;
    }
    else if (total > 20) {
        shipping = 5.99;
    }
    else if (total > 0) {
        shipping = 9.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div className="col-md-2 col-sm-2 col-3 cart-style" style={{ position: 'fixed', right: '0', textAlign: 'end', backgroundColor: '#ebe9e9' }}>
            <div className="my-5">
                <h5 className="text-primary">Order Summary</h5>
                <span className="text-secondary">Order Item: {cart.length} </span> <br /><br />
                <span>Main Price: ${(total).toFixed(2)}</span> <br />
                <span>Shipping: ${shipping}</span> <br />
                <span>Tax/VAT : ${tax}</span> <br /><br />
                <span className="text-primary mb-5">Total Price: ${grandTotal}</span>

                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Cart;