import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../../public/home-icon.svg";
import Ellipse from "../../public/circle.svg";

export default function Titlebar() {
  return (
    <div className="w-full bg-[#DECDF5] p-4 relative flex justify-center items-center font-semibold shadow">
      {/* Centered icon + title */}
      <div className="flex items-center">
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
        <h1 className="whitespace-nowrap text-xl md:text-3xl font-bold">
          FanFest Expo
        </h1>
      </div>

      {/* Login button on the right, vertically centered */}
      <Link href="/login_page" passHref>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2
                     text-[#7E52A0] hover:bg-[#d6c4f0] font-semibold
                     rounded-md px-4 py-2 transition"
        >
          Log In
        </button>
      </Link>
    </div>
  );
}
