import '../assets/styles/main.scss';

const apiKey = process.env.WEATHER_APP_apiKey;

document.getElementById('searchButton').addEventListener('click', () => {
  const place = document.getElementById('search').value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${apiKey}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
    })
    .catch((err) => {
      console.log(err);
    });
});
