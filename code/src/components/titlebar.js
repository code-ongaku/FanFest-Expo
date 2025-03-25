// navbar.js but for Welcome, Login, and Sign-Up pages

import HomeIcon from "../../public/home-icon.svg";
import Ellipse from "../../public/circle.svg";
import Image from "next/image";

export default function Titlebar() {
  return (
    <div className="w-full bg-[#DECDF5] p-4 flex justify-center items-center font-semibold shadow">

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
    </div>
  );
}
