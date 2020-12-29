import { useState } from "react";
import "./City.css";

const City = ({ cityData }) => {
    const [city, setCity] = useState(cityData);
    const [cityName, setCityName] = useState(city.name);
    const [temp, setTemp] = useState(city.temp)

    return (
        <div className="main">
            <h1 className="cityName">{ cityName }</h1>
            <p className="cityTemp">{ temp }°C</p>
        </div>
    );
};

export { City };