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
    const artists = {
      charlies_bakery: {
        id: 'charlies_bakery',
        title:"Charlie's Bakery",
        category:'Food',
        time:'Every day 10AM to 5PM',
        location:'Telus 110',
        description: "A bakery offering a variety of delicious pastries, cakes, and snacks. Perfect for a quick bite or a sweet treat!"
      },
      jacks_candles: {
        id: 'jacks_candles',
        title:"Jack's Candles",
        category:'Crafts',
        time:'Every day 10AM to 5PM',
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
                {wishlistModal && <WishlistModal openWishlistModal={openWishlistModal} params={artist}/>}
                <button onClick={openScheduleModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Schedule</button>
                {scheduleModal && <ScheduleModal openScheduleModal={openScheduleModal} params={artist}/>}
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