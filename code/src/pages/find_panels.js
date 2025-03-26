import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Panels({}) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Panels</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* Categories Section */}
      <div className="mt-8 w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-green-200 mr-2"></span>
            Interactive
          </button>
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-cyan-200 mr-2"></span>
            Informative
          </button>
          
        </div>

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          <button className="underline">All Panels</button>
          <button className="underline">Friday</button>
          <button className="underline">Saturday</button>
          <button className="underline">Sunday</button>
        </div>

        {/* Panels List */}
        <div className="mt-8 max-h-[350px] overflow-y-auto"> {/* max-h and overflow-y for scrollbar */}
            <Link href="/balancingWorkAndExpo" passHref>
                <div className="bg-cyan-100 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 12 pm</p>
                    <p>Balancing Work and Expo</p>
                </div>
            </Link>
            <Link href="/guideToCosplay" passHref>
                <div className="bg-cyan-100 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 11am</p>
                    <p>Guide to Cosplay</p>
                </div>
            </Link>
            <Link href="/cosplayChess" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">11 am - 12 pm</p>
                    <p>Cosplay Chess</p>
                </div>
            </Link>
            <Link href="/introToCons" passHref>
                <div className="bg-cyan-100 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">11:30 am - 1 pm</p>
                    <p>Intro to Cons</p>
                </div>
            </Link>
            <Link href="/idolFestivalCrashCourse" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">12 pm - 1 pm</p>
                    <p>Idol Festival Crash Course</p>
                </div>
            </Link>
            <Link href="/makeYourOwnCosplay" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">12 pm - 2 pm</p>
                    <p>Make Your Own Cosplay</p>
                </div>
            </Link>
            <Link href="/wheelOfAnime" passHref>
                <div className="bg-green-200 p-4 rounded-lg cursor-pointer">
                    <p className="font-bold">1 pm - 2 pm</p>
                    <p>Wheel of Anime</p>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}