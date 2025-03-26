import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Vendors({}) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Find Vendor</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

        {/* Search bar from material-tailwind */}
        <div className="w-4/5">
            <div className="relative mt-2">
                <div className="absolute top-1 left-1 flex items-center">
                    <button id="dropdownButton" className="bg-orange-200 rounded-full border border-transparent py-1 px-1.5 text-center flex items-center text-sm transition-all ">
                        <span id="dropdownSpan" className="text-ellipsis overflow-hidden">Food</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className="h-6 border-l border-slate-200 ml-1"></div>
                    <div id="dropdownMenu" className="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
                        <ul id="dropdownOptions">
                        <li className="px-4 py-2 bg-orange-200 hover:bg-orange-300 text-sm cursor-pointer" data-value="Food">Food</li>
                        <li className="px-4 py-2 bg-purple-200 hover:bg-purple-300 text-sm cursor-pointer" data-value="Artists">Artists</li>
                        <li className="px-4 py-2 bg-green-200 hover:bg-green-300 text-sm cursor-pointer" data-value="Exhibitors">Exhibitors</li>
                        </ul>
                    </div>
                </div>
                <input
                type="text"
                className="w-full bg-transparent placeholder: text-sm border border-slate-200 rounded-full pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search Vendors" />
            
                <button className="absolute right-1 top-1 rounded-full bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path>
                </svg>
                </button> 
            </div>   
        </div>

      {/* Categories Section */}
      <div className="mt-3 w-[90%] max-w-md">

        {/* Day Filters */}
        <div className="mt-8 flex justify-around">
          <button className="underline">All Vendors</button>
          <button className="underline">Friday</button>
          <button className="underline">Saturday</button>
          <button className="underline">Sunday</button>
        </div>

        {/* Events List */}
        <div className="mt-3 max-h-[350px] overflow-y-auto"> {/* max-h and overflow-y for scrollbar */}
            <Link href="/charliesBakery" passHref>
                <div className="bg-orange-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 5 pm</p>
                    <p>Charlie's Bakery</p>
                </div>
            </Link>
            <Link href="/bloom" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 5 pm</p>
                    <p>Bloom</p>
                </div>
            </Link>
            <Link href="/sketchDrive" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 5 pm</p>
                    <p>Sketch Drive</p>
                </div>
            </Link>
            <Link href="/mangaTent" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 5 pm</p>
                    <p>Manga Tent</p>
                </div>
            </Link>
            <Link href="/conbini" passHref>
                <div className="bg-orange-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 6 pm</p>
                    <p>Conbini</p>
                </div>
            </Link>
            <Link href="/makoHouse" passHref>
                <div className="bg-purple-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">10 am - 6 pm</p>
                    <p>Mako House</p>
                </div>
            </Link>
            <Link href="/jacksCandles" passHref>
                <div className="bg-purple-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">11 am - 3 pm</p>
                    <p>Jack's Candels</p>
                </div>
            </Link>
            <Link href="/posterz" passHref>
                <div className="bg-green-200 p-4 rounded-lg mb-2 cursor-pointer">
                    <p className="font-bold">11 am - 3 pm</p>
                    <p>PosterZ</p>
                </div>
            </Link>
            <Link href="/emilysSweater" passHref>
                <div className="bg-purple-200 p-4 rounded-lg cursor-pointer">
                    <p className="font-bold">11 am - 4 pm</p>
                    <p>Emily's Sweater Bonanza</p>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}