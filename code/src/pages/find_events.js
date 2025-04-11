import { useState } from "react";
import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("all");

  const events = [
    { title: "Opening Ceremony", time: "Friday: 10 am - 12 pm", category: "Official Events", day: "Friday", link: "/individual_event/opening_ceremony", bgColor: "bg-red-200" },
    { title: "Arcade", time: "Friday: 10 am - 4 pm", category: "Gaming", day: "Friday", link: "/individual_event/arcade", bgColor: "bg-blue-200" },
    { title: "FanFest Expo", time: "Saturday: 10 am - 12 pm", category: "Official Events", day: "Saturday", link: "/ceremony", bgColor: "bg-red-200" },
    { title: "Arcade", time: "Saturday: 10 am - 4 pm", category: "Gaming", day: "Saturday", link: "/individual_event/arcade", bgColor: "bg-blue-200" },
    { title: "Awards Ceremony", time: "Sunday: 10 am - 12 pm", category: "Official Events", day: "Sunday", link: "/ceremony", bgColor: "bg-red-200" },
    { title: "Arcade", time: "Sunday: 10 am - 4 pm", category: "Gaming", day: "Sunday", link: "/individual_event/arcade", bgColor: "bg-blue-200" },

    { title: "Contest A: Cosplay", time: "Friday: 11 am - 12 pm", category: "Contests", day: "Saturday", link: "/contest-A-cosplay", bgColor: "bg-green-200" },
    { title: "Idol Fest", time: "Friday: 11:30 am - 1 pm", category: "Concerts", day: "Saturday", link: "/individual_event/idol_fest", bgColor: "bg-purple-200" },

    { title: "Contest B: Card Collections", time: "Friday: 12 pm - 1 pm", category: "Contests", day: "Sunday", link: "/contest-B-card-collections", bgColor: "bg-green-200" },
    { title: "Concert: Pop Rock", time: "Friday: 12 pm - 3 pm", category: "Concerts", day: "Sunday", link: "/concert-pop-rock", bgColor: "bg-purple-200" },
    
    { title: "Contest C: Movie Props", time: "Friday: 1 pm - 2 pm", category: "Contests", day: "Friday", link: "/contest-c-movie-props", bgColor: "bg-green-200" },
  ];

  const filteredEvents = events.filter(event => {
    const categoryFilter = selectedCategory === "all" || event.category === selectedCategory;
    const dayFilter = selectedDay === "All Events" || selectedDay === "all" || event.day === selectedDay;
    return categoryFilter && dayFilter;
  });

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Events</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* <p className="text-center text-[#C374E6] text-s font-medium mt-1 underline">
        Filter by Category or Day
      </p> */}

      {/* Categories Section */}
      <div className="mt-2 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Filter by Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          {["Official Events", "Gaming", "Celebrities / Guests", "Contests", "Concerts", "Other"].map(category => (
            <button
              key={category}
              className={`rounded-full px-3 py-1 flex items-center justify-center 
                ${selectedCategory === category ? "bg-gray-300 text-gray-500" : "bg-[#E9F0F8]"} 
                transition-all duration-300 ease-in-out`}
              onClick={() => setSelectedCategory(category === selectedCategory ? "all" : category)}
            >
              <span 
                className={`w-3 h-3 rounded-full 
                  ${category === "Official Events" ? "bg-red-500" : 
                    category === "Gaming" ? "bg-blue-500" : 
                    category === "Celebrities / Guests" ? "bg-yellow-500" : 
                    category === "Contests" ? "bg-green-500" : 
                    category === "Concerts" ? "bg-purple-500" : 
                    "bg-cyan-500"} 
                  mr-2`}
              ></span>
              {category}
            </button>
          ))}
        </div>

        {/* <p className="text-center text-[#C374E6] text-s font-medium mt-9 underline">
          Select to Filter Events by Day
        </p> */}

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          {["All Events", "Friday", "Saturday", "Sunday"].map(day => (
            <button
              key={day}
              className={`underline ${selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"}`}
              onClick={() => setSelectedDay(day === selectedDay ? "all" : day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="mt-6 max-h-[350px] overflow-y-auto">
          {filteredEvents.map((event, index) => (
            <Link key={index} href={event.link} passHref>
              <div className={`${event.bgColor} p-4 rounded-lg mb-2 cursor-pointer flex justify-between items-center`}>
                <div>
                  <p className="font-bold"> {event.title}</p>
                  <p> {event.time} </p>
                </div>
                <div className="flex gap-2 text-xl">
                  <span>➕</span>
                  <span>❤️</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
