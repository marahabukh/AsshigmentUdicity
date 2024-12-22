const apiKey = '932e43b5650f58f9b662b13afe4e8ee9&units=imperial';
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

document.getElementById('submit').addEventListener('click', () => {
  const zip = document.getElementById('zipcode').value;
  const feelings = document.getElementById('feelings').value;

  if (!zip) {
    alert('Please enter a valid ZIP Code');
    return;
  }

  fetchWeather(apiURL, zip, apiKey)
    .then((data) => {
      if (data.cod === 200) {
        updateUI({
          date: new Date().toLocaleDateString(),
          temp: `${data.main.temp}°F`,
          mood: feelings,
        });
      } else {
        alert('Invalid ZIP Code. Try again.');
      }
    })
    .catch((error) => console.error('Error:', error));
});

const fetchWeather = async (url, zip, key) => {
  const response = await fetch(`${url}${zip}&appid=${key}`);
  return response.json();
};

const updateUI = (data) => {
  document.getElementById('date').textContent = `Date: ${data.date}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.temp}`;
  document.getElementById('mood').textContent = `Feeling: ${data.mood}`;
};
