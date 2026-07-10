import React from "react";
import { FaFacebookMessenger, FaUserPlus } from "react-icons/fa";
import { FaBagShopping, FaCircleCheck } from "react-icons/fa6";

export default function ProfileHeader() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-b-xl px-8 pb-5">
      <div className="flex justify-between ">
        <div className="flex">
          <div className="-mt-10">
            <img
              src="https://scontent.fskt2-1.fna.fbcdn.net/v/t39.99422-6/726908600_1007261928833879_5598724386943254499_n.png?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_o4xpqIYszkQ7kNvwHyeTc8&_nc_oc=AdrsKnFPUojdK9vYndRXlfyDGN6HPOZqRsyvJr5ndbBHZxu6zU387wn-oH3BXjNnos0&_nc_zt=14&_nc_ht=scontent.fskt2-1.fna&_nc_gid=-u90o6p_cH98gga7Da1AJQ&_nc_ss=7b2a8&oh=00_AQDRCfwywdqLQ1nTBkyUWS-YmMfwiAwqklbpP0LJgQcbog&oe=6A5274C3"
              alt="Profile"
              className="w-44 h-44 rounded-full border-4 border-white object-cover shadow-md"
            />
          </div>
          <div className="ml-8 mt-6">
            <div className="flex items-center gap-2">
              <h1 className="text-[42px] font-bold leading-none">
                ShahidAfridi
              </h1>
              <FaCircleCheck className="text-blue-600 text-3xl" />
            </div>
            <p className="text-[17px] font-semibold text-gray-800 mt-2">
              14M followers
              <span className="mx-2 text-gray-500">•</span>
              24following
            </p>
            <div className="mt-5 text-[16px] leading-8 text-gray-900">
              <p>🏏 Cricketer #10</p>
              <p>Playing the game / serving humanity</p>
              <p>Shahid Afridi Foundation / #SAF</p>
              <p>All queries Half Full Studio</p>

              <p className="mt-2">💼 Athlete</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 h-12 rounded-lg flex items-center gap-2">
            <FaBagShopping />
            Shop Now
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 h-12 rounded-lg flex items-center gap-2">
            <FaFacebookMessenger />
            Message{" "}
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 h-12 rounded-lg flex items-center gap-2">
            <FaUserPlus />
            Follow{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
