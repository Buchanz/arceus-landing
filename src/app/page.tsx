"use client";

import NavBar from "../components/NavBar";
import BottomCTA from "../components/BottomCTA";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: "/assets/Slack Image.png", alt: "Slack Interface" },
    { src: "/assets/Docs image.png", alt: "Docs Interface" },
    { src: "/assets/Gmail image.png", alt: "Gmail Interface" },
    { src: "/assets/Agoda image.png", alt: "Agoda Interface" },
    { src: "/assets/Uber eats image .png", alt: "Uber Eats Interface" },
    { src: "/assets/Uber image.png", alt: "Uber Interface" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased overflow-x-hidden flex flex-col">
      <NavBar />
      <div className="transition-all duration-300 flex-1">
        {/* Hero Section */}
        <section className="relative bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side - Text Content */}
              <div className="text-left">
                {/* Branding */}
                <div className="flex items-end gap-10 mb-8">
                  <div className="w-24 h-24 rounded-[25px] shadow-[0_20px_40px_rgba(0,0,0,0.25)] overflow-hidden">
                    <Image
                      src="/assets/aiva-app-icon.png"
                      alt="Aiva App Icon"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-8xl font-medium text-gray-300">Aiva</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                  Intuition in your pocket
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Get things done effortlessly with all your applications in one centralized interface.
                </p>

                {/* Waitlist signup section */}
                <div className="max-w-md">
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-full border-0 px-4 py-3 sm:py-2 text-sm focus:outline-none shadow-[0_4px_8px_rgba(0,0,0,0.15)] bg-white"
                    />
                    <button 
                      type="submit"
                      className="rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-6 py-3 sm:py-2 text-sm font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-[0_4px_12px_rgba(59,130,246,0.4),0_2px_4px_rgba(0,0,0,0.1)] border border-blue-400/30 backdrop-blur-sm"
                    >
                      Join Waitlist
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Side - Carousel Images */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-[600px] relative">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 w-full h-full transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      } ${
                        (image.src.includes('Uber image') || 
                         image.src.includes('Docs image') || 
                         image.src.includes('Gmail image')) 
                          ? 'left-[-10px]' 
                          : (image.src.includes('Agoda image') || 
                             image.src.includes('Uber eats image'))
                          ? 'left-[4px]'
                          : 'left-0'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={320}
                        height={600}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BottomCTA />
    </main>
  );
}