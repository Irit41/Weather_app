import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export function DarkNavbar() {
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
            label="הקלד שם של עיר"
            className="pr-20"
            containerProps={{
              className: "min-w-[450px]",
            }}
          /> 
          {/* <select id="city-choice"   className="min-w-[450px] pr-20 h-9" >
          <option value="">Select a city</option>
        
            <option>dfsdfsdf</option>
          
        </select> */}
     
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-0.4 bg-light-green-300 rounded"
          >
           <h3> חפש</h3>
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
