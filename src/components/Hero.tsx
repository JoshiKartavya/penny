"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message || "You're on the list!");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Failed to join waitlist.");
    }
  };

  return (
    <section id="home" className="pt-40 pb-20 px-4 flex flex-col items-center text-center max-w-4xl mx-auto transition-colors duration-300">
      {/* Waitlist Pill */}
      <div className="inline-flex items-center space-x-2 bg-white dark:bg-transparent border border-[#23c55e]/30 dark:border-[#23c55e]/50 px-3 py-1 rounded-full text-xs font-semibold text-[#23c55e] mb-8 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#23c55e] animate-pulse"></span>
        <span className="tracking-wide uppercase">Open Beta • Waitlist Now Live</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-6 text-black dark:text-white">
       Stop guessing where your money goes.
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
        Most expense apps are overloaded with features you never use. <strong className="text-black dark:text-white font-semibold">PennyWallet helps you track spending in seconds.</strong>
      </p>

      {/* Offer Features (Waitlist incentive) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-sm font-semibold text-gray-700 dark:text-gray-300">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-[#23c55e]/20 dark:bg-[#23c55e]/30 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-[#23c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <span>Get lifetime premium free</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-[#23c55e]/20 dark:bg-[#23c55e]/30 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-[#23c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <span>Early access before launch</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-[#23c55e]/20 dark:bg-[#23c55e]/30 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-[#23c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <span>Help shape the app</span>
        </div>
      </div>

      {/* Email Form */}
      <div className="w-full max-w-md mx-auto mb-8">
        {status === "success" ? (
          <div className="bg-[#23c55e]/10 border border-[#23c55e]/20 rounded-full py-4 px-6 text-[#23c55e] font-semibold flex items-center justify-center space-x-2 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="flex-grow bg-white dark:bg-[#111] dark:text-white border border-gray-200 dark:border-gray-800 rounded-full px-6 py-4 text-base outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all shadow-sm disabled:opacity-50" 
              />
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-md w-full sm:w-auto whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{status === "loading" ? "Joining..." : "Get Early Access"}</span>
              </button>
            </div>
            {status === "error" && (
              <div className="text-red-500 text-sm mt-2 font-medium">{message}</div>
            )}
          </form>
        )}
      </div>

      {/* Social Proof */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-3 transition-colors duration-300">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2 mr-1">
             <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-7 h-7 rounded-full border-2 border-white dark:border-[#111] shadow-sm" />
             <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-7 h-7 rounded-full border-2 border-white dark:border-[#111] shadow-sm" />
             <img src="https://i.pravatar.cc/100?img=44" alt="User" className="w-7 h-7 rounded-full border-2 border-white dark:border-[#111] shadow-sm" />
          </div>
          <span>Built after testing 15+ expense apps.</span>
        </div>
        <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
        <span>Designed for simplicity-first users.</span>
      </div>

    </section>
  );
}
