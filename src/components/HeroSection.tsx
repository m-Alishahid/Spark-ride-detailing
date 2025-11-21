"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Array of background images for the slider
const backgroundImages = [
  "/pictures/CarWash.jpg",
  "/pictures/InteriorTruckCleaning.png", 
  "/pictures/YellowVanInterior.png",
  "/pictures/SUVCarInteriorLuxury.jpg"
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 w-full bg-gray-100">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900">Spark Ride</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 w-full">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt={`Premium Car Detailing ${currentImageIndex + 1}`}
              fill
              className="object-cover w-full h-full"
              priority
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/40" />
          </motion.div>
        </AnimatePresence>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-[#10B5DB] scale-125'
                  : 'bg-white/80 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Manual Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 hover:bg-white/70 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 border border-white/30"
          aria-label="Previous image"
        >
          <ChevronDown size={20} className="transform rotate-90 text-[#10B5DB] md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 hover:bg-white/70 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 border border-white/30"
          aria-label="Next image"
        >
          <ChevronDown size={20} className="transform -rotate-90 text-[#10B5DB] md:w-6 md:h-6" />
        </button>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight font-['Poppins'] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gray-900 block drop-shadow-md">Spark Your Ride,</span>
          <span className="text-[#10B5DB] block drop-shadow-md">Shine Bright!</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base md:text-xl lg:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-['Poppins'] font-semibold drop-shadow-md bg-white/60 backdrop-blur-sm rounded-2xl py-3 px-4 md:py-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform your vehicle into a showroom masterpiece with our comprehensive car wash, detailing, and ceramic coating services.
          Experience the ultimate in automotive care with eco-friendly products and certified professionals.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-[#10B5DB] hover:bg-[#0E9AC3] text-white rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0 font-['Poppins'] w-full"
              onClick={() => window.location.href = '/booking'}
            >
              <Calendar size={18} className="mr-2 md:w-5 md:h-5" />
              Book Now
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link href="/services" className="w-full sm:w-auto block">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#10B5DB] text-[#10B5DB] hover:bg-[#10B5DB] hover:text-white rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm font-['Poppins'] w-full"
              >
                <Wrench size={18} className="mr-2 md:w-5 md:h-5" />
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer text-[#10B5DB] z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 border border-white/30"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="md:w-8 md:h-8" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#10B5DB]/20 rounded-full blur-3xl z-0"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-[#10B5DB]/15 rounded-full blur-2xl z-0"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#10B5DB]/10 rounded-full blur-xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-white to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  );
}