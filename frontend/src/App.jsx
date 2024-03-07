import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { DarkNavbar } from "./DarkNavbar";
import Test from "./Test";
import axios from "axios";
// import  {moment}  from "moment";

import "./App.css";
import { useEffect, useState } from "react";
//import './App.css';

export default function App() {
  const [city, SetCity] = useState("");
  const [weatherdesc, SetWeatherdesc] = useState("");
  const [temp, SetTemp] = useState(0);
  const [humidity, SetHumidity] = useState(0);
  const [feelslike, SetFeelslike] = useState(0);
  useEffect(() => {
    fetchWeather();
  }, []);
  //const currentDate = moment();
  const today = new Date();

  const dateHeb = today.toLocaleDateString("he-IL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  async function fetchWeather() {
    try {
      const response = await axios.get("http://localhost:4000");
      const [city_name, weatherdesc, temp, humidity, feels_like] =
        response.data;
      SetCity(city_name);
      SetWeatherdesc(weatherdesc);
      SetTemp(Math.round(temp));
      SetHumidity(humidity);
      SetFeelslike(Math.round(feels_like));
      
      console.log(response.data + "im data in client");
    } catch (error) {
      throw new Error(`Error fetching location: ${error.message}`);
    }
  }



  https://maps.googleapis.com/maps/api/js?key=AIzaSyBWbD-D4rv1qWfDoidHqG9hR809N4VpB58&loading=async&libraries=places&callback=initMap
  return (
    <div>
      <DarkNavbar />
      <Card className="w-full   max-w-[48rem] flex-row ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-3/5 shrink-0 rounded-r-none"
        >
          <div className="sun-wrep">
            <span className="sun sunshine"></span>
            <span className="sun"></span>
            <span className="temp">{temp}°</span>
          </div>

          <div className="temp-scale">
            <span>צלזיוס</span>
          </div>

          {/* <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        /> */}
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4">
            {dateHeb}
          </Typography>

          <Typography variant="h4" color="blue-gray" className="mb-2">
            {city}
          </Typography>

          <Typography color="gray" className="mb-6 font-normal">
            {weatherdesc}
          </Typography>

          <div className="flex flex-row-reverse ">
            <h5 className="ml-2 ">: לחות</h5>
            <Typography color="gray" className="mb-6 font-normal">
              {humidity}
            </Typography>
          </div>
          {/* <div className="flex flex-row-reverse mr-3  ml-16 ">
            <h5> : מהירות רוח </h5>
            <Typography color="gray" className="mb-6 font-normal">
              {" "}
              180
            </Typography>
          </div>
          <div className="flex flex-row-reverse ml-16 mr-3">
            <h5 className="ml-2 ">: מעלות </h5>
            <Typography color="gray" className="mb-6 font-normal">
              78
            </Typography>
          </div> */}
          <div className="flex flex-row-reverse ">
            <h5 >: מרגיש כמו </h5>
            <Typography color="gray" className="mb-6 font-normal">
              {feelslike}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
