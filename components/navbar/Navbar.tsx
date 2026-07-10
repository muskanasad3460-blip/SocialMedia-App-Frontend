import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";
import NavbarRight from "./NavbarRight";

export default function Navbar() {
  return (
    <nav className="bg-white shadow h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <NavbarLeft />
      <NavbarCenter />
      <NavbarRight />
    </nav>
  );
}
