"use client";

import React from 'react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';


const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Car exterior detailing result',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Car interior detailing',
  },
  {
    id: 3,
    src: '/pictures/service-1.jpg',
    alt: 'Window tinting process',
  },
  {
    id: 4,
    src: '/pictures/service.jpg',
    alt: 'Ceramic coating application',
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
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 fade-in">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fade-in">
            See the transformation our detailing services can provide. From showroom shine to 
            interior restoration, our results speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-xl shadow-md group fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-darkblack bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-50">
                <div className="opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-white font-medium px-4 py-2 rounded-full border border-white">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/gallery"
            className="text-sky-500 border-2 border-sky-500 px-8 py-3 rounded-full inline-block font-medium hover:bg-sky-500 hover:text-white transition-colors fade-in"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
