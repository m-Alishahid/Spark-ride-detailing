"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Car, Shield, Star, Clock, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { enhancedMainServices } from "@/utils/services";

const AboutSection = () => {
  // Map service IDs to images
  const serviceImages: Record<string, string> = {
    'ceramic-coating': '/pictures/CeramicCoating.jpg',
    'window-tinting': '/pictures/WindowTinting.jpg',
    'paint-correction': '/pictures/CarDetailing.jpg',
    'mobile-detailing': '/pictures/CarDetailing.jpg'
  };

  // Get first 3 services for homepage display
  const displayServices = enhancedMainServices.slice(0, 3);

  const features = [
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to your location - home, office, or anywhere convenient"
    },
    {
      icon: Shield,
      title: "Premium Products", 
      description: "Professional-grade products for lasting protection and shine"
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Quick and efficient service without compromising quality"
    },
    {
      icon: CheckCircle,
      title: "Certified Experts",
      description: "Trained professionals with years of detailing experience"
    }
  ];

  // Safe image getter function
  const getServiceImage = (serviceId: string): string => {
    return serviceImages[serviceId] || '/pictures/CeramicCoating.jpg';
  };

  return (
    <section id="about-section" className="py-24 bg-gradient-to-br from-white to-gray-50/50 font-poppins">
      {/* About Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Background Decorations */}
              <div className="absolute -top-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 bg-[#10B5DB]/10 rounded-full z-0 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 lg:w-48 lg:h-48 bg-[#10B5DB]/5 rounded-full z-0"></div>
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/pictures/SedanCarDetailing.jpeg"
                  alt="Spark Ride Professional Detailing"
                  width={800}
                  height={600}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#10B5DB]">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#10B5DB]/10 text-[#10B5DB] px-4 py-2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Star className="h-4 w-4" />
              Premium Detailing Service
            </motion.div>

            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gray-900">Transform Your</span>{' '}
              <span className="text-[#10B5DB]">Ride&apos;s Shine</span>
            </motion.h2>

            <motion.p 
              className="text-gray-600 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At <span className="font-semibold text-[#10B5DB]">Spark Ride</span>, we&apos;re passionate about bringing showroom-quality detailing directly to you.
              Our mobile service combines convenience with exceptional craftsmanship, using only the finest products to protect and enhance your vehicle&apos;s appearance.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
            {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-[#10B5DB]/10 p-2 rounded-xl mt-1">
                    <feature.icon className="h-5 w-5 text-[#10B5DB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/services"
                className="bg-[#10B5DB] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#0E9AC3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/booking"
                className="border-2 border-[#10B5DB] text-[#10B5DB] px-8 py-4 rounded-2xl font-semibold hover:bg-[#10B5DB] hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-[#10B5DB] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
            Our Services
            <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium <span className="text-[#10B5DB]">Services</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            Discover our comprehensive range of automotive care services designed to keep your vehicle 
            looking its best. Each service is performed by certified technicians using premium products.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Service Icon */}
                <div className="absolute top-4 left-4 bg-[#10B5DB] text-white p-3 rounded-2xl shadow-lg">
                  <Car className="h-5 w-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#10B5DB] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Starting Price */}
                <div className="mb-4 p-4 bg-gray-50 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Starting from</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#10B5DB]">
                      ${service.startingPrice}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="w-full bg-[#10B5DB] text-white py-4 rounded-2xl font-semibold hover:bg-[#0E9AC3] transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;