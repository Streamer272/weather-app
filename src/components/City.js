import { useState } from "react";
import "./City.css";

const City = ({ cityName, cityTemp }) => {
    const [name, setCityName] = useState(cityName);
    const [temp, setCityTemp] = useState(cityTemp);

    console.log(cityName + ", " + cityTemp)

    return (
        <div id="city" className="cityDiv">
            <h1 className="name">{ name }</h1>
            <p className="temp">{ temp }°C</p>
        </div>
    );
};

export { City };