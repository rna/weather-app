const tempConversion = () => {
  const toggle = document.querySelector('input[type="checkbox"]');
  const conversion = document.getElementById('toF');
  const tempData = document.getElementById('temp');
  toggle.addEventListener('click', () => {
    if (conversion.innerHTML === 'C') {
      conversion.innerHTML = 'F';
      tempData.innerHTML = Math.round((tempData.innerHTML * (9 / 5)) + 32);
    } else {
      conversion.innerHTML = 'C';
      tempData.innerHTML = Math.round((tempData.innerHTML - 32) * (5 / 9));
    }
  });
};

export default tempConversion;