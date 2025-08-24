import React from 'react';
import { Shield, Heart } from 'lucide-react';

const WelcomeBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <Heart className="w-12 h-12 text-white animate-pulse" />
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You are always in safe hands
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We are ready to help, anytime. Your comfort and safety are our top priorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;