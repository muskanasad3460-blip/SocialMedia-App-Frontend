"use client";

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
      active: true,
    },
    {
      name: "Profile",
      icon: User,
    },
    {
      name: "Friends",
      icon: Users,
    },
    {
      name: "Notifications",
      icon: Bell,
    },
    {
      name: "Saved Posts",
      icon: Bookmark,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div
      className="
space-y-5
sticky
top-24
"
    >
      {/* Profile Card */}

      <div
        className="
bg-white
rounded-2xl
shadow-md
p-5

"
      >
        <div className="flex items-center gap-3">
          <div
            className="
w-14
h-14
rounded-full
bg-gradient-to-r
from-indigo-500
to-blue-500
flex
items-center
justify-center
text-white
text-xl
font-bold
"
          >
            M
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Muskan Asad</h3>

            <p className="text-sm text-gray-500">View Profile</p>
          </div>
        </div>
      </div>

      {/* Menu */}

      <div
        className="
bg-white
rounded-2xl
shadow-md
p-4

"
      >
        <h2
          className="
font-bold
text-lg
mb-4
"
        >
          Menu
        </h2>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`
w-full
flex
items-center
gap-4
px-4
py-3
rounded-xl
transition

${item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}

`}
              >
                <Icon size={22} />

                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout */}

      <div
        className="
bg-white
rounded-2xl
shadow-md
p-4

"
      >
        <button
          className="
flex
items-center
gap-3
text-red-500
hover:bg-red-50
w-full
px-4
py-3
rounded-xl
transition
"
        >
          <LogOut size={22} />

          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
