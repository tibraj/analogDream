import React from 'react';


export default function CartItem({name, image, cost, quantity}) {
    return (
        <div className="cart-item">
                <h1>{name}</h1>
                <img className="cart-image" src={image} alt=""/>
                <h2>Quanitity: {quantity}</h2>
                <h2>${cost}</h2>
        </div>
    );
}