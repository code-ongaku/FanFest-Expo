import { useRouter } from 'next/router';
import { useContext } from 'react';
import Navbar from "../components/guesthomebar.js";

export default function GuestHome() {
  const router = useRouter();

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab flex flex-col items-center">

      {/* Top Navbar without dropdown */}
      <Navbar showMenu={false} />

      {/* Homepage Title */}
      <h2 className="text-4xl font-bold text-center mb-8">
        <span className="inline-block border-b-2 border-[#7E52A0] pb-1">Homepage</span>
      </h2>
      
      {/* Icon Grid */}
      <div className="grid grid-cols-2 gap-y-10 gap-x-4 justify-items-center text-center text-lg font-semibold">
        <div onClick={() => router.push('/convention_layout')} className="cursor-pointer">
          <img src="/ConventionLayout.svg" alt="Convention Layout" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Convention</u><br /><u>Layout</u></p>
        </div>

        <div onClick={() => router.push('/find_amenities')} className="cursor-pointer">
          <img src="/FindAmenities.svg" alt="Amenities" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Amenities</u></p>
        </div>

        <div onClick={() => router.push('/find_events')} className="cursor-pointer">
          <img src="/FindEvents.svg" alt="Events" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Events</u></p>
        </div>

        <div onClick={() => router.push('/find_panels')} className="cursor-pointer">
          <img src="/FindPanels.svg" alt="Panels" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Panels</u></p>
        </div>

        <div onClick={() => router.push('/find_vendors')} className="cursor-pointer">
          <img src="/FindVendors.svg" alt="Vendors" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Vendor</u></p>
        </div>

        <div onClick={() => router.push('/schedule_guest')} className="cursor-pointer">
          <img src="/MySchedule.svg" alt="Schedule" className="w-20 h-20 mx-auto mb-2" />
          <p><u>My Schedule</u></p>
        </div>

        <div onClick={() => router.push('/wishlist_guest')} className="cursor-pointer">
          <img src="/WishList.svg" alt="Wishlist" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Wishlist</u></p>
        </div>

        <div onClick={() => router.push('/find_artists')} className="cursor-pointer">
          <img src="/FindArtists.png" alt="Find Artist" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Artist</u></p>
        </div>

        <div onClick={() => router.push('/find_route')} className="cursor-pointer">
          <img src="/FindRoute.svg" alt="Find Route" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Route</u></p>
        </div>
        
      </div>

    </div>
  );
}