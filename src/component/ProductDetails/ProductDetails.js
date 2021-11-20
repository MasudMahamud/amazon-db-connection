import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(true);
    document.title='product details';

    useEffect(() => {
        fetch('https://intense-wave-75849.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(result => {
                setProduct(result);
                setSpinner(false);
            })
    }, [productKey])

    return (
        <div className="product-details">
            <h2 className="text-center mt-3"> Product Details: </h2>
            {
                spinner ?
                    <Box style={{ width: '80px', marginTop: '20%', marginLeft: '45%' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <ProductDetailsCard product={product}></ProductDetailsCard>
            }
        </div>
    );
};

export default ProductDetails;