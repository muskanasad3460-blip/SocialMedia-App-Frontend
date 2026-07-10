import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";

export default function ProfileTabs() {
  return (
    <div className="max-w-6xl mx-auto bg-white border-t">
      <div className="flex justify-between items-center px-5">
        <div className="flex items-center">
          <button className="px-6 py-4 text-blue-600 border-b-4 border-blue-600 font-semibold">
            All
          </button>
          <button className="px-6 py-4 hover:bg-gray-100 rounded-lg font-semibold text-gray-600">
            About
          </button>

          <button className="px-6 py-4 hover:bg-gray-100 rounded-lg font-semibold text-gray-600">
            Reels
          </button>

          <button className="px-6 py-4 hover:bg-gray-100 rounded-lg font-semibold text-gray-600">
            Photos
          </button>

          <button className="px-6 py-4 hover:bg-gray-100 rounded-lg font-semibold text-gray-600">
            Followers
          </button>

          <button className="px-6 py-4 hover:bg-gray-100 rounded-lg font-semibold text-gray-600 flex items-center gap-1">
            More
            <FaCaretDown />
          </button>
        </div>
        <button className="bg-gray-200 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300">
          <FaEllipsis />
        </button>
      </div>
    </div>
  );
}
