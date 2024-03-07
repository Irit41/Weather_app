import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './test.css';

const api_url = "https://data.gov.il/api/3/action/datastore_search";
const cities_resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
const city_name_key = "שם_ישוב";
const cities_data_id = "cities-data";

const Test = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    populateDataList(cities_data_id, cities_resource_id, city_name_key);
    // populateDataList(streets_data_id, streets_resource_id, street_name_key, selectedCity);
  }, [selectedCity]);

  const getData = async (resource_id, q = "", limit = "100") => {
    try {
      const response = await axios.get(api_url, {
        params: { resource_id, q, limit },
        responseType: "json"
      });
      return response.data.result.records;
    } catch (error) {
      console.log("Error fetching data:", error);
      return [];
    }
  };

  const parseResponse = (records = [], field_name) => {
    return records.map(record => record[field_name].trim());
  };
  // const populateDataList = async (id, resource_id, field_name, query = "", limit = "32000") => {

  const populateDataList = async (id,resource_id, field_name, query = "", limit = "32000") => {
    const data = await getData(resource_id, query, limit);
    const parsedData = parseResponse(data, field_name);
    setCities(parsedData);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <form action="">
      <div className="form-field" id="city-selection">
        <label htmlFor="city-choice">בחר עיר:</label>
        <input list="cities-data" id="city-choice" name="city-choice" onChange={handleCityChange} value={selectedCity} />
        <datalist id="cities-data">
          <option value="">טוען רשימת ערים...</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </datalist>
      </div>
    
     
    </form>
  );
};

export default Test;
