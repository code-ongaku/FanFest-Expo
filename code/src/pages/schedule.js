import Navbar from "../components/navbar.js";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Cancel from "../../public/cancel.svg"
export default function Schedule({}) {

  const [isDownloaded, setDownloaded] = useState(false)
  const [isSaved, setSaved] = useState(false)
  const [selectedDay, setSelectedDay] = useState("Friday");
  const [ind, setInd] = useState(0)
  const [modalOpened, setModal] = useState(false)
  const openModal = () => {setModal(() => !modalOpened)}
  const [isTrashed, setTrashed] = useState(["visible", "invisible", "visible", "invisible", "visible", "invisible", "visible",
    "invisible", "visible", "invisible", "visible",
    "invisible", "visible", "invisible", "visible",
  ]);
  const trashIt = (i) => {
    setTrashed(prev => {const newArr = [...prev]; newArr[i] = "invisible"; return newArr})
  }

  const Bookmarks = [
    { title: "Arcade", num: 0, day: "Friday", link: "/individual_event/arcade", bgColor: "bg-red-200", ht: "h-28" },
    { title: "", num: 1, day: "Friday", link: "", bgColor: "", ht: "h-14" },
    { title: "Make Your Own Cosplay", num: 2,  day: "Friday", link: "/", bgColor: "bg-red-200", ht: "h-28" },
    { title: "", num: 3,  day: "Friday", link: "", bgColor: "", ht: "h-28" },
    { title: "Concert: Pop Rock", num: 4, day: "Friday", link: "/", bgColor: "bg-green-200", ht: "h-14" },
    { title: "", num: 5, day: "Friday", link: "", bgColor: "", ht: "h-14" },
    { title: "Emily's Sweater Bonanza", num: 6, day: "Friday", link: "/", bgColor: "bg-blue-200", ht: "h-14"},

    { title: "", num: 7, day: "Saturday", link: "", bgColor: "", ht: "h-28" },
    { title: "Guide to Cosplay", num: 8, day: "Saturday", link: "/individual_panel/guide_to_cosplay", bgColor: "bg-blue-200", ht: "h-14" },
    { title: "", day: "Saturday", num: 9, link: "", bgColor: "", ht: "h-70" },
    { title: "Intro to Cons", num: 10, day: "Saturday", link: "/individual_panel/intro_to_cons", bgColor: "bg-yellow-200", ht: "h-28" },

    { title: "", num: 11, day: "Sunday", link: "", bgColor: "", ht: "h-56" },
    { title: "Awards Ceremony", num: 12, day: "Sunday", link: "/individual_panel/guide_to_cosplay", bgColor: "bg-blue-200", ht: "h-28" },
    { title: "", day: "Sunday", num: 13, link: "", bgColor: "", ht: "h-14" },
    { title: "Wheel of Anime", num: 14, day: "Sunday", link: "/individual_panel/intro_to_cons", bgColor: "bg-yellow-200", ht: "h-14" }
  ]

  const filteredBookmarks = Bookmarks.filter((bookmark) => {
    const dayFilter = selectedDay === "All" || selectedDay === "all" || bookmark.day === selectedDay;
    return dayFilter;
  });

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Schedule</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
        <p>Click the trash can to remove from wishlist</p>
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

          <div className="col-span-3">
            {filteredBookmarks.map((bookmark, index) => (
              <div key={index} className={`flex flex-row display ${isTrashed[bookmark.num]}`}>
                <Link className="w-5/6" href={bookmark.link} passHref>
                  <div className={`${bookmark.bgColor} pl-4 cursor-pointer flex items-center ${bookmark.ht}`}>
                    <p className="font-bold">{bookmark.title}</p>
                  </div>
                </Link>
                <div className={`w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF] ${bookmark.ht}`}
                  onClick={() => {openModal(); setInd(bookmark.num);}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
                {modalOpened && 
                  <div onClick={openModal} className="fixed top-0 left-0 bg-[#111111e1] w-screen h-screen flex justify-center items-center z-10">
                    <div className="bg-white w-[90%] h-[25%] rounded-lg flex flex-col items-center justify-center gap-4 text-[#7E52A0] p-3 text-center">
                      <h1>Would you like to add remove this item from your schedule?</h1>
                      <div className="flex gap-10 mt-3">
                        <button onClick={() => {trashIt(ind); openModal;}} className="bg-[#7E52A0] text-white rounded-lg px-6 py-2">Remove</button>
                        <button onClick={openModal} className="bg-[#7E52A0] text-white rounded-lg px-6 py-2">Cancel</button>
                      </div>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
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
