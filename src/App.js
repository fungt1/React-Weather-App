import React from 'react';

//import Titles from './components/Titles';
//import Form from './components/Form';
import Weather from './components/Weather';
import Top from './components/Navbar';

//import Hour from './components/hourWeather'

//math imports
import { TimeStamp } from './components/utils/Timestamp';
import { getMiles } from './components/utils/MMConvert';
import { getFar } from './components/utils/CToFConvert';
import { getHg } from './components/utils/Pressure';
import { getMH } from './components/utils/Wind';


const API_KEY = "";

class App extends React.Component {
  //For the general weather
  state = {
    temperature: undefined,
    weather: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    humidity: undefined,
    wind: undefined,
    feelTemp: undefined,
    visibility: undefined,
    description: undefined,
    pressure: undefined,
    error: undefined,
  }

  //Retreive the weather using async/await from openweathermap
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      if (data.cod == 404) {
        this.setState({
          temperature: undefined,
          city: undefined,
          weather: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          wind: undefined,
          feelTemp: undefined,
          visibility: undefined,
          humidity: undefined,
          pressure: undefined,
          description: undefined,
          error: "Please enter a correct city or country."
        })
      } else {
        this.setState({
          temperature: parseInt(getFar(data.main.temp)),
          city: data.name,
          wind: parseInt(getMH(data.wind.speed)),
          feelTemp: parseInt(getFar(data.main.feels_like)),
          visibility: parseInt(getMiles(data.visibility)),
          weather: data.weather[0].main,
          country: data.sys.country,
          sunrise: TimeStamp(data.sys.sunrise),
          sunset: TimeStamp(data.sys.sunset),
          humidity: data.main.humidity,
          pressure: parseInt(getHg(data.main.pressure)),
          description: data.weather[0].description,
          error: ""

        })
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        weather: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        wind: undefined,
        feelTemp: undefined,
        visibility: undefined,
        humidity: undefined,
        pressure: undefined,
        description: undefined,
        error: "Please enter the value."

      })
    }
  }

  /*//hourly weather 
  stateHour = {
    firstHour: undefined,

  }

  //Retreive the weather using async/await from openweathermap
  getHourlyWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=xml&appid=${API_KEY}`);

    const dataHour = await api_call.json();

    console.log(dataHour);
    if (city && country) {
      this.setState({
        firstHour: (dataHour.list[0].main.temp),

      })
    } else {
      this.setState({
        firstHour: undefined,


      })
    }
  }*/

  render() {

    return (
      <div>
        <Top getWeather={this.getWeather}
        />
        <div className="wrapper">
          <div className="col-xs-7 form-container">
            <Weather
              temperature={this.state.temperature}
              weather={this.state.weather}
              humidity={this.state.humidity}
              wind={this.state.wind}
              feelTemp={this.state.feelTemp}
              visibility={this.state.visibility}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              description={this.state.description}
              pressure={this.state.pressure}
              error={this.state.error}
            />
          </div>
          {/*<div className="col-xs-7 form-container">
              <Hour
                firstHour={this.state.firstHour}
              />
    </div>*/}
        </div>
      </div>
    );
  }
};

export default App;