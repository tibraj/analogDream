import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/Item.js'
import instruments from './instruments/instrument.js'
import Cart from './components/Cart.js'
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
      <h1>Hello World</h1>
      <div className="instruments">
        {instruments.map(instrument => (
          <Item key={instrument.id} name={instrument.name} name={instrument.name} image={instrument.image} price={instrument.price}
          sounds={instrument.sounds} effects={instrument.effects} sequencer={instrument.sequencer} yearOfRelease={instrument.yearOfRelease} 
          handleCartAddition={() => handleCartAddition(instrument.id)}/>
        ))}
      </div>
      <div className="cart">
        <Cart cartItems={cartItems} totalCost={totalCost} />
      </div>
    </div>
  );
}

export default App;
