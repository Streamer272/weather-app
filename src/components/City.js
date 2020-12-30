import { useState } from "react";
import "./City.css";

const City = ({ cityName_, cityTemp_ }) => {
    const [cityName, setCityName] = useState(cityName_);
    const [cityTemp, setCityTemp] = useState(cityTemp_);

    return (
        <div id="city">
            <h1 className="name">{ cityName }</h1>
            <p className="temp">{ cityTemp }°C</p>
        </div>
    );
};

export { City };