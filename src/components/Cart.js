import React from 'react';
import CartItem from './CartItem';

export default function Cart({cartItems, totalCost}) {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div>
                    <h1>Your Cart Is Empty</h1>
                </div>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem 
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            cost={item.price * item.quantity}
                        />
                    ))}
                    <h2>Total Cost: ${totalCost}</h2>
                </div>
            )}
        </div>
    );
}