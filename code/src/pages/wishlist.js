import Navbar from "../components/navbar.js";
import Link from 'next/link'; // Import Link from Next.js

export default function Vendors({}) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Navbar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Wishlist</h1>
        <div className="w-[120%] border-b border-[#7E52A0] my-4 ml-[-12%]"></div>
      </div>

      {/* Categories Section */}
      <div className="mt-3 w-[90%] max-w-md">

        {/* Events List */}
        <div className="mt-3 max-h-[450px] overflow-y-auto"> {/* max-h and overflow-y for scrollbar */}
            
            <div className="mb-2 flex flex-row">
                <Link className="w-4/6" href="/arcade" passHref>
                    <div className="bg-green-200 p-4 rounded-l-lg cursor-pointer">
                        <p className="font-bold">10 am - 4 pm</p>
                        <p>Arcade</p>
                    </div>
                </Link>
                <div className="w-1/6 bg-[#DECDF5] border-r-1 border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div className="w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
            </div>

            <div className="mb-2 flex flex-row">
                <Link className="w-4/6" href="/idol-fest" passHref>
                    <div className="bg-purple-200 p-4 rounded-l-lg cursor-pointer">
                        <p className="font-bold">11:30 am - 1 pm</p>
                        <p>Idol Fest</p>
                    </div>
                </Link>
                <div className="w-1/6 bg-[#DECDF5] border-r-1 border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div className="w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
            </div>

            <div className="mb-2 flex flex-row">
                <Link className="w-4/6" href="/charliesBakery" passHref>
                    <div className="bg-orange-200 p-4 rounded-l-lg cursor-pointer">
                        <p className="font-bold">10 am - 5 pm</p>
                        <p>Charlie's Bakery</p>
                    </div>
                </Link>
                <div className="w-1/6 bg-[#DECDF5] border-r-1 border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div className="w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
            </div>

            <div className="mb-2 flex flex-row">
                <Link className="w-4/6" href="/makeYourOwnCosplay" passHref>
                    <div className="bg-green-200 p-4 rounded-l-lg cursor-pointer">
                        <p className="font-bold">12 pm - 2 pm</p>
                        <p>Make Your Own Cosplay</p>
                    </div>
                </Link>
                <div className="w-1/6 bg-[#DECDF5] border-r-1 border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div className="w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
            </div>

            <div className="mb-2 flex flex-row">
                <Link className="w-4/6" href="/balancingWorkAndExpo" passHref>
                    <div className="bg-cyan-100 p-4 rounded-l-lg cursor-pointer">
                        <p className="font-bold">10 am - 12 pm</p>
                        <p>Balancing Work and Expo</p>
                    </div>
                </Link>
                <div className="w-1/6 bg-[#DECDF5] border-r-1 border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div className="w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
            </div>

            <div className="mb-2 flex flex-row">
                <Link className="w-4/6" href="/jacksCandles" passHref>
                    <div className="bg-purple-200 p-4 rounded-l-lg cursor-pointer">
                        <p className="font-bold">11 am - 3 pm</p>
                        <p>Jack's Candels</p>
                    </div>
                </Link>
                <div className="w-1/6 bg-[#DECDF5] border-r-1 border-[#7E52A0] flex justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div className="w-1/6 bg-[#DECDF5] border-l-1 border-[#7E52A0] flex rounded-r-lg justify-center items-center cursor-pointer hover:bg-[#CAAFEF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}