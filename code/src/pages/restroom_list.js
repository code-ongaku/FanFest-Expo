import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function RestroomsList() {
  const [filter, setFilter] = useState("all");

  const allRestrooms = [
    {
      name: "North Wing Restroom - Level 1",
      type: "regular",
      mapref: "/maps/north_restroom.png",
    },
    {
      name: "South Hall Restroom - Level 1",
      type: "gender-neutral",
      mapref: "/maps/south_restroom.png",
    },
    {
      name: "Main Lobby Restroom",
      type: "regular",
      mapref: "/maps/lobby_restroom.png",
    },
    {
      name: "East Wing Restroom - Level 2",
      type: "gender-neutral",
      mapref: "/maps/level2_gn_restroom.png",
    },
    {
      name: "South Wing Restroom - Level 2",
      type: "regular",
      mapref: "/maps/level2_gn_restroom.png",
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

        <p className="text-center text-[#C374E6] font-medium mb-4">
          Select a restroom to view the route
        </p>

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

        {/* Restroom List */}
        <div className="border border-[#7E52A0] w-full max-w-md overflow-y-scroll max-h-60 mb-6">
        {filteredRestrooms.map((room, index) => (
            <div
            key={index}
            className={`px-4 py-3 text-black text-lg font-medium ${
                index < filteredRestrooms.length - 1 ? "border-b border-[#7E52A0]" : ""
            }`}
            >
            <Link
                href={{
                pathname: "/amen_route",
                query: {
                    title: room.name,
                    mapref: room.mapref,
                },
                }}
                className="text-xl underline flex items-center"
            >
                {/* Restroom Name */}
                <span className="mr-2">{room.name}</span>

                {/* Wheelchair Icon */}
                <span role="img" aria-label="Accessible" title="Accessible">
                ♿️
                </span>
            </Link>
            </div>
        ))}
        </div>


        {/* Map Section Placeholder */}
        <div className="w-full max-w-md bg-[#FBEFFF] p-4 rounded shadow text-center relative">
          <div className="text-[#C374E6] font-medium mb-2">
            All Restrooms - Map
          </div>
          <div className="text-gray-600 mt-8 mb-4 text-lg italic">map goes here</div>
        </div>
      </div>
    </div>
  );
}
