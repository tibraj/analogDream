import logo from './logo.svg';
import './App.css';
import Item from './components/Item.js'
import instruments from './instruments/instrument.js'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Item instruments={instruments}/>
    </div>
  );
}

export default App;
