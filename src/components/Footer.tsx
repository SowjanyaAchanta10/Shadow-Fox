import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const treatments = [
    'Teeth Cleaning',
    'Dental Implants',
    'Root Canal Therapy',
    'Orthodontic Braces',
    'Teeth Whitening',
    'Pediatric Dentistry'
  ];

  return (
    <footer className="bg-gradient-to-r from-pink-50 to-rose-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Sakthi Dental</h3>
                <p className="text-sm text-gray-500">Clinic</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Specialized dental care for women, children & families in a modern, welcoming environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">About</Link></li>
              <li><Link to="/treatments" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Treatments</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Key Treatments */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Treatments</h4>
            <ul className="space-y-2">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <Link to="/treatments" className="text-gray-600 hover:text-rose-500 transition-colors duration-200 text-sm">
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-0.5" />
                <div>
                  <p className="text-gray-600 text-sm">Sakthi Dental Clinic</p>
                  <p className="text-gray-600 text-sm">Hosur, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-500" />
                <p className="text-gray-600 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-500" />
                <p className="text-gray-600 text-sm">info@sakthidental.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-rose-500 mt-0.5" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">9 AM - 9 PM</p>
                  <p className="text-gray-600 text-sm">All Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Sakthi Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;