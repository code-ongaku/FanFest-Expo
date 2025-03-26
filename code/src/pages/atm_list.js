import Navbar from "../components/navbar";

export default function ATMList() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center mt-4 px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-1">ATM</h1>
        <hr className="border-[#7E52A0] w-full mb-4" />

        {/* Subtext */}
        <p className="text-center text-[#C374E6] font-medium mb-4">
          Select an ATM location to View on the Map
        </p>

        {/* ATM List */}
        <div className="border border-[#7E52A0] w-full max-w-md overflow-y-scroll max-h-48 mb-6">
          <div className="border-b border-[#7E52A0] px-4 py-3 text-black text-lg font-medium">
            Exhibitor’s Hall A
          </div>
          <div className="border-b border-[#7E52A0] px-4 py-3 text-black text-lg font-medium">
            1st Floor East
          </div>
          <div className="border-b border-[#7E52A0] px-4 py-3 text-black text-lg font-medium">
            1st Floor West
          </div>
          <div className="px-4 py-3 text-black text-lg font-medium">
            Main Stage Hall
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="w-full max-w-md bg-[#FBEFFF] p-4 rounded shadow text-center relative">
          <div className="text-[#C374E6] font-medium mb-2">All ATMs - Map</div>
          <button className="absolute right-4 top-4 bg-[#FF6B6B] text-white px-3 py-1 text-sm rounded">
            Expand Map
          </button>
          <div className="text-gray-600 mt-8 mb-4 text-lg italic">map goes here</div>
        </div>
      </div>
    </div>
  );
}
