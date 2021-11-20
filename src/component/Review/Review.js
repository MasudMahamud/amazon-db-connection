import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import orderImages from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    document.title='review';

    const handleProceedCheckout = () => {
        history.push('/shipment')
        //     setCart([]);
        //    processOrder();
        //    setOrderPlaced(true);
    }

    const handleRemoveProduct = (productKey) => {
        //console.log('Removing',productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //carts
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        fetch('https://intense-wave-75849.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => {
                setCart(data);
            })
    }, []);

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={orderImages} alt="" />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-8 col-6">
                    {
                        cart.length === 0 &&
                        <Box style={{ width: '80px', marginTop: '48%', marginLeft: '75%' }}>
                            <CircularProgress />
                        </Box>
                    }
                    {
                        cart.map(pd =>
                            <ReviewItem
                                key={pd.key}
                                handleRemoveProduct={handleRemoveProduct}
                                product={pd} >
                            </ReviewItem>)
                    }
                    {thankyou}
                </div>
                <div className="col-md-2 col-sm-2 col-3">
                    <Cart cart={cart}>
                        <button onClick={handleProceedCheckout} className="addToCartBtn my-4">
                            Proceed Checkout
                        </button>
                    </Cart>
                </div>
            </div>




        </div>
    );
};

export default Review;



