"use client";

import React from "react";
import { FaFacebook } from "react-icons/fa";

interface OverlayPanelProps {
  isRegister: boolean;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OverlayPanel({
  isRegister,
  setIsRegister,
}: OverlayPanelProps) {
  return (
    <div
      className={`absolute top-0 w-1/2 h-full bg-blue-500 text-white flex justify-center items-center transition-all duration-700 z-20 ${
        isRegister ? "left-1/2 rounded-l-[150px]" : "left-0 rounded-r-[150px]"
      }`}
    >
      {!isRegister ? (
        <div className="text-center px-8">
          <FaFacebook className="text-6xl mb-5 mx-auto" />

          <h1 className="text-3xl font-bold mb-4">Connect with Friends!</h1>

          <p className="mb-6 text-lg">
            Share moments,
            <br />
            and stay connected with the world.
          </p>

          <button
            type="button"
            onClick={() => setIsRegister(true)}
            className="border-2 border-white px-10 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition cursor-pointer"
          >
            Register
          </button>
        </div>
      ) : (
        <div className="text-center px-8">
          <FaFacebook className="text-6xl mb-5 mx-auto" />

          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>

          <p className="mb-6 text-lg">Already have an account?</p>

          <button
            type="button"
            onClick={() => setIsRegister(false)}
            className="border-2 border-white px-10 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition cursor-pointer"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
