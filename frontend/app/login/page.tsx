// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const mail = email.trim().toLowerCase();
    const PASSWORD = "12345678";

    if (mail === "" || password === "") {
      setError("Please enter your email and password.");
    } else if (mail === "admin@gmail.com" && password === PASSWORD) {
      router.push("/admin/dashboard");
    } else if (mail === "students@gmail.com" && password === PASSWORD) {
      router.push("/students");
    } else if (mail === "professors@gmail.com" && password === PASSWORD) {
      router.push("/professors");
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="flex min-h-screen bg-white text-[#0F2137]">
      {/* Left side (hidden on small screens) */}
      <div className="hidden flex-1 flex-col justify-center bg-[#0f1d38] p-12 text-[#FBF0DC] md:flex">
        <p className="text-6xl">🎓</p>
        <h1 className="mt-4 font-serif text-4xl font-bold">
          Prof<span className="text-[#E4C484]">Connect</span>
        </h1>
        <p className="mt-2 text-sm">Email Professor Outreach</p>
        <p className="mt-8 max-w-sm text-lg">
          Connect with professors. <span className="text-[#E4C484]">Build your future.</span>
        </p>
      </div>

      {/* Right side: form */}
      <div className="flex flex-1 items-center justify-center p-6">
        <form onSubmit={handleLogin} className="w-full max-w-md rounded-2xl bg-[#FBF0DC] p-8 shadow">
          <h2 className="font-serif text-3xl font-bold">Welcome Back</h2>
          <p className="mt-1 text-sm text-[#0F2137]/60">Login to your account</p>

          {/* Error message */}
          {error && (
            <p className="mt-5 rounded-lg border border-[#0F2137] bg-[#E4C484]/40 px-4 py-3 text-sm font-medium">
              ⚠️ {error}
            </p>
          )}

          <label className="mt-6 block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@gmail.com"
            className="mt-1 w-full rounded-lg border border-[#0F2137]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#E4C484]"
          />

          <label className="mt-4 block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1 w-full rounded-lg border border-[#0F2137]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#E4C484]"
          />

          <button
            type="submit" onClick={()=>{
if(email.includes("admin")){
  <Link href="/admin/DashBoard"></Link>
}
            }}
            className="mt-6 w-full rounded-lg bg-[#f8ecd4] py-3 font-semibold text-[#0F2137] hover:opacity-90"
          >
            Login →
          </button>

          
         
        </form>
      </div>
    </div>
  );
}