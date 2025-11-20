"use client";

import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Filter } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/pictures/CarDetailing.jpg',
    category: 'exterior',
    title: 'Full Exterior Detail',
    description: 'Complete exterior wash, wax, and protection'
  },
  {
    id: 2,
    src: '/pictures/ExteriorCleaningAfter.png',
    category: 'exterior',
    title: 'Paint Correction',
    description: 'Removing swirl marks and restoring paint clarity'
  },
  {
    id: 3,
    src: '/pictures/InteriorCleaningAfter.png',
    category: 'interior',
    title: 'Interior Detailing',
    description: 'Deep cleaning and conditioning of all interior surfaces'
  },
  {
    id: 4,
    src: '/pictures/CarWash.jpg',
    category: 'exterior',
    title: 'Showroom Shine',
    description: 'Premium polishing for that perfect mirror finish'
  },
  {
    id: 5,
    src: '/pictures/WindowTinting.jpg',
    category: 'window-tint',
    title: 'Window Tinting',
    description: 'Professional window film installation'
  },
  {
    id: 6,
    src: '/pictures/CeramicCoating.jpg',
    category: 'ceramic',
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with nano-ceramic technology'
  },
  {
    id: 7,
    src: '/pictures/ExteriorCleaningBefore.png',
    category: 'exterior',
    title: 'Exterior Wash',
    description: 'Thorough cleaning with premium products'
  },
  {
    id: 8,
    src: '/pictures/SUVInteriorCleaning.jpg',
    category: 'interior',
    title: 'Leather Treatment',
    description: 'Specialized care for leather surfaces'
  },
  {
    id: 9,
    src: '/pictures/CeramicCoatingAfter.png',
    category: 'ceramic',
    title: 'Paint Protection',
    description: 'Advanced coating for ultimate durability'
  },
  {
    id: 10,
    src: '/pictures/SedanDetailingWash.jpeg',
    category: 'exterior',
    title: 'Professional Detailing',
    description: 'Comprehensive detailing package'
  },
  {
    id: 11,
    src: '/pictures/InteriorTruckCleaning.png',
    category: 'interior',
    title: 'Interior Cleaning',
    description: 'Complete interior sanitization and cleaning'
  },
  {
    id: 12,
    src: '/pictures/TintedAutoGlass.jpg',
    category: 'window-tint',
    title: 'Window Treatment',
    description: 'UV protection and heat rejection films'
  }
];

const categories = [
  { id: 'all', name: 'All Services', count: galleryImages.length },
  { id: 'exterior', name: 'Exterior Detailing', count: galleryImages.filter(img => img.category === 'exterior').length },
  { id: 'interior', name: 'Interior Detailing', count: galleryImages.filter(img => img.category === 'interior').length },
  { id: 'ceramic', name: 'Ceramic Coating', count: galleryImages.filter(img => img.category === 'ceramic').length },
  { id: 'window-tint', name: 'Window Tinting', count: galleryImages.filter(img => img.category === 'window-tint').length }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (id: number) => {
    setActiveImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateModal = (direction: 'next' | 'prev') => {
    if (activeImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === activeImage);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setActiveImage(filteredImages[newIndex].id);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImage === null) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateModal('next');
      if (e.key === 'ArrowLeft') navigateModal('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, navigateModal]); // Fixed: added navigateModal dependency

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-['Poppins']">
              <span className="text-gray-900">Our</span>{' '}
              <span className="text-[#10B5DB]">Gallery</span>
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg font-['Inter']">
              Witness the transformation! Browse through our portfolio of premium car detailing work. 
              Each image tells a story of dedication, precision, and the Spark Ride standard of excellence.
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mobile Filter Button */}
            <div className="md:hidden flex justify-center mb-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-[#10B5DB] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0E9AC3] transition-all duration-300"
              >
                <Filter size={20} />
                Filter Services
              </button>
            </div>

            {/* Category Filters */}
            <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-[#10B5DB] text-white shadow-lg shadow-blue-200'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#10B5DB] hover:text-[#10B5DB] hover:shadow-md'
                    }`}
                  >
                    {category.name}
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white text-[#10B5DB]'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
                onClick={() => openModal(image.id)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg mb-2 font-['Poppins']">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm font-['Inter']">
                      {image.description}
                    </p>
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                      <span className="text-white font-semibold text-sm">View Details</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-gray-400 text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Image Modal */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute -top-16 right-0 text-white hover:text-[#10B5DB] transition-colors duration-300 z-10"
              >
                <X size={32} />
              </button>
              
              {/* Navigation Buttons */}
              <button 
                onClick={() => navigateModal('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#10B5DB] transition-colors duration-300 bg-black/50 rounded-full p-3"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button 
                onClick={() => navigateModal('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#10B5DB] transition-colors duration-300 bg-black/50 rounded-full p-3"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Content */}
              <div className="relative">
                {filteredImages.map((image) => (
                  image.id === activeImage && (
                    <div key={image.id} className="relative">
                      <Image 
                        src={image.src} 
                        alt={image.title} 
                        width={1200}
                        height={800}
                        className="w-full object-contain max-h-[80vh] rounded-2xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl">
                        <h3 className="text-white font-bold text-2xl mb-2 font-['Poppins']">
                          {image.title}
                        </h3>
                        <p className="text-gray-300 text-lg font-['Inter']">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center">
                <span className="text-sm text-gray-400">
                  {filteredImages.findIndex(img => img.id === activeImage) + 1} of {filteredImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Gallery;