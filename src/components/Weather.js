import React from "react";
import { init } from './extra/bGChange'

//And operator for the markers
const Weather = props => (

    <div className="weather__info" >
        {
            props.city && props.country &&
            <p className="weather__value" > {props.city}, {props.country}</p>

        }
        {
            props.city && props.country &&
            <p className="weather__value"> {props.weather} {init(props.weather)}</p>

        }
        {
            props.temperature &&
            <p className="weather__value"> {props.temperature}° </p>


        }
        <div className="extra__info" >
            {
                props.sunrise && <p className="weather__key"> Sunrise
	 		<span className="weather__value"> {props.sunrise} </span>
                </p>
            }
            {
                props.sunset && <p className="weather__key"> Sunset
	 		<span className="weather__value"> {props.sunset} </span>
                </p>
            }
            {
                props.humidity && <p className="weather__key"> Humidity
	 		<span className="weather__value"> {props.humidity} </span>
                </p>
            }
            {
                props.description && <p className="weather__key"> Conditions
	 		<span className="weather__value"> {props.description} </span>
                </p>
            }
            {
                props.wind && <p className="weather__key"> Wind
	 		<span className="weather__value"> {props.wind} mph </span>
                </p>
            }
            {
                props.feelTemp && <p className="weather__key"> Feels Like
	 		<span className="weather__value"> {props.feelTemp}° </span>
                </p>
            }
            {
                props.visibility && <p className="weather__key"> Visibility
	 		<span className="weather__value"> {props.visibility} mi </span>
                </p>
            }
            {
                props.pressure && <p className="weather__key"> Pressure
	 		<span className="weather__value"> {props.pressure} inHg </span>
                </p>
            }
            {
                props.error && <p className="weather__error">{props.error}</p>
            }
        </div>
    </div>
);

export default Weather;