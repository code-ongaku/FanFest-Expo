import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import ExpandableMap from "../../components/expandmap";

export default function FoodAndBeverageList() {
  const [filter, setFilter] = useState("all");

  const allStalls = [
    {
      name: "Tim Hortons 🍩",
      type: "beverage",
      mapref: "/amenityMaps/here_1.png",
      label: "Ground Floor",
    },
    {
      name: "Uncle Tetsu's 🍰",
      type: "food",
      mapref: "/amenityMaps/here_2.png",
      label: "Ground Floor",
    },
    {
      name: "Mr. Pretzels 🥨",
      type: "food",
      mapref: "/amenityMaps/here_3.png",
      label: "Ground Floor",
    },
    {
      name: "Bubble Tea Express 🍹",
      type: "beverage",
      mapref: "/amenityMaps/here_2.png",
      label: "Ground Floor",
    },
    {
      name: "Katsu Bros 🍱",
      type: "food",
      mapref: "/amenityMaps/here_1.png",
      label: "First Floor",
    },
    {
      name: "The Ramen Bar 🍜",
      type: "food",
      mapref: "/amenityMaps/here_3.png",
      label: "First Floor",
    },
  ];

  const filteredStalls = allStalls.filter(
    (stall) => filter === "all" || stall.type === filter
  );

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab">
      <Navbar />

      <div className="flex flex-col items-center mt-4 px-4">
        <h1 className="text-4xl font-bold mb-1">Food & Beverage</h1>
        <hr className="border-[#7E52A0] w-full mb-4" />

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-4">
          {["all", "food", "beverage"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded ${
                filter === type
                  ? "bg-[#C374E6] text-white"
                  : "bg-white border border-[#7E52A0]"
              }`}
              onClick={() => setFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* <p className="text-center text-[#C374E6] font-medium mb-4 underline">
          View stall on the map or select "Find Route"
        </p> */}

        {/* Stall List and Map Layout */}
        <div className="w-full max-w-4xl space-y-8">
          {filteredStalls.map((stall, index) => (
            <div
              key={index}
              className="md:flex items-center justify-between bg-[#F2E6FA] p-6 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-6"
            >
              {/* Left: Text and Button */}
              <div className="p-2 flex-1">
                <h3 className="text-xl font-bold text-[#7E52A0] mb-1">
                  {stall.name}
                </h3>
                <Link
                href={`/find_route?destination=${encodeURIComponent(stall.name)}`}
                className="mt-2 inline-block bg-fuchsia-300 hover:bg-gray-400 text-black py-1 px-4 rounded text-sm font-semibold"
              >
                Find Route
                </Link>
              </div>

              {/* Right: Map and Expand Button */}
              <div className="p-1 md:w-80 flex flex-col items-center">
                <img
                  src={stall.mapref}
                  alt={stall.name}
                  className="object-contain max-h-full max-w-full"
                />
                <div className="w-full mt-2 flex items-center justify-between">
                  <p className="text-sm text-[#7E52A0] whitespace-nowrap">
                    {stall.label}
                  </p>
                  <ExpandableMap imageSrc={stall.mapref} altText={stall.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
