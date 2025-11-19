"use client";

import NavBar from "@/components/NavBar";
import BottomCTA from "@/components/BottomCTA";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AivaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: "apps",
      image: "/assets/Connect-Banner-Image.png",
      title: "Apps",
      subtitle: "Connect Apps and Services",
      features: [
        "Browse the App Library and add to Library",
        "Log in once. Adjust preferences",
        "Complete actions seamlessly"
      ]
    },
    {
      id: "projects",
      image: "/assets/Projects-Banner-Image.heic",
      title: "Projects",
      subtitle: "Group tasks, tools and people",
      features: [
        "Start new project",
        "Aiva links docs, messages, emails, reminders and people",
        "As context changes, Aiva adapts and knows whats next"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <main className="h-screen relative antialiased overflow-hidden flex flex-col">
      {/* Full-screen background slider */}
      <div className="fixed inset-0 z-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} Banner`}
              fill
              className={`object-cover w-full h-full ${
                slide.id === "apps" ? "object-[center_60%]" : "object-bottom"
              }`}
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <NavBar />
      
      {/* Content Section */}
      <section className="relative z-10 flex-1 flex items-end pb-32 sm:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            
            {/* Left Side - Text Content */}
            <div className="text-left">
              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white mb-4 leading-tight">
                {currentSlideData.title}
              </h1>

              {/* Subtitle */}
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 leading-relaxed">
                {currentSlideData.subtitle}
              </p>
            </div>

            {/* Right Side - Bullet Points */}
            <div className="flex justify-end">
              <div className="w-full max-w-md">
                <ul className="space-y-4">
                  {currentSlideData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <span className="text-lg sm:text-xl text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide Indicators - Center of screen, just dots */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-48 sm:bottom-52 z-20">
        <div className="flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className="transition-all duration-300"
              aria-label={`Go to ${slide.title} slide`}
            >
              <div className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-3 h-3 bg-white' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/70'
              }`} />
            </button>
          ))}
        </div>
      </div>

      <BottomCTA />
    </main>
  );
}
