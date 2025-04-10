import Navbar from "../components/navbar";

export default function ConventionLayout() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab flex flex-col overflow-y-auto">
      <Navbar />

      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">
        View Venue Layout
        </h1>
      <div className="w-full max-w-[340px] mx-auto border-b border-[#7E52A0] my-4"></div>
    </div>

      {/* Address */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#8B0000]">
          TELUS Convention Centre
        </h2>
        <p className="text-xl font-bold text-[#1E3A8A] mt-1">
          136 8 Ave SE,<br />
          Calgary, AB T2P 0K6
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col items-center gap-6 px-4 pb-10">
        <img
          src="/image 3.png"
          alt="Lower Floor Layout"
          className="w-full max-w-md rounded shadow"
        />
        <img
          src="/image 2.png"
          alt="Main Floor Layout"
          className="w-full max-w-md rounded shadow"
        />
        <img
          src="/image 4.png"
          alt="Exhibitor Layout"
          className="w-full max-w-md rounded shadow"
        />
      </div>
    </div>
  );
}
