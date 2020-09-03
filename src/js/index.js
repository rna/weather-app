import '../assets/styles/main.scss';

const apiKey = process.env.WEATHER_APP_API_KEY;

document.getElementById('searchButton').addEventListener('click', () => {
  const place = document.getElementById('search').value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${apiKey}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
