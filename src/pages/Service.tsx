"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define proper types for service content
interface ParagraphContent {
  type: 'paragraph';
  text: string;
}

interface HeadingContent {
  type: 'heading';
  text: string;
}

interface ListContent {
  type: 'list';
  items: {
    title: string;
    description: string;
  }[];
}

interface NumberedListContent {
  type: 'numbered-list';
  items: string[];
}

type ContentItem = ParagraphContent | HeadingContent | ListContent | NumberedListContent;

// Define type for before/after images
type BeforeAfterImage = string | StaticImageData;

interface ServiceData {
  title: string;
  description: string;
  content: ContentItem[];
  image: string;
  beforeAfter: {
    before: BeforeAfterImage;
    after: BeforeAfterImage;
    caption: string;
  }[];
  testimonials: {
    name: string;
    quote: string;
    rating: number;
  }[];
}

interface Services {
  [key: string]: ServiceData;
}

const services: Services = {
  'mobile-detailing': {
    title: 'Mobile Auto Detailing',
    description: 'Our comprehensive mobile detailing service brings the professional car wash experience to your doorstep.',
    content: [
      {
        type: 'paragraph',
        text: 'Our mobile detailing service is the perfect solution for busy professionals, families, and anyone who values their time. We bring all necessary equipment, products, and expertise directly to your location—whether that\'s your home, office, or anywhere else that\'s convenient for you.'
      },
      {
        type: 'heading',
        text: 'What\'s Included:'
      },
      {
        type: 'list',
        items: [
          {
            title: 'Exterior Wash & Dry',
            description: 'Hand wash using pH-balanced soaps and microfiber washing mitts'
          },
          {
            title: 'Wheel & Tire Cleaning',
            description: 'Complete cleaning of wheels, wheel wells, and tire dressing'
          },
          {
            title: 'Window Cleaning',
            description: 'Crystal clear windows inside and out'
          },
          {
            title: 'Interior Vacuum & Dusting',
            description: 'Complete interior vacuum and dusting of all surfaces'
          },
          {
            title: 'Dashboard & Console Detailing',
            description: 'Cleaning and conditioning of all interior surfaces'
          },
          {
            title: 'Leather Treatment',
            description: 'Cleaning and conditioning of leather surfaces'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Benefits of Mobile Detailing:'
      },
      {
        type: 'list',
        items: [
          {
            title: 'Convenience',
            description: 'No need to drive to a detailing shop or wait while your car is being serviced'
          },
          {
            title: 'Personalized Service',
            description: 'One-on-one attention from our detailing professionals'
          },
          {
            title: 'Premium Products',
            description: 'We use only high-quality detailing products'
          },
          {
            title: 'Time Savings',
            description: 'Keep working or relaxing while we detail your vehicle'
          }
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1621217899086-01f0e603009e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        after: 'https://images.unsplash.com/photo-1575844611398-2a68400b437c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Interior Transformation'
      },
      {
        before: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        after: 'https://images.unsplash.com/photo-1575844611398-2a68400b437c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Fixed: replaced undefined 'after' with actual URL
        caption: 'Exterior Shine'
      }
    ],
    testimonials: [
      {
        name: 'Michael J.',
        quote: 'I was amazed at how convenient the service was. They showed up at my office, and by lunch break, my car looked brand new!',
        rating: 5
      },
      {
        name: 'Sarah T.',
        quote: 'The attention to detail was incredible. They got stains out that I thought would never come clean.',
        rating: 5
      }
    ]
  },
  'window-tint': {
    title: 'Window Tinting Services',
    description: 'Professional window tinting for improved comfort, privacy, and protection.',
    content: [
      {
        type: 'paragraph',
        text: 'Our professional window tinting service provides multiple benefits beyond just the stylish appearance. We use high-quality films that block harmful UV rays, reduce heat, and increase privacy.'
      },
      {
        type: 'heading',
        text: 'Benefits of Our Window Tinting:'
      },
      {
        type: 'list',
        items: [
          {
            title: 'UV Protection',
            description: 'Blocks up to 99% of harmful UV rays, protecting your skin and interior'
          },
          {
            title: 'Heat Reduction',
            description: 'Keeps your car cooler in summer by blocking solar heat'
          },
          {
            title: 'Glare Reduction',
            description: 'Improves driving safety by reducing eye strain'
          },
          {
            title: 'Privacy',
            description: 'Prevents prying eyes from seeing inside your vehicle'
          },
          {
            title: 'Interior Protection',
            description: 'Prevents fading and cracking of your dashboard and upholstery'
          },
          {
            title: 'Enhanced Appearance',
            description: 'Gives your vehicle a sleek, sophisticated look'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Our Tinting Process:'
      },
      {
        type: 'numbered-list',
        items: [
          'Consultation - We discuss your needs and legal tinting limits in your area',
          'Window Preparation - We thoroughly clean your windows to ensure perfect application',
          'Precision Cutting - Each film is precisely cut to fit your specific window dimensions',
          'Professional Installation - Expert application with no bubbles or imperfections',
          'Curing - Instructions on care during the initial curing period'
        ]
      }
    ],
    image: 'https://plus.unsplash.com/premium_photo-1694444690362-8a24b98fdc59?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        after: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Window Tint Application'
      }
    ],
    testimonials: [
      {
        name: 'Robert K.',
        quote: 'The window tint has made a huge difference in the summer heat. My car stays much cooler and the installation was flawless.',
        rating: 5
      },
      {
        name: 'Emily L.',
        quote: 'Very professional service and the tint looks fantastic. No bubbles or imperfections.',
        rating: 5
      }
    ]
  },
  'ceramic-coating': {
    title: 'Ceramic Coating Protection',
    description: 'Long-lasting protection for your vehicle with advanced ceramic coating technology.',
    content: [
      {
        type: 'paragraph',
        text: 'Ceramic coating is a high-performance liquid polymer that bonds with your vehicle\'s paint, creating a protective layer that offers superior protection compared to traditional waxes and sealants.'
      },
      {
        type: 'heading',
        text: 'Benefits of Ceramic Coating:'
      },
      {
        type: 'list',
        items: [
          {
            title: 'Long-lasting Protection',
            description: 'Lasts years rather than weeks or months like traditional waxes'
          },
          {
            title: 'Hydrophobic Properties',
            description: 'Water beads and rolls off the surface, carrying dirt with it'
          },
          {
            title: 'Chemical Resistance',
            description: 'Protection against environmental contaminants'
          },
          {
            title: 'UV Protection',
            description: 'Prevents oxidation and fading from the sun'
          },
          {
            title: 'Enhanced Gloss',
            description: 'Creates a deeper, more reflective shine'
          },
          {
            title: 'Easier Cleaning',
            description: 'Dirt and grime don\'t bond to the surface as easily'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Our Ceramic Coating Process:'
      },
      {
        type: 'numbered-list',
        items: [
          'Paint Correction - We remove swirl marks, scratches, and imperfections',
          'Surface Preparation - Deep cleaning to remove all contaminants',
          'Coating Application - Precise application by certified professionals',
          'Curing Process - Controlled environment for optimal bonding',
          'Final Inspection - Quality check to ensure perfect application'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeAfter: [
      {
        before: '/pictures/CeramicCoatingBefore.png',
        after: '/pictures/CeramicCoatingAfter.png',
        caption: 'Paint Protection'
      }
    ],
    testimonials: [
      {
        name: 'David R.',
        quote: 'The ceramic coating has been a game-changer. Six months in and my car still looks like it just came from the detailer.',
        rating: 5
      },
      {
        name: 'Jessica M.',
        quote: "Worth every penny! My car's paint has never looked this good, and it's so much easier to keep clean now.",
        rating: 5
      }
    ]
  }
};

interface ServiceProps {
  serviceId: string;
}

const Service = ({ serviceId }: ServiceProps) => {
  const service = serviceId && services[serviceId] ? services[serviceId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);

    // Animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;

        if (elementTop < window.innerHeight - elementHeight / 2) {
          element.classList.add('visible');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p>The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-skyblue hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const renderContent = () => {
    return service.content.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <p key={index} className="text-gray-700 mb-6 fade-in">
            {item.text}
          </p>
        );
      } else if (item.type === 'heading') {
        return (
          <h3 key={index} className="text-2xl font-bold mb-4 mt-8 fade-in">
            {item.text}
          </h3>
        );
      } else if (item.type === 'list') {
        return (
          <div key={index} className="space-y-4 mb-8 fade-in">
            {item.items.map((listItem, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-skyblue rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{listItem.title}</h4>
                  <p className="text-gray-600">{listItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      } else if (item.type === 'numbered-list') {
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 mb-8 pl-4 fade-in">
            {item.items.map((listItem, idx) => (
              <li key={idx} className="text-gray-700">
                {listItem}
              </li>
            ))}
          </ol>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-16">
        <div className="relative h-screen overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkblack/60 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-4 fade-in">
                <span className="text-skyblue">{service.title.split(' ')[0]}</span> {service.title.split(' ').slice(1).join(' ')}
              </h1>
              <p className="text-white text-xl text-center fade-in">{service.description}</p>

              {/* Added Buttons Here */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 fade-in">
                <Link
                  href="/booking"
                  className="bg-sky-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-sky-600 hover:-translate-y-1 transform transition text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="fade-in">
              {renderContent()}
            </div>

            {/* Before & After */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 fade-in">Before & After</h2>
              <div className="space-y-12">
                {service.beforeAfter.map((item, index) => (
                  <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg relative">
                          <Image
                            src={item.before}
                            alt={`Before ${item.caption}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-darkblack text-white px-4 py-2">
                            <span>Before</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="aspect-video overflow-hidden rounded-lg shadow-lg relative">
                          <Image
                            src={item.after}
                            alt={`After ${item.caption}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-skyblue text-white px-4 py-2">
                            <span>After</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-gray-600">{item.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 fade-in">Customer Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center fade-in">
              <Link
                href="/booking"
                className="bg-darkblack text-white px-8 py-3 rounded-full inline-block font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-1"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;