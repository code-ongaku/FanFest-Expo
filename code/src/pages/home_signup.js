import Navbar from "../components/navbar";

export default function HomeSignup() {
  return (
    <div className="bg-[#F8F1FF] text-[#7E52A0] min-h-screen font-roboto-slab flex flex-col items-center">
      
      {/* Reusable Navbar */}
      <Navbar />

      {/* User Info */}
      <div className="text-center mt-4 mb-4">
        <p className="text-md">@dandan23</p>
        <p className="text-lg font-semibold">
          Name: <span className="text-[#BF4D9D]">Daniel Smith</span>
        </p>
        <button className="bg-[#D6D7FB] text-[#7E52A0] font-semibold px-4 py-1 rounded mt-1">EDIT</button>
      </div>

      {/* Schedule Tabs */}
      <div className="flex space-x-4 mb-4">
        <button className="bg-[#E3D4FF] px-4 py-1 rounded-full font-medium">Friday</button>
        <button className="bg-[#F0E9FF] px-4 py-1 rounded-full">Saturday</button>
        <button className="bg-[#F0E9FF] px-4 py-1 rounded-full">Sunday</button>
      </div>

      {/* Empty Personal Schedule Table */}
      <div className="w-[90%] overflow-x-auto">
        <table className="table-fixed w-full text-sm border border-black text-center bg-[#FBEFFF]">
          <thead>
            <tr>
              <th className="border border-black bg-white py-2" colSpan="3">
                Friday (April 25th)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black py-2 w-1/6">9am</td>
              <td className="border border-black py-2" colSpan="2"></td>
            </tr>
            <tr>
              <td className="border border-black py-2">10am</td>
              <td className="border border-black py-2" colSpan="2"></td>
            </tr>
            <tr>
              <td className="border border-black py-2">11am</td>
              <td className="border border-black py-2" colSpan="2"></td>
            </tr>
            <tr>
              <td className="border border-black py-2">12pm</td>
              <td className="border border-black py-2" colSpan="2"></td>
            </tr>
            <tr>
              <td className="border border-black py-2">1pm</td>
              <td className="border border-black py-2" colSpan="2"></td>
            </tr>
            <tr>
              <td className="border border-black py-2">2pm</td>
              <td className="border border-black py-2" colSpan="2"></td>
            </tr>
            <tr>
              <td className="border border-black py-2">3pm</td>
              <td className="border border-black py-2" colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
