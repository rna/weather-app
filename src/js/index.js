import '../assets/styles/main.scss';
import addApiData from './apiData';

const apiKey = process.env.WEATHER_APP_API_KEY;

document.getElementById('searchButton').addEventListener('click', () => {
  const place = document.getElementById('search').value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${apiKey}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      addApiData(data);
    })
    .catch((err) => {
      document.write(err);
    });
});

const conversion = document.getElementById('toF');
const tempData = document.getElementById('temp');
conversion.addEventListener('click', () => {
  if (conversion.innerHTML === 'C') {
    conversion.innerHTML = 'F';
    tempData.innerHTML = Math.round((tempData.innerHTML * (9 / 5)) + 32);
  } else {
    conversion.innerHTML = 'C';
    tempData.innerHTML = Math.round((tempData.innerHTML - 32) * (5 / 9));
  }
});