import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Item from './components/Item.js'
import instruments from './instruments/instrument.js'
import Cart from './components/Cart.js'
import { Elements, StripeProvider } from 'react-stripe-elements';
import Checkout from './components/Checkout';

function App() {
  console.log(instruments);
  const [cartItems, setCartItems] = useState([]);
  const handleCartAddition = id => {
    setCartItems(cartItems => {
      const cartItem = cartItems.find(item => item.id === id);
      if(cartItem) {
        return cartItems.map(item => {
          if(item.id !== id) return item;
          return {...cartItem, quantity: item.quantity + 1};
        });
      }
      const instrument = instruments.find(instrument => instrument.id === id);
      return [...cartItems, {...instrument, quantity: 1}];
    });
  };

  const totalCost = cartItems.reduce((acc, instrument) => 
    acc + instrument.price * instrument.quantity, 0
  );
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <div className="instruments">
        {instruments.map(instrument => (
          <Item key={instrument.id} name={instrument.name} name={instrument.name} image={instrument.image} price={instrument.price}
          sounds={instrument.sounds} effects={instrument.effects} sequencer={instrument.sequencer} yearOfRelease={instrument.yearOfRelease} 
          handleCartAddition={() => handleCartAddition(instrument.id)}/>
        ))}
      </div>
      <div className="cart">
        <Cart cartItems={cartItems} totalCost={totalCost} />
        {cartItems.length > 0 && (
          <StripeProvider apiKey="public_key">
            <Elements>
              <Checkout totalCost={totalCost} />
            </Elements>
          </StripeProvider>
        )}
      </div>
    </div>
  );
}

export default App;
