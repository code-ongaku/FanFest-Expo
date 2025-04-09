import { useState } from "react";
import Navbar from "../components/navbar";

export default function LoggedInHome() {
  const [activeDay, setActiveDay] = useState("Friday");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Amy Taylor");

  const renderTable = (day) => {
    const times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"];

    const getEventForSlot = (time) => {
      if (day === "Friday") {
        if (time === "10am")
          return (
            <td className="border border-black bg-red-300 py-2" colSpan="2">
              10 am - 12 pm &nbsp;&nbsp; Opening Ceremony
            </td>
          );
        if (time === "11am")
          return (
            <td className="border border-black bg-green-300 py-2" colSpan="2">
              11 am - 12 pm &nbsp;&nbsp; Contest A: Cosplay
            </td>
          );
        if (time === "1pm")
          return (
            <td className="border border-black bg-purple-300 py-2" colSpan="2">
              1 pm - 2 pm &nbsp;&nbsp; Panel 1B: Make your own Cosplay
            </td>
          );
        return <td className="border border-black py-2" colSpan="2"></td>;
      }

      if (day === "Saturday") {
        if (time === "12pm")
          return (
            <td
              className="border border-black bg-[#a0f4ff] text-[#7E52A0] py-2"
              colSpan="2"
            >
              12 pm - 3 pm &nbsp;&nbsp; Concert: Pop Rock
            </td>
          );
        return <td className="border border-black py-2" colSpan="2"></td>;
      }

      if (day === "Sunday") {
        if (time === "11am")
          return (
            <td
              className="border border-black bg-purple-300 py-2"
              colSpan="2"
            >
              11:30 am - 1 pm &nbsp;&nbsp; Idol Fest
            </td>
          );
        return <td className="border border-black py-2" colSpan="2"></td>;
      }
    };

    return (
      <table className="table-fixed w-full text-sm border border-black text-center bg-[#FBEFFF]">
        <thead>
          <tr>
            <th className="border border-black bg-white py-2" colSpan="3">
              {day}{" "}
              {day === "Friday"
                ? "(April 25th)"
                : day === "Saturday"
                ? "(April 26th)"
                : "(April 27th)"}
            </th>
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="border border-black py-2 w-1/6">{time}</td>
              {getEventForSlot(time)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab flex flex-col items-center">
      <Navbar />

      {/* User Info */}
      <div className="text-center mt-4 mb-4">
        <p className="text-md">@amyT223</p>

        {/* Wrap name and edit button together in one flex container */}
        <div className="flex items-center justify-center space-x-2 mt-2">
          <span className="text-lg font-semibold">Name:</span>

          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white border border-[#BF4D9D] px-2 py-1 rounded text-[#BF4D9D] text-lg font-semibold"
            />
          ) : (
            <span className="text-[#BF4D9D] text-lg font-semibold">{name}</span>
          )}

          <button
            className="bg-[#D6D7FB] hover:bg-[#c5c7f0] text-[#7E52A0] font-semibold px-4 py-1 rounded"
            onClick={() => {
              if (isEditing && name.trim() === "") {
                alert("Username cannot be empty.");
                return;
              }
              setIsEditing((prev) => !prev);
            }}
          >
            {isEditing ? "SAVE" : "EDIT"}
          </button>
        </div>
      </div>


      {/* Schedule Tabs */}
      <div className="flex space-x-4 mb-4">
        {["Friday", "Saturday", "Sunday"].map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-1 rounded-full font-medium ${
              activeDay === day
                ? "bg-[#E3D4FF] hover:bg-[#d6c4f0]"
                : "bg-[#F0E9FF] hover:bg-[#e4dbf0]"
            }`}            
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Table */}
      <div className="w-[90%] overflow-x-auto">{renderTable(activeDay)}</div>
    </div>
  );
}
