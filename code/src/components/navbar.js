import { useState } from "react";
import Image from "next/image";

import Hamburger from "../../public/hamburger.svg";
import HomeIcon from "../../public/home-icon.svg";
import Ellipse from "../../public/circle.svg";

import ConventionLayout from "../../public/ConventionLayout.svg";
import FindAmenities from "../../public/FindAmenities.svg";
import FindEvents from "../../public/FindEvents.svg";
import FindPanels from "../../public/FindPanels.svg";
import FindVendors from "../../public/FindVendors.svg";
import MySchedule from "../../public/MySchedule.svg";
import WishList from "../../public/WishList.svg";
import FindRoute from "../../public/FindRoute.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { icon: ConventionLayout, label: "Convention Layout" },
    { icon: FindAmenities, label: "Find Amenities" },
    { icon: FindEvents, label: "Find Events" },
    { icon: FindPanels, label: "Find Panels" },
    { icon: FindVendors, label: "Find Vendor" },
    { icon: MySchedule, label: "My Schedule" },
    { icon: WishList, label: "Wishlist" },
    { icon: FindRoute, label: "Find Route" },
  ];

  return (
    <div className="relative">
      {/* Navbar container */}
      <div className="w-full bg-[#DECDF5] p-4 flex justify-between items-center font-semibold shadow">
        <div className="w-8 h-8" />

        {/* Center logo */}
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

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8">
          <Image src={Hamburger} alt="menu" className="h-8 w-8" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-[#DECDF5] rounded-lg shadow-lg p-4 grid grid-cols-2 gap-6 z-50">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center text-[#7E52A0] font-semibold w-28">
              <Image src={item.icon} alt={item.label} className="w-12 h-12 mb-1" />
              <p className="underline">{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
