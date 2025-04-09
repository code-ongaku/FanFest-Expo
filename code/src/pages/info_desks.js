import Link from "next/link"; // Not react-router-dom!
import Navbar from "../components/navbar";
import ExpandableMap from "../components/expandmap";

const informationDeskData = [
  {
    title: "Information Desk - Ground Floor",
    floor: "Ground Floor, near the main entrance",
    label: "Ground Floor",
    mapref: "/maps/info_desk_1.png",
  },
  {
    title: "Information Desk - 1st Floor",
    floor: "1st Floor, near the main entrance",
    label: "1st Floor",
    mapref: "/maps/info_desk_2.png",
  },
];

export default function InformationDeskList() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab">
      <Navbar />

      <div className="flex flex-col items-center mt-4 px-4">
        <h1 className="text-4xl font-bold mb-1">Find an Information Desk</h1>
        <hr className="border-[#7E52A0] w-full mb-4" />

        <p className="text-center text-[#C374E6] font-medium mb-4 underline">
          View an information desk on the map or select "Find Route"
        </p>

        <div className="w-full max-w-4xl space-y-8">
          {informationDeskData.map((desk, index) => (
            <div
              key={index}
              className="md:flex items-center justify-between bg-[#F2E6FA] p-6 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-6"
            >
              {/* Left: Text and Button */}
              <div className="p-2 flex-1">
                <h3 className="text-xl font-bold text-[#7E52A0] mb-1">{desk.title}</h3>
                <p className="text-gray-700 text-sm">{desk.floor}</p>
                <Link
                  href={{
                    pathname: "/find_route",
                    query: {
                      title: "Information Desk - " + desk.title,
                      mapref: desk.mapref,
                    },
                  }}
                  className="mt-2 inline-block bg-fuchsia-300 hover:bg-gray-400 text-black py-1 px-4 rounded text-sm font-semibold"
                >
                  Find Route
                </Link>
              </div>

              {/* Right: Map and Expand Button */}
              <div className="p-1 md:w-80 flex flex-col items-center">
                <img
                  src={desk.mapref}
                  alt={desk.title}
                  className="object-contain max-h-full max-w-full"
                />
                <div className="w-full mt-2 flex items-center justify-between">
                  <p className="text-sm text-[#7E52A0] whitespace-nowrap">{desk.label}</p>
                  <ExpandableMap imageSrc={desk.mapref} altText={desk.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
