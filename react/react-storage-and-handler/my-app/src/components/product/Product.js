import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { name, price, image,  } = props.product
   const{product ,handleAddToCart} = props
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
            <h4 className='productName'>Name: {name}</h4>
            <p>Price: ${price}</p>
           </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to card</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;