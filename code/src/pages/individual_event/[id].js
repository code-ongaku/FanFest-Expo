import Navbar from "../../components/navbar.js";
import Link from "next/link.js";
import Map from "../../../public/individual_map.png";
import Image from "next/image";
import { useState } from "react";
import WishlistModal from "../../components/wishlistmodal.js";
import ScheduleModal from "../../components/schedulemodal.js";

export async function getStaticPaths() {
    const paths = [
      { params: { id: 'arcade' } },
      { params: { id: 'opening_ceremony' } }
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
        time:'Every day 10AM to 5PM',
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
        time:'Saturday 11:30AM to 1PM',
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
                {wishlistModal && <WishlistModal openWishlistModal={openWishlistModal} params={event}/>}
                <button onClick={openScheduleModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Schedule</button>
                {scheduleModal && <ScheduleModal openScheduleModal={openScheduleModal} params={event}/>}
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