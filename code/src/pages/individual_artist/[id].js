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
      { params: { id: 'opening_ceremony' } }
    ];
  
    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Hardcoded data
    const artists = {
      charlies_bakery: {
        id: 'charlies_bakery',
        title:"Charlie's Bakery",
        category:'Food',
        time:'Every day 9AM to 6PM',
        location:'Telus 110',
        description: "A bakery offering a variety of delicious pastries, cakes, and snacks. Perfect for a quick bite or a sweet treat!"
      },
      jacks_candles: {
        id: 'jacks_candles',
        title:"Jack's Candles",
        category:'Crafts',
        time:'Every day 9AM to 6PM',
        location:'Telus 201',
        description: "A stall selling handmade candles in various scents and designs. Perfect for gifts or personal use!"
      }
    };
  
    const artist = artists[params.id];
  
    return {
      props: {
        artist
      },
    };
  }

  export default function Artist({ artist }) {
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
            <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">{artist.title}</h1>
            <div className="w-[90%] mt-5 font-bold h-[200px]">
                <p>Category: {artist.category}</p>
                <p>Time: {artist.time}</p>
                <p>Location: {artist.location}</p>
                <p>Description:<br/>{artist.description}</p>
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
                        onClick={() => setAddedSchedule(false)}
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
                <button onClick={openScheduleModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Schedule</button>
                {scheduleModal && <ScheduleModal openScheduleModal={openScheduleModal} isAddedSchedule={handleAddToSchedule} params={artist}/>}
                {isAddedSchedule && (
                    <div className="fixed top-15 left-1/2 transform -translate-x-1/2 z-50 bg-stone-100 text-stone-900 border border-stone-900 rounded flex justify-between items-center px-2 whitespace-nowrap">
                    <Link href="/schedule" >Added! Click to go to Schedule.</Link>
                    <div className="h-6 w-6 bg-purple-100 flex items-center justify-center">
                      <Image 
                        src={Cancel} 
                        alt="close" 
                        className="h-6 w-6 rounded"
                        onClick={() => setAdded(false)}
                      />
                    </div>
                  </div>
                )}
            </div>
            <div className="w-[90%] mt-3 gap-3 mb-7">
                <div className="w-full aspect-square bg-white rounded relative">
                    <Link href={`/find_route?destination=${encodeURIComponent(artist.location)}`}>
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