"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/api/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface RegisterFormProps {
  isRegister: boolean;
}

export default function RegisterForm({ isRegister }: RegisterFormProps) {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,

    onSuccess: (data: any) => {
      toast.success(data.message);

      router.push(`/verify-otp?email=${email}`);
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all fields");

      return;
    }

    mutate({
      name,
      email,
      password,
    });
  };

  return (
    <div
      className={`absolute left-0 w-1/2 h-full bg-white flex items-center px-10 transition-all duration-700 z-10 ${
        isRegister ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Registration</h1>

        {/* Name */}
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-gray-100 rounded-lg py-3 pl-5 pr-12 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Email */}
        <div className="relative mb-5">
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
        <div className="relative mb-5">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 rounded-lg py-3 pl-5 pr-12 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-12 rounded-lg bg-blue-500 text-white font-semibold cursor-pointer disabled:opacity-50"
        >
          {isPending ? "Registering..." : "Register"}
        </button>

        <p className="text-center mt-5 mb-5 font-semibold">
          Or register with social platforms
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
