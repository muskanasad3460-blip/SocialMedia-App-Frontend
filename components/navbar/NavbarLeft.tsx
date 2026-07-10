import React from "react";
import { FaFacebook, FaSearch } from "react-icons/fa";

export default function NavbarLeft() {
  return (
    <div className="flex items-center gap-4">
      <FaFacebook className="text-blue-600 text-5xl cursor-pointer" />
      <div className="relative">
        <input
          type="text"
          placeholder="Search Facebook"
          className="bg-gray-100 rounded-full pl-11 pr-5 py-2 w-72 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text gray-500" />
      </div>
    </div>
  );
}
