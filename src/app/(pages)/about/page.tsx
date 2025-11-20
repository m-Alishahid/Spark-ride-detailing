"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, MapPin, CheckCircle, Users, Award, ThumbsUp, Car, Sparkles, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Customers'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Average Rating'
    },
    {
      icon: ThumbsUp,
      number: '100%',
      label: 'Satisfaction Rate'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Years Experience'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use only premium products and follow industry-best practices to ensure exceptional results every time.'
    },
    {
      icon: Clock,
      title: 'Punctuality',
      description: 'Your time is valuable. We arrive on schedule and complete the job within the promised timeframe.'
    },
    {
      icon: MapPin,
      title: 'Convenience',
      description: 'Our mobile service comes to you - at home, work, or any location that suits your schedule.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We pay attention to every detail, ensuring your vehicle receives the care and attention it deserves.'
    }
  ];

  const process = [
    {
      icon: Car,
      step: '01',
      title: 'Book Your Service',
      description: 'Choose your preferred service and schedule a convenient time. We come to your location anywhere in Virginia.'
    },
    {
      icon: Sparkles,
      step: '02',
      title: 'Professional Detailing',
      description: 'Our certified team performs the service using premium products and state-of-the-art equipment.'
    },
    {
      icon: Zap,
      step: '03',
      title: 'Quality Check',
      description: 'Every vehicle undergoes a thorough quality inspection to ensure perfection before delivery.'
    },
    {
      icon: ThumbsUp,
      step: '04',
      title: 'Enjoy Results',
      description: 'Drive away with a showroom-ready vehicle that turns heads and lasts longer.'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 relative">
        <div className="relative h-96 lg:h-screen overflow-hidden">
          <Image
            src="/pictures/SedanCarDetailing.jpeg"
            alt="Spark Ride Professional Detailing Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  About <span className="text-[#10B5DB]">Spark Ride</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transforming vehicles with passion, precision, and premium care
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 bg-[#10B5DB]/10 rounded-full z-0 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 lg:w-48 lg:h-48 bg-[#10B5DB]/5 rounded-full z-0"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/pictures/CarDetailing.jpg"
                    alt="Spark Ride Detailing Process"
                    width={600}
                    height={400}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-[#10B5DB]/10 text-[#10B5DB] px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Star className="h-4 w-4" />
                Our Story
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Driven by <span className="text-[#10B5DB]">Excellence</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Spark Ride was born from a passion for automotive perfection and a vision to 
                  revolutionize the car detailing industry. We set out to create a service that 
                  combines professional expertise with unparalleled convenience.
                </p>
                <p>
                  We understand that your vehicle is more than just transportation - it&apos;s an investment
                  and a reflection of your personality. That&apos;s why we treat every car with the same
                  care and attention we&apos;d give our own.
                </p>
                <p>
                  Our team of certified professionals combines extensive experience with the latest 
                  techniques and premium products to deliver results that consistently exceed expectations.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-[#10B5DB] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#0E9AC3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#10B5DB] text-[#10B5DB] px-8 py-4 rounded-2xl font-semibold hover:bg-[#10B5DB] hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#10B5DB] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
              Our Values
              <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#10B5DB]">Spark Ride</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-[#10B5DB] rounded-2xl p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50/50">
        <div className="container mx-auto px-4">
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
              How It Works
              <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#10B5DB]">Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
              Simple, efficient, and designed for your convenience - here&apos;s how we deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-[#10B5DB]/20 -z-10"></div>
                )}
                
                <div className="bg-[#10B5DB] rounded-3xl p-8 text-white mb-6 relative group hover:scale-105 transition-transform duration-300">
                  <step.icon className="h-12 w-12 mx-auto mb-4" />
                  <div className="absolute -top-3 -right-3 bg-white text-[#10B5DB] rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-[#10B5DB]/10 text-[#10B5DB] px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Zap className="h-4 w-4" />
                Technology & Equipment
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                State-of-the-Art <span className="text-[#10B5DB]">Solutions</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#10B5DB] rounded-2xl p-3 mt-1">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Advanced Ceramic Coatings</h4>
                    <p className="text-gray-600">Professional-grade ceramic coatings that provide long-lasting protection and brilliant shine.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#10B5DB] rounded-2xl p-3 mt-1">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Premium Detailing Products</h4>
                    <p className="text-gray-600">We use only the finest, eco-friendly products that are safe for your vehicle and the environment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#10B5DB] rounded-2xl p-3 mt-1">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Mobile Service Unit</h4>
                    <p className="text-gray-600">Fully equipped mobile detailing van with all necessary equipment for on-site service.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/pictures/WindowTinting.jpg"
                  alt="Spark Ride Equipment and Technology"
                  width={600}
                  height={400}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#10B5DB] rounded-3xl p-12 text-white max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Spark Ride?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us with their vehicles. Book your service today and see the Spark Ride difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="bg-white text-[#10B5DB] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center text-lg"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#10B5DB] transition-all duration-300 transform hover:-translate-y-1 text-center text-lg"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;