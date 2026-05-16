"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    // ADMIN LOGIN
    if (
  email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
  password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
) {
      // SAVE LOGIN
      localStorage.setItem(
        "admin-auth",
        "true"
      );

      // REDIRECT
      router.push("/admin/gallery");

    } else {
      alert("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}