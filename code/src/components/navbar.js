import Hamburger from "../../public/hamburger.svg"
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full bg-[#DECDF5] p-4 flex justify-between items-center font-semibold shadow">
            <div className="h-8 w-8"></div>
            <h1 className="text-3xl">FanFest Expo</h1>
            <Image src={Hamburger} alt="menu" className="h-8 w-auto"/>
        </div>
    );
};
