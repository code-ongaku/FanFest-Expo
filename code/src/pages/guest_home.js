import { useRouter } from 'next/router';

export default function GuestHome() {
  const router = useRouter();

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab flex flex-col items-center">

      {/* Top Header Bar styled like navbar */}
      <div className="w-full bg-[#DECDF5] p-4 flex justify-center items-center font-semibold shadow mb-4">
        <h1 className="text-3xl font-bold">FanFest Expo</h1>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center mb-2">Homepage</h2>
      <hr className="border-[#7E52A0] mb-8 w-[80%]" />

      {/* Icon Grid */}
      <div className="grid grid-cols-2 gap-y-10 gap-x-4 justify-items-center text-center text-lg font-semibold">
        
        {/* Convention Layout */}
        <div
          onClick={() => router.push('/convention_layout')}
          className="cursor-pointer"
        >
          <img src="/ConventionLayout.svg" alt="Convention Layout" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Convention</u><br /><u>Layout</u></p>
        </div>

        {/* Amenities */}
        <div
          onClick={() => router.push('/find_amenities')}
          className="cursor-pointer"
        >
          <img src="/FindAmenities.svg" alt="Amenities" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Amenities</u></p>
        </div>

        {/* Events */}
        <div
          onClick={() => router.push('/find_events')}
          className="cursor-pointer"
        >
          <img src="/FindEvents.svg" alt="Events" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Events</u></p>
        </div>

        {/* Panels */}
        <div
          onClick={() => router.push('/find_panels')}
          className="cursor-pointer"
        >
          <img src="/FindPanels.svg" alt="Panels" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Panels</u></p>
        </div>

        {/* Vendors */}
        <div
          onClick={() => router.push('/find_vendors')}
          className="cursor-pointer"
        >
          <img src="/FindVendors.svg" alt="Vendors" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Vendor</u></p>
        </div>

        {/* Schedule */}
        <div
          onClick={() => router.push('/schedule')}
          className="cursor-pointer"
        >
          <img src="/MySchedule.svg" alt="Schedule" className="w-20 h-20 mx-auto mb-2" />
          <p><u>My Schedule</u></p>
        </div>

        {/* Wishlist */}
        <div
          onClick={() => router.push('/wishlist')}
          className="cursor-pointer"
        >
          <img src="/WishList.svg" alt="Wishlist" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Wishlist</u></p>
        </div>

        {/* Route */}
        <div
          onClick={() => router.push('/find_route')}
          className="cursor-pointer"
        >
          <img src="/FindRoute.svg" alt="Find Route" className="w-20 h-20 mx-auto mb-2" />
          <p><u>Find Route</u></p>
        </div>
      </div>
    </div>
  );
}
