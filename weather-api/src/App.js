import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Weather Component</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={handleInputChange} 
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
       {/* {error && <p>Error: {error.message}</p>}  */}
      {weatherData && (
        <div>
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;
