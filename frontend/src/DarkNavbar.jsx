import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Navbar,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

export function DarkNavbar(props) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const api_url = "https://data.gov.il/api/3/action/datastore_search";
  const cities_resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
  const city_name_key = "שם_ישוב";

  useEffect(() => {
    populateDataList(cities_resource_id, city_name_key);
  }, []);

  const getData = async (resource_id, q = "", limit = "100") => {
    try {
      const response = await axios.get(api_url, {
        params: { resource_id, q, limit },
        responseType: "json",
      });
      return response.data.result.records;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const parseResponse = (records = [], field_name) => {
    return records.map((record) => record[field_name].trim());
  };

  const populateDataList = async (
    resource_id,
    field_name,
    query = "",
    limit = "32000"
  ) => {
    const data = await getData(resource_id, query, limit);
    const parsedData = parseResponse(data, field_name);
    setCities(parsedData);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const fetchCoordinates = async () => {
    if (selectedCity==="לא רשום") {
      setSelectedCity("")
      return alert("לא נמצאה עיר נסה שוב")
    }
    try {
      
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${selectedCity}`
      );
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        fetchWeather(lat, lon);
      } else {
        alert("לא נמצאה עיר נסה שוב");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
    finally{
      setSelectedCity("")
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.post("http://localhost:4000", {
        latitude: lat,
        longitude: lon,
      });
      const [city_name, weatherdesc, temp, humidity, feels_like] =
        response.data;
      props.SetCity(city_name);
      props.SetWeatherdesc(weatherdesc);
      props.SetTemp(Math.round(temp));
      props.SetHumidity(humidity);
      props.SetFeelslike(Math.round(feels_like));
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto mb-12 max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 top-0 py-3"
    >
      <div className="flex flex-row flex-wrap items-center justify-between  gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Weather4me{" "}
        </Typography>
        <div className="relative flex w-full gap-20 md:w-max">
          <Input
            type="search"
            color="white"
            label="בחר עיר"
            list="cities-data"
            className="pr-20"
            onChange={handleCityChange}
            value={selectedCity}
            containerProps={{
              className: "min-w-[450px]",
            }}
          />
          <datalist id="cities-data">
            <option value="">טוען רשימת ערים...</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </datalist>

          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-0.4 bg-light-green-300 rounded"
            onClick={fetchCoordinates}
          >
            <h3> חפש</h3>
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
