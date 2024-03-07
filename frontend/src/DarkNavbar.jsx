import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export function DarkNavbar() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const api_url = "https://data.gov.il/api/3/action/datastore_search";
  const cities_resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
  const city_name_key = "שם_ישוב";
  const cities_data_id = "cities-data";

  useEffect(() => {
    populateDataList(cities_data_id, cities_resource_id, city_name_key);
  }, [selectedCity]);

  const getData = async (resource_id, q = "", limit = "100") => {
    try {
      const response = await axios.get(api_url, {
        params: { resource_id, q, limit },
        responseType: "json",
      });
      return response.data.result.records;
    } catch (error) {
      console.log("Error fetching data:", error);
      return [];
    }
  };
  const parseResponse = (records = [], field_name) => {
    return records.map((record) => record[field_name].trim());
  };
  // const populateDataList = async (id, resource_id, field_name, query = "", limit = "32000") => {

  const populateDataList = async (
    id,
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
        {/* <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="white">
              <Cog6ToothIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="text" color="white">
              <BellIcon className="h-4 w-4" />
            </IconButton>
          </div> */}
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
            <option key={index} value={city}>{city}</option>
          ))}
        </datalist>

          {/* <select id="city-choice"   className="min-w-[450px] pr-20 h-9" >
          <option value="">Select a city</option>
        
            <option>dfsdfsdf</option>
          
        </select> */}

          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-0.4 bg-light-green-300 rounded"
            onClick={()=>alert(selectedCity)}
          >
            <h3> חפש</h3>
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
