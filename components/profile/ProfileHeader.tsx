import React from "react";
import { FaFacebookMessenger, FaUserPlus } from "react-icons/fa";
import { FaBagShopping, FaCircleCheck } from "react-icons/fa6";
import { UserProfile } from "@/api/profile";

interface ProfileHeaderProps {
  user: UserProfile;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-b-xl px-8 pb-5">
      <div className="flex justify-between">
        <div className="flex">
          <div className="-mt-10">
            <img
              src={user.avatar || "/afridi.jpg"}
              alt={user.name}
              className="w-44 h-44 rounded-full border-4 border-white object-cover shadow-md"
            />
          </div>

          <div className="ml-8 mt-6">
            <div className="flex items-center gap-2">
              <h1 className="text-[42px] font-bold leading-none">
                {user.name}
              </h1>

              {user.isPrivate === false && (
                <FaCircleCheck className="text-blue-600 text-3xl" />
              )}
            </div>

            <p className="text-[17px] font-semibold text-gray-800 mt-2">
              Followers
              <span className="mx-2 text-gray-500">•</span>
              Following
            </p>

            <div className="mt-5 text-[16px] leading-8 text-gray-900">
              {user.bio ? (
                <p>{user.bio}</p>
              ) : (
                <>
                  <p>🏏 Add your bio</p>
                  <p>Share something about yourself</p>
                </>
              )}

              <p className="mt-2">💼 Profile</p>
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
            Message
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 h-12 rounded-lg flex items-center gap-2">
            <FaUserPlus />
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
