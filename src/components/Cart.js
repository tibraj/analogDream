import React from 'react';
import CartItem from './CartItem/CartItem';

export default function Cart({cartItems, totalCost}) {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map(item => (
                        <CartItem 
                            key={item.id}
                            name={item.name}
                            quanitity={item.quantity}
                            cost={item.price * item.quantity}
                        />
                    ))}
                    <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
                </div>
            ) : (
                <h1>Your Cart</h1>
            )}
        </div>
    );
}