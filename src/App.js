import './App.css';
import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const addCity = () => {
    setCities([...cities, city]);
    setCity('');
  };

  return (
    <div className="App">
      <input onChange={(e) => { setCity(e.target.value) }} value={ city }/>
      <button onClick={() => { addCity() }}>+</button>
    </div>
  );
}

export default App;