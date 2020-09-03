
import gifObject from './gifObject';

const addApiData = (data) => {
  const cityName = document.getElementById('city');
  const weather = document.getElementById('weather');
  const temp = document.getElementById('temp');
  document.body.style.background = `url(${gifObject[data.weather[0].icon]}) no-repeat`;
  document.body.style.backgroundSize = 'cover';
  cityName.innerHTML = data.name;
  weather.innerHTML = data.weather[0].main;
  temp.innerHTML = Math.round(data.main.temp);
};

export default addApiData;