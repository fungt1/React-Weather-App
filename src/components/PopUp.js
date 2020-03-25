import React from "react";
import Popup from "reactjs-popup";

export const PopUp = () => (

    <Popup
        trigger={<button className="popUp-btn"> Important Information </button>}>
        <div>This is a simple weather application made in React.js. The weather information is provided
        by OpenWeatherMaps. Above to the right you can enter your chosen city and country to get the
        weather. The information will give you the temperature, area, and many other useful information.
        Countries can be abbreviated! Ex: United States = US. In future implementations I will be adding
        hourly weather. </div>

    </Popup>

);