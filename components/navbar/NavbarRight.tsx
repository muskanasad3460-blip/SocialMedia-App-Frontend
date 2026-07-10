import Image from "next/image";
import React from "react";
import { FaBell, FaFacebookMessenger } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";

export default function NavbarRight() {
  return (
    <div className="flex items-center gap-4">
      <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center text-lg">
        <FaTableCells />
      </button>
      <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center text-lg">
        <FaFacebookMessenger />
      </button>

      <div className="relative">
        <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center text-lg">
          <FaBell />
        </button>

        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          2
        </span>
      </div>
      <Image
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full cursor-pointer"
      />
    </div>
  );
}
