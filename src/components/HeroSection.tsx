import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 to-rose-50/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Specialized Dental Care for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                Women, Children & Families
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Experience compassionate, expert-led dental services tailored to your needs—all in a modern and welcoming environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              Fix an Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-rose-500 text-rose-500 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <Phone className="mr-2 w-5 h-5" />
              Emergency Support
            </a>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Treatments</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3779711/pexels-photo-3779711.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern dental clinic interior"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;