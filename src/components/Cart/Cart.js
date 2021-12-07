import React from 'react';
import './Cart.css';

const Cart = (props) => {

    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const product = props.cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 2.99;
    }
    else if (total > 0) {
        shipping = 8.99;
    }





    const tax = Math.round(total / 10);

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const grandTotal = total + shipping + tax
    const finalValue = formatNumber(grandTotal);
    const finalShipping = formatNumber(shipping);

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {props.cart.length}</p>
            <p>Product price: {total}</p>
            <p><small>Shipping cost: {finalShipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total price: {finalValue}</p>
        </div>
    );
};

export default Cart;