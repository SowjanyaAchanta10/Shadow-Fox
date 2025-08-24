import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/j2PQbn3L/SDC-Logo-2.png" 
              alt="Sakthi Dental Clinic Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Sakthi Dental</h1>
              <p className="text-xs text-gray-500">Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-rose-500 border-b-2 border-rose-500'
                    : 'text-gray-700 hover:text-rose-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-rose-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-rose-500 bg-pink-50'
                      : 'text-gray-700 hover:text-rose-500 hover:bg-pink-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium text-center hover:shadow-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;