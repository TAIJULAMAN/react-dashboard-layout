import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import dayjs from "dayjs";
import RecentUsers from "./RecentUsers";

function DashboardPage() {
  const currentYear = dayjs().year();
  const startYear = 1900;
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isOpen, setIsOpen] = useState(false);

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 mmd:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="flex justify-between items-center p-5 bg-[#202020]  gap-5 h-[80px] rounded-lg shadow-md">
          <div className="flex gap-2 items-center">
            <p className="rounded-full flex justify-center items-center">
              <FaUsers size={20} className=" bg-white rounded-full p-2 w-10 h-10 text-[#0B704E]" />
            </p>
            <p className="text-xl font-semibold text-white whitespace-nowrap">Total User</p>
          </div>
          <p className="text-[#0B704E] text-2xl font-bold">1200</p>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#202020]  gap-5 h-[80px] rounded-lg shadow-md">
          <div className="flex gap-2 items-center">
            <p className="rounded-full flex justify-center items-center">
              <FaUsers size={20} className=" bg-white rounded-full p-2 w-10 h-10 text-[#0B704E]" />
            </p>
            <p className="text-xl font-semibold text-white whitespace-nowrap">Total Bar</p>
          </div>
          <p className="text-[#0B704E] text-2xl font-bold">120</p>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#202020]  gap-5 h-[80px] rounded-lg shadow-md">
          <div className="flex gap-2 items-center">
            <p className="rounded-full flex justify-center items-center">
              <FaUsers size={20} className=" bg-white rounded-full p-2 w-10 h-10 text-[#0B704E]" />
            </p>
            <p className="text-xl font-semibold text-white whitespace-nowrap">Total Club</p>
          </div>
          <p className="text-[#0B704E] text-2xl font-bold">120</p>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#202020]  gap-5 h-[80px] rounded-lg shadow-md">
          <div className="flex gap-2 items-center">
            <p className="rounded-full flex justify-center items-center">
              <FaUsers size={20} className=" bg-white rounded-full p-2 w-10 h-10 text-[#0B704E]" />
            </p>
            <p className="text-xl font-semibold text-white whitespace-nowrap">Total Restaurant</p>
          </div>
          <p className="text-[#0B704E] text-2xl font-bold">120</p>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#202020]  gap-5 h-[80px] rounded-lg shadow-md">
          <div className="flex gap-2 items-center">
            <p className="rounded-full flex justify-center items-center">
              <FaUsers size={20} className=" bg-white rounded-full p-2 w-10 h-10 text-[#0B704E]" />
            </p>
            <p className="text-xl font-semibold text-white whitespace-nowrap">Total Earning</p>
          </div>
          <p className="text-[#0B704E] text-2xl font-bold">120</p>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-bold mb-5">Recent Joined User</h1>
        <RecentUsers />
      </div>
    </div>
  );
}

export default DashboardPage;
