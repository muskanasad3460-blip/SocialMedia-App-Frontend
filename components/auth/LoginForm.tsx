"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface LoginFormProps {
  isRegister: boolean;
}

export default function LoginForm({ isRegister }: LoginFormProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,

    onSuccess: (data: any) => {
      localStorage.setItem("accessToken", data.tokens.access.token);

      localStorage.setItem("refreshToken", data.tokens.refresh.token);

      toast.success(data.message);

      router.push("/profile");
    },

    onError: (error: Error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      email,
      password,
    });
  };

  return (
    <div
      className={`absolute right-0 w-1/2 h-full bg-white flex items-center px-10 transition-all duration-700 z-10 ${
        isRegister ? "translate-x-full" : ""
      }`}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Login</h1>

        {/* Email */}
        <div className="relative mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 rounded-lg py-3 pl-5 pr-12 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 rounded-lg py-3 pl-5 pr-12 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <div className="text-right mb-5">
          <button
            type="button"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-12 rounded-lg bg-blue-500 text-white font-semibold disabled:opacity-50"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-5 mb-5 font-semibold">
          Or login with social platforms
        </p>

        <div className="flex justify-center gap-4">
          {[FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn].map(
            (Icon, index) => (
              <div
                key={index}
                className="w-12 h-12 border rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100"
              >
                <Icon />
              </div>
            )
          )}
        </div>
      </form>
    </div>
  );
}
