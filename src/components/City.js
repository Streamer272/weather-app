import { useState } from "react";
import "./City.css";

const City = ({ cityName, cityTemp }) => {
    const [name, setCityName] = useState(cityName);
    const [temp, setCityTemp] = useState(cityTemp);

    console.log(cityName + ", " + cityTemp)

    const getTemp = (city_) => {
        api.openweathermap.org/data/2.5/weather?q={ city_ }&appid={ "bac6665427d45c39c0d8ecaa78c4591d" }
    }

    return (
        <div id="city" className="cityDiv">
            <h1 className="name">{ name }</h1>
            <p className="temp">{ temp }°C</p>
        </div>
    );
};

export { City };