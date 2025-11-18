"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesHover, setIsServicesHover] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Services dropdown items
  const servicesDropdown = [
    { name: "Mobile Detailing", path: "/services/mobile-detailing" },
    { name: "Window Tinting", path: "/services/window-tinting" },
    { name: "Ceramic Coating", path: "/services/ceramic-coating" },
    { name: "Paint Correction", path: "/services/paint-correction" },
    { name: "All Services", path: "/services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <Image
              src="/pictures/sparkride.png"
              alt="Spark Ride Logo"
              width={40}
              height={40}
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-primary-blue font-['Poppins'] group-hover:text-[#10B5DB] transition-colors duration-300">
              Spark Ride
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    // Desktop Services Dropdown with Hover
                    <div className="relative"
                      onMouseEnter={() => setIsServicesHover(true)}
                      onMouseLeave={() => setIsServicesHover(false)}
                    >
                      <button className="text-foreground-secondary hover:text-primary border border-transparent hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 relative group flex items-center space-x-1">
                        <span>{link.name}</span>
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </button>

                      {/* Hover Dropdown */}
                      {isServicesHover && (
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          onMouseEnter={() => setIsServicesHover(true)}
                          onMouseLeave={() => setIsServicesHover(false)}
                        >
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={service.path}
                              className="block px-4 py-3 text-sm text-foreground-secondary hover:text-primary border border-transparent hover:border-primary hover:bg-gray-50 rounded-full mx-2 my-1 transition-all duration-300 text-center"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular Desktop Links
                    <Link
                      href={link.path}
                      className="text-foreground-secondary hover:text-primary border border-transparent hover:border-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Right Side */}
          <div className="hidden md:block flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/booking"
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-[#0E9AC3] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Booking
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button - Right Side */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-foreground-secondary p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
            >
              <div className="flex flex-col space-y-1 py-4 px-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      // Mobile Services Dropdown
                      <div className="relative">
                        <motion.div
                          className="flex justify-between items-center text-foreground-secondary font-medium py-3 px-3 border-b border-gray-200 cursor-pointer rounded-lg hover:bg-gray-50"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          whileHover={{ x: 5 }}
                        >
                          <span>{link.name}</span>
                          <motion.div
                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </motion.div>

                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-6 py-2 space-y-2 bg-gray-50/50 rounded-lg mt-1"
                            >
                              {servicesDropdown.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.path}
                                  onClick={toggleMenu}
                                  className="block text-foreground-secondary py-2 px-3 rounded-lg hover:text-primary hover:bg-white transition-all duration-300 text-center"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Regular Mobile Links
                      <Link
                        href={link.path}
                        onClick={toggleMenu}
                        className="text-foreground-secondary font-medium py-3 px-3 border-b border-gray-200 hover:text-primary rounded-lg hover:bg-gray-50 transition-all duration-300 block text-center"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-3"
                >
                  <Link
                    href="/booking"
                    onClick={toggleMenu}
                    className="bg-primary text-white py-3 px-6 rounded-full text-center block font-medium hover:bg-[#0E9AC3] transition-all duration-300 shadow-lg"
                  >
                    Start Booking
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;