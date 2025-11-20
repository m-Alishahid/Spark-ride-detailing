"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: "All Services", path: "/services/all-services" },
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
    // Close services dropdown when closing mobile menu
    if (isOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
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

  const dropdownVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2
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
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0 z-60">
            <Image
              src="/pictures/sparkride.png"
              alt="Spark Ride Logo"
              width={40}
              height={40}
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-[#10B5DB] font-['Poppins'] transition-colors duration-300">
              Spark Ride
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    // Desktop Services Dropdown with Hover
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesHover(true)}
                      onMouseLeave={() => setIsServicesHover(false)}
                    >
                      <button className="text-gray-700 hover:text-[#10B5DB] border border-transparent hover:border-[#10B5DB] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 relative group flex items-center space-x-1 font-['Poppins']">
                        <span>{link.name}</span>
                        <ChevronDown 
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                            isServicesHover ? 'rotate-180' : ''
                          }`} 
                        />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B5DB] transition-all duration-300 group-hover:w-full"></span>
                      </button>

                      {/* Hover Dropdown */}
                      <AnimatePresence>
                        {isServicesHover && (
                          <motion.div 
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setIsServicesHover(true)}
                            onMouseLeave={() => setIsServicesHover(false)}
                          >
                            {servicesDropdown.map((service) => (
                              <Link
                                key={service.name}
                                href={service.path}
                                className="block px-4 py-3 text-sm text-gray-700 hover:text-[#10B5DB] hover:bg-blue-50 rounded-lg mx-2 transition-all duration-300 font-['Poppins']"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Desktop Links
                    <Link
                      href={link.path}
                      className="text-gray-700 hover:text-[#10B5DB] border border-transparent hover:border-[#10B5DB] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 relative group font-['Poppins']"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B5DB] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Right Side */}
          <div className="hidden lg:block flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/booking"
                className="bg-[#10B5DB] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#0E9AC3] transition-all duration-300 shadow-lg hover:shadow-xl font-['Poppins']"
              >
                Start Booking
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button - Right Side */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors z-60"
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
              className="lg:hidden fixed inset-0 top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 pt-20 pb-8 px-6 overflow-y-auto"
            >
              {/* Close button for mobile */}
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-200 last:border-b-0">
                    {link.hasDropdown ? (
                      // Mobile Services Dropdown
                      <div className="relative">
                        <motion.button
                          className="flex justify-between items-center w-full text-gray-700 font-medium py-4 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-['Poppins'] text-lg"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{link.name}</span>
                          <motion.div
                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="pl-6 space-y-3 bg-gray-50/50 rounded-xl mt-2 mb-4"
                            >
                              {servicesDropdown.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.path}
                                  onClick={closeMenu}
                                  className="block text-gray-600 py-3 px-4 rounded-lg hover:text-[#10B5DB] hover:bg-white transition-all duration-300 font-['Poppins'] text-base border-l-2 border-transparent hover:border-[#10B5DB]"
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
                        onClick={closeMenu}
                        className="block text-gray-700 font-medium py-4 px-4 rounded-xl hover:bg-gray-50 hover:text-[#10B5DB] transition-all duration-300 font-['Poppins'] text-lg text-center"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  className="pt-6 border-t border-gray-200 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/booking"
                    onClick={closeMenu}
                    className="bg-[#10B5DB] text-white py-4 px-8 rounded-full text-center block font-medium hover:bg-[#0E9AC3] transition-all duration-300 shadow-lg hover:shadow-xl font-['Poppins'] text-lg"
                  >
                    Start Booking
                  </Link>
                </motion.div>
              </div>

              {/* Additional mobile-only content */}
              <div className="mt-12 text-center">
                <div className="text-gray-500 text-sm font-['Poppins']">
                  Premium Auto Detailing Services
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;