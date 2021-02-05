import React from 'react';


export default function CartItem({name, cost, quantity}) {
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h2>Quanitity: {quantity}</h2>
                <h2>${cost}</h2>
            </div>
        </div>
    );
}