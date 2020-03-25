import React from "react";

//And operator for the markers
const Hour = props => (

    <div className="weather__info" >
        <div className="extra__info" >
            {
                props.firstHour && <p className="weather__key"> first
	 		<span className="weather__value"> {props.firstHour} </span>
                </p>
            }
        </div>
    </div>
);

export default Hour;