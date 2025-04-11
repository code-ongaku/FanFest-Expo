import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import ExpandableMap from "../../components/expandmap";

export default function RestroomsList() {
  const [filter, setFilter] = useState("all");

  const allRestrooms = [
    {
      name: "North Wing Restroom - Level 1",
      type: "regular",
      label: "1st Floor",
      mapref: "/amenityMaps/here_1.png",
    },
    {
      name: "South Hall Restroom - Level 1",
      type: "gender-neutral",
      label: "1st Floor",
      mapref: "/amenityMaps/here_2.png",
    },
    {
      name: "Main Lobby Restroom",
      type: "regular",
      label: "1st Floor",
      mapref: "/amenityMaps/here_3.png",
    },
    {
      name: "East Wing Restroom - Level 2",
      type: "gender-neutral",
      label: "2nd Floor",
      mapref: "/amenityMaps/here_2.png",
    },
    {
      name: "South Wing Restroom - Level 2",
      type: "regular",
      label: "2nd Floor",
      mapref: "/amenityMaps/here_1.png",
    },
  ];

  const filteredRestrooms = allRestrooms.filter(
    (r) => filter === "all" || r.type === filter
  );

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab">
      <Navbar />

      <div className="flex flex-col items-center mt-4 px-4">
        <h1 className="text-4xl font-bold mb-1">Restrooms</h1>
        <hr className="border-[#7E52A0] w-full mb-4" />

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-4">
          {["all", "regular", "gender-neutral"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded ${
                filter === type
                  ? "bg-[#C374E6] text-white"
                  : "bg-white border border-[#7E52A0]"
              }`}
              onClick={() => setFilter(type)}
            >
              {type === "gender-neutral" ? "Gender Neutral" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* <p className="text-center text-[#C374E6] font-medium mb-4 underline">
          View restroom on the map or select "Find Route"
        </p> */}

        {/* Restroom List and Map Layout */}
        <div className="w-full max-w-4xl space-y-8">
          {filteredRestrooms.map((room, index) => (
            <div
              key={index}
              className="md:flex items-center justify-between bg-[#F2E6FA] p-6 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-6"
            >
              {/* Left: Text and Button */}
              <div className="p-2 flex-1">
                <h3 className="text-xl font-bold text-[#7E52A0] mb-1">
                  {room.name}
                </h3>
                <Link
                href={`/find_route?destination=${encodeURIComponent(room.name)}`}
                className="mt-2 inline-block bg-fuchsia-300 hover:bg-gray-400 text-black py-1 px-4 rounded text-sm font-semibold"
              >
                Find Route
                </Link>
              </div>

              {/* Right: Map and Expand Button */}
              <div className="p-1 md:w-80 flex flex-col items-center">
                  <img
                    src={room.mapref}
                    alt={room.name}
                    className="object-contain max-h-full max-w-full"
                  />
                <div className="w-full mt-2 flex items-center justify-between">
                  <p className="text-sm text-[#7E52A0] whitespace-nowrap">
                    {room.label}
                  </p>
                  <ExpandableMap imageSrc={room.mapref} altText={room.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
