import React from 'react';
import { useRouter } from 'next/router';

const Welcome = () => {
  const router = useRouter();

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
        <button
          onClick={() => router.push('/login_page')}
          className="bg-[#7E52A0] text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-md underline"
        >
          Login
        </button>
        <span className="font-bold text-lg">or</span>
        <button
          onClick={() => router.push('/signup_page')}
          className="bg-[#7E52A0] text-white font-bold text-lg px-6 py-3 rounded-2xl shadow-md underline"
        >
          Sign Up
        </button>
      </div>

      {/* Guest Link */}
      <div
        onClick={() => {
          localStorage.setItem("userType", "guest"); // ✅ Mark as guest
          router.push('/guest_home');
        }}
        className="text-center mt-4 font-bold underline cursor-pointer"
      >
        Continue as Guest
      </div>

      {/* Venue Preview Section */}
      <div className="text-center mt-10 text-[#7E52A0] font-bold">
        <p className="text-lg">📍 TELUS Convention Centre</p>
        <p className="text-sm text-[#4A4AF4]">
          136 8 Ave SE, Calgary, AB T2P 0K6
        </p>
        <div
          className="flex justify-center items-center gap-2 mt-1 cursor-pointer underline"
          onClick={() => router.push('/event_location')}
        >
          <span>View venue on the map</span>
          <div className="bg-[#D14D4D] w-6 h-6 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* More Info */}
      <div className="text-center mt-10 text-lg font-bold underline px-4">
        For more information<br />
        <a
          href="https://fannation.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          visit the FanNation website
        </a>
      </div>
    </div>
  );
};

export default Welcome;
