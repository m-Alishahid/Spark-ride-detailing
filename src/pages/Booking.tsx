
"use client";

import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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

    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const form = formRef.current;

    if (title) observer.observe(title);
    if (subtitle) observer.observe(subtitle);
    if (form) observer.observe(form);

    return () => {
      if (title) observer.unobserve(title);
      if (subtitle) observer.unobserve(subtitle);
      if (form) observer.unobserve(form);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 scale-in-center">Book Your Detailing Service</h1>
              <p ref={subtitleRef} className="text-gray-600 fade-in-up-delayed" style={{ animationDelay: '0.3s' }}>
                Fill out the form below to schedule your appointment. We&apos;ll bring our professional
                detailing services right to your location.
              </p>
            </div>

            <div ref={formRef} className="fade-in-up-delayed" style={{ animationDelay: '0.6s' }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
