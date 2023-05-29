


import React from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from "./Loader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

// require('dotenv').config();

function Weather() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const toDate = () => {
    // let date = new Date();
    // const today = date.toDateString();
    // return today;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'Nocvember',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      setWeather({ ...weather, loading: true });
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      
      const appid = '47b4deb9e36114bcd42c8b1727c8ec13';

      
      //console.log('Enter');

      await axios
        .get(url, {
          params: {
            q: query,
            units: 'metric',
            appid: appid,
          },
        })
        .then((res) => {
          console.log('res', res);
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setQuery('');
          console.log('error', error);
        });
    }
  };

  const handleSign = () => {
    console.log("sign in");
    navigate("/login");
  }

  return (
    <div className='App'>
      <div style={{display:'flex', flexDirection:'row'}}>

      <h1 style={{color:'white', marginLeft:70}} className="app-name">
        Weather App<span>🌤</span>
      </h1>

      {/* <Link to="/login"> */}

      <button onClick={handleSign}  className='green_btn-home'>
							Sing In
						</button>

      {/* </Link> */}


      </div>
     
      
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Search City.."
          name="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={search}
        />
      </div>

      {weather.loading && (
        <>
          <br />
          <br />
          <Loader type="Oval" color="black" height={100} width={100} />
        </>
      )}
      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <FontAwesomeIcon icon={faFrown} />
            <span style={{ 'font-size': '20px' }}> Sorry, City not found</span>
          </span>
        </>
      )}

      {weather && weather.data && weather.data.main && (
        <div>
          <div className="city-name">
            <h2>
              {weather.data.name}, <span>{weather.data.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{toDate()}</span>
          </div>
          <div className="icon-temp">
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <sup className="deg">&deg;C</sup>
          </div>
          <div className="des-wind">
            <p className='more-details-overcast'>{weather.data.weather[0].description.toUpperCase()}</p>
            <p className='more-details'>Wind Speed: {weather.data.wind.speed}m/s</p>
            <p className='more-details'>Humidity: {weather.data.main.humidity}%</p>
            <p className='more-details'>Max Temp: {weather.data.main.temp_max}°C</p>
            <p className='more-details'>Min Temp: {weather.data.main.temp_min}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
