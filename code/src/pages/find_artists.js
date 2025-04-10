import { useState } from "react";
import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Artists() {
  const [selectedDay, setSelectedDay] = useState("all");

  const artists = [
    { title: "Charlie's Bakery", day: "Friday", link: "/charliesBakery", bgColor: "bg-green-200" },
    { title: "Jack's Candles", day: "Saturday", link: "/jacksCandles", bgColor: "bg-yellow-200" },
    { title: "Emily's Sweater Bonanza", day: "Sunday", link: "/emilysSweater", bgColor: "bg-orange-100" }
  ];

  const filteredArtists = artists.filter(artist => {
    const dayFilter = selectedDay === "All Artists" || selectedDay === "all" || artist.day === selectedDay;
    return dayFilter;
  });

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Artists</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* Categories Section */}
      <div className="mt-4 w-[90%] max-w-md">

        <p className="text-center text-[#C374E6] text-s font-medium mt-9 underline">
          Select to Filter Artists by Day
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
            <Link key={index} href={artist.link} passHref>
              <div className={`${artist.bgColor} p-4 rounded-lg mb-2 cursor-pointer`}>
                <p className="font-bold"> {artist.title}</p>
                <p> {artist.day} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
