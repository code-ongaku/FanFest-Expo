import React, { useState } from "react";
import Image from "next/image";

export default function ExpandableMap({ imageSrc, altText, buttonLabel = "Expand" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <>
      {/* Expand button */}
      <button
        onClick={() => {
          setIsExpanded(true);
          setZoom(1);
        }}
        className="bg-purple-300 text-gray-700 px-2 py-1 rounded shadow hover:bg-gray-400 text-sm font-semibold"
      >
        {buttonLabel}
      </button>


      {/* Expanded Fullscreen Modal */}
      {isExpanded && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 px-4">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Zoom Controls */}
            <div className="flex gap-4 mb-3">
              <button
                onClick={zoomOut}
                className="bg-white text-[#7E52A0] px-3 py-1 rounded shadow hover:bg-[#eee] text-xl font-bold"
              >
                -
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

            {/* Zoomable Map Image */}
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
                  src={imageSrc}
                  alt={altText}
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
    </>
  );
}
