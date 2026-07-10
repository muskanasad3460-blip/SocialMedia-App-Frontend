"use client";
import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import OverlayPanel from "./OverlayPanel";

export default function AuthContainer() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="relative w-[850px] h-[550px]  rounded-[30px] overflow-hidden shadow-2xl">
      <LoginForm isRegister={isRegister} />
      <RegisterForm isRegister={isRegister} />
      <OverlayPanel isRegister={isRegister} setIsRegister={setIsRegister} />
    </div>
  );
}
