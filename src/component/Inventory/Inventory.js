import React from 'react';
import './Inventory.css';


const Inventory = () => {
    const handleAddProduct = () => {
        const product = {};
        fetch('http://localhost:5000/addProduct',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">

                <p><span>Name: </span><input type="text" /></p>
                <p><span>Price: </span><input type="text" /></p>
                <p><span>Quantity: </span><input type="text" /></p>
                <p><span>Upload Image: </span><input type="file" /></p>

              <button onClick={handleAddProduct}>Add product</button>
            </form>
            
        </div>
    );
};

export default Inventory;