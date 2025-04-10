import Navbar from "../../components/navbar.js";
import Link from "next/link.js";
import Map from "../../../public/individual_map.png";
import Image from "next/image";
import { useState } from "react";
import WishlistModal from "../../components/wishlistmodal.js";
import ScheduleModal from "../../components/schedulemodal.js";

export async function getStaticPaths() {
    const paths = [
      { params: { id: 'conbini' } },
      { params: { id: 'manga_tent' } }
    ];

    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Hardcoded data
    const vendors = {
      conbini: {
        id: 'conbini',
        title:'Conbini',
        category:'Food',
        time:'10AM to 6PM',
        location:'Telus 110',
        description: "A convenience store offering a variety of snacks, drinks, and merchandise. Perfect for a quick bite or last-minute shopping."
      },
      manga_tent: {
        id: 'manga_tent',
        title:'Manga Tent',
        category:'Books',
        time:'10AM to 5PM',
        location:'Telus 201',
        description: "A tent filled with a wide selection of manga and anime merchandise. Find your favorite series and collectibles here!"
      }
    };
  
    const vendor = vendors[params.id];
  
    return {
      props: {
        vendor
      },
    };
  }

  
  export default function Vendor({ vendor }) {
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
            <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">{vendor.title}</h1>
            <div className="w-[90%] mt-5 font-bold h-[200px]">
                <p>Category: {vendor.category}</p>
                <p>Time: {vendor.time}</p>
                <p>Location: {vendor.location}</p>
                <p>Description: <br/>{vendor.description}</p>
            </div>
            <div className="flex justify-between w-[90%] gap-4 mt-3 text-white">
                <button onClick={openWishlistModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Wishlist</button>
                {wishlistModal && <WishlistModal openWishlistModal={openWishlistModal} params={vendor}/>}
                <button onClick={openScheduleModal} className="py-1 bg-[#7E52A0] rounded max-w-[30%]">Add to Schedule</button>
                {scheduleModal && <ScheduleModal openScheduleModal={openScheduleModal} params={vendor}/>}
            </div>
            <div className="w-[90%] mt-3 gap-3 mb-7">
                <div className="w-full aspect-square bg-white rounded relative">
                    <Link href={`/find_route?destination=${encodeURIComponent(vendor.location)}`}>
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