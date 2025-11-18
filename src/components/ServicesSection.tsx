"use client";

import React from 'react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const services = [
  {
    id: 'mobile-detailing',
    title: 'Mobile Detailing',
    description: 'Our comprehensive mobile detailing service brings the car wash to you. From exterior washing to interior cleaning, we ensure your vehicle looks its best.',
    // image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    image: '/pictures/CarDetailing.jpg',
    link: '/services/mobile-detailing'
  },
  {
    id: 'window-tint',
    title: 'Window Tint',
    description: 'Enhance privacy, reduce heat, and protect your interior with our professional window tinting services using high-quality films.',
    image: '/pictures/WindowTint.jpg',
    link: '/services/window-tint'
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    description: 'Protect your vehicle\'s paint with our long-lasting ceramic coating that provides exceptional gloss, durability, and hydrophobic properties.',
    // image: 'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    image: '/pictures/CeramicCoating.jpg',
    link: '/services/ceramic-coating'
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.fade-in, .bounce-in');
    elements?.forEach(el => observer.observe(el));

    // Observe specific refs
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      elements?.forEach(el => observer.unobserve(el));
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl lg:text-4xl font-bold mb-4 slide-up">Our <span className="text-skyblue bounce-in" style={{ animationDelay: '0.3s' }}>Professional</span> Services</h2>
          <p ref={descriptionRef} className="text-gray-600 max-w-2xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
            We offer a variety of detailing services to keep your vehicle looking its best,
            from basic washing to premium treatments that protect your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border aspect-[4/3] p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors group"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              ref={buttonRef}
              href="/booking"
              className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground px-8 py-3 rounded-full inline-block font-medium shadow-2xl hover:shadow-3xl transform transition-all duration-300"
            >
              Book A Service Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
