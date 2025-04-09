import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Hamburger from "../../public/hamburger.svg";
import HomeIcon from "../../public/home-icon.svg";

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
    { icon: ConventionLayout, label: "Convention Layout", href: "/convention_layout" },
    { icon: FindAmenities, label: "Find Amenities", href: "/find_amenities" },
    { icon: FindEvents, label: "Find Events", href: "/find_events" },
    { icon: FindPanels, label: "Find Panels", href: "/find_panels" },
    { icon: FindVendors, label: "Find Vendor", href: "/find_vendors" },
    { icon: MySchedule, label: "My Schedule", href: "/schedule" },
    { icon: WishList, label: "Wishlist", href: "/wishlist" },
    { icon: FindRoute, label: "Find Route", href: "/find_route" },
  ];

  return (
    <div className="w-full relative">
      {/* Navbar container */}
      <div className="w-full bg-[#DECDF5] p-4 flex items-center font-semibold shadow">
        {/* Left column: Home icon */}
        <div className="flex-1 flex items-center">
          <div className="relative w-8 h-8 ml-2 rounded-full bg-[#f8edff]">
            <Image
              src={HomeIcon}
              alt="home"
              layout="fill"
              objectFit="contain"
              objectPosition="left center"
              className="p-2"
            />
          </div>
        </div>

        {/* Middle column: Title, centered */}
        <div className="flex-1 flex justify-center">
          <h1 className="whitespace-nowrap text-xl md:text-3xl font-bold">
            FanFest Expo
          </h1>
        </div>

        {/* Right column: Hamburger */}
        <div className="flex-1 flex justify-end">
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8 mr-2">
            <Image src={Hamburger} alt="menu" className="h-8 w-8 hover:bg-[#d6c4f0]" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-[#DECDF5] rounded-lg shadow-lg p-4 grid grid-cols-2 gap-6 z-50">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.href} onClick={() => setMenuOpen(false)}>
              <div className="flex flex-col items-center text-center text-[#7E52A0] hover:bg-[#d6c4f0] font-semibold w-28 cursor-pointer">
                <Image src={item.icon} alt={item.label} className="w-12 h-12 mb-1" />
                <p className="underline">{item.label}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
