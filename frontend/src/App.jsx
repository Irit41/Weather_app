import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import WeatherCard from "./WeatherCard";
import "./cloudsWithRain.css";
  import "./card.css";
 
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
    
     <div className ="bg-blue-gray-500 w-[48rem] flex-shrink-0 ">
     <input type="text" placeholder="City" />
     <Button>Search</Button>
     <Card className="w-full max-w-[48rem] my-3.5 flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <div className ="mt-5 justify-center">
          <span className="sun sunshine "></span>
      <span className="sun "></span>
          </div>
         
          {/* <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          /> */}
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="gray" className="mb-4  uppercase">
          <div className="card-header ">
          <span >05 מרץ </span>
      <p >בת ים</p>
    
    </div>

          </Typography>
          {/* <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography> */}
          <Typography variant="h4" color="blue-gray" className="mb-2">
            בהיר ללא עננים
            
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
          <span className="temp">23°</span>

<div className="temp-scale">
  <span>Celcius</span>
</div>
          </Typography>
          {/* <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part
            of the story
          </Typography> */}
          {/* <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg> */}
            {/* </Button> */} 
          {/* </a> */}
        </CardBody>
      </Card>
    
    {/* <WeatherCard/> */}
     <ul className="divide-y divide-gray-200">

        <Arr/> </ul>
      {/* </div> */}
      </div>
    </>
  )
}

export default App
