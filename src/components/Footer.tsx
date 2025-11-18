"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const packageNames = [
    "Window Tinting",
    "Ceramic Coating", 
    "Paint Correction",
    "Mobile Detailing",
    "Engine Detailing",
  ];

  const contactInfo = [
    { label: "Email", value: "info@sparkride.com" },
    { label: "Phone", value: "(123) 456-7890" },
    { label: "Address", value: "123 Main Street, City, State" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-white text-gray-800 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-8 gap-x-10 border-b border-gray-200 pb-8">
          {/* Logo + Description */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-3">
              <Image
                src="/pictures/sparkride.png"
                alt="Spark Ride Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-[#10B5DB]">Spark Ride</span>
            </div>
            <p className="text-gray-600 mt-4 max-w-sm leading-relaxed">
              Spark Ride is your destination for premium car detailing and
              maintenance. Let your car shine like new again with our expert
              services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 text-[#10B5DB]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-[#10B5DB] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 text-[#10B5DB]">
              Our Packages
            </h3>
            <ul className="space-y-2">
              {packageNames.map((pkg) => (
                <li key={pkg}>
                  <Link
                    href="/services"
                    className="text-gray-600 hover:text-[#10B5DB] transition-colors duration-300 cursor-pointer"
                  >
                    {pkg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Socials */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 text-[#10B5DB]">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <strong>{info.label}:</strong> {info.value}
                </li>
              ))}
            </ul>
            <div className="flex space-x-5 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:scale-110 transition-transform duration-300 text-[#10B5DB] hover:text-[#0E9AC3]"
                  title={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Spark Ride. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}