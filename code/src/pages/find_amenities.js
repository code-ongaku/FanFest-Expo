import Navbar from "../components/navbar.js";
import Link from 'next/link';  // Import Link from Next.js

export default function Amenities({}) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Amenities</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* Amenities List */}
      <div className="mt-8 w-[90%] max-w-md">
        <div className="flex items-center mb-4">
          <img src="/info-desk.png" alt="Information Desk" className="w-15 h-15 mr-4" />
          <a href="info_desks" className="text-xl underline">Information Desk</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/amenity_icon/atm.png" alt="ATM" className="w-15 h-15 mr-4" />
          <a href="atm_list" className="text-xl underline">ATM</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/restrooms.png" alt="Restrooms" className="w-15 h-10 mr-4" />
          <a href="restroom_list" className="text-xl underline">Restrooms</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/food-bev.png" alt="Food & Beverage" className="w-15 h-15 mr-4" />
          <a href="foodbev_list" className="text-xl underline">Food & Beverage</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/water-station.png" alt="Water Stations" className="w-15 h-15 mr-4" />
          <a href="waterstat_list" className="text-xl underline">Water Refill & Supply Stations</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/cos-prop-repair.png" alt="Cosplay & Prop Repair Station" className="w-15 h-15 mr-4" />
          <a href="cosrep_list" className="text-xl underline">Cosplay & Prop Repair Station</a>
        </div>
      </div>
    </div>
  );
}
