"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, CheckCircle, Clock, Shield, MapPin } from 'lucide-react';

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
  startingPrice?: number;
  duration?: string;
}

interface Services {
  [key: string]: ServiceData;
}

const services: Services = {
  'all-services': {
    title: 'All Our Services',
    description: 'Comprehensive auto detailing services including mobile detailing, window tinting, ceramic coating, and paint correction - all available at your convenience.',
    startingPrice: 129,
    duration: 'Varies by service',
    content: [
      {
        type: 'paragraph',
        text: 'We offer a complete range of professional auto detailing services designed to keep your vehicle looking its best. From mobile detailing that comes to you, to advanced ceramic coating protection, we have everything you need to maintain and enhance your vehicle\'s appearance.'
      },
      {
        type: 'heading',
        text: 'Our Complete Service Range:'
      },
      {
        type: 'list',
        items: [
          {
            title: 'Mobile Auto Detailing',
            description: 'Professional detailing service that comes to your location - home, office, or anywhere convenient'
          },
          {
            title: 'Window Tinting',
            description: 'High-quality window tinting for UV protection, heat reduction, privacy, and enhanced appearance'
          },
          {
            title: 'Ceramic Coating',
            description: 'Advanced ceramic coating technology for long-lasting paint protection and hydrophobic properties'
          },
          {
            title: 'Paint Correction',
            description: 'Professional paint correction to remove imperfections and restore your vehicle\'s original shine'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Why Choose Our Services:'
      },
      {
        type: 'numbered-list',
        items: [
          'Certified professional technicians with years of experience',
          'Premium, eco-friendly products for superior results',
          'Mobile service available - we come to you',
          'Competitive pricing with no hidden fees',
          'Satisfaction guarantee on all services',
          'Flexible scheduling to fit your needs'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeAfter: [
      {
        before: '/pictures/ExteriorCleaningBefore.png',
        after: '/pictures/ExteriorCleaningAfter.png',
        caption: 'Complete Vehicle Transformation'
      }
    ],
    testimonials: [
      {
        name: 'Mike Chen',
        quote: 'Best detailing service I&apos;ve ever used! They came to my office and made my car look brand new. Worth every penny!',
        rating: 5
      },
      {
        name: 'Sarah Johnson',
        quote: 'Spark Ride transformed my car! The ceramic coating looks incredible and the mobile service saved me so much time. Highly recommended!',
        rating: 5
      }
    ]
  },
  'mobile-detailing': {
    title: 'Mobile Auto Detailing',
    description: 'Our comprehensive mobile detailing service brings the professional car wash experience to your doorstep.',
    startingPrice: 129,
    duration: '2-3 hours',
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
      }
    ],
    image: 'https://images.unsplash.com/photo-1621217899086-01f0e603009e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: [
      {
        before: '/pictures/InteriorCleaningBefore.png',
        after: '/pictures/InteriorCleaningAfter.png',
        caption: 'Interior Transformation'
      },
      {
        before: '/pictures/ExteriorCleaningBefore.png',
        after: '/pictures/ExteriorCleaningAfter.png',
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
  'window-tinting': {
    title: 'Window Tinting Services',
    description: 'Professional window tinting for improved comfort, privacy, and protection.',
    startingPrice: 249,
    duration: '2-4 hours',
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
      }
    ],
    image: 'https://plus.unsplash.com/premium_photo-1694444690362-8a24b98fdc59?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    beforeAfter: [
      {
        before: '/pictures/WindowTintingBefore.png',
        after: '/pictures/WindowTintingAfter.png',
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
    startingPrice: 699,
    duration: '4-6 hours',
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
  },
  'paint-correction': {
    title: 'Paint Correction Services',
    description: 'Restore your vehicle\'s paint to its original glory with professional paint correction techniques.',
    startingPrice: 399,
    duration: '3-5 hours',
    content: [
      {
        type: 'paragraph',
        text: 'Paint correction is a multi-step process that removes imperfections from your vehicle\'s paint surface, restoring it to a flawless, mirror-like finish. Our professional technicians use advanced techniques and equipment to eliminate swirl marks, scratches, oxidation, and other defects.'
      },
      {
        type: 'heading',
        text: 'What Paint Correction Includes:'
      },
      {
        type: 'list',
        items: [
          {
            title: 'Swirl Mark Removal',
            description: 'Eliminate fine scratches and swirl marks from improper washing'
          },
          {
            title: 'Scratch Repair',
            description: 'Minimize the appearance of deeper scratches and imperfections'
          },
          {
            title: 'Oxidation Removal',
            description: 'Restore faded and oxidized paint to its original color'
          },
          {
            title: 'Clay Bar Treatment',
            description: 'Remove embedded contaminants from the paint surface'
          },
          {
            title: 'Polishing & Buffing',
            description: 'Achieve a high-gloss, smooth finish'
          },
          {
            title: 'Protection Application',
            description: 'Apply wax or sealant for lasting protection'
          }
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeAfter: [
      {
        before: '/pictures/ExteriorCleaningBefore.png',
        after: '/pictures/ExteriorCleaningAfter.png',
        caption: 'Paint Correction Results'
      }
    ],
    testimonials: [
      {
        name: 'Mark S.',
        quote: 'My car looked brand new after paint correction. The scratches that bothered me for years are gone!',
        rating: 5
      },
      {
        name: 'Lisa P.',
        quote: 'Incredible results! The paint correction made my car shine like it did when I first bought it.',
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
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col font-poppins">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-[#10B5DB] hover:underline font-semibold">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  const renderContent = () => {
    return service.content.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <motion.p 
            key={index} 
            className="text-gray-600 mb-6 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {item.text}
          </motion.p>
        );
      } else if (item.type === 'heading') {
        return (
          <motion.h3 
            key={index} 
            className="text-3xl font-bold mb-6 mt-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {item.text}
          </motion.h3>
        );
      } else if (item.type === 'list') {
        return (
          <motion.div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {item.items.map((listItem, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-[#10B5DB] rounded-2xl p-3 mt-1">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{listItem.title}</h4>
                  <p className="text-gray-600">{listItem.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        );
      } else if (item.type === 'numbered-list') {
        return (
          <motion.ol 
            key={index} 
            className="space-y-4 mb-8 pl-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {item.items.map((listItem, idx) => (
              <li key={idx} className="text-gray-600 text-lg flex items-start gap-4">
                <span className="bg-[#10B5DB] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-1 flex-shrink-0">
                  {idx + 1}
                </span>
                <span>{listItem}</span>
              </li>
            ))}
          </motion.ol>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16">
        <div className="relative h-96 lg:h-screen overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
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
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service Info Cards */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#10B5DB]">${service.startingPrice}</div>
                    <div className="text-white/80">Starting Price</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#10B5DB]">{service.duration}</div>
                    <div className="text-white/80">Duration</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/booking"
                    className="bg-[#10B5DB] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#0E9AC3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center text-lg"
                  >
                    Book This Service
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 text-center text-lg"
                  >
                    View All Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderContent()}
            </motion.div>

            {/* Features */}
            <motion.div 
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
                <MapPin className="h-12 w-12 text-[#10B5DB] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">Mobile Service</h3>
                <p className="text-gray-600">We come to your location - home, office, or anywhere convenient</p>
              </div>
              <div className="text-center p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
                <Shield className="h-12 w-12 text-[#10B5DB] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">Premium Products</h3>
                <p className="text-gray-600">Professional-grade products for lasting protection and shine</p>
              </div>
              <div className="text-center p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
                <Clock className="h-12 w-12 text-[#10B5DB] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 text-xl mb-2">Time Efficient</h3>
                <p className="text-gray-600">Quick and efficient service without compromising quality</p>
              </div>
            </motion.div>

            {/* Before & After */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Before & After Results</h2>
              <div className="space-y-16">
                {service.beforeAfter.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                      <div className="relative group">
                        <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                          <Image
                            src={item.before}
                            alt={`Before ${item.caption}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 text-white px-6 py-4">
                            <span className="font-bold text-lg">Before</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative group">
                        <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                          <Image
                            src={item.after}
                            alt={`After ${item.caption}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-[#10B5DB] text-white px-6 py-4">
                            <span className="font-bold text-lg">After</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg font-semibold">{item.caption}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Customer Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-[#10B5DB] rounded-3xl p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
                <p className="text-xl mb-8 opacity-90">Book your {service.title} today and experience the Spark Ride difference</p>
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
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;