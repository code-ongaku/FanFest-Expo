import Navbar from "../components/navbar.js";
import Link from 'next/link';  // Import Link from Next.js

export default function Amenities({}) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Amenities</h1>
      </div>

      {/* Amenities List */}
      <div className="mt-8 w-[90%] max-w-md">
        <div className="flex items-center mb-4">
          <img src="/information-desk.png" alt="Information Desk" className="w-10 h-10 mr-4" /> {/* Replace with your image path */}
          <a href="#" className="text-xl underline">Information Desk</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/atm.png" alt="ATM" className="w-10 h-10 mr-4" /> {/* Replace with your image path */}
          <a href="#" className="text-xl underline">ATM</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/restrooms.png" alt="Restrooms" className="w-10 h-10 mr-4" /> {/* Replace with your image path */}
          <a href="#" className="text-xl underline">Restrooms</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/food-beverage.png" alt="Food & Beverage" className="w-10 h-10 mr-4" /> {/* Replace with your image path */}
          <a href="#" className="text-xl underline">Food & Beverage</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/water-stations.png" alt="Water Stations" className="w-10 h-10 mr-4" /> {/* Replace with your image path */}
          <a href="#" className="text-xl underline">Water Stations</a>
        </div>
        <div className="flex items-center mb-4">
          <img src="/cosplay-repair.png" alt="Cosplay & Prop Repair Station" className="w-10 h-10 mr-4" /> {/* Replace with your image path */}
          <a href="#" className="text-xl underline">Cosplay & Prop Repair Station</a>
        </div>
      </div>
    </div>
  );
}