"use client";

import Link from "next/link";
import {
  Home,
  User,
  Users,
  Bell,
  Bookmark,
  Settings,
  LogOut,
} from "lucide-react";

export default function LeftSidebar() {
  const menuItems = [
    {
      name: "Home",
      icon: Home,
      href: "/",
    },
    {
      name: "Profile",
      icon: User,
      href: "/profile",
    },
    {
      name: "Friends",
      icon: Users,
      href: "/friends",
    },
    {
      name: "Notifications",
      icon: Bell,
      href: "/notifications",
    },
    {
      name: "Saved Posts",
      icon: Bookmark,
      href: "/saved",
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <div className="space-y-5 sticky top-24">
      {/* Profile */}

      <div className="bg-white rounded-2xl shadow-md p-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
            M
          </div>

          <div>
            <h3 className="font-semibold">Muskan Asad</h3>
            <p className="text-sm text-gray-500">View Profile</p>
          </div>
        </div>
      </div>

      {/* Menu */}

      <div className="bg-white rounded-2xl shadow-md p-4">
        <h2 className="font-bold mb-4 text-lg">Menu</h2>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.name} href={item.href}>
                <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-100 transition">
                  <Icon size={22} />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Logout */}

      <div className="bg-white rounded-2xl shadow-md p-4">
        <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-4 py-3 rounded-xl">
          <LogOut size={22} />
          Logout
        </button>
      </div>
    </div>
  );
}
