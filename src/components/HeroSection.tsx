"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/pictures/Heroimage.svg"
          alt="Premium Car Detailing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-white/80 via-white/60 to-white/80" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight font-['Poppins']"
          variants={itemVariants}
        >
          <span className="text-foreground block">Spark Your Ride,</span>
          <span className="text-primary-blue block">Shine Bright!</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed font-['Inter'] font-light"
          variants={itemVariants}
        >
          Transform your vehicle into a showroom masterpiece with our comprehensive car wash, detailing, and ceramic coating services.
          Experience the ultimate in automotive care with eco-friendly products and certified professionals.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-[#0E9AC3] text-white rounded-full px-8 py-4 text-lg font-semibold shadow-soft hover:shadow-hover transition-all duration-300"
              onClick={() => window.location.href = '/booking'}
            >
              <Calendar size={20} className="mr-2" />
              Book Now
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/services/mobile-detailing">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-4 text-lg font-semibold shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Wrench size={20} className="mr-2" />
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-foreground-secondary"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary-blue/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary-blue/5 rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  );
}