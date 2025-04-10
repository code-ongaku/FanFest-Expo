import Navbar from "../../components/navbar.js";
import Link from "next/link.js";
import Map from "../../../public/individual_map.png";
import Image from "next/image";
import { useState } from "react";
import WishlistModal from "../../components/wishlistmodal.js";
import ScheduleModal from "../../components/schedulemodal.js";

export async function getStaticPaths() {
    const paths = [
      { params: { id: 'cosplay_chess' } },
      { params: { id: 'intro_to_cons' } }
    ];
  
    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Hardcoded data
    const panels = {
        cosplay_chess: {
            id: 'cosplay_chess',
            title:'Cosplay Chess',
            category:'Interactive',
            time:'11AM to 12PM',
            location:'Telus 201',
            description: "Join us for a fun game of chess with cosplayers! Watch as your favorite characters come to life on the chessboard."
        },
        intro_to_cons: {
            id: 'intro_to_cons',
            title:'Intro to Cons',
            category:'Informative',
            time:'11:30AM to 1PM',
            location:'Lower East Hall',
            description: "Learn the basics of attending conventions! Tips on what to bring, how to navigate, and making the most of your experience."
        }
    };
  
    const panel = panels[params.id];
  
    return {
      props: {
        panel
      },
    };
  }

  export default function Panel({ panel }) {
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
            <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">{panel.title}</h1>
            <div className="w-[90%] mt-5 font-bold h-[200px]">
                <p>Category: {panel.category}</p>
                <p>Time: {panel.time}</p>
                <p>Location: {panel.location}</p>
                <p>Description: <br/>{panel.description}</p>
            </div>
            <div className="flex justify-between w-[90%] gap-4 mt-3 text-white">
                <button onClick={openWishlistModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Wishlist</button>
                {wishlistModal && <WishlistModal openWishlistModal={openWishlistModal} params={panel}/>}
                <button onClick={openScheduleModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Schedule</button>
                {scheduleModal && <ScheduleModal openScheduleModal={openScheduleModal} params={panel}/>}
            </div>
            <div className="w-[90%] mt-3 gap-3 mb-7">
                <div className="w-full aspect-square bg-white rounded relative">
                    <Link href={`/find_route?destination=${encodeURIComponent(panel.location)}`}>
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