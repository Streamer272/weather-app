import './App.css';
import { useState } from 'react';
import { City } from "./components/City";

const App = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const addCity = () => {
    setCities([...cities, city]);
    setCity('');
  };

  const getTemp = () => {
    const r1 = Math.floor(Math.random() * 10);
    const r2 = Math.floor(Math.random() * 10) / 10;
    const result = r1 + r2;
    return result;
  };

  return (
    <div className="App">
      <input onChange={(e) => { setCity(e.target.value) }} value={ city }/>
      <button onClick={() => { addCity() }}>+</button>
      { cities.map( (c) => { return <City cityName={ c } cityTemp={ getTemp() } /> }) }
    </div>
  );
};

export default App;