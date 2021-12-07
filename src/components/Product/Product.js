import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    return (

        <div className='productStyle'>
            <div>
                <img src={props.product.img} alt=''></img>
            </div>
            <div>
                <h4 className='productName'>{props.product.name}</h4>
                <br></br>
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <p><small>Only {props.product.stock} left in stock - Order soon</small></p>
                <button
                    onClick={() => props.handleAddProduct(props.product)}
                    className='buttonStyle'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>

        </div>
    );
};

export default Product;