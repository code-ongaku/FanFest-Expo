import { useRouter } from "next/router";
import Titlebar from "../components/titlebar.js";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserContext } from "./_app";

export default function SignUp() {
  const router = useRouter();
  const { currentUser, setCurrentUser, signUp, setSignUp } = useContext(UserContext);

  // Local states for the form inputs
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // In a real app, you'd also validate the fields, check passwords, etc.
    // For now, we set "signedUp" and update signUp context with the user’s data
    setSignUp({
      username: username || "dandan23",
      name: `${firstName || "Daniel"} ${lastName || "Smith"}`,
    });

    setCurrentUser("signedUp");
    router.push("/home_signup");
  };

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen w-screen font-roboto-slab flex flex-col items-center">
      <Titlebar />
      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="text-[#7E52A0] font-roboto-slab text-4xl font-bold">Welcome to FanFest Expo!</h1>
        <p className="text-[#7E52A0] font-roboto-slab text-2xl mt-4">April 25-27</p>
      </div>

      {/* Enter Credentials Box */}
      <div className="w-[331px] h-[650px] bg-[#DECDF5] rounded-2xl p-5 flex flex-col items-center mt-8">
        <h2 className="text-[#7E52A0] font-bold text-2xl mb-4">Enter Credentials</h2>

        {/* Username Input */}
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

        {/* First Name Input */}
        <div className="w-full mt-4">
          <label className="block text-[#7E52A0] text-lg mb-1">First Name</label>
          <input
            type="text"
            className="w-full border border-[#7E52A0] rounded-5 px-4 py-2 opacity-50 text-black"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* Last Name Input */}
        <div className="w-full mt-4">
          <label className="block text-[#7E52A0] text-lg mb-1">Last Name</label>
          <input
            type="text"
            className="w-full border border-[#7E52A0] rounded-5 px-4 py-2 opacity-50 text-black"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Password Input */}
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

        {/* Confirm Password Input */}
        <div className="w-full mt-4">
          <label className="block text-[#7E52A0] text-lg mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border border-[#7E52A0] rounded-5 px-4 py-2 opacity-50 text-black"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col w-full items-center space-y-4">
          <button
            className="bg-[#7E52A0] rounded-2xl p-3 w-full text-white text-xl font-semibold"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <Link href="/login_page" className="text-[#7E52A0] text-xl underline">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
