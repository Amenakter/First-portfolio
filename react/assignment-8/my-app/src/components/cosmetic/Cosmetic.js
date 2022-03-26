import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import { addToDatabase, removeFromDB } from '../utilities/fakedb';
import './cosmetic.css'

const Cosmetic = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data =>setProducts(data))
        
    },[])

    const handleAddToCart = (product) => {
        console.log(product);
        
        const newCart = [...cart, product]
        setCart(newCart)

    }
    return (
        <div className='products'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handleAddToCart = {handleAddToCart}
                        ></Product>)
               }
            </div>
            <div className="card-container">
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Cosmetic;