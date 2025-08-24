import React from 'react';
import { MapPin, Car, Clock, Truck, Accessibility } from 'lucide-react';

const ClinicAmenities = () => {
  const amenities = [
    {
      icon: MapPin,
      title: 'Central Location',
      description: 'Conveniently located in the heart of Hosur'
    },
    {
      icon: Car,
      title: 'Hassle-free Parking',
      description: 'Ample parking space available for patients'
    },
    {
      icon: Clock,
      title: 'Doctors 9 AM – 9 PM',
      description: 'Extended hours for your convenience'
    },
    {
      icon: Truck,
      title: 'Pickup/Drop-off',
      description: 'Transportation assistance available'
    },
    {
      icon: Accessibility,
      title: 'Wheelchair Access',
      description: 'Fully accessible facility for all patients'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Clinic Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed our clinic with your comfort and convenience in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <amenity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {amenity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicAmenities;