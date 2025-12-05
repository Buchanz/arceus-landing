"use client";

import NavBar from "../components/NavBar";
import BottomCTA from "../components/BottomCTA";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const imageRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (imageRef.current && window.innerWidth < 768) {
      const img = imageRef.current.querySelector('img');
      if (img) {
        img.style.objectPosition = 'center 30%';
      }
    }
  }, []);

  return (
    <main className="min-h-screen sm:h-screen relative antialiased overflow-y-auto sm:overflow-hidden flex flex-col bg-black md:bg-transparent">
      {/* Desktop - Full-screen background */}
      <div ref={imageRef} className="hidden md:block absolute md:fixed inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
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
      </div>

      <NavBar />
      
      {/* Mobile - Welcome Image Container (in document flow) - starts from absolute top */}
      <div className="md:hidden relative w-full -mt-0" style={{ height: 'calc(100vw * 1.5)', marginTop: 0, paddingTop: 0, top: 0 }}>
        <Image
          src="/assets/Aiva-Welcome-Image.jpeg"
          alt="Aiva Welcome"
          fill
          className="object-contain object-top w-full h-full"
          priority
          quality={90}
          sizes="100vw"
        />
        
        {/* Mobile - Text and Email Section - positioned at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 w-full px-4 pb-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-6">
              
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
              <div className="flex justify-start">
                <div className="w-full max-w-md relative">
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

                  {/* Status messages - positioned below form without affecting its position */}
                  <div className="absolute top-full left-0 right-0 mt-2">
                    {submitStatus === "success" && (
                      <div className="text-sm text-green-300 font-medium whitespace-normal break-words">
                        You&apos;re on the waitlist! A confirmation email will arrive shortly.
                      </div>
                    )}
                    
                    {submitStatus === "error" && (
                      <div className="text-sm text-amber-300 font-medium whitespace-normal break-words">
                        {errorMessage}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Desktop */}
      <section className="hidden md:flex relative z-10 flex-1 items-end w-full pb-32 sm:pb-64 self-stretch">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full self-end">
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
              <div className="w-full max-w-md relative">
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

                {/* Status messages - positioned below form without affecting its position */}
                <div className="absolute top-full left-0 right-0 mt-2">
                  {submitStatus === "success" && (
                    <div className="text-sm text-green-300 font-medium whitespace-normal break-words">
                      You&apos;re on the waitlist! A confirmation email will arrive shortly.
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="text-sm text-amber-300 font-medium whitespace-normal break-words">
                      {errorMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
      
      {/* Mobile - Black background below bottom CTA - extends to bottom */}
      <div className="md:hidden w-full bg-black" style={{ minHeight: 'calc(100vh - calc(100vw * 1.5) - 200px)' }}></div>
    </main>
  );
}
