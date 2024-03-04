import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import WeatherCard from "./WeatherCard";

 
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { theArr } from "./CitiesArr";

function App() {
  const [mycity, setMyCity] = useState(theArr)

  // axios.get('http://localhost:4000/')
  // .then(response => {console.log(response.data)})
  // // console.log(mycity)
  // .catch(error => {console.log(error)})
const Arr = () =>{
 return mycity.map((c,index)=>{
    return(

        <li  key={index} className="py-4 flex">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{c.name}</p>
            <p className="text-sm text-gray-500">{c.weatherdesc}</p>
            <p className="text-sm text-gray-500">{c.temp}</p>
            <p className="text-sm text-gray-500">{c.humidity}</p>
            <p className="text-sm text-gray-500">{c.feels_like}</p>
          </div>
        </li>
      )}
      // <div key={index}>
      // <h1>{c.name}</h1>
      // <h1>{c.weatherdesc}</h1>
      // <h1>{c.temp}</h1>
      // <h1>{c.humidity}</h1>
      // <h1>{c.feels_like}</h1>
      // </div>
      )
    

}
  return (
    <>
    
     <div >
    <input type="text" placeholder="City" />
     <Button>Search</Button>
    <WeatherCard/>
     <ul className="divide-y divide-gray-200">

        <Arr/> </ul>
      {/* </div> */}
      </div>
    </>
  )
}

export default App
