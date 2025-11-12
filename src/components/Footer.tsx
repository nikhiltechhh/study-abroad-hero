import React, { useState } from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(true);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Study Destinations', href: '#destinations' },
    { name: 'Contact', href: '#contact' }
  ];

  const studyDestinations = [
    { name: 'United States', href: '#usa' },
    { name: 'United Kingdom', href: '#uk' },
    { name: 'Canada', href: '#canada' },
    { name: 'Australia', href: '#australia' },
    { name: 'Germany', href: '#germany' },
    { name: 'New Zealand', href: '#newzealand' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Hyderabad, Mahabubabad, Gadwal - India | London - United Kingdom', href: '#' },
    { icon: Phone, text: '+44 7553329935', href: '+44 7553329935' },
    { icon: Mail, text: 'info@globalpathwayoverseas.com', href: 'mailto:info@globalpathwayoverseas.com' }
  ];

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-gray-300 relative" style={{ backgroundColor: '#0a1628' }}>
      {/* Newsletter Section */}
      {/* <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-400">Get the latest updates on study abroad opportunities</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-80 text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center shadow-lg">
                <img 
                    src="https://i.ibb.co/5m6X2q0/Global-Pathway-Overseas-Logo-removebg-preview.png" 
                    alt="Logo" 
                    className="20 h-20 object-contain"
                />
                </div>

              <div>
                <h2 className="text-xl font-bold text-white">Global Pathway</h2>
                <p className="text-xs text-gray-400">Overseas Education</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner in international education. We help students achieve their dreams of studying abroad with expert guidance and comprehensive support.
            </p>
            {/* <div className="flex space-x-2 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-slate-800 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 pb-2 border-b-2 border-blue-600 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 pb-2 border-b-2 border-blue-600 inline-block">
              Study Destinations
            </h3>
            <ul className="space-y-3">
              {studyDestinations.map((destination, index) => (
                <li key={index}>
                  <a
                    href={destination.href}
                    className="text-sm hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" />
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 pb-2 border-b-2 border-blue-600 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-start group">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-500 group-hover:text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      {contact.href.startsWith('tel:') || contact.href.startsWith('mailto:') ? (
                        <a
                          href={contact.href}
                          className="text-sm leading-relaxed hover:text-blue-400 transition-colors duration-200"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-sm leading-relaxed">{contact.text}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 text-center sm:text-left">
            <p>Copyright © 2025 <span className="text-white font-medium">Global Pathway Overseas</span>. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 px-3 py-1 hover:bg-slate-800 rounded"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 px-3 py-1 hover:bg-slate-800 rounded"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )} */}
    </footer>
  );
};

export default Footer;