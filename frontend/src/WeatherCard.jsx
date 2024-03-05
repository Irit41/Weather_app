import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import React from "react";
  
   
  export default function WeatherCard() {
    return (
      <>
      <Card className="w-full mb-8 max-w-[18rem] max-h-[10rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2 font-normal">
            Lyft launching cross-platform service this week
          </Typography>
         
          
        </CardBody>
      </Card>
    
      </>

    );
  }