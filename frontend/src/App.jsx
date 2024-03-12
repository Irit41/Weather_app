import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";
import { DarkNavbar } from "./DarkNavbar";
import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";
import CloudsWithRain from "./CloudsWithRain";

export default function App() {
  const [city, SetCity] = useState("");
  const [weatherdesc, SetWeatherdesc] = useState("");
  const [temp, SetTemp] = useState(0);
  const [humidity, SetHumidity] = useState(0);
  const [feelslike, SetFeelslike] = useState(0);
  useEffect(() => {
    fetchWeather();
  }, []);
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
    } catch (error) {
      throw new Error(`Error fetching location: ${error.message}`);
    }
  }

  const GetWeatherImgByDesc = () => {
    switch (true) {
      case weatherdesc.includes("בהיר"):
        return <WeatherImg category={"sun"} />;
      case weatherdesc.includes("ענן") || weatherdesc.includes("עננים"):
        return <WeatherImg category={"cloud"} />;
      case weatherdesc.includes("גשם"):
        return <CloudsWithRain />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <DarkNavbar
        SetCity={SetCity}
        SetWeatherdesc={SetWeatherdesc}
        SetTemp={SetTemp}
        SetHumidity={SetHumidity}
        SetFeelslike={SetFeelslike}
      />
      <Card className="w-full max-w-[48rem] bg-green-50 flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full md:w-3/5 rounded-r-none bg-green-50"
        >
          <div className="sun-wrep">
            <GetWeatherImgByDesc />

            <span className="temp">{temp}°</span>
          </div>

          <div className="temp-scale">
            <span>צלזיוס</span>
          </div>
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

          <div className="flex flex-row-reverse mb-6">
            <h5 className="ml-2">: לחות</h5>
            <Typography color="gray" className="font-normal">
              {humidity} %
            </Typography>
          </div>

          <div className="flex flex-row-reverse mb-6">
            <h5 className="ml-1"> : מרגיש כמו </h5>
            <Typography color="gray" className="font-normal">
              {feelslike}°
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

const WeatherImg = ({ category }) => {
  return (
    <>
      {category === "sun" ? (
        <>
          <span className="sun sunshine"></span>
          <span className="sun"></span>
        </>
      ) : (
        <>
          <div className="cloud front">
            <span className="left-front"></span>
            <span className="right-front"></span>
          </div>

          <span className="sun sunshine"></span>
          <span className="sun"></span>

          <div className="cloud back">
            <span className="left-back"></span>
            <span className="right-back"></span>
          </div>
        </>
      )}
    </>
  );
};
