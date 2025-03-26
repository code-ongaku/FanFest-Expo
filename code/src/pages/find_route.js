import Navbar from "../components/navbar";
import Image from "next/image";
import magnifying_glass from "../../public/magnifying-glass.svg";
import location from "../../public/location.svg";

export default function find_route() {
    return(
        <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
            <Navbar />
            <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">Find Route</h1>
            <form className="flex flex-col items-center w-[90%] gap-5 mt-5">
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                        <Image 
                        src={magnifying_glass} 
                        alt="magnifying glass" 
                        className="h-6 w-6"
                        />
                    </div>
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <Image 
                        src={location} 
                        alt="location" 
                        className="h-6 w-6"
                        />
                    </div>
                    <input
                        className="bg-white text-2xl w-full rounded-full pl-10 pr-4 py-2"
                        type="text"
                        placeholder="Start Location"
                    />
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                        <Image 
                        src={magnifying_glass} 
                        alt="magnifying glass" 
                        className="h-6 w-6"
                        />
                    </div>
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <Image 
                        src={location} 
                        alt="location" 
                        className="h-6 w-6"
                        />
                    </div>
                    <input
                        className="bg-white text-2xl w-full rounded-full pl-10 pr-4 py-2"
                        type="text"
                        placeholder="End Location"
                    />
                </div>
            </form>
            <div className="w-[90%] mt-5 flex flex-col items-end">
                <button className="py-1 bg-[#DECDF5] text-2xl rounded-full w-[45%] font-bold">Get Route</button>
            </div>
            <div className="w-[90%] mt-5 mb-7">
                <div className="w-full aspect-square bg-white">Pretend theres a map here</div>
            </div>
        </div>
    )
};
