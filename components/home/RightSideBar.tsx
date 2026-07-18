"use client";

import React, { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import { getSuggestions, sendFriendRequest } from "@/api/friend";
import toast from "react-hot-toast";

export default function RightSideBar() {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const fetchSuggestions = async () => {
    try {
      const data = await getSuggestions();
      setSuggestions(data);
    } catch (error) {
      toast.error("Failed to load suggestions");
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const handleAddFriend = async (userId: number) => {
    try {
      await sendFriendRequest(userId);

      toast.success("Friend request sent");

      setSuggestions((prev) => prev.filter((user) => user.id !== userId));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-5 sticky top-24">
      {/* Suggestions Card */}

      <div className="bg-white rounded-2xl shadow-md p-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-lg text-gray-800">
            People You May Know
          </h2>
        </div>

        <div className="space-y-4">
          {suggestions.length === 0 ? (
            <p className="text-sm text-gray-500 text-center">
              No suggestions available
            </p>
          ) : (
            suggestions.map((user: any) => (
              <div
                key={user.id}
                className="flex items-center justify-between gap-3"
              >
                {/* User Info */}

                <div className="flex items-center gap-3">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-gradient-to-r
                        from-indigo-500
                        to-blue-500
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                      "
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                      {user.name}
                    </h3>

                    <p className="text-xs text-gray-500">Suggested for you</p>
                  </div>
                </div>

                {/* Add Friend Button */}

                <button
                  onClick={() => handleAddFriend(user.id)}
                  className="
                    flex
                    items-center
                    gap-1
                    text-sm
                    text-blue-600
                    hover:bg-blue-50
                    px-3
                    py-2
                    rounded-lg
                    transition
                  "
                >
                  <UserPlus size={16} />
                  Add
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Trending Card */}

      <div className="bg-white rounded-2xl shadow-md p-5">
        <h2 className="font-bold text-lg text-gray-800">Trending</h2>

        <div className="mt-4 space-y-3 text-sm">
          <p className="hover:text-blue-600 cursor-pointer">🚀 #NextJS</p>

          <p className="hover:text-blue-600 cursor-pointer">💻 #Programming</p>

          <p className="hover:text-blue-600 cursor-pointer">🔥 #Technology</p>
        </div>
      </div>
    </div>
  );
}
