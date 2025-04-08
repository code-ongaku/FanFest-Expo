// pages/atm_list.js
import Link from "next/link"; // Not react-router-dom!
import Navbar from "../components/navbar";
import ExpandableMap from "../components/expandmap";

const atmData = [
  {
    title: "Exhibitor’s Hall A",
    floor: "Ground Floor, beside reception",
    label: "Ground Floor",
    mapref: "/image 4.png",
  },
  {
    title: "East Wing - Level 1",
    floor: "1st Floor, beside the staircase",
    label: "1st Floor",
    mapref: "/image 4.png",
  },
  {
    title: "West Wing - Level 1",
    floor: "1st Floor, opposite main lobby",
    label: "1st Floor",
    mapref: "/image 4.png",
  },
  {
    title: "Main Stage Hall",
    floor: "1st Floor, beside main lobby",
    label: "1st Floor",
    mapref: "/image 4.png",
  },
  {
    title: "East Wing - Level 2",
    floor: "2nd Floor, opposite the staircase",
    label: "2nd Floor",
    mapref: "/image 4.png",
  },
  {
    title: "South Wing - Level 2",
    floor: "2nd Floor, near Patio",
    label: "2nd Floor",
    mapref: "/image 4.png",
  },
];


export default function ATMList() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab">
      <Navbar />

      <div className="flex flex-col items-center mt-4 px-4">
        <h1 className="text-4xl font-bold mb-1">Find an ATM</h1>
        <hr className="border-[#7E52A0] w-full mb-4" />

        <p className="text-center text-[#C374E6] font-medium mb-4 underline">
          View ATM on the map (right) or select "Find Route"
        </p>

        <div className="w-full max-w-4xl space-y-8">
          {atmData.map((atm, index) => (
            <div
            key={index}
            className="md:flex items-center justify-between bg-[#F2E6FA] p-6 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-6"
          >
            {/* Left: Text and Button */}
            <div className="p-2 flex-1">
              <h3 className="text-xl font-bold text-[#7E52A0] mb-1">{atm.title}</h3>
              <p className="text-gray-700 text-sm">{atm.floor}</p>
              <Link
                href={{
                  pathname: "/find_route",
                  query: {
                    title: "ATM - " + atm.title,
                    mapref: atm.mapref,
                  },
                }}
                className="mt-2 inline-block bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded text-sm font-semibold"
              >
                Find Route
              </Link>
            </div>

              {/* Right: Map and Expand Button */}
              <div className="p-1 md:w-80 flex flex-col items-center">
                  <img
                    src={atm.mapref}
                    alt={atm.title}
                    className="object-contain max-h-full max-w-full"
                  />
                <div className="w-full mt-2 flex items-center justify-between">
                  <p className="text-sm text-[#7E52A0] whitespace-nowrap">{atm.label}</p>
                  <ExpandableMap imageSrc={atm.mapref} altText={atm.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
