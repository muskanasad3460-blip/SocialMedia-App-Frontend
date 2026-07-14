"use client";

import { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { verifyOTP } from "@/api/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function OTPForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: verifyOTP,

    onSuccess: () => {
      // toast.success(data.message);
      // Save Tokens
      // localStorage.setItem("accessToken", data.tokens.access.token);

      // localStorage.setItem("refreshToken", data.tokens.refresh.token);

      toast.success("good");
      router.push("/"); // ya /login
    },

    onError: (error: Error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !otp) {
      toast.success("Please fill all fields");
      return;
    }

    mutate({
      email,
      otp,
    });
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-2">Verify Email</h1>

      <p className="text-center text-gray-500 mb-8">
        Enter your email and OTP.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Email */}

        <div className="relative mb-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 rounded-lg py-3 pl-4 pr-12 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* OTP */}

        <div className="relative mb-6">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter OTP"
            className="w-full bg-gray-100 rounded-lg py-3 pl-4 pr-12 outline-none"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <FaKey className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-12 rounded-lg bg-blue-500 text-white font-semibold"
        >
          {isPending ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
}
