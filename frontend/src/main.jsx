import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Card from "./Card.jsx";
import Test from "./Test.jsx";
import CloudsWithRain from "./CloudsWithRain.jsx";
import GeocodeComponent from "./GeocodeComponent.jsx";
import { DarkNavbar } from "./DarkNavbar.jsx";
//import WeatherCard from "./WeatherCard";
// import { Card } from "./Card.jsx";

//<App />
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <GeocodeComponent/>
  </React.StrictMode>
);
