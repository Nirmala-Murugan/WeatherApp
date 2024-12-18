import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Current from "./assets/Components/Current";
import Forecast from "./assets/Components/Forecast";
import "bootstrap/dist/js/bootstrap.bundle";
import { RiDeleteBack2Line } from "react-icons/ri";

function App() {
  const [city, setCity] = useState();
  const [clickedCity, setclickedCity] = useState();
  const [citySuggestion, setcitySuggestion] = useState([]);
  const [currentWeather, setCurrent] = useState();
  const [forecastWeather, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoComURL =
    "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";

  const weatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoComAPI();
    }
  }, [city]);

  const handleClear = () => {
    setclickedCity("");
  };

  const fetchAutoComAPI = async () => {
    try {
      const response = await axios.get(autoComURL + city);
      const resp = response.data;
      console.log(resp);

      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      setcitySuggestion(cityData);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleSelectedCity = (city) => {
    console.log("clickedCity", city);
    setclickedCity(city);
    fetchWeatherAPI(city);
    setcitySuggestion([]);
  };

  const refreshWeather = () => {
    setCurrent();
    setForecast();
    setLocation();
    setclickedCity();
  };
  const fetchWeatherAPI = async (city) => {
    try {
      const respose = await axios.get(weatherURL(city));
      const resp = respose.data;
      // console.log(resp);
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);

      console.log("current", resp.current);
      console.log("Forecast", resp.forecast);
      console.log("location", resp.location);
    } catch (e) {
      console.log("Weather API error", e);
    }
  };
  return (
    <div className="weather-app">
      <div className="panel">
        <div class="row">
          <div class="col">
            <div className="search-bar">
              <input
                type="text"
                value={clickedCity}
                className="form-control text-center"
                placeholder="Enter Your city Name"
                onChange={(e) => {
                  setCity(e.target.value);
                  if (e.target.value === "") {
                    refreshWeather();
                  }
                }}
              />
              {clickedCity && (
                <button
                  onClick={(e) => {
                    setCity(e.target.value);
                    if (e.target.value === "") {
                      refreshWeather();
                      handleClear();
                    }
                  }}
                >
                  {" "}
                  <RiDeleteBack2Line
                    style={{ width: "18px", height: "18px" }}
                  />
                </button>
              )}
            </div>
            {/* {city && <h4>{city}</h4>} */}
            {citySuggestion &&
              citySuggestion.map((data, index) => {
                return (
                  <div
                    key={index}
                    className=" hover-box text-center rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelectedCity(data)}
                  >
                    {data}
                  </div>
                );
              })}
          </div>
          <div class="col p-2 my-4">
            <div>
              {currentWeather && (
                <Current currentWeather={currentWeather} location={location} />
              )}
              {forecastWeather && (
                <Forecast
                  forecastWeather={forecastWeather}
                  location={location}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
