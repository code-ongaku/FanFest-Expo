import React, { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function EventLocation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2)); // Max zoom 2x
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5)); // Min zoom 0.5x
  };

  const resetZoom = () => setZoom(1);

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] h-screen w-screen font-roboto-slab flex flex-col items-center relative">
      <Navbar />

      <h1 className="mt-7 font-bold text-4xl pb-2 text-center">
      <span className="inline-block border-b-2 border-current">Location</span>
    </h1>



      {/* Venue Info */}
      <div className="w-[90%] mt-5 font-bold text-center">
        <h2 className="text-2xl text-red-800 mb-2">TELUS Convention Centre</h2>
        <p className="text-xl text-blue-800 leading-tight">
          136 8 Ave SE,<br />
          Calgary, AB T2P 0K6
        </p>
      </div>

      {/* Expand Map Button */}
      <div className="w-[90%] mt-6 flex justify-end">
        <button
          onClick={() => {
            setIsExpanded(true);
            setZoom(1); // Reset zoom on open
          }}
          className="py-1 px-4 bg-[#87CEEB] text-[#004080] rounded font-semibold shadow-md hover:bg-[#76bde0]"
        >
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

      {/* Fullscreen Modal with Zoom Controls */}
      {isExpanded && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 px-4">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Zoom Controls */}
            <div className="flex gap-4 mb-3">
              <button
                onClick={zoomOut}
                className="bg-white text-[#7E52A0] px-3 py-1 rounded shadow hover:bg-[#eee] text-xl font-bold"
              >
                –
              </button>
              <button
                onClick={zoomIn}
                className="bg-white text-[#7E52A0] px-3 py-1 rounded shadow hover:bg-[#eee] text-xl font-bold"
              >
                +
              </button>
              <button
                onClick={resetZoom}
                className="bg-white text-[#7E52A0] px-3 py-1 rounded shadow hover:bg-[#eee] text-sm font-semibold"
              >
                Reset
              </button>
            </div>

            {/* Map */}
            <div
              className="overflow-hidden border-4 border-white rounded-lg shadow-lg"
              style={{ width: "100%", maxHeight: "80vh" }}
            >
              <div
                style={{
                  transform: `scale(${zoom})`,
                  transition: "transform 0.3s ease-in-out",
                  transformOrigin: "center",
                }}
              >
                <Image
                  src="/evenloc.png"
                  alt="Expanded Map"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="mt-4 bg-white text-[#7E52A0] px-4 py-2 rounded shadow-md font-bold hover:bg-[#f1e4fc]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}