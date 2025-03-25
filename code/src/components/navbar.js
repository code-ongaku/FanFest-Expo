import Hamburger from "../../public/hamburger.svg";
import HomeIcon from "../../public/home-icon.svg";
import Ellipse from "../../public/circle.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full bg-[#DECDF5] p-4 flex justify-between items-center font-semibold shadow">
      {/* Left side empty to balance spacing */}
      <div className="w-8 h-8" />

      {/* Centered logo + text */}
      <div className="flex items-center justify-center">
        <div className="relative w-8 h-8 mr-2">
          <Image
            src={Ellipse}
            alt="circle"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src={HomeIcon}
            alt="home"
            layout="fill"
            objectFit="contain"
            className="p-2"
          />
        </div>
        <h1 className="text-3xl font-bold">FanFest Expo</h1>
      </div>

      {/* Hamburger menu icon (right side) */}
      <Image src={Hamburger} alt="menu" className="h-8 w-auto" />
    </div>
  );
}
