import { useState } from "react";
import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Panels() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("all");

  const panels = [
    { title: "Balancing Work and Expo", time: "Friday: 10 am - 12 pm", category: "Informative", day: "Friday", link: "/balancingWorkAndExpo", bgColor: "bg-cyan-100" },
    { title: "Guide to Cosplay", time: "Friday: 10 am - 11am", category: "Informative", day: "Friday", link: "/guideToCosplay", bgColor: "bg-cyan-100" },
    { title: "Cosplay Chess", time: "Saturday: 11 am - 12 pm", category: "Interactive", day: "Saturday", link: "/individual_panel/cosplay_chess", bgColor: "bg-green-200" },
    { title: "Intro to Cons", time: "Saturday: 11:30 am - 1 pm", category: "Informative", day: "Saturday", link: "/individual_panel/intro_to_cons", bgColor: "bg-cyan-100" },
    { title: "Idol Festival Crash Course", time: "Sunday: 12 pm - 1 pm", category: "Interactive", day: "Sunday", link: "/idolFestivalCrashCourse", bgColor: "bg-green-200" },
    { title: "Make Your Own Cosplay", time: "Sunday: 12 pm - 2 pm", category: "Interactive", day: "Sunday", link: "/makeYourOwnCosplay", bgColor: "bg-green-200" },
    { title: "Wheel of Anime", time: "Friday: 1 pm - 2 pm", category: "Interactive", day: "Saturday", link: "/wheelOfAnime", bgColor: "bg-green-200" }
  ];

  const filteredPanels = panels.filter(panel => {
    const categoryFilter = selectedCategory === "all" || panel.category === selectedCategory;
    const dayFilter = selectedDay === "All Panels" || selectedDay === "all" || panel.day === selectedDay;
    return categoryFilter && dayFilter;
  });

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Panels</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* <p className="text-center text-[#C374E6] text-s font-medium mt-4 underline">
        Select a Category to Filter by type
      </p> */}

      {/* Categories Section */}
      <div className="mt-4 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Filter by Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          {["Interactive", "Informative"].map(category => (
            <button
              key={category}
              className={`rounded-full px-3 py-1 flex items-center justify-center 
                ${selectedCategory === category ? "bg-gray-300 text-gray-500" : "bg-[#E9F0F8]"} 
                transition-all duration-300 ease-in-out`}
              onClick={() => setSelectedCategory(category === selectedCategory ? "all" : category)}
            >
              <span 
                className={`w-3 h-3 rounded-full 
                  ${category === "Interactive" ? "bg-green-200" : "bg-cyan-100"} 
                  mr-2`}
              ></span>
              {category}
            </button>
          ))}
        </div>

        {/* <p className="text-center text-[#C374E6] text-s font-medium mt-9 underline">
          Select to Filter Panels by Day
        </p> */}

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          {["All Panels", "Friday", "Saturday", "Sunday"].map(day => (
            <button
              key={day}
              className={`underline ${selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"}`}
              onClick={() => setSelectedDay(day === selectedDay ? "all" : day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Panels List */}
        <div className="mt-6 max-h-[350px] overflow-y-auto">
          {filteredPanels.map((panel, index) => (
            <Link key={index} href={panel.link} passHref>
              <div className={`${panel.bgColor} p-4 rounded-lg mb-2 cursor-pointer`}>
                <p className="font-bold"> {panel.title}</p>
                <p> {panel.time} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
