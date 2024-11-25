import React, { useEffect, useState } from 'react';

 const Thirteen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const API_KEY = "168771779c71f3d64106d8a88376808a";
        
        // Fetch weather data
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const result = await response.json();
          console.log(result.data);
          setWeather(result);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      });
    } else {
      console.log("No geolocation support available");
    }
  }, []); // Added an empty dependency array to ensure the effect runs only once

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Thirteen;