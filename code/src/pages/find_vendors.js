import { useState } from "react";
import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js
import Image from "next/image";
import Cancel from "../../public/cancel.svg";

// Helper to map each category to a background color
function vendorCategoryToColor(cat) {
  switch (cat) {
    case "Snacks":
      return "bg-red-300";
    case "Books":
      return "bg-orange-300";
    case "Merch":
      return "bg-yellow-300";
    case "Apparel":
      return "bg-green-300";
    default:
      // "Other" or anything else
      return "bg-blue-300";
  }
}

export default function Vendors() {
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
  const vendors = [
    { title: "Bloom", category: "Apparel", day: "Friday", link: "/bloom", bgColor: "bg-green-200" },
    { title: "Sketch Drive", category: "Merch", day: "Saturday", link: "/sketchDrive", bgColor: "bg-yellow-200" },
    { title: "Manga Tent", category: "Books", day: "Saturday", link: "/individual_vendor/manga_tent", bgColor: "bg-orange-100" },
    { title: "Conbini", category: "Snacks", day: "Sunday", link: "/individual_vendor/conbini", bgColor: "bg-red-200" },
    { title: "Mako House", category: "Snacks", day: "Sunday", link: "/makoHouse", bgColor: "bg-red-200" },
    { title: "PosterZ", category: "Merch", day: "Saturday", link: "/posterz", bgColor: "bg-yellow-200" }
  ];

  // Filter logic
  const filteredVendors = vendors.filter(vendor => {
    const categoryFilter =
      selectedCategory === "all" || vendor.category === selectedCategory;
    const dayFilter =
      selectedDay === "All Vendors" || selectedDay === "all" || vendor.day === selectedDay;
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
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Vendors</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
        <p>Vendors run from 9am to 6pm</p>
      </div>

      {/* <p className="text-center text-[#C374E6] text-s font-medium mt-4 underline">
        Select a Category to Filter by type
      </p> */}

      {/* Categories Section */}
      <div className="mt-2 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Filter by Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          {["Snacks", "Books", "Merch", "Apparel", "Other"].map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                className={`
                  rounded-full px-3 py-2 text-sm font-semibold text-center
                  ${vendorCategoryToColor(category)}
                  ${isSelected ? "ring-2 ring-black" : ""}
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

        {/* <p className="text-center text-[#C374E6] text-s font-medium mt-9 underline">
          Select to Filter Vendors by Day
        </p> */}

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          {["All Vendors", "Friday", "Saturday", "Sunday"].map((day) => (
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

        {/* Vendors List */}
        <div className="mt-6 max-h-[350px] overflow-y-auto">
          {filteredVendors.map((vendor, index) => (
            <div
              key={index}
              className={`${vendor.bgColor} p-4 rounded-lg mb-2 flex justify-between items-center`}
            >
              <Link href={vendor.link} className="flex-grow cursor-pointer">
                <div>
                  <p className="font-bold">{vendor.title}</p>
                  <p>{vendor.day}</p>
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
