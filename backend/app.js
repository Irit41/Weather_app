const axios = require('axios');
const geoip = require('geoip-lite');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
app.use(cors())
var corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }




async function getLocation() {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    const { ip } = response.data;
    console.log(ip);
    const geo = geoip.lookup(ip);
     return geo;
  } catch (error) {
    throw new Error(`Error fetching location: ${error.message}`);
  }
}




async function fetchDataFromSecondAPI(dataFromFirstAPI) {
  try {
    const { ll } = dataFromFirstAPI;
    const [latitude, longitude] = ll;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=he&units=metric&appid=32aba94e40f3ab89efba08b0a0588488`;
    const response = await axios.get(url);
    const { weather , main, name } = response.data;
    const { temp, feels_like ,humidity} = main;
    const { description:weatherdesc} = weather[0];


    return [name, weatherdesc,temp,humidity, feels_like ];
  } catch (error) {
    throw new Error(`Error fetching data from second API: ${error.message}`);
  }
}

app.get('/', cors(corsOptions), (req, res) => {
    
  
  
(async () => {
  try {
   const myLocationChord = await getLocation();

     const dataFromSecondAPI = await fetchDataFromSecondAPI(myLocationChord);
    res.send(dataFromSecondAPI)
    console.log(dataFromSecondAPI);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })