import Navbar from "../components/navbar.js";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Cancel from "../../public/cancel.svg"

export default function Wishlist() {
  const [selectedDay, setSelectedDay] = useState("all");
  const [modalOpened, setModal] = useState(false);
  const [ind, setInd] = useState(0);
  const [isTrashed, setTrashed] = useState([false, false, false, false, false, false]);
  const [isAdded, setAdded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const openModal = () => setModal((prev) => !prev);
  const trashIt = (i) => {
    setTrashed((prev) => {
      const newArr = [...prev];
      newArr[i] = true;
      return newArr;
    });
  };

  // Update the categories in Bookmarks to match filter labels
  const Bookmarks = [
    {
      title: "Arcade",
      num: 0,
      time: "Saturday: 10 am - 4 pm",
      day: "Saturday",
      link: "/arcade",
      bgColor: "bg-red-200",
      category: "Events", // updated from "Event"
    },
    {
      title: "Idol Fest",
      num: 1,
      time: "Friday: 11:30 am - 1 pm",
      day: "Friday",
      link: "/idol-fest",
      bgColor: "bg-red-200",
      category: "Events", // updated from "Event"
    },
    {
      title: "Charlie's Bakery",
      num: 2,
      time: "Friday",
      day: "Friday",
      link: "/charliesBakery",
      bgColor: "bg-green-200",
      category: "Artists", // updated from "Artist"
    },
    {
      title: "Make Your Own Cosplay",
      num: 3,
      time: "Sunday: 12 pm - 2 pm",
      day: "Sunday",
      link: "/makeYourOwnCosplay",
      bgColor: "bg-blue-200",
      category: "Panels", // updated from "Panel"
    },
    {
      title: "Balancing Work and Expo",
      num: 4,
      time: "Friday: 10 am - 12 pm",
      day: "Friday",
      link: "/balancingWorkAndExpo",
      bgColor: "bg-blue-200",
      category: "Panels", // updated from "Panel"
    },
    {
      title: "PosterZ",
      num: 5,
      time: "Saturday",
      day: "Saturday",
      link: "/posterz",
      bgColor: "bg-yellow-200",
      category: "Vendors", // updated from "Vendor"
    },
  ];

  // Use updated filter using bookmark.category
  const filteredBookmarks = Bookmarks.filter((bookmark, index) => {
    const categoryFilter = selectedCategory === "all" || bookmark.category === selectedCategory;
    const dayFilter = selectedDay === "all" || selectedDay === "All" || bookmark.day === selectedDay;
    const notTrashed = !isTrashed[index];
    return categoryFilter && dayFilter && notTrashed;
  });

  // Helper function to map category to a background color
  const categoryToColor = (cat) => {
    if (cat === "Events") return "bg-red-300";
    if (cat === "Panels") return "bg-blue-300";
    if (cat === "Vendors") return "bg-yellow-300";
    if (cat === "Artists") return "bg-green-300";
    return "bg-gray-200"; // fallback
  };

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">

      {isAdded && (
        <div className="fixed top-0 left-0 text-2xl z-10 bg-stone-100 text-red-500 border-red-300 border-4 rounded flex flex-row">
          <Link href="/schedule">
            Added! Click to go to Schedule.
          </Link>
          <Image
            src={Cancel}
            className="h-8 w-8 bg-red-100 cursor-pointer"
            onClick={() => setAdded(false)}
            alt="Close"
          />
        </div>
      )}

      <Navbar />

      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Wishlist</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
        <p>Click + to add to schedule</p>
        <p>Click the trash can to remove from wishlist</p>
      </div>

      {/* Categories Filter Section */}
      <div className="mt-3 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Filter by Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          {["Events", "Panels", "Vendors", "Artists"].map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                className={`
                  rounded-full w-full py-2 text-sm font-semibold text-center transition-all duration-300 ease-in-out
                  ${isSelected 
                    ? `${categoryToColor(cat)} text-white ring-2 ring-black`
                    : `${categoryToColor(cat)} bg-opacity-50 text-[#7E52A0]`
                  }
                `}
                onClick={() => setSelectedCategory(isSelected ? "all" : cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Day Filters */}
        <div className="mt-4 flex justify-around">
          {["All", "Friday", "Saturday", "Sunday"].map((day) => (
            <button
              key={day}
              className={`underline py-2 ${selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"}`}
              onClick={() => setSelectedDay(day === selectedDay ? "all" : day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Bookmarks List */}
        <div className="mt-3 max-h-[450px] overflow-y-auto">
          {filteredBookmarks.map((bookmark, index) => (
            <div key={index} className="mb-2 flex flex-row">
              <Link className="w-4/6" href={bookmark.link} passHref>
                <div className={`${bookmark.bgColor} p-4 rounded-l-lg cursor-pointer`}>
                  <p className="font-bold">{bookmark.title}</p>
                  <p>{bookmark.time}</p>
                </div>
              </Link>

              {/* '+' icon */}
              <div
                className="relative w-1/6 bg-[#DECDF5] border-r border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]"
                onClick={() => { setAdded(true); trashIt(bookmark.num); }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>

              {/* Trash icon */}
              <div
                className="w-1/6 bg-[#DECDF5] border-l border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]"
                onClick={() => { openModal(); setInd(bookmark.num); }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </div>

              {/* Confirm Removal Modal */}
              {modalOpened && (
                <div onClick={openModal} className="fixed top-0 left-0 bg-[#111111e1] w-screen h-screen flex justify-center items-center z-10">
                  <div onClick={(e) => e.stopPropagation()} className="bg-white w-[90%] h-[25%] rounded-lg flex flex-col items-center justify-center gap-4 text-[#7E52A0] p-3 text-center">
                    <h1>Remove this item from your wishlist?</h1>
                    <div className="flex gap-10 mt-3">
                      <button
                        onClick={() => { trashIt(ind); openModal(); }}
                        className="bg-[#7E52A0] text-white rounded-lg px-6 py-2"
                      >
                        Remove
                      </button>
                      <button
                        onClick={openModal}
                        className="bg-[#7E52A0] text-white rounded-lg px-6 py-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
