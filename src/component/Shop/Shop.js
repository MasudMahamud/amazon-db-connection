import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    document.title='shop';

    useEffect(() => {
        fetch('https://intense-wave-75849.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
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
            .then(data => setCart(data))
    }, []);

    const handleAddProduct = (product) => {
        const toBeAddKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddKey)
            newCart = [...others, sameProduct];

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-sm-5 col-10" style={{ display: 'contents' }}>
                    {
                        products.length === 0 &&
                        <Box style={{ width: '80px', marginTop: '20%', marginLeft: '40%' }}>
                            <CircularProgress />
                        </Box>
                    }
                    {
                        products.map(pd => <Product
                            key={pd.key}
                            showAddToCart={true}
                            handleAddProduct={handleAddProduct}
                            product={pd}>
                        </Product>)
                    }
                </div>

                <Cart className="col-md-2" cart={cart}>
                    <Link to="/review">
                        <Button className="addToCartBtn">Review</Button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;