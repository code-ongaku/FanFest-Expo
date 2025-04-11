import { useState } from "react";
import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Vendors() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("all");

  const vendors = [
    { title: "Bloom", category: "Apparel", day: "Friday", link: "/bloom", bgColor: "bg-green-200" },
    { title: "Sketch Drive", category: "Merch", day: "Saturday", link: "/sketchDrive", bgColor: "bg-yellow-200" },
    { title: "Manga Tent", category: "Books", day: "Saturday", link: "/individual_vendor/manga_tent", bgColor: "bg-orange-100" },
    { title: "Conbini", category: "Snacks", day: "Sunday", link: "/individual_vendor/conbini", bgColor: "bg-red-200" },
    { title: "Mako House", category: "Snacks", day: "Sunday", link: "/makoHouse", bgColor: "bg-red-200" },
    { title: "PosterZ", category: "Merch", day: "Saturday", link: "/posterz", bgColor: "bg-yellow-200" }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const categoryFilter = selectedCategory === "all" || vendor.category === selectedCategory;
    const dayFilter = selectedDay === "All Vendors" || selectedDay === "all" || vendor.day === selectedDay;
    return categoryFilter && dayFilter;
  });

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Vendors</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* <p className="text-center text-[#C374E6] text-s font-medium mt-4 underline">
        Select a Category to Filter by type
      </p> */}

      {/* Categories Section */}
      <div className="mt-2 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Filter by Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          {["Snacks", "Books", "Merch", "Apparel", "Other"].map(category => (
            <button
              key={category}
              className={`rounded-full px-3 py-1 flex items-center justify-center 
                ${selectedCategory === category ? "bg-gray-300 text-gray-500" : "bg-[#E9F0F8]"} 
                transition-all duration-300 ease-in-out`}
              onClick={() => setSelectedCategory(category === selectedCategory ? "all" : category)}
            >
              <span 
                className={`w-3 h-3 rounded-full 
                  ${category === "Snacks" ? "bg-red-200" : 
                    category === "Books" ? "bg-orange-200" : 
                    category === "Merch" ? "bg-yellow-200" : 
                    category === "Apparel" ? "bg-green-200" :
                    "bg-blue-200"} 
                  mr-2`}
              ></span>
              {category}
            </button>
          ))}
        </div>

        {/* <p className="text-center text-[#C374E6] text-s font-medium mt-9 underline">
          Select to Filter Vendors by Day
        </p> */}

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          {["All Vendors", "Friday", "Saturday", "Sunday"].map(day => (
            <button
              key={day}
              className={`underline ${selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"}`}
              onClick={() => setSelectedDay(day === selectedDay ? "all" : day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Vendors List */}
        <div className="mt-6 max-h-[350px] overflow-y-auto">
          {filteredVendors.map((vendor, index) => (
            <Link key={index} href={vendor.link} passHref>
              <div className={`${vendor.bgColor} p-4 rounded-lg mb-2 cursor-pointer`}>
                <p className="font-bold"> {vendor.title}</p>
                <p> {vendor.day} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
