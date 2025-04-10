import Navbar from "../components/navbar.js";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Cancel from "../../public/cancel.svg"

export default function Wishlist() {

    const [selectedDay, setSelectedDay] = useState("all");
    const [isTrashed, setTrashed] = useState([false, false, false, false, false, false]);
    const [isAdded, setAdded] = useState(false);

    const Bookmarks = [
        { title: "Arcade", num: 0, time: "Friday: 10 am - 5 pm", day: "Friday", link: "/arcade", bgColor: "bg-red-200" },
        { title: "Idol Fest", num: 1, time: "Friday: 11:30 am - 1 pm", day: "Saturday", link: "/idol-fest", bgColor: "bg-purple-200" },
        { title: "Charlie's Bakery", num: 2, time: "Friday", day: "Friday", link: "/charliesBakery", bgColor: "bg-purple-200" },
        { title: "Make Your Own Cosplay", num: 3, time: "Sunday: 12 pm - 2 pm", day: "Sunday", link: "/makeYourOwnCosplay", bgColor: "bg-red-200" },
        { title: "Balancing Work and Expo", num: 4, time: "Friday: 10 am - 12 pm", day: "Friday", link: "/balancingWorkAndExpo", bgColor: "bg-red-200" },
        { title: "PosterZ", time: "Saturday", num: 5, day: "Saturday", link: "/posterz", bgColor: "bg-purple-200" }
    ]

    const filteredBookmarks = Bookmarks.filter((bookmark, index) => {
        const dayFilter = selectedDay === "All" || selectedDay === "all" || bookmark.day === selectedDay;
        return dayFilter && !isTrashed[index];
    });

    return (
        <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">

            {isAdded && (
                <div className="fixed top-0 left-0 z-1 bg-stone-100 text-stone-900 border-stone-900 border-1 rounded flex flex-row">
                    <Link href="/schedule">Added! Click to go to Schedule.</Link>
                    <Image src={Cancel} className="h-6 w-6 bg-red-100"
                        onClick={() => setAdded(false) }/>
                </div>
            )}

            <Navbar />
            {/* Title Section */}
            <div className="text-center mt-8">
                <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Wishlist</h1>
                <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
            </div>

            {/* Categories Section */}
            <div className="mt-3 w-[90%] max-w-md">

                {/* Day Filters */}
                <div className="mt-4 flex justify-around">
                    {["All", "Friday", "Saturday", "Sunday"].map(day => (
                        <button
                            key={day}
                            className={`underline ${selectedDay === day ? "font-bold text-[#7E52A0]" : "text-gray-600"}`}
                            onClick={() => setSelectedDay(day === selectedDay ? "all" : day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Bookmarks List */}
                <div className="mt-3 max-h-[450px] overflow-y-auto"> {/* max-h and overflow-y for scrollbar */}
                    
                    {filteredBookmarks.map((bookmark, index) => (
                        <div key={index} className="mb-2 flex flex-row">
                            <Link className="w-4/6" href={bookmark.link} passHref>
                                <div className={`${bookmark.bgColor} p-4 rounded-l-lg cursor-pointer`}>
                                    <p className="font-bold">{bookmark.title}</p>
                                    <p>{bookmark.time}</p>
                                </div>
                            </Link>
                            <div className="relative w-1/6 bg-[#DECDF5] border-r-1 border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]"
                                onClick={() => setAdded(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <div className="w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]"
                                onClick={() => setTrashed(prev => {const curr = [...prev]; curr[bookmark.num] = true; return curr;})}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}