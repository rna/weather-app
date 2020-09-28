import '../assets/styles/main.scss';
import apiCall from './apiCall';
import tempConversion from './tempConversion';

apiCall('Hyderabad');
tempConversion();

document.getElementById('searchButton').addEventListener('click', () => {
  const place = document.getElementById('search').value;
  apiCall(place);
});
