import '../assets/styles/main.scss';

const api_key = process.env.WEATHER_APP_API_KEY;

document.getElementById('searchButton').addEventListener('click',()=>{
  const place = document.getElementById('search').value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${api_key}`, {mode: "cors"})
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log("Success");
    console.log(data.name);
  })
  .catch(function(err){
    console.log("Oops...Error");
    console.log(err);
  })
})
