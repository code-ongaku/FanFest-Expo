import Navbar from "../../components/navbar.js";
import Link from "next/link.js";
import Map from "../../../public/individual_map.png";
import Image from "next/image";
import { useState } from "react";
import WishlistModal from "../../components/wishlistmodal.js";
import ScheduleModal from "../../components/schedulemodal.js";
import Cancel from "../../../public/cancel.svg";

export async function getStaticPaths() {
    const paths = [
      { params: { id: 'arcade' } },
      { params: { id: 'opening_ceremony' } },
      { params: { id: 'idol_fest' } }
    ];
  
    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Hardcoded data
    const events = {
      arcade: {
        id: 'arcade',
        title:'Arcade',
        category:'Gaming',
        time:'Every day 10AM to 4PM',
        location:'Lower East Hall',
        description: "Join us for a day of gaming fun! Play classic arcade games and compete with friends for high scores. Prizes for top players!"
      },
      opening_ceremony: {
        id: 'opening_ceremony',
        title:'Opening Ceremony',
        category:'Official Events',
        time:'Friday 10AM to 12PM',
        location:'Main Stage',
        description: "Kick off the convention with our opening ceremony! Meet the guests, learn about the schedule, and get ready for an amazing weekend."
      },
      idol_fest: {
        id: 'idol_fest',
        title:'Idol Fest',
        category:'Concerts',
        time:'Friday 11:30AM to 1PM',
        location:'Main Stage',
        description: "Enjoy a showcase of idol performances from various groups! Cheer for your favorites and enjoy the music!"
      },
    };
  
    const event = events[params.id];
  
    return {
      props: {
        event
      },
    };
  }

  export default function Event({ event }) {
    const [wishlistModal, setWishlistModal] = useState(false);
    const openWishlistModal = () => {
        setWishlistModal(() => !wishlistModal);
    }
    const [scheduleModal, setScheduleModal] = useState(false);
    const openScheduleModal = () => {
        setScheduleModal(() => !scheduleModal);
    }
    const [isAddedWishlist, setAddedWishlist] = useState(false);
    const handleAddToWishlist = () => {
        setAddedWishlist(true);
        setTimeout(() => {
            setAddedWishlist(false);
        }, 10000);
    }
    const [isAddedSchedule, setAddedSchedule] = useState(false);
    const handleAddToSchedule = () => {
        setAddedSchedule(true);
        setTimeout(() => {
            setAddedSchedule(false);
        }, 10000);
    }
    return (
        <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
            <Navbar/>
            <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">{event.title}</h1>
            <div className="w-[90%] mt-5 font-bold h-[200px]">
                <p>Category: {event.category}</p>
                <p>Time: {event.time}</p>
                <p>Location: {event.location}</p>
                <p>Description:<br/>{event.description}</p>
            </div>
            <div className="flex justify-between w-[90%] gap-4 mt-3 text-white">
                <button onClick={openWishlistModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Wishlist</button>
                {wishlistModal && <WishlistModal openWishlistModal={openWishlistModal} isAddedWishlist={handleAddToWishlist} params={event}/>}
                {isAddedWishlist && (
                    <div className="fixed top-15 left-1/2 transform -translate-x-1/2 z-50 bg-stone-100 text-stone-900 border border-stone-900 rounded flex justify-between items-center px-2 whitespace-nowrap">
                    <Link href="/wishlist" >Added! Click to go to Wishlist.</Link>
                    <div className="h-6 w-6 bg-purple-100 flex items-center justify-center">
                      <Image 
                        src={Cancel} 
                        alt="close" 
                        className="h-6 w-6 rounded"
                        onClick={() => setAddedWishlist(false)}
                      />
                    </div>
                  </div>
                )}
                <button onClick={openScheduleModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Schedule</button>
                {scheduleModal && <ScheduleModal openScheduleModal={openScheduleModal} isAddedSchedule={handleAddToSchedule} params={event}/>}
                {isAddedSchedule && (
                    <div className="fixed top-15 left-1/2 transform -translate-x-1/2 z-50 bg-stone-100 text-stone-900 border border-stone-900 rounded flex justify-between items-center px-2 whitespace-nowrap">
                    <Link href="/schedule" >Added! Click to go to Schedule.</Link>
                    <div className="h-6 w-6 bg-purple-100 flex items-center justify-center">
                      <Image 
                        src={Cancel} 
                        alt="close" 
                        className="h-6 w-6 rounded"
                        onClick={() => setAddedSchedule(false)}
                      />
                    </div>
                  </div>
                )}
            </div>
            <div className="w-[90%] mt-3 gap-3 mb-7">
                <div className="w-full aspect-square bg-white rounded relative">
                    <Link href={`/find_route?destination=${encodeURIComponent(event.location)}`}>
                        <button className="absolute bottom-2 right-2 py-1 bg-[#7E52A0] rounded text-white px-3">
                            Directions
                        </button>
                    </Link>
                    <Image src={Map} alt="map" className="w-full aspect-square"/>
                </div>
            </div>
        </div>
    );
}