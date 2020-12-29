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

  return (
    <div className="App">
      <input onChange={(e) => { setCity(e.target.value) }} value={ city }/>
      <button onClick={() => { addCity() }}>+</button>
      <City cityData={"London", 5} />
      <City cityData={"Bratislava", 10} />
    </div>
  );
};

export default App;