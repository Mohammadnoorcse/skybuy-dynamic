"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../components/global/AuthContext";
import { useRouter } from "next/navigation"; 

const Page = () => {
  const { login } = useAuth(); 
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const url = isLogin
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/login`
      : `${process.env.NEXT_PUBLIC_API_URL}/api/register`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          name: !isLogin ? email : undefined,
          role_id: !isLogin ? 5 : undefined,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch (err) {
        const text = await res.text();
        console.error("Server returned invalid JSON:", text);
        throw new Error("Invalid response from server");
      }

      if (res.ok) {
        // ✅ Use context to store user and token
        login(data.token, data.user);
        setMessage(isLogin ? "Login successful!" : "User registered successfully!");

        // ✅ Redirect to home page after short delay
        setTimeout(() => {
          router.push("/");
        }, 800);
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow rounded-md flex flex-col items-center justify-center gap-4 pb-8 mt-10 p-4">
      <Image
        src="https://skybuybd.com/_next/static/media/login_icon.849dedcc.svg"
        alt="Login Icon"
        width={200}
        height={200}
      />
      <p>{isLogin ? "Enter your email to login" : "Register a new account"}</p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full py-2 px-3 border rounded-md"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full py-2 px-3 border rounded-md"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 mt-2 bg-blue-600 text-white rounded-md"
        >
          {loading
            ? isLogin
              ? "Logging in..."
              : "Registering..."
            : isLogin
            ? "Login"
            : "Register"}
        </button>

        {message && <p className="text-red-500 mt-2">{message}</p>}

        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="mt-2 underline text-blue-700"
        >
          {isLogin ? "New user? Register" : "Already have an account? Login"}
        </button>

        <div className="w-full h-10 rounded-md bg-blue-500 flex justify-center items-center mt-4 relative text-white cursor-pointer">
          <span>Sign in with Google</span>
          <div className="w-8 h-8 bg-white absolute left-1 rounded-l-md flex justify-center items-center">
            <FcGoogle className="text-2xl" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
