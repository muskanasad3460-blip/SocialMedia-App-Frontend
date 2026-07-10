import React from "react";
import { FaSlidersH } from "react-icons/fa";

export default function PostsHeader() {
  return (
    <div className="bg-white rounded-xl shadow px-5 py-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold">Posts</h2>
      <button className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
        <FaSlidersH />
        Filters
      </button>
    </div>
  );
}
