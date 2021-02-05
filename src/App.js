import logo from './logo.svg';
import './App.css';
import Item from './components/Item.js'
import instruments from './instruments/instrument.js'

function App() {
  const [cart, setCartItems] = useState([]);
  const handleCartAddition = (id) => {
    setCartItems(cart => {
      const cartItem = cart.find(item => item.id === id);
      if(cartItem) {
        return cart.map(item => {
          if(item.id !== id) return item;
          return {...cartItem, quantity: item.quantity + 1};
        });
      }
      const item = items.find(item => item.id === id);
      return [...cart, {...item, quanitty: 1}];
    });
  }

  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quanitity, 0
  );
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Item instruments={instruments}/>
    </div>
  );
}

export default App;
