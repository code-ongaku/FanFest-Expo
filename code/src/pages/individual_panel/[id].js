import Navbar from "../../components/navbar.js";

export async function getStaticPaths() {
    const paths = [
      { params: { id: '1' } }
    ];
  
    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Hardcoded data
    const vendors = {
      1: { id:1, title:'Cosplay Chess', category:'Interactive', time:'11AM to 12PM', location:'TELUS 201' }
    };
  
    const vendor = vendors[params.id];
  
    return {
      props: {
        vendor
      },
    };
  }

export default function Vendor({ vendor }) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] h-screen w-screen font-roboto-slab flex flex-col items-center">
        <Navbar/>
        <h1 className="mt-7 font-bold text-4xl border-b-2 w-[90%] text-center pb-5">{vendor.title}</h1>
        <div className="w-[80%] mt-5 font-bold">
            <p>Category: {vendor.category}</p>
            <p>Time: {vendor.time}</p>
            <p>Location: {vendor.location}</p>
        </div>
        <div className="flex flex-col items-end w-[90%] gap-2 mt-3">
            <button className="py-1 bg-[#DECDF5] rounded w-[45%]">Add to wishlist</button>
            <button className="py-1 bg-[#DECDF5] rounded w-[45%]">Add to Schedule</button>
        </div>
        <div className="w-[90%] mt-9 flex flex-col items-end">
            <button className="py-1 bg-[#DECDF5] rounded w-[45%]">Expand Map</button>
            <div className="w-full aspect-square bg-white">Pretend theres a map here</div>
        </div>
    </div>
  );
}