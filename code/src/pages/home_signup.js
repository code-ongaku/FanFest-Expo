import { useState, useContext } from "react";
import { UserContext } from "./_app";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";

export default function HomeSignup() {
  const { currentUser, signUp, setSignUp } = useContext(UserContext);
  const [activeDay, setActiveDay] = useState("Friday");
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(signUp.name);
  const router = useRouter();

  const days = ["Friday", "Saturday", "Sunday"];

  // Renders a schedule table for the selected day
  const renderTable = (day) => (
    <div className="w-[90%] overflow-x-auto mt-2">
      <table className="table-fixed w-full text-sm border border-black text-center bg-[#FBEFFF]">
        <thead>
          <tr>
            <th className="border border-black bg-white py-2" colSpan="3">
              {day} ({day === "Friday" ? "April 25th" : day === "Saturday" ? "April 26th" : "April 27th"})
            </th>
          </tr>
        </thead>
        <tbody>
          {["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"].map(
            (time) => (
              <tr key={time}>
                <td className="border border-black py-2 w-1/6">{time}</td>
                <td className="border border-black py-2" colSpan="2"></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );

  const handleSave = () => {
    if (tempName.trim() === "") {
      alert("Name cannot be empty.");
      return;
    }
    // Update the signUp object’s name
    setSignUp((prev) => ({
      ...prev,
      name: tempName,
    }));
    setIsEditing(false);
  };

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* User Info */}
      <div className="text-center mt-4 mb-4">
        <p className="text-md">@{signUp.username}</p>

        <div className="flex items-center justify-center space-x-2 mt-2">
          <span className="text-lg font-semibold">Name:</span>

          {isEditing ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="bg-white border border-[#BF4D9D] px-2 py-1 rounded text-[#BF4D9D] text-lg font-semibold"
            />
          ) : (
            <span className="text-[#BF4D9D] text-lg font-semibold">{signUp.name}</span>
          )}

          <button
            className="bg-[#D6D7FB] hover:bg-[#c5c7f0] text-[#7E52A0] font-semibold px-4 py-1 rounded"
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                // Start editing with the current Context name
                setTempName(signUp.name);
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? "SAVE" : "Edit Name"}
          </button>
        </div>
      </div>

      {/* Schedule Tabs */}
      <div className="flex space-x-4 mb-4">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-1 rounded-full font-medium ${
              activeDay === day ? "bg-[#E3D4FF] hover:bg-[#d6c4f0]" : "bg-[#F0E9FF] hover:bg-[#e4dbf0]"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Table */}
      {renderTable(activeDay)}

      {/* "Edit Schedule" Button */}
      <button
        className="bg-[#D6D7FB] hover:bg-[#c5c7f0] text-[#7E52A0] font-semibold px-4 py-1 rounded mt-4"
        onClick={() => router.push("/schedule")}
      >
        Edit Schedule
      </button>
    </div>
  );
}
