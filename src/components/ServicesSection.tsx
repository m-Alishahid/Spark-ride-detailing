"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Shield, Sparkles, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "BMW Owner",
      rating: 5,
      comment: "Spark Ride transformed my car! The ceramic coating looks incredible and the mobile service saved me so much time. Highly recommended!",
      image: "/pictures/avatar1.jpg",
      service: "Ceramic Coating",
      beforeAfter: "/pictures/CeramicCoatingAfter.png"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Tesla Model 3 Owner",
      rating: 5,
      comment: "The window tinting service was professional and precise. My car stays cool even in peak summer. Excellent workmanship!",
      image: "/pictures/avatar2.jpg",
      service: "Window Tinting",
      beforeAfter: "/pictures/WindowTinting.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Mercedes Owner",
      rating: 5,
      comment: "Best detailing service I&apos;ve ever used! They came to my office and made my car look brand new. Worth every penny!",
      image: "/pictures/avatar3.jpg",
      service: "Full Detailing",
      beforeAfter: "/pictures/CarDetailing.jpg"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Audi Q7 Owner",
      rating: 5,
      comment: "The paint correction work is phenomenal. Scratches I thought were permanent are completely gone. Amazing results!",
      image: "/pictures/avatar4.jpg",
      service: "Paint Correction",
      beforeAfter: "/pictures/ExteriorCleaningAfter.png"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Porsche Owner",
      rating: 5,
      comment: "Professional, punctual, and perfectionists! My Porsche has never looked better. Will definitely use their services again.",
      image: "/pictures/avatar5.jpg",
      service: "Premium Detailing",
      beforeAfter: "/pictures/SedanCarDetailing.jpeg"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Ford F-150 Owner",
      rating: 5,
      comment: "The interior detailing brought my truck back to life. They removed stains I thought were permanent. Outstanding service!",
      image: "/pictures/avatar6.jpg",
      service: "Interior Detailing",
      beforeAfter: "/pictures/InteriorCleaningAfter.png"
    }
  ];

  const packages = [
    {
      id: 1,
      title: "Luxury Car Detailing",
      price: "From $129",
      description: "Transform your ride with deep interior cleaning and a mirror-gloss exterior finish — right at your doorstep.",
      features: [
        "Full Interior Shampoo & Vacuum",
        "Engine Bay & Wheel Deep Clean",
        "Hand Wax & Paint Protection",
        "Door Jamb & Trim Restoration",
      ],
      image: "/pictures/CarDetailing.jpg",
      icon: <Star className="w-6 h-6 text-[#10B5DB]" />,
      badge: "Most Popular",
      badgeColor: "bg-[#10B5DB]",
    },
    {
      id: 2,
      title: "Premium Window Tinting",
      price: "From $249",
      description: "Stay cool and stylish with our high-performance tint films that offer UV defense and privacy protection.",
      features: [
        "99% UV & Heat Blockage",
        "Enhanced Night Visibility",
        "Scratch-Resistant Nano Film",
        "Factory Finish Guarantee",
      ],
      image: "/pictures/WindowTinting.jpg",
      icon: <Shield className="w-6 h-6 text-[#10B5DB]" />,
      badge: "Best Seller",
      badgeColor: "bg-[#10B5DB]",
    },
    {
      id: 3,
      title: "Elite Ceramic Coating",
      price: "From $699",
      description: "Shield your vehicle with advanced 9H ceramic technology that locks in a glossy, hydrophobic shine for years.",
      features: [
        "Long-Lasting 5-Year Protection",
        "Water & Dirt Repellent Coating",
        "UV Fade Resistance",
        "Gloss Enhancement Finish",
      ],
      image: "/pictures/CeramicCoating.jpg",
      icon: <Sparkles className="w-6 h-6 text-[#10B5DB]" />,
      badge: "Premium",
      badgeColor: "bg-[#10B5DB]",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50/50 font-poppins">
      {/* Testimonials Section */}
      <div className="container mx-auto px-4 mb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-[#10B5DB] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
            Customer Reviews
            <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-[#10B5DB]">Customers</span> Say
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their Spark Ride experience.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-3 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#10B5DB]/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.comment}&quot;
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#10B5DB] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-[#10B5DB] text-sm font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </div>

              {/* Before/After Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={testimonial.beforeAfter}
                  alt={`${testimonial.service} result`}
                  width={400}
                  height={128}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-3 left-4 text-white text-sm font-medium">
                  Result
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#10B5DB] rounded-3xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-[#10B5DB]/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-[#10B5DB]/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-[#10B5DB]/80">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-[#10B5DB]/80">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Packages Section */}
      <div className="container mx-auto px-4">
        {/* Packages Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-[#10B5DB] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
            Premium Packages
            <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#10B5DB]">Packages</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            Choose the perfect package to give your car the luxury care it deserves &mdash; with our expert team and professional-grade products.
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100"
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 z-20 ${pkg.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                {pkg.badge}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10 p-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
                  {pkg.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pkg.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#10B5DB] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                  <span className="text-[#10B5DB] font-extrabold text-2xl">
                    {pkg.price}
                  </span>
                  <Link
                    href="/booking"
                    className="bg-[#10B5DB] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#0E9AC3] transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;