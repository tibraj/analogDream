import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/Item.js'
import instruments from './instruments/instrument.js'

function App() {
  console.log(instruments);
  // const [cart, setCartItems] = useState([]);
  // const handleCartAddition = (id) => {
  //   setCartItems(cart => {
  //     const cartItem = cart.find(instrument => instrument.id === id);
  //     if(cartItem) {
  //       return cart.map(instrument => {
  //         if(instrument.id !== id) return instrument;
  //         console.log(instrument.id);
  //         return {...cartItem, quantity: instrument.quantity + 1};
  //       });
  //     }
  //     const instrument = instruments.find(instrument => instrument.id === id);
  //     return [...cart, {...instrument, quanitty: 1}];
  //   });
  // }

  // const totalCost = cart.reduce(
  //   (acc, instrument) => acc + instrument.price * instrument.quanitity, 0
  // );
  return (
    <div className="App">
      <h1>Hello World</h1>
      {instruments.map(instrument => (
        <Item key={instrument.title} name={instrument.name} name={instrument.name} image={instrument.image} price={instrument.price}
        sounds={instrument.sounds} effects={instrument.effects} sequencer={instrument.sequencer} yearOfRelease={instrument.yearOfRelease} />
      ))}
    </div>
  );
}

export default App;
