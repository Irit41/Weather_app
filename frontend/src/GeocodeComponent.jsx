import React, { useState } from 'react';
import axios from 'axios';

const GeocodeComponent = () => {
  const [cityName, setCityName] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleCityNameChange = (event) => {
    setCityName(event.target.value);
  };

  const fetchCoordinates = async () => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`);
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoordinates({ latitude: lat, longitude: lon });
      } else {
        console.log('City not found');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  return (
    <div>
      <input type="text" value={cityName} onChange={handleCityNameChange} placeholder="Enter city name" />
      <button onClick={fetchCoordinates}>Get Coordinates</button>
      {coordinates && (
        <div>
          <p>Latitude: {coordinates.latitude}</p>
          <p>Longitude: {coordinates.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default GeocodeComponent;
