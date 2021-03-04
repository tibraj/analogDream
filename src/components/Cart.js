import React from 'react';
import CartItem from './CartItem';

export default function Cart({cartItems, totalCost}) {
    return (
        <div id="cart">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div>
                    <br/><br/>
                    <h1>Your Cart Is Empty</h1>
                </div>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <CartItem 
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            quantity={item.quantity}
                            cost={item.price * item.quantity}
                        />
                    ))}
                    <div className="total-cost">
                        <h2>Total Cost: ${totalCost}</h2>
                    </div>
                </div>
            )}
        </div>
    );
}