import Navbar from "../components/navbar";


export default function ATMRoute() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab">
      
      {/* Navbar */}
      <Navbar />

      {/* Title */}
      <div className="text-center mt-4 px-4">
        <h1 className="text-3xl font-extrabold mb-1">View ATM - Main Stage Hall</h1>
        <hr className="border-[#7E52A0] w-full mb-6" />
      </div>

      {/* Map Section */}
      <div className="mx-auto max-w-md bg-white rounded-xl shadow-lg p-4 relative">
        <div className="w-full h-72 flex items-center justify-center text-gray-500 italic text-lg bg-[#FBEFFF] rounded">
          map goes here
        </div>

        {/* Find Button */}
        <div className="flex justify-end mt-4">
          <button className="flex items-center bg-[#D6B4FC] text-[#7E52A0] font-semibold px-5 py-2 rounded-full shadow space-x-2">
           
            <span>Find</span>
          </button>
        </div>
      </div>
    </div>
  );
}
