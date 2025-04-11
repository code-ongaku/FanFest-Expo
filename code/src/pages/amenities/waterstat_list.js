// pages/waterstat_list.js
import Link from "next/link"; // Not react-router-dom!
import Navbar from "../../components/navbar";
import ExpandableMap from "../../components/expandmap";

const waterStationData = [
  {
    title: "Exhibitor's Hall A",
    floor: "Ground Floor, beside Exhibitor's Hall A entrance",
    label: "Ground Floor",
    mapref: "/amenityMaps/here_2.png",
  },
  {
    title: "Centre East Wing - Level 1",
    floor: "1st Floor, beside the hallway",
    label: "1st Floor",
    mapref: "/amenityMaps/here_1.png",
  },
  {
    title: "Centre West Wing - Level 1",
    floor: "1st Floor, in the main lobby",
    label: "1st Floor",
    mapref: "/amenityMaps/here_3.png",
  },
  {
    title: "Main Stage Hall",
    floor: "1st Floor, hallway opposite the stage",
    label: "1st Floor",
    mapref: "/amenityMaps/here_2.png",
  },
  {
    title: "Centre East Wing - Level 2",
    floor: "2nd Floor, opposite the manga room",
    label: "2nd Floor",
    mapref: "/amenityMaps/here_1.png",
  },
  {
    title: "Centre South Wing - Level 2",
    floor: "2nd Floor, beside the Patio",
    label: "2nd Floor",
    mapref: "/amenityMaps/here_2.png",
  },
];

export default function WaterStationList() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab">
      <Navbar />

      <div className="flex flex-col items-center mt-4 px-4">
        <h1 className="text-4xl font-bold mb-1">Find a Water Station</h1>
        <hr className="border-[#7E52A0] w-full mb-4" />

        {/* <p className="text-center text-[#C374E6] font-medium mb-4 underline">
          View a water station on the map or select "Find Route"
        </p> */}

        <div className="w-full max-w-4xl space-y-8">
          {waterStationData.map((station, index) => (
            <div
              key={index}
              className="md:flex items-center justify-between bg-[#F2E6FA] p-6 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-6"
            >
              {/* Left: Text and Button */}
              <div className="p-2 flex-1">
                <h3 className="text-xl font-bold text-[#7E52A0] mb-1">{station.title}</h3>
                <p className="text-gray-700 text-sm">{station.floor}</p>
                <Link
                href={`/find_route?destination=${encodeURIComponent(station.title)}`}
                className="mt-2 inline-block bg-fuchsia-300 hover:bg-gray-400 text-black py-1 px-4 rounded text-sm font-semibold"
              >
                Find Route
                </Link>
              </div>

              {/* Right: Map and Expand Button */}
              <div className="p-1 md:w-80 flex flex-col items-center">
                <img
                  src={station.mapref}
                  alt={station.title}
                  className="object-contain max-h-full max-w-full"
                />
                <div className="w-full mt-2 flex items-center justify-between">
                  <p className="text-sm text-[#7E52A0] whitespace-nowrap">{station.label}</p>
                  <ExpandableMap imageSrc={station.mapref} altText={station.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
