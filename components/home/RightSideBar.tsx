"use client";

import React from "react";
import { UserPlus } from "lucide-react";

export default function RightSideBar() {
  const suggestions = [
    {
      id: 1,
      name: "Ali Ahmed",
      mutual: "12 mutual friends",
      online: true,
    },
    {
      id: 2,
      name: "Sara Khan",
      mutual: "8 mutual friends",
      online: false,
    },
    {
      id: 3,
      name: "John Smith",
      mutual: "5 mutual friends",
      online: true,
    },
  ];

  return (
    <div className="space-y-5 sticky top-24">
      {/* Suggestions Card */}

      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          
          p-5
        "
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-lg text-gray-800">
            People You May Know
          </h2>
        </div>

        <div className="space-y-4">
          {suggestions.map((user) => (
            <div
              key={user.id}
              className="
                flex
                items-center
                justify-between
                gap-3
              "
            >
              {/* User Info */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    relative
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
                  {user.name.charAt(0)}

                  {user.online && (
                    <span
                      className="
                        absolute
                        bottom-0
                        right-0
                        w-3
                        h-3
                        bg-green-500
                        rounded-full
                        border-2
                        border-white
                      "
                    />
                  )}
                </div>

                <div>
                  <h3
                    className="
                      font-semibold
                      text-sm
                      text-gray-800
                    "
                  >
                    {user.name}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-gray-500
                    "
                  >
                    {user.mutual}
                  </p>
                </div>
              </div>

              {/* Follow Button */}

              <button
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
          ))}
        </div>
      </div>

      {/* Trending Card */}

      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          
          p-5
        "
      >
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
