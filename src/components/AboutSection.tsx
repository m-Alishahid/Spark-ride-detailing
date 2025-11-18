"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Car, Shield, Star } from 'lucide-react';
import { enhancedMainServices } from "@/utils/services";

const AboutSection = () => {
  // Map service IDs to images
  const serviceImages = {
    'ceramic-coating': '/pictues/CeramicCoating.jpg',
    'window-tinting': '/pictues/WindowTinting.jpg',
    'paint-correction': '/pictues/CarDetailing.jpg',
    'mobile-detailing': '/pictues/CarDetailing.jpg'
  };

  // Get first 3 services for homepage display
  const displayServices = enhancedMainServices.slice(0, 3);

  return (
    <section id="about-section" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      {/* About Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full z-0"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-sky-500/20 rounded-full z-0"></div>
              <Image
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Car detailing professional"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-20"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Professional</span> Auto Detailing Service
            </motion.h2>

            <motion.p 
              className="text-gray-700 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Spark Ride, we bring professional mobile detailing services with top-quality products and skilled experts directly to you. Our mission is to provide convenience without compromising on quality.
            </motion.p>

            <motion.div 
              className="space-y-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-sky-500 to-blue-500 rounded-full p-3 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Mobile Service</h3>
                  <p className="text-gray-600 leading-relaxed">We bring our services to your home or workplace—saving you time and hassle with our convenient mobile detailing solutions.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full p-3 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Premium Products</h3>
                  <p className="text-gray-600 leading-relaxed">We use only professional-grade products for lasting results that protect and enhance your vehicles appearance.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">Comprehensive Services</h3>
                  <p className="text-gray-600 leading-relaxed">From basic washing to deep cleaning, window tinting, ceramic coating, and specialized treatments for all vehicle types.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/services"
                className="bg-gradient-to-r from-gray-900 to-black text-white px-10 py-4 rounded-full inline-block font-semibold text-lg hover:from-black hover:to-gray-900 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#10B5DB] mb-6">
            Our Premium Services
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            Professional automotive detailing services with premium products and certified technicians.
            Transform your vehicle with our comprehensive care packages.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={serviceImages[service.id] || '/pictures/CeramicCoating.jpg'}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-[#10B5DB] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#10B5DB] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Packages Preview */}
                {service.packages && service.packages.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Starting from:</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#10B5DB]">
                        ${service.packages[0].price}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {service.packages[0].name}
                      </span>
                    </div>
                  </div>
                )}

                {/* Process Steps Preview */}
                {service.process && service.process.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Process:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.process.slice(0, 3).map((step, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-[#10B5DB] mr-2">•</span>
                          {step}
                        </li>
                      ))}
                      {service.process.length > 3 && (
                        <li className="text-[#10B5DB] font-medium">+{service.process.length - 3} more steps</li>
                      )}
                    </ul>
                  </div>
                )}

                <Link
                  href={`/services/${service.id}`}
                  className="inline-block bg-[#10B5DB] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0E9AC3] hover:scale-105 transition-all duration-300 shadow-lg w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;