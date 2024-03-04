// import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import express from 'express'
// import { createServer as createViteServer } from 'vite'


// const __dirname = path.dirname(fileURLToPath(import.meta.url))


// async function getLocation() {
//     try {
//       const response = await axios.get('https://ipinfo.io/json');
//       const { ip } = response.data;
//       const geo = geoip.lookup(ip);
//       return geo;
//     } catch (error) {
//       throw new Error(`Error fetching location: ${error.message}`);
//     }
//   }
  
  
// async function createServer() {
//   const app = express()

//   // Create Vite server in middleware mode and configure the app type as
//   // 'custom', disabling Vite's own HTML serving logic so parent server
//   // can take control
//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//     appType: 'custom'
//   })

//   // Use vite's connect instance as middleware. If you use your own
//   // express router (express.Router()), you should use router.use
//   // When the server restarts (for example after the user modifies
//   // vite.config.js), `vite.middlewares` is still going to be the same
//   // reference (with a new internal stack of Vite and plugin-injected
//   // middlewares). The following is valid even after restarts.
//   app.use(vite.middlewares)

//   app.use('*', async (req, res) => {
        
//   async () => {
//     try {
//       const myLocationChord = await getLocation();
//       const dataFromSecondAPI = await fetchDataFromSecondAPI(myLocationChord);
//       res.send(dataFromSecondAPI)
//       //console.log(dataFromSecondAPI);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };
  
//     // serve index.html - we will tackle this next
//   })

//   app.listen(5173)
// }

// createServer()



  
  
//   async function fetchDataFromSecondAPI(dataFromFirstAPI) {
//     try {
//       const { ll } = dataFromFirstAPI;
//       const [latitude, longitude] = ll;
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=he&units=metric&appid=32aba94e40f3ab89efba08b0a0588488`;
//       const response = await axios.get(url);
//       const { weather , main, name } = response.data;
//       const { temp, feels_like ,humidity} = main;
//       const { description:weatherdesc} = weather[0];
  
  
//       return [name, weatherdesc,temp,humidity, feels_like ];
//     } catch (error) {
//       throw new Error(`Error fetching data from second API: ${error.message}`);
//     }
//   }
 