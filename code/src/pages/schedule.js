import Navbar from "../components/navbar.js";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Cancel from "../../public/cancel.svg"
export default function Schedule({}) {

  const [isDownloaded, setDownloaded] = useState(false)
  const [isSaved, setSaved] = useState(false)
  const [selectedDay, setSelectedDay] = useState("Friday");

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Schedule</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      <Link href="/wishlist" passHref>
        <div className="text-[#F8F1FF] bg-[#7E52A0] p-3 rounded-full mt-5 cursor-pointer">
          <p>Wishlist</p>
        </div>
      </Link>

      {/* Categories Section */}
      <div className="mt-3 w-[90%] max-w-md">
        {/* Day Filters */}
        <div className="mt-4 flex justify-around">
          {["Friday", "Saturday", "Sunday"].map(day => (
            <button
              key={day}
              className={`underline ${selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="mt-8 max-h-[350px] overflow-y-auto grid grid-cols-4">
          {/* Time Labels */}
          <div className="col-span-1">
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>9 am</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>10 am</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>11 am</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>12 pm</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>1 pm</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>2 pm</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>3 pm</p>
            </div>
          </div>

          {selectedDay == "Friday" && (
            <div className="col-span-3">
              <Link href="/opening-ceremony" passHref>
                <div className="bg-red-200 pl-4 rounded-r-lg cursor-pointer h-14 flex items-center">
                  <p>Opening Ceremony</p>
                </div>
              </Link>
              <div className="h-14"></div>
              <Link href="/contest-A-cosplay" passHref>
                <div className="bg-yellow-200 rounded-r-lg cursor-pointer h-14 pl-4 flex items-center">
                  <p>Contest A: Cosplay</p>
                </div>
              </Link>
              <div className="h-14"></div>
              <Link href="/makeYourOwnCosplay" passHref>
                <div className="bg-green-200 rounded-r-lg cursor-pointer h-14 pl-4 flex items-center">
                  <p>Make Your Own Cosplay</p>
                </div>
              </Link>
              <div className="h-14"></div>
              <div className="h-7"></div>
              <Link href="/emilysSweater" passHref>
                <div className="bg-purple-200 rounded-r-lg cursor-pointer h-7 pl-4 flex items-center">
                  <p>Emily's Sweater Bonanza</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {isDownloaded && (
        <div className="fixed top-0 left-0 z-1 bg-stone-100 text-stone-900 border-stone-900 border-1 rounded flex flex-row">
          <p>Schedule Downloaded.</p>
            <Image src={Cancel} className="h-6 w-6 bg-red-100"
              onClick={() => setDownloaded(false) }/>
        </div>
      )}

      {isSaved && (
        <div className="fixed top-0 left-0 z-1 bg-stone-100 text-stone-900 border-stone-900 border-1 rounded flex flex-row">
          <p>Schedule Saved.</p>
            <Image src={Cancel} className="h-6 w-6 bg-red-100"
              onClick={() => setSaved(false) }/>
        </div>
      )}


      {/* Save and download buttons */}
      <div className="mt-3 flex justify-between">
        <div className="text-[#F8F1FF] bg-[#7E52A0] p-3 rounded-full mt-5 mr-13 cursor-pointer w-30 flex items-center justify-center"
          onClick={() => setDownloaded(true)}>
          <p>Download</p>
        </div>
        <div className="text-[#F8F1FF] bg-[#7E52A0] p-3 rounded-full mt-5 ml-13 cursor-pointer w-30 flex items-center justify-center"
          onClick={() => setSaved(true)}>
          <p>Save</p>
        </div>
      </div>
    </div>
  );
}
