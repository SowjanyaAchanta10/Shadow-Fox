import React from 'react';
import { Heart, Users, Award, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Heart,
      title: 'All-in-One Care',
      description: 'Complete dental solutions for the entire family under one roof.'
    },
    {
      icon: Award,
      title: 'Experienced Doctors',
      description: 'Skilled professionals with years of expertise in dental care.'
    },
    {
      icon: Users,
      title: 'Patient-Centric Approach',
      description: 'Personalized treatment plans focused on your comfort and needs.'
    },
    {
      icon: Zap,
      title: 'Technology-Driven Services',
      description: 'Modern equipment and advanced techniques for better outcomes.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sakthi Dental Clinic?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, compassion, and cutting-edge technology to deliver exceptional dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;