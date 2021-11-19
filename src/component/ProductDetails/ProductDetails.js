import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://intense-wave-75849.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(result => setProduct(result))
    }, [productKey])

    return (
        <div className="product-details">
            <h2 className="text-center mt-3"> Product Details: </h2>
            <ProductDetailsCard product={product}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;