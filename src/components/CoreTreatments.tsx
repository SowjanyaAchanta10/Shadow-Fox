import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Smile, Drill, Sparkles, Paintbrush, Braces } from 'lucide-react';

const CoreTreatments = () => {
  const treatments = [
    {
      icon: Scissors,
      title: 'Tooth Extraction',
      description: 'Safe and painless tooth removal procedures.'
    },
    {
      icon: Smile,
      title: 'Artificial Complete Denture',
      description: 'Complete denture solutions for missing teeth.'
    },
    {
      icon: Drill,
      title: 'Tooth Filling',
      description: 'Durable fillings to restore damaged teeth.'
    },
    {
      icon: Sparkles,
      title: 'Teeth Cleaning',
      description: 'Professional cleaning for optimal oral health.'
    },
    {
      icon: Paintbrush,
      title: 'Bleaching',
      description: 'Teeth whitening for a brighter smile.'
    },
    {
      icon: Braces,
      title: 'Orthodontic Treatment',
      description: 'Straighten teeth with modern orthodontic solutions.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental treatments tailored to meet your specific needs and ensure optimal oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <treatment.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {treatment.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/treatments"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            View Full List of Treatments
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreTreatments;