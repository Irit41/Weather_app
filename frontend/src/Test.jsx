





// <div>
// <DarkNavbar
//   SetCity={SetCity}
//   SetWeatherdesc={SetWeatherdesc}
//   SetTemp={SetTemp}
//   SetHumidity={SetHumidity}
//   SetFeelslike={SetFeelslike}
// />
// <Card className="w-full   max-w-[48rem] flex-row ">
//   <CardHeader
//     shadow={false}
//     floated={false}
//     className="m-0 w-3/5 shrink-0 rounded-r-none"
//   >
//     <div className="sun-wrep">
//       <span className="sun sunshine"></span>
//       <span className="sun"></span>
//       <span className="temp">{temp}°</span>
//     </div>

//     <div className="temp-scale">
//       <span>צלזיוס</span>
//     </div>

//     {/* <img
//     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
//     alt="card-image"
//     className="h-full w-full object-cover"
//   /> */}
//   </CardHeader>
//   <CardBody>
//     <Typography variant="h6" color="gray" className="mb-4">
//       {dateHeb}
//     </Typography>

//     <Typography variant="h4" color="blue-gray" className="mb-2">
//       {city}
//     </Typography>

//     <Typography color="gray" className="mb-6 font-normal">
//       {weatherdesc}
//     </Typography>

//     <div className="flex flex-row-reverse ">
//       <h5 className="ml-2 ">: לחות</h5>
//       <Typography color="gray" className="mb-6 font-normal">
//         {humidity}
//       </Typography>
//     </div>
//     {/* <div className="flex flex-row-reverse mr-3  ml-16 ">
//       <h5> : מהירות רוח </h5>
//       <Typography color="gray" className="mb-6 font-normal">
//         {" "}
//         180
//       </Typography>
//     </div>
//     <div className="flex flex-row-reverse ml-16 mr-3">
//       <h5 className="ml-2 ">: מעלות </h5>
//       <Typography color="gray" className="mb-6 font-normal">
//         78
//       </Typography>
//     </div> */}
//     <div className="flex flex-row-reverse ">
//       <h5>: מרגיש כמו </h5>
//       <Typography color="gray" className="mb-6 font-normal">
//         {feelslike}
//       </Typography>
//     </div>
//   </CardBody>
// </Card>
// </div>


















































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './test.css';

// const api_url = "https://data.gov.il/api/3/action/datastore_search";
// const cities_resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
// const city_name_key = "שם_ישוב";
// const cities_data_id = "cities-data";

// const Test = () => {
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");

//   useEffect(() => {
//     populateDataList(cities_data_id, cities_resource_id, city_name_key);
//     // populateDataList(streets_data_id, streets_resource_id, street_name_key, selectedCity);
//   }, [selectedCity]);

//   const getData = async (resource_id, q = "", limit = "100") => {
//     try {
//       const response = await axios.get(api_url, {
//         params: { resource_id, q, limit },
//         responseType: "json"
//       });
//       return response.data.result.records;
//     } catch (error) {
//       console.log("Error fetching data:", error);
//       return [];
//     }
//   };

//   const parseResponse = (records = [], field_name) => {
//     return records.map(record => record[field_name].trim());
//   };
//   // const populateDataList = async (id, resource_id, field_name, query = "", limit = "32000") => {

//   const populateDataList = async (id,resource_id, field_name, query = "", limit = "32000") => {
//     const data = await getData(resource_id, query, limit);
//     const parsedData = parseResponse(data, field_name);
//     setCities(parsedData);
//   };

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   return (
//     <form action="">
//       <div className="form-field" id="city-selection">
//         <label htmlFor="city-choice">בחר עיר:</label>
//         <input list="cities-data" id="city-choice" name="city-choice" onChange={handleCityChange} value={selectedCity} />
//         <datalist id="cities-data">
//           <option value="">טוען רשימת ערים...</option>
//           {cities.map((city, index) => (
//             <option key={index} value={city}>{city}</option>
//           ))}
//         </datalist>
//       </div>
    
     
//     </form>
//   );
// };

// export default Test;
