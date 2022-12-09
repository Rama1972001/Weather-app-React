import './App.css';
import SearchSection from './component/Search_section';
import Weather from './component/Weather';
import { API_URL, API_KEY } from './api';
import { useState } from 'react';
import ForeCastSection from './component/ForecastSection';

function App() {

  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${API_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    const forecastFetch = fetch(`${API_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (resp) => {
        const weatherresp = await resp[0].json();
        const forecastresp = await resp[1].json();

        setcurrentWeather({ city: searchData.label, ...weatherresp });
        setForeCast({ city: searchData.label, ...forecastresp });

      })
  }



  return (
    <div className="container">
      {/* header */}
      <div className='header'>
        <SearchSection onSearchChange={handleOnSearchChange} /></div>
      {/* main */}
      <div className='main'>
        {currentWeather && <Weather data={currentWeather} />}</div>
      {/* bottom */}

      {forecast && <ForeCastSection data={forecast} />}
    </div>
  );
}

export default App;
