import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../components/navbar";
import Image from "next/image";
import magnifying_glass from "../../public/magnifying-glass.svg";
import location from "../../public/location.svg";
import route1 from "../../public/route_1.png";
import route2 from "../../public/route_2.png";

export default function FindRoute() {
  // Array of 5 locations
  const locations = [
    "Current Location",
    "Telus 110",
    "Telus 201",
    "Lower East Hall",
    "Main Stage"
  ];

  const router = useRouter();
  const { destination } = router.query;
  
  // State for inputs and search results
  const [startInput, setStartInput] = useState("Current Location");
  const [endInput, setEndInput] = useState("");
  const [startOptions, setStartOptions] = useState([]);
  const [endOptions, setEndOptions] = useState([]);
  const [selectedStart, setSelectedStart] = useState("Current Location");
  const [selectedEnd, setSelectedEnd] = useState("");
  const [validRoute, setValidRoute] = useState("");
  const [sameLocation, setSameLocation] = useState(false);
  const [mapImage, setMapImage] = useState();
  
  useEffect(() => {
    if (destination) {
      setEndInput(decodeURIComponent(destination));
      setSelectedEnd(decodeURIComponent(destination));
    }
  }, [destination]);

  const handleStartSearch = (e) => {
    const input = e.target.value;
    setStartInput(input);
    
    if (input.length > 0) {
      const filtered = locations.filter(loc => 
        loc.toLowerCase().includes(input.toLowerCase())
      );
      setStartOptions(filtered);
    } else {
      setStartOptions([]);
    }
  };

  const handleEndSearch = (e) => {
    const input = e.target.value;
    setEndInput(input);
    
    if (input.length > 0) {
      const filtered = locations.filter(loc => 
        loc.toLowerCase().includes(input.toLowerCase())
      );
      setEndOptions(filtered);
    } else {
      setEndOptions([]);
    }
  };

  const selectStartLocation = (loc) => {
    setSelectedStart(loc);
    setStartInput(loc);
    setStartOptions([]);
  };

  const selectEndLocation = (loc) => {
    setSelectedEnd(loc);
    setEndInput(loc);
    setEndOptions([]);
  };

  const validateRoute = () => {
    if (selectedStart !== selectedEnd) {
        setSameLocation(false);
        setValidRoute(true);
        if (selectedStart === "Current Location") {
            setMapImage(route1);
        }
        else {
            setMapImage(route2);
        }
    } else {
        setSameLocation(true);
        setValidRoute(false);
    }
  }
  return(
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">Find Route</h1>
      <div className="flex flex-col items-center w-[90%] gap-5 mt-5">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Image
              src={magnifying_glass}
              alt="magnifying glass"
              className="h-6 w-6"
            />
          </div>
          <div className="absolute inset-y-0 right-3 flex items-center">
            <Image
              src={location}
              alt="location"
              className="h-6 w-6"
            />
          </div>
          <input
            className="bg-white text-2xl w-full rounded-full pl-10 pr-10 py-2 truncate"
            type="text"
            placeholder="Start Location"
            value={startInput}
            onChange={handleStartSearch}
          />
          
          {startOptions.length > 0 && (
            <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg">
              {startOptions.map((loc, index) => (
                <div 
                  key={index} 
                  className="p-2 hover:bg-[#DECDF5] cursor-pointer"
                  onClick={() => selectStartLocation(loc)}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Image
              src={magnifying_glass}
              alt="magnifying glass"
              className="h-6 w-6"
            />
          </div>
          <div className="absolute inset-y-0 right-3 flex items-center">
            <Image
              src={location}
              alt="location"
              className="h-6 w-6"
            />
          </div>
          <input
            className="bg-white text-2xl w-full rounded-full pl-10 pr-10 py-2 truncate"
            type="text"
            placeholder="End Location"
            value={endInput}
            onChange={handleEndSearch}
          />
          
          {endOptions.length > 0 && (
            <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg">
              {endOptions.map((loc, index) => (
                <div 
                  key={index} 
                  className="p-2 hover:bg-[#DECDF5] cursor-pointer"
                  onClick={() => selectEndLocation(loc)}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="w-[90%] mt-5 flex flex-col items-end">
        <button 
          className="py-1 bg-[#DECDF5] text-2xl rounded-full w-[45%] font-bold"
          onClick={validateRoute}
          type="button"
          >
          Get Route
        </button>
        {sameLocation &&
            <p className="text-red-500 mt-5 w-full text-center">
                Start and end locations cannot be the same.
            </p>
            ||
            <p className="text-red-500 mt-5 w-full h-[24px]"></p>
        }
      </div>
      
    <div className="w-[90%] mt-5 mb-7">
        <div className="w-full aspect-square bg-white flex items-center justify-center text-gray-400 text-xl rounded">
            {validRoute && 
                <Image 
                    src={mapImage} 
                    alt="map" 
                    className="w-full aspect-square"
                />
                ||
                <p className="text-center m-10">    
                    Click Get Route to generate a map of the route.
                </p>
            }

        </div>
    </div>
      
    </div>
  );
}