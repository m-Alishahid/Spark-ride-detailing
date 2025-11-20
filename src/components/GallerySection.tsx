"use client";

import React from 'react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: '/pictures/CarDetailing.jpg',
    alt: 'Car exterior detailing result',
    title: 'Exterior Detailing',
  },
  {
    id: 2,
    src: '/pictures/InteriorCleaningAfter.png',
    alt: 'Car interior detailing',
    title: 'Interior Restoration',
  },
  {
    id: 3,
    src: '/pictures/WindowTinting.jpg',
    alt: 'Window tinting process',
    title: 'Window Tinting',
  },
  {
    id: 4,
    src: '/pictures/CeramicCoating.jpg',
    alt: 'Ceramic coating application',
    title: 'Ceramic Coating',
  },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50/50 font-poppins" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
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
            Our Gallery
            <div className="w-8 h-0.5 bg-[#10B5DB]"></div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            See Our <span className="text-[#10B5DB]">Work</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            Witness the stunning transformations our detailing services deliver. From showroom shine to 
            interior restoration, our results speak for themselves.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id} 
              className="relative overflow-hidden rounded-3xl shadow-lg group fade-in hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.alt}</p>
                  </div>
                </div>

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-[#10B5DB] text-white px-6 py-3 rounded-2xl font-semibold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 hover:bg-[#0E9AC3] hover:scale-105 shadow-lg">
                    View Details
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Gallery Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-3 border-2 border-[#10B5DB] text-[#10B5DB] px-8 py-4 rounded-2xl font-semibold hover:bg-[#10B5DB] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl fade-in"
          >
            View Full Gallery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-20 bg-[#10B5DB] rounded-3xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-[#10B5DB]/80">Cars Transformed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-[#10B5DB]/80">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-[#10B5DB]/80">Mobile Service</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5★</div>
              <div className="text-[#10B5DB]/80">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default GallerySection;