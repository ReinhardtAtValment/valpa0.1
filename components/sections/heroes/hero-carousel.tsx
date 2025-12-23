"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Network, TrendingUp, Shield, Target, ArrowRight } from "lucide-react";

const slides = [
  {
    eyebrow: "Process Analytics & Continuous Improvement",
    title: "Make Process Behavior Visible",
    description: "Establish data-driven improvement loops for SAP processes using process mining and event analytics.",
    icon: Network,
    gradient: "from-blue-600 to-teal-600",
    accentColor: "text-blue-600",
  },
  {
    eyebrow: "SAP Modernisation & Clean-Core Discovery",
    title: "Reduce Complexity. Enable Innovation.",
    description: "Support SAP transformations by identifying unnecessary customizations. Create clean-core roadmaps.",
    icon: TrendingUp,
    gradient: "from-teal-600 to-blue-700",
    accentColor: "text-teal-600",
  },
  {
    eyebrow: "Enterprise Architecture & Transformation Governance",
    title: "Structure Without Bureaucracy",
    description: "Provide architecture governance that strengthens delivery. Clear principles, practical guidance.",
    icon: Shield,
    gradient: "from-amber-500 to-orange-600",
    accentColor: "text-amber-600",
  },
  {
    eyebrow: "AI Governance & AI Agent Governance",
    title: "Enable AI With Accountability",
    description: "Establish governance for AI and GenAI use cases while maintaining oversight and proper guardrails.",
    icon: Target,
    gradient: "from-purple-600 to-pink-600",
    accentColor: "text-purple-600",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAutoPlaying(false);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAutoPlaying(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Carousel container */}
        <div 
          ref={containerRef}
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards container with peek effect */}
          <div className="relative flex items-center justify-center min-h-[550px] md:min-h-[650px] lg:min-h-[700px]">
            {slides.map((slide, index) => {
              const Icon = slide.icon;
              const offset = index - currentSlide;
              const isActive = index === currentSlide;
              const isNext = offset === 1 || (currentSlide === slides.length - 1 && index === 0);
              const isPrev = offset === -1 || (currentSlide === 0 && index === slides.length - 1);
              
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-out ${
                    isActive 
                      ? 'z-30 scale-100 opacity-100 translate-x-0'
                      : isNext
                      ? 'z-20 scale-90 opacity-40 translate-x-[60%] md:translate-x-[80%] pointer-events-none'
                      : isPrev
                      ? 'z-20 scale-90 opacity-40 -translate-x-[60%] md:-translate-x-[80%] pointer-events-none'
                      : 'z-10 scale-75 opacity-0 pointer-events-none'
                  }`}
                  onClick={() => !isActive && goToSlide(index)}
                >
                  {/* Card that looks like a screen */}
                  <div className="w-[90vw] md:w-[700px] lg:w-[850px] xl:w-[950px] mx-auto">
                    <div className="relative">
                      {/* Card shadow/depth effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform translate-y-2 translate-x-2 blur-xl opacity-30" />
                      
                      {/* Main card */}
                      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                        {/* Top bar (like a device) */}
                        <div className="bg-gray-100 px-6 py-3 flex items-center gap-2 border-b border-gray-200">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                          </div>
                          <div className="flex-1 text-center">
                            <div className="inline-block bg-gray-200 rounded-full px-4 py-1 text-xs text-gray-600">
                              {slide.eyebrow}
                            </div>
                          </div>
                        </div>

                        {/* Card content */}
                        <div className={`relative bg-gradient-to-br ${slide.gradient} p-10 md:p-14 lg:p-16`}>
                          {/* Overlay for better text contrast */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90" />
                          
                          <div className="relative">
                            {/* Icon */}
                            <div className="mb-6 md:mb-8">
                              <div className={`inline-flex p-4 md:p-5 rounded-2xl bg-gradient-to-br ${slide.gradient} shadow-lg`}>
                                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                              {slide.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                              {slide.description}
                            </p>

                            {/* CTA */}
                            <Link
                              href="/services"
                              className={`inline-flex items-center gap-2 text-base md:text-lg font-semibold ${slide.accentColor} hover:gap-3 transition-all`}
                            >
                              Learn more
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-teal-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12 lg:mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}