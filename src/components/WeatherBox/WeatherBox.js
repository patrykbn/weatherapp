import React, { useCallback, useEffect, useState } from 'react';
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';

const WeatherBox = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const weatherApi = 'd2414fc5a71016a4c04c0030fa2f641b';

  const handleCityChange = useCallback((city) => {
    setLoading(true);
    setError(false);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(data => {
              const weatherData = {
                city: data.name,
                temp: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].main
              };
              setWeatherData(weatherData);
              setLoading(false);
            });
        } else {
          alert('ERROR!');
          setWeatherData(null);
          setLoading(false);
          setError(true);
        }
      })
      .catch(() => {
        setLoading(false);
        //setWeatherData(null);
      });
  }, [weatherApi]);

  useEffect(() => {
    // Fetch weather data for Warsaw when the component mounts
    handleCityChange('Warsaw');
  }, [handleCityChange]);

  return (
    <section>
      <PickCity onCityChange={handleCityChange} />
      {loading && <Loader />}
      {!loading && weatherData && <WeatherSummary data={weatherData} />}
      {error && <ErrorBox children={'There is no such City'} />}
    </section>
  );
};

export default WeatherBox;
