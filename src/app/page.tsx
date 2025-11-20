"use client";

import NavBar from "../components/NavBar";
import BottomCTA from "../components/BottomCTA";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim(), source: "landing" }),
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitStatus("success");
        setEmail("");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setSubmitStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen sm:h-screen relative antialiased overflow-y-auto sm:overflow-hidden flex flex-col">
      {/* Full-screen background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Image
          src="/assets/Aiva-Banner-Image 2.heic"
          alt="Aiva Banner"
          fill
          className="object-cover object-bottom w-full h-full"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      <NavBar />
      
      {/* Hero Section */}
      <section className="relative z-10 flex-1 flex items-end pb-32 sm:pb-64 pt-48 sm:pt-0 min-h-screen sm:min-h-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            
            {/* Left Side - Text Content */}
            <div className="text-left">
              {/* Main Title - Aiva */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white mb-4 leading-tight">
                Aiva
              </h1>

              {/* Subtitle */}
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-relaxed">
                Intuition in your pocket
              </p>
            </div>

            {/* Right Side - Email Form */}
            <div className="flex justify-end">
              <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-base text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-base font-semibold text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <div className="mt-4 text-sm text-green-300 font-medium">
                    You&apos;re on the waitlist! A confirmation email will arrive shortly.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="mt-4 text-sm text-amber-300 font-medium">
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </main>
  );
}
