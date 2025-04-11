import { useState } from "react";
import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js
import Image from "next/image";
import Cancel from "../../public/cancel.svg";

export default function Artists() {
  const [selectedDay, setSelectedDay] = useState("all");
  const [isAddedWishlist, setAddedWishlist] = useState(false);
  const [isAddedSchedule, setAddedSchedule] = useState(false);

  const handleAddToWishlist = () => {
    setAddedWishlist(true);
    setTimeout(() => setAddedWishlist(false), 10000);
  };

  const handleAddToSchedule = () => {
    setAddedSchedule(true);
    setTimeout(() => setAddedSchedule(false), 10000);
  };

  const artists = [
    { title: "Charlie's Bakery", day: "Friday", link: "/individual_artist/charlies_bakery", bgColor: "bg-green-200" },
    { title: "Sydney's Knitwear", day: "Saturday", link: "/sydneysKnitwear", bgColor: "bg-yellow-200" },
    { title: "Jack's Candles", day: "Saturday", link: "/individual_artist/jacks_candles", bgColor: "bg-yellow-200" },
    { title: "Emily's Sweater Bonanza", day: "Sunday", link: "/emilysSweater", bgColor: "bg-orange-100" }
  ];

  const filteredArtists = artists.filter(artist => {
    const dayFilter = selectedDay === "All Artists" || selectedDay === "all" || artist.day === selectedDay;
    return dayFilter;
  });

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      
      {/* Popups */}
      {isAddedWishlist && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-stone-100 text-stone-900 border border-stone-900 rounded flex justify-between items-center px-3 py-2 shadow-md whitespace-nowrap">
          <Link href="/wishlist" className="hover:underline">
            Added! Click to go to Wishlist.
          </Link>
          <div className="ml-2 cursor-pointer">
            <Image
              src={Cancel}
              alt="close"
              className="h-6 w-6"
              onClick={() => setAddedWishlist(false)}
            />
          </div>
        </div>
      )}
      {isAddedSchedule && (
        <div className="fixed top-28 left-1/2 transform -translate-x-1/2 z-50 bg-stone-100 text-stone-900 border border-stone-900 rounded flex justify-between items-center px-3 py-2 shadow-md whitespace-nowrap">
          <Link href="/schedule" className="hover:underline">
            Added! Click to go to Schedule.
          </Link>
          <div className="ml-2 cursor-pointer">
            <Image
              src={Cancel}
              alt="close"
              className="h-6 w-6"
              onClick={() => setAddedSchedule(false)}
            />
          </div>
        </div>
      )}

      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Artists</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
        <p>Artists run from 9am to 6pm</p>
      </div>

      {/* Categories Section */}
      <div className="mt-4 w-[90%] max-w-md">

        {/* <p className="text-center text-[#C374E6] text-s font-medium mt-9 underline">
          Select to Filter Artists by Day
        </p> */}

        <p className="text-left text-[#C374E6] text-s font-medium mt-4 underline">
          Filter by Day
        </p>

        {/* Day Filters */}
        <div className="mt-4 flex justify-around">
          {["All Artists", "Friday", "Saturday", "Sunday"].map(day => (
            <button
              key={day}
              className={`underline ${selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"}`}
              onClick={() => setSelectedDay(day === selectedDay ? "all" : day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Artists List */}
        <div className="mt-6 max-h-[350px] overflow-y-auto">
          {filteredArtists.map((artist, index) => (
            <div
              key={index}
              className={`${artist.bgColor} p-4 rounded-lg mb-2 flex justify-between items-center`}
            >
              <Link href={artist.link} className="flex-grow cursor-pointer">
                <div>
                  <p className="font-bold">{artist.title}</p>
                  <p>{artist.day}</p>
                </div>
              </Link>
              <div className="flex gap-2 text-xl ml-4">
                <button onClick={handleAddToSchedule} title="Add to Schedule">➕</button>
                <button onClick={handleAddToWishlist} title="Add to Wishlist">❤️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
