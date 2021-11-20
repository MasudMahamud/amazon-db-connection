import React from 'react';
import './Inventory.css';


const Inventory = () => {
    document.title = 'inventory';
    const handleAddProduct = () => {
        const product = {};
        fetch('http://https://intense-wave-75849.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div className="container">
            <div className="row text-center m-5">
                <form action="">

                    <p><span>Name: </span><input type="text" /></p>
                    <p><span>Price: </span><input type="text" /></p>
                    <p><span>Quantity: </span><input type="text" /></p>
                    <p><span>Upload Image: </span><input type="file" /></p>

                    <button onClick={handleAddProduct}>Add product</button>
                </form>
            </div>
        </div>
    );
};

export default Inventory;