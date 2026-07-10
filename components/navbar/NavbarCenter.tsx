import React from "react";
import { FaGamepad, FaHome, FaStore, FaTv, FaUsers } from "react-icons/fa";

export default function NavbarCenter() {
  return (
    <div className="flex items-center gap-16 text-2xl">
      <button className="text-blue-600 hover:text-blue-600 transition cursor-pointer">
        <FaHome />
      </button>
      <button className="text-gray-600 hover:text-blue-600 transition cursor-pointer">
        <FaUsers />
      </button>

      <button className="text-gray-600 hover:text-blue-600 transition cursor-pointer">
        <FaTv />
      </button>

      <button className="text-gray-600 hover:text-blue-600 transition cursor-pointer">
        <FaStore />
      </button>

      <button className="text-gray-600 hover:text-blue-600 transition cursor-pointer">
        <FaGamepad />
      </button>
    </div>
  );
}
