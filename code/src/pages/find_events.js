import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Events({}) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Events</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* Categories Section */}
      <div className="mt-8 w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            Official Events
          </button>
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            Gaming
          </button>
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
            Celebrities / Guests
          </button>
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            Contests
          </button>
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
            Concerts
          </button>
          <button className="bg-[#E9F0F8] rounded-full px-3 py-1 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></span>
            Other
          </button>
        </div>

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          <button className="underline">All Events</button>
          <button className="underline">Friday</button>
          <button className="underline">Saturday</button>
          <button className="underline">Sunday</button>
        </div>

        {/* Events List */}
        <div className="mt-8 max-h-[350px] overflow-y-auto"> {/* max-h and overflow-y for scrollbar */}
            <Link href="/opening-ceremony" passHref>
                <div className="bg-red-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 12 pm</p>
                    <p>Opening Ceremony</p>
                </div>
            </Link>
            <Link href="/arcade" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 4 pm</p>
                    <p>Arcade</p>
                </div>
            </Link>
            <Link href="/contest-A-cosplay" passHref>
                <div className="bg-yellow-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">11 am - 12 pm</p>
                    <p>Contest A: Cosplay</p>
                </div>
            </Link>
            <Link href="/idol-fest" passHref>
                <div className="bg-purple-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">11:30 am - 1 pm</p>
                    <p>Idol Fest</p>
                </div>
            </Link>
            <Link href="/contest-B-card-collections" passHref>
                <div className="bg-blue-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">12 pm - 1 pm</p>
                    <p>Contest B: Card Collections</p>
                </div>
            </Link>
            <Link href="/concert-pop-rock" passHref>
                <div className="bg-cyan-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">12 pm - 3 pm</p>
                    <p>Concert: Pop Rock</p>
                </div>
            </Link>
            <Link href="/contest-c-movie-props" passHref>
                <div className="bg-pink-200 p-4 rounded-lg cursor-pointer">
                    <p className="font-bold">1 pm - 2 pm</p>
                    <p>Contest C: Movie Props</p>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}