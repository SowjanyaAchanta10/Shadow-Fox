import React from 'react';
import { Sparkles, Drill, Scissors, Smile, Wrench, Zap, Heart, Bluetooth as Tooth, Shield, Paintbrush, Crown, Baby, Stethoscope, Braces, CheckCircle } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      icon: Sparkles,
      title: 'Teeth Cleaning & Scaling',
      description: 'Professional deep cleaning to remove plaque and tartar buildup for optimal oral health.',
      image: 'https://i.postimg.cc/br5XKMMz/Teeth-Cleaning.png'
    },
    {
      icon: Drill,
      title: 'Tooth Filling',
      description: 'Durable composite and amalgam fillings to restore damaged teeth and prevent further decay.',
      image: 'https://i.postimg.cc/zGnMjVJD/Tooth-Filling.jpg'
    },
    {
      icon: Scissors,
      title: 'Tooth Extraction',
      description: 'Safe and painless tooth removal procedures with minimal discomfort and quick healing.',
      image: 'https://images.pexels.com/photos/3779714/pexels-photo-3779714.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Smile,
      title: 'Artificial Complete Denture',
      description: 'Custom-fitted complete dentures to restore function and aesthetics for missing teeth.',
      image: 'https://mahimaadentalcare.com/wp-content/uploads/2021/12/dentures_image.jpg'
    },
    {
      icon: Wrench,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look and feel like natural teeth.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Dental-implant-illustration.jpg'
    },
    {
      icon: Zap,
      title: 'Laser Dentistry',
      description: 'Advanced laser treatments for precise, comfortable procedures with faster healing.',
      image: 'https://stdental.com/wp-content/uploads/2021/10/What-Procedures-Can-I-Use-Laser-Dentistry-For-scaled-1.jpeg'
    },
    {
      icon: Heart,
      title: 'Root Canal Therapy',
      description: 'Expert endodontic treatment to save infected teeth and eliminate pain.',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Tooth,
      title: 'Wisdom Tooth Extraction',
      description: 'Specialized removal of wisdom teeth with advanced techniques for comfort.',
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Shield,
      title: 'Fixed Partial Denture',
      description: 'Permanent bridge solutions to replace missing teeth and restore chewing function.',
      image: 'https://aluxdental.com/wp-content/uploads/2019/09/dental-bridges-1200x800.jpg'
    },
    {
      icon: Paintbrush,
      title: 'Teeth Whitening',
      description: 'Professional bleaching treatments for a brighter, more confident smile.',
      image: 'https://images.pexels.com/photos/3779711/pexels-photo-3779711.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Crown,
      title: 'Veneers',
      description: 'Ultra-thin porcelain shells to transform your smile with natural-looking results.',
      image: 'https://mypenndentist.org/wp-content/uploads/2019/05/shutterstock_1784932625-scaled.jpg'
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children in a fun, comfortable environment.',
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Stethoscope,
      title: 'Flap Surgery',
      description: 'Advanced periodontal treatment for gum disease and tissue regeneration.',
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Braces,
      title: 'Orthodontic Braces',
      description: 'Traditional metal braces to straighten teeth and correct bite issues.',
      image: 'https://lh6.googleusercontent.com/9fUMumcmvPOJGP8RtFi0GO0IlU3EziD5NwBAoUC_ekhhwCbVjzxZ4XUh8CoVHWTxlNOA-biARxRrINkeHlVehHKrVOwUIaKPYpQOMhUs1fyfDLbVQt1nLlMVA0h2ZlMFB5gjB7MA'
    },
    {
      icon: CheckCircle,
      title: 'Clear Aligners',
      description: 'Invisible orthodontic treatment for discrete teeth straightening.',
      image: 'https://images.pexels.com/photos/3779711/pexels-photo-3779711.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Dental Treatments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced dental care solutions tailored to meet your unique needs. From preventive care to complex procedures, we've got you covered.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <treatment.icon className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-rose-500 transition-colors duration-200">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Book your consultation today and take the first step towards optimal oral health.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-rose-500 font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Treatments;