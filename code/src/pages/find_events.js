import { useState } from "react";
import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js
import Image from "next/image";
import Cancel from "../../public/cancel.svg";

// Helper function to map each category to a background color
function categoryToColor(category) {
  switch (category) {
    case "Official Events":
      return "bg-red-300";
    case "Gaming":
      return "bg-blue-300";
    case "Celebrities / Guests":
      return "bg-yellow-300";
    case "Contests":
      return "bg-green-300";
    case "Concerts":
      return "bg-purple-300";
    default:
      // "Other" or anything else
      return "bg-cyan-300";
  }
}

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const events = [
    { title: "Opening Ceremony", time: "Friday: 10 am - 12 pm", category: "Official Events", day: "Friday", link: "/individual_event/opening_ceremony", bgColor: "bg-red-200" },
    { title: "Arcade", time: "Friday: 10 am - 4 pm", category: "Gaming", day: "Friday", link: "/individual_event/arcade", bgColor: "bg-blue-200" },
    { title: "FanFest Expo", time: "Saturday: 10 am - 12 pm", category: "Official Events", day: "Saturday", link: "/ceremony", bgColor: "bg-red-200" },
    { title: "Arcade", time: "Saturday: 10 am - 4 pm", category: "Gaming", day: "Saturday", link: "/individual_event/arcade", bgColor: "bg-blue-200" },
    { title: "Awards Ceremony", time: "Sunday: 10 am - 12 pm", category: "Official Events", day: "Sunday", link: "/ceremony", bgColor: "bg-red-200" },
    { title: "Arcade", time: "Sunday: 10 am - 4 pm", category: "Gaming", day: "Sunday", link: "/individual_event/arcade", bgColor: "bg-blue-200" },
    { title: "Special VA: Autograph Signing", time: "Saturday: 1 pm - 3 pm", category: "Celebrities / Guests", day: "Saturday", link: "/autographSigning", bgColor: "bg-yellow-200" },

    { title: "Contest A: Cosplay", time: "Friday: 11 am - 12 pm", category: "Contests", day: "Friday", link: "/contest-A-cosplay", bgColor: "bg-green-200" },
    { title: "Idol Fest", time: "Friday: 11:30 am - 1 pm", category: "Concerts", day: "Friday", link: "/individual_event/idol_fest", bgColor: "bg-purple-200" },

    { title: "Contest B: Card Collections", time: "Saturday: 12 pm - 1 pm", category: "Contests", day: "Saturday", link: "/contest-B-card-collections", bgColor: "bg-green-200" },
    { title: "Concert: Pop Rock", time: "Sunday: 12 pm - 3 pm", category: "Concerts", day: "Sunday", link: "/concert-pop-rock", bgColor: "bg-purple-200" },
    
    { title: "Contest C: Movie Props", time: "Sunday: 1 pm - 2 pm", category: "Contests", day: "Sunday", link: "/contest-c-movie-props", bgColor: "bg-green-200" },
  ];

  // Filter logic
  const filteredEvents = events.filter((event) => {
    const categoryFilter =
      selectedCategory === "all" || event.category === selectedCategory;
    const dayFilter =
      selectedDay === "All Events" || selectedDay === "all" || event.day === selectedDay;
    return categoryFilter && dayFilter;
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
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">
          Find Events
        </h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* <p className="text-center text-[#C374E6] text-s font-medium mt-1 underline">
        Filter by Category or Day
      </p> */}

      {/* Categories Section */}
      <div className="mt-2 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Filter by Categories</h2>
        
        {/* 3 columns, each button is forced to the same size */}
        <div className="grid grid-cols-3 gap-2">
          {[
            "Official Events",
            "Gaming",
            "Celebrities / Guests",
            "Contests",
            "Concerts",
            "Other",
          ].map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                className={`
                  w-full h-12 
                  rounded-full text-sm font-semibold
                  flex items-center justify-center text-center
                  ${categoryToColor(category)}
                  ${
                    isSelected
                      ? "ring-2 ring-black" // highlight if selected
                      : ""
                  }
                  transition-all duration-300 ease-in-out
                `}
                onClick={() =>
                  setSelectedCategory(category === selectedCategory ? "all" : category)
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          {["All Events", "Friday", "Saturday", "Sunday"].map((day) => (
            <button
              key={day}
              className={`underline py-2 ${
                selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"
              }`}
              onClick={() => setSelectedDay(day === selectedDay ? "all" : day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="mt-6 max-h-[350px] overflow-y-auto">
          {filteredEvents.map((event, index) => (
            <div
            key={index}
            className={`${event.bgColor} p-4 rounded-lg mb-2 flex justify-between items-center`}
          >
            <Link href={event.link} className="flex-grow cursor-pointer">                <div>
                  <p className="font-bold"> {event.title}</p>
                  <p> {event.time} </p>
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
