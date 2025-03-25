import React from "react";
import Navbar from "../components/navbar"; // adjust if your path is different
import Image from "next/image";

export default function EventLocation() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />

      {/* Heading */}
      <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">
        Location
      </h1>

      {/* Venue Info */}
      <div className="w-[90%] mt-5 font-bold text-center">
        <h2 className="text-2xl text-red-800 mb-2">
          TELUS Convention Centre
        </h2>
        <p className="text-xl text-blue-800 leading-tight">
          136 8 Ave SE,<br />
          Calgary, AB T2P 0K6
        </p>
      </div>

      {/* Expand Map Button */}
      <div className="w-[90%] mt-6 flex justify-end">
        <button className="py-1 px-4 bg-[#FDCFCF] text-red-800 rounded font-semibold">
          Expand Map
        </button>
      </div>

      {/* Map Image */}
      <div className="w-[90%] mt-2 aspect-square">
        <Image
          src="/evenloc.png"
          alt="TELUS Convention Centre Map"
          width={600}
          height={400}
          className="w-full h-full object-cover border border-purple-500 rounded"
        />
      </div>
    </div>
  );
}
