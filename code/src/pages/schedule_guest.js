import Navbar from "../components/navbar.js";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Cancel from "../../public/cancel.svg"
export default function Schedule_guest({}) {

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

      {/* Search bar from material-tailwind */}
      <div className="w-4/5">
        <div className="relative mt-2">
          <input
            type="text"
            className="w-full bg-transparent placeholder:text-sm border border-slate-200 rounded-full pr-12 pl-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search Events"
          />
          <button
            className="absolute right-1 top-1 rounded-full bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

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
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>4 pm</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>5 pm</p>
            </div>
            <div className="bg-[#DECDF5] border-1 border-[#7E52A0] rounded-l-lg h-14 pl-4 flex items-center">
              <p>6 pm</p>
            </div>
          </div>

          <div className="h-14"></div>
          <div className="text-3xl text-center">Your Wishlist is Empty!</div>
        </div>
      </div>

      {isDownloaded && (
        <div className={`fixed ${isSaved == false ? "bottom-15" : "bottom-27"} center-0 text-2xl z-1 bg-stone-100 text-red-500 border-red-300 border-4 rounded flex flex-row`}>
          <p>Schedule Downloaded.</p>
            <Image src={Cancel} className="h-8 w-8 bg-red-100"
              onClick={() => setDownloaded(false) }/>
        </div>
      )}

      {isSaved && (
        <div className="fixed bottom-15 center-0 text-2xl z-1 bg-stone-100 text-red-500 border-red-300 border-4 rounded flex flex-row">
          <p>Schedule Saved.</p>
            <Image src={Cancel} className="h-8 w-8 bg-red-100"
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
