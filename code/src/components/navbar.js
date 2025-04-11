// components/navbar.js
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { UserContext } from "../pages/_app"; // adjust import path as needed
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
  const router = useRouter();
  const { currentUser, setCurrentUser } = useContext(UserContext); 
  const [menuOpen, setMenuOpen] = useState(false);

  // Decide where the home icon should take the user
  // based on the currentUser value
  const homeLink =
    currentUser === "loggedIn"
      ? "/home_login"
      : currentUser === "signedUp"
      ? "/home_signup"
      : "/guest_home";

  const menuItems = [
    { icon: ConventionLayout, label: "Convention Layout", href: "/convention_layout" },
    { icon: FindAmenities, label: "Find Amenities", href: "/find_amenities" },
    { icon: FindEvents, label: "Find Events", href: "/find_events" },
    { icon: FindPanels, label: "Find Panels", href: "/find_panels" },
    { icon: FindVendors, label: "Find Vendors", href: "/find_vendors" },
    { icon: MySchedule, label: "My Schedule", href: "/schedule" },
    { icon: WishList, label: "Wishlist", href: "/wishlist" },
    { icon: FindRoute, label: "Find Route", href: "/find_route" },
  ];

  // Handle log out logic
  // We'll set currentUser back to "guest" when user logs out
  const handleLogout = () => {
    setCurrentUser("guest");
    setMenuOpen(false);
    router.push("/welcome");
  };

  const handleLogin = () => {
    setMenuOpen(false);
    router.push("/login_page");
  };

  return (
    <div className="w-full relative">
      {/* Navbar container */}
      <div className="w-full bg-[#DECDF5] p-4 flex items-center font-semibold shadow">
        {/* Left column: Home icon (link depends on currentUser) */}
        <div className="flex-1 flex items-center">
          <Link href={homeLink}>
            <div className="relative w-8 h-8 ml-2 rounded-full bg-[#f8edff] cursor-pointer">
              <Image
                src={HomeIcon}
                alt="home"
                layout="fill"
                objectFit="contain"
                objectPosition="left center"
                className="p-2"
              />
            </div>
          </Link>
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
        <div className="absolute top-full right-4 mt-2 bg-[#DECDF5] rounded-lg shadow-lg p-4 z-50">
          {/* 2-column grid for main items */}
          <div className="grid grid-cols-2 gap-6">
            {menuItems.map((item, idx) => (
              <Link key={idx} href={item.href} onClick={() => setMenuOpen(false)}>
                <div className="flex flex-col items-center text-center text-[#7E52A0] hover:bg-[#d6c4f0] font-semibold w-28 cursor-pointer">
                  <Image src={item.icon} alt={item.label} className="w-12 h-12 mb-1" />
                  <p className="underline">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Show Log out only if user is NOT "guest" */}
          {currentUser !== "guest" && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleLogout}
                className="flex flex-col items-center text-center text-[#7E52A0] hover:bg-[#d6c4f0] font-semibold w-28 cursor-pointer bg-transparent border-none"
              >
                <p className="underline">Log out</p>
              </button>
            </div>
          )}

          {currentUser == "guest" && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleLogin}
                className="flex flex-col items-center text-center text-[#7E52A0] hover:bg-[#d6c4f0] font-semibold w-28 cursor-pointer bg-transparent border-none"
              >
                <p className="underline">Log In</p>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
