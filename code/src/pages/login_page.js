import Titlebar from "../components/titlebar.js";

export default function Login({}) {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
        <Titlebar/>
        {/* Title Section */}
        <div className="text-center mt-8">
            <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Welcome to FanFest Expo!</h1>
            <p className="text-[#7E52A0] font-roboto-slab text-2xl mt-4">April 25-27</p>
        </div>

        {/* Enter Credentials Box */}
        <div className="w-[331px] h-[366px] bg-[#DECDF5] rounded-2xl p-5 flex flex-col items-center mt-8">
            <h2 className="text-[#7E52A0] font-bold text-2xl mb-4">Enter Credentials</h2>
            <div className="w-full mt-5">
                <label className="block text-[#7E52A0] text-lg mb-1">Username</label>
                <input type="text" className="w-full border border-[#7E52A0] rounded-5 px-4 py-2 opacity-50 text-black" placeholder="Username"/>
            </div>
            <div className="w-full mt-4">
                <label className="block text-[#7E52A0] text-lg mb-1">Password</label>
                <input type="password" className="w-full border border-[#7E52A0] rounded-5 px-4 py-2 opacity-50 text-black" placeholder="Password"/>
            </div>
            
            {/* Buttons Section */}
            <div className="mt-6 flex w-full justify-between">
                <button className="bg-[#DECDF5] rounded-2xl p-3 w-[48%] text-[#7E52A0] text-xl">Login</button>
                <button className="text-[#7E52A0] text-xl w-[48%]">Sign up</button>
            </div>
        </div>
    </div>
  );
}