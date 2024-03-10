const express = require('express');
const axios = require('axios');
const geoip = require('geoip-lite');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const apiKey = '32aba94e40f3ab89efba08b0a0588488';

async function getLocation() {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    const { ip } = response.data;
    const geo = geoip.lookup(ip);
    return geo;
  } catch (error) {
    throw new Error(`Error fetching location: ${error.message}`);
  }
}

async function fetchDataFromWeatherAPI(latitude, longitude) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=he&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    const { weather, main, name: city_name } = response.data;
    const { temp, feels_like, humidity } = main;
    const { description: weatherdesc } = weather[0];
    return [city_name, weatherdesc, temp, humidity, feels_like];
  } catch (error) {
    throw new Error(`Error fetching data from weather API: ${error.message}`);
  }
}

app.post('/', cors(), async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const weather = await fetchDataFromWeatherAPI(latitude, longitude);
    res.send(weather);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.get('/', cors(), async (req, res) => {
  try {
    const myLocationChord = await getLocation();
    const { ll } = myLocationChord;
    const [latitude, longitude] = ll;
    const weatherData = await fetchDataFromWeatherAPI(latitude, longitude);
    res.send(weatherData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Weather app listening on port ${port}`);
});
