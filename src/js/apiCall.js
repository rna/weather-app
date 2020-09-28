import addApiData from './apiData';

const apiCall = (place) => {
  const apiKey = process.env.WEATHER_APP_API_KEY;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${apiKey}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      addApiData(data);
    })
    .catch(() => {
      // eslint-disable-next-line no-alert
      window.alert('Please check the city name');
    });
};

export default apiCall;