import { useRouter } from 'next/router';
import Titlebar from "../components/titlebar.js";
import Link from 'next/link';
import { useContext, useState } from "react";
import { UserContext } from "./_app";

export default function Login({}) {
  const router = useRouter();
  const { setCurrentUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (username.trim() === 'amyT223') {
      setCurrentUser("loggedIn");
      router.push('/home_login');
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Hide after 3 seconds
    }
  };

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center relative">
      <Titlebar />
      
      {/* Error Popup */}
      {showError && (
        <div className="absolute top-50 bg-red-200 border border-red-400 text-red-800 px-6 py-6 rounded-xl shadow-md z-50">
          User does not exist
        </div>
      )}

      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Welcome to FanFest Expo!</h1>
        <p className="text-[#7E52A0] font-roboto-slab text-2xl mt-4">April 25-27</p>
      </div>

      <div className="w-[331px] h-[380px] bg-[#DECDF5] rounded-2xl p-5 flex flex-col items-center mt-8">
        <h2 className="text-[#7E52A0] font-bold text-2xl mb-4">Enter Credentials</h2>
        <div className="w-full mt-4">
          <label className="block text-[#7E52A0] text-lg mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-[#7E52A0] rounded-5 px-4 py-2 opacity-50 text-black"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full mt-4">
          <label className="block text-[#7E52A0] text-lg mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-[#7E52A0] rounded-5 px-4 py-2 opacity-50 text-black"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-col w-40 items-center space-y-4">
          <button
            className="bg-[#7E52A0] rounded-2xl p-3 w-full text-white text-xl font-semibold"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link href="/signup_page" className="text-[#7E52A0] text-xl underline">
            Go to Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
