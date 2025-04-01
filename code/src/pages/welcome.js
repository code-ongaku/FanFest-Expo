import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-[#F8F1FF] min-h-screen font-['Roboto_Slab'] text-[#7E52A0]">
      
      {/* Background Banner */}
      <div className="relative">
        <img src="/fanfest-bg.png" alt="FanFest Banner" className="w-full h-60 object-cover" />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl font-bold leading-tight">Welcome to<br />FanFest<br />Expo</h1>
          <p className="mt-2 text-lg font-semibold">April 25–27</p>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <button className="bg-[#7E52A0] text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-md underline">
          Login
        </button>
        <span className="font-bold text-lg">or</span>
        <button className="bg-[#7E52A0] text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-md underline">
          Sign Up
        </button>
      </div>

      {/* Guest Link */}
      <div className="text-center mt-4 font-bold underline">
        Continue as Guest
      </div>

      {/* Location Section */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <span className="text-xl font-bold">Location</span>
        {/* Arrow Icon */}
        <svg className="w-6 h-6 fill-[#7E52A0]" viewBox="0 0 17 17">
          <path d="M9 4l5 4.5-5 4.5v-3H3v-3h6V4z" />
        </svg>
        {/* Location Icon */}
        <div className="bg-[#7E52A0] w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
          <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
        </div>
      </div>

      {/* More Info */}
      <div className="text-center mt-10 text-lg font-bold underline px-4">
        For more information<br />visit our website <a href="#" className="underline">here</a>
      </div>
    </div>
  );
};

export default Welcome;


