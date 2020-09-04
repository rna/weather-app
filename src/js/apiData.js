
import gifObject from './gifObject';

const addApiData = (data) => {
  const { name, weather, main } = data;
  const cityName = document.getElementById('city');
  const weatherInfo = document.getElementById('weather');
  const temp = document.getElementById('temp');
  document.body.style.background = `url(${gifObject[weather[0].icon]}) no-repeat`;
  document.body.style.backgroundSize = 'cover';
  cityName.innerHTML = name;
  weatherInfo.innerHTML = weather[0].main;
  temp.innerHTML = Math.round(main.temp);
};

export default addApiData;